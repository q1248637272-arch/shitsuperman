import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const publishDir = path.join(projectRoot, "cloudflare-pages");
const pagesCachePath = path.join(projectRoot, ".wrangler", "cache", "pages.json");
const wranglerConfigPath = path.join(
  process.env.APPDATA || path.join(process.env.USERPROFILE || "", "AppData", "Roaming"),
  "xdg.config",
  ".wrangler",
  "config",
  "default.toml",
);
const clientId = "54d11594-84e4-41aa-b438-e81b8fa78ee7";
const mimeTypes = new Map([
  [".html", "text/html"],
  [".css", "text/css"],
  [".js", "application/javascript"],
  [".png", "image/png"],
  [".md", "text/markdown"],
]);

function matchTomlValue(text, key) {
  return text.match(new RegExp(`${key}\\s*=\\s*"([^"]*)"`))?.[1] || "";
}

async function readPagesConfig() {
  if (!existsSync(pagesCachePath)) {
    return { account_id: "551c4b0c4603a01b2fe7655ae18aa2ec", project_name: "shitsuperman" };
  }
  return JSON.parse(await readFile(pagesCachePath, "utf8"));
}

async function refreshWranglerToken(configText) {
  const refreshToken = matchTomlValue(configText, "refresh_token");
  if (!refreshToken) {
    throw new Error("Cloudflare 登录信息不完整，请重新登录 Wrangler 或设置 CLOUDFLARE_API_TOKEN。");
  }
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
  });
  const response = await fetch("https://dash.cloudflare.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const json = await response.json().catch(() => ({}));
  if (!response.ok || json.error || !json.access_token) {
    throw new Error("Cloudflare 登录状态已失效，请重新登录 Wrangler 或设置 CLOUDFLARE_API_TOKEN。");
  }
  const expiry = new Date(Date.now() + Number(json.expires_in || 3600) * 1000).toISOString();
  const nextRefreshToken = json.refresh_token || refreshToken;
  const nextConfig = configText
    .replace(/oauth_token\s*=\s*"[^"]*"/, `oauth_token = "${json.access_token}"`)
    .replace(/expiration_time\s*=\s*"[^"]*"/, `expiration_time = "${expiry}"`)
    .replace(/refresh_token\s*=\s*"[^"]*"/, `refresh_token = "${nextRefreshToken}"`);
  await writeFile(wranglerConfigPath, nextConfig, "utf8").catch(() => {});
  return json.access_token;
}

async function readAuthToken() {
  if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN;
  if (!existsSync(wranglerConfigPath)) {
    throw new Error("缺少 Cloudflare 凭据。请先登录 Wrangler，或设置 CLOUDFLARE_API_TOKEN 后重试。");
  }
  const configText = await readFile(wranglerConfigPath, "utf8");
  const token = matchTomlValue(configText, "oauth_token");
  const expiry = matchTomlValue(configText, "expiration_time");
  if (token && expiry && new Date(expiry) > new Date(Date.now() + 60_000)) return token;
  return refreshWranglerToken(configText);
}

function loadBlake3() {
  try {
    return require("blake3-wasm");
  } catch {}
  const npxRoot = path.join(process.env.LOCALAPPDATA || "", "npm-cache", "_npx");
  if (existsSync(npxRoot)) {
    const candidates = require("node:fs")
      .readdirSync(npxRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(npxRoot, entry.name, "node_modules", "blake3-wasm"))
      .filter((candidate) => existsSync(candidate));
    for (const candidate of candidates) {
      try {
        return require(candidate);
      } catch {}
    }
  }
  throw new Error("缺少 blake3-wasm。请先运行一次 D:\\node\\npx.cmd --yes wrangler --version 安装 Wrangler 依赖。");
}

async function walkFiles(dir, root = dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if ([".git", ".wrangler", "node_modules"].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkFiles(fullPath, root, out);
      continue;
    }
    if (!entry.isFile()) continue;
    const fileStat = await stat(fullPath);
    const relPath = path.relative(root, fullPath).split(path.sep).join("/");
    const buffer = await readFile(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    out.push({
      relPath,
      fullPath,
      buffer,
      sizeInBytes: fileStat.size,
      contentType: mimeTypes.get(ext) || "application/octet-stream",
      extension: ext.slice(1),
    });
  }
  return out;
}

async function cfFetch(pathname, options = {}, token) {
  if (!token) {
    throw new Error(`Cloudflare 凭据为空，无法请求 ${pathname}`);
  }
  const headers = new Headers(options.headers || {});
  headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(`https://api.cloudflare.com/client/v4${pathname}`, { ...options, headers });
  const text = await response.text();
  const json = text ? JSON.parse(text) : {};
  if (!response.ok || json.success === false) {
    throw new Error(JSON.stringify({ path: pathname, status: response.status, errors: json.errors, messages: json.messages }));
  }
  return json.result ?? json;
}

async function main() {
  const { account_id: accountId, project_name: projectName } = await readPagesConfig();
  const token = await readAuthToken();
  const blake3 = loadBlake3();
  const files = await walkFiles(publishDir);
  for (const file of files) {
    file.hash = blake3.hash(file.buffer.toString("base64") + file.extension).toString("hex").slice(0, 32);
  }
  const jwt = (await cfFetch(`/accounts/${accountId}/pages/projects/${projectName}/upload-token`, {}, token)).jwt;
  const hashes = files.map((file) => file.hash);
  const missing = await cfFetch(
    "/pages/assets/check-missing",
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ hashes }) },
    jwt,
  );
  const missingSet = new Set(missing);
  const toUpload = files.filter((file) => missingSet.has(file.hash));
  for (let i = 0; i < toUpload.length; i += 20) {
    const batch = toUpload.slice(i, i + 20).map((file) => ({
      key: file.hash,
      value: file.buffer.toString("base64"),
      metadata: { contentType: file.contentType },
      base64: true,
    }));
    await cfFetch(
      "/pages/assets/upload",
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(batch) },
      jwt,
    );
  }
  await cfFetch(
    "/pages/assets/upsert-hashes",
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ hashes }) },
    jwt,
  ).catch(() => {});
  const manifest = Object.fromEntries(files.map((file) => [`/${file.relPath}`, file.hash]));
  const form = new FormData();
  form.append("manifest", JSON.stringify(manifest));
  form.append("branch", "main");
  form.append("commit_message", "Shit Superman update");
  form.append("commit_dirty", "true");
  const deployment = await cfFetch(
    `/accounts/${accountId}/pages/projects/${projectName}/deployments`,
    { method: "POST", body: form },
    token,
  );
  console.log(`Uploaded ${toUpload.length}/${files.length} changed files`);
  console.log(`Deployment: ${deployment.url}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
