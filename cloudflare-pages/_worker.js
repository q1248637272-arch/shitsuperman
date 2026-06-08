const SAVE_BINDING = "SHIT_SUPERMAN_SAVES";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 60;
const PASSWORD_ITERATIONS = 120000;
const MAX_SAVE_BYTES = 768 * 1024;
const encoder = new TextEncoder();

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return handleApi(request, env, url);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleApi(request, env, url) {
  if (request.method === "OPTIONS") return json({ ok: true });
  const kv = env[SAVE_BINDING];
  if (!kv) return json({ ok: false, error: "云存档暂未完成绑定，请稍后再试。" }, 503);
  try {
    if (url.pathname === "/api/auth/register" && request.method === "POST") return await registerAccount(request, kv);
    if (url.pathname === "/api/auth/login" && request.method === "POST") return await loginAccount(request, kv);
    if (url.pathname === "/api/auth/me" && request.method === "GET") return await accountMe(request, kv);
    if (url.pathname === "/api/auth/logout" && request.method === "POST") return await logoutAccount(request, kv);
    if (url.pathname === "/api/save" && request.method === "GET") return await getSave(request, kv);
    if (url.pathname === "/api/save" && request.method === "PUT") return await putSave(request, kv);
    return json({ ok: false, error: "接口不存在。" }, 404);
  } catch (error) {
    const status = Number(error && error.status) || 500;
    return json({ ok: false, error: error && error.message ? error.message : "云存档服务异常。" }, status);
  }
}

async function registerAccount(request, kv) {
  const { username, password } = readCredentials(await readJson(request));
  const key = userKey(username.normalized);
  const existing = await kv.get(key);
  if (existing) throw httpError("账号已存在，请直接登录。", 409);
  const salt = randomId(18);
  const account = {
    id: randomId(16),
    username: username.display,
    normalizedUsername: username.normalized,
    passwordSalt: salt,
    passwordHash: await hashPassword(password, salt),
    createdAt: nowIso(),
    updatedAt: nowIso(),
  };
  await kv.put(key, JSON.stringify(account));
  return createSessionResponse(kv, account);
}

async function loginAccount(request, kv) {
  const { username, password } = readCredentials(await readJson(request));
  const account = await readAccountByName(kv, username.normalized);
  if (!account) throw httpError("账号或密码不正确。", 401);
  const passwordHash = await hashPassword(password, account.passwordSalt);
  if (passwordHash !== account.passwordHash) throw httpError("账号或密码不正确。", 401);
  return createSessionResponse(kv, account);
}

async function accountMe(request, kv) {
  const account = await requireAccount(request, kv);
  return json({ ok: true, account: publicAccount(account) });
}

async function logoutAccount(request, kv) {
  const token = readBearer(request);
  if (token) await kv.delete(sessionKey(await sha256Hex(token)));
  return json({ ok: true });
}

async function getSave(request, kv) {
  const account = await requireAccount(request, kv);
  const text = await kv.get(saveKey(account.id));
  const save = text ? safeJsonParse(text) : null;
  return json({ ok: true, save });
}

async function putSave(request, kv) {
  const account = await requireAccount(request, kv);
  const body = await readJson(request);
  const save = body && body.save && typeof body.save === "object" ? body.save : null;
  if (!save || !save.meta || typeof save.meta !== "object") throw httpError("存档格式不正确。", 400);
  const nextSave = {
    version: Math.max(1, Math.floor(Number(save.version) || 1)),
    updatedAt: nowIso(),
    best: Math.max(0, Math.floor(Number(save.best) || 0)),
    meta: save.meta,
  };
  const text = JSON.stringify(nextSave);
  if (encoder.encode(text).byteLength > MAX_SAVE_BYTES) throw httpError("存档过大，暂时无法上传。", 413);
  await kv.put(saveKey(account.id), text);
  return json({ ok: true, save: nextSave });
}

async function createSessionResponse(kv, account) {
  const token = randomId(32);
  const tokenHash = await sha256Hex(token);
  await kv.put(sessionKey(tokenHash), JSON.stringify({
    accountId: account.id,
    normalizedUsername: account.normalizedUsername,
    createdAt: nowIso(),
  }), { expirationTtl: SESSION_TTL_SECONDS });
  return json({ ok: true, token, account: publicAccount(account) });
}

async function requireAccount(request, kv) {
  const token = readBearer(request);
  if (!token) throw httpError("请先登录账号。", 401);
  const sessionText = await kv.get(sessionKey(await sha256Hex(token)));
  const session = sessionText ? safeJsonParse(sessionText) : null;
  if (!session || !session.normalizedUsername) throw httpError("登录已过期，请重新登录。", 401);
  const account = await readAccountByName(kv, session.normalizedUsername);
  if (!account || account.id !== session.accountId) throw httpError("登录已过期，请重新登录。", 401);
  return account;
}

async function readAccountByName(kv, normalizedUsername) {
  const text = await kv.get(userKey(normalizedUsername));
  return text ? safeJsonParse(text) : null;
}

function readCredentials(body) {
  const username = normalizeUsername(body && body.username);
  const password = String((body && body.password) || "");
  if (password.length < 4 || password.length > 64) throw httpError("密码需要 4-64 个字符。", 400);
  return { username, password };
}

function normalizeUsername(input) {
  const display = String(input || "").normalize("NFKC").trim();
  const length = [...display].length;
  if (length < 2 || length > 24) throw httpError("账号需要 2-24 个字符。", 400);
  if (/[\u0000-\u001f\u007f]/.test(display)) throw httpError("账号不能包含控制字符。", 400);
  return { display, normalized: display.toLocaleLowerCase("zh-CN") };
}

async function readJson(request) {
  const text = await request.text();
  if (!text) return {};
  if (encoder.encode(text).byteLength > MAX_SAVE_BYTES + 4096) throw httpError("请求内容过大。", 413);
  try {
    return JSON.parse(text);
  } catch {
    throw httpError("请求 JSON 格式不正确。", 400);
  }
}

function publicAccount(account) {
  return {
    id: account.id,
    username: account.username,
    createdAt: account.createdAt,
  };
}

async function hashPassword(password, salt) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({
    name: "PBKDF2",
    hash: "SHA-256",
    salt: base64UrlToBytes(salt),
    iterations: PASSWORD_ITERATIONS,
  }, key, 256);
  return bytesToBase64Url(new Uint8Array(bits));
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function readBearer(request) {
  const header = request.headers.get("authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function randomId(bytes) {
  const array = new Uint8Array(bytes);
  crypto.getRandomValues(array);
  return bytesToBase64Url(array);
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function userKey(username) {
  return `user:${username}`;
}

function sessionKey(tokenHash) {
  return `session:${tokenHash}`;
}

function saveKey(accountId) {
  return `save:${accountId}`;
}

function nowIso() {
  return new Date().toISOString();
}

function httpError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}
