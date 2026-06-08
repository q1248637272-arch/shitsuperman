(() => {
  "use strict";

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const gameShell = document.querySelector(".game-shell");
  const orientationHint = document.getElementById("orientationHint");
  const orientationFullscreenButton = document.getElementById("orientationFullscreenButton");
  const scoreText = document.getElementById("scoreText");
  const bestLabel = document.getElementById("bestLabel");
  const bestText = document.getElementById("bestText");
  const levelText = document.getElementById("levelText");
  const powerText = document.getElementById("powerText");
  const healthBar = document.getElementById("healthBar");
  const energyBar = document.getElementById("energyBar");
  const expBar = document.getElementById("expBar");
  const bossHud = document.getElementById("bossHud");
  const bossNameText = document.getElementById("bossNameText");
  const bossPressureText = document.getElementById("bossPressureText");
  const bossBar = document.getElementById("bossBar");
  const runPowerText = document.getElementById("runPowerText");
  const missionHud = document.getElementById("missionHud");
  const missionText = document.getElementById("missionText");
  const menuPanel = document.getElementById("menuPanel");
  const panelCopy = document.getElementById("panelCopy");
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  const homeButton = document.getElementById("homeButton");
  const endlessModeButton = document.getElementById("endlessModeButton");
  const stageModeButton = document.getElementById("stageModeButton");
  const adventureModeButton = document.getElementById("adventureModeButton");
  const dailyModeButton = document.getElementById("dailyModeButton");
  const coinText = document.getElementById("coinText");
  const materialText = document.getElementById("materialText");
  const poopCoinText = document.getElementById("poopCoinText");
  const evoStoneText = document.getElementById("evoStoneText");
  const metaLevelText = document.getElementById("metaLevelText");
  const evolutionText = document.getElementById("evolutionText");
  const activeTitleText = document.getElementById("activeTitleText");
  const inventoryText = document.getElementById("inventoryText");
  const combatPowerText = document.getElementById("combatPowerText");
  const attributeText = document.getElementById("attributeText");
  const equipmentText = document.getElementById("equipmentText");
  const stagePage = document.getElementById("stagePage");
  const stageSummary = document.getElementById("stageSummary");
  const stageGrid = document.getElementById("stageGrid");
  const stageStartButton = document.getElementById("stageStartButton");
  const upgradeHeroButton = document.getElementById("upgradeHeroButton");
  const evolveHeroButton = document.getElementById("evolveHeroButton");
  const signInButton = document.getElementById("signInButton");
  const signInText = document.getElementById("signInText");
  const growthPageButton = document.getElementById("growthPageButton");
  const mailPageButton = document.getElementById("mailPageButton");
  const heroPageButton = document.getElementById("heroPageButton");
  const mountPageButton = document.getElementById("mountPageButton");
  const dronePageButton = document.getElementById("dronePageButton");
  const equipmentPageButton = document.getElementById("equipmentPageButton");
  const shopPageButton = document.getElementById("shopPageButton");
  const achievementPageButton = document.getElementById("achievementPageButton");
  const rulesPageButton = document.getElementById("rulesPageButton");
  const moduleHeader = document.getElementById("moduleHeader");
  const moduleBackButton = document.getElementById("moduleBackButton");
  const moduleTitle = document.getElementById("moduleTitle");
  const growthPage = document.getElementById("growthPage");
  const mailPage = document.getElementById("mailPage");
  const mailSummary = document.getElementById("mailSummary");
  const mailList = document.getElementById("mailList");
  const claimAllMailButton = document.getElementById("claimAllMailButton");
  const refreshMailButton = document.getElementById("refreshMailButton");
  const heroPage = document.getElementById("heroPage");
  const heroGrid = document.getElementById("heroGrid");
  const heroTrialAccessText = document.getElementById("heroTrialAccessText");
  const buyHeroTrialPassButton = document.getElementById("buyHeroTrialPassButton");
  const mountPage = document.getElementById("mountPage");
  const mountGrid = document.getElementById("mountGrid");
  const mountText = document.getElementById("mountText");
  const mountTrialAccessText = document.getElementById("mountTrialAccessText");
  const buyMountTrialPassButton = document.getElementById("buyMountTrialPassButton");
  const dronePage = document.getElementById("dronePage");
  const droneGrid = document.getElementById("droneGrid");
  const droneText = document.getElementById("droneText");
  const equipmentPage = document.getElementById("equipmentPage");
  const shopPage = document.getElementById("shopPage");
  const shopDetail = document.getElementById("shopDetail");
  const shopCards = Array.from(document.querySelectorAll(".shop-card[data-shop-key]"));
  const achievementPage = document.getElementById("achievementPage");
  const rulesPage = document.getElementById("rulesPage");
  const achievementSummary = document.getElementById("achievementSummary");
  const achievementGrid = document.getElementById("achievementGrid");
  const equippedGrid = document.getElementById("equippedGrid");
  const equipmentBagGrid = document.getElementById("equipmentBagGrid");
  const sellWeakEquipmentButton = document.getElementById("sellWeakEquipmentButton");
  const sellAllEquipmentButton = document.getElementById("sellAllEquipmentButton");
  const selectPoopHeroButton = document.getElementById("selectPoopHeroButton");
  const selectIkunHeroButton = document.getElementById("selectIkunHeroButton");
  const buyShieldButton = document.getElementById("buyShieldButton");
  const buyMagnetButton = document.getElementById("buyMagnetButton");
  const buyEnergyButton = document.getElementById("buyEnergyButton");
  const buyLuckyBoxButton = document.getElementById("buyLuckyBoxButton");
  const buyMaterialPackButton = document.getElementById("buyMaterialPackButton");
  const buyBattlePackButton = document.getElementById("buyBattlePackButton");
  const buyGearBoxButton = document.getElementById("buyGearBoxButton");
  const buyRerollButton = document.getElementById("buyRerollButton");
  const buyReviveButton = document.getElementById("buyReviveButton");
  const buyStormButton = document.getElementById("buyStormButton");
  const buyWingButton = document.getElementById("buyWingButton");
  const redeemForm = document.getElementById("redeemForm");
  const redeemCodeInput = document.getElementById("redeemCodeInput");
  const redeemCodeButton = document.getElementById("redeemCodeButton");
  const redeemCodeStatus = document.getElementById("redeemCodeStatus");
  const pauseButton = document.getElementById("pauseButton");
  const endRunButton = document.getElementById("endRunButton");
  const muteButton = document.getElementById("muteButton");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const controlSideButton = document.getElementById("controlSideButton");
  const tapMoveButton = document.getElementById("tapMoveButton");
  const dragMoveButton = document.getElementById("dragMoveButton");
  const qualityAutoButton = document.getElementById("qualityAutoButton");
  const qualitySmoothButton = document.getElementById("qualitySmoothButton");
  const useShieldButton = document.getElementById("useShieldButton");
  const useMagnetButton = document.getElementById("useMagnetButton");
  const useEnergyButton = document.getElementById("useEnergyButton");
  const useStormButton = document.getElementById("useStormButton");
  const ultimateButton = document.getElementById("ultimateButton");
  const rewardToast = document.getElementById("rewardToast");
  const perkChoice = document.getElementById("perkChoice");
  const perkChoiceGrid = document.getElementById("perkChoiceGrid");
  const perkChoiceHint = document.getElementById("perkChoiceHint");
  const perkRerollButton = document.getElementById("perkRerollButton");

  const assets = {
    background: loadImage("assets/background.png", true),
    backgroundCityRefit: loadImage("assets/background-city-refit.png"),
    backgroundDeep: loadImage("assets/background-deep.png", true),
    backgroundDeepRefit: loadImage("assets/background-deep-refit.png"),
    backgroundAdventure: loadImage("assets/background-adventure.png", true),
    backgroundAdventureRefit: loadImage("assets/background-adventure-refit.png"),
    backgroundElementRift: loadImage("assets/background-element-rift.png", true),
    backgroundStarTrail: loadImage("assets/background-star-trail.png", true),
    backgroundPurificationTide: loadImage("assets/background-purification-tide.png", true),
    backgroundMirrorCurrent: loadImage("assets/background-mirror-current.png", true),
    backgroundAuroraForge: loadImage("assets/background-aurora-forge.png", true),
    mountAtlas: loadImage("assets/mount-atlas.png", true),
    hero: loadImage("assets/hero.png"),
    heroEvolution1: loadImage("assets/hero-evolution-1.png", true),
    heroEvolution2: loadImage("assets/hero-evolution-2.png", true),
    heroEvolution3: loadImage("assets/hero-evolution-3.png", true),
    heroEvolution4: loadImage("assets/hero-evolution-4.png", true),
    heroIkunSheet: loadImage("assets/hero-ikun-sheet.png", true),
    heroJetSheet: loadImage("assets/hero-jet-sheet.png", true),
    heroAlchemistSheet: loadImage("assets/hero-alchemist-sheet.png", true),
    heroPaperSheet: loadImage("assets/hero-paper-sheet.png", true),
    heroDragonWood: loadImage("assets/hero-dragonWood.png", true),
    heroTigerMetal: loadImage("assets/hero-tigerMetal.png", true),
    heroVoidChef: loadImage("assets/hero-void-chef.png", true),
    heroNeonMedic: loadImage("assets/hero-neon-medic.png", true),
    mountGravityCauldron: loadImage("assets/mount-gravity-cauldron.png", true),
    mountAmbulanceHover: loadImage("assets/mount-ambulance-hover.png", true),
    dronePoopOrb: loadImage("assets/drone-poop-orb.png", true),
    droneAquaNeedle: loadImage("assets/drone-aqua-needle.png", true),
    droneMedicHalo: loadImage("assets/drone-medic-halo.png", true),
    droneVoidCauldron: loadImage("assets/drone-void-cauldron.png", true),
    droneTigerSpark: loadImage("assets/drone-tiger-spark.png", true),
    equipmentIcons: loadImage("assets/equipment-icons.png", true),
    laneStarTrail: loadImage("assets/lane-star-trail.png", true),
    laneMirrorCurrent: loadImage("assets/lane-mirror-current.png", true),
    laneForgeHeat: loadImage("assets/lane-forge-heat.png", true),
    iconMountCore: loadImage("assets/icon-mount-core.png", true),
    iconComboSigil: loadImage("assets/icon-combo-sigil.png", true),
    iconPurificationCore: loadImage("assets/icon-purification-core.png", true),
    iconBreakCore: loadImage("assets/icon-break-core.png", true),
    iconStarTrail: loadImage("assets/icon-star-trail.png", true),
    iconMirrorShard: loadImage("assets/icon-mirror-shard.png", true),
    iconMirrorBurst: loadImage("assets/icon-mirror-burst.png", true),
    iconForgeSigil: loadImage("assets/icon-forge-sigil.png", true),
    iconForgeWave: loadImage("assets/icon-forge-wave.png", true),
    shopIcons: loadImage("assets/shop-icons.png", true),
    perkShopIcons: loadImage("assets/perk-shop-icons.png", true),
    dailyBosses: loadImage("assets/daily-bosses.png", true),
    ikunChickenPeck: loadImage("assets/ikun-chicken-peck.png", true),
    toilet: loadImage("assets/toilet.png"),
    pickupShield: loadImage("assets/pickup-shield.png"),
    pickupMagnet: loadImage("assets/pickup-magnet.png"),
    pickupEnergy: loadImage("assets/pickup-energy.png"),
    obstacleBarricade: loadImage("assets/obstacle-barricade.png"),
    obstacleSludge: loadImage("assets/obstacle-sludge.png"),
    obstacleBarricadeRefit: loadImage("assets/obstacle-barricade-refit.png"),
    obstacleSludgeRefit: loadImage("assets/obstacle-sludge-refit.png"),
    bossToiletKing: loadImage("assets/boss-toilet-king.png", true),
    bossPlungerGeneral: loadImage("assets/boss-plunger-general.png", true),
    bossStinkDoctor: loadImage("assets/boss-stink-doctor.png", true),
    bossBubbleQueen: loadImage("assets/boss-bubble-queen.png", true),
    bossSewerTyrant: loadImage("assets/boss-sewer-tyrant.png", true),
    bossGoldenDemon: loadImage("assets/boss-golden-demon.png", true),
    bossToxicPump: loadImage("assets/boss-toxic-pump.png", true),
    bossMixerBeast: loadImage("assets/boss-mixer-beast.png", true),
    bossWasteCore: loadImage("assets/boss-waste-core.png", true),
    adventureBosses: loadImage("assets/adventure-bosses.png", true),
    adventureRouteCompass: loadImage("assets/adventure-route-compass.png", true),
    stageContractBadge: loadImage("assets/stage-contract-badge.png", true),
  };

  const MAP_WARMUP_ASSET_KEYS = ["backgroundCityRefit", "background", "backgroundDeepRefit", "backgroundDeep", "backgroundAdventureRefit", "backgroundAdventure", "adventureRouteCompass", "stageContractBadge", "backgroundElementRift", "backgroundStarTrail", "backgroundPurificationTide", "backgroundMirrorCurrent", "backgroundAuroraForge", "laneStarTrail", "laneMirrorCurrent", "laneForgeHeat", "iconMountCore", "iconComboSigil", "iconPurificationCore", "iconBreakCore", "iconStarTrail", "iconMirrorShard", "iconMirrorBurst", "iconForgeSigil", "iconForgeWave"];
  const BOSS_WARMUP_ASSET_KEYS = [
    "bossToiletKing",
    "bossPlungerGeneral",
    "bossStinkDoctor",
    "bossBubbleQueen",
    "bossSewerTyrant",
    "bossGoldenDemon",
    "bossToxicPump",
    "bossMixerBeast",
    "bossWasteCore",
    "dailyBosses",
    "adventureBosses",
  ];
  const HERO_WARMUP_ASSET_KEYS = [
    "heroEvolution1",
    "heroEvolution2",
    "heroEvolution3",
    "heroEvolution4",
    "heroIkunSheet",
    "heroJetSheet",
    "heroAlchemistSheet",
    "heroPaperSheet",
    "heroDragonWood",
    "heroTigerMetal",
    "heroVoidChef",
    "heroNeonMedic",
    "mountGravityCauldron",
    "mountAmbulanceHover",
    "dronePoopOrb",
    "droneAquaNeedle",
    "droneMedicHalo",
    "droneVoidCauldron",
    "droneTigerSpark",
    "ikunChickenPeck",
    "mountAtlas",
  ];
  const warmedAssetKeys = new Set();
  let warmupScheduled = false;

  const bossProfiles = [
    { key: "toiletKing", name: "马桶霸王", asset: "bossToiletKing", attack: "poopVolley", color: "#8b4f25", hp: 1.7, damage: 1.25, cadence: 0.92 },
    { key: "plungerGeneral", name: "皮搋将军", asset: "bossPlungerGeneral", attack: "plungerCharge", color: "#ff5650", hp: 1.95, damage: 1.45, cadence: 0.78 },
    { key: "stinkDoctor", name: "臭气博士", asset: "bossStinkDoctor", attack: "stinkLab", color: "#89a85c", hp: 2.15, damage: 1.55, cadence: 0.85 },
    { key: "bubbleQueen", name: "肥皂泡女王", asset: "bossBubbleQueen", attack: "bubbleStorm", color: "#9de8ff", hp: 2.35, damage: 1.65, cadence: 0.72 },
    { key: "sewerTyrant", name: "下水道暴君", asset: "bossSewerTyrant", attack: "sewerBarrage", color: "#5f6f4b", hp: 2.75, damage: 1.85, cadence: 0.68 },
    { key: "goldenDemon", name: "黄金马桶魔王", asset: "bossGoldenDemon", attack: "demonRain", color: "#f5c84b", hp: 3.35, damage: 2.15, cadence: 0.58 },
    { key: "toxicPump", name: "毒液泵王", asset: "bossToxicPump", attack: "toxicPump", color: "#a7f04a", hp: 3.55, damage: 2.05, cadence: 0.78 },
    { key: "mixerBeast", name: "钢铁搅拌兽", asset: "bossMixerBeast", attack: "mixerBlade", color: "#ff8d54", hp: 3.9, damage: 2.25, cadence: 0.72 },
    { key: "wasteCore", name: "废都核心魔", asset: "bossWasteCore", attack: "wasteCore", color: "#c45dff", hp: 4.45, damage: 2.55, cadence: 0.66 },
    { key: "cloudClogCyclops", name: "云塞独眼", asset: "adventureBosses", frame: 0, frameCount: 3, attack: "cycloneClog", color: "#b77a34", hp: 4.85, damage: 2.62, cadence: 0.74 },
    { key: "slimeDuchess", name: "生化黏液女爵", asset: "adventureBosses", frame: 1, frameCount: 3, attack: "slimeCourt", color: "#a7f04a", hp: 5.25, damage: 2.72, cadence: 0.7 },
    { key: "skySewerLeviathan", name: "天空下水道龙", asset: "adventureBosses", frame: 2, frameCount: 3, attack: "leviathanWave", color: "#5bded4", hp: 5.95, damage: 2.92, cadence: 0.66 },
  ];

  const dailyBossProfiles = [
    { key: "percentCrusher", name: "百分碾压者", asset: "dailyBosses", frame: 0, frameCount: 3, attack: "plungerCharge", color: "#ff5650", hp: 15, damage: 1.12, cadence: 1.24, percentDamage: 0.049 },
    { key: "interestDevourer", name: "利息吞噬者", asset: "dailyBosses", frame: 1, frameCount: 3, attack: "bubbleStorm", color: "#f5c84b", hp: 16.5, damage: 1.08, cadence: 1.18, percentDamage: 0.046 },
    { key: "rottenTimekeeper", name: "腐烂钟魔", asset: "dailyBosses", frame: 2, frameCount: 3, attack: "toxicPump", color: "#a7f04a", hp: 18, damage: 1.06, cadence: 1.16, percentDamage: 0.047 },
  ];

  const heroProfiles = [
    { key: "poop", name: "大便超人", stat: "便便弹 · 黄金大便能量波", asset: "hero", unlocked: true, power: 1, ultimate: "poop" },
    { key: "ikun", name: "蔡徐坤", stat: "鸡啄发射 · 鸡鸣冲击波", asset: "heroIkunSheet", sheet: true, unlocked: false, unlockDay: 3, power: 1.045, ultimate: "ikun" },
    { key: "jet", name: "喷射马桶骑士", stat: "水压飞弹 · 超压冲水炮 · 全图滑动", asset: "heroJetSheet", sheet: true, unlocked: false, unlockDay: 5, power: 1.06, freeMove: true, ultimate: "jet" },
    { key: "alchemist", name: "臭气炼金师", stat: "腐蚀毒瓶 · 臭气炼成阵", asset: "heroAlchemistSheet", sheet: true, unlocked: false, unlockDay: 7, power: 1.04, ultimate: "alchemist" },
    { key: "paper", name: "纸卷法师", stat: "追踪纸卷 · 纸卷黑洞", asset: "heroPaperSheet", sheet: true, unlocked: false, unlockDay: 10, power: 1.035, ultimate: "paper" },
    { key: "dragonWood", name: "青木辰龙", stat: "青龙星藤 · 万叶龙域 · 15日签到传说", asset: "heroDragonWood", canvas: true, unlocked: false, unlockDay: 15, power: 1.16, ultimate: "dragonWood" },
    { key: "voidChef", name: "虚空厨神", stat: "黑洞锅铲 · 虚空锅炉 · 18日签到控制", asset: "heroVoidChef", canvas: true, unlocked: false, unlockDay: 18, power: 1.17, ultimate: "voidChef" },
    { key: "neonMedic", name: "霓虹医师", stat: "急救光针 · 霓虹护幕 · 24日签到守护", asset: "heroNeonMedic", canvas: true, unlocked: false, unlockDay: 24, power: 1.14, ultimate: "neonMedic" },
    { key: "tigerMetal", name: "白虎庚金", stat: "庚金虎魄 · 天裂万斩 · 30日签到神话", asset: "heroTigerMetal", canvas: true, unlocked: false, unlockDay: 30, power: 1.22, ultimate: "tigerMetal" },
  ];
  const heroProfileMap = heroProfiles.reduce((map, profile) => {
    map[profile.key] = profile;
    return map;
  }, {});

  const mountProfiles = [
    {
      key: "none",
      name: "不乘坐坐骑",
      short: "无坐骑",
      desc: "保持原始飞行姿态，不获得坐骑属性和自动技能。",
      skill: "自由飞行",
      color: "#fff8e8",
      free: true,
      unlockCoins: 0,
      upgradeBase: 0,
    },
    {
      key: "plungerBoard",
      name: "皮搋飞板",
      short: "飞板",
      desc: "危险贴脸时自动侧冲，短暂无敌并推慢来袭弹幕。",
      skill: "闪避冲刺",
      color: "#9de8ff",
      unlockCoins: 0,
      upgradeBase: 520,
      atlasFrame: 0,
      spectacle: 1,
    },
    {
      key: "slimeSkate",
      name: "黏液滑板",
      short: "滑板",
      desc: "满能量后铺开黏液滑流，减速敌人并清掉一波小弹幕。",
      skill: "黏液滑流",
      color: "#a7f04a",
      unlockCoins: 2800,
      upgradeBase: 940,
      atlasFrame: 1,
      spectacle: 1.25,
    },
    {
      key: "thunderSeat",
      name: "雷云马桶",
      short: "雷云",
      desc: "靠近危险和重击会积雷，满能量后释放连锁闪电。",
      skill: "连锁闪电",
      color: "#c45dff",
      unlockCoins: 7600,
      upgradeBase: 1680,
      atlasFrame: 2,
      spectacle: 1.55,
    },
    {
      key: "rocketToilet",
      name: "烈焰火箭马桶",
      short: "火箭",
      desc: "高速推进型坐骑，能量满时喷射突进，清理前方威胁并获得短暂无敌。",
      skill: "烈焰突进",
      color: "#ff8d54",
      unlockCoins: 12000,
      upgradeBase: 2380,
      atlasFrame: 3,
      spectacle: 1.8,
    },
    {
      key: "crystalDragon",
      name: "晶翼便龙",
      short: "晶龙",
      desc: "华丽防御型坐骑，展开晶翼冻结弹幕，并给 Boss 追加破防压力。",
      skill: "晶翼冻结",
      color: "#54d0ff",
      unlockCoins: 18000,
      upgradeBase: 3200,
      atlasFrame: 4,
      spectacle: 2.05,
    },
    {
      key: "nebulaComet",
      name: "星河彗星座",
      short: "彗星",
      desc: "终局爆发型坐骑，召唤星环轰击敌群和 Boss，画面最炫但培养更昂贵。",
      skill: "星环轰击",
      color: "#fff1a6",
      unlockCoins: 26000,
      upgradeBase: 4600,
      atlasFrame: 5,
      spectacle: 2.35,
    },
    {
      key: "woodDragonBoat",
      name: "青木龙舟",
      short: "龙舟",
      desc: "辰龙与木元素共鸣，满能后展开藤蔓航道，减速弹幕、治疗英雄并压制 Boss。",
      skill: "青龙藤界",
      color: "#35d07f",
      unlockCoins: 32000,
      unlockDay: 15,
      upgradeBase: 5400,
      atlasFrame: 6,
      spectacle: 2.65,
    },
    {
      key: "gravityCauldron",
      name: "引力锅炉车",
      short: "锅炉",
      desc: "控场型飞行锅炉，满能量后坍缩出小型引力井，拖慢威胁、拉散弹幕并压制 Boss 破防。",
      skill: "引力坍缩",
      color: "#33f0df",
      unlockCoins: 36000,
      unlockDay: 18,
      upgradeBase: 6200,
      asset: "mountGravityCauldron",
      spectacle: 2.78,
    },
    {
      key: "ambulanceHover",
      name: "急救悬浮舱",
      short: "急救舱",
      desc: "守护型悬浮坐骑，低血或 Boss 压力下自动展开急救幕，回血护盾并冲散近身威胁。",
      skill: "急救护幕",
      color: "#54d0ff",
      unlockCoins: 39000,
      unlockDay: 24,
      upgradeBase: 6500,
      asset: "mountAmbulanceHover",
      spectacle: 2.62,
    },
    {
      key: "metalTigerChariot",
      name: "白虎金轮",
      short: "金轮",
      desc: "寅虎与金元素铸成的高速战车，触发时向前切出庚金斩波，适合硬碰 Boss 弹幕。",
      skill: "白虎斩轮",
      color: "#fff8e8",
      unlockCoins: 42000,
      unlockDay: 30,
      upgradeBase: 6800,
      atlasFrame: 7,
      spectacle: 2.9,
    },
    {
      key: "fiveElementKirin",
      name: "五行麒麟座",
      short: "麒麟",
      desc: "轮转金木水火土五行的终局坐骑，冷却更长，但会同时清场、回能、破防和护身。",
      skill: "五行轮转",
      color: "#ffe37a",
      unlockCoins: 68000,
      upgradeBase: 9200,
      atlasFrame: 8,
      spectacle: 3.25,
    },
  ];
  const mountProfileMap = mountProfiles.reduce((map, profile) => {
    map[profile.key] = profile;
    return map;
  }, {});

  const droneProfiles = [
    {
      key: "poopOrb",
      name: "便便圆翼僚机",
      short: "圆翼",
      desc: "均衡补刀型，稳定发射便弹并在高天赋等级获得轻微穿透。",
      skill: "稳定补刀",
      color: "#f5c84b",
      asset: "dronePoopOrb",
      free: true,
      unlockCoins: 0,
      unlockMaterials: 0,
      cadence: 1.2,
      minCadence: 0.82,
    },
    {
      key: "aquaNeedle",
      name: "星蓝水针僚机",
      short: "水针",
      desc: "高速牵制型，发射水针推慢敌人，适合清理密集小怪。",
      skill: "水针减速",
      color: "#54d0ff",
      asset: "droneAquaNeedle",
      unlockCoins: 90000,
      unlockMaterials: 260,
      unlockStage: 8,
      cadence: 1.06,
      minCadence: 0.74,
    },
    {
      key: "medicHalo",
      name: "霓虹医疗环僚机",
      short: "医疗环",
      desc: "守护支援型，发射霓虹针并在压力局面补护盾和生命。",
      skill: "急救护盾",
      color: "#9de8ff",
      asset: "droneMedicHalo",
      unlockCoins: 140000,
      unlockMaterials: 420,
      unlockStage: 14,
      cadence: 1.34,
      minCadence: 0.92,
    },
    {
      key: "voidCauldron",
      name: "虚空引力锅僚机",
      short: "引力锅",
      desc: "控场牵引型，发射虚空刃拖慢弹幕和敌人，并压制 Boss 破防条。",
      skill: "虚空牵引",
      color: "#33f0df",
      asset: "droneVoidCauldron",
      unlockCoins: 220000,
      unlockMaterials: 620,
      unlockStage: 22,
      cadence: 1.48,
      minCadence: 1.02,
    },
    {
      key: "tigerSpark",
      name: "白虎电刃僚机",
      short: "虎刃",
      desc: "Boss 压制型，发射白虎电刃造成高破防压力。",
      skill: "白虎破防",
      color: "#ffe37a",
      asset: "droneTigerSpark",
      unlockCoins: 320000,
      unlockMaterials: 860,
      unlockStage: 30,
      cadence: 1.6,
      minCadence: 1.1,
    },
  ];
  const droneProfileMap = droneProfiles.reduce((map, profile) => {
    map[profile.key] = profile;
    return map;
  }, {});

  const keys = new Set();
  const particles = [];
  const projectiles = [];
  const hazards = [];
  const pickups = [];
  const floaters = [];
  let boss = null;
  let rewardToastTimer = 0;
  let systemToastTimer = 0;
  const MAX_HERO_LEVEL = 50;
  const ENDLESS_EVO_STONE_MILESTONES = [500000, 1000000, 2500000, 5000000];
  const SCORE_GAIN_MULTIPLIER = 10;
  const STAGE_TARGET_SCORE_MULTIPLIER = 10;
  const ADVENTURE_TARGET_SCORE_MULTIPLIER = 10;
  const ADVENTURE_CONTRACT_REWARD_SCALE = 1.18;
  const ADVENTURE_SUPPORT_THRESHOLDS = [25, 50, 75, 100];
  const ENDLESS_BOSS_PROGRESS_MULTIPLIER = 5;
  const STAGE_BOSS_POWER_SCALE = 2.4;
  const ADVENTURE_BOSS_POWER_SCALE = 3.15;
  const DAILY_BOSS_POWER_MULTIPLIER = 20;
  const BOSS_SIZE_SCALE = 0.68;
  const BOSS_ATTACK_SPEED_SCALE = 0.72;
  const BOSS_ATTACK_RATE_SCALE = 0.5625;
  const BOSS_PROJECTILE_DENSITY_SCALE = 0.9;
  const HAZARD_SPAWN_INTERVAL_SCALE = 1.12;
  const REDEEM_CODES = [
    {
      id: "pc_reward_20260608_a",
      hash: "dd7363ad94ad6737fb7994daec4de0e03c388176089e5f96c14714fec0b82300",
      reward: { poopCoins: 10000 },
    },
  ];
  const PICKUP_SIZE_SCALE = 1.3;
  const SCREEN_SHAKE_ENABLED = false;
  const SCENE_TRANSITION_DURATION = 0.92;
  const SCENE_TRANSITION_LOAD_WINDOW = 1.18;
  const MAX_ACTIVE_PICKUPS = 6;
  const HERO_ATTACK_SPEED_SCALE = 0.5;
  const HERO_PROJECTILE_SIZE_SCALE = 0.75;
  const HERO_MIN_ATTACKS_PER_SECOND = 1 * HERO_ATTACK_SPEED_SCALE;
  const HERO_MAX_ATTACKS_PER_SECOND = 5 * HERO_ATTACK_SPEED_SCALE;
  const HERO_MIN_ATTACK_INTERVAL = 1 / HERO_MAX_ATTACKS_PER_SECOND;
  const HERO_LEVEL_EVOLUTION_ATTACK_GROWTH_CAP = 2;
  const HERO_TEMP_ATTACK_GROWTH_CAP = 1.65;
  const HERO_BASE_ATTACKS_PER_SECOND = {
    poop: 1.08 * HERO_ATTACK_SPEED_SCALE,
    ikun: 1.16 * HERO_ATTACK_SPEED_SCALE,
    jet: 1.28 * HERO_ATTACK_SPEED_SCALE,
    alchemist: 1.02 * HERO_ATTACK_SPEED_SCALE,
    paper: 1.12 * HERO_ATTACK_SPEED_SCALE,
    dragonWood: 1.06 * HERO_ATTACK_SPEED_SCALE,
    voidChef: 1.04 * HERO_ATTACK_SPEED_SCALE,
    neonMedic: 1.14 * HERO_ATTACK_SPEED_SCALE,
    tigerMetal: 1.22 * HERO_ATTACK_SPEED_SCALE,
  };
  const STRONG_ATTACK_CRIT_BONUS = 4;
  const HARD_TRIAL_UNLOCK_DAY = 15;
  const TRIAL_FREE_RUNS_PER_DAY = 3;
  const TRIAL_DAY_PASS_POOP_COST = 3;
  const MOUNT_TRIAL_GOLD_THRESHOLD = 2600000;
  const MOUNT_UNLOCK_GOLD_COST_MULTIPLIER = 100;
  const MOUNT_UNLOCK_POOP_COST_DIVISOR = 4000;
  const BOSS_POOP_COIN_DROP_RATE = 0.005;
  const MAIL_HISTORY_LIMIT = 42;
  const HOLIDAY_MAIL_REWARD_VERSION = "v3";
  const HOLIDAY_POOP_COIN_CRIT_RATE = 0.3;
  const HOLIDAY_MAILS_2026 = [
    { key: "newyear", name: "元旦", start: "2026-01-01", end: "2026-01-03", blessing: "新年快乐，愿新的飞行记录从满能量开局。", reward: { coins: 18000, materials: 520, poopCoins: 10, shield: 2, energy: 2, reroll: 1 } },
    { key: "spring", name: "春节", start: "2026-02-15", end: "2026-02-23", blessing: "春节快乐，祝一路爆竹开道、大奖连连。", reward: { coins: 52000, materials: 1800, poopCoins: 25, shield: 5, magnet: 4, energy: 5, storm: 2, wing: 2, revive: 1, stone: 1 } },
    { key: "qingming", name: "清明", start: "2026-04-04", end: "2026-04-06", blessing: "清风相伴，愿每一次起飞都稳稳穿过雨雾。", reward: { coins: 16000, materials: 540, poopCoins: 10, shield: 2, magnet: 1, energy: 2, wing: 1 } },
    { key: "labor", name: "劳动节", start: "2026-05-01", end: "2026-05-05", blessing: "劳动节快乐，辛苦练出的手感值得一份厚补给。", reward: { coins: 28000, materials: 960, poopCoins: 10, shield: 3, magnet: 2, energy: 3, storm: 1, reroll: 1 } },
    { key: "mother", name: "母亲节", start: "2026-05-10", end: "2026-05-10", blessing: "母亲节快乐，愿温柔护盾一直守在身边。", reward: { coins: 18000, materials: 560, poopCoins: 5, shield: 3, magnet: 2, energy: 2, wing: 1 } },
    { key: "children", name: "儿童节", start: "2026-06-01", end: "2026-06-01", blessing: "儿童节快乐，今天就像拿到糖果补给一样开心冲刺。", reward: { coins: 18000, materials: 560, poopCoins: 5, magnet: 2, energy: 3, reroll: 1, wing: 1 } },
    { key: "father", name: "父亲节", start: "2026-06-21", end: "2026-06-21", blessing: "父亲节快乐，愿可靠的护盾和顺风都准时抵达。", reward: { coins: 22000, materials: 700, poopCoins: 5, shield: 3, energy: 2, storm: 1, revive: 1 } },
    { key: "duanwu", name: "端午", start: "2026-06-19", end: "2026-06-21", blessing: "端午安康，愿龙舟般的顺风带你躲开所有弹幕。", reward: { coins: 24000, materials: 760, poopCoins: 10, shield: 2, magnet: 2, energy: 2, storm: 1 } },
    { key: "teacher", name: "教师节", start: "2026-09-10", end: "2026-09-10", blessing: "教师节快乐，愿每次复盘都变成下一局的高分答案。", reward: { coins: 18000, materials: 620, poopCoins: 5, energy: 2, reroll: 2, shield: 1 } },
    { key: "midautumn", name: "中秋", start: "2026-09-25", end: "2026-09-27", blessing: "中秋快乐，愿月光照亮补给和最佳躲避路线。", reward: { coins: 26000, materials: 840, poopCoins: 10, shield: 2, magnet: 2, energy: 3, reroll: 1, wing: 1 } },
    { key: "national", name: "国庆", start: "2026-10-01", end: "2026-10-07", blessing: "国庆快乐，长假开局就把火力、补给和好运装满。", reward: { coins: 48000, materials: 1600, poopCoins: 25, shield: 5, magnet: 4, energy: 5, storm: 2, reroll: 2, wing: 1, revive: 1 } },
  ];
  const ULTIMATE_DURATION = 3;
  const ULTIMATE_COOLDOWN = 15;
  const ULTIMATE_ENERGY_RATIO = 0.65;
  const SHOP_PRICE_MULTIPLIER = 50;
  const SHOP_COIN_PRICES = {
    shield: 120 * SHOP_PRICE_MULTIPLIER,
    magnet: 140 * SHOP_PRICE_MULTIPLIER,
    energy: 90 * SHOP_PRICE_MULTIPLIER,
    luckyBox: 5000 * SHOP_PRICE_MULTIPLIER,
    material: 650 * SHOP_PRICE_MULTIPLIER,
    battle: 780 * SHOP_PRICE_MULTIPLIER,
    gear: 2200 * SHOP_PRICE_MULTIPLIER,
    reroll: 360 * SHOP_PRICE_MULTIPLIER,
    storm: 420 * SHOP_PRICE_MULTIPLIER,
    wing: 520 * SHOP_PRICE_MULTIPLIER,
  };
  const SHOP_POOP_PRICES = {
    revive: 1,
  };
  const RUN_ITEM_SLOT_LIMIT = 3;
  const RUN_CARRIED_ITEM_TYPES = ["revive", "shield", "energy", "magnet", "storm", "wing", "reroll"];
  const RUN_ITEM_NAMES = {
    shield: "护盾",
    magnet: "磁铁",
    energy: "能量瓶",
    storm: "臭弹炸弹",
    revive: "复活心核",
    wing: "顺风羽翼",
    reroll: "天赋重骰券",
  };
  const shopInfo = {
    shield: { name: "护盾", price: shopPriceText("shield"), effect: "放入背包。进局若被携带，局内最多使用一次，获得短时间护盾来抵消受击。" },
    magnet: { name: "磁铁", price: shopPriceText("magnet"), effect: "放入背包。进局若被携带，局内最多使用一次，吸附附近纸卷、能量和补给。" },
    energy: { name: "能量瓶", price: shopPriceText("energy"), effect: "放入背包。进局若被携带，局内最多使用一次，立即补满能量。" },
    luckyBox: { name: "幸运宝箱", price: shopPriceText("luckyBox"), effect: "开启后随机获得金币、材料和道具，约 30% 概率开出稀有组合，可能附带更多战斗道具。" },
    material: { name: "材料补给", price: shopPriceText("material"), effect: "立即获得大量升级材料，并附带能量瓶，适合准备进化或快速提升属性。" },
    battle: { name: "战斗礼包", price: shopPriceText("battle"), effect: "一次获得护盾、磁铁、能量瓶和臭弹炸弹，适合挑战 Boss 关和每日挑战。" },
    gear: { name: "装备补给箱", price: shopPriceText("gear"), effect: "开启后至少获得紫色及以上装备；彩色装备概率随英雄和关卡进程提升。" },
    reroll: { name: "天赋重骰券", price: shopPriceText("reroll"), effect: "放入背包。进局若被携带，局内最多使用一次，用于刷新天赋选项。" },
    revive: { name: "复活心核", price: shopPriceText("revive"), effect: "放入背包。进局若被携带，濒死时自动触发一次复活，会占用一个携带位。" },
    storm: { name: "臭弹炸弹", price: shopPriceText("storm"), effect: "放入背包。进局若被携带，局内最多使用一次，清除大量障碍并伤害 Boss。" },
    wing: { name: "顺风羽翼", price: shopPriceText("wing"), effect: "放入背包。进局若被携带，开局自动触发一次顺风效果，会占用一个携带位。" },
  };

  function shopPriceText(key) {
    if (SHOP_POOP_PRICES[key]) return `${SHOP_POOP_PRICES[key]} 便便币`;
    return `${SHOP_COIN_PRICES[key] || 0} 金币`;
  }

  function shopCostFor(key) {
    return SHOP_POOP_PRICES[key] || SHOP_COIN_PRICES[key] || 0;
  }

  function shopCurrencyFor(key) {
    return SHOP_POOP_PRICES[key] ? "便便币" : "金币";
  }

  function shopBalanceFor(key) {
    return shopCurrencyFor(key) === "便便币" ? (meta.poopCoins || 0) : meta.coins;
  }

  function shopStockText(key) {
    if (key === "luckyBox") return "开箱即用";
    if (key === "material") return `材料 ${meta.materials}`;
    if (key === "gear") return `备用装备 ${(meta.equipmentBag || []).length}/24`;
    if (meta.inventory && Object.prototype.hasOwnProperty.call(meta.inventory, key)) return `库存 ${meta.inventory[key] || 0}`;
    return "";
  }

  function shopEffectText(key) {
    const info = shopInfo[key] || shopInfo.shield;
    if (key === "gear") {
      return `${info.effect} 当前彩色概率约 ${(shopGearBoxRainbowChance() * 100).toFixed(1)}%，保底 1.5%，最高 5%。`;
    }
    return info.effect;
  }

  function shopUseText(key) {
    return {
      shield: "受击保护",
      magnet: "集中拾取",
      energy: "能量续航",
      luckyBox: "随机补给",
      material: "养成材料",
      battle: "Boss 备战",
      gear: "装备成长",
      reroll: "天赋刷新",
      revive: "容错复活",
      storm: "清障破防",
      wing: "开局顺风",
    }[key] || "常规补给";
  }

  function shopCarryText(key) {
    if (RUN_CARRIED_ITEM_TYPES.includes(key)) return "入场携带";
    if (key === "gear" || key === "luckyBox") return "开箱即用";
    return "立即生效";
  }

  function shopAffordable(key) {
    return shopBalanceFor(key) >= shopCostFor(key);
  }

  const EFFECT_BUDGETS = {
    normal: { particles: 220, floaters: 18, projectiles: 96, hazards: 86, pop: 1, trail: 1 },
    smooth: { particles: 112, floaters: 6, projectiles: 68, hazards: 64, pop: 0.48, trail: 0.42 },
  };

  const specialStageBosses = {
    40: "toxicPump",
    50: "mixerBeast",
    60: "wasteCore",
  };

  const equipmentSlots = [
    { key: "helmet", name: "头盔" },
    { key: "armor", name: "衣服" },
    { key: "boots", name: "靴子" },
    { key: "weapon", name: "武器" },
    { key: "necklace", name: "项链" },
  ];

  const equipmentQualities = [
    { key: "white", name: "白", color: "#f7f0de", mult: 1, power: 1 },
    { key: "green", name: "绿", color: "#6bdc7b", mult: 1.25, power: 1.3 },
    { key: "blue", name: "蓝", color: "#54d0ff", mult: 1.55, power: 1.7 },
    { key: "purple", name: "紫", color: "#c45dff", mult: 1.95, power: 2.2 },
    { key: "gold", name: "金", color: "#f5c84b", mult: 2.45, power: 2.9 },
    { key: "red", name: "红", color: "#ff5650", mult: 3.1, power: 3.8 },
    { key: "rainbow", name: "彩", color: "#ffffff", mult: 4, power: 5 },
  ];

  const stages = Array.from({ length: 60 }, (_, i) => {
    const number = i + 1;
    const bossStage = number % 5 === 0;
    const lateStage = number > 30;
    return {
      number,
      bossStage,
      map: lateStage ? "deep" : "city",
      target: Math.round(((bossStage ? 1750 + number * 255 : 1350 + number * 225) + (lateStage ? 820 + number * 76 : 0)) * STAGE_TARGET_SCORE_MULTIPLIER),
      hitLimit: bossStage ? 0 : number >= 46 ? 5 : number >= 31 ? 6 : number >= 16 ? 7 : 0,
      bossLevel: bossStage ? number / 5 + Math.floor(number / 10) : 0,
      coinReward: 110 + number * 22 + (bossStage ? 260 : 0) + (lateStage ? 90 : 0),
      materialReward: 7 + Math.floor(number * 1.35) + (bossStage ? 16 : 0) + (lateStage ? 5 : 0),
      itemReward: bossStage ? "goldPoop" : number % 3 === 0 ? "shield" : number % 4 === 0 ? "magnet" : "energy",
    };
  });

  const classicStageProfiles = [
    {
      key: "clean",
      name: "清洁巡航",
      short: "清洁",
      desc: "旧城市主线里的稳定航线，靠纸卷、清风补给和少量顺风保持节奏。",
      tip: "适合磁铁和羽翼，优先保持移动路线干净。",
      hud: "清洁巡航",
      rewardLabel: "金币倾向",
      coinBonus: 0.08,
      materialBonus: 0.02,
      scoreBoost: 1.02,
      pickupBonus: 0.06,
      pressureRelief: 0.015,
      eventGap: 0.94,
      districtTarget: 58,
      districtReward: { coins: 0.035, materials: 0.012 },
      districtColor: "#5bded4",
      districtMilestones: ["清理近路", "清风回补", "城区稳定"],
      eventBias: [
        { kind: "cleanWind", label: "清风补给" },
        { kind: "paperRain", label: "纸卷雨" },
        { kind: "draftGate", label: "顺风门阵", minStage: 3 },
      ],
    },
    {
      key: "supply",
      name: "补给穿行",
      short: "补给",
      desc: "补给密度更高的旧航线，鼓励玩家用护盾、能量和磁铁规划连续拾取。",
      tip: "适合护盾和能量瓶，低血量时更容易稳住。",
      hud: "补给穿行",
      rewardLabel: "材料倾向",
      coinBonus: 0.05,
      materialBonus: 0.08,
      scoreBoost: 1.01,
      pickupBonus: 0.16,
      pressureRelief: 0.025,
      eventGap: 0.9,
      districtTarget: 66,
      districtReward: { coins: 0.025, materials: 0.04 },
      districtColor: "#9de8ff",
      districtMilestones: ["投放补给", "护航补能", "城区稳定"],
      eventBias: [
        { kind: "supplyDrop", label: "补给空投", minStage: 2 },
        { kind: "cleanWind", label: "清风补给" },
        { kind: "mysteryRoute", label: "奇遇航线", minStage: 5 },
      ],
    },
    {
      key: "combo",
      name: "连击街区",
      short: "连击",
      desc: "节奏更快的旧街区航线，顺风、纸卷雨和连击祭坛会更常出现。",
      tip: "适合羽翼和重骰，优先选择连击、暴击与能量天赋。",
      hud: "连击街区",
      rewardLabel: "金币倾向",
      coinBonus: 0.11,
      materialBonus: 0.03,
      scoreBoost: 1.035,
      pickupBonus: 0.04,
      pressureRelief: 0.005,
      eventGap: 0.96,
      districtTarget: 72,
      districtReward: { coins: 0.045, materials: 0.016 },
      districtColor: "#dfff7a",
      districtMilestones: ["连击续航", "祭印预热", "城区稳定"],
      eventBias: [
        { kind: "comboShrine", label: "连击祭坛", minStage: 4 },
        { kind: "draftGate", label: "顺风门阵", minStage: 3 },
        { kind: "paperRain", label: "纸卷雨" },
      ],
    },
    {
      key: "threat",
      name: "压制街巷",
      short: "压制",
      desc: "更偏战斗的旧街巷，闪反、精英和车队事件会提前形成小高潮。",
      tip: "适合臭弹炸弹和护盾，优先处理障碍密集段。",
      hud: "压制街巷",
      rewardLabel: "材料倾向",
      coinBonus: 0.07,
      materialBonus: 0.07,
      scoreBoost: 1.015,
      pickupBonus: 0.08,
      pressureRelief: 0,
      eventGap: 1.06,
      districtTarget: 76,
      districtReward: { coins: 0.032, materials: 0.035 },
      districtColor: "#ff8d54",
      districtMilestones: ["压制减速", "闪反护航", "城区稳定"],
      eventBias: [
        { kind: "counterTrial", label: "闪反试炼", minStage: 5 },
        { kind: "supplyDrop", label: "补给空投", minStage: 3 },
        { kind: "treasureRun", label: "黄金马桶车队", minStage: 8 },
      ],
    },
    {
      key: "bossPrep",
      name: "Boss 备战",
      short: "备战",
      desc: "Boss 关前的补给与压制路线，更强调护盾、臭弹和破防窗口。",
      tip: "适合护盾、臭弹和复活心核，进场前检查携带位。",
      hud: "Boss 备战",
      rewardLabel: "综合倾向",
      coinBonus: 0.06,
      materialBonus: 0.06,
      scoreBoost: 1.01,
      pickupBonus: 0.1,
      pressureRelief: 0.02,
      eventGap: 0.92,
      districtTarget: 70,
      districtReward: { coins: 0.03, materials: 0.03 },
      districtColor: "#f5c84b",
      districtMilestones: ["备战护盾", "破防补给", "城区稳定"],
      eventBias: [
        { kind: "supplyDrop", label: "补给空投" },
        { kind: "cleanWind", label: "清风补给" },
        { kind: "counterTrial", label: "闪反试炼", minStage: 5 },
      ],
    },
  ];

  function classicStageProfile(stage = activeStage()) {
    if (!stage) return classicStageProfiles[0];
    if (stage.bossStage) return classicStageProfiles[classicStageProfiles.length - 1];
    return classicStageProfiles[(Math.max(1, stage.number || 1) - 1) % (classicStageProfiles.length - 1)];
  }

  function classicStageRewardText(profile = classicStageProfile()) {
    return `${profile.rewardLabel} · 金币 +${Math.round((profile.coinBonus || 0) * 100)}% / 材料 +${Math.round((profile.materialBonus || 0) * 100)}%`;
  }

  function classicStageBonus(stage, firstClear) {
    if (!stage || state.gameMode !== "stage") return { coins: 0, materials: 0 };
    const profile = classicStageProfile(stage);
    const repeatScale = firstClear ? 1 : 0.34;
    return {
      coins: Math.round(stage.coinReward * (profile.coinBonus || 0) * repeatScale),
      materials: Math.round(stage.materialReward * (profile.materialBonus || 0) * repeatScale),
    };
  }

  function classicDistrictTarget(stage = activeStage()) {
    const profile = classicStageProfile(stage);
    return Math.max(42, Math.round((profile.districtTarget || 64) + Math.min(28, (stage.number || 1) * 0.55) + (stage.bossStage ? 10 : 0)));
  }

  function classicDistrictReward(stage, firstClear, districtComplete) {
    if (!stage || state.gameMode !== "stage" || !districtComplete) return { coins: 0, materials: 0 };
    const profile = classicStageProfile(stage);
    const repeatScale = firstClear ? 1 : 0.32;
    return {
      coins: Math.round(stage.coinReward * ((profile.districtReward && profile.districtReward.coins) || 0) * repeatScale),
      materials: Math.round(stage.materialReward * ((profile.districtReward && profile.districtReward.materials) || 0) * repeatScale),
    };
  }

  function classicDistrictReady() {
    return state.gameMode === "stage" && state.classicDistrictTarget > 0 && state.classicDistrictProgress >= state.classicDistrictTarget;
  }

  function classicDistrictShortText(stage = activeStage()) {
    const profile = classicStageProfile(stage);
    const target = state.classicDistrictTarget || classicDistrictTarget(stage);
    const progress = clamp(state.classicDistrictProgress || 0, 0, target);
    return `${profile.short}稳定 ${Math.floor(progress)}/${target}`;
  }

  function classicDistrictNextMilestone(stage = activeStage()) {
    const target = state.classicDistrictTarget || classicDistrictTarget(stage);
    const progress = clamp(state.classicDistrictProgress || 0, 0, target);
    const percent = target > 0 ? progress / target : 0;
    return classicDistrictMilestonePlan(stage).find((step) => percent < step.ratio) || null;
  }

  function classicRouteBiasText(profile = classicStageProfile()) {
    const labels = (profile.eventBias || [])
      .slice(0, 2)
      .map((entry) => entry.label)
      .filter(Boolean);
    return labels.length ? `常见 ${labels.join("/")}` : "常规路况";
  }

  function classicRouteFocusLabel(profile = classicStageProfile()) {
    return {
      clean: "清路",
      supply: "补能",
      combo: "续连",
      threat: "压制",
      bossPrep: "备战",
    }[profile.key] || "专注";
  }

  function classicRouteHazardLabel(pattern) {
    return {
      toilet: "马桶机",
      pipePair: "管道",
      plunger: "马桶塞",
      barricade: "路障",
      sludgeBarrel: "酸桶",
      acidGeyser: "酸泉",
      stinkCloud: "臭气",
      soapBubble: "泡泡",
      bossPoop: "Boss 弹",
      energyBall: "能量弹",
    }[pattern] || "障碍";
  }

  function classicRouteForecastInfo() {
    if (state.gameMode !== "stage" || !["playing", "paused"].includes(state.mode) || hazards.length === 0) return null;
    const s = playScale();
    const start = hero.x + 30 * s;
    const end = state.width + (isLandscapePlay() ? 250 : 190) * s;
    const byGroup = new Map();
    for (const h of hazards) {
      if (!h || h.x < start || h.x > end) continue;
      const pattern = h.routePattern || hazardPatternKey(h);
      if (!pattern) continue;
      const groupKey = h.routeGroup || `${pattern}:${Math.round((h.x || 0) / Math.max(1, 46 * s))}:${Math.round(((h.y || 0) - playTop()) / Math.max(1, 56 * s))}`;
      let entry = byGroup.get(groupKey);
      if (!entry) {
        entry = {
          key: groupKey,
          pattern,
          minX: h.x,
          yTotal: 0,
          yCount: 0,
          count: 0,
          severe: false,
        };
        byGroup.set(groupKey, entry);
      }
      const threat = hazardThreatProfile(h);
      entry.minX = Math.min(entry.minX, h.x || entry.minX);
      entry.count += 1;
      entry.severe = entry.severe || threat.severe || Boolean(h.elite || h.bossDamage);
      if (h.type === "pipeTop") {
        entry.topY = h.h;
      } else if (h.type === "pipeBottom") {
        entry.bottomY = h.y;
      } else if (Number.isFinite(h.y)) {
        entry.yTotal += h.y;
        entry.yCount += 1;
      }
    }
    const entries = Array.from(byGroup.values()).map((entry) => {
      const gapY = Number.isFinite(entry.topY) && Number.isFinite(entry.bottomY)
        ? (entry.topY + entry.bottomY) * 0.5
        : null;
      return {
        ...entry,
        y: gapY || (entry.yCount > 0 ? entry.yTotal / entry.yCount : (playTop() + playBottom()) * 0.5),
      };
    }).sort((a, b) => a.minX - b.minX);
    const lead = entries[0];
    if (!lead) return null;
    const followSame = entries.slice(1).some((entry) => entry.pattern === lead.pattern && entry.minX - lead.minX < 180 * s);
    return {
      ...lead,
      label: classicRouteHazardLabel(lead.pattern),
      distance: clamp(Math.round((lead.minX - hero.x) / Math.max(1, 42 * s)), 1, 18),
      followSame,
    };
  }

  function classicRouteForecastText(info = classicRouteForecastInfo()) {
    if (!info) return "";
    const count = info.count > 1 && info.pattern !== "pipePair" ? `×${info.count}` : "";
    const chain = info.followSame ? "连段" : "";
    return `前方 ${info.distance}格 ${info.label}${count}${chain}`;
  }

  function classicRouteHudText() {
    if (state.gameMode !== "stage" || !isStageMode() || !["playing", "paused"].includes(state.mode)) return "";
    const stage = activeStage();
    if (!stage) return "";
    const profile = classicStageProfile(stage);
    const target = state.classicDistrictTarget || classicDistrictTarget(stage);
    const progress = clamp(state.classicDistrictProgress || 0, 0, target);
    const focus = state.classicRouteFocusTimer > 0 ? ` · ${classicRouteFocusLabel(profile)} ${Math.ceil(state.classicRouteFocusTimer)}s` : "";
    const forecastInfo = classicRouteForecastInfo();
    const forecast = classicRouteForecastText(forecastInfo);
    const greenWave = classicGreenWaveActive() && !forecast ? ` · 绿波 ${Math.floor(clamp((state.classicGreenWaveCharge || 0) / 100, 0, 1) * 100)}%` : "";
    if (state.classicDistrictClaimed) {
      const boost = state.classicDistrictBoostTimer > 0 ? ` · 增益 ${Math.ceil(state.classicDistrictBoostTimer)}s` : "";
      return `${profile.short}航线稳定${boost}${focus}${greenWave} · ${forecast || classicRouteBiasText(profile)}`;
    }
    if (state.eventTimer > 0 && state.eventName) {
      return `${profile.short}航线${focus}${greenWave} · ${forecast || `${state.eventName} ${Math.ceil(state.eventTimer)}s`} · 稳定 ${Math.floor(progress)}/${target}`;
    }
    const next = classicDistrictNextMilestone(stage);
    const nextText = next ? `稳定下段 ${Math.round(next.ratio * 100)}% ${next.label}` : "完成稳定";
    return `${profile.short}航线${focus}${greenWave} · ${forecast || nextText} · ${classicRouteBiasText(profile)}`;
  }

  function activateClassicRouteFocus(profile = classicStageProfile(), duration = 3.2) {
    if (state.gameMode !== "stage" || state.mode !== "playing") return;
    state.classicRouteFocusKey = profile.key;
    state.classicRouteFocusTimer = Math.max(state.classicRouteFocusTimer || 0, duration);
    state.classicRouteFocusPulse = Math.max(state.classicRouteFocusPulse || 0, 0.55);
    state.classicDistrictPulse = Math.max(state.classicDistrictPulse || 0, 0.38);
  }

  function updateClassicRouteFocus(dt, profile = classicStageProfile()) {
    if (state.gameMode !== "stage" || state.mode !== "playing" || state.classicRouteFocusTimer <= 0) return;
    const focusKey = state.classicRouteFocusKey || profile.key;
    if (focusKey !== profile.key) return;
    if (focusKey === "clean") {
      state.recoveryTimer = Math.max(state.recoveryTimer || 0, 0.22);
      state.health = clamp(state.health + dt * (state.maxHealth * 0.006 + 0.45), 0, state.maxHealth);
    } else if (focusKey === "supply") {
      state.energy = clamp(state.energy + dt * 1.75, 0, state.maxEnergy);
      state.magnetTimer = Math.max(state.magnetTimer || 0, 0.18);
    } else if (focusKey === "combo") {
      state.comboTimer = Math.max(state.comboTimer || 0, 1.35);
      state.styleTimer = Math.max(state.styleTimer || 0, 0.28);
    } else if (focusKey === "threat") {
      state.counterTimer = Math.max(state.counterTimer || 0, 0.52);
      state.counterPulse = Math.max(state.counterPulse || 0, 0.16);
      for (const h of hazards) {
        if (!h || h.type === "pipeTop" || h.type === "pipeBottom" || (h.x || 0) < hero.x - 20 * playScale()) continue;
        if ((h.x || 0) < state.width + 80 * playScale()) h.slow = Math.max(h.slow || 0, 0.16);
      }
    } else if (focusKey === "bossPrep") {
      state.energy = clamp(state.energy + dt * 1.15, 0, state.maxEnergy);
      if (state.health < state.maxHealth * 0.35) state.shieldTimer = Math.max(state.shieldTimer || 0, 0.12);
      if (boss) {
        boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * dt * 0.035, 0, bossBreakThreshold());
      }
    }
  }

  function classicGreenWaveActive() {
    if (state.gameMode !== "stage" || state.mode !== "playing" || !isStageMode()) return false;
    const stage = activeStage();
    return !!(stage && stage.map === "city");
  }

  function classicGreenWaveLaneInfo(profile = classicStageProfile()) {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(86 * s, bottom - top);
    let half = clamp(playable * 0.12, 24 * s, 42 * s);
    const margin = Math.max(hero.radiusY + half + 8 * s, 38 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * 0.15, 22 * s, 36 * s);
      min = top + half + hero.radiusY * 0.56;
      max = bottom - half - hero.radiusY * 0.56;
    }
    const ratio = {
      clean: 0.46,
      supply: 0.54,
      combo: 0.4,
      threat: 0.6,
      bossPrep: 0.5,
    }[profile.key] || 0.5;
    const base = min <= max ? min + (max - min) * ratio : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.24) : 0;
    const phase = (state.classicLanePhase || 0) + 2.4;
    const forecast = classicRouteForecastInfo();
    let forecastNudge = 0;
    if (forecast && Number.isFinite(forecast.y)) {
      const away = forecast.y < (top + bottom) * 0.5 ? 1 : -1;
      forecastNudge = away * Math.min(playable * (forecast.severe ? 0.22 : 0.13), (forecast.severe ? 78 : 44) * s);
    }
    const drift = Math.sin(state.time * 0.62 + phase) * sweep
      + Math.sin(state.time * 0.36 + phase * 0.7) * sweep * 0.24;
    return {
      center: clamp(base + forecastNudge + drift, top + half, bottom - half),
      half,
      top,
      bottom,
      progress: clamp((state.classicGreenWaveCharge || 0) / 100, 0, 1),
    };
  }

  function triggerClassicGreenWaveReward(lane, profile = classicStageProfile()) {
    if (!classicGreenWaveActive()) return;
    const s = playScale();
    let softened = 0;
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = (h.x || 0) + (h.w || 0) * 0.5;
      if (hx < hero.x - 60 * s || hx > state.width + 120 * s) continue;
      const hy = Number.isFinite(h.y) ? h.y : lane.center;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      if (Math.abs(hy - lane.center) > lane.half + maxDim * 0.46 + 18 * s) continue;
      h.slow = Math.max(h.slow || 0, 0.82);
      h.hit = Math.max(h.hit || 0, 0.14);
      if (!h.greenWaveTouched) {
        h.greenWaveTouched = true;
        softened += 1;
      }
    }
    if (boss) {
      boss.hit = Math.max(boss.hit || 0, 0.12);
      boss.controlFlash = Math.max(boss.controlFlash || 0, 0.12);
      addBossBreakPressure(bossBreakGain("glance") * 0.16, boss.x - boss.w * 0.18, boss.y);
    }
    state.classicGreenWaveCharge = 20;
    state.classicGreenWavePulse = 1;
    state.classicGreenWaveReliefTimer = Math.max(state.classicGreenWaveReliefTimer || 0, 4.2);
    state.recoveryTimer = Math.max(state.recoveryTimer || 0, 0.34);
    state.energy = clamp(state.energy + 12 + state.level * 0.2, 0, state.maxEnergy);
    if (state.health < state.maxHealth * 0.55) state.health = clamp(state.health + state.maxHealth * 0.035, 0, state.maxHealth);
    state.combo += 1;
    state.comboTimer = Math.max(state.comboTimer, 2.7);
    recordRunStat("maxCombo", state.combo);
    addClassicDistrictProgress(4 + Math.min(3, Math.floor((state.classicDistrictTarget || 60) * 0.025)), "greenWave");
    addRoundedScore((170 + softened * 26 + state.combo * 9) * state.scoreBonus * styleMultiplier());
    gainXp(28 + softened * 3, false);
    gainStyle(15 + Math.min(10, softened * 1.6), "旧城绿波", "#5bded4");
    if (Math.random() < 0.46 || state.energy < state.maxEnergy * 0.45 || state.health < state.maxHealth * 0.45) {
      spawnClassicDistrictPickup(state.health < state.maxHealth * 0.45 ? "shield" : "energy", 0, 1, 1.08);
    }
    spawnClassicEventParticles(hero.x + 58 * s, lane.center, "#5bded4", 14);
    pop(hero.x + 58 * s, lane.center, "#5bded4", 18 + Math.min(10, softened));
    state.eventName = softened > 0 ? `旧城绿波 x${softened}` : "旧城绿波";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
    beep(980, 0.055, "triangle", 0.038);
  }

  function updateClassicGreenWave(dt, profile = classicStageProfile()) {
    state.classicGreenWavePulse = Math.max(0, (state.classicGreenWavePulse || 0) - dt * 0.9);
    state.classicGreenWaveReliefTimer = Math.max(0, (state.classicGreenWaveReliefTimer || 0) - dt);
    if (!classicGreenWaveActive()) {
      state.classicGreenWaveCharge = Math.max(0, (state.classicGreenWaveCharge || 0) - dt * 14);
      return;
    }
    const s = playScale();
    const lane = classicGreenWaveLaneInfo(profile);
    const distance = Math.abs(hero.y - lane.center);
    const inside = distance <= lane.half + hero.radiusY * 0.24;
    const near = distance <= lane.half + hero.radiusY * 0.8;
    if (inside) {
      const profileBoost = profile.key === "clean" ? 4 : profile.key === "supply" ? 2.5 : profile.key === "threat" ? 1.5 : 0;
      const gain = 26 + Math.min(10, state.level * 0.38) + profileBoost;
      state.classicGreenWaveCharge = clamp((state.classicGreenWaveCharge || 0) + dt * gain, 0, 100);
      state.energy = clamp(state.energy + dt * 0.85, 0, state.maxEnergy);
      state.styleTimer = Math.max(state.styleTimer, 0.32);
      state.classicGreenWavePulse = Math.max(state.classicGreenWavePulse || 0, 0.12);
      if (Math.random() < dt * (isSmoothQuality() ? 3 : 5)) spawnClassicEventParticles(hero.x - 8 * s, hero.y, "#5bded4", 1);
    } else {
      state.classicGreenWaveCharge = Math.max(0, (state.classicGreenWaveCharge || 0) - dt * (near ? 4 : 10));
    }
    if ((state.classicGreenWaveCharge || 0) >= 100) triggerClassicGreenWaveReward(lane, profile);
  }

  function classicDistrictMilestoneCount(progress, target) {
    if (target <= 0) return 0;
    if (progress >= target * 0.7) return 2;
    if (progress >= target * 0.35) return 1;
    return 0;
  }

  function classicDistrictMilestonePlan(stage = activeStage()) {
    const profile = classicStageProfile(stage);
    const labels = profile.districtMilestones || ["路况支援", "航线补给", "城区稳定"];
    return [
      { ratio: 0.35, label: labels[0] || "路况支援" },
      { ratio: 0.7, label: labels[1] || "航线补给" },
      { ratio: 1, label: labels[2] || "城区稳定" },
    ];
  }

  function spawnClassicDistrictPickup(type, index = 0, total = 1, strength = 1.08) {
    const s = playScale();
    const top = playTop() + 42 * s;
    const bottom = playBottom() - 42 * s;
    const y = clamp(hero.y + (index - (total - 1) * 0.5) * 34 * s, top, bottom);
    addPickup({
      type,
      x: clamp(hero.x + (168 + index * 32) * s, hero.x + 98 * s, state.width - 54 * s),
      y,
      r: pickupRadius(type, s, strength),
      strength,
      phase: random(0, Math.PI * 2),
    }, true);
  }

  function triggerClassicDistrictMilestone(profile = classicStageProfile(), milestone = 1) {
    if (state.mode !== "playing") return;
    const s = playScale();
    const level = Math.max(1, milestone);
    const labels = profile.districtMilestones || [];
    const label = labels[level - 1] || `${profile.short}支援`;
    const color = profile.districtColor || "#5bded4";
    state.classicDistrictPulse = Math.max(state.classicDistrictPulse || 0, 0.72);
    state.eventName = `${profile.short}：${label}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    gainStyle(10 + level * 3, label, color);
    if (profile.key === "clean") {
      state.recoveryTimer = Math.max(state.recoveryTimer, 1.15 + level * 0.35);
      state.health = clamp(state.health + state.maxHealth * (0.035 + level * 0.025), 0, state.maxHealth);
      for (const h of hazards) {
        if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
        if ((h.x || 0) < state.width * 0.72 && Math.abs((h.y || hero.y) - hero.y) < 120 * s) {
          h.slow = Math.max(h.slow || 0, 0.42 + level * 0.16);
          h.hit = Math.max(h.hit || 0, 0.1);
        }
      }
      spawnClassicDistrictPickup(level >= 2 ? "focusOrb" : "energy", 0, 1, 1.05 + level * 0.08);
    } else if (profile.key === "supply") {
      state.energy = clamp(state.energy + state.maxEnergy * (0.08 + level * 0.04), 0, state.maxEnergy);
      if (level >= 2) state.shieldTimer = Math.max(state.shieldTimer, 1.6);
      const drops = level >= 2 ? ["supplyCrate", "energy"] : ["shield", "energy"];
      drops.forEach((type, index) => spawnClassicDistrictPickup(type, index, drops.length, 1.1 + level * 0.08));
    } else if (profile.key === "combo") {
      state.combo += 2 + level * 2;
      state.comboTimer = Math.max(state.comboTimer, 3.4 + level * 0.45);
      state.comboSurgeTimer = Math.max(state.comboSurgeTimer || 0, 2.4 + level * 0.85);
      recordRunStat("maxCombo", state.combo);
      spawnClassicDistrictPickup(level >= 2 ? "comboSigil" : "bonusPaper", 0, 1, 1.06 + level * 0.08);
    } else if (profile.key === "threat") {
      state.counterTimer = Math.max(state.counterTimer || 0, 2.8 + level * 0.8);
      state.counterPulse = Math.max(state.counterPulse || 0, 0.38);
      state.shieldTimer = Math.max(state.shieldTimer, 0.9 + level * 0.28);
      for (const h of hazards) {
        if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
        if ((h.x || 0) < state.width + 160 * s) h.slow = Math.max(h.slow || 0, 0.5 + level * 0.12);
      }
      spawnClassicDistrictPickup(level >= 2 ? "counterSeal" : "focusOrb", 0, 1, 1.08 + level * 0.08);
    } else {
      state.shieldTimer = Math.max(state.shieldTimer, 1.15 + level * 0.38);
      state.energy = clamp(state.energy + state.maxEnergy * (0.06 + level * 0.035), 0, state.maxEnergy);
      state.specialTimer = Math.max(state.specialTimer, 1.6 + level * 0.4);
      if (boss) {
        boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.2 + level * 0.06), 0, bossBreakThreshold());
        boss.hit = Math.max(boss.hit || 0, 0.14);
      }
      spawnClassicDistrictPickup(level >= 2 ? "breakCore" : "shield", 0, 1, 1.08 + level * 0.08);
    }
    showRewardToast([{ type: "medal", label, amount: 1 }], { duration: 1350 });
    pop(hero.x + 32 * s, hero.y, color, 14 + level * 4);
    beep(720 + level * 120, 0.06, "triangle", 0.035);
  }

  function triggerClassicDistrictStabilized(profile = classicStageProfile()) {
    if (state.classicDistrictClaimed) return;
    state.classicDistrictClaimed = true;
    state.classicDistrictPulse = 1;
    state.classicDistrictBoostTimer = Math.max(state.classicDistrictBoostTimer, 7.2);
    state.recoveryTimer = Math.max(state.recoveryTimer, 1.15);
    state.health = clamp(state.health + state.maxHealth * 0.12, 0, state.maxHealth);
    state.energy = clamp(state.energy + state.maxEnergy * 0.18, 0, state.maxEnergy);
    state.eventName = `${profile.short}城区稳定`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.5);
    showRewardToast([{ type: "medal", label: `${profile.short}稳定`, amount: 1 }], { duration: 1500 });
    const finalType = profile.key === "combo" ? "comboSigil" : profile.key === "threat" ? "counterSeal" : profile.key === "bossPrep" ? "breakCore" : profile.key === "supply" ? "supplyCrate" : "focusOrb";
    spawnClassicDistrictPickup(finalType, 0, 1, 1.18);
    pop(hero.x, hero.y, profile.districtColor || "#5bded4", 18);
    beep(960, 0.07, "triangle", 0.04);
  }

  function addClassicDistrictProgress(amount, reason = "") {
    if (state.gameMode !== "stage" || state.mode !== "playing" || state.classicDistrictClaimed) return;
    const stage = activeStage();
    const target = state.classicDistrictTarget || classicDistrictTarget(stage);
    if (target <= 0 || amount <= 0) return;
    const profile = classicStageProfile(stage);
    const before = state.classicDistrictProgress || 0;
    state.classicDistrictProgress = clamp(before + amount, 0, target);
    if (state.classicDistrictProgress > before) {
      state.classicDistrictPulse = Math.max(state.classicDistrictPulse || 0, reason === "major" ? 0.62 : 0.28);
    }
    const milestoneCount = classicDistrictMilestoneCount(state.classicDistrictProgress, target);
    while ((state.classicDistrictMilestone || 0) < milestoneCount) {
      state.classicDistrictMilestone += 1;
      triggerClassicDistrictMilestone(profile, state.classicDistrictMilestone);
    }
    if (state.classicDistrictProgress >= target) triggerClassicDistrictStabilized(profile);
  }

  function classicDistrictPickupValue(type) {
    return {
      paper: 1,
      bonusPaper: 3,
      energy: 2,
      shield: 3,
      magnet: 3,
      draftGate: 8,
      focusOrb: 8,
      supplyCrate: 11,
      mysteryCapsule: 9,
      comboSigil: 10,
      counterSeal: 10,
      mountCore: 8,
      elementCore: 8,
      purificationCore: 10,
      mirrorShard: 8,
      forgeSigil: 8,
      currentShell: 8,
      breakCore: 10,
      relicShard: 9,
      goldPoop: 12,
    }[type] || 1;
  }

  const adventureBossKeys = ["cloudClogCyclops", "slimeDuchess", "skySewerLeviathan"];
  const adventureContractProfiles = [
    {
      key: "scout",
      name: "侦察契约",
      short: "侦察",
      desc: "靠航图测绘、顺流、风门和极限闪避推进。",
      hint: "航图 / 顺流 / 闪避",
      color: "#5bded4",
      rewardItem: "wing",
      stats: { dodge: 2.6, haste: 1.1, regen: 0.25 },
    },
    {
      key: "cargo",
      name: "护送契约",
      short: "护送",
      desc: "靠补给空投、货箱、纸卷和贝壳推进。",
      hint: "补给 / 货箱 / 贝壳",
      color: "#dfff7a",
      rewardItem: "shield",
      stats: { guard: 3.4, regen: 0.42, dodge: 0.8 },
    },
    {
      key: "hunt",
      name: "讨伐契约",
      short: "讨伐",
      desc: "靠击破、精英、宝藏、破防和 Boss 伤害推进。",
      hint: "击破 / 精英 / Boss",
      color: "#ff8d54",
      rewardItem: "storm",
      stats: { crit: 2.8, haste: 2.4, guard: 0.7 },
    },
    {
      key: "relic",
      name: "遗迹契约",
      short: "遗迹",
      desc: "靠奇遇、遗迹和中后段特殊核心推进。",
      hint: "奇遇 / 遗迹 / 核心",
      color: "#c45dff",
      rewardItem: "reroll",
      stats: { crit: 1.4, dodge: 1.7, haste: 1.9 },
    },
  ];

  function adventureContractKeyForStage(number) {
    const order = ["scout", "cargo", "hunt", "relic"];
    return order[(Math.max(1, number) - 1) % order.length];
  }

  const adventureStages = Array.from({ length: 30 }, (_, i) => {
    const number = i + 1;
    const bossStage = number % 10 === 0;
    const arc = Math.ceil(number / 10);
    const earlyRamp = number <= 6 ? 0.82 + number * 0.03 : number <= 10 ? 1 : 1 + Math.min(0.28, (number - 10) * 0.014);
    const contractKey = adventureContractKeyForStage(number);
    return {
      number,
      bossStage,
      adventure: true,
      map: "adventure",
      profileKey: bossStage ? adventureBossKeys[arc - 1] : "",
      contractKey,
      contractTarget: Math.round((bossStage ? 46 + arc * 14 + number * 1.4 : 26 + arc * 7 + number * 1.85) * earlyRamp),
      target: bossStage
        ? Math.round((3500 + number * 300 + arc * 420) * earlyRamp * ADVENTURE_TARGET_SCORE_MULTIPLIER)
        : Math.round((1850 + number * 225 + arc * 280 + Math.pow(number, 1.18) * 34) * earlyRamp * ADVENTURE_TARGET_SCORE_MULTIPLIER),
      hitLimit: bossStage ? 0 : number <= 5 ? 8 : number >= 21 ? 5 : number >= 11 ? 6 : 7,
      routeExplore: bossStage ? 118 + arc * 22 + number * 2 : 78 + arc * 12 + number * 3,
      routeIntel: bossStage ? 3 + arc : number >= 18 ? 3 : number >= 7 ? 2 : 1,
      routeCargo: bossStage ? 2 + arc : number >= 12 ? 2 : 1,
      bossLevel: bossStage ? 9 + arc * 4 + Math.floor(number / 5) : 0,
      coinReward: 520 + number * 52 + (bossStage ? 900 : 0),
      materialReward: 38 + Math.floor(number * 2.6) + (bossStage ? 88 : 0),
      itemReward: bossStage ? "storm" : number % 4 === 0 ? "magnet" : number % 3 === 0 ? "shield" : "energy",
    };
  });

  const statDefaults = {
    totalRuns: 0,
    totalScore: 0,
    bestScore: 0,
    totalPapers: 0,
    totalKills: 0,
    totalEliteKills: 0,
    totalTreasureKills: 0,
    totalBossKills: 0,
    totalNearMisses: 0,
    totalManualShots: 0,
    totalUltimates: 0,
    totalBossBreaks: 0,
    totalBossDamage: 0,
    totalBreakCores: 0,
    totalMountCores: 0,
    totalComboSigils: 0,
    totalCounterBursts: 0,
    totalElementCores: 0,
    totalPurificationCores: 0,
    totalStarTrailBursts: 0,
    totalMirrorShards: 0,
    totalMirrorBursts: 0,
    totalForgeSigils: 0,
    totalForgeWaves: 0,
    totalCurrentShells: 0,
    totalAdventureSurges: 0,
    totalAdventureExplore: 0,
    totalAdventureIntel: 0,
    totalAdventureCargo: 0,
    totalAdventureContracts: 0,
    totalAdventureSupports: 0,
    totalDailyDamage: 0,
    totalStageClears: 0,
    cleanStageClears: 0,
    bountyClears: 0,
    bestCombo: 0,
    bestStage: 0,
  };

  const metaDefaults = {
    coins: 0,
    materials: 0,
    poopCoins: 0,
    evoStones: 0,
    heroLevel: 1,
    evolution: 0,
    heroLevels: heroProfiles.reduce((map, profile) => {
      map[profile.key] = 1;
      return map;
    }, {}),
    heroEvolutions: heroProfiles.reduce((map, profile) => {
      map[profile.key] = 0;
      return map;
    }, {}),
    heroEvoStones: heroProfiles.reduce((map, profile) => {
      map[profile.key] = 0;
      return map;
    }, {}),
    selectedHero: "poop",
    unlockedHeroes: heroProfiles.reduce((map, profile) => {
      map[profile.key] = !!profile.unlocked;
      return map;
    }, {}),
    trialHero: "",
    selectedMount: "plungerBoard",
    mountLevels: mountProfiles.reduce((map, profile) => {
      map[profile.key] = profile.key === "plungerBoard" ? 1 : 0;
      return map;
    }, {}),
    unlockedMounts: mountProfiles.reduce((map, profile) => {
      map[profile.key] = !!profile.free || profile.key === "plungerBoard";
      return map;
    }, {}),
    trialMount: "",
    selectedDrone: "poopOrb",
    unlockedDrones: droneProfiles.reduce((map, profile) => {
      map[profile.key] = !!profile.free;
      return map;
    }, {}),
    trialRewards: { heroes: {}, mounts: {} },
    trialAccess: { date: "", playsUsed: 0, passDate: "" },
    mail: { lastSyncDate: "", claimedTotal: 0, messages: [] },
    signIn: { lastDate: "", streak: 0 },
    dailyChallenge: { date: "", rewardedDamage: 0, bossDefeated: false },
    redeemedCodes: {},
    endlessStoneClaims: [],
    heroStoneClaims: heroProfiles.reduce((map, profile) => {
      map[profile.key] = [];
      return map;
    }, {}),
    maxStage: 1,
    cleared: {},
    maxAdventureStage: 1,
    adventureCleared: {},
    achievements: {},
    activeTitle: "",
    stats: { ...statDefaults },
    inventory: { shield: 1, magnet: 1, energy: 1, goldPoop: 0, reroll: 1, revive: 0, storm: 1, wing: 0 },
    equipmentBag: [],
    equipped: { helmet: null, armor: null, boots: null, weapon: null, necklace: null },
  };

  const meta = loadMeta();

  const state = {
    mode: "ready",
    gameMode: "endless",
    selectedStage: 1,
    selectedAdventureStage: 1,
    stageTarget: 0,
    stageHitLimit: 0,
    hitsTaken: 0,
    stageFailReason: "",
    stageBossSpawned: false,
    stageCompleted: false,
    dailyTimeLeft: 0,
    dailyDamage: 0,
    dailyBossKey: "",
    dailyBossDefeated: false,
    width: 1280,
    height: 720,
    dpr: 1,
    time: 0,
    last: 0,
    score: 0,
    best: Number(storageGet("shitSupermanBest") || 0),
    level: 1,
    xp: 0,
    xpToNext: 100,
    combo: 0,
    comboTimer: 0,
    nextComboReward: 8,
    runStats: {},
    runRecorded: false,
    runMissions: [],
    runPerks: {},
    runModifier: null,
    missionBonusClaimed: false,
    nextPerkLevel: 4,
    pendingPerks: [],
    recommendedPerkKey: "",
    perkChoiceTimer: 0,
    perkPausedMode: "",
    reviveUsed: false,
    runItemLoadout: {},
    runItemUsed: {},
    droneShootTimer: 0,
    maxHealth: 100,
    health: 100,
    maxEnergy: 100,
    energy: 100,
    attackDamage: 1,
    scoreBonus: 1,
    specialTimer: 0,
    bossLevel: 1,
    nextBossScore: 700,
    bossRewardTimer: 0,
    shieldTimer: 0,
    magnetTimer: 0,
    eventTimer: 0,
    eventLabelTimer: 0,
    feverTimer: 0,
    comboSurgeTimer: 0,
    elementSurgeTimer: 0,
    elementSurgeKind: "",
    elementSurgePulse: 0,
    starTrailCharge: 0,
    starTrailLanePhase: 0,
    starTrailPulse: 0,
    mirrorCharge: 0,
    mirrorLanePhase: 0,
    mirrorPulse: 0,
    mirrorGuardTimer: 0,
    forgeHeat: 0,
    forgeLanePhase: 0,
    forgePulse: 0,
    forgeTempoTimer: 0,
    adventureExplore: 0,
    adventureIntel: 0,
    adventureCargo: 0,
    adventureRoutePulse: 0,
    adventureContractProgress: 0,
    adventureContractClaimed: false,
    adventureContractPulse: 0,
    adventureContractBoostTimer: 0,
    adventureRouteMilestoneMask: 0,
    adventureContractMilestoneMask: 0,
    adventureSupportTimer: 0,
    adventureSupportPulse: 0,
    adventureCurrentCharge: 0,
    adventureLanePhase: 0,
    adventurePulse: 0,
    adventureBoostTimer: 0,
    classicLanePhase: 0,
    classicDistrictProgress: 0,
    classicDistrictTarget: 0,
    classicDistrictClaimed: false,
    classicDistrictMilestone: 0,
    classicDistrictPulse: 0,
    classicDistrictBoostTimer: 0,
    classicRouteFocusKey: "",
    classicRouteFocusTimer: 0,
    classicRouteFocusPulse: 0,
    classicRouteClearPulse: 0,
    classicRouteClearStreak: 0,
    classicRouteLastClearGroup: "",
    classicGreenWaveCharge: 0,
    classicGreenWavePulse: 0,
    classicGreenWaveReliefTimer: 0,
    goldRushCharge: 0,
    draftLaneCharge: 0,
    mysteryLaneCharge: 0,
    mysteryLanePhase: 0,
    mysteryPulse: 0,
    classicEventPulse: 0,
    purificationPulse: 0,
    counterTimer: 0,
    counterStacks: 0,
    counterPulse: 0,
    nextFeverCombo: 12,
    nearMissTimer: 0,
    hurtFlashTimer: 0,
    recoveryTimer: 0,
    dangerLevel: 0,
    nextEventScore: 360,
    eventKind: "",
    eventName: "",
    styleScore: 0,
    styleTimer: 0,
    draftTimer: 0,
    spawnTimer: 0,
    lastHazardPatternKey: "",
    routeHazardSerial: 0,
    pickupTimer: 0,
    scroll: 0,
    speed: 185,
    shake: 0,
    muted: false,
    shootCooldown: 0,
    autoShootTimer: 0,
    ultimateTimer: 0,
    ultimateCooldown: 0,
    ultimatePulse: 0,
    ultimateKind: "poop",
    ultimateBreakTick: 0,
    mountCharge: 0,
    mountCooldown: 0,
    mountSkillTimer: 0,
    mountSkillKind: "",
    lastHeroAttackAt: 0,
    lastShotAt: 0,
    lastCanvasAttackAt: 0,
    lastCanvasTapAt: 0,
    lastCanvasTapX: -9999,
    lastCanvasTapY: -9999,
    strongAutoTimer: 0,
    strongTapHintTimer: 0,
    controlMode: storageGet("shitSupermanMoveMode") || "tap",
    controlLayout: "leftAttack",
    qualityMode: storageGet("shitSupermanQualityMode") || "auto",
    effectiveQuality: "normal",
    frameAvg: 16.7,
    qualityTimer: 0,
    qualityNoticeTimer: 0,
    sceneTransitionTimer: 0,
    sceneTransitionDuration: SCENE_TRANSITION_DURATION,
    sceneLoadReliefTimer: 0,
    backgroundWarmTimer: 0,
    backgroundFrameKey: "",
    backgroundCurrentFrame: null,
    backgroundPreviousFrame: null,
    dragPointerId: null,
    dragTargetX: 170,
    dragTargetY: 360,
    dragLastX: 170,
    dragLastY: 360,
    audio: null,
    bgm: null,
  };

  const hero = {
    x: 170,
    y: 360,
    vy: 0,
    radiusX: 44,
    radiusY: 31,
    invuln: 0,
    flap: 0,
  };

  const runPerkPool = [
    { key: "rapid", name: "疾射芯片", desc: "自动攻击更快，攻速战力提升。", color: "#f5c84b" },
    { key: "vitality", name: "厚皮披风", desc: "提高生命、能量和续航。", color: "#ff8d54" },
    { key: "collector", name: "拾荒磁场", desc: "拾取收益提高，磁吸范围更强。", color: "#dfff7a" },
    { key: "overcharge", name: "大招蓄能", desc: "补充能量，大招冷却更短。", color: "#54d0ff" },
    { key: "focus", name: "重击专精", desc: "主动攻击更省能量，暴击更狠。", color: "#c45dff" },
    { key: "drone", name: "僚机信标", desc: "召唤已选择僚机，自动补刀或支援。", color: "#9de8ff" },
    { key: "leech", name: "回收菌群", desc: "击破敌人回复生命和能量。", color: "#6bdc7b" },
    { key: "jackpot", name: "奖券体质", desc: "金币材料和宝藏奖励提高。", color: "#ffe37a" },
    { key: "berserk", name: "低血狂臭", desc: "生命越低，暴击和攻速越高。", color: "#ff5650" },
    { key: "guardian", name: "滑翔护膜", desc: "获得闪避、韧性和受击缓冲。", color: "#9de8ff" },
    { key: "windrider", name: "顺风骑士", desc: "风道加成更久，移动和闪避更灵。", color: "#54d0ff" },
    { key: "splash", name: "臭弹连爆", desc: "击破敌人时会溅射附近目标。", color: "#8b4f25" },
    { key: "weakbreaker", name: "弱点猎手", desc: "命中弱点更快破防，破防时回复能量。", color: "#fff1a6" },
    { key: "execution", name: "破防追击", desc: "Boss 破防期间伤害更高，自动攻击更兴奋。", color: "#ff8d54" },
    { key: "tactician", name: "战术嗅觉", desc: "以后天赋出现 4 选 1，选择更自由。", color: "#fff1a6" },
    { key: "timewarp", name: "擦边时停", desc: "极限闪避会短暂顺风并回能。", color: "#c45dff" },
    { key: "mystery", name: "奇遇专家", desc: "奇遇胶囊更常见，开出的效果更强。", color: "#ff8d54" },
    { key: "gatecrash", name: "风门冲撞", desc: "穿过顺风门会释放冲击波清路。", color: "#9de8ff" },
    { key: "comboGuard", name: "连击护符", desc: "受击时保留部分连击和技巧分。", color: "#dfff7a" },
  ];

  const runModifierPool = [
    { key: "tailwind", name: "顺风航线", desc: "移动更稳，得分略高", score: 1.1, energy: 1.08, gravity: 0.92, danger: -0.04, pickup: 1.04, reward: 1.05, power: 90 },
    { key: "bounty", name: "赏金航线", desc: "悬赏奖励提高，补给更多", score: 1.04, energy: 1, gravity: 1, danger: 0.02, pickup: 1.18, reward: 1.28, power: 120 },
    { key: "storm", name: "污泥风暴", desc: "敌人更密，击破收益更高", score: 1.16, energy: 0.96, gravity: 1.04, danger: 0.1, pickup: 0.94, elite: 0.08, reward: 1.16, power: 170 },
    { key: "overload", name: "能量过载", desc: "能量恢复快，大招更频繁", score: 1.05, energy: 1.28, gravity: 1, danger: 0.04, pickup: 1, cooldown: 0.86, reward: 1.08, power: 150 },
    { key: "patrol", name: "精英巡逻", desc: "精英更多，掉落更好", score: 1.12, energy: 1, gravity: 1, danger: 0.08, pickup: 0.98, elite: 0.14, reward: 1.22, power: 190 },
  ];

  const achievementDefinitions = [
    { key: "firstRun", name: "厕所城首飞", desc: "完成任意一局游戏。", target: 1, progress: () => meta.stats.totalRuns, title: "厕所城新星", reward: { coins: 300, materials: 20, shield: 1 } },
    { key: "stageRookie", name: "闯关新人", desc: "累计通关 3 个关卡。", target: 3, progress: () => meta.stats.totalStageClears, title: "闯关新人", reward: { coins: 520, materials: 34, energy: 1 } },
    { key: "stageCaptain", name: "厕所城队长", desc: "累计通关 15 个关卡。", target: 15, progress: () => meta.stats.totalStageClears, title: "厕所城队长", reward: { coins: 1600, materials: 110, magnet: 2 } },
    { key: "cleanPilot", name: "无伤飞行员", desc: "普通关或 Boss 关累计无伤通关 3 次。", target: 3, progress: () => meta.stats.cleanStageClears, title: "无伤飞行员", reward: { coins: 900, materials: 60, shield: 2 } },
    { key: "paperCollector", name: "纸卷收藏家", desc: "累计收集 200 个纸卷。", target: 200, progress: () => meta.stats.totalPapers, title: "纸卷收藏家", reward: { coins: 760, materials: 45, magnet: 1 } },
    { key: "paperTycoon", name: "黄金纸王", desc: "累计收集 1200 个纸卷。", target: 1200, progress: () => meta.stats.totalPapers, title: "黄金纸王", reward: { coins: 2400, materials: 150, magnet: 3 } },
    { key: "cleaner", name: "马桶清道夫", desc: "累计击破 100 个马桶机器人。", target: 100, progress: () => meta.stats.totalKills, title: "马桶清道夫", reward: { coins: 860, materials: 58, energy: 1 } },
    { key: "eliteBreaker", name: "精英粉碎者", desc: "累计击破 30 个精英敌人。", target: 30, progress: () => meta.stats.totalEliteKills, title: "精英粉碎者", reward: { coins: 1500, materials: 96, energy: 2 } },
    { key: "bossHunter", name: "Boss 克星", desc: "累计击败 5 个 Boss。", target: 5, progress: () => meta.stats.totalBossKills, title: "Boss 克星", reward: { coins: 1800, materials: 120, goldPoop: 1 } },
    { key: "bossNemesis", name: "废都征服者", desc: "累计击败 25 个 Boss。", target: 25, progress: () => meta.stats.totalBossKills, title: "废都征服者", reward: { coins: 5200, materials: 360, stone: 1 } },
    { key: "breakMaster", name: "破防专家", desc: "累计让 Boss 破防 20 次。", target: 20, progress: () => meta.stats.totalBossBreaks, title: "破防专家", reward: { coins: 2600, materials: 170, reroll: 2 } },
    { key: "breakCoreSpark", name: "破防核心初醒", desc: "累计拾取 5 个破防核心。", target: 5, progress: () => meta.stats.totalBreakCores, title: "破核追击者", reward: { coins: 1800, materials: 120, energy: 1 } },
    { key: "breakCoreHunter", name: "破核猎手", desc: "累计拾取 30 个破防核心。", target: 30, progress: () => meta.stats.totalBreakCores, title: "破核猎手", reward: { coins: 5600, materials: 380, reroll: 2 } },
    { key: "mountSpark", name: "坐骑共鸣初醒", desc: "累计拾取 1 个坐骑徽章。", target: 1, progress: () => meta.stats.totalMountCores, title: "坐骑共鸣者", reward: { coins: 1200, materials: 90, wing: 1 } },
    { key: "mountChorus", name: "坐骑协奏", desc: "累计触发 30 次坐骑共鸣。", target: 30, progress: () => meta.stats.totalMountCores, title: "坐骑协奏家", reward: { coins: 4800, materials: 320, storm: 1, reroll: 2 } },
    { key: "mountCollector", name: "坐骑收藏家", desc: "解锁 4 个可骑乘坐骑。", target: 4, progress: () => unlockedRideableMountCount(), title: "坐骑收藏家", reward: { coins: 4200, materials: 280, wing: 2 } },
    { key: "elementSpark", name: "五行初鸣", desc: "累计拾取 5 个五行灵核。", target: 5, progress: () => meta.stats.totalElementCores, title: "五行共鸣者", reward: { coins: 1500, materials: 100, energy: 1 } },
    { key: "elementMaster", name: "五行调律师", desc: "累计拾取 30 个五行灵核。", target: 30, progress: () => meta.stats.totalElementCores, title: "五行调律师", reward: { coins: 5200, materials: 340, stone: 1 } },
    { key: "purificationSpark", name: "净化初鸣", desc: "累计拾取 5 个净化核心。", target: 5, progress: () => meta.stats.totalPurificationCores, title: "净潮巡航者", reward: { coins: 1600, materials: 110, energy: 1 } },
    { key: "purificationMaster", name: "净化潮汐师", desc: "累计拾取 30 个净化核心。", target: 30, progress: () => meta.stats.totalPurificationCores, title: "净潮守望者", reward: { coins: 5400, materials: 360, shield: 2 } },
    { key: "starTrailSpark", name: "星轨初醒", desc: "累计触发 3 次星辉爆发。", target: 3, progress: () => meta.stats.totalStarTrailBursts, title: "星轨旅人", reward: { coins: 1600, materials: 110, energy: 1 } },
    { key: "starTrailVoyager", name: "星轨巡游者", desc: "累计触发 20 次星辉爆发。", target: 20, progress: () => meta.stats.totalStarTrailBursts, title: "星轨巡游者", reward: { coins: 5600, materials: 360, stone: 1 } },
    { key: "mirrorSpark", name: "镜流初映", desc: "累计拾取 5 枚镜流碎片。", target: 5, progress: () => meta.stats.totalMirrorShards, title: "镜流折光者", reward: { coins: 1700, materials: 115, shield: 1 } },
    { key: "mirrorMaster", name: "镜流折返师", desc: "累计触发 18 次折返脉冲。", target: 18, progress: () => meta.stats.totalMirrorBursts, title: "镜廊巡航者", reward: { coins: 5800, materials: 380, reroll: 2 } },
    { key: "forgeSpark", name: "极光铸炉初燃", desc: "累计拾取 5 枚铸炉符印。", target: 5, progress: () => meta.stats.totalForgeSigils, title: "铸炉点火者", reward: { coins: 1750, materials: 120, energy: 1 } },
    { key: "forgeMaster", name: "极光锻造师", desc: "累计触发 18 次铸炉波。", target: 18, progress: () => meta.stats.totalForgeWaves, title: "极光锻造师", reward: { coins: 6000, materials: 390, storm: 1 } },
    { key: "currentShellFinder", name: "云海贝壳拾光", desc: "累计拾取 5 枚顺流贝壳。", target: 5, progress: () => meta.stats.totalCurrentShells, title: "顺流拾光者", reward: { coins: 1800, materials: 120, energy: 1 } },
    { key: "currentPilot", name: "云海冲流飞手", desc: "累计触发 20 次冲流爆发。", target: 20, progress: () => meta.stats.totalAdventureSurges, title: "云海冲流者", reward: { coins: 6200, materials: 400, wing: 1 } },
    { key: "contractScout", name: "冒险契约初签", desc: "累计完成 3 次冒险契约。", target: 3, progress: () => meta.stats.totalAdventureContracts, title: "契约新星", reward: { coins: 2600, materials: 170, wing: 1 } },
    { key: "contractVeteran", name: "云海契约官", desc: "累计完成 18 次冒险契约。", target: 18, progress: () => meta.stats.totalAdventureContracts, title: "云海契约官", reward: { coins: 7200, materials: 480, reroll: 2, storm: 1 } },
    { key: "supportBeacon", name: "远征信标", desc: "累计触发 8 次冒险远征支援。", target: 8, progress: () => meta.stats.totalAdventureSupports, title: "远征信标", reward: { coins: 3200, materials: 210, energy: 2 } },
    { key: "supportNavigator", name: "云海导航官", desc: "累计触发 36 次冒险远征支援。", target: 36, progress: () => meta.stats.totalAdventureSupports, title: "云海导航官", reward: { coins: 7600, materials: 520, wing: 2, reroll: 1 } },
    { key: "treasureHunter", name: "宝藏猎手", desc: "累计击破 10 个宝藏马桶。", target: 10, progress: () => meta.stats.totalTreasureKills, title: "宝藏猎手", reward: { coins: 2000, materials: 120, magnet: 2 } },
    { key: "nearMissKing", name: "极限闪避王", desc: "累计触发 50 次极限闪避。", target: 50, progress: () => meta.stats.totalNearMisses, title: "极限闪避王", reward: { coins: 1700, materials: 100, shield: 2 } },
    { key: "counterSpark", name: "闪反初醒", desc: "累计触发 5 次闪反冲击。", target: 5, progress: () => meta.stats.totalCounterBursts, title: "闪反新星", reward: { coins: 1600, materials: 110, energy: 1 } },
    { key: "counterMaster", name: "贴身反击者", desc: "累计触发 25 次闪反冲击。", target: 25, progress: () => meta.stats.totalCounterBursts, title: "贴身反击者", reward: { coins: 5200, materials: 360, shield: 2, reroll: 1 } },
    { key: "comboMaster", name: "连击大师", desc: "单局最高连击达到 35。", target: 35, progress: () => meta.stats.bestCombo, title: "连击大师", reward: { coins: 1800, materials: 105, energy: 2 } },
    { key: "comboPilgrim", name: "连击祭坛巡礼", desc: "累计拾取 5 枚连击祭印。", target: 5, progress: () => meta.stats.totalComboSigils, title: "祭坛巡礼者", reward: { coins: 1900, materials: 120, energy: 2 } },
    { key: "comboRitualist", name: "连击仪式师", desc: "累计拾取 25 枚连击祭印。", target: 25, progress: () => meta.stats.totalComboSigils, title: "连击仪式师", reward: { coins: 5200, materials: 360, shield: 2, wing: 1 } },
    { key: "missionSweeper", name: "悬赏全清", desc: "累计全清 5 次局内悬赏。", target: 5, progress: () => meta.stats.bountyClears, title: "悬赏全清", reward: { coins: 2200, materials: 130, goldPoop: 1 } },
    { key: "dailyBruiser", name: "每日重拳", desc: "每日挑战累计造成 20000 伤害。", target: 20000, progress: () => meta.stats.totalDailyDamage, title: "每日重拳", reward: { coins: 2600, materials: 180, energy: 2 } },
    { key: "endlessSprinter", name: "五十万冲刺", desc: "无尽或任意模式单局达到 500000 分。", target: 500000, progress: () => meta.stats.bestScore, title: "五十万冲刺", reward: { coins: 3600, materials: 240, stone: 1 } },
    { key: "levelVeteran", name: "Lv.25 老兵", desc: "当前英雄等级达到 25。", target: 25, progress: () => currentHeroLevel(), title: "Lv.25 老兵", reward: { coins: 2500, materials: 180, shield: 2 } },
    { key: "levelLegend", name: "满级传说", desc: "当前英雄等级达到 50。", target: 50, progress: () => currentHeroLevel(), title: "满级传说", reward: { coins: 6000, materials: 460, stone: 1 } },
    { key: "evolutionOne", name: "第一次进化", desc: "任意英雄完成 1 次进化。", target: 1, progress: () => maxHeroEvolution(), title: "进化新星", reward: { coins: 1800, materials: 120, energy: 2 } },
    { key: "evolutionFour", name: "终极形态", desc: "任意英雄完成 4 次进化。", target: 4, progress: () => maxHeroEvolution(), title: "终极形态", reward: { coins: 7000, materials: 520, goldPoop: 2 } },
    { key: "purpleGear", name: "紫装上身", desc: "穿戴任意紫色或更高品质装备。", target: 1, progress: () => equippedQualityCount(3), title: "紫装上身", reward: { coins: 1500, materials: 95, energy: 1 } },
    { key: "rainbowGear", name: "彩装传说", desc: "穿戴任意彩色品质装备。", target: 1, progress: () => equippedQualityCount(6), title: "彩装传说", reward: { coins: 9000, materials: 650, stone: 1 } },
  ];

  function loadImage(src, lazy = false) {
    const img = new Image();
    img.decoding = "async";
    try {
      img.fetchPriority = lazy ? "low" : "auto";
    } catch {}
    img.dataset.src = src;
    if (!lazy) img.src = src;
    return img;
  }

  function ensureImage(img) {
    if (img && !img.src && img.dataset && img.dataset.src) {
      img.src = img.dataset.src;
    }
    return img;
  }

  function decodeImageWhenReady(img) {
    if (!img || !img.src) return Promise.resolve();
    if (img.complete && img.naturalWidth && typeof img.decode !== "function") return Promise.resolve();
    if (typeof img.decode === "function") {
      return img.decode().catch(() => {});
    }
    return new Promise((resolve) => {
      if (img.complete) {
        resolve();
        return;
      }
      const done = () => resolve();
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  }

  function warmAssetImage(key, priority = "low") {
    if (!key || warmedAssetKeys.has(key)) return Promise.resolve();
    const img = assets[key];
    if (!img) return Promise.resolve();
    warmedAssetKeys.add(key);
    try {
      img.fetchPriority = priority;
    } catch {}
    ensureImage(img);
    return decodeImageWhenReady(img);
  }

  function scheduleIdleWork(callback, timeout = 1200) {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(callback, { timeout });
      return;
    }
    window.setTimeout(callback, 80);
  }

  function warmAssetQueue(keys, options = {}) {
    const queue = keys.filter((key) => key && !warmedAssetKeys.has(key));
    if (queue.length === 0) return;
    const priority = options.priority || "low";
    const delay = options.delay === undefined ? 120 : options.delay;
    const runNext = () => {
      const key = queue.shift();
      if (!key) return;
      warmAssetImage(key, priority).finally(() => {
        if (queue.length === 0) return;
        window.setTimeout(() => scheduleIdleWork(runNext), delay);
      });
    };
    scheduleIdleWork(runNext);
  }

  function scheduleGameplayAssetWarmup(reason = "boot") {
    if (warmupScheduled && reason !== "start") return;
    warmupScheduled = true;
    warmAssetQueue(MAP_WARMUP_ASSET_KEYS, { priority: reason === "start" ? "high" : "low", delay: 40 });
    window.setTimeout(() => warmAssetQueue(BOSS_WARMUP_ASSET_KEYS, { priority: "low", delay: 170 }), 360);
    window.setTimeout(() => warmAssetQueue(HERO_WARMUP_ASSET_KEYS, { priority: "low", delay: 210 }), 920);
  }

  function storageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }

  function emptyEquipped() {
    return equipmentSlots.reduce((slots, slot) => {
      slots[slot.key] = null;
      return slots;
    }, {});
  }

  function qualityByKey(key) {
    return equipmentQualities.find((quality) => quality.key === key) || equipmentQualities[0];
  }

  function qualityIndex(key) {
    return Math.max(0, equipmentQualities.findIndex((quality) => quality.key === key));
  }

  function normalizeEquipmentMeta(target) {
    target.equipped = { ...emptyEquipped(), ...(target.equipped || {}) };
    for (const slot of equipmentSlots) {
      target.equipped[slot.key] = normalizeEquipmentItem(target.equipped[slot.key], slot.key);
    }
    target.equipmentBag = Array.isArray(target.equipmentBag)
      ? target.equipmentBag.map((item) => normalizeEquipmentItem(item)).filter(Boolean).slice(0, 40)
      : [];
  }

  function normalizeEquipmentItem(item, fallbackSlot = "") {
    if (!item || typeof item !== "object") return null;
    const slot = equipmentSlots.some((entry) => entry.key === item.slot) ? item.slot : fallbackSlot;
    if (!slot || !equipmentSlots.some((entry) => entry.key === slot)) return null;
    const quality = qualityByKey(item.quality).key;
    const stats = item.stats && typeof item.stats === "object" ? item.stats : {};
    return {
      id: item.id || `eq_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      slot,
      quality,
      level: Math.max(1, Math.floor(Number(item.level) || 1)),
      name: item.name || equipmentName(slot, quality),
      iconVariant: clamp(Math.floor(Number(item.iconVariant) || 0), 0, 1),
      stats: {
        health: Math.max(0, Math.floor(Number(stats.health) || 0)),
        energy: Math.max(0, Math.floor(Number(stats.energy) || 0)),
        attack: Math.max(0, Math.floor(Number(stats.attack) || 0)),
        luck: Math.max(0, Math.floor(Number(stats.luck) || 0)),
        crit: Math.max(0, Math.floor(Number(stats.crit) || 0)),
        dodge: Math.max(0, Math.floor(Number(stats.dodge) || 0)),
        regen: Math.max(0, Math.floor(Number(stats.regen) || 0)),
        guard: Math.max(0, Math.floor(Number(stats.guard) || 0)),
        haste: Math.max(0, Math.floor(Number(stats.haste) || 0)),
      },
    };
  }

  function normalizeStats(stats) {
    const normalized = { ...statDefaults, ...((stats && typeof stats === "object") ? stats : {}) };
    for (const key of Object.keys(statDefaults)) {
      normalized[key] = Math.max(0, Math.floor(Number(normalized[key]) || 0));
    }
    return normalized;
  }

  function normalizeRewardBundle(reward = {}) {
    return {
      coins: Math.max(0, Math.floor(Number(reward.coins) || 0)),
      materials: Math.max(0, Math.floor(Number(reward.materials) || 0)),
      poopCoins: Math.max(0, Math.floor(Number(reward.poopCoins) || 0)),
      shield: Math.max(0, Math.floor(Number(reward.shield) || 0)),
      magnet: Math.max(0, Math.floor(Number(reward.magnet) || 0)),
      energy: Math.max(0, Math.floor(Number(reward.energy) || 0)),
      storm: Math.max(0, Math.floor(Number(reward.storm) || 0)),
      reroll: Math.max(0, Math.floor(Number(reward.reroll) || 0)),
      wing: Math.max(0, Math.floor(Number(reward.wing) || 0)),
      revive: Math.max(0, Math.floor(Number(reward.revive) || 0)),
      stone: Math.max(0, Math.floor(Number(reward.stone) || 0)),
    };
  }

  function rollHolidayReward(reward = {}) {
    const bundle = normalizeRewardBundle(reward);
    const basePoopCoins = bundle.poopCoins || 0;
    const crit = basePoopCoins > 0 && Math.random() < HOLIDAY_POOP_COIN_CRIT_RATE;
    if (crit) bundle.poopCoins = basePoopCoins * 2;
    return { reward: bundle, crit };
  }

  function normalizeMailMessage(message) {
    if (!message || typeof message !== "object") return null;
    const id = String(message.id || "");
    const title = String(message.title || "");
    if (!id || !title) return null;
    return {
      id,
      type: String(message.type || "weekend"),
      title,
      body: String(message.body || ""),
      theme: String(message.theme || ""),
      blessing: String(message.blessing || ""),
      date: String(message.date || todayKey()),
      expires: String(message.expires || ""),
      reward: normalizeRewardBundle(message.reward),
      crit: !!message.crit,
      claimed: !!message.claimed,
      claimedAt: String(message.claimedAt || ""),
    };
  }

  function normalizeMail(mail = {}) {
    const source = mail && typeof mail === "object" ? mail : {};
    const seen = new Set();
    const messages = (Array.isArray(source.messages) ? source.messages : [])
      .map(normalizeMailMessage)
      .filter((message) => {
        if (!message || seen.has(message.id)) return false;
        seen.add(message.id);
        return true;
      })
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, MAIL_HISTORY_LIMIT);
    return {
      lastSyncDate: String(source.lastSyncDate || ""),
      claimedTotal: Math.max(0, Math.floor(Number(source.claimedTotal) || 0)),
      messages,
    };
  }

  function loadMeta() {
    try {
      const saved = JSON.parse(storageGet("shitSupermanMeta") || "null");
      const loaded = {
        ...metaDefaults,
        ...(saved || {}),
        inventory: { ...metaDefaults.inventory, ...((saved && saved.inventory) || {}) },
        equipped: { ...emptyEquipped(), ...((saved && saved.equipped) || {}) },
        equipmentBag: Array.isArray(saved && saved.equipmentBag) ? saved.equipmentBag : [],
        heroLevels: { ...metaDefaults.heroLevels, ...((saved && saved.heroLevels) || {}) },
        heroEvolutions: { ...metaDefaults.heroEvolutions, ...((saved && saved.heroEvolutions) || {}) },
        heroEvoStones: { ...metaDefaults.heroEvoStones, ...((saved && saved.heroEvoStones) || {}) },
        unlockedHeroes: { ...metaDefaults.unlockedHeroes, ...((saved && saved.unlockedHeroes) || {}) },
        mountLevels: { ...metaDefaults.mountLevels, ...((saved && saved.mountLevels) || {}) },
        unlockedMounts: { ...metaDefaults.unlockedMounts, ...((saved && saved.unlockedMounts) || {}) },
        unlockedDrones: { ...metaDefaults.unlockedDrones, ...((saved && saved.unlockedDrones) || {}) },
        trialRewards: {
          heroes: { ...metaDefaults.trialRewards.heroes, ...((saved && saved.trialRewards && saved.trialRewards.heroes) || {}) },
          mounts: { ...metaDefaults.trialRewards.mounts, ...((saved && saved.trialRewards && saved.trialRewards.mounts) || {}) },
        },
        trialAccess: { ...metaDefaults.trialAccess, ...((saved && saved.trialAccess) || {}) },
        mail: normalizeMail(saved && saved.mail),
        signIn: { ...metaDefaults.signIn, ...((saved && saved.signIn) || {}) },
        dailyChallenge: { ...metaDefaults.dailyChallenge, ...((saved && saved.dailyChallenge) || {}) },
        redeemedCodes: { ...metaDefaults.redeemedCodes, ...((saved && saved.redeemedCodes) || {}) },
        heroStoneClaims: { ...metaDefaults.heroStoneClaims, ...((saved && saved.heroStoneClaims) || {}) },
        cleared: { ...((saved && saved.cleared) || {}) },
        adventureCleared: { ...((saved && saved.adventureCleared) || {}) },
        achievements: { ...((saved && saved.achievements) || {}) },
        stats: normalizeStats(saved && saved.stats),
      };
      loaded.heroLevel = clamp(Math.floor(Number(loaded.heroLevel) || 1), 1, MAX_HERO_LEVEL);
      loaded.evolution = Math.max(0, Math.floor(Number(loaded.evolution) || 0));
      loaded.evoStones = Math.max(0, Math.floor(Number(loaded.evoStones) || 0));
      loaded.signIn.streak = Math.max(0, Math.floor(Number(loaded.signIn.streak) || 0));
      loaded.signIn.lastDate = String(loaded.signIn.lastDate || "");
      loaded.trialHero = String(loaded.trialHero || "");
      loaded.trialMount = String(loaded.trialMount || "");
      loaded.selectedDrone = String(loaded.selectedDrone || "poopOrb");
      loaded.trialAccess = normalizeTrialAccess(loaded.trialAccess);
      const savedHeroLevels = saved && saved.heroLevels && typeof saved.heroLevels === "object" ? saved.heroLevels : {};
      const savedHeroEvoStones = saved && saved.heroEvoStones && typeof saved.heroEvoStones === "object" ? saved.heroEvoStones : {};
      const savedHeroStoneClaims = saved && saved.heroStoneClaims && typeof saved.heroStoneClaims === "object" ? saved.heroStoneClaims : {};
      for (const profile of heroProfiles) {
        const migratedLevel = profile.key === "poop" || (saved && saved.selectedHero === profile.key) ? loaded.heroLevel : 1;
        loaded.heroLevels[profile.key] = clamp(Math.floor(Number(savedHeroLevels[profile.key] ?? migratedLevel) || 1), 1, MAX_HERO_LEVEL);
        loaded.heroEvolutions[profile.key] = clamp(Math.floor(Number(loaded.heroEvolutions[profile.key] ?? (profile.key === "poop" ? loaded.evolution : 0)) || 0), 0, 4);
        loaded.heroEvoStones[profile.key] = Math.max(0, Math.floor(Number(savedHeroEvoStones[profile.key] ?? (profile.key === "poop" ? loaded.evoStones : 0)) || 0));
        loaded.heroStoneClaims[profile.key] = Array.isArray(savedHeroStoneClaims[profile.key])
          ? savedHeroStoneClaims[profile.key].filter((score) => ENDLESS_EVO_STONE_MILESTONES.includes(score))
          : [];
        const signInUnlocked = profile.unlockDay ? loaded.signIn.streak >= profile.unlockDay : false;
        loaded.unlockedHeroes[profile.key] = profile.key === "poop" ? true : !!profile.unlocked || signInUnlocked;
      }
      loaded.evolution = loaded.heroEvolutions.poop;
      loaded.unlockedHeroes.poop = true;
      if (!heroTrialEligible(heroProfileMap[loaded.trialHero]) || loaded.unlockedHeroes[loaded.trialHero]) loaded.trialHero = "";
      const selectedHeroTrial = loaded.trialHero === loaded.selectedHero
        && heroTrialEligible(heroProfileMap[loaded.selectedHero])
        && !loaded.unlockedHeroes[loaded.selectedHero];
      loaded.selectedHero = loaded.unlockedHeroes[loaded.selectedHero] || selectedHeroTrial ? loaded.selectedHero : "poop";
      loaded.heroLevel = loaded.heroLevels[loaded.selectedHero] || 1;
      loaded.evoStones = loaded.heroEvoStones[loaded.selectedHero] || 0;
      for (const profile of mountProfiles) {
        loaded.mountLevels[profile.key] = clamp(Math.floor(Number(loaded.mountLevels[profile.key]) || 0), 0, 15);
        const signInUnlocked = profile.unlockDay ? loaded.signIn.streak >= profile.unlockDay : false;
        loaded.unlockedMounts[profile.key] = !!profile.free || profile.key === "plungerBoard" || signInUnlocked || !!loaded.unlockedMounts[profile.key] || loaded.mountLevels[profile.key] > 0;
        if (profile.key === "none") loaded.mountLevels[profile.key] = 0;
        else if (loaded.unlockedMounts[profile.key] && loaded.mountLevels[profile.key] < 1) loaded.mountLevels[profile.key] = 1;
      }
      loaded.unlockedMounts.none = true;
      loaded.mountLevels.none = 0;
      loaded.unlockedMounts.plungerBoard = true;
      loaded.mountLevels.plungerBoard = Math.max(1, loaded.mountLevels.plungerBoard || 1);
      if (!mountTrialEligible(mountProfileMap[loaded.trialMount]) || loaded.unlockedMounts[loaded.trialMount]) loaded.trialMount = "";
      const selectedMountTrial = loaded.trialMount === loaded.selectedMount
        && mountTrialEligible(mountProfileMap[loaded.selectedMount])
        && !loaded.unlockedMounts[loaded.selectedMount];
      loaded.selectedMount = loaded.unlockedMounts[loaded.selectedMount] || selectedMountTrial ? loaded.selectedMount : "plungerBoard";
      for (const profile of droneProfiles) {
        loaded.unlockedDrones[profile.key] = !!profile.free || !!loaded.unlockedDrones[profile.key];
      }
      loaded.unlockedDrones.poopOrb = true;
      loaded.selectedDrone = loaded.unlockedDrones[loaded.selectedDrone] ? loaded.selectedDrone : "poopOrb";
      loaded.dailyChallenge.date = String(loaded.dailyChallenge.date || "");
      loaded.dailyChallenge.rewardedDamage = Math.max(0, Math.floor(Number(loaded.dailyChallenge.rewardedDamage) || 0));
      loaded.dailyChallenge.bossDefeated = !!loaded.dailyChallenge.bossDefeated;
      if (!loaded.redeemedCodes || typeof loaded.redeemedCodes !== "object" || Array.isArray(loaded.redeemedCodes)) loaded.redeemedCodes = {};
      loaded.activeTitle = String(loaded.activeTitle || "");
      loaded.coins = Math.max(0, Math.floor(Number(loaded.coins) || 0));
      loaded.materials = Math.max(0, Math.floor(Number(loaded.materials) || 0));
      loaded.poopCoins = Math.max(0, Math.floor(Number(loaded.poopCoins) || 0));
      loaded.maxStage = clamp(Math.floor(Number(loaded.maxStage) || 1), 1, stages.length);
      loaded.maxAdventureStage = clamp(Math.floor(Number(loaded.maxAdventureStage) || 1), 1, adventureStages.length);
      loaded.stats.bestScore = Math.max(loaded.stats.bestScore, Math.floor(Number(storageGet("shitSupermanBest")) || 0));
      const clearedStages = Object.keys(loaded.cleared)
        .filter((key) => loaded.cleared[key])
        .map((key) => Math.floor(Number(key) || 0))
        .filter(Boolean);
      const clearedAdventureStages = Object.keys(loaded.adventureCleared)
        .filter((key) => loaded.adventureCleared[key])
        .map((key) => Math.floor(Number(key) || 0))
        .filter(Boolean);
      loaded.stats.totalStageClears = Math.max(loaded.stats.totalStageClears, clearedStages.length);
      loaded.stats.bestStage = Math.max(loaded.stats.bestStage, ...clearedStages, ...clearedAdventureStages, Math.max(0, loaded.maxStage - 1), Math.max(0, loaded.maxAdventureStage - 1));
      loaded.endlessStoneClaims = Array.isArray(loaded.endlessStoneClaims)
        ? loaded.endlessStoneClaims.filter((score) => ENDLESS_EVO_STONE_MILESTONES.includes(score))
        : [];
      normalizeEquipmentMeta(loaded);
      return loaded;
    } catch {
      return JSON.parse(JSON.stringify(metaDefaults));
    }
  }

  function persistMeta() {
    storageSet("shitSupermanMeta", JSON.stringify(meta));
  }

  function saveMeta() {
    persistMeta();
    updateMetaUi();
  }

  function isStageMode(mode = state.gameMode) {
    return mode === "stage" || mode === "adventure";
  }

  function activeStageList() {
    return state.gameMode === "adventure" ? adventureStages : stages;
  }

  function activeStageNumber() {
    return state.gameMode === "adventure" ? state.selectedAdventureStage : state.selectedStage;
  }

  function setActiveStageNumber(number) {
    if (state.gameMode === "adventure") {
      state.selectedAdventureStage = clamp(Math.floor(Number(number) || 1), 1, adventureStages.length);
    } else {
      state.selectedStage = clamp(Math.floor(Number(number) || 1), 1, stages.length);
    }
  }

  function activeStageMax() {
    return state.gameMode === "adventure" ? meta.maxAdventureStage : meta.maxStage;
  }

  function activeStageCleared() {
    return state.gameMode === "adventure" ? meta.adventureCleared : meta.cleared;
  }

  function activeStage() {
    const list = activeStageList();
    return list[activeStageNumber() - 1] || list[0];
  }

  function adventureRouteTargets(stage = activeStage()) {
    if (!stage || state.gameMode !== "adventure") return { explore: 0, intel: 0, cargo: 0 };
    const arc = Math.max(1, Math.ceil((stage.number || 1) / 10));
    return {
      explore: Math.max(1, Math.floor(stage.routeExplore || (stage.bossStage ? 120 + arc * 24 : 82 + (stage.number || 1) * 3))),
      intel: Math.max(0, Math.floor(stage.routeIntel || (stage.bossStage ? 3 + arc : (stage.number || 1) >= 7 ? 2 : 1))),
      cargo: Math.max(0, Math.floor(stage.routeCargo || (stage.bossStage ? 2 + arc : (stage.number || 1) >= 11 ? 2 : 1))),
    };
  }

  function adventureRouteProgress(stage = activeStage()) {
    const target = adventureRouteTargets(stage);
    return {
      explore: clamp(state.adventureExplore || 0, 0, target.explore),
      intel: clamp(state.adventureIntel || 0, 0, target.intel),
      cargo: clamp(state.adventureCargo || 0, 0, target.cargo),
      target,
    };
  }

  function adventureRouteReady(stage = activeStage()) {
    if (state.gameMode !== "adventure") return true;
    const route = adventureRouteProgress(stage);
    return route.explore >= route.target.explore && route.intel >= route.target.intel && route.cargo >= route.target.cargo;
  }

  function adventureRoutePercentFrom(route) {
    const explore = route.target.explore > 0 ? route.explore / route.target.explore : 1;
    const intel = route.target.intel > 0 ? route.intel / route.target.intel : 1;
    const cargo = route.target.cargo > 0 ? route.cargo / route.target.cargo : 1;
    return clamp((explore * 0.58 + intel * 0.21 + cargo * 0.21) * 100, 0, 100);
  }

  function adventureRoutePercent(stage = activeStage()) {
    return adventureRoutePercentFrom(adventureRouteProgress(stage));
  }

  function adventureRouteStatusText(stage = activeStage()) {
    const route = adventureRouteProgress(stage);
    return `航图 ${Math.floor(adventureRoutePercent(stage))}% · 线索 ${Math.floor(route.intel)}/${route.target.intel} · 货箱 ${Math.floor(route.cargo)}/${route.target.cargo}`;
  }

  function adventureRouteShortText(stage = activeStage()) {
    const route = adventureRouteProgress(stage);
    return `航图 ${Math.floor(adventureRoutePercent(stage))}% · 索 ${Math.floor(route.intel)}/${route.target.intel} · 箱 ${Math.floor(route.cargo)}/${route.target.cargo}`;
  }

  function markAdventureRouteBlocked(stage = activeStage()) {
    state.eventName = `继续探索 · ${adventureRouteShortText(stage)}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    state.adventureRoutePulse = Math.max(state.adventureRoutePulse || 0, 0.72);
    state.nextEventScore = Math.min(state.nextEventScore || Infinity, Math.floor((state.score || 0) + 180));
    state.pickupTimer = Math.min(state.pickupTimer || 1, 0.28);
  }

  function adventureMilestoneIndex(threshold) {
    return ADVENTURE_SUPPORT_THRESHOLDS.indexOf(threshold);
  }

  function markAdventureMilestones(maskKey, afterPercent) {
    for (let i = 0; i < ADVENTURE_SUPPORT_THRESHOLDS.length; i += 1) {
      if (afterPercent >= ADVENTURE_SUPPORT_THRESHOLDS[i]) state[maskKey] = (state[maskKey] || 0) | (1 << i);
    }
  }

  function checkAdventureSupportMilestones(kind, beforePercent, afterPercent) {
    if (state.gameMode !== "adventure" || state.mode !== "playing") return;
    const maskKey = kind === "contract" ? "adventureContractMilestoneMask" : "adventureRouteMilestoneMask";
    let pickedThreshold = 0;
    for (const threshold of ADVENTURE_SUPPORT_THRESHOLDS) {
      const bit = 1 << adventureMilestoneIndex(threshold);
      if (beforePercent < threshold && afterPercent >= threshold && !((state[maskKey] || 0) & bit)) {
        pickedThreshold = threshold;
      }
    }
    markAdventureMilestones(maskKey, afterPercent);
    if (pickedThreshold > 0) grantAdventureSupport(kind, pickedThreshold);
  }

  function adventureSupportPickupType(kind, threshold, contract) {
    if (threshold >= 100) {
      if (contract && contract.key === "cargo") return "supplyCrate";
      if (contract && contract.key === "relic") return "relicShard";
      if (contract && contract.key === "scout") return "currentShell";
      return "focusOrb";
    }
    if (kind === "contract") return threshold >= 75 ? (contract && contract.key === "hunt" ? "breakCore" : "focusOrb") : "energy";
    if (contract && contract.key === "cargo" && threshold >= 50) return "supplyCrate";
    if (contract && contract.key === "relic" && threshold >= 75) return "mysteryCapsule";
    return threshold >= 75 ? "currentShell" : "bonusPaper";
  }

  function grantAdventureSupport(kind, threshold) {
    if (state.gameMode !== "adventure" || state.mode !== "playing") return;
    const stage = activeStage();
    const contract = adventureContractForStage(stage);
    const index = Math.max(0, adventureMilestoneIndex(threshold));
    const strength = 1 + index * 0.32 + (kind === "contract" ? 0.12 : 0);
    const s = playScale();
    const pickupType = adventureSupportPickupType(kind, threshold, contract);
    const supportName = kind === "contract" ? "契约支援" : "航图支援";
    state.adventureSupportTimer = Math.max(state.adventureSupportTimer || 0, 4.2 + index * 0.9);
    state.adventureSupportPulse = Math.max(state.adventureSupportPulse || 0, 1.1);
    state.recoveryTimer = Math.max(state.recoveryTimer || 0, 0.75 + index * 0.18);
    state.energy = clamp(state.energy + state.maxEnergy * (0.1 + index * 0.025), 0, state.maxEnergy);
    state.health = clamp(state.health + state.maxHealth * (0.04 + index * 0.012), 0, state.maxHealth);
    state.draftTimer = Math.max(state.draftTimer || 0, 0.9 + index * 0.38);
    state.comboTimer = Math.max(state.comboTimer || 0, 2.4 + index * 0.25);
    state.combo += threshold >= 100 ? 2 : 1;
    recordRunStat("maxCombo", state.combo);
    recordRunStat("adventureSupports", 1);
    addRoundedScore((180 + threshold * 4 + state.combo * 8) * state.scoreBonus * styleMultiplier());
    gainXp(34 + index * 18 + (stage.number || 1) * 1.5);
    gainStyle(13 + index * 4, supportName, contract ? contract.color : "#5bded4");
    shockwaveFrom(hero.x + (128 + index * 22) * s, hero.y, 0.38 + strength * 0.16, supportName);
    addPickup({
      type: pickupType,
      x: Math.min(state.width - 64 * s, hero.x + (210 + index * 24) * s),
      y: clamp(hero.y + random(-28, 28) * s, playTop() + 38 * s, playBottom() - 38 * s),
      r: pickupRadius(pickupType, s, 1 + index * 0.18),
      strength: 1 + index * 0.18,
      elementKind: pickupType === "elementCore" ? randomElementKind() : "",
      phase: random(0, 6.28),
    }, true);
    showRewardToast([
      { type: "adventureSupport", label: supportName, amount: 1 },
      { type: pickupType, label: rewardLabel(pickupType), amount: 1 },
    ], { duration: 1500 });
    state.eventName = `${supportName} ${threshold}%`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    pop(hero.x + 70 * s, hero.y, contract ? contract.color : "#5bded4", 20 + index * 3);
    beep(980 + index * 80, 0.06, "triangle", 0.04);
  }

  function addAdventureRouteProgress(amount = 0, options = {}) {
    if (state.gameMode !== "adventure" || state.mode !== "playing") return;
    const target = adventureRouteTargets();
    const before = {
      explore: state.adventureExplore || 0,
      intel: state.adventureIntel || 0,
      cargo: state.adventureCargo || 0,
    };
    const beforePercent = adventureRoutePercentFrom({ ...before, target });
    const exploreGain = Math.max(0, Number(amount) || 0);
    const intelGain = Math.max(0, Math.floor(Number(options.intel) || 0));
    const cargoGain = Math.max(0, Math.floor(Number(options.cargo) || 0));
    state.adventureExplore = clamp(before.explore + exploreGain, 0, target.explore);
    state.adventureIntel = clamp(before.intel + intelGain, 0, target.intel);
    state.adventureCargo = clamp(before.cargo + cargoGain, 0, target.cargo);
    const gainedExplore = state.adventureExplore - before.explore;
    const gainedIntel = state.adventureIntel - before.intel;
    const gainedCargo = state.adventureCargo - before.cargo;
    if (gainedExplore <= 0 && gainedIntel <= 0 && gainedCargo <= 0) return;
    recordRunStat("adventureExplore", gainedExplore);
    if (gainedIntel > 0) recordRunStat("adventureIntel", gainedIntel);
    if (gainedCargo > 0) recordRunStat("adventureCargo", gainedCargo);
    if (!options.silent || options.pulse) state.adventureRoutePulse = Math.max(state.adventureRoutePulse || 0, options.major ? 1 : 0.52);
    if (!options.silent) {
      state.eventName = options.label || (gainedIntel > 0 ? "航图线索" : gainedCargo > 0 ? "航线货箱" : "航图测绘");
      state.eventLabelTimer = Math.max(state.eventLabelTimer, options.major ? 1.35 : 0.88);
    }
    checkAdventureSupportMilestones("route", beforePercent, adventureRoutePercentFrom({
      explore: state.adventureExplore || 0,
      intel: state.adventureIntel || 0,
      cargo: state.adventureCargo || 0,
      target,
    }));
  }

  function updateAdventureRoute(dt) {
    state.adventureRoutePulse = Math.max(0, (state.adventureRoutePulse || 0) - dt * 1.05);
    if (state.gameMode !== "adventure" || state.mode !== "playing" || adventureRouteReady()) return;
    const scoreGate = state.score > 120 || state.eventKind === "adventureCurrent";
    if (!scoreGate) return;
    addAdventureRouteProgress(dt * (0.42 + Math.min(0.52, state.speed / 520)), { silent: true });
  }

  function adventureContractForStage(stage = activeStage()) {
    if (!stage || !stage.adventure) return null;
    const key = stage.contractKey || adventureContractKeyForStage(stage.number || 1);
    const profile = adventureContractProfiles.find((entry) => entry.key === key) || adventureContractProfiles[0];
    const fallbackTarget = Math.round((stage.bossStage ? 54 : 32) + (stage.number || 1) * (stage.bossStage ? 1.6 : 1.9));
    return { ...profile, target: Math.max(1, Math.floor(stage.contractTarget || fallbackTarget)) };
  }

  function adventureContractProgressInfo(stage = activeStage()) {
    const contract = adventureContractForStage(stage);
    if (!contract) return { contract: null, value: 0, target: 0, ready: true, percent: 100 };
    const value = clamp(state.adventureContractProgress || 0, 0, contract.target);
    const ready = !!state.adventureContractClaimed || value >= contract.target;
    return {
      contract,
      value,
      target: contract.target,
      ready,
      percent: clamp((value / Math.max(1, contract.target)) * 100, 0, 100),
    };
  }

  function adventureContractReady(stage = activeStage()) {
    if (state.gameMode !== "adventure") return true;
    return adventureContractProgressInfo(stage).ready;
  }

  function adventureStageObjectivesReady(stage = activeStage()) {
    if (state.gameMode !== "adventure") return true;
    return adventureRouteReady(stage) && adventureContractReady(stage);
  }

  function adventureContractShortText(stage = activeStage()) {
    const info = adventureContractProgressInfo(stage);
    if (!info.contract) return "";
    return `${info.contract.short} ${Math.floor(info.value)}/${info.target}`;
  }

  function markAdventureObjectivesBlocked(stage = activeStage()) {
    if (adventureRouteReady(stage) && !adventureContractReady(stage)) {
      state.eventName = `继续契约 · ${adventureContractShortText(stage)}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
      state.adventureContractPulse = Math.max(state.adventureContractPulse || 0, 0.86);
      state.nextEventScore = Math.min(state.nextEventScore || Infinity, Math.floor((state.score || 0) + 150));
      state.pickupTimer = Math.min(state.pickupTimer || 1, 0.22);
      return;
    }
    markAdventureRouteBlocked(stage);
  }

  function adventureContractStatGain(stat, amount, contract) {
    const v = Math.max(0, Number(amount) || 0);
    if (!contract || v <= 0) return 0;
    if (contract.key === "scout") {
      return ({
        nearMisses: 7.2,
        adventureExplore: 0.16,
        adventureIntel: 6.5,
        adventureSurges: 12,
        currentShells: 9,
        draftGates: 6.4,
        mysteries: 4.2,
      }[stat] || 0) * v;
    }
    if (contract.key === "cargo") {
      return ({
        supplies: 14,
        relics: 9,
        adventureCargo: 8.5,
        currentShells: 7.2,
        papers: 0.82,
        bonusPaper: 1.2,
        mysteries: 5.2,
        elementCores: 6.8,
        purificationCores: 7.4,
      }[stat] || 0) * v;
    }
    if (contract.key === "hunt") {
      return stat === "bossDamage"
        ? Math.min(14, v * 0.018)
        : ({
          kills: 3.2,
          eliteKills: 12,
          treasureKills: 16,
          bossBreaks: 17,
          breakCores: 15,
          counterBursts: 9.5,
          ultimates: 5.5,
        }[stat] || 0) * v;
    }
    if (contract.key === "relic") {
      return ({
        mysteries: 10,
        relics: 13,
        elementCores: 9.5,
        purificationCores: 8.5,
        starTrailBursts: 10,
        mirrorShards: 8.5,
        mirrorBursts: 9.5,
        forgeSigils: 9.5,
        forgeWaves: 10.5,
        comboSigils: 6.5,
      }[stat] || 0) * v;
    }
    return 0;
  }

  function addAdventureContractProgress(amount = 0, label = "", options = {}) {
    if (state.gameMode !== "adventure" || state.mode !== "playing" || state.adventureContractClaimed) return;
    const info = adventureContractProgressInfo();
    if (!info.contract || info.ready) return;
    const gain = Math.max(0, Number(amount) || 0);
    if (gain <= 0) return;
    const before = state.adventureContractProgress || 0;
    const beforePercent = clamp((before / Math.max(1, info.target)) * 100, 0, 100);
    state.adventureContractProgress = clamp(before + gain, 0, info.target);
    const gained = state.adventureContractProgress - before;
    if (gained <= 0) return;
    state.adventureContractPulse = Math.max(state.adventureContractPulse || 0, options.major ? 1 : 0.52);
    if (!options.silent && label) {
      state.eventName = label;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, options.major ? 1.2 : 0.82);
    }
    checkAdventureSupportMilestones("contract", beforePercent, clamp((state.adventureContractProgress / Math.max(1, info.target)) * 100, 0, 100));
    if (state.adventureContractProgress >= info.target) completeAdventureContract(info.contract);
  }

  function advanceAdventureContractForStat(stat, amount = 1) {
    if (state.gameMode !== "adventure" || state.mode !== "playing" || state.adventureContractClaimed || stat === "adventureContracts") return;
    const info = adventureContractProgressInfo();
    if (!info.contract || info.ready) return;
    const gain = adventureContractStatGain(stat, amount, info.contract);
    if (gain <= 0) return;
    addAdventureContractProgress(gain, `${info.contract.short}推进`, { silent: true, major: gain >= 7 });
  }

  function adventureContractBuffStats() {
    if (state.gameMode !== "adventure" || state.adventureContractBoostTimer <= 0) return null;
    const contract = adventureContractForStage();
    return contract ? contract.stats || null : null;
  }

  function completeAdventureContract(contract = adventureContractForStage()) {
    if (!contract || state.adventureContractClaimed) return;
    const stage = activeStage();
    state.adventureContractClaimed = true;
    state.adventureContractProgress = contract.target;
    state.adventureContractPulse = 1.25;
    state.adventureContractBoostTimer = Math.max(state.adventureContractBoostTimer || 0, 8.5 + (stage.number || 1) * 0.08);
    recordRunStat("adventureContracts", 1);

    const rewardMult = modifierRewardMultiplier() * ADVENTURE_CONTRACT_REWARD_SCALE;
    const coins = runCoinReward(Math.round((180 + (stage.number || 1) * 16 + (stage.bossStage ? 180 : 0)) * rewardMult));
    const materials = runMaterialReward(Math.round((14 + (stage.number || 1) * 1.8 + (stage.bossStage ? 18 : 0)) * rewardMult));
    const item = contract.rewardItem || "energy";
    meta.coins += coins;
    meta.materials += materials;
    if (meta.inventory[item] !== undefined) meta.inventory[item] += 1;
    saveMeta();

    addAdventureRouteProgress(12 + (stage.bossStage ? 8 : 0), {
      intel: contract.key === "scout" || contract.key === "relic" ? 1 : 0,
      cargo: contract.key === "cargo" ? 1 : 0,
      label: `${contract.short}签章`,
      major: true,
    });
    state.energy = clamp(state.energy + state.maxEnergy * 0.22, 0, state.maxEnergy);
    state.health = clamp(state.health + state.maxHealth * 0.18, 0, state.maxHealth);
    if (contract.key === "cargo") state.shieldTimer = Math.max(state.shieldTimer, 3.6);
    if (contract.key === "scout") state.draftTimer = Math.max(state.draftTimer, 3.2);
    if (contract.key === "hunt") state.specialTimer = Math.max(state.specialTimer, 4.2);
    if (contract.key === "relic" && Math.random() < 0.42) {
      const perk = pickPerkChoices(1)[0];
      if (perk) grantRunPerk(perk, "遗迹签章");
    }
    state.combo += 2;
    state.comboTimer = Math.max(state.comboTimer, 3.2);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((520 + (stage.number || 1) * 34) * state.scoreBonus * styleMultiplier());
    gainXp(90 + (stage.number || 1) * 5);
    gainStyle(26, `${contract.short}签章`, contract.color);
    showRewardToast([
      { type: "adventureContract", label: contract.short, amount: 1 },
      { type: "coin", amount: coins },
      { type: "material", amount: materials },
      { type: item, label: rewardLabel(item), amount: meta.inventory[item] === undefined ? 0 : 1 },
    ], { duration: 1900 });
    state.eventName = `${contract.name}完成`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.65);
    pop(hero.x + 58 * playScale(), hero.y, contract.color, 26);
    state.shake = Math.max(state.shake, 5.5);
    beep(1080, 0.075, "triangle", 0.045);
    setTimeout(() => beep(1380, 0.05, "sine", 0.032), 72);
  }

  function todayKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function dateFromKey(key) {
    const match = String(key || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return new Date();
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  function dateKeyFromDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function addDaysToKey(key, days) {
    const date = dateFromKey(key);
    date.setDate(date.getDate() + Math.floor(Number(days) || 0));
    return dateKeyFromDate(date);
  }

  function daysBetweenKeys(a, b) {
    return Math.round((dateFromKey(a).getTime() - dateFromKey(b).getTime()) / 86400000);
  }

  function normalizeTrialAccess(access = {}) {
    const today = todayKey();
    const normalized = access && typeof access === "object" ? access : {};
    const result = {
      date: String(normalized.date || ""),
      playsUsed: Math.max(0, Math.floor(Number(normalized.playsUsed) || 0)),
      passDate: String(normalized.passDate || ""),
    };
    if (result.date !== today) {
      result.date = today;
      result.playsUsed = 0;
    }
    return result;
  }

  function ensureTrialAccess() {
    meta.trialAccess = normalizeTrialAccess(meta.trialAccess);
    return meta.trialAccess;
  }

  function trialPassActive() {
    return ensureTrialAccess().passDate === todayKey();
  }

  function trialRunUsesTrial() {
    return heroTrialSelected() || mountTrialSelected();
  }

  function trialAccessSummary() {
    const access = ensureTrialAccess();
    if (access.passDate === todayKey()) {
      return `今日试用权已开启，可不限局体验试用英雄和坐骑；便便币 ${meta.poopCoins || 0}。`;
    }
    const freeLeft = Math.max(0, TRIAL_FREE_RUNS_PER_DAY - access.playsUsed);
    return freeLeft > 0
      ? `今日免费试用还可出战 ${freeLeft} 局；也可用 ${TRIAL_DAY_PASS_POOP_COST} 便便币开启今日不限局试用。`
      : `今日免费试用已用完；可用 ${TRIAL_DAY_PASS_POOP_COST} 便便币开启今日不限局试用。`;
  }

  function updateTrialAccessUi() {
    const text = trialAccessSummary();
    for (const node of [heroTrialAccessText, mountTrialAccessText]) {
      if (node) node.textContent = text;
    }
    const active = trialPassActive();
    for (const button of [buyHeroTrialPassButton, buyMountTrialPassButton]) {
      if (!button) continue;
      button.textContent = active ? "今日试用权已开启" : `买今日试用权 ${TRIAL_DAY_PASS_POOP_COST}便`;
      button.disabled = active || (meta.poopCoins || 0) < TRIAL_DAY_PASS_POOP_COST;
      button.title = active
        ? "今日可以不限局试用"
        : `消耗 ${TRIAL_DAY_PASS_POOP_COST} 便便币，今天不限局试用已开放内容`;
    }
  }

  function buyTrialDayPass() {
    const access = ensureTrialAccess();
    if (access.passDate === todayKey()) {
      panelCopy.textContent = "今日试用权已经开启，可以继续体验试用英雄和坐骑。";
      updateTrialAccessUi();
      return false;
    }
    if ((meta.poopCoins || 0) < TRIAL_DAY_PASS_POOP_COST) {
      panelCopy.textContent = `购买今日试用权需要 ${TRIAL_DAY_PASS_POOP_COST} 便便币。便便币主要来自每日签到，Boss 也有 0.5% 概率掉落。`;
      beep(150, 0.08, "sawtooth", 0.035);
      return false;
    }
    meta.poopCoins -= TRIAL_DAY_PASS_POOP_COST;
    access.passDate = todayKey();
    saveMeta();
    updateMetaUi();
    showSystemToast("今日试用权已开启");
    panelCopy.textContent = "今日试用权已开启：今天可不限局体验已开放试用的英雄和坐骑，但试用英雄仍不能升级或进化。";
    beep(980, 0.09, "triangle", 0.045);
    return true;
  }

  function consumeTrialAccessForRun() {
    if (!trialRunUsesTrial()) return true;
    const access = ensureTrialAccess();
    if (access.passDate === todayKey()) return true;
    if (access.playsUsed < TRIAL_FREE_RUNS_PER_DAY) {
      access.playsUsed += 1;
      saveMeta();
      updateTrialAccessUi();
      return true;
    }
    panelCopy.textContent = `今日免费试用局数已用完。可以在英雄或坐骑页花 ${TRIAL_DAY_PASS_POOP_COST} 便便币购买今日试用权，或切换为已拥有的英雄/坐骑出战。`;
    showSystemToast("今日免费试用已用完");
    beep(150, 0.08, "sawtooth", 0.035);
    updateTrialAccessUi();
    return false;
  }

  function dailyBossIndex(date = todayKey()) {
    let hash = 0;
    for (let i = 0; i < date.length; i += 1) hash = (hash * 31 + date.charCodeAt(i)) % 9973;
    return hash % dailyBossProfiles.length;
  }

  function dailyBossProfile(date = todayKey()) {
    return dailyBossProfiles[dailyBossIndex(date)];
  }

  function heroProfile(key = meta.selectedHero) {
    return heroProfileMap[key] || heroProfileMap.poop;
  }

  function heroLabel(key = meta.selectedHero) {
    return heroProfile(key).name;
  }

  function currentEvolution(key = meta.selectedHero) {
    if (heroTrialSelected(key)) return 0;
    return clamp(meta.heroEvolutions[key] || 0, 0, 4);
  }

  function currentHeroLevel(key = meta.selectedHero) {
    if (heroTrialSelected(key)) return 1;
    if (!meta.heroLevels) meta.heroLevels = { ...metaDefaults.heroLevels };
    const fallback = key === meta.selectedHero ? meta.heroLevel : 1;
    const level = clamp(Math.floor(Number(meta.heroLevels[key] ?? fallback) || 1), 1, MAX_HERO_LEVEL);
    meta.heroLevels[key] = level;
    return level;
  }

  function setHeroLevel(level, key = meta.selectedHero) {
    if (!meta.heroLevels) meta.heroLevels = { ...metaDefaults.heroLevels };
    meta.heroLevels[key] = clamp(Math.floor(Number(level) || 1), 1, MAX_HERO_LEVEL);
    if (key === meta.selectedHero) meta.heroLevel = meta.heroLevels[key];
    return meta.heroLevels[key];
  }

  function currentHeroStoneCount(key = meta.selectedHero) {
    if (!meta.heroEvoStones) meta.heroEvoStones = { ...metaDefaults.heroEvoStones };
    const stones = Math.max(0, Math.floor(Number(meta.heroEvoStones[key]) || 0));
    meta.heroEvoStones[key] = stones;
    if (key === meta.selectedHero) meta.evoStones = stones;
    return stones;
  }

  function addHeroEvoStones(amount, key = meta.selectedHero) {
    const value = Math.max(0, Math.floor(Number(amount) || 0));
    if (value <= 0) return 0;
    if (!meta.heroEvoStones) meta.heroEvoStones = { ...metaDefaults.heroEvoStones };
    meta.heroEvoStones[key] = currentHeroStoneCount(key) + value;
    if (key === meta.selectedHero) meta.evoStones = meta.heroEvoStones[key];
    return value;
  }

  function mountProfile(key = meta.selectedMount) {
    return mountProfileMap[key] || mountProfileMap.plungerBoard || mountProfiles[0];
  }

  function currentMountLevel(key = meta.selectedMount) {
    if (!meta.mountLevels) meta.mountLevels = { ...metaDefaults.mountLevels };
    const profile = mountProfile(key);
    const fallback = profile.key === "plungerBoard" ? 1 : 0;
    const level = clamp(Math.floor(Number(meta.mountLevels[profile.key] ?? fallback) || fallback), 0, 15);
    meta.mountLevels[profile.key] = profile.key === "none" ? 0 : level;
    return level;
  }

  function effectiveMountLevel(key = meta.selectedMount) {
    return mountTrialSelected(key) ? Math.max(1, currentMountLevel(key)) : currentMountLevel(key);
  }

  function mountUnlocked(key = meta.selectedMount) {
    if (!meta.unlockedMounts) meta.unlockedMounts = { ...metaDefaults.unlockedMounts };
    const profile = mountProfile(key);
    const signInUnlocked = profile.unlockDay ? (meta.signIn && meta.signIn.streak >= profile.unlockDay) : false;
    return !!profile.free || profile.key === "plungerBoard" || signInUnlocked || !!meta.unlockedMounts[profile.key] || currentMountLevel(profile.key) > 0;
  }

  function mountRiding(key = meta.selectedMount) {
    const profile = mountProfile(key);
    return profile.key !== "none" && mountPlayable(profile.key);
  }

  function mountUnlockGoldCost(key = meta.selectedMount) {
    const profile = mountProfile(key);
    return Math.max(0, Math.round((Number(profile.unlockCoins) || 0) * MOUNT_UNLOCK_GOLD_COST_MULTIPLIER));
  }

  function mountUnlockPoopCost(key = meta.selectedMount) {
    return Math.max(0, Math.round(mountUnlockGoldCost(key) / MOUNT_UNLOCK_POOP_COST_DIVISOR));
  }

  function mountUnlockCost(key = meta.selectedMount) {
    return {
      coins: mountUnlockGoldCost(key),
      poopCoins: mountUnlockPoopCost(key),
    };
  }

  function playerProgressScore() {
    const stageProgress = Math.max(1, meta.maxStage || 1, isStageMode() ? activeStageNumber() : state.selectedStage || 1);
    const adventureProgress = Math.max(1, meta.maxAdventureStage || 1);
    const bossKills = meta.stats ? Math.max(0, meta.stats.totalBossKills || 0) : 0;
    const bestScore = meta.stats ? Math.max(0, meta.stats.bestScore || 0) : 0;
    return stageProgress + adventureProgress * 1.35 + currentHeroLevel() * 0.72 + bossKills * 0.8 + Math.min(42, Math.sqrt(bestScore) * 0.08);
  }

  function droneProfile(key = meta.selectedDrone) {
    return droneProfileMap[key] || droneProfileMap.poopOrb || droneProfiles[0];
  }

  function droneUnlocked(key = meta.selectedDrone) {
    if (!meta.unlockedDrones) meta.unlockedDrones = { ...metaDefaults.unlockedDrones };
    const profile = droneProfile(key);
    return !!profile.free || !!meta.unlockedDrones[profile.key];
  }

  function droneUnlockAvailable(profile) {
    if (!profile || profile.free) return true;
    const stageOk = !profile.unlockStage || (meta.maxStage || 1) >= profile.unlockStage;
    const adventureOk = !profile.unlockAdventureStage || (meta.maxAdventureStage || 1) >= profile.unlockAdventureStage;
    return stageOk && adventureOk;
  }

  function droneUnlockCost(key = meta.selectedDrone) {
    const profile = droneProfile(key);
    return {
      coins: Math.max(0, Math.round(Number(profile.unlockCoins) || 0)),
      materials: Math.max(0, Math.round(Number(profile.unlockMaterials) || 0)),
    };
  }

  function activeDroneProfile() {
    const profile = droneProfile();
    if (droneUnlocked(profile.key)) return profile;
    meta.selectedDrone = "poopOrb";
    return droneProfile();
  }

  function dailyPoopCoinReward(day) {
    const streak = Math.max(1, Math.floor(Number(day) || 1));
    return 1 + (streak % 7 === 0 ? 1 : 0) + (streak % 15 === 0 ? 1 : 0) + (streak % 30 === 0 ? 3 : 0);
  }

  function dailySignInBundle(day) {
    const streak = Math.max(1, Math.floor(Number(day) || 1));
    return {
      coins: 420 + streak * 90 + (streak % 7 === 0 ? 620 : 0) + (streak % 15 === 0 ? 1500 : 0) + (streak % 30 === 0 ? 4200 : 0),
      materials: 32 + streak * 9 + (streak % 7 === 0 ? 45 : 0) + (streak % 15 === 0 ? 110 : 0) + (streak % 30 === 0 ? 260 : 0),
      poopCoins: dailyPoopCoinReward(streak),
      shield: 1,
      magnet: streak % 2 === 0 ? 1 : 0,
      energy: 1 + (streak % 7 === 0 ? 1 : 0),
      storm: streak % 5 === 0 ? 1 : 0,
      reroll: streak % 7 === 0 ? 1 : 0,
      wing: streak % 15 === 0 ? 1 : 0,
      revive: streak % 30 === 0 ? 1 : 0,
      stone: streak % 30 === 0 ? 1 : 0,
    };
  }

  function dailySignInSummary(day) {
    const reward = dailySignInBundle(day);
    const parts = [`${reward.coins} 金币`, `${reward.materials} 材料`, `${reward.poopCoins} 便便币`];
    if (reward.energy > 1) parts.push(`能量瓶 +${reward.energy}`);
    if (reward.reroll) parts.push("重骰 +1");
    if (reward.wing) parts.push("顺风羽翼 +1");
    if (reward.revive) parts.push("复活核心 +1");
    if (reward.stone) parts.push("专属进化石 +1");
    return parts.join(" · ");
  }

  function ensureMailMeta() {
    meta.mail = normalizeMail(meta.mail);
    return meta.mail;
  }

  function rewardBundleEntries(reward = {}) {
    const bundle = normalizeRewardBundle(reward);
    return [
      { key: "coins", type: "coin", amount: bundle.coins },
      { key: "materials", type: "material", amount: bundle.materials },
      { key: "poopCoins", type: "poopCoin", amount: bundle.poopCoins },
      { key: "shield", type: "shield", amount: bundle.shield },
      { key: "magnet", type: "magnet", amount: bundle.magnet },
      { key: "energy", type: "energy", amount: bundle.energy },
      { key: "storm", type: "storm", amount: bundle.storm },
      { key: "reroll", type: "reroll", amount: bundle.reroll },
      { key: "wing", type: "wing", amount: bundle.wing },
      { key: "revive", type: "revive", amount: bundle.revive },
      { key: "stone", type: "stone", amount: bundle.stone },
    ].filter((entry) => entry.amount > 0);
  }

  function rewardBundleText(reward = {}) {
    return rewardBundleEntries(reward)
      .map((entry) => `${rewardLabel(entry.type)} +${entry.amount}`)
      .join(" · ");
  }

  function mergeRewardBundle(target, reward) {
    const source = normalizeRewardBundle(reward);
    for (const key of Object.keys(source)) {
      target[key] = (target[key] || 0) + source[key];
    }
    return target;
  }

  function grantRewardBundle(reward = {}) {
    const bundle = normalizeRewardBundle(reward);
    meta.coins += bundle.coins;
    meta.materials += bundle.materials;
    meta.poopCoins = (meta.poopCoins || 0) + bundle.poopCoins;
    for (const type of ["shield", "magnet", "energy", "storm", "reroll", "wing", "revive"]) {
      meta.inventory[type] = (meta.inventory[type] || 0) + bundle[type];
    }
    if (bundle.stone) addHeroEvoStones(bundle.stone);
    return rewardBundleEntries(bundle);
  }

  function hashKey(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i += 1) hash = (hash * 33 + text.charCodeAt(i)) % 9973;
    return hash;
  }

  function weekendStartForMail(key = todayKey()) {
    const date = dateFromKey(key);
    const day = date.getDay();
    return addDaysToKey(key, -((day + 1) % 7));
  }

  function weekendMailReward(weekendKey) {
    const stageBonus = Math.min(900, Math.max(0, (meta.stats.bestStage || meta.maxStage || 1) - 1) * 42);
    const levelBonus = Math.min(700, Math.max(0, currentHeroLevel() - 1) * 28);
    const hash = hashKey(weekendKey);
    return normalizeRewardBundle({
      coins: 2200 + stageBonus + levelBonus,
      materials: 150 + Math.min(180, Math.max(0, meta.maxStage - 1) * 7),
      shield: 1,
      energy: 1,
      magnet: hash % 2 === 0 ? 1 : 0,
      reroll: hash % 5 === 0 ? 1 : 0,
    });
  }

  function makeWeekendMail(weekendKey) {
    return {
      id: `weekend-${weekendKey}`,
      type: "weekend",
      title: "周末补给",
      body: "周末投放的轻量补给，帮助开局更顺，不额外发放便便币。",
      date: weekendKey,
      expires: addDaysToKey(weekendKey, 14),
      reward: weekendMailReward(weekendKey),
      claimed: false,
      claimedAt: "",
    };
  }

  function makeHolidayMail(holiday) {
    const blessing = holiday.blessing ? `${holiday.blessing} ` : "";
    const rolled = rollHolidayReward(holiday.reward);
    const critText = rolled.crit
      ? "本封触发幸运暴击，便便币再翻倍。"
      : "每封节日礼包都有 30% 概率触发便便币幸运暴击。";
    return {
      id: `holiday-2026-${holiday.key}-${HOLIDAY_MAIL_REWARD_VERSION}`,
      type: "holiday",
      title: `${holiday.name}大礼包`,
      body: `${blessing}${holiday.name}期间投放五倍便便币节日礼包；儿童节等特别节日也有小额便便币，春节、国庆等重大节假日更多。${critText}同时补金币、材料和局内消耗品。`,
      theme: holiday.key,
      blessing: holiday.blessing || "",
      date: holiday.start,
      expires: addDaysToKey(holiday.end, 18),
      reward: rolled.reward,
      crit: rolled.crit,
      claimed: false,
      claimedAt: "",
    };
  }

  function mailboxCandidates(key = todayKey()) {
    const candidates = [];
    const weekendKey = weekendStartForMail(key);
    if (weekendKey) candidates.push(makeWeekendMail(weekendKey));
    for (const holiday of HOLIDAY_MAILS_2026) {
      const sinceStart = daysBetweenKeys(key, holiday.start);
      const sinceEnd = daysBetweenKeys(key, holiday.end);
      if (sinceStart >= 0 && sinceEnd <= 3) candidates.push(makeHolidayMail(holiday));
    }
    return candidates;
  }

  function syncMailboxMessages({ persist = false } = {}) {
    const mail = ensureMailMeta();
    const today = todayKey();
    const existing = new Set(mail.messages.map((message) => message.id));
    let changed = false;
    let added = 0;
    for (const message of mailboxCandidates(today)) {
      if (existing.has(message.id)) continue;
      mail.messages.unshift(message);
      existing.add(message.id);
      added += 1;
      changed = true;
    }
    mail.lastSyncDate = today;
    const sorted = mail.messages
      .sort((a, b) => Number(a.claimed) - Number(b.claimed) || b.date.localeCompare(a.date));
    if (sorted.length > MAIL_HISTORY_LIMIT) {
      mail.messages = sorted.slice(0, MAIL_HISTORY_LIMIT).sort((a, b) => b.date.localeCompare(a.date));
      changed = true;
    } else {
      mail.messages = sorted.sort((a, b) => b.date.localeCompare(a.date));
    }
    if (changed && persist) persistMeta();
    return added;
  }

  function claimMailboxMessage(id) {
    syncMailboxMessages({ persist: false });
    const mail = ensureMailMeta();
    const message = mail.messages.find((entry) => entry.id === id);
    if (!message) {
      panelCopy.textContent = "这封邮件已经不在邮箱里。";
      return;
    }
    if (message.claimed) {
      panelCopy.textContent = `${message.title} 已领取。`;
      return;
    }
    const items = grantRewardBundle(message.reward);
    message.claimed = true;
    message.claimedAt = todayKey();
    mail.claimedTotal += 1;
    persistMeta();
    updateMetaUi();
    showRewardToast(items, { duration: 2600 });
    panelCopy.textContent = `已领取 ${message.title}${message.crit ? "（幸运暴击）" : ""}：${rewardBundleText(message.reward)}。`;
    beep(message.type === "holiday" ? 1040 : 860, 0.08, "triangle", 0.04);
  }

  function claimAllMailboxMessages() {
    syncMailboxMessages({ persist: false });
    const mail = ensureMailMeta();
    const claimable = mail.messages.filter((message) => !message.claimed);
    if (!claimable.length) {
      panelCopy.textContent = "邮箱里没有未领取邮件。";
      showSystemToast("没有未领取邮件");
      return;
    }
    const total = normalizeRewardBundle();
    for (const message of claimable) {
      grantRewardBundle(message.reward);
      mergeRewardBundle(total, message.reward);
      message.claimed = true;
      message.claimedAt = todayKey();
    }
    mail.claimedTotal += claimable.length;
    persistMeta();
    updateMetaUi();
    showRewardToast(rewardBundleEntries(total), { duration: 3000 });
    panelCopy.textContent = `已领取 ${claimable.length} 封邮件：${rewardBundleText(total)}。`;
    beep(1040, 0.1, "triangle", 0.045);
  }

  function renderMailPage() {
    if (!mailList) return;
    const mail = ensureMailMeta();
    const unclaimed = mail.messages.filter((message) => !message.claimed);
    if (mailSummary) {
      mailSummary.textContent = `未领取 ${unclaimed.length} 封 · 已领取 ${mail.claimedTotal} 封 · 节日便便币已按新版翻五倍，每封还有 30% 概率幸运暴击再翻倍。`;
    }
    if (claimAllMailButton) claimAllMailButton.disabled = unclaimed.length === 0;
    mailList.innerHTML = "";
    if (!mail.messages.length) {
      const empty = document.createElement("div");
      empty.className = "mail-card is-empty";
      empty.innerHTML = '<div class="mail-title">暂无邮件</div><div class="mail-body">周末和节假日打开游戏时会收到补给。</div>';
      mailList.appendChild(empty);
      return;
    }
    for (const message of mail.messages) {
      const card = document.createElement("div");
      card.className = `mail-card${message.claimed ? " is-claimed" : ""}${message.type === "holiday" ? " is-holiday" : ""}`;
      card.dataset.mailTheme = message.theme || message.type || "weekend";
      const seal = document.createElement("div");
      seal.className = "mail-seal";
      seal.setAttribute("aria-hidden", "true");
      const top = document.createElement("div");
      top.className = "mail-card-top";
      const title = document.createElement("div");
      title.className = "mail-title";
      title.textContent = message.title;
      const status = document.createElement("span");
      status.className = "mail-status";
      status.textContent = message.claimed
        ? `已领取 ${message.claimedAt}${message.crit ? " · 暴击" : ""}`
        : message.crit
          ? "幸运暴击"
          : "可领取";
      top.append(title, status);
      const body = document.createElement("div");
      body.className = "mail-body";
      body.textContent = `${message.date} · ${message.body}`;
      const rewards = document.createElement("div");
      rewards.className = "mail-rewards";
      for (const entry of rewardBundleEntries(message.reward)) {
        const chip = document.createElement("span");
        chip.className = `mail-reward-chip reward-${entry.type}`;
        chip.textContent = `${rewardLabel(entry.type)} +${entry.amount}`;
        rewards.appendChild(chip);
      }
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = message.claimed ? "已领取" : "领取";
      button.disabled = message.claimed;
      button.addEventListener("click", () => claimMailboxMessage(message.id));
      card.append(seal, top, body, rewards, button);
      mailList.appendChild(card);
    }
  }

  function signInMilestoneText(currentDay = meta.signIn.streak) {
    const day = Math.max(0, Math.floor(Number(currentDay) || 0));
    const goals = [];
    for (const profile of heroProfiles) {
      if (profile.unlockDay && !meta.unlockedHeroes[profile.key] && profile.unlockDay > day) {
        goals.push({ day: profile.unlockDay, text: `解锁英雄 ${profile.name}` });
      }
    }
    for (const profile of mountProfiles) {
      if (profile.unlockDay && !mountUnlocked(profile.key) && profile.unlockDay > day) {
        goals.push({ day: profile.unlockDay, text: `解锁坐骑 ${profile.name}` });
      }
    }
    const next7 = Math.ceil((day + 1) / 7) * 7;
    const next15 = Math.ceil((day + 1) / 15) * 15;
    const next30 = Math.ceil((day + 1) / 30) * 30;
    goals.push({ day: next7, text: "七日道具礼包" });
    goals.push({ day: next15, text: "十五日生肖礼包" });
    goals.push({ day: next30, text: "三十日五行大奖" });
    goals.sort((a, b) => a.day - b.day);
    const next = goals[0];
    return next ? `下一目标：第 ${next.day} 天 ${next.text}` : "长期签到循环奖励已开启。";
  }

  function mountStats(key = meta.selectedMount) {
    const profile = mountProfile(key);
    const level = effectiveMountLevel(profile.key);
    if (profile.key === "none" || !mountPlayable(profile.key) || level <= 0) {
      return { health: 0, energy: 0, attack: 0, crit: 0, dodge: 0, regen: 0, guard: 0, haste: 0 };
    }
    if (profile.key === "rocketToilet") {
      return {
        health: 16 + level * 7,
        energy: 12 + level * 4,
        attack: 1 + Math.floor(level / 4),
        crit: 0.7 + level * 0.13,
        dodge: 0.9 + level * 0.18,
        regen: 0.12 + level * 0.025,
        guard: 0.85 + level * 0.14,
        haste: 1.3 + level * 0.24,
      };
    }
    if (profile.key === "crystalDragon") {
      return {
        health: 24 + level * 8,
        energy: 16 + level * 5,
        attack: Math.floor(level / 4),
        crit: 0.8 + level * 0.13,
        dodge: 0.7 + level * 0.14,
        regen: 0.28 + level * 0.055,
        guard: 1.7 + level * 0.26,
        haste: 0.8 + level * 0.13,
      };
    }
    if (profile.key === "nebulaComet") {
      return {
        health: 18 + level * 6,
        energy: 22 + level * 7,
        attack: 1 + Math.floor(level / 3),
        crit: 1.6 + level * 0.28,
        dodge: 0.65 + level * 0.13,
        regen: 0.16 + level * 0.035,
        guard: 0.9 + level * 0.16,
        haste: 1.4 + level * 0.22,
      };
    }
    if (profile.key === "woodDragonBoat") {
      return {
        health: 30 + level * 9,
        energy: 18 + level * 5,
        attack: Math.floor(level / 3),
        crit: 0.75 + level * 0.14,
        dodge: 1.05 + level * 0.18,
        regen: 0.38 + level * 0.07,
        guard: 1.9 + level * 0.3,
        haste: 0.95 + level * 0.14,
      };
    }
    if (profile.key === "gravityCauldron") {
      return {
        health: 24 + level * 8,
        energy: 20 + level * 6,
        attack: 1 + Math.floor(level / 3),
        crit: 1 + level * 0.16,
        dodge: 0.85 + level * 0.14,
        regen: 0.22 + level * 0.045,
        guard: 1.45 + level * 0.24,
        haste: 1.12 + level * 0.18,
      };
    }
    if (profile.key === "ambulanceHover") {
      return {
        health: 34 + level * 10,
        energy: 24 + level * 6,
        attack: Math.floor(level / 4),
        crit: 0.9 + level * 0.12,
        dodge: 1.2 + level * 0.18,
        regen: 0.5 + level * 0.085,
        guard: 2.2 + level * 0.32,
        haste: 0.9 + level * 0.14,
      };
    }
    if (profile.key === "metalTigerChariot") {
      return {
        health: 22 + level * 7,
        energy: 14 + level * 4,
        attack: 2 + Math.floor(level / 3),
        crit: 1.9 + level * 0.32,
        dodge: 0.95 + level * 0.16,
        regen: 0.12 + level * 0.03,
        guard: 1.05 + level * 0.18,
        haste: 1.75 + level * 0.27,
      };
    }
    if (profile.key === "fiveElementKirin") {
      return {
        health: 34 + level * 10,
        energy: 28 + level * 8,
        attack: 2 + Math.floor(level / 2),
        crit: 1.6 + level * 0.28,
        dodge: 1.15 + level * 0.18,
        regen: 0.28 + level * 0.06,
        guard: 1.8 + level * 0.28,
        haste: 1.45 + level * 0.22,
      };
    }
    if (profile.key === "slimeSkate") {
      return {
        health: 10 + level * 5,
        energy: 14 + level * 6,
        attack: Math.floor(level / 5),
        crit: 0.5 + level * 0.08,
        dodge: 0.8 + level * 0.14,
        regen: 0.25 + level * 0.04,
        guard: 0.6 + level * 0.12,
        haste: 0.7 + level * 0.11,
      };
    }
    if (profile.key === "thunderSeat") {
      return {
        health: 8 + level * 4,
        energy: 8 + level * 4,
        attack: 1 + Math.floor(level / 4),
        crit: 1.2 + level * 0.22,
        dodge: 0.35 + level * 0.08,
        regen: 0.08 + level * 0.025,
        guard: 0.35 + level * 0.08,
        haste: 1 + level * 0.18,
      };
    }
    return {
      health: 12 + level * 6,
      energy: 8 + level * 3,
      attack: Math.floor(level / 6),
      crit: 0.35 + level * 0.08,
      dodge: 1 + level * 0.16,
      regen: 0.1 + level * 0.02,
      guard: 1.1 + level * 0.18,
      haste: 0.8 + level * 0.12,
    };
  }

  function mountPowerText(key = meta.selectedMount) {
    const profile = mountProfile(key);
    const trial = mountTrialSelected(profile.key);
    const level = effectiveMountLevel(profile.key);
    const stats = mountStats(profile.key);
    if (profile.key === "none") return "不乘坐坐骑 · 无坐骑加成";
    if (trial) return `试用中 Lv.${level} · ${profile.skill} · 生${stats.health} 能${stats.energy} 攻${stats.attack} 闪${stats.dodge.toFixed(1)}%`;
    if (!mountUnlocked(profile.key)) {
      const cost = mountUnlockCost(profile.key);
      const signText = profile.unlockDay ? ` · 第 ${profile.unlockDay} 天签到可直接解锁` : "";
      const trialText = mountTrialEligible(profile) ? " · 可试用" : "";
      return `解锁 ${cost.coins} 金币 + ${cost.poopCoins} 便便币${signText}${trialText}`;
    }
    return `Lv.${level} · ${profile.skill} · 生${stats.health} 能${stats.energy} 攻${stats.attack} 闪${stats.dodge.toFixed(1)}%`;
  }

  function heroUnlockText(profile) {
    return profile && profile.unlockDay ? `第 ${profile.unlockDay} 天签到解锁` : "未解锁";
  }

  function heroUnlockButtonText(profile) {
    return profile && profile.unlockDay ? `第${profile.unlockDay}天解锁` : "未解锁";
  }

  function heroTrialEligible(profile) {
    return !!profile && !profile.unlocked && (Number(profile.unlockDay) || 0) >= HARD_TRIAL_UNLOCK_DAY;
  }

  function mountTrialEligible(profile) {
    if (!profile || profile.free || profile.key === "plungerBoard" || profile.key === "none") return false;
    return (Number(profile.unlockDay) || 0) >= HARD_TRIAL_UNLOCK_DAY
      || mountUnlockGoldCost(profile.key) >= MOUNT_TRIAL_GOLD_THRESHOLD;
  }

  function ensureTrialMeta() {
    if (!meta.trialRewards || typeof meta.trialRewards !== "object") meta.trialRewards = { heroes: {}, mounts: {} };
    if (!meta.trialRewards.heroes || typeof meta.trialRewards.heroes !== "object") meta.trialRewards.heroes = {};
    if (!meta.trialRewards.mounts || typeof meta.trialRewards.mounts !== "object") meta.trialRewards.mounts = {};
    meta.trialHero = String(meta.trialHero || "");
    meta.trialMount = String(meta.trialMount || "");
    ensureTrialAccess();
  }

  function heroTrialSelected(key = meta.selectedHero) {
    ensureTrialMeta();
    const profile = heroProfile(key);
    return meta.trialHero === profile.key && !meta.unlockedHeroes[profile.key] && heroTrialEligible(profile);
  }

  function heroTrialAvailable(profile) {
    ensureTrialMeta();
    return !!profile && !meta.unlockedHeroes[profile.key] && heroTrialEligible(profile);
  }

  function heroPlayable(key = meta.selectedHero) {
    const profile = heroProfile(key);
    return !!meta.unlockedHeroes[profile.key] || heroTrialSelected(profile.key);
  }

  function mountTrialSelected(key = meta.selectedMount) {
    ensureTrialMeta();
    const profile = mountProfile(key);
    return meta.trialMount === profile.key && !mountUnlocked(profile.key) && mountTrialEligible(profile);
  }

  function mountTrialAvailable(profile) {
    ensureTrialMeta();
    return !!profile && !mountUnlocked(profile.key) && mountTrialEligible(profile);
  }

  function mountPlayable(key = meta.selectedMount) {
    return mountUnlocked(key) || mountTrialSelected(key);
  }

  function trialRewardClaimed(kind, key) {
    ensureTrialMeta();
    const group = kind === "mount" ? "mounts" : "heroes";
    return !!meta.trialRewards[group][key];
  }

  function grantFirstTrialReward(kind, key, label) {
    ensureTrialMeta();
    const group = kind === "mount" ? "mounts" : "heroes";
    if (meta.trialRewards[group][key]) return null;
    const reward = kind === "mount"
      ? { coins: 2200, materials: 150, shield: 1, wing: 1 }
      : { coins: 1800, materials: 120, energy: 1, reroll: 1 };
    meta.trialRewards[group][key] = true;
    meta.coins += reward.coins;
    meta.materials += reward.materials;
    meta.inventory.shield += reward.shield || 0;
    meta.inventory.energy += reward.energy || 0;
    meta.inventory.reroll += reward.reroll || 0;
    meta.inventory.wing += reward.wing || 0;
    showRewardToast([
      { type: "coin", amount: reward.coins },
      { type: "material", amount: reward.materials },
      { type: "shield", amount: reward.shield },
      { type: "energy", amount: reward.energy },
      { type: "reroll", amount: reward.reroll },
      { type: "wing", amount: reward.wing },
      { type: "medal", label: `${label}试用`, amount: 1 },
    ], { duration: 1900 });
    return reward;
  }

  function baseHeroBonus() {
    const level = currentHeroLevel();
    const evo = currentEvolution();
    const key = meta.selectedHero;
    const heroBoost = key === "ikun" ? 1.08 : key === "jet" ? 1.06 : key === "alchemist" ? 0.96 : key === "dragonWood" ? 1.13 : key === "voidChef" ? 1.06 : key === "neonMedic" ? 1.15 : key === "tigerMetal" ? 1.08 : 1;
    const energyBoost = key === "ikun" ? 1.12 : key === "paper" ? 1.13 : key === "jet" ? 1.06 : key === "dragonWood" ? 1.18 : key === "voidChef" ? 1.14 : key === "neonMedic" ? 1.16 : key === "tigerMetal" ? 1.04 : 1;
    return {
      health: Math.round(((level - 1) * 8 + evo * 80) * heroBoost),
      energy: Math.round(((level - 1) * 5 + evo * 52) * energyBoost),
      attack: Math.floor((level - 1) / 3) + evo * 3 + (key === "ikun" ? 1 : key === "alchemist" ? 1 : key === "dragonWood" ? 2 : key === "voidChef" ? 3 : key === "neonMedic" ? 1 : key === "tigerMetal" ? 5 : 0),
      score: 1 + (level - 1) * 0.015 + evo * 0.16 + (key === "paper" ? 0.025 : key === "dragonWood" ? 0.045 : key === "voidChef" ? 0.04 : key === "neonMedic" ? 0.035 : key === "tigerMetal" ? 0.05 : 0),
      crit: 2 + level * 0.16 + evo * 2.4 + (key === "ikun" ? 1.2 : key === "paper" ? 0.8 : key === "dragonWood" ? 1.2 : key === "voidChef" ? 1.6 : key === "neonMedic" ? 0.9 : key === "tigerMetal" ? 3.6 : 0),
      dodge: 1.5 + level * 0.1 + evo * 1.7 + (key === "jet" ? 2.2 : key === "dragonWood" ? 1.6 : key === "voidChef" ? 1.1 : key === "neonMedic" ? 1.8 : key === "tigerMetal" ? 2.4 : 0),
      regen: level * 0.035 + evo * 0.65 + (key === "alchemist" ? 0.55 : key === "dragonWood" ? 0.95 : key === "voidChef" ? 0.24 : key === "neonMedic" ? 1.15 : key === "tigerMetal" ? 0.12 : 0),
      guard: level * 0.12 + evo * 1.9 + (key === "jet" ? 1.2 : key === "dragonWood" ? 2.2 : key === "voidChef" ? 1.5 : key === "neonMedic" ? 2.55 : key === "tigerMetal" ? 1.4 : 0),
      haste: level * 0.14 + evo * 2.1 + (key === "jet" ? 1.6 : key === "paper" ? 0.8 : key === "dragonWood" ? 0.8 : key === "voidChef" ? 1.05 : key === "neonMedic" ? 0.75 : key === "tigerMetal" ? 2.8 : 0),
    };
  }

  function heroBonus() {
    const base = baseHeroBonus();
    const gear = equipmentStats();
    const mount = mountStats();
    return {
      health: base.health + gear.health + mount.health,
      energy: base.energy + gear.energy + mount.energy,
      attack: base.attack + gear.attack + mount.attack,
      score: base.score,
      luck: gear.luck,
      crit: base.crit + gear.crit + mount.crit,
      dodge: base.dodge + gear.dodge + mount.dodge,
      regen: base.regen + gear.regen + mount.regen,
      guard: base.guard + gear.guard + mount.guard,
      haste: base.haste + gear.haste + mount.haste,
    };
  }

  function equipmentName(slotKey, qualityKey) {
    const slot = equipmentSlots.find((entry) => entry.key === slotKey) || equipmentSlots[0];
    const quality = qualityByKey(qualityKey);
    return `${quality.name}·${slot.name}`;
  }

  function equipmentPower(item) {
    if (!item) return 0;
    const quality = qualityByKey(item.quality);
    const stats = item.stats || {};
    const slotBias = item.slot === "weapon" ? 1.1 : item.slot === "necklace" ? 1.04 : item.slot === "armor" ? 1.03 : 1;
    return Math.round((quality.power * 26 + item.level * quality.power * 5 + equipmentStatPower(stats)) * slotBias);
  }

  function equipmentStatText(item) {
    if (!item || !item.stats) return "空";
    const stats = item.stats;
    const parts = [];
    if (stats.health) parts.push(`生+${stats.health}`);
    if (stats.energy) parts.push(`能+${stats.energy}`);
    if (stats.attack) parts.push(`攻+${stats.attack}`);
    if (stats.luck) parts.push(`幸+${stats.luck}`);
    if (stats.crit) parts.push(`暴+${stats.crit}%`);
    if (stats.dodge) parts.push(`闪+${stats.dodge}%`);
    if (stats.regen) parts.push(`回+${stats.regen}`);
    if (stats.guard) parts.push(`韧+${stats.guard}`);
    if (stats.haste) parts.push(`速+${stats.haste}`);
    parts.push(`战+${equipmentPower(item)}`);
    return parts.join(" ");
  }

  function equipmentIconPosition(item) {
    if (!item) return "";
    const row = qualityIndex(item.quality);
    const slotIndex = Math.max(0, equipmentSlots.findIndex((slot) => slot.key === item.slot));
    const col = slotIndex * 2 + clamp(Math.floor(Number(item.iconVariant) || 0), 0, 1);
    const x = `${col * (100 / 9)}%`;
    const y = `${row * (100 / 6)}%`;
    return `${x} ${y}`;
  }

  function equipmentStats() {
    const total = { health: 0, energy: 0, attack: 0, luck: 0, crit: 0, dodge: 0, regen: 0, guard: 0, haste: 0 };
    const equipped = meta && meta.equipped ? meta.equipped : {};
    for (const slot of equipmentSlots) {
      const item = equipped[slot.key];
      if (!item || !item.stats) continue;
      total.health += item.stats.health || 0;
      total.energy += item.stats.energy || 0;
      total.attack += item.stats.attack || 0;
      total.luck += item.stats.luck || 0;
      total.crit += item.stats.crit || 0;
      total.dodge += item.stats.dodge || 0;
      total.regen += item.stats.regen || 0;
      total.guard += item.stats.guard || 0;
      total.haste += item.stats.haste || 0;
    }
    return total;
  }

  function heroSheetStats() {
    const bonus = heroBonus();
    return {
      health: 100 + bonus.health,
      energy: 100 + bonus.energy,
      attack: 1 + bonus.attack,
      luck: bonus.luck || 0,
      crit: clamp(bonus.crit || 0, 0, 55),
      dodge: clamp(bonus.dodge || 0, 0, 38),
      regen: Math.max(0, bonus.regen || 0),
      guard: clamp(bonus.guard || 0, 0, 55),
      haste: clamp(bonus.haste || 0, 0, 70),
      scoreBonus: bonus.score,
    };
  }

  function attackTierForLevel(level) {
    if (level >= 50) return 8;
    if (level >= 35) return 7;
    if (level >= 25) return 6;
    if (level >= 15) return 5;
    if (level >= 7) return 4;
    if (level >= 5) return 3;
    if (level >= 3) return 2;
    return 1;
  }

  function attackTierFactor(tier) {
    const factors = [1, 1.18, 1.38, 1.62, 1.9, 2.22, 2.58, 3];
    return factors[clamp(Math.floor(tier || 1), 1, factors.length) - 1] || 1;
  }

  function diminishingBonus(value, scale, cap) {
    const v = Math.max(0, Number(value) || 0);
    if (v <= 0) return 0;
    return cap * (v / (v + scale));
  }

  function expectedCritMultiplier(crit, critMult = 1.65) {
    return 1 + (clamp(crit || 0, 0, 82) / 100) * Math.max(0, critMult - 1);
  }

  function hasteRateMultiplier(haste) {
    return 1 + diminishingBonus(haste || 0, 86, 0.62);
  }

  function guardSurvivalMultiplier(guard) {
    return 1 + diminishingBonus(guard || 0, 72, 0.68);
  }

  function dodgeSurvivalMultiplier(dodge) {
    const effective = clamp(dodge || 0, 0, 55) * 0.0072;
    return 1 / Math.max(0.58, 1 - effective);
  }

  function equipmentStatPower(stats = {}) {
    return (stats.health || 0) * 0.55 +
      (stats.energy || 0) * 0.42 +
      (stats.attack || 0) * 42 +
      (stats.crit || 0) * 17 +
      (stats.dodge || 0) * 18 +
      (stats.regen || 0) * 24 +
      (stats.guard || 0) * 17 +
      (stats.haste || 0) * 19 +
      (stats.luck || 0) * 12;
  }

  function permanentPowerTier() {
    return clamp(1 + currentEvolution() + Math.floor(currentHeroLevel() / 18), 1, 6);
  }

  function baseHeroAttacksPerSecond(key = meta.selectedHero) {
    return HERO_BASE_ATTACKS_PER_SECOND[key] || HERO_BASE_ATTACKS_PER_SECOND.poop;
  }

  function levelEvolutionAttackGrowth() {
    const levelProgress = clamp((currentHeroLevel() - 1) / Math.max(1, MAX_HERO_LEVEL - 1), 0, 1);
    const levelGrowth = Math.min(1.08, levelProgress * 1.08);
    const evolutionGrowth = Math.min(0.92, currentEvolution() * 0.23);
    return Math.min(HERO_LEVEL_EVOLUTION_ATTACK_GROWTH_CAP, levelGrowth + evolutionGrowth);
  }

  function temporaryAttackGrowth(options = {}) {
    const stats = options.run ? runCombatStats() : heroSheetStats();
    const hasteGrowth = diminishingBonus(stats.haste || 0, options.run ? 190 : 220, options.run ? 0.62 : 0.34);
    if (!options.run) return hasteGrowth;
    const perkGrowth = Math.min(0.28, runPerkLevel("rapid") * 0.035 + runPerkLevel("execution") * (boss && boss.breakTimer > 0 ? 0.025 : 0.006));
    const eventGrowth =
      (state.feverTimer > 0 ? 0.16 : 0) +
      (state.comboSurgeTimer > 0 ? 0.1 : 0) +
      (state.forgeTempoTimer > 0 ? 0.14 : 0) +
      (state.draftTimer > 0 ? 0.08 : 0) +
      (state.elementSurgeTimer > 0 ? 0.08 : 0) +
      (state.adventureContractBoostTimer > 0 ? 0.06 : 0);
    const styleGrowth = Math.max(0, styleMultiplier() - 1) * 0.16;
    const perfectTempoGrowth = currentHeroLevel() >= MAX_HERO_LEVEL
      && currentEvolution() >= 4
      && state.level >= MAX_HERO_LEVEL
      && styleRank().label === "S"
      && state.feverTimer > 0
      && state.comboSurgeTimer > 0
      && state.forgeTempoTimer > 0
        ? 0.24
        : 0;
    return Math.min(HERO_TEMP_ATTACK_GROWTH_CAP, hasteGrowth + perkGrowth + eventGrowth + styleGrowth + perfectTempoGrowth);
  }

  function heroAttacksPerSecond(options = {}) {
    const aps = baseHeroAttacksPerSecond(meta.selectedHero) + levelEvolutionAttackGrowth() + temporaryAttackGrowth(options);
    return clamp(aps, HERO_MIN_ATTACKS_PER_SECOND, HERO_MAX_ATTACKS_PER_SECOND);
  }

  function intervalFromAttacksPerSecond(aps) {
    return Math.max(HERO_MIN_ATTACK_INTERVAL, 1 / clamp(aps, HERO_MIN_ATTACKS_PER_SECOND, HERO_MAX_ATTACKS_PER_SECOND));
  }

  function permanentAutoInterval() {
    return intervalFromAttacksPerSecond(heroAttacksPerSecond({ run: false }));
  }

  function combatPowerModel(stats, options = {}) {
    const level = Math.max(1, Number(options.level) || 1);
    const tier = clamp(Math.floor(Number(options.tier) || 1), 1, 8);
    const evolution = clamp(Number(options.evolution) || currentEvolution(), 0, 4);
    const heroKey = options.heroKey || meta.selectedHero;
    const attackValue = Math.max(1, Number(options.attackDamage) || Number(stats.attack) || 1);
    const health = Math.max(1, Number(stats.health) || 1);
    const energy = Math.max(0, Number(stats.energy) || 0);
    const crit = clamp(Number(stats.crit) || 0, 0, 82);
    const dodge = clamp(Number(stats.dodge) || 0, 0, 55);
    const regen = Math.max(0, Number(stats.regen) || 0);
    const guard = clamp(Number(stats.guard) || 0, 0, 80);
    const haste = clamp(Number(stats.haste) || 0, 0, 95);
    const luck = Math.max(0, Number(stats.luck) || 0);
    const scoreBonus = Math.max(1, Number(stats.scoreBonus) || 1);
    const slowestAttackInterval = 1 / HERO_MIN_ATTACKS_PER_SECOND;
    const autoInterval = clamp(Number(options.autoInterval) || 0.82, HERO_MIN_ATTACK_INTERVAL, slowestAttackInterval);
    const manualIntervalMs = clamp(Number(options.manualIntervalMs) || 760, HERO_MIN_ATTACK_INTERVAL * 1000, slowestAttackInterval * 1000);
    const tierFactor = attackTierFactor(tier);
    const heroFactor = heroProfile(heroKey).power || 1;
    const critFactor = expectedCritMultiplier(crit, 1.64);
    const hasteFactor = hasteRateMultiplier(haste);
    const energyFactor = 1 + diminishingBonus(energy, 260, 0.18);
    const autoRate = 1 / autoInterval;
    const autoDps = attackValue * (18 + level * 0.12) * autoRate * tierFactor * critFactor * hasteFactor * energyFactor * heroFactor;
    const manualAccess = clamp(options.manualAccess === undefined ? 0.16 + energy / (energy + 380) * 0.24 : options.manualAccess, 0, 0.5);
    const manualDps = attackValue * (2.25 + tier * 0.18) * (1000 / manualIntervalMs) * manualAccess * tierFactor * expectedCritMultiplier(crit + 5, 1.8);
    const ultimateAccess = clamp(options.ultimateAccess === undefined ? 0.055 + energy / (energy + 460) * 0.1 + evolution * 0.012 : options.ultimateAccess, 0, 0.24);
    const ultimateDps = (115 + attackValue * 18 + evolution * 55 + level * 1.6) * ultimateAccess * (heroKey === "ikun" ? 1.06 : 1);
    const offense = autoDps + manualDps + ultimateDps;
    const bulk = health + energy * 0.28 + Math.min(health * 0.48, regen * (7 + health / 120));
    const effectiveHealth = bulk * guardSurvivalMultiplier(guard) * dodgeSurvivalMultiplier(dodge) * (options.shielded ? 1.18 : 1);
    const survival = Math.sqrt(effectiveHealth) * (42 + level * 0.28) + regen * 28 + guard * 13 + dodge * 15;
    const economy = diminishingBonus(luck, 130, 560) + Math.max(0, scoreBonus - 1) * 760;
    const perkPower = (Number(options.perkLevels) || 0) * 122;
    const modifierPower = Number(options.modifierPower) || 0;
    const temporary = 1 + (Number(options.temporaryBonus) || 0);
    const total = Math.round((offense * 36 + survival + economy + level * 18 + evolution * 260 + perkPower + modifierPower) * temporary);
    return {
      total: Math.max(1, total),
      offense: Math.round(offense * 36),
      survival: Math.round(survival),
      utility: Math.round(economy + perkPower + modifierPower + evolution * 260),
      dps: offense,
      effectiveHealth,
    };
  }

  function heroPowerBreakdown() {
    const stats = heroSheetStats();
    return combatPowerModel(stats, {
      level: currentHeroLevel(),
      tier: permanentPowerTier(),
      attackDamage: stats.attack,
      autoInterval: permanentAutoInterval(),
      manualIntervalMs: Math.round(intervalFromAttacksPerSecond(heroAttacksPerSecond({ run: false }) * 0.92) * 1000),
      evolution: currentEvolution(),
      heroKey: meta.selectedHero,
      manualAccess: 0.22,
    });
  }

  function heroCombatPower() {
    return heroPowerBreakdown().total;
  }

  function runCombatStats(options = {}) {
    const stats = heroSheetStats();
    const focus = runPerkLevel("focus");
    const vitality = runPerkLevel("vitality");
    const guardian = runPerkLevel("guardian");
    const berserk = runPerkLevel("berserk");
    const windrider = runPerkLevel("windrider");
    const lowHealth = options.powerModel
      ? clamp((state.maxHealth - 100) / 950, 0, 1)
      : state.maxHealth > 0 ? clamp(1 - state.health / state.maxHealth, 0, 1) : 0;
    const berserkBoost = berserk * lowHealth;
    const styleBoost = Math.max(0, styleMultiplier() - 1);
    const comboSurge = state.comboSurgeTimer > 0 ? 1 : 0;
    const mirrorGuard = state.mirrorGuardTimer > 0 ? 1 : 0;
    const forgeTempo = state.forgeTempoTimer > 0 ? 1 : 0;
    const elementSurge = state.elementSurgeTimer > 0 ? elementSurgeStats(state.elementSurgeKind) : null;
    const contractBuff = adventureContractBuffStats();
    return {
      crit: clamp(stats.crit + state.level * 0.05 + focus * 1.8 + runPerkLevel("mystery") * 0.7 + berserkBoost * 4.4 + styleBoost * 20 + (state.specialTimer > 0 ? 4 : 0) + comboSurge * 2.4 + mirrorGuard * 1.2 + forgeTempo * 2.2 + (elementSurge ? elementSurge.crit : 0) + (contractBuff ? contractBuff.crit || 0 : 0), 0, 72),
      dodge: clamp(stats.dodge + state.level * 0.03 + guardian * 2.1 + runPerkLevel("comboGuard") * 1.15 + windrider * (state.draftTimer > 0 ? 2.4 : 0.8) + styleBoost * 10 + (state.feverTimer > 0 ? 2.5 : 0) + comboSurge * 1.4 + mirrorGuard * 2.2 + forgeTempo * 0.9 + (elementSurge ? elementSurge.dodge : 0) + (contractBuff ? contractBuff.dodge || 0 : 0), 0, 48),
      regen: Math.max(0, stats.regen + state.level * 0.008 + vitality * 0.35 + (elementSurge ? elementSurge.regen : 0) + (contractBuff ? contractBuff.regen || 0 : 0)),
      guard: clamp(stats.guard + state.level * 0.035 + vitality * 1.4 + guardian * 2.4 + runPerkLevel("comboGuard") * 1.65 + (state.shieldTimer > 0 ? 8 : 0) + mirrorGuard * 4.2 + forgeTempo * 2.6 + (elementSurge ? elementSurge.guard : 0) + (contractBuff ? contractBuff.guard || 0 : 0), 0, 66),
      haste: clamp(stats.haste + state.level * 0.04 + runPerkLevel("rapid") * 1.8 + runPerkLevel("gatecrash") * (state.draftTimer > 0 ? 1.9 : 0.45) + runPerkLevel("execution") * (boss && boss.breakTimer > 0 ? 2.6 : 0.55) + windrider * (state.draftTimer > 0 ? 2.6 : 0) + berserkBoost * 3.2 + styleBoost * 18 + (state.feverTimer > 0 ? 5 : 0) + comboSurge * 2.8 + mirrorGuard * 1.6 + forgeTempo * 3.4 + (elementSurge ? elementSurge.haste : 0) + (contractBuff ? contractBuff.haste || 0 : 0), 0, 86),
    };
  }

  function runHeroCombatPower() {
    const runStats = runCombatStats({ powerModel: true });
    const temporaryBonus =
      (state.specialTimer > 0 ? 0.1 : 0) +
      (state.feverTimer > 0 ? 0.08 : 0) +
      (state.draftTimer > 0 ? 0.05 : 0) +
      (state.comboSurgeTimer > 0 ? 0.04 : 0) +
      (state.elementSurgeTimer > 0 ? 0.045 : 0) +
      (state.mirrorGuardTimer > 0 ? 0.032 : 0) +
      (state.forgeTempoTimer > 0 ? 0.036 : 0) +
      (state.adventureContractBoostTimer > 0 ? 0.04 : 0) +
      (styleMultiplier() - 1) * 0.6 +
      (state.shieldTimer > 0 ? 0.035 : 0) +
      (boss && boss.breakTimer > 0 ? 0.055 + runPerkLevel("execution") * 0.018 : 0) +
      (state.ultimateTimer > 0 ? 0.08 : 0);
    const model = combatPowerModel({
      ...heroSheetStats(),
      health: state.maxHealth,
      energy: state.maxEnergy,
      attack: state.attackDamage,
      crit: runStats.crit,
      dodge: runStats.dodge,
      regen: runStats.regen,
      guard: runStats.guard,
      haste: runStats.haste,
      scoreBonus: state.scoreBonus,
    }, {
      level: state.level,
      tier: attackTier(),
      attackDamage: state.attackDamage,
      autoInterval: autoShootInterval(),
      manualIntervalMs: manualShootInterval(),
      evolution: currentEvolution(),
      heroKey: meta.selectedHero,
      perkLevels: Object.values(state.runPerks || {}).reduce((sum, value) => sum + value, 0),
      modifierPower: runModifier().power || 0,
      temporaryBonus,
      shielded: state.shieldTimer > 0,
    });
    return Math.max(heroCombatPower(), model.total);
  }

  function emptyRunStats() {
    return {
      papers: 0,
      kills: 0,
      eliteKills: 0,
      treasureKills: 0,
      bossKills: 0,
      nearMisses: 0,
      manualShots: 0,
      ultimates: 0,
      bossBreaks: 0,
      breakCores: 0,
    bossDamage: 0,
    draftGates: 0,
    mysteries: 0,
    supplies: 0,
    relics: 0,
    mountCores: 0,
    comboSigils: 0,
    counterBursts: 0,
    elementCores: 0,
    purificationCores: 0,
    starTrailBursts: 0,
    mirrorShards: 0,
    mirrorBursts: 0,
    forgeSigils: 0,
    forgeWaves: 0,
    currentShells: 0,
    adventureSurges: 0,
    adventureExplore: 0,
    adventureIntel: 0,
    adventureCargo: 0,
    adventureContracts: 0,
    adventureSupports: 0,
    damageTaken: 0,
    maxCombo: 0,
  };
}

  function resetRunPerks() {
    state.runPerks = runPerkPool.reduce((perks, perk) => {
      perks[perk.key] = 0;
      return perks;
    }, {});
    state.nextPerkLevel = 4;
    state.pendingPerks = [];
    state.recommendedPerkKey = "";
    state.perkChoiceTimer = 0;
  }

  function runPerkLevel(key) {
    return (state.runPerks && state.runPerks[key]) || 0;
  }

  function collectorBonus() {
    return 1 + runPerkLevel("collector") * 0.08 + runPerkLevel("jackpot") * 0.035;
  }

  function elementCoreInfo(kind = "wood") {
    return {
      wood: { key: "wood", label: "青木", color: "#35d07f", rgb: "53, 208, 127", glyph: "木", stats: { regen: 1.15, dodge: 1.8, guard: 1.2, crit: 0.4, haste: 1.1 } },
      fire: { key: "fire", label: "赤火", color: "#ff5650", rgb: "255, 86, 80", glyph: "火", stats: { regen: 0, dodge: 0.7, guard: 0.5, crit: 4.6, haste: 3.2 } },
      earth: { key: "earth", label: "厚土", color: "#f5c84b", rgb: "245, 200, 75", glyph: "土", stats: { regen: 0.45, dodge: 0.8, guard: 6.2, crit: 0.2, haste: 0.6 } },
      metal: { key: "metal", label: "庚金", color: "#fff8e8", rgb: "255, 248, 232", glyph: "金", stats: { regen: 0, dodge: 0.5, guard: 1.4, crit: 3.4, haste: 4.2 } },
      water: { key: "water", label: "玄水", color: "#54d0ff", rgb: "84, 208, 255", glyph: "水", stats: { regen: 0.35, dodge: 3.6, guard: 0.8, crit: 0.8, haste: 2.4 } },
    }[kind] || elementCoreInfo("wood");
  }

  function elementSurgeStats(kind) {
    return elementCoreInfo(kind).stats;
  }

  function randomElementKind() {
    const elements = ["wood", "fire", "earth", "metal", "water"];
    return elements[Math.floor(Math.random() * elements.length)];
  }

  function pickRunModifier() {
    if (state.gameMode === "daily") {
      return runModifierPool.find((modifier) => modifier.key === "overload") || runModifierPool[0];
    }
    const stageNo = isStageMode() ? activeStage().number : Math.max(1, state.bossLevel * 5);
    const pool = runModifierPool.filter((modifier) => {
      if (state.gameMode === "adventure" && stageNo <= 8) return !["storm", "patrol"].includes(modifier.key);
      return stageNo >= 12 || !["storm", "patrol"].includes(modifier.key);
    });
    if (state.gameMode === "adventure" && stageNo <= 3 && Math.random() < 0.55) {
      return { ...(runModifierPool.find((modifier) => modifier.key === "tailwind") || runModifierPool[0]) };
    }
    return { ...(pool[Math.floor(Math.random() * pool.length)] || runModifierPool[0]) };
  }

  function runModifier() {
    return state.runModifier || runModifierPool[0];
  }

  function modifierRewardMultiplier() {
    return (runModifier().reward || 1) * (1 + runPerkLevel("jackpot") * 0.08);
  }

  function runCoinReward(amount) {
    const value = Math.floor(Number(amount) || 0);
    if (value <= 0) return 0;
    return Math.max(1, Math.round(value * 0.42));
  }

  function runMaterialReward(amount) {
    const value = Math.floor(Number(amount) || 0);
    if (value <= 0) return 0;
    return Math.max(1, Math.round(value * 0.46));
  }

  function addScore(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    state.score += amount * SCORE_GAIN_MULTIPLIER;
  }

  function addRoundedScore(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    state.score += Math.round(amount * SCORE_GAIN_MULTIPLIER);
  }

  function missionCandidates() {
    const stage = activeStage();
    const stageNo = isStageMode() ? activeStage().number : Math.max(1, state.bossLevel * 5);
    const bossLike = state.gameMode === "daily" || state.gameMode === "endless" || (isStageMode() && stage.bossStage);
    const pool = [
      { key: "paper", label: "纸卷", stat: "papers", target: state.gameMode === "daily" ? 10 : 10 + Math.floor(stageNo / 5), coins: 90 + stageNo * 5, materials: 5 + Math.floor(stageNo / 10) },
      { key: "combo", label: "连击", stat: "maxCombo", target: 10 + Math.floor(stageNo / 8), coins: 120 + stageNo * 6, materials: 6 + Math.floor(stageNo / 9) },
      { key: "manual", label: "重击", stat: "manualShots", target: 7 + Math.floor(stageNo / 8), coins: 95 + stageNo * 5, materials: 5 + Math.floor(stageNo / 12) },
    ];
    if (state.gameMode !== "daily") {
      pool.push(
        { key: "kill", label: "击破", stat: "kills", target: 4 + Math.floor(stageNo / 12), coins: 110 + stageNo * 6, materials: 6 + Math.floor(stageNo / 9) },
        { key: "near", label: "闪避", stat: "nearMisses", target: 2 + Math.floor(stageNo / 24), coins: 130 + stageNo * 5, materials: 7 + Math.floor(stageNo / 8) }
      );
    }
    if (stageNo >= 12 || state.gameMode === "endless") {
      pool.push({ key: "elite", label: "精英", stat: "eliteKills", target: 1, coins: 180 + stageNo * 7, materials: 10 + Math.floor(stageNo / 6) });
    }
    if (bossLike) {
      const damageTarget = state.gameMode === "daily" ? 1800 : isStageMode() ? 520 + stageNo * 34 : 900 + state.bossLevel * 180;
      pool.push({ key: "bossDamage", label: "破甲", stat: "bossDamage", target: damageTarget, coins: 160 + stageNo * 8, materials: 9 + Math.floor(stageNo / 7) });
      pool.push({ key: "bossBreaks", label: "破防", stat: "bossBreaks", target: state.gameMode === "daily" ? 2 : 1, coins: 190 + stageNo * 8, materials: 10 + Math.floor(stageNo / 7) });
      pool.push({ key: "breakCore", label: "破核", stat: "breakCores", target: 1, coins: 190 + stageNo * 7, materials: 11 + Math.floor(stageNo / 7) });
    }
    if (state.gameMode !== "daily") {
      pool.push({ key: "ultimate", label: "大招", stat: "ultimates", target: 1, coins: 140 + stageNo * 5, materials: 8 + Math.floor(stageNo / 9) });
    }
    if (stageNo >= 6 || runPerkLevel("mystery") > 0) {
      pool.push({ key: "mystery", label: "奇遇", stat: "mysteries", target: 1, coins: 150 + stageNo * 6, materials: 8 + Math.floor(stageNo / 8) });
    }
    if (stageNo >= 5 || state.gameMode === "adventure") {
      pool.push({ key: "supply", label: "空投", stat: "supplies", target: 1, coins: 165 + stageNo * 6, materials: 9 + Math.floor(stageNo / 8) });
    }
    if (state.gameMode === "adventure" || stageNo >= 14 || state.gameMode === "endless") {
      pool.push({ key: "relic", label: "遗迹", stat: "relics", target: 1, coins: 190 + stageNo * 8, materials: 12 + Math.floor(stageNo / 7) });
    }
    if (state.gameMode === "adventure") {
      const route = adventureRouteTargets(stage);
      pool.push({ key: "routeExplore", label: "航图", stat: "adventureExplore", target: Math.max(22, Math.floor(route.explore * 0.42)), coins: 185 + stageNo * 7, materials: 11 + Math.floor(stageNo / 7) });
      if (route.intel > 0) pool.push({ key: "routeIntel", label: "线索", stat: "adventureIntel", target: 1, coins: 205 + stageNo * 7, materials: 12 + Math.floor(stageNo / 7) });
      if (route.cargo > 0) pool.push({ key: "routeCargo", label: "货箱", stat: "adventureCargo", target: 1, coins: 205 + stageNo * 7, materials: 12 + Math.floor(stageNo / 7) });
      pool.push({ key: "adventureContract", label: "契约", stat: "adventureContracts", target: 1, coins: 240 + stageNo * 8, materials: 14 + Math.floor(stageNo / 7) });
    }
    if (mountRiding() && (stageNo >= 5 || state.gameMode === "endless" || state.score > 1200)) {
      pool.push({ key: "mountCore", label: "坐骑共鸣", stat: "mountCores", target: 1, coins: 170 + stageNo * 6, materials: 10 + Math.floor(stageNo / 8) });
    }
    if (stageNo >= 8 || state.gameMode === "adventure" || state.gameMode === "endless") {
      pool.push({ key: "elementCore", label: "五行", stat: "elementCores", target: 1 + Math.floor(stageNo / 16), coins: 175 + stageNo * 8, materials: 10 + Math.floor(stageNo / 7) });
    }
    if (stageNo >= 8 || state.gameMode === "adventure" || (state.gameMode === "endless" && state.bossLevel >= 3)) {
      pool.push({ key: "purificationCore", label: "净化", stat: "purificationCores", target: 1, coins: 180 + stageNo * 8, materials: 10 + Math.floor(stageNo / 7) });
    }
    if (stageNo >= 9 || state.gameMode === "adventure" || (state.gameMode === "endless" && state.bossLevel >= 3)) {
      pool.push({ key: "starTrailBurst", label: "星轨", stat: "starTrailBursts", target: 1, coins: 185 + stageNo * 8, materials: 11 + Math.floor(stageNo / 7) });
    }
    if (stageNo >= 10 || state.gameMode === "adventure" || (state.gameMode === "endless" && state.bossLevel >= 3)) {
      pool.push({ key: "mirrorShard", label: "镜流", stat: "mirrorShards", target: 1, coins: 190 + stageNo * 8, materials: 11 + Math.floor(stageNo / 7) });
      pool.push({ key: "mirrorBurst", label: "折返", stat: "mirrorBursts", target: 1, coins: 195 + stageNo * 8, materials: 12 + Math.floor(stageNo / 7) });
    }
    if (stageNo >= 11 || state.gameMode === "adventure" || (state.gameMode === "endless" && state.bossLevel >= 4)) {
      pool.push({ key: "forgeSigil", label: "铸炉", stat: "forgeSigils", target: 1, coins: 195 + stageNo * 8, materials: 12 + Math.floor(stageNo / 7) });
      pool.push({ key: "forgeWave", label: "铸波", stat: "forgeWaves", target: 1, coins: 205 + stageNo * 8, materials: 13 + Math.floor(stageNo / 7) });
    }
    if (state.gameMode === "adventure") {
      pool.push({ key: "currentShell", label: "顺流贝壳", stat: "currentShells", target: 1, coins: 190 + stageNo * 7, materials: 11 + Math.floor(stageNo / 7) });
      pool.push({ key: "adventureSurge", label: "冲流爆发", stat: "adventureSurges", target: 1, coins: 210 + stageNo * 8, materials: 13 + Math.floor(stageNo / 7) });
    }
    if (stageNo >= 7 || state.gameMode === "adventure" || state.gameMode === "endless") {
      pool.push({ key: "comboSigil", label: "祭印", stat: "comboSigils", target: 1, coins: 150 + stageNo * 6, materials: 8 + Math.floor(stageNo / 8) });
    }
    if (stageNo >= 7 || state.gameMode === "adventure" || (state.gameMode === "endless" && state.bossLevel >= 2)) {
      pool.push({ key: "counterBurst", label: "闪反", stat: "counterBursts", target: 1, coins: 170 + stageNo * 7, materials: 10 + Math.floor(stageNo / 8) });
    }
    if (meta.selectedHero === "jet") {
      pool.push({ key: "jetDash", label: "穿门", stat: "draftGates", target: 1 + Math.floor(stageNo / 22), coins: 155 + stageNo * 7, materials: 9 + Math.floor(stageNo / 8) });
    } else if (meta.selectedHero === "ikun") {
      pool.push({ key: "ikunShot", label: "连啄", stat: "manualShots", target: 9 + Math.floor(stageNo / 7), coins: 150 + stageNo * 7, materials: 8 + Math.floor(stageNo / 8) });
    } else if (meta.selectedHero === "alchemist") {
      pool.push({ key: "alchemyClean", label: "炼成", stat: "kills", target: 5 + Math.floor(stageNo / 10), coins: 150 + stageNo * 7, materials: 9 + Math.floor(stageNo / 7) });
    } else if (meta.selectedHero === "paper") {
      pool.push({ key: "paperFlow", label: "纸潮", stat: "papers", target: 14 + Math.floor(stageNo / 6), coins: 145 + stageNo * 7, materials: 8 + Math.floor(stageNo / 7) });
    } else {
      pool.push({ key: "poopCombo", label: "便弹", stat: "maxCombo", target: 12 + Math.floor(stageNo / 7), coins: 145 + stageNo * 6, materials: 8 + Math.floor(stageNo / 8) });
    }
    return pool;
  }

  function classicRouteMission(stage = activeStage()) {
    if (state.gameMode !== "stage" || !stage) return null;
    const profile = classicStageProfile(stage);
    const stageNo = Math.max(1, stage.number || 1);
    const base = {
      classicRoute: true,
      routeKey: profile.key,
      coins: 150 + stageNo * 7,
      materials: 8 + Math.floor(stageNo / 8),
    };
    if (profile.key === "clean") {
      return { ...base, key: "classicCleanRoute", label: "路线清理", stat: "papers", target: 9 + Math.floor(stageNo / 7) };
    }
    if (profile.key === "supply") {
      return { ...base, key: "classicSupplyRoute", label: "路线补给", stat: "supplies", target: 1 };
    }
    if (profile.key === "combo") {
      return { ...base, key: "classicComboRoute", label: "路线连击", stat: "maxCombo", target: 12 + Math.floor(stageNo / 7) };
    }
    if (profile.key === "threat") {
      return { ...base, key: "classicThreatRoute", label: "路线压制", stat: "kills", target: 4 + Math.floor(stageNo / 11) };
    }
    return { ...base, key: "classicBossPrepRoute", label: "路线备战", stat: "manualShots", target: 7 + Math.floor(stageNo / 10) };
  }

  function createRunMissions() {
    const pool = missionCandidates();
    const picked = [];
    const routeMission = classicRouteMission(activeStage());
    if (routeMission) {
      picked.push({ ...routeMission, done: false });
      for (let i = pool.length - 1; i >= 0; i -= 1) {
        if (pool[i].key === routeMission.key || pool[i].stat === routeMission.stat) pool.splice(i, 1);
      }
    }
    while (picked.length < 3 && pool.length > 0) {
      const index = Math.floor(Math.random() * pool.length);
      picked.push({ ...pool.splice(index, 1)[0], done: false });
    }
    state.runMissions = picked;
  }

  function missionValue(mission) {
    const value = (state.runStats && state.runStats[mission.stat]) || 0;
    return Math.min(mission.target, Math.floor(value));
  }

  function recordRunStat(stat, amount = 1) {
    if (!state.runStats) state.runStats = emptyRunStats();
    const beforeValue = state.runStats[stat] || 0;
    if (stat === "maxCombo") {
      state.runStats.maxCombo = Math.max(state.runStats.maxCombo || 0, amount);
    } else {
      state.runStats[stat] = (state.runStats[stat] || 0) + amount;
    }
    advanceClassicRouteCommissionProgress(stat, beforeValue, state.runStats[stat] || 0);
    advanceAdventureContractForStat(stat, amount);
    checkRunMissions();
  }

  function advanceClassicRouteCommissionProgress(stat, beforeValue, afterValue) {
    if (state.gameMode !== "stage" || state.mode !== "playing") return;
    const mission = (state.runMissions || []).find((item) => item.classicRoute && !item.done && item.stat === stat);
    if (!mission || mission.target <= 0) return;
    const before = clamp(Math.floor(beforeValue || 0), 0, mission.target);
    const after = clamp(Math.floor(afterValue || 0), 0, mission.target);
    const delta = after - before;
    if (delta <= 0) return;
    const profile = classicStageProfile(activeStage());
    const unit = profile.key === "supply"
      ? 5.5
      : profile.key === "threat"
        ? 2.1
        : profile.key === "bossPrep"
          ? 1.75
          : profile.key === "combo"
            ? 1.35
            : 1.45;
    addClassicDistrictProgress(Math.min(8, Math.max(1, delta * unit)), "route");
    activateClassicRouteFocus(profile, Math.min(4.2, 2.6 + delta * 0.18));
    state.classicDistrictPulse = Math.max(state.classicDistrictPulse || 0, 0.36);
    const tier = Math.floor((after / mission.target) * 4);
    if (tier > (mission.routeHintTier || 0) && after < mission.target) {
      mission.routeHintTier = tier;
      state.eventName = `${profile.short}委托 ${after}/${mission.target}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.65);
      pop(hero.x + 30 * playScale(), hero.y - 14 * playScale(), profile.districtColor || "#5bded4", 8 + tier * 2);
    }
  }

  function checkRunMissions() {
    if (!state.runMissions || state.mode !== "playing") return;
    for (const mission of state.runMissions) {
      if (mission.done || missionValue(mission) < mission.target) continue;
      mission.done = true;
      const rewardMult = modifierRewardMultiplier();
      const rewardCoins = runCoinReward(Math.round(mission.coins * rewardMult));
      const rewardMaterials = runMaterialReward(Math.round(mission.materials * rewardMult));
      meta.coins += rewardCoins;
      meta.materials += rewardMaterials;
      addRoundedScore((160 + mission.target * 8) * state.scoreBonus);
      gainXp(50 + rewardMaterials * 4, false);
      saveMeta();
      showRewardToast([
        { type: "coin", amount: rewardCoins },
        { type: "material", amount: rewardMaterials },
        { type: "xp", amount: 50 + rewardMaterials * 4 },
      ]);
      state.eventName = `悬赏完成：${mission.label}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.2);
      pop(hero.x + 38 * playScale(), hero.y - 10 * playScale(), "#f5c84b", 18);
      beep(1040, 0.08, "triangle", 0.045);
      if (mission.classicRoute) triggerClassicRouteMissionReward(mission);
    }
    if (!state.missionBonusClaimed && state.runMissions.length > 0 && state.runMissions.every((mission) => mission.done)) {
      grantMissionClearBonus();
    }
  }

  function triggerClassicRouteMissionReward(mission) {
    if (!mission || state.gameMode !== "stage" || state.mode !== "playing") return;
    const profile = classicStageProfile(activeStage());
    const color = profile.districtColor || "#5bded4";
    const s = playScale();
    addClassicDistrictProgress(14 + Math.min(8, Math.floor((state.classicDistrictTarget || 60) * 0.08)), "major");
    activateClassicRouteFocus(profile, 4.2);
    state.classicDistrictPulse = Math.max(state.classicDistrictPulse || 0, 0.82);
    if (profile.key === "clean") {
      state.recoveryTimer = Math.max(state.recoveryTimer, 1.8);
      state.health = clamp(state.health + state.maxHealth * 0.08, 0, state.maxHealth);
      spawnClassicDistrictPickup("focusOrb", 0, 1, 1.08);
    } else if (profile.key === "supply") {
      state.energy = clamp(state.energy + state.maxEnergy * 0.14, 0, state.maxEnergy);
      spawnClassicDistrictPickup("supplyCrate", 0, 1, 1.12);
      spawnClassicDistrictPickup("energy", 1, 2, 1.08);
    } else if (profile.key === "combo") {
      state.combo += 3;
      state.comboTimer = Math.max(state.comboTimer, 3.6);
      state.comboSurgeTimer = Math.max(state.comboSurgeTimer || 0, 3.2);
      if (state.runStats) state.runStats.maxCombo = Math.max(state.runStats.maxCombo || 0, state.combo);
      spawnClassicDistrictPickup("comboSigil", 0, 1, 1.1);
    } else if (profile.key === "threat") {
      state.counterTimer = Math.max(state.counterTimer || 0, 3.4);
      state.shieldTimer = Math.max(state.shieldTimer, 1.45);
      for (const h of hazards) {
        if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
        if ((h.x || 0) < state.width + 120 * s) h.slow = Math.max(h.slow || 0, 0.68);
      }
      spawnClassicDistrictPickup("counterSeal", 0, 1, 1.1);
    } else {
      state.shieldTimer = Math.max(state.shieldTimer, 1.8);
      state.specialTimer = Math.max(state.specialTimer, 2.2);
      state.energy = clamp(state.energy + state.maxEnergy * 0.1, 0, state.maxEnergy);
      spawnClassicDistrictPickup("breakCore", 0, 1, 1.1);
    }
    state.eventName = `${profile.short}路线委托完成`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    gainStyle(16, `${profile.short}路线`, color);
    pop(hero.x + 46 * s, hero.y, color, 20);
  }

  function grantMissionClearBonus() {
    state.missionBonusClaimed = true;
    const rewardMult = modifierRewardMultiplier();
    const coins = runCoinReward(Math.round((260 + state.level * 28) * rewardMult));
    const materials = runMaterialReward(Math.round((16 + state.level * 2) * rewardMult));
    meta.coins += coins;
    meta.materials += materials;
    meta.inventory.energy += 1;
    if (Math.random() < 0.55) meta.inventory.magnet += 1;
    saveMeta();
    showRewardToast([
      { type: "coin", amount: coins },
      { type: "material", amount: materials },
      { type: "energy", amount: 1 },
    ]);
    state.energy = state.maxEnergy;
    state.health = clamp(state.health + state.maxHealth * 0.35, 0, state.maxHealth);
    addRoundedScore((520 + state.level * 38) * state.scoreBonus);
    addPickup({
      type: "goldPoop",
      x: Math.min(state.width - 70 * playScale(), hero.x + 240 * playScale()),
      y: clamp(hero.y, playTop() + 36 * playScale(), playBottom() - 36 * playScale()),
      r: pickupRadius("goldPoop"),
      phase: random(0, 6.28),
    }, true);
    grantRunPerk(runPerkPool.find((perk) => perk.key === "drone") || runPerkPool[0], "全清奖励");
    state.eventName = "悬赏全清";
    state.eventLabelTimer = 1.8;
    state.shake = Math.max(state.shake, 7);
  }

  function runMissionSummary() {
    const total = state.runMissions ? state.runMissions.length : 0;
    if (!total) return "";
    const done = state.runMissions.filter((mission) => mission.done).length;
    return `悬赏 ${done}/${total}。`;
  }

  function updateMissionHud() {
    if (!missionHud || !missionText) return;
    const missions = state.runMissions || [];
    const classicText = classicRouteHudText();
    const visible = (state.mode === "playing" || state.mode === "paused") && (missions.length > 0 || classicText);
    missionHud.hidden = !visible;
    if (!visible) return;
    missionHud.classList.remove("route-clean", "route-supply", "route-combo", "route-threat", "route-bossPrep", "route-read", "route-pressure");
    if (classicText && state.gameMode === "stage") {
      missionHud.classList.add(`route-${classicStageProfile(activeStage()).key}`);
      const forecast = classicRouteForecastInfo();
      if (forecast) missionHud.classList.add(forecast.severe ? "route-pressure" : "route-read");
    }
    const missionTextParts = missions.length > 0
      ? [`${runModifier().name}：${missions.map((mission) => `${mission.done ? "✓" : ""}${mission.label} ${missionValue(mission)}/${mission.target}`).join(" · ")}`]
      : [];
    if (classicText) missionTextParts.push(classicText);
    missionText.textContent = missionTextParts.join(" · ");
  }

  function maybeGrantRunPerk() {
    if (state.level < state.nextPerkLevel) return;
    if (state.mode !== "playing" || (state.pendingPerks && state.pendingPerks.length > 0)) return;
    state.nextPerkLevel += 5;
    showPerkChoice(pickPerkChoices(runPerkChoiceCount()));
  }

  function runPerkChoiceCount() {
    return clamp(3 + Math.min(1, runPerkLevel("tactician")), 3, 4);
  }

  function styleRank(score = state.styleScore) {
    if (score >= 88) return { label: "S", mult: 1.18, color: "#fff1a6" };
    if (score >= 66) return { label: "A", mult: 1.13, color: "#f5c84b" };
    if (score >= 44) return { label: "B", mult: 1.08, color: "#9de8ff" };
    if (score >= 22) return { label: "C", mult: 1.04, color: "#dfff7a" };
    return { label: "D", mult: 1, color: "#fff8e8" };
  }

  function styleMultiplier() {
    return styleRank().mult;
  }

  function gainStyle(amount, label = "", color = "#f5c84b") {
    if (amount <= 0 || state.mode !== "playing") return;
    const before = styleRank().label;
    state.styleScore = clamp(state.styleScore + amount, 0, 100);
    state.styleTimer = Math.max(state.styleTimer, 3.4);
    const after = styleRank().label;
    if (after !== before && ["B", "A", "S"].includes(after)) {
      state.eventName = `技巧 ${after}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, after === "S" ? 1.2 : 0.8);
      pop(hero.x + 18 * playScale(), hero.y - 18 * playScale(), styleRank().color, after === "S" ? 18 : 10);
      beep(after === "S" ? 1220 : 980, 0.055, "triangle", 0.035);
    } else if (label && state.eventLabelTimer <= 0.2) {
      state.eventName = label;
      state.eventLabelTimer = 0.45;
      pop(hero.x + 18 * playScale(), hero.y - 12 * playScale(), color, 5);
    }
  }

  function pickPerkChoices(count) {
    const pool = runPerkPool
      .map((perk) => ({
        ...perk,
        weight: Math.random() + Math.max(0, 2 - runPerkLevel(perk.key)) * 0.12,
      }))
      .sort((a, b) => b.weight - a.weight);
    return pool.slice(0, count).map(({ weight, ...perk }) => perk);
  }

  function autoPickRunPerk(choices) {
    const healthRatio = state.maxHealth > 0 ? state.health / state.maxHealth : 1;
    const energyRatio = state.maxEnergy > 0 ? state.energy / state.maxEnergy : 1;
    const pressure = state.dangerLevel || directorPressure();
    const bossPressure = boss ? 0.35 : 0;
    const scores = choices.map((perk) => {
      let score = Math.random() * 0.18 - runPerkLevel(perk.key) * 0.12;
      if (perk.key === "vitality") score += healthRatio < 0.55 ? 0.85 : 0.22;
      if (perk.key === "guardian") score += pressure * 0.8 + (state.recoveryTimer > 0 ? 0.38 : 0);
      if (perk.key === "overcharge") score += energyRatio < 0.55 ? 0.72 : state.ultimateCooldown > 0 ? 0.28 : 0.12;
      if (perk.key === "rapid") score += bossPressure + state.level * 0.012;
      if (perk.key === "focus") score += state.combo > 8 ? 0.38 : 0.18;
      if (perk.key === "drone") score += runPerkLevel("drone") < 2 ? 0.32 : 0.12;
      if (perk.key === "leech") score += healthRatio < 0.75 ? 0.42 : 0.08;
      if (perk.key === "jackpot") score += state.eventKind === "treasureRun" || state.eventKind === "goldRush" ? 0.58 : 0.14;
      if (perk.key === "berserk") score += healthRatio < 0.68 ? 0.48 : 0.16;
      if (perk.key === "collector") score += state.magnetTimer > 0 || state.eventKind === "paperRain" ? 0.44 : 0.16;
      if (perk.key === "windrider") score += state.draftTimer > 0 || state.eventKind === "draftGate" ? 0.64 : 0.18;
      if (perk.key === "splash") score += hazards.length > 5 || state.eventKind === "eliteWave" ? 0.58 : 0.2;
      if (perk.key === "weakbreaker") score += boss ? 0.72 : state.level >= 8 ? 0.28 : 0.12;
      if (perk.key === "execution") score += boss && boss.breakMeter > 35 ? 0.62 : runPerkLevel("weakbreaker") > 0 ? 0.34 : 0.16;
      if (perk.key === "tactician") score += state.level < 20 && runPerkLevel("tactician") < 1 ? 0.46 : 0.08;
      if (perk.key === "timewarp") score += state.runStats.nearMisses > 1 || pressure > 0.38 ? 0.48 : 0.14;
      if (perk.key === "mystery") score += state.level >= 4 || state.eventKind === "mysteryRoute" ? 0.42 : 0.16;
      if (perk.key === "gatecrash") score += state.draftTimer > 0 || state.eventKind === "draftGate" ? 0.5 : 0.18;
      if (perk.key === "comboGuard") score += state.combo > 16 ? 0.5 : pressure > 0.32 ? 0.34 : 0.14;
      return { perk, score };
    });
    scores.sort((a, b) => b.score - a.score);
    return (scores[0] && scores[0].perk) || choices[0];
  }

  function showPerkChoice(choices) {
    if (!Array.isArray(choices) || choices.length === 0) return;
    state.pendingPerks = choices;
    const recommended = autoPickRunPerk(choices);
    state.recommendedPerkKey = recommended ? recommended.key : choices[0].key;
    state.perkChoiceTimer = 0;
    if (state.mode === "playing") {
      state.perkPausedMode = "playing";
      state.mode = "perkchoice";
      keys.clear();
      state.dragPointerId = null;
      setFly(false);
    }
    renderPerkChoice();
    if (perkChoice) perkChoice.hidden = false;
    state.eventName = "天赋选择";
    state.eventLabelTimer = 1.2;
    beep(980, 0.08, "triangle", 0.04);
  }

  function renderPerkChoice() {
    if (!perkChoice || !perkChoiceGrid) return;
    perkChoiceGrid.innerHTML = "";
    const choices = state.pendingPerks || [];
    for (const perk of choices) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "perk-card";
      button.classList.toggle("is-recommended", perk.key === state.recommendedPerkKey);
      button.style.setProperty("--perk-color", perk.color);
      button.innerHTML = `<i class="perk-card-icon perk-${perk.key}"></i><strong>${perk.name}</strong><span>${perk.desc || "立刻获得一次强化。"}</span>${perk.key === state.recommendedPerkKey ? "<em>推荐</em>" : ""}`;
      button.addEventListener("click", () => chooseRunPerk(perk.key));
      perkChoiceGrid.appendChild(button);
    }
    updatePerkChoiceUi();
  }

  function updatePerkChoiceUi() {
    if (perkChoiceHint) {
      const recommended = runPerkPool.find((perk) => perk.key === state.recommendedPerkKey);
      perkChoiceHint.textContent = `战斗已暂停，选择后继续${recommended ? ` · 推荐：${recommended.name}` : ""}`;
    }
    if (perkRerollButton) {
      const count = runItemButtonCount("reroll");
      perkRerollButton.textContent = state.mode === "perkchoice" ? `重骰天赋 x${count}` : `重骰天赋 x${meta.inventory.reroll || 0}`;
      perkRerollButton.title = runItemStatusText("reroll");
      perkRerollButton.disabled = count <= 0 || !state.pendingPerks || state.pendingPerks.length === 0;
    }
  }

  function updatePerkChoice(dt) {
    if (!state.pendingPerks || state.pendingPerks.length === 0) return;
    updatePerkChoiceUi();
  }

  function rerollPerkChoices() {
    if (!state.pendingPerks || state.pendingPerks.length === 0 || !runItemAvailable("reroll")) return;
    consumeRunItem("reroll");
    saveMeta();
    state.pendingPerks = pickPerkChoices(runPerkChoiceCount());
    const recommended = autoPickRunPerk(state.pendingPerks);
    state.recommendedPerkKey = recommended ? recommended.key : state.pendingPerks[0].key;
    state.perkChoiceTimer = 0;
    renderPerkChoice();
    showRewardToast([{ type: "reroll", label: "天赋重骰", amount: 1 }], { duration: 1300 });
    beep(860, 0.06, "triangle", 0.035);
  }

  function hidePerkChoice() {
    state.pendingPerks = [];
    state.recommendedPerkKey = "";
    state.perkChoiceTimer = 0;
    if (state.mode === "perkchoice" && state.perkPausedMode === "playing") {
      state.mode = "playing";
    }
    state.perkPausedMode = "";
    if (perkChoice) perkChoice.hidden = true;
    if (perkChoiceGrid) perkChoiceGrid.innerHTML = "";
  }

  function chooseRunPerk(key, automatic = false) {
    if (!state.pendingPerks || state.pendingPerks.length === 0) return;
    const perk = (state.pendingPerks || []).find((entry) => entry.key === key) || runPerkPool.find((entry) => entry.key === key);
    if (!perk) return;
    hidePerkChoice();
    grantRunPerk(perk, automatic ? "自动推荐" : "选择天赋");
    showRewardToast([{ type: "medal", label: perk.name, amount: 1 }], { duration: 1600 });
    maybeGrantRunPerk();
  }

  function choosePendingPerkByIndex(index) {
    const perk = (state.pendingPerks || [])[index];
    if (perk) chooseRunPerk(perk.key);
  }

  function randomBonusPickupType() {
    const roll = Math.random();
    if (roll > 0.94 - runPerkLevel("mystery") * 0.025) return "mysteryCapsule";
    if (roll > 0.9) return "focusOrb";
    if (roll > 0.74) return "shield";
    if (roll > 0.56) return "energy";
    if (roll > 0.4) return "magnet";
    return "bonusPaper";
  }

  function pickupRadius(type, s = playScale(), strength = 1) {
    const base = type === "draftGate"
      ? 42
      : type === "supplyCrate"
        ? 31
        : type === "relicShard"
          ? 30
          : type === "mountCore"
            ? 32
            : type === "comboSigil"
              ? 31
              : type === "counterSeal"
            ? 32
            : type === "breakCore"
              ? 34
              : type === "purificationCore"
                ? 35
                : type === "mirrorShard"
                  ? 35
                  : type === "forgeSigil"
                    ? 35
          : type === "mysteryCapsule"
            ? 28 + Math.min(8, strength * 3)
            : type === "elementCore"
              ? 35
            : type === "goldPoop"
              ? 24
              : type === "paper" || type === "bonusPaper"
                ? 20
                : type === "focusOrb"
                  ? 25
                  : 23;
    return base * PICKUP_SIZE_SCALE * s;
  }

  function activePickupLimit() {
    return Math.max(4, isLandscapePlay() ? MAX_ACTIVE_PICKUPS - 1 : MAX_ACTIVE_PICKUPS);
  }

  function oldestReplaceablePickupIndex() {
    const s = playScale();
    const staleIndex = pickups.findIndex((pickup) => pickup && pickup.x < hero.x - 96 * s);
    return staleIndex >= 0 ? staleIndex : 0;
  }

  function addPickup(pickup, priority = false) {
    if (!pickup) return false;
    const limit = activePickupLimit();
    if (pickups.length >= limit) {
      if (!priority) return false;
      pickups.splice(oldestReplaceablePickupIndex(), 1);
    }
    pickups.push(pickup);
    return true;
  }

  function canvasRgba(color, alpha = 1, fallback = "157, 232, 255") {
    if (typeof color !== "string" || color[0] !== "#") return `rgba(${fallback}, ${alpha})`;
    const hex = color.slice(1);
    if (hex.length !== 3 && hex.length !== 6) return `rgba(${fallback}, ${alpha})`;
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    const value = Number.parseInt(full, 16);
    if (!Number.isFinite(value)) return `rgba(${fallback}, ${alpha})`;
    return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
  }

  function spawnTreasureBurst(x, y, strength = 1) {
    const s = playScale();
    const top = playTop() + 34 * s;
    const bottom = playBottom() - 34 * s;
    const type = Math.random() < 0.72 + Math.min(0.16, strength * 0.04) ? "goldPoop" : randomBonusPickupType();
    addPickup({
      type,
      x,
      y: clamp(y, top, bottom),
      r: pickupRadius(type, s, strength),
      phase: random(0, 6.28),
      strength,
    }, true);
  }

  function spawnMysteryCapsule(x, y, strength = 1) {
    const s = playScale();
    addPickup({
      type: "mysteryCapsule",
      x: x === undefined ? state.width + 48 * s : x,
      y: clamp(y, playTop() + 40 * s, playBottom() - 40 * s),
      r: pickupRadius("mysteryCapsule", s, strength),
      phase: random(0, 6.28),
      strength,
    }, true);
  }

  function weightedPick(entries) {
    const viable = entries.filter((entry) => entry && entry.weight > 0);
    const total = viable.reduce((sum, entry) => sum + entry.weight, 0);
    let roll = Math.random() * Math.max(0.001, total);
    for (const entry of viable) {
      roll -= entry.weight;
      if (roll <= 0) return entry;
    }
    return viable[viable.length - 1] || entries[0];
  }

  function shockwaveFrom(x, y, strength = 1, label = "冲击波") {
    const s = playScale();
    const radius = (126 + strength * 42 + runPerkLevel("gatecrash") * 18) * s;
    const toiletDamage = state.attackDamage * (2.8 + strength * 0.55) + state.level * 0.9;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y;
      if (Math.hypot(hx - x, hy - y) > radius + Math.max(h.w || 0, h.h || 0) * 0.45) continue;
      if (h.type === "toilet") {
        h.hp -= toiletDamage * (h.elite ? 0.78 : 1);
        h.slow = Math.max(h.slow || 0, 1.2 + strength * 0.25);
        h.hit = Math.max(h.hit || 0, 0.2);
        if (h.hp <= 0) {
          destroyHazard(i, h);
          cleared += 1;
        }
      } else {
        hazards.splice(i, 1);
        cleared += 1;
        pop(h.x, h.y, "#9de8ff", 8);
      }
    }
    let bossDamage = 0;
    if (boss && Math.hypot(boss.x - x, boss.y - y) < radius * 1.42) {
      bossDamage = Math.round((state.attackDamage * (5.2 + strength * 1.6) + state.level * 5) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.28);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("manual") * (0.42 + strength * 0.08), 0, bossBreakThreshold());
      recordRunStat("bossDamage", bossDamage);
      pop(boss.x - boss.w * 0.25, boss.y, "#9de8ff", 16);
      if (boss.hp <= 0) defeatBoss();
    }
    if (cleared > 0 || bossDamage > 0) {
      addRoundedScore((110 + cleared * 72 + bossDamage * 0.45) * state.scoreBonus * styleMultiplier());
      gainXp(32 + cleared * 20 + Math.min(120, bossDamage * 0.35));
      gainStyle(10 + cleared * 3, label, "#9de8ff");
      state.shake = Math.max(state.shake, 6 + strength * 2);
      state.eventName = `${label}${cleared > 0 ? ` x${cleared}` : ""}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
    }
    pop(x, y, "#9de8ff", 18 + cleared * 2);
    return { cleared, bossDamage };
  }

  function triggerMysteryCapsule(p) {
    const expert = runPerkLevel("mystery");
    const potency = Math.max(0.85, (p.strength || 1) * (1 + expert * 0.22));
    const canPerk = state.mode === "playing" && (!state.pendingPerks || state.pendingPerks.length === 0);
    const effect = weightedPick([
      { key: "perk", weight: canPerk && state.level >= 3 ? 0.72 + expert * 0.18 : 0 },
      { key: "shockwave", weight: hazards.length > 1 || boss ? 1.08 + expert * 0.12 : 0.45 },
      { key: "treasure", weight: 0.88 + runPerkLevel("jackpot") * 0.16 },
      { key: "draft", weight: 0.72 + runPerkLevel("windrider") * 0.12 },
      { key: "overdrive", weight: state.energy < state.maxEnergy * 0.82 || state.ultimateCooldown > 1 ? 0.86 : 0.48 },
      { key: "weak", weight: boss ? 0.68 + runPerkLevel("weakbreaker") * 0.12 : 0.2 },
    ]);
    const key = effect.key;
    if (key === "perk") {
      const count = Math.max(3, runPerkChoiceCount());
      showRewardToast([{ type: "medal", label: "奇遇天赋", amount: 1 }], { duration: 1500 });
      showPerkChoice(pickPerkChoices(count));
      state.eventName = "奇遇：天赋盲盒";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.2);
    } else if (key === "shockwave") {
      shockwaveFrom(p.x, p.y, potency, "奇遇冲击波");
      state.shieldTimer = Math.max(state.shieldTimer, 1.6 + expert * 0.45);
    } else if (key === "treasure") {
      const coins = runCoinReward(Math.round((90 + state.level * 13) * potency * modifierRewardMultiplier()));
      const materials = runMaterialReward(Math.round((5 + state.level * 0.7) * potency * modifierRewardMultiplier()));
      meta.coins += coins;
      meta.materials += materials;
      saveMeta();
      spawnTreasureBurst(p.x, p.y, 1.25 + potency + expert * 0.25);
      showRewardToast([{ type: "coin", amount: coins }, { type: "material", amount: materials }], { duration: 1800 });
      state.eventName = "奇遇：黄金喷泉";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    } else if (key === "draft") {
      state.draftTimer = Math.max(state.draftTimer, 6.2 + potency * 1.2 + runPerkLevel("windrider") * 0.8);
      state.recoveryTimer = Math.max(state.recoveryTimer, 1.2);
      for (const h of hazards) h.slow = Math.max(h.slow || 0, 1.4 + potency * 0.35);
      addRoundedScore((240 + state.combo * 18) * state.scoreBonus * styleMultiplier());
      gainStyle(18, "奇遇滑流", "#9de8ff");
      state.eventName = "奇遇：时空滑流";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    } else if (key === "weak") {
      if (boss) {
        boss.weakDuration = Math.max(boss.weakDuration || 0, 3.4 + potency * 0.7);
        boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("manual") * (0.7 + potency * 0.12), 0, bossBreakThreshold());
        boss.controlFlash = Math.max(boss.controlFlash || 0, 0.18);
      } else {
        addPickup({ type: "focusOrb", x: p.x + 58 * playScale(), y: p.y, r: pickupRadius("focusOrb"), phase: random(0, 6.28) }, true);
      }
      state.energy = clamp(state.energy + state.maxEnergy * 0.2, 0, state.maxEnergy);
      gainStyle(14, "奇遇雷达", "#fff1a6");
      state.eventName = "奇遇：弱点雷达";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    } else {
      state.energy = state.maxEnergy;
      state.ultimateCooldown = Math.max(0, state.ultimateCooldown - (5.2 + potency * 1.2 + runPerkLevel("overcharge") * 0.7));
      state.specialTimer = Math.max(state.specialTimer, 6.4 + potency * 1.1);
      state.combo += 2 + Math.floor(potency);
      state.comboTimer = Math.max(state.comboTimer, 3.2);
      gainXp(72 + state.level * 5);
      gainStyle(16, "奇遇过载", "#54d0ff");
      state.eventName = state.ultimateCooldown <= 0 ? "奇遇：大招就绪" : "奇遇：能量过载";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    }
    addAdventureRouteProgress(12 + potency * 5, {
      intel: key === "perk" || key === "weak" || Math.random() < 0.42 ? 1 : 0,
      label: "奇遇线索",
      major: true,
    });
    pop(p.x, p.y, "#ff8d54", 24 + expert * 4);
    state.shake = Math.max(state.shake, 5 + expert);
    beep(1180, 0.08, "triangle", 0.045);
  }

  function triggerSupplyCrate(p) {
    const potency = Math.max(0.9, p.strength || 1);
    const rewardMult = modifierRewardMultiplier();
    const coins = runCoinReward(Math.round((120 + state.level * 14) * potency * rewardMult));
    const materials = runMaterialReward(Math.round((7 + state.level * 0.85) * potency * rewardMult));
    const item = weightedPick([
      { key: "shield", weight: state.shieldTimer > 0 ? 0.72 : 1.1 },
      { key: "energy", weight: state.energy < state.maxEnergy * 0.72 ? 1.25 : 0.86 },
      { key: "magnet", weight: 0.72 + runPerkLevel("collector") * 0.08 },
      { key: "storm", weight: 0.34 + (boss ? 0.28 : 0) },
      { key: "reroll", weight: state.level >= 4 ? 0.26 : 0.08 },
    ]).key;
    meta.coins += coins;
    meta.materials += materials;
    if (meta.inventory[item] !== undefined) meta.inventory[item] += 1;
    saveMeta();
    state.energy = clamp(state.energy + state.maxEnergy * (0.34 + potency * 0.08), 0, state.maxEnergy);
    state.health = clamp(state.health + state.maxHealth * (0.16 + potency * 0.04), 0, state.maxHealth);
    state.shieldTimer = Math.max(state.shieldTimer, 1.8 + potency * 0.8);
    state.recoveryTimer = Math.max(state.recoveryTimer, 1.15);
    addRoundedScore((180 + state.combo * 10) * state.scoreBonus * styleMultiplier());
    gainXp(46 + state.level * 5);
    gainStyle(10, "补给空投", "#9de8ff");
    showRewardToast([
      { type: "coin", amount: coins },
      { type: "material", amount: materials },
      { type: item, amount: meta.inventory[item] !== undefined ? 1 : 0 },
    ], { duration: 1750 });
    if (Math.random() < 0.32 + runPerkLevel("jackpot") * 0.04) {
      spawnTreasureBurst(p.x + 44 * playScale(), p.y, 0.8 + potency * 0.35);
    }
    addAdventureRouteProgress(18 + potency * 7, {
      cargo: 1,
      label: "航线货箱",
      major: true,
    });
    state.eventName = `补给空投：${rewardLabel(item)}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    state.shake = Math.max(state.shake, 4);
    pop(p.x, p.y, "#9de8ff", 24);
    beep(940, 0.08, "triangle", 0.045);
  }

  function triggerRelicShard(p) {
    const potency = Math.max(1, (p.strength || 1) * (1 + runPerkLevel("mystery") * 0.14));
    const rewardMult = modifierRewardMultiplier();
    const coins = runCoinReward(Math.round((150 + state.level * 18) * potency * rewardMult));
    const materials = runMaterialReward(Math.round((10 + state.level) * potency * rewardMult));
    meta.coins += coins;
    meta.materials += materials;
    saveMeta();
    state.energy = clamp(state.energy + state.maxEnergy * (0.24 + potency * 0.06), 0, state.maxEnergy);
    state.specialTimer = Math.max(state.specialTimer, 4.8 + potency);
    addRoundedScore((260 + state.combo * 18) * state.scoreBonus * styleMultiplier());
    gainXp(72 + state.level * 7);
    gainStyle(18, "遗迹共鸣", "#c45dff");
    showRewardToast([
      { type: "coin", amount: coins },
      { type: "material", amount: materials },
      { type: "medal", label: "遗迹共鸣", amount: 1 },
    ], { duration: 1850 });
    const canPerk = state.mode === "playing" && (!state.pendingPerks || state.pendingPerks.length === 0) && state.level >= 3;
    if (canPerk && Math.random() < 0.5) {
      const perk = runPerkPool[Math.floor(Math.random() * runPerkPool.length)];
      grantRunPerk(perk, "遗迹共鸣");
    } else {
      shockwaveFrom(p.x, p.y, 0.92 + potency * 0.22, "遗迹冲击");
      if (boss) {
        boss.weakDuration = Math.max(boss.weakDuration || 0, 2.4 + potency * 0.35);
        boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.55 + potency * 0.08), 0, bossBreakThreshold());
      }
    }
    if (Math.random() < 0.28 + runPerkLevel("jackpot") * 0.03) {
      spawnTreasureBurst(p.x + 48 * playScale(), p.y, 0.9 + potency * 0.3);
    }
    addAdventureRouteProgress(22 + potency * 8, {
      intel: 1,
      label: "遗迹线索",
      major: true,
    });
    state.eventName = "遗迹共鸣";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.5);
    state.shake = Math.max(state.shake, 6);
    pop(p.x, p.y, "#c45dff", 28);
    beep(1260, 0.09, "triangle", 0.045);
  }

  function triggerComboSigil(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const duration = 7.2 + potency * 1.15 + Math.min(2.4, state.combo * 0.035);
    state.comboSurgeTimer = Math.max(state.comboSurgeTimer || 0, duration);
    state.combo += 4 + Math.floor(potency);
    state.comboTimer = Math.max(state.comboTimer, 4.25);
    state.energy = clamp(state.energy + state.maxEnergy * (0.16 + potency * 0.035), 0, state.maxEnergy);
    addRoundedScore((190 + state.combo * 15) * state.scoreBonus * styleMultiplier());
    gainXp(38 + state.level * 4);
    gainStyle(22 + Math.floor(potency * 3), "连击祭坛", "#dfff7a");
    let softened = 0;
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dx = (h.x || 0) - hero.x;
      const dy = Math.abs((h.y || hero.y) - hero.y);
      if (dx > -70 * s && dx < 320 * s && dy < 130 * s) {
        h.slow = Math.max(h.slow || 0, 0.58 + potency * 0.12);
        h.hit = Math.max(h.hit || 0, 0.12);
        softened += 1;
      }
    }
    recordRunStat("maxCombo", state.combo);
    state.eventName = `连击祭坛${softened ? ` x${softened}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.3);
    showRewardToast([{ type: "comboSigil", label: "连击祭印", amount: 1 }], { duration: 1500 });
    pop(p.x, p.y, "#dfff7a", 26);
    state.shake = Math.max(state.shake, 4.5);
    beep(1160, 0.075, "triangle", 0.045);
  }

  function triggerCounterSeal(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    state.counterTimer = Math.max(state.counterTimer || 0, 8.2 + potency * 1.25 + runPerkLevel("timewarp") * 0.5);
    state.counterStacks = Math.max(state.counterStacks || 0, 1);
    state.counterPulse = Math.max(state.counterPulse || 0, 0.38);
    state.shieldTimer = Math.max(state.shieldTimer, 0.75 + potency * 0.16);
    state.draftTimer = Math.max(state.draftTimer, 1.25 + potency * 0.18);
    state.energy = clamp(state.energy + state.maxEnergy * (0.1 + potency * 0.025), 0, state.maxEnergy);
    addRoundedScore((150 + state.combo * 12) * state.scoreBonus * styleMultiplier());
    state.combo += 2;
    state.comboTimer = Math.max(state.comboTimer, 3.1);
    gainXp(40 + state.level * 4);
    gainStyle(16, "闪反试炼", "#ff8d54");
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dx = (h.x || 0) - hero.x;
      const dy = Math.abs((h.y || hero.y) - hero.y);
      if (dx > -70 * s && dx < 340 * s && dy < 145 * s) {
        h.slow = Math.max(h.slow || 0, 0.42 + potency * 0.08);
        h.hit = Math.max(h.hit || 0, 0.1);
      }
    }
    recordRunStat("maxCombo", state.combo);
    state.eventName = `闪反蓄势 ${state.counterStacks}/3`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    showRewardToast([{ type: "counterSeal", label: "闪反徽印", amount: 1 }], { duration: 1500 });
    pop(p.x, p.y, "#ff8d54", 26);
    beep(1220, 0.075, "triangle", 0.045);
  }

  function triggerCounterBurst(label = "闪反冲击") {
    const s = playScale();
    state.counterStacks = 0;
    state.counterTimer = Math.max(state.counterTimer || 0, 3.6 + runPerkLevel("timewarp") * 0.35);
    state.counterPulse = 0.82;
    state.energy = clamp(state.energy + state.maxEnergy * 0.12 + runPerkLevel("timewarp") * 4, 0, state.maxEnergy);
    state.shieldTimer = Math.max(state.shieldTimer, 0.95);
    if (boss) {
      applyBossControl("stun", 0.58 + runPerkLevel("timewarp") * 0.08);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.34 + runPerkLevel("weakbreaker") * 0.05), 0, bossBreakThreshold());
      boss.hit = Math.max(boss.hit || 0, 0.18);
    }
    const result = shockwaveFrom(hero.x + 62 * s, hero.y, 0.72 + runPerkLevel("timewarp") * 0.08, label);
    recordRunStat("counterBursts", 1);
    state.combo += 2;
    state.comboTimer = Math.max(state.comboTimer, 3.2);
    recordRunStat("maxCombo", state.combo);
    state.eventName = result.bossDamage > 0 ? "闪反破防" : label;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    showRewardToast([{ type: "counterSeal", label: label, amount: 1 }], { duration: 1250 });
    pop(hero.x + 42 * s, hero.y, "#ff8d54", 24);
    state.shake = Math.max(state.shake, 7);
    beep(360, 0.07, "sawtooth", 0.045);
    setTimeout(() => beep(980, 0.06, "triangle", 0.04), 80);
  }

  function maybeChargeCounterFromDodge() {
    if (state.counterTimer <= 0) return;
    state.counterStacks = Math.min(3, (state.counterStacks || 0) + 1);
    state.counterTimer = Math.max(state.counterTimer, 4.2);
    state.counterPulse = Math.max(state.counterPulse || 0, 0.32);
    state.energy = clamp(state.energy + 3 + runPerkLevel("timewarp") * 1.2, 0, state.maxEnergy);
    if (state.counterStacks >= 3) {
      triggerCounterBurst();
      return;
    }
    state.eventName = `闪反蓄势 ${state.counterStacks}/3`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.8);
    pop(hero.x + 28 * playScale(), hero.y, "#ff8d54", 9 + state.counterStacks * 2);
  }

  function triggerElementCore(p) {
    const kind = p.elementKind || randomElementKind();
    const element = elementCoreInfo(kind);
    const potency = Math.max(1, p.strength || 1);
    const s = playScale();
    const radius = (142 + potency * 32) * s;
    let affected = 0;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || hero.y;
      if (Math.hypot(hx - p.x, hy - p.y) > radius + Math.max(h.w || 0, h.h || 0) * 0.36) continue;
      affected += 1;
      h.hit = Math.max(h.hit || 0, 0.14);
      h.slow = Math.max(h.slow || 0, kind === "water" ? 1.25 : kind === "wood" ? 1.05 : kind === "earth" ? 0.86 : 0.42);
      if (kind === "fire" || kind === "metal") {
        const damage = state.attackDamage * (kind === "fire" ? 2.85 : 2.25) + state.level * (kind === "fire" ? 1.2 : 0.9);
        if (h.type === "toilet") {
          h.hp -= damage * (h.elite ? 0.72 : 1);
          if (h.hp <= 0) {
            destroyHazard(i, h);
            cleared += 1;
          }
        } else if (cleared < 4 || kind === "fire") {
          hazards.splice(i, 1);
          cleared += 1;
          pop(h.x, h.y, element.color, 7);
        }
      }
    }

    if (kind === "wood") {
      state.health = clamp(state.health + state.maxHealth * (0.1 + potency * 0.025), 0, state.maxHealth);
      state.recoveryTimer = Math.max(state.recoveryTimer, 1.4 + potency * 0.34);
    } else if (kind === "fire") {
      state.feverTimer = Math.max(state.feverTimer, 2.6 + potency * 0.45);
      shockwaveFrom(p.x, p.y, 0.58 + potency * 0.14, "赤火裂爆");
    } else if (kind === "earth") {
      state.shieldTimer = Math.max(state.shieldTimer, 3.6 + potency * 0.75);
      state.recoveryTimer = Math.max(state.recoveryTimer, 0.9 + potency * 0.2);
      addMountCharge(8 + potency * 3);
    } else if (kind === "metal") {
      state.specialTimer = Math.max(state.specialTimer, 3.8 + potency * 0.5);
      state.ultimateCooldown = Math.max(0, state.ultimateCooldown - (2.4 + potency * 0.7));
    } else if (kind === "water") {
      state.energy = clamp(state.energy + state.maxEnergy * (0.24 + potency * 0.04), 0, state.maxEnergy);
      state.magnetTimer = Math.max(state.magnetTimer, 4.6 + potency * 0.5);
      state.draftTimer = Math.max(state.draftTimer, 1.4 + potency * 0.22);
    }

    if (boss) {
      const breakGain = bossBreakGain(kind === "metal" ? "manual" : "glance") * (kind === "metal" ? 0.54 + potency * 0.08 : 0.22 + potency * 0.04);
      boss.breakMeter = clamp((boss.breakMeter || 0) + breakGain, 0, bossBreakThreshold());
      boss.hit = Math.max(boss.hit || 0, 0.18);
      if (kind === "water" || kind === "wood") {
        applyBossControl(kind === "water" ? "paralyze" : "root", 0.46 + potency * 0.08);
      }
      if (kind === "metal" || kind === "fire") {
        const bossDamage = Math.round((state.attackDamage * (kind === "metal" ? 4.8 : 3.6) + state.level * 2.4) * bossBreakDamageMultiplier());
        boss.hp = Math.max(0, boss.hp - bossDamage);
        recordRunStat("bossDamage", bossDamage);
        if (state.gameMode === "daily") state.dailyDamage += bossDamage;
        if (boss.hp <= 0) defeatBoss();
      }
    }

    state.elementSurgeKind = kind;
    state.elementSurgeTimer = Math.max(state.elementSurgeTimer || 0, 6.8 + potency * 1.15);
    state.elementSurgePulse = Math.max(state.elementSurgePulse || 0, 0.86);
    state.energy = clamp(state.energy + state.maxEnergy * (0.12 + potency * 0.025), 0, state.maxEnergy);
    state.combo += 2 + Math.floor(potency);
    state.comboTimer = Math.max(state.comboTimer, 3.45);
    recordRunStat("elementCores", 1);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((230 + state.combo * 16 + affected * 34 + cleared * 58) * state.scoreBonus * styleMultiplier());
    gainXp(50 + state.level * 5 + affected * 6);
    gainStyle(22 + affected * 2, `五行·${element.label}`, element.color);
    state.eventName = `${element.label}灵核${affected ? ` x${affected}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    showRewardToast([{ type: "elementCore", label: `${element.label}灵核`, amount: 1 }], { duration: 1550 });
    pop(p.x, p.y, element.color, 28 + Math.min(12, affected * 2));
    state.shake = Math.max(state.shake, kind === "fire" || kind === "metal" ? 7 : 4.5);
    beep(kind === "earth" ? 520 : kind === "water" ? 920 : kind === "metal" ? 1320 : kind === "fire" ? 1180 : 760, 0.08, "triangle", 0.045);
  }

  function classicEventActive(kind = state.eventKind) {
    return state.mode === "playing" && state.eventKind === kind && state.eventTimer > 0;
  }

  function classicEventLaneInfo(kind = state.eventKind) {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(80 * s, bottom - top);
    const widthScale = kind === "cleanWind" ? 0.18 : kind === "draftGate" ? 0.13 : 0.145;
    let half = clamp(playable * widthScale, 26 * s, (kind === "cleanWind" ? 54 : 46) * s);
    const margin = Math.max(hero.radiusY + half + 8 * s, 38 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * (kind === "cleanWind" ? 0.2 : 0.16), 22 * s, 38 * s);
      min = top + half + hero.radiusY * 0.58;
      max = bottom - half - hero.radiusY * 0.58;
    }
    const centerBase = min <= max ? (min + max) * 0.5 : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.5) : 0;
    const phase = (state.classicLanePhase || 0) + (kind === "goldRush" ? 0.9 : kind === "draftGate" ? 1.8 : 0);
    const pace = kind === "draftGate" ? 1.02 : kind === "goldRush" ? 0.78 : 0.58;
    const drift = Math.sin(state.time * pace + phase) * sweep
      + Math.sin(state.time * (pace * 0.52) + phase * 0.6) * sweep * 0.18;
    return {
      center: clamp(centerBase + drift, top + half, bottom - half),
      half,
      top,
      bottom,
      progress: kind === "goldRush"
        ? clamp((state.goldRushCharge || 0) / 100, 0, 1)
        : kind === "draftGate"
          ? clamp((state.draftLaneCharge || 0) / 100, 0, 1)
          : 0,
    };
  }

  function spawnClassicEventParticles(x, y, color = "#dfff7a", count = 10) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      particles.push({
        x: x + random(-28, 34) * s,
        y: y + random(-18, 18) * s,
        vx: random(-230, 90) * s,
        vy: random(-70, 70) * s,
        size: random(2.5, 8) * s,
        color: Math.random() > 0.55 ? "#fff8e8" : color,
        life: random(0.28, 0.68),
        maxLife: 0.68,
      });
    }
  }

  function triggerGoldRushLaneReward(lane) {
    const s = playScale();
    const y = clamp(lane.center + random(-lane.half * 0.42, lane.half * 0.42), playTop() + 30 * s, playBottom() - 30 * s);
    const spawned = addPickup({
      type: "bonusPaper",
      x: state.width + 46 * s,
      y,
      r: pickupRadius("bonusPaper", s, 1.25),
      strength: 1.25,
      phase: random(0, 6.28),
    }, false);
    if (!spawned) {
      state.goldRushCharge = Math.min(state.goldRushCharge || 0, 92);
      return;
    }
    state.goldRushCharge = 24;
    state.classicEventPulse = 1;
    addRoundedScore((160 + state.combo * 10) * state.scoreBonus * styleMultiplier());
    state.energy = clamp(state.energy + 10 + state.level * 0.22, 0, state.maxEnergy);
    state.combo += 1;
    state.comboTimer = Math.max(state.comboTimer, 2.8);
    recordRunStat("maxCombo", state.combo);
    gainStyle(12, "黄金纸潮", "#f5c84b");
    pop(state.width - 96 * s, y, "#f5c84b", 18);
    spawnClassicEventParticles(state.width - 96 * s, y, "#f5c84b", 12);
    state.eventName = "黄金纸潮：奖励航道";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
    beep(1040, 0.055, "triangle", 0.036);
  }

  function triggerDraftLaneBurst(lane) {
    const s = playScale();
    let softened = 0;
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || lane.center;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      if (hx < hero.x - 78 * s || hx > state.width + 110 * s) continue;
      if (Math.abs(hy - lane.center) > lane.half + maxDim * 0.5 + 20 * s) continue;
      h.slow = Math.max(h.slow || 0, 1.05);
      h.hit = Math.max(h.hit || 0, 0.14);
      softened += 1;
    }
    state.draftLaneCharge = 18;
    state.classicEventPulse = 1;
    state.draftTimer = Math.max(state.draftTimer, 4.2 + runPerkLevel("windrider") * 0.65);
    state.recoveryTimer = Math.max(state.recoveryTimer, 0.55);
    state.energy = clamp(state.energy + 14 + state.level * 0.28, 0, state.maxEnergy);
    state.combo += 1;
    state.comboTimer = Math.max(state.comboTimer, 3.0);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((170 + softened * 28 + state.combo * 10) * state.scoreBonus * styleMultiplier());
    gainStyle(16 + Math.min(10, softened * 1.4), "顺风航道", "#9de8ff");
    if (runPerkLevel("gatecrash") > 0) shockwaveFrom(hero.x + 64 * s, lane.center, 0.68 + runPerkLevel("gatecrash") * 0.12, "风道冲击");
    pop(hero.x + 70 * s, lane.center, "#9de8ff", 18 + Math.min(10, softened));
    spawnClassicEventParticles(hero.x + 70 * s, lane.center, "#9de8ff", 14);
    state.eventName = softened > 0 ? `顺风航道 x${softened}` : "顺风航道";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
    beep(1120, 0.06, "triangle", 0.038);
  }

  function mysteryLaneActive() {
    return state.mode === "playing" && state.eventKind === "mysteryRoute" && state.eventTimer > 0;
  }

  function mysteryLaneInfo() {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(80 * s, bottom - top);
    let half = clamp(playable * 0.15, 28 * s, 48 * s);
    const margin = Math.max(hero.radiusY + half + 8 * s, 40 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * 0.16, 22 * s, 38 * s);
      min = top + half + hero.radiusY * 0.58;
      max = bottom - half - hero.radiusY * 0.58;
    }
    const centerBase = min <= max ? (min + max) * 0.5 : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.5) : 0;
    const phase = state.mysteryLanePhase || 0;
    const drift = Math.sin(state.time * 0.72 + phase) * sweep
      + Math.sin(state.time * 0.36 + phase * 0.6) * sweep * 0.24;
    return {
      center: clamp(centerBase + drift, top + half, bottom - half),
      half,
      top,
      bottom,
      progress: clamp((state.mysteryLaneCharge || 0) / 100, 0, 1),
    };
  }

  function triggerMysteryLaneReward(lane) {
    const s = playScale();
    const expert = runPerkLevel("mystery");
    const strength = 1.12 + Math.min(0.48, state.level * 0.018 + expert * 0.12);
    const y = clamp(lane.center + random(-lane.half * 0.36, lane.half * 0.36), playTop() + 36 * s, playBottom() - 36 * s);
    const type = Math.random() < 0.68 + Math.min(0.18, expert * 0.05) ? "mysteryCapsule" : "focusOrb";
    const spawned = addPickup({
      type,
      x: state.width + 50 * s,
      y,
      r: pickupRadius(type, s, strength),
      strength,
      phase: random(0, 6.28),
    }, false);
    if (!spawned) {
      state.mysteryLaneCharge = Math.min(state.mysteryLaneCharge || 0, 90);
      return;
    }
    state.mysteryLaneCharge = 22;
    state.mysteryPulse = 1;
    state.energy = clamp(state.energy + 9 + state.level * 0.2, 0, state.maxEnergy);
    state.combo += 1;
    state.comboTimer = Math.max(state.comboTimer, 2.9);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((150 + state.combo * 11) * state.scoreBonus * styleMultiplier());
    gainStyle(14 + expert * 2, "奇遇航道", "#c45dff");
    spawnClassicEventParticles(state.width - 96 * s, y, "#c45dff", 12);
    pop(state.width - 96 * s, y, "#c45dff", 18);
    state.eventName = type === "mysteryCapsule" ? "奇遇航道：胶囊" : "奇遇航道：核心";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.08);
    beep(1180, 0.055, "triangle", 0.036);
  }

  function updateClassicEvents(dt) {
    updateClassicGreenWave(dt);
    state.classicEventPulse = Math.max(0, (state.classicEventPulse || 0) - dt * 0.9);
    state.mysteryPulse = Math.max(0, (state.mysteryPulse || 0) - dt * 0.9);
    if (!classicEventActive("goldRush")) {
      state.goldRushCharge = Math.max(0, (state.goldRushCharge || 0) - dt * 18);
    }
    if (!classicEventActive("draftGate")) {
      state.draftLaneCharge = Math.max(0, (state.draftLaneCharge || 0) - dt * 18);
    }
    if (!mysteryLaneActive()) {
      state.mysteryLaneCharge = Math.max(0, (state.mysteryLaneCharge || 0) - dt * 18);
    }
    if (classicEventActive("cleanWind")) {
      const lane = classicEventLaneInfo("cleanWind");
      const distance = Math.abs(hero.y - lane.center);
      const inside = distance <= lane.half + hero.radiusY * 0.28;
      state.recoveryTimer = Math.max(state.recoveryTimer, inside ? 0.78 : 0.46);
      state.health = clamp(state.health + dt * (state.maxHealth * (inside ? 0.035 : 0.022) + 1.4), 0, state.maxHealth);
      state.energy = clamp(state.energy + dt * (inside ? 4.6 : 2.8), 0, state.maxEnergy);
      state.styleTimer = Math.max(state.styleTimer, inside ? 0.45 : 0.25);
      state.classicEventPulse = Math.max(state.classicEventPulse || 0, inside ? 0.12 : 0.06);
      for (const h of hazards) {
        if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
        const hy = h.y || lane.center;
        if (h.x > hero.x - 56 * playScale() && Math.abs(hy - lane.center) < lane.half + Math.max(h.h || h.w || 0, 40 * playScale()) * 0.46) {
          h.slow = Math.max(h.slow || 0, inside ? 0.62 : 0.36);
        }
      }
      if (Math.random() < dt * (inside ? 8 : 4)) spawnClassicEventParticles(hero.x - 8 * playScale(), hero.y, "#dfff7a", 1);
    }
    if (classicEventActive("goldRush")) {
      const lane = classicEventLaneInfo("goldRush");
      const distance = Math.abs(hero.y - lane.center);
      const inside = distance <= lane.half + hero.radiusY * 0.22;
      if (inside) {
        const gain = 38 + Math.min(14, state.level * 0.72) + runPerkLevel("jackpot") * 2.4;
        state.goldRushCharge = clamp((state.goldRushCharge || 0) + dt * gain, 0, 100);
        state.energy = clamp(state.energy + dt * 1.55, 0, state.maxEnergy);
        state.styleTimer = Math.max(state.styleTimer, 0.42);
        if (Math.random() < dt * 6) spawnClassicEventParticles(hero.x - 6 * playScale(), hero.y, "#f5c84b", 1);
      } else {
        state.goldRushCharge = Math.max(0, (state.goldRushCharge || 0) - dt * (distance <= lane.half + hero.radiusY ? 5 : 12));
      }
      if ((state.goldRushCharge || 0) >= 100) triggerGoldRushLaneReward(lane);
    }
    if (classicEventActive("draftGate")) {
      const lane = classicEventLaneInfo("draftGate");
      const distance = Math.abs(hero.y - lane.center);
      const inside = distance <= lane.half + hero.radiusY * 0.24;
      if (inside) {
        const gain = 34 + Math.min(13, state.level * 0.68) + runPerkLevel("windrider") * 2 + runPerkLevel("gatecrash") * 1.2;
        state.draftLaneCharge = clamp((state.draftLaneCharge || 0) + dt * gain, 0, 100);
        state.draftTimer = Math.max(state.draftTimer, 1.15);
        state.energy = clamp(state.energy + dt * 1.9, 0, state.maxEnergy);
        state.styleTimer = Math.max(state.styleTimer, 0.44);
        state.classicEventPulse = Math.max(state.classicEventPulse || 0, 0.08);
        if (Math.random() < dt * 7) spawnClassicEventParticles(hero.x - 10 * playScale(), hero.y, "#9de8ff", 1);
      } else {
        state.draftLaneCharge = Math.max(0, (state.draftLaneCharge || 0) - dt * (distance <= lane.half + hero.radiusY ? 5 : 12));
      }
      if ((state.draftLaneCharge || 0) >= 100) triggerDraftLaneBurst(lane);
    }
    if (mysteryLaneActive()) {
      const lane = mysteryLaneInfo();
      const distance = Math.abs(hero.y - lane.center);
      const inside = distance <= lane.half + hero.radiusY * 0.24;
      if (inside) {
        const gain = 33 + Math.min(12, state.level * 0.62) + runPerkLevel("mystery") * 2.6;
        state.mysteryLaneCharge = clamp((state.mysteryLaneCharge || 0) + dt * gain, 0, 100);
        state.energy = clamp(state.energy + dt * 1.6, 0, state.maxEnergy);
        state.styleTimer = Math.max(state.styleTimer, 0.44);
        state.mysteryPulse = Math.max(state.mysteryPulse || 0, 0.1);
        if (Math.random() < dt * 6) spawnClassicEventParticles(hero.x - 8 * playScale(), hero.y, "#c45dff", 1);
      } else {
        state.mysteryLaneCharge = Math.max(0, (state.mysteryLaneCharge || 0) - dt * (distance <= lane.half + hero.radiusY ? 5 : 12));
      }
      if ((state.mysteryLaneCharge || 0) >= 100) triggerMysteryLaneReward(lane);
    }
  }

  function adventureCurrentActive() {
    return state.mode === "playing" && state.eventKind === "adventureCurrent" && state.eventTimer > 0;
  }

  function adventureCurrentLaneInfo() {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(80 * s, bottom - top);
    let half = clamp(playable * 0.145, 30 * s, 52 * s);
    const margin = Math.max(hero.radiusY + half + 9 * s, 42 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * 0.17, 24 * s, 40 * s);
      min = top + half + hero.radiusY * 0.62;
      max = bottom - half - hero.radiusY * 0.62;
    }
    const centerBase = min <= max ? (min + max) * 0.5 : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.5) : 0;
    const phase = state.adventureLanePhase || 0;
    const drift = Math.sin(state.time * 0.86 + phase) * sweep
      + Math.sin(state.time * 1.32 + phase * 0.58) * sweep * 0.2;
    return {
      center: clamp(centerBase + drift, top + half, bottom - half),
      half,
      top,
      bottom,
      progress: clamp((state.adventureCurrentCharge || 0) / 100, 0, 1),
    };
  }

  function spawnAdventureCurrentParticles(x, y, color = "#5bded4", count = 18) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      particles.push({
        x: x + random(-34, 44) * s,
        y: y + random(-18, 18) * s,
        vx: random(-250, 120) * s,
        vy: random(-86, 86) * s,
        size: random(3, 9) * s,
        color: Math.random() > 0.52 ? "#fff8e8" : Math.random() > 0.5 ? "#dfff7a" : color,
        life: random(0.34, 0.78),
        maxLife: 0.78,
      });
    }
  }

  function triggerAdventureCurrentSurge(originX = hero.x + 76 * playScale(), originY = null, options = {}) {
    const s = playScale();
    const lane = adventureCurrentLaneInfo();
    const surgeY = originY === null ? lane.center : originY;
    let cleared = 0;
    let softened = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || lane.center;
      if (hx < hero.x - 100 * s || hx > state.width + 150 * s) continue;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      const laneReach = lane.half + maxDim * 0.46 + 30 * s;
      const inCurrent = Math.abs(hy - lane.center) <= laneReach || Math.hypot(hx - originX, hy - surgeY) < (126 + (options.shell ? 28 : 0)) * s + maxDim * 0.32;
      if (!inCurrent) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.2);
      h.slow = Math.max(h.slow || 0, 1.18 + (options.shell ? 0.22 : 0));
      h.vy = (h.vy || 0) * 0.35 + (lane.center - hy) * 0.26;
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (2.35 + state.level * 0.052) + state.level * 1.05;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else {
        hazards.splice(i, 1);
        pop(hx, hy, "#5bded4", 8);
      }
      cleared += 1;
    }

    let bossDamage = 0;
    if (boss) {
      const laneFactor = Math.abs(boss.y - lane.center) < lane.half + boss.h * 0.44 ? 1 : 0.7;
      bossDamage = Math.round((state.attackDamage * (3.55 + state.level * 0.05) + state.level * 3.2) * laneFactor * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.22);
      applyBossControl("root", 0.28 + (options.shell ? 0.08 : 0));
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      addBossBreakPressure(bossBreakGain("glance") * (0.3 + Math.min(0.18, state.level * 0.005)), boss.x - boss.w * 0.18, boss.y);
      if (boss && boss.hp <= 0) defeatBoss();
    }

    state.adventureCurrentCharge = options.shell ? 24 : 16;
    state.adventurePulse = 1;
    state.adventureBoostTimer = Math.max(state.adventureBoostTimer || 0, options.shell ? 2.8 : 3.5);
    state.draftTimer = Math.max(state.draftTimer, options.shell ? 1.8 : 2.4);
    state.energy = clamp(state.energy + state.maxEnergy * (options.shell ? 0.08 : 0.12), 0, state.maxEnergy);
    state.combo += 2 + Math.min(4, cleared);
    state.comboTimer = Math.max(state.comboTimer, 3.25);
    recordRunStat("adventureSurges", 1);
    recordRunStat("maxCombo", state.combo);
    addAdventureRouteProgress(20 + softened * 1.6 + cleared * 3, {
      intel: options.shell || bossDamage > 0 ? 1 : 0,
      label: bossDamage > 0 ? "云海破阵" : "冲流测绘",
      major: true,
    });
    addRoundedScore((240 + cleared * 70 + softened * 24 + bossDamage * 0.3) * state.scoreBonus * styleMultiplier());
    gainXp(54 + state.level * 5 + softened * 6);
    gainStyle(24 + Math.min(16, softened * 2.5), bossDamage > 0 ? "云海破阵" : "冲流爆发", "#5bded4");
    state.eventName = bossDamage > 0 ? "云海破阵" : `冲流爆发${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.28);
    showRewardToast([{ type: "adventureSurge", label: "冲流爆发", amount: 1 }], { duration: 1450 });
    pop(originX, surgeY, "#5bded4", 25 + Math.min(14, softened * 2));
    spawnAdventureCurrentParticles(originX, surgeY, "#5bded4", 20 + Math.min(12, softened * 2));
    state.shake = Math.max(state.shake, 5 + Math.min(2.6, softened * 0.28));
    beep(940, 0.065, "triangle", 0.04);
    setTimeout(() => beep(1220, 0.05, "sine", 0.032), 66);
  }

  function updateAdventureCurrent(dt) {
    state.adventurePulse = Math.max(0, (state.adventurePulse || 0) - dt * 0.9);
    state.adventureBoostTimer = Math.max(0, (state.adventureBoostTimer || 0) - dt);
    if (!adventureCurrentActive()) {
      state.adventureCurrentCharge = Math.max(0, (state.adventureCurrentCharge || 0) - dt * (state.adventureBoostTimer > 0 ? 7 : 16));
      return;
    }
    const lane = adventureCurrentLaneInfo();
    const distance = Math.abs(hero.y - lane.center);
    const inside = distance <= lane.half + hero.radiusY * 0.23;
    const near = distance <= lane.half + hero.radiusY;
    if (inside) {
      const gain = 34 + Math.min(13, state.level * 0.72) + runPerkLevel("windrider") * 1.6 + (boss ? 5 : 0);
      state.adventureCurrentCharge = clamp((state.adventureCurrentCharge || 0) + dt * gain, 0, 100);
      state.energy = clamp(state.energy + dt * 2.35, 0, state.maxEnergy);
      state.styleTimer = Math.max(state.styleTimer, 0.46);
      state.adventureBoostTimer = Math.max(state.adventureBoostTimer || 0, 0.55);
      state.adventurePulse = Math.max(state.adventurePulse || 0, 0.1);
      addAdventureRouteProgress(dt * (3.2 + Math.min(2.4, state.level * 0.08)), { silent: true });
      if (Math.random() < dt * 7) spawnAdventureCurrentParticles(hero.x - 10 * playScale(), hero.y, "#5bded4", 1);
    } else {
      state.adventureCurrentCharge = Math.max(0, (state.adventureCurrentCharge || 0) - dt * (near ? 5 : 12));
    }
    if ((state.adventureCurrentCharge || 0) >= 100) triggerAdventureCurrentSurge(hero.x + 76 * playScale(), lane.center);
  }

  function triggerCurrentShell(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const radius = (124 + potency * 30) * s;
    let softened = 0;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || p.y;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      if (Math.hypot(hx - p.x, hy - p.y) > radius + maxDim * 0.38) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.16);
      h.slow = Math.max(h.slow || 0, 0.88 + potency * 0.16);
      h.vy = (h.vy || 0) * 0.5 + (hero.y - hy) * 0.12;
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (1.55 + potency * 0.2) + state.level * 0.68;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else if (cleared < 3) {
        hazards.splice(i, 1);
        pop(hx, hy, "#5bded4", 7);
      } else {
        continue;
      }
      cleared += 1;
    }

    if (boss) {
      boss.hit = Math.max(boss.hit || 0, 0.16);
      applyBossControl("root", 0.18 + potency * 0.035);
      addBossBreakPressure(bossBreakGain("glance") * (0.18 + potency * 0.035), boss.x - boss.w * 0.18, boss.y);
    }

    recordRunStat("currentShells", 1);
    addAdventureRouteProgress(18 + potency * 6 + softened * 0.7, {
      label: "顺流测绘",
      major: true,
    });
    state.adventureCurrentCharge = clamp((state.adventureCurrentCharge || 0) + 38 + potency * 12, 0, 100);
    state.adventurePulse = Math.max(state.adventurePulse || 0, 0.78);
    state.adventureBoostTimer = Math.max(state.adventureBoostTimer || 0, 3.0 + potency * 0.42);
    state.draftTimer = Math.max(state.draftTimer, 1.2 + potency * 0.22);
    state.energy = clamp(state.energy + state.maxEnergy * (0.12 + potency * 0.025), 0, state.maxEnergy);
    state.combo += 2;
    state.comboTimer = Math.max(state.comboTimer, 3.1);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((200 + cleared * 58 + softened * 20 + state.combo * 9) * state.scoreBonus * styleMultiplier());
    gainXp(45 + state.level * 4 + softened * 5);
    gainStyle(18 + Math.min(14, softened * 2), "顺流贝壳", "#5bded4");
    state.eventName = `顺流贝壳${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.18);
    showRewardToast([{ type: "currentShell", label: "顺流贝壳", amount: 1 }], { duration: 1400 });
    pop(p.x, p.y, "#5bded4", 21 + Math.min(12, softened * 2));
    spawnAdventureCurrentParticles(p.x, p.y, "#5bded4", 16 + Math.min(10, softened * 2));
    if ((state.adventureCurrentCharge || 0) >= 100) triggerAdventureCurrentSurge(p.x, p.y, { shell: true });
    beep(900, 0.06, "triangle", 0.04);
  }

  function starTrailActive() {
    return state.mode === "playing" && state.eventKind === "starTrail" && state.eventTimer > 0;
  }

  function starTrailLaneInfo() {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(80 * s, bottom - top);
    let half = clamp(playable * 0.14, 30 * s, 48 * s);
    const margin = Math.max(hero.radiusY + half + 8 * s, 42 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * 0.18, 24 * s, 38 * s);
      min = top + half + hero.radiusY * 0.65;
      max = bottom - half - hero.radiusY * 0.65;
    }
    const centerBase = min <= max ? (min + max) * 0.5 : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.5) : 0;
    const phase = state.starTrailLanePhase || 0;
    const drift = Math.sin(state.time * 1.08 + phase) * sweep
      + Math.sin(state.time * 0.47 + phase * 0.7) * sweep * 0.22;
    const center = clamp(centerBase + drift, top + half, bottom - half);
    return {
      center,
      half,
      top,
      bottom,
      progress: clamp((state.starTrailCharge || 0) / 100, 0, 1),
    };
  }

  function spawnStarTrailParticles(x, y, color = "#9de8ff", count = 18) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      particles.push({
        x: x + random(-24, 42) * s,
        y: y + random(-20, 20) * s,
        vx: random(-240, 90) * s,
        vy: random(-80, 80) * s,
        size: random(3, 10) * s,
        color: Math.random() > 0.5 ? color : "#fff8e8",
        life: random(0.34, 0.78),
        maxLife: 0.78,
      });
    }
  }

  function triggerStarTrailBurst() {
    const s = playScale();
    const lane = starTrailLaneInfo();
    let cleared = 0;
    let softened = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || lane.center;
      if (hx < hero.x - 92 * s || hx > state.width + 120 * s) continue;
      const laneReach = lane.half + Math.max(h.h || h.w || 42 * s, 42 * s) * 0.48 + 28 * s;
      if (Math.abs(hy - lane.center) > laneReach) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.2);
      h.slow = Math.max(h.slow || 0, 1.35);
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (2.6 + state.level * 0.055) + state.level * 1.15;
        h.vy = (h.vy || 0) * 0.35 + (lane.center - hy) * 0.28;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
        cleared += 1;
      } else {
        hazards.splice(i, 1);
        cleared += 1;
        pop(hx, hy, h.color || "#9de8ff", 8);
      }
    }

    let bossDamage = 0;
    if (boss) {
      const laneFactor = Math.abs(boss.y - lane.center) < lane.half + boss.h * 0.42 ? 1 : 0.68;
      bossDamage = Math.round((state.attackDamage * (4.5 + state.level * 0.06) + state.level * 4.2) * laneFactor * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.24);
      applyBossControl("stun", 0.42);
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      addBossBreakPressure(bossBreakGain("glance") * (0.38 + Math.min(0.22, state.level * 0.006)), boss.x, boss.y);
      if (boss && boss.hp <= 0) defeatBoss();
    }

    state.starTrailCharge = 16;
    state.starTrailPulse = 1;
    state.energy = clamp(state.energy + state.maxEnergy * 0.1, 0, state.maxEnergy);
    state.combo += 2 + Math.min(4, cleared);
    state.comboTimer = Math.max(state.comboTimer, 3.4);
    recordRunStat("starTrailBursts", 1);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((260 + cleared * 78 + softened * 26 + bossDamage * 0.34) * state.scoreBonus * styleMultiplier());
    gainXp(58 + state.level * 5 + softened * 7);
    gainStyle(28 + Math.min(18, softened * 3), bossDamage > 0 ? "星轨破阵" : "星辉爆发", "#9de8ff");
    state.eventName = bossDamage > 0 ? "星轨破阵" : `星辉爆发${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    showRewardToast([{ type: "starTrail", label: "星辉爆发", amount: 1 }], { duration: 1450 });
    pop(hero.x + 64 * s, lane.center, "#9de8ff", 28 + Math.min(14, softened * 2));
    spawnStarTrailParticles(hero.x + 92 * s, lane.center, "#9de8ff", 22 + Math.min(12, softened * 2));
    state.shake = Math.max(state.shake, 5.5 + Math.min(3, softened * 0.35));
    beep(1040, 0.075, "triangle", 0.045);
    setTimeout(() => beep(1460, 0.055, "sine", 0.035), 70);
  }

  function updateStarTrail(dt) {
    state.starTrailPulse = Math.max(0, (state.starTrailPulse || 0) - dt * 0.92);
    if (!starTrailActive()) {
      state.starTrailCharge = Math.max(0, (state.starTrailCharge || 0) - dt * 18);
      return;
    }
    const lane = starTrailLaneInfo();
    const distance = Math.abs(hero.y - lane.center);
    const inside = distance <= lane.half + hero.radiusY * 0.24;
    const near = distance <= lane.half + hero.radiusY;
    if (inside) {
      const focusGain = 34 + Math.min(12, state.level * 0.75) + (boss ? 7 : 0) + runPerkLevel("windrider") * 1.4;
      state.starTrailCharge = clamp((state.starTrailCharge || 0) + dt * focusGain, 0, 100);
      state.energy = clamp(state.energy + dt * 2.6, 0, state.maxEnergy);
      state.styleTimer = Math.max(state.styleTimer, 0.45);
      state.starTrailPulse = Math.max(state.starTrailPulse || 0, 0.08);
      if (Math.random() < dt * 8) spawnStarTrailParticles(hero.x - 8 * playScale(), hero.y, "#9de8ff", 1);
    } else {
      state.starTrailCharge = Math.max(0, (state.starTrailCharge || 0) - dt * (near ? 5 : 12));
    }
    if ((state.starTrailCharge || 0) >= 100) triggerStarTrailBurst();
  }

  function mirrorCurrentActive() {
    return state.mode === "playing" && state.eventKind === "mirrorCurrent" && state.eventTimer > 0;
  }

  function mirrorLaneInfo() {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(80 * s, bottom - top);
    let half = clamp(playable * 0.12, 28 * s, 44 * s);
    const margin = Math.max(hero.radiusY + half + 10 * s, 42 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * 0.17, 24 * s, 38 * s);
      min = top + half + hero.radiusY * 0.62;
      max = bottom - half - hero.radiusY * 0.62;
    }
    const centerBase = min <= max ? (min + max) * 0.5 : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.5) : 0;
    const phase = state.mirrorLanePhase || 0;
    const drift = Math.sin(state.time * 0.92 + phase) * sweep
      + Math.sin(state.time * 1.36 + phase * 0.45) * sweep * 0.18;
    const center = clamp(centerBase + drift, top + half, bottom - half);
    return {
      center,
      half,
      top,
      bottom,
      progress: clamp((state.mirrorCharge || 0) / 100, 0, 1),
    };
  }

  function spawnMirrorParticles(x, y, color = "#8ff7ff", count = 20) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      const bright = Math.random() > 0.5 ? "#fff8e8" : Math.random() > 0.45 ? "#dfff7a" : color;
      particles.push({
        x: x + random(-34, 48) * s,
        y: y + random(-20, 20) * s,
        vx: random(-260, 150) * s,
        vy: random(-92, 92) * s,
        size: random(3, 10) * s,
        color: bright,
        life: random(0.34, 0.84),
        maxLife: 0.84,
      });
    }
  }

  function triggerMirrorBurst(originX = hero.x + 68 * playScale(), originY = null, options = {}) {
    const s = playScale();
    const lane = mirrorLaneInfo();
    const burstY = originY === null ? lane.center : originY;
    let cleared = 0;
    let softened = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || lane.center;
      if (hx < hero.x - 98 * s || hx > state.width + 150 * s) continue;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      const laneReach = lane.half + maxDim * 0.5 + 30 * s;
      const reflected = Math.abs(hy - lane.center) <= laneReach || Math.hypot(hx - originX, hy - burstY) < (128 + (options.guard ? 34 : 0)) * s + maxDim * 0.35;
      if (!reflected) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.22);
      h.slow = Math.max(h.slow || 0, 1.18 + (options.guard ? 0.22 : 0));
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (2.35 + state.level * 0.05) + state.level * 1.05;
        h.vy = (h.vy || 0) * 0.28 + (lane.center - hy) * 0.34;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else {
        hazards.splice(i, 1);
        pop(hx, hy, "#8ff7ff", 8);
      }
      cleared += 1;
    }

    let bossDamage = 0;
    if (boss) {
      const laneFactor = Math.abs(boss.y - lane.center) < lane.half + boss.h * 0.46 ? 1 : 0.72;
      const guardFactor = options.guard ? 0.78 : 1;
      bossDamage = Math.round((state.attackDamage * (3.9 + state.level * 0.052) + state.level * 3.4) * laneFactor * guardFactor * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.24);
      boss.controlFlash = Math.max(boss.controlFlash || 0, 0.18);
      applyBossControl("root", 0.34 + (options.guard ? 0.08 : 0));
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      addBossBreakPressure(bossBreakGain("glance") * (0.34 + Math.min(0.2, state.level * 0.005)), boss.x - boss.w * 0.18, boss.y);
      if (boss && boss.hp <= 0) defeatBoss();
    }

    state.mirrorCharge = options.guard ? 28 : 18;
    state.mirrorPulse = 1;
    state.mirrorGuardTimer = Math.max(state.mirrorGuardTimer || 0, options.guard ? 1.4 : 2.4);
    state.energy = clamp(state.energy + state.maxEnergy * (options.guard ? 0.08 : 0.12), 0, state.maxEnergy);
    state.combo += 2 + Math.min(4, cleared);
    state.comboTimer = Math.max(state.comboTimer, 3.25);
    recordRunStat("mirrorBursts", 1);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((245 + cleared * 72 + softened * 25 + bossDamage * 0.32) * state.scoreBonus * styleMultiplier());
    gainXp(54 + state.level * 5 + softened * 6);
    gainStyle(26 + Math.min(18, softened * 2.6), bossDamage > 0 ? "镜流破阵" : "折返脉冲", "#8ff7ff");
    state.eventName = bossDamage > 0 ? "镜流破阵" : `折返脉冲${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    showRewardToast([{ type: "mirrorBurst", label: "折返脉冲", amount: 1 }], { duration: 1450 });
    pop(originX, burstY, "#8ff7ff", 28 + Math.min(14, softened * 2));
    spawnMirrorParticles(originX, burstY, "#8ff7ff", 22 + Math.min(12, softened * 2));
    state.shake = Math.max(state.shake, 5.4 + Math.min(2.8, softened * 0.28));
    beep(880, 0.07, "triangle", 0.043);
    setTimeout(() => beep(1280, 0.055, "sine", 0.034), 68);
  }

  function updateMirrorCurrent(dt) {
    state.mirrorPulse = Math.max(0, (state.mirrorPulse || 0) - dt * 0.86);
    state.mirrorGuardTimer = Math.max(0, (state.mirrorGuardTimer || 0) - dt);
    if (!mirrorCurrentActive()) {
      state.mirrorCharge = Math.max(0, (state.mirrorCharge || 0) - dt * (state.mirrorGuardTimer > 0 ? 7 : 16));
      return;
    }
    const lane = mirrorLaneInfo();
    const distance = Math.abs(hero.y - lane.center);
    const inside = distance <= lane.half + hero.radiusY * 0.2;
    const near = distance <= lane.half + hero.radiusY;
    if (inside) {
      const gain = 30 + Math.min(13, state.level * 0.7) + (boss ? 8 : 0) + runPerkLevel("timewarp") * 1.2;
      state.mirrorCharge = clamp((state.mirrorCharge || 0) + dt * gain, 0, 100);
      state.energy = clamp(state.energy + dt * 2.2, 0, state.maxEnergy);
      state.styleTimer = Math.max(state.styleTimer, 0.48);
      state.mirrorGuardTimer = Math.max(state.mirrorGuardTimer || 0, 0.65);
      state.mirrorPulse = Math.max(state.mirrorPulse || 0, 0.1);
      if (Math.random() < dt * 7) spawnMirrorParticles(hero.x - 10 * playScale(), hero.y, "#8ff7ff", 1);
    } else {
      state.mirrorCharge = Math.max(0, (state.mirrorCharge || 0) - dt * (near ? 4.5 : 11));
    }
    if ((state.mirrorCharge || 0) >= 100) triggerMirrorBurst(hero.x + 72 * playScale(), lane.center);
  }

  function triggerMirrorShard(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const radius = (132 + potency * 30) * s;
    let softened = 0;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || p.y;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      if (Math.hypot(hx - p.x, hy - p.y) > radius + maxDim * 0.38) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.16);
      h.slow = Math.max(h.slow || 0, 0.9 + potency * 0.18);
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (1.7 + potency * 0.22) + state.level * 0.74;
        h.vy = (h.vy || 0) * 0.4 + (hero.y - hy) * 0.14;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else if (cleared < 3) {
        hazards.splice(i, 1);
        pop(hx, hy, "#8ff7ff", 7);
      } else {
        continue;
      }
      cleared += 1;
    }

    if (boss) {
      boss.hit = Math.max(boss.hit || 0, 0.18);
      applyBossControl("root", 0.22 + potency * 0.04);
      addBossBreakPressure(bossBreakGain("glance") * (0.2 + potency * 0.04), boss.x - boss.w * 0.18, boss.y);
    }

    recordRunStat("mirrorShards", 1);
    state.mirrorCharge = clamp((state.mirrorCharge || 0) + 34 + potency * 12, 0, 100);
    state.mirrorPulse = Math.max(state.mirrorPulse || 0, 0.78);
    state.mirrorGuardTimer = Math.max(state.mirrorGuardTimer || 0, 3.1 + potency * 0.5);
    state.shieldTimer = Math.max(state.shieldTimer, 0.8 + potency * 0.22);
    state.energy = clamp(state.energy + state.maxEnergy * (0.14 + potency * 0.025), 0, state.maxEnergy);
    state.combo += 2;
    state.comboTimer = Math.max(state.comboTimer, 3.15);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((210 + cleared * 62 + softened * 22 + state.combo * 10) * state.scoreBonus * styleMultiplier());
    gainXp(48 + state.level * 4 + softened * 5);
    gainStyle(20 + Math.min(14, softened * 2), "镜流碎片", "#8ff7ff");
    state.eventName = `镜流碎片${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.22);
    showRewardToast([{ type: "mirrorShard", label: "镜流碎片", amount: 1 }], { duration: 1400 });
    pop(p.x, p.y, "#8ff7ff", 22 + Math.min(12, softened * 2));
    spawnMirrorParticles(p.x, p.y, "#8ff7ff", 18 + Math.min(10, softened * 2));
    if ((state.mirrorCharge || 0) >= 100) triggerMirrorBurst(p.x, p.y);
    beep(980, 0.065, "triangle", 0.042);
  }

  function auroraForgeActive() {
    return state.mode === "playing" && state.eventKind === "auroraForge" && state.eventTimer > 0;
  }

  function forgeLaneInfo() {
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(80 * s, bottom - top);
    let half = clamp(playable * 0.135, 30 * s, 48 * s);
    const margin = Math.max(hero.radiusY + half + 10 * s, 44 * s);
    let min = top + margin;
    let max = bottom - margin;
    if (min > max) {
      half = clamp(playable * 0.18, 25 * s, 39 * s);
      min = top + half + hero.radiusY * 0.62;
      max = bottom - half - hero.radiusY * 0.62;
    }
    const centerBase = min <= max ? (min + max) * 0.5 : (top + bottom) * 0.5;
    const sweep = min <= max ? Math.max(0, (max - min) * 0.5) : 0;
    const phase = state.forgeLanePhase || 0;
    const drift = Math.sin(state.time * 0.84 + phase) * sweep
      + Math.sin(state.time * 1.58 + phase * 0.5) * sweep * 0.2;
    const center = clamp(centerBase + drift, top + half, bottom - half);
    return {
      center,
      half,
      top,
      bottom,
      progress: clamp((state.forgeHeat || 0) / 100, 0, 1),
    };
  }

  function spawnForgeParticles(x, y, color = "#ffb75a", count = 22) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      const bright = Math.random() > 0.55 ? "#fff8e8" : Math.random() > 0.48 ? "#54d0ff" : color;
      particles.push({
        x: x + random(-34, 54) * s,
        y: y + random(-22, 22) * s,
        vx: random(-250, 130) * s,
        vy: random(-110, 90) * s,
        size: random(3, 10) * s,
        color: bright,
        life: random(0.34, 0.86),
        maxLife: 0.86,
      });
    }
  }

  function triggerForgeWave(originX = hero.x + 78 * playScale(), originY = null, options = {}) {
    const s = playScale();
    const lane = forgeLaneInfo();
    const waveY = originY === null ? lane.center : originY;
    let cleared = 0;
    let softened = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || lane.center;
      if (hx < hero.x - 108 * s || hx > state.width + 160 * s) continue;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      const laneReach = lane.half + maxDim * 0.48 + 34 * s;
      const inHeat = Math.abs(hy - lane.center) <= laneReach || Math.hypot(hx - originX, hy - waveY) < (136 + (options.sigil ? 28 : 0)) * s + maxDim * 0.34;
      if (!inHeat) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.24);
      h.slow = Math.max(h.slow || 0, 1.24 + (options.sigil ? 0.18 : 0));
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (2.75 + state.level * 0.055) + state.level * 1.2;
        h.vy = (h.vy || 0) * 0.32 + (lane.center - hy) * 0.24;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else {
        hazards.splice(i, 1);
        pop(hx, hy, "#ffb75a", 8);
      }
      cleared += 1;
    }

    let bossDamage = 0;
    if (boss) {
      const laneFactor = Math.abs(boss.y - lane.center) < lane.half + boss.h * 0.44 ? 1 : 0.7;
      const sigilFactor = options.sigil ? 0.82 : 1;
      bossDamage = Math.round((state.attackDamage * (4.15 + state.level * 0.058) + state.level * 3.8) * laneFactor * sigilFactor * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.24);
      boss.weakDuration = Math.max(boss.weakDuration || 0, 0.9);
      boss.controlFlash = Math.max(boss.controlFlash || 0, 0.2);
      applyBossControl("paralyze", 0.32 + (options.sigil ? 0.06 : 0));
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      addBossBreakPressure(bossBreakGain("glance") * (0.36 + Math.min(0.22, state.level * 0.005)), boss.x - boss.w * 0.18, boss.y);
      if (boss && boss.hp <= 0) defeatBoss();
    }

    state.forgeHeat = options.sigil ? 26 : 18;
    state.forgePulse = 1;
    state.forgeTempoTimer = Math.max(state.forgeTempoTimer || 0, options.sigil ? 2.6 : 3.6);
    state.energy = clamp(state.energy + state.maxEnergy * (options.sigil ? 0.08 : 0.12), 0, state.maxEnergy);
    state.shieldTimer = Math.max(state.shieldTimer, options.sigil ? 0.55 : 0.85);
    state.combo += 2 + Math.min(4, cleared);
    state.comboTimer = Math.max(state.comboTimer, 3.25);
    recordRunStat("forgeWaves", 1);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((265 + cleared * 76 + softened * 28 + bossDamage * 0.34) * state.scoreBonus * styleMultiplier());
    gainXp(58 + state.level * 5 + softened * 6);
    gainStyle(28 + Math.min(18, softened * 2.6), bossDamage > 0 ? "极光破甲" : "铸炉波", "#ffb75a");
    state.eventName = bossDamage > 0 ? "极光破甲" : `铸炉波${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    showRewardToast([{ type: "forgeWave", label: "铸炉波", amount: 1 }], { duration: 1450 });
    pop(originX, waveY, "#ffb75a", 28 + Math.min(14, softened * 2));
    spawnForgeParticles(originX, waveY, "#ffb75a", 22 + Math.min(12, softened * 2));
    state.shake = Math.max(state.shake, 5.6 + Math.min(3, softened * 0.3));
    beep(760, 0.07, "triangle", 0.044);
    setTimeout(() => beep(1180, 0.055, "sine", 0.034), 68);
  }

  function updateAuroraForge(dt) {
    state.forgePulse = Math.max(0, (state.forgePulse || 0) - dt * 0.88);
    state.forgeTempoTimer = Math.max(0, (state.forgeTempoTimer || 0) - dt);
    if (!auroraForgeActive()) {
      state.forgeHeat = Math.max(0, (state.forgeHeat || 0) - dt * (state.forgeTempoTimer > 0 ? 7 : 16));
      return;
    }
    const lane = forgeLaneInfo();
    const distance = Math.abs(hero.y - lane.center);
    const inside = distance <= lane.half + hero.radiusY * 0.22;
    const near = distance <= lane.half + hero.radiusY;
    if (inside) {
      const gain = 31 + Math.min(14, state.level * 0.72) + (boss ? 9 : 0) + runPerkLevel("rapid") * 1.15;
      state.forgeHeat = clamp((state.forgeHeat || 0) + dt * gain, 0, 100);
      state.energy = clamp(state.energy + dt * 2.25, 0, state.maxEnergy);
      state.styleTimer = Math.max(state.styleTimer, 0.48);
      state.forgeTempoTimer = Math.max(state.forgeTempoTimer || 0, 0.6);
      state.forgePulse = Math.max(state.forgePulse || 0, 0.1);
      if (Math.random() < dt * 7.5) spawnForgeParticles(hero.x - 10 * playScale(), hero.y, "#ffb75a", 1);
    } else {
      state.forgeHeat = Math.max(0, (state.forgeHeat || 0) - dt * (near ? 4.8 : 11.5));
    }
    if ((state.forgeHeat || 0) >= 100) triggerForgeWave(hero.x + 78 * playScale(), lane.center);
  }

  function triggerForgeSigil(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const radius = (136 + potency * 32) * s;
    let softened = 0;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || p.y;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      if (Math.hypot(hx - p.x, hy - p.y) > radius + maxDim * 0.4) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.18);
      h.slow = Math.max(h.slow || 0, 0.92 + potency * 0.2);
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (1.85 + potency * 0.24) + state.level * 0.82;
        h.vy = (h.vy || 0) * 0.38 + (hero.y - hy) * 0.12;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else if (cleared < 4) {
        hazards.splice(i, 1);
        pop(hx, hy, "#ffb75a", 7);
      } else {
        continue;
      }
      cleared += 1;
    }

    let bossDamage = 0;
    if (boss) {
      bossDamage = Math.round((state.attackDamage * (1.9 + potency * 0.24) + state.level * 1.35) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.18);
      applyBossControl("paralyze", 0.2 + potency * 0.04);
      addBossBreakPressure(bossBreakGain("glance") * (0.22 + potency * 0.045), boss.x - boss.w * 0.18, boss.y);
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      if (boss.hp <= 0) defeatBoss();
    }

    recordRunStat("forgeSigils", 1);
    state.forgeHeat = clamp((state.forgeHeat || 0) + 36 + potency * 13, 0, 100);
    state.forgePulse = Math.max(state.forgePulse || 0, 0.8);
    state.forgeTempoTimer = Math.max(state.forgeTempoTimer || 0, 4.0 + potency * 0.55);
    state.energy = clamp(state.energy + state.maxEnergy * (0.13 + potency * 0.03), 0, state.maxEnergy);
    state.shieldTimer = Math.max(state.shieldTimer, 0.9 + potency * 0.24);
    state.ultimateCooldown = Math.max(0, state.ultimateCooldown - (0.8 + potency * 0.22));
    state.combo += 2;
    state.comboTimer = Math.max(state.comboTimer, 3.15);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((220 + cleared * 64 + softened * 24 + bossDamage * 0.32 + state.combo * 10) * state.scoreBonus * styleMultiplier());
    gainXp(50 + state.level * 4 + softened * 5);
    gainStyle(22 + Math.min(15, softened * 2), "铸炉符印", "#ffb75a");
    state.eventName = `铸炉符印${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.24);
    showRewardToast([{ type: "forgeSigil", label: "铸炉符印", amount: 1 }], { duration: 1450 });
    pop(p.x, p.y, "#ffb75a", 23 + Math.min(12, softened * 2));
    spawnForgeParticles(p.x, p.y, "#ffb75a", 18 + Math.min(10, softened * 2));
    if ((state.forgeHeat || 0) >= 100) triggerForgeWave(p.x, p.y, { sigil: true });
    beep(820, 0.065, "triangle", 0.042);
  }

  function spawnPurificationParticles(x, y, color = "#5bded4", count = 22) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      const bright = Math.random() > 0.52 ? "#fff8e8" : Math.random() > 0.48 ? "#fff1a6" : color;
      particles.push({
        x: x + random(-28, 44) * s,
        y: y + random(-22, 22) * s,
        vx: random(-210, 120) * s,
        vy: random(-120, 72) * s,
        size: random(3, 9) * s,
        color: bright,
        life: random(0.38, 0.9),
        maxLife: 0.9,
      });
    }
  }

  function triggerPurificationCore(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const radius = (152 + potency * 38) * s;
    const laneReach = (112 + potency * 22) * s;
    let cleared = 0;
    let softened = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || p.y;
      const maxDim = Math.max(h.w || 0, h.h || 0, 42 * s);
      const dist = Math.hypot(hx - p.x, hy - p.y);
      const forwardWash = hx > hero.x - 82 * s && hx < state.width + 120 * s && Math.abs(hy - hero.y) < laneReach + maxDim * 0.32;
      if (dist > radius + maxDim * 0.42 && !forwardWash) continue;
      softened += 1;
      h.hit = Math.max(h.hit || 0, 0.18);
      h.slow = Math.max(h.slow || 0, 1.08 + potency * 0.22);
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (2.25 + potency * 0.34) + state.level * 0.92;
        h.vy = (h.vy || 0) * 0.42 + (hero.y - hy) * 0.16;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else {
        hazards.splice(i, 1);
        pop(hx, hy, "#5bded4", 8);
      }
      cleared += 1;
    }

    let bossDamage = 0;
    if (boss) {
      bossDamage = Math.round((state.attackDamage * (3.1 + potency * 0.46) + state.level * 2.7) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      boss.hit = Math.max(boss.hit || 0, 0.22);
      boss.weakDuration = Math.max(boss.weakDuration || 0, 1.15 + potency * 0.18);
      boss.controlFlash = Math.max(boss.controlFlash || 0, 0.18);
      applyBossControl("paralyze", 0.28 + potency * 0.04);
      addBossBreakPressure(bossBreakGain("glance") * (0.32 + potency * 0.05), boss.x - boss.w * 0.18, boss.y);
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      if (boss.hp <= 0) defeatBoss();
    }

    recordRunStat("purificationCores", 1);
    state.purificationPulse = Math.max(state.purificationPulse || 0, 1);
    state.energy = clamp(state.energy + state.maxEnergy * (0.2 + potency * 0.04), 0, state.maxEnergy);
    state.health = clamp(state.health + state.maxHealth * (0.07 + potency * 0.018), 0, state.maxHealth);
    state.shieldTimer = Math.max(state.shieldTimer, 1.4 + potency * 0.38);
    state.recoveryTimer = Math.max(state.recoveryTimer, 1.05 + potency * 0.22);
    state.specialTimer = Math.max(state.specialTimer, 2.6 + potency * 0.42);
    state.ultimateCooldown = Math.max(0, state.ultimateCooldown - (1.45 + potency * 0.36));
    state.magnetTimer = Math.max(state.magnetTimer, 2.6 + potency * 0.42);
    state.combo += 2 + Math.min(4, cleared);
    state.comboTimer = Math.max(state.comboTimer, 3.35);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((245 + cleared * 68 + softened * 24 + bossDamage * 0.34) * state.scoreBonus * styleMultiplier());
    gainXp(52 + state.level * 5 + softened * 6);
    gainStyle(26 + Math.min(18, softened * 2), bossDamage > 0 ? "净潮破阵" : "净化潮汐", "#5bded4");
    state.eventName = bossDamage > 0 ? "净潮破阵" : `净化核心${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.35);
    showRewardToast([{ type: "purificationCore", label: "净化核心", amount: 1 }], { duration: 1550 });
    pop(p.x, p.y, "#5bded4", 28 + Math.min(14, softened * 2));
    spawnPurificationParticles(p.x, p.y, "#5bded4", 24 + Math.min(14, softened * 2));
    state.shake = Math.max(state.shake, 5.2 + Math.min(2.6, softened * 0.22));
    beep(920, 0.075, "triangle", 0.045);
    setTimeout(() => beep(1360, 0.055, "sine", 0.035), 72);
  }

  function triggerMountCore(p) {
    const level = effectiveMountLevel();
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const chargeGain = 48 + level * 1.9 + potency * 8;
    addMountCharge(chargeGain);
    state.mountCooldown = Math.max(0, (state.mountCooldown || 0) - (2.2 + level * 0.05));
    state.draftTimer = Math.max(state.draftTimer, 2.6 + level * 0.04);
    state.shieldTimer = Math.max(state.shieldTimer, 0.9 + level * 0.025);
    state.energy = clamp(state.energy + state.maxEnergy * (0.18 + potency * 0.04), 0, state.maxEnergy);
    addRoundedScore((170 + level * 10 + state.combo * 12) * state.scoreBonus * styleMultiplier());
    gainXp(42 + level * 4);
    gainStyle(16 + Math.floor(level / 2), "坐骑共鸣", mountProfile().color || "#f5c84b");
    let softened = 0;
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dx = (h.x || 0) - hero.x;
      const dy = (h.y || hero.y) - hero.y;
      if (dx > -80 * s && dx < 360 * s && Math.abs(dy) < 150 * s) {
        h.slow = Math.max(h.slow || 0, 0.85 + potency * 0.22);
        h.hit = Math.max(h.hit || 0, 0.12);
        softened += 1;
      }
    }
    if (boss) {
      applyBossControl("paralyze", 0.3 + potency * 0.06);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.22 + potency * 0.06), 0, bossBreakThreshold());
    }
    state.combo += 1;
    state.comboTimer = Math.max(state.comboTimer, 2.8);
    recordRunStat("maxCombo", state.combo);
    state.eventName = `坐骑共鸣${softened ? ` x${softened}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    showRewardToast([{ type: "mountCore", label: "坐骑共鸣", amount: 1 }], { duration: 1500 });
    pop(p.x, p.y, mountProfile().color || "#f5c84b", 24);
    spawnMountParticles(mountProfile().color || "#f5c84b", 12);
    beep(1080, 0.075, "triangle", 0.045);
  }

  function grantRunPerk(perk, label = "本局天赋") {
    state.runPerks[perk.key] = runPerkLevel(perk.key) + 1;
    if (perk.key === "vitality") {
      state.maxHealth += 14;
      state.health = clamp(state.health + 14, 0, state.maxHealth);
      state.maxEnergy += 6;
      state.energy = clamp(state.energy + 10, 0, state.maxEnergy);
    } else if (perk.key === "overcharge") {
      state.energy = clamp(state.energy + 16, 0, state.maxEnergy);
    } else if (perk.key === "drone") {
      state.droneShootTimer = Math.min(state.droneShootTimer || 0.45, droneShotInterval(activeDroneProfile(), runPerkLevel("drone")) * 0.45);
    } else if (perk.key === "guardian") {
      state.shieldTimer = Math.max(state.shieldTimer, 3.5 + runPerkLevel("guardian") * 0.9);
    } else if (perk.key === "jackpot") {
      addRoundedScore((220 + state.level * 18) * state.scoreBonus);
    } else if (perk.key === "windrider") {
      state.draftTimer = Math.max(state.draftTimer, 5.5 + runPerkLevel("windrider") * 1.4);
      state.energy = clamp(state.energy + 12, 0, state.maxEnergy);
    } else if (perk.key === "timewarp") {
      state.recoveryTimer = Math.max(state.recoveryTimer, 1.2);
      state.energy = clamp(state.energy + 10, 0, state.maxEnergy);
    } else if (perk.key === "splash") {
      addRoundedScore(100 * state.scoreBonus);
    } else if (perk.key === "weakbreaker") {
      state.energy = clamp(state.energy + 18, 0, state.maxEnergy);
      if (boss) boss.breakMeter = Math.min(bossBreakThreshold(), (boss.breakMeter || 0) + 18);
    } else if (perk.key === "execution") {
      state.autoShootTimer = Math.min(state.autoShootTimer || 0.4, 0.18);
      state.shootCooldown = Math.min(state.shootCooldown || 0.22, 0.12);
    } else if (perk.key === "tactician") {
      state.perkChoiceTimer = Math.max(state.perkChoiceTimer, 1.2);
    } else if (perk.key === "mystery") {
      spawnMysteryCapsule(hero.x + 220 * playScale(), hero.y, 1.08 + runPerkLevel("mystery") * 0.12);
      state.pickupTimer = Math.min(state.pickupTimer, 0.25);
    } else if (perk.key === "gatecrash") {
      state.draftTimer = Math.max(state.draftTimer, 4.2 + runPerkLevel("gatecrash") * 0.85);
      shockwaveFrom(hero.x + 72 * playScale(), hero.y, 0.7 + runPerkLevel("gatecrash") * 0.18, "风门冲撞");
    } else if (perk.key === "comboGuard") {
      state.comboTimer = Math.max(state.comboTimer, 3.2);
      gainStyle(10, "连击护符", perk.color);
    }
    state.eventName = `${label}：${perk.name}`;
    state.eventLabelTimer = 1.55;
    pop(hero.x, hero.y - 20 * playScale(), perk.color, 20);
    beep(1120, 0.09, "triangle", 0.045);
  }

  function resetRunItemLoadout() {
    state.runItemLoadout = {};
    state.runItemUsed = {};
    let slots = 0;
    for (const type of RUN_CARRIED_ITEM_TYPES) {
      if (slots >= RUN_ITEM_SLOT_LIMIT) break;
      if ((meta.inventory[type] || 0) <= 0) continue;
      state.runItemLoadout[type] = true;
      slots += 1;
    }
  }

  function runItemCarried(type) {
    return Boolean(state.runItemLoadout && state.runItemLoadout[type]);
  }

  function runItemAvailable(type) {
    return runItemCarried(type) && !(state.runItemUsed && state.runItemUsed[type]) && (meta.inventory[type] || 0) > 0;
  }

  function consumeRunItem(type) {
    if (!runItemAvailable(type)) return false;
    state.runItemUsed[type] = true;
    meta.inventory[type] = Math.max(0, (meta.inventory[type] || 0) - 1);
    return true;
  }

  function runItemButtonCount(type) {
    if (state.mode === "playing" || state.mode === "perkchoice") return runItemAvailable(type) ? 1 : 0;
    return meta.inventory[type] || 0;
  }

  function runItemStatusText(type) {
    if (state.mode !== "playing" && state.mode !== "perkchoice") return `背包 ${meta.inventory[type] || 0}`;
    if (!runItemCarried(type)) return "本局未携带";
    if (state.runItemUsed && state.runItemUsed[type]) return "本局已使用";
    return runItemAvailable(type) ? "本局可用 1 次" : "背包不足";
  }

  function runItemLoadoutText() {
    const carried = RUN_CARRIED_ITEM_TYPES.filter((type) => runItemCarried(type)).map((type) => RUN_ITEM_NAMES[type] || type);
    return carried.length ? carried.join("、") : "无";
  }

  function applyOpeningConsumables() {
    if (consumeRunItem("wing")) {
      state.draftTimer = Math.max(state.draftTimer, 9.5);
      state.energy = clamp(state.energy + state.maxEnergy * 0.25, 0, state.maxEnergy);
      state.eventName = "顺风羽翼";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.6);
      saveMeta();
      showRewardToast([{ type: "wing", label: "顺风羽翼", amount: 1 }], { duration: 1700 });
      pop(hero.x, hero.y, "#9de8ff", 18);
    }
  }

  function formatCombatPower(power) {
    if (power >= 100000) return `${(power / 10000).toFixed(1)}万`;
    if (power >= 10000) return `${(power / 10000).toFixed(2)}万`;
    return String(Math.round(power));
  }

  function rewardLabel(type) {
    return {
      coin: "金币",
      material: "材料",
      poopCoin: "便便币",
      stone: "进化石",
      mountCore: "坐骑徽章",
      comboSigil: "连击祭印",
      counterSeal: "闪反徽印",
      elementCore: "五行灵核",
      purificationCore: "净化核心",
      starTrail: "星辉爆发",
      mirrorShard: "镜流碎片",
      mirrorBurst: "折返脉冲",
      forgeSigil: "铸炉符印",
      forgeWave: "铸炉波",
      currentShell: "顺流贝壳",
      adventureSurge: "冲流爆发",
      adventureContract: "冒险契约",
      adventureSupport: "远征支援",
      breakCore: "破防核心",
      paper: "纸卷",
      bonusPaper: "奖励纸卷",
      supplyCrate: "补给箱",
      relicShard: "遗迹碎片",
      mysteryCapsule: "奇遇胶囊",
      focusOrb: "技能核心",
      shield: "护盾",
      magnet: "磁铁",
      energy: "能量",
      goldPoop: "黄金",
      equipment: "装备",
      xp: "经验",
      medal: "成就",
      title: "称号",
      reroll: "重骰券",
      revive: "复活心核",
      storm: "臭弹",
      wing: "羽翼",
      break: "破防",
    }[type] || "奖励";
  }

  function showRewardToast(items, options = {}) {
    if (!rewardToast || !Array.isArray(items)) return;
    const visibleItems = items.filter((item) => item && Number(item.amount) > 0);
    if (visibleItems.length === 0) return;
    rewardToast.innerHTML = "";
    for (const item of visibleItems.slice(0, 6)) {
      const pill = document.createElement("span");
      pill.className = "reward-pill";
      const icon = document.createElement("span");
      icon.className = `reward-icon reward-${item.type}`;
      const text = document.createElement("span");
      text.textContent = `${item.label || rewardLabel(item.type)} +${Math.floor(item.amount)}`;
      pill.append(icon, text);
      rewardToast.appendChild(pill);
    }
    rewardToast.hidden = false;
    clearTimeout(rewardToastTimer);
    clearTimeout(systemToastTimer);
    rewardToastTimer = setTimeout(() => {
      if (rewardToast) rewardToast.hidden = true;
    }, options.duration || 2200);
  }

  function showSystemToast(message, options = {}) {
    if (!rewardToast || !message) return;
    rewardToast.innerHTML = "";
    const pill = document.createElement("span");
    pill.className = "reward-pill system-pill";
    const icon = document.createElement("span");
    icon.className = "reward-icon reward-system";
    const text = document.createElement("span");
    text.textContent = message;
    pill.append(icon, text);
    rewardToast.appendChild(pill);
    rewardToast.hidden = false;
    clearTimeout(rewardToastTimer);
    clearTimeout(systemToastTimer);
    systemToastTimer = setTimeout(() => {
      if (rewardToast) rewardToast.hidden = true;
    }, options.duration || 2600);
  }

  function setRedeemStatus(message, tone = "") {
    if (!redeemCodeStatus) return;
    redeemCodeStatus.textContent = message || "每个兑换码仅可使用一次。";
    redeemCodeStatus.classList.toggle("is-error", tone === "error");
    redeemCodeStatus.classList.toggle("is-success", tone === "success");
  }

  function normalizeRedeemCodeInput(value) {
    return String(value || "")
      .normalize("NFKC")
      .trim()
      .replace(/\s+/g, "")
      .toLocaleLowerCase("zh-CN");
  }

  async function sha256Hex(value) {
    const cryptoApi = window.crypto && window.crypto.subtle;
    if (!cryptoApi || !window.TextEncoder) throw new Error("digest-unavailable");
    const bytes = new TextEncoder().encode(value);
    const hash = await cryptoApi.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(hash))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  async function redeemCode(event) {
    if (event) event.preventDefault();
    if (!redeemCodeInput || !redeemCodeButton) return;
    const normalized = normalizeRedeemCodeInput(redeemCodeInput.value);
    if (!normalized) {
      setRedeemStatus("请输入兑换码。", "error");
      beep(150, 0.06, "sawtooth", 0.03);
      return;
    }
    redeemCodeButton.disabled = true;
    redeemCodeInput.value = "";
    try {
      const digest = await sha256Hex(normalized);
      const entry = REDEEM_CODES.find((item) => item.hash === digest);
      if (!entry) {
        setRedeemStatus("兑换码无效。", "error");
        beep(150, 0.07, "sawtooth", 0.032);
        return;
      }
      if (meta.redeemedCodes && meta.redeemedCodes[entry.id]) {
        setRedeemStatus("这个兑换码已使用。", "error");
        beep(180, 0.06, "square", 0.026);
        return;
      }
      const poopCoins = Math.max(0, Math.floor(Number(entry.reward && entry.reward.poopCoins) || 0));
      if (!meta.redeemedCodes || typeof meta.redeemedCodes !== "object" || Array.isArray(meta.redeemedCodes)) meta.redeemedCodes = {};
      meta.redeemedCodes[entry.id] = todayKey();
      meta.poopCoins = (meta.poopCoins || 0) + poopCoins;
      saveMeta();
      refreshShopCards();
      redeemCodeInput.value = "";
      setRedeemStatus(`兑换成功，便便币 +${poopCoins}。`, "success");
      showRewardToast([{ type: "poopCoin", amount: poopCoins }], { duration: 2800 });
      beep(980, 0.08, "triangle", 0.045);
      setTimeout(() => beep(1320, 0.07, "sine", 0.034), 80);
    } catch {
      setRedeemStatus("当前浏览器暂不支持兑换校验。", "error");
      beep(150, 0.08, "sawtooth", 0.032);
    } finally {
      redeemCodeButton.disabled = false;
    }
  }

  function reportRuntimeIssue() {
    showSystemToast("加载异常，已尝试恢复；请切换横屏或刷新。", { duration: 3200 });
  }

  function maxHeroEvolution() {
    return Math.max(0, ...Object.values(meta.heroEvolutions || {}).map((value) => Math.floor(Number(value) || 0)));
  }

  function unlockedRideableMountCount() {
    return mountProfiles.filter((profile) => profile.key !== "none" && mountUnlocked(profile.key)).length;
  }

  function equippedQualityCount(minQualityIndex) {
    return equipmentSlots.reduce((count, slot) => {
      const item = meta.equipped && meta.equipped[slot.key];
      return count + (item && qualityIndex(item.quality) >= minQualityIndex ? 1 : 0);
    }, 0);
  }

  function achievementUnlocked(achievement) {
    return !!(meta.achievements && meta.achievements[achievement.key]);
  }

  function achievementProgress(achievement) {
    if (!achievement || typeof achievement.progress !== "function") return 0;
    return Math.max(0, Math.floor(Number(achievement.progress()) || 0));
  }

  function achievementComplete(achievement) {
    return achievementProgress(achievement) >= achievement.target;
  }

  function achievementDifficultyTier(achievement) {
    if (!achievement) return 1;
    const key = achievement.key || "";
    const tier5 = new Set(["bossNemesis", "breakCoreHunter", "mountCollector", "elementMaster", "purificationMaster", "starTrailVoyager", "mirrorMaster", "forgeMaster", "counterMaster", "comboRitualist", "dailyBruiser", "endlessSprinter", "levelLegend", "evolutionFour", "rainbowGear", "paperTycoon"]);
    const tier4 = new Set(["stageCaptain", "cleanPilot", "breakMaster", "mountChorus", "comboMaster", "comboPilgrim", "mirrorSpark", "missionSweeper", "nearMissKing", "treasureHunter", "levelVeteran", "evolutionOne", "purpleGear"]);
    if (tier5.has(key)) return 5;
    if (tier4.has(key)) return 4;
    const target = Number(achievement.target) || 0;
    if (target >= 100000 || key.includes("Master") || key.includes("Legend")) return 5;
    if (target >= 1000 || target >= 25) return 4;
    if (target >= 5) return 3;
    return 2;
  }

  function tunedAchievementReward(achievement) {
    const reward = { ...((achievement && achievement.reward) || {}) };
    const tier = achievementDifficultyTier(achievement);
    const coinScale = [1, 1.65, 1.85, 2.15, 2.65, 3.25][tier] || 2;
    const materialScale = [1, 1.55, 1.75, 2.05, 2.45, 3.0][tier] || 2;
    const itemScale = tier >= 5 ? 2 : tier >= 4 ? 1.5 : tier >= 3 ? 1.25 : 1;
    const roundTo = (value, step) => Math.max(0, Math.round(value / step) * step);
    if (reward.coins) reward.coins = roundTo(reward.coins * coinScale, tier >= 4 ? 100 : 20);
    if (reward.materials) reward.materials = roundTo(reward.materials * materialScale, tier >= 4 ? 20 : 5);
    for (const type of ["shield", "magnet", "energy", "goldPoop", "reroll", "revive", "storm", "wing"]) {
      if (reward[type]) reward[type] = Math.max(1, Math.round(reward[type] * itemScale));
    }
    const rarePoopCoinAchievements = new Set([
      "cleanPilot",
      "breakMaster",
      "bossNemesis",
      "breakCoreHunter",
      "mountChorus",
      "mountCollector",
      "elementMaster",
      "starTrailVoyager",
      "nearMissKing",
      "counterMaster",
      "comboMaster",
      "comboRitualist",
      "missionSweeper",
      "dailyBruiser",
      "endlessSprinter",
      "levelLegend",
      "evolutionFour",
      "rainbowGear",
    ]);
    if (rarePoopCoinAchievements.has(achievement.key)) {
      reward.poopCoins = (reward.poopCoins || 0) + (tier >= 5 ? 2 : 1);
    }
    return reward;
  }

  function addAchievementReward(reward = {}) {
    const items = [];
    const add = (type, amount) => {
      const value = Math.max(0, Math.floor(Number(amount) || 0));
      if (value > 0) items.push({ type, amount: value });
      return value;
    };
    const coins = add("coin", reward.coins);
    const materials = add("material", reward.materials);
    const stones = add("stone", reward.stone);
    const poopCoins = add("poopCoin", reward.poopCoins);
    meta.coins += coins;
    meta.materials += materials;
    meta.poopCoins = (meta.poopCoins || 0) + poopCoins;
    addHeroEvoStones(stones);
    for (const type of ["shield", "magnet", "energy", "goldPoop", "reroll", "revive", "storm", "wing"]) {
      const amount = add(type, reward[type]);
      if (meta.inventory[type] !== undefined) meta.inventory[type] += amount;
    }
    return items;
  }

  function compactRewardItems(items) {
    const byKey = new Map();
    for (const item of items) {
      if (!item || Number(item.amount) <= 0) continue;
      const key = `${item.type}:${item.label || ""}`;
      const current = byKey.get(key) || { ...item, amount: 0 };
      current.amount += Math.floor(Number(item.amount) || 0);
      byKey.set(key, current);
    }
    return [...byKey.values()];
  }

  function formatAchievementReward(reward = {}) {
    const parts = [];
    if (reward.coins) parts.push(`${reward.coins} 金币`);
    if (reward.materials) parts.push(`${reward.materials} 材料`);
    if (reward.poopCoins) parts.push(`${reward.poopCoins} 便便币`);
    if (reward.stone) parts.push(`${reward.stone} 当前英雄专属进化石`);
    if (reward.shield) parts.push(`护盾 +${reward.shield}`);
    if (reward.magnet) parts.push(`磁铁 +${reward.magnet}`);
    if (reward.energy) parts.push(`能量 +${reward.energy}`);
    if (reward.goldPoop) parts.push(`黄金 +${reward.goldPoop}`);
    if (reward.reroll) parts.push(`重骰 +${reward.reroll}`);
    if (reward.revive) parts.push(`复活 +${reward.revive}`);
    if (reward.storm) parts.push(`臭弹 +${reward.storm}`);
    if (reward.wing) parts.push(`羽翼 +${reward.wing}`);
    return parts.join("、") || "奖励";
  }

  function checkAchievements() {
    if (!meta.achievements) meta.achievements = {};
    if (!meta.stats) meta.stats = normalizeStats();
    const unlocked = [];
    const rewardItems = [];
    for (const achievement of achievementDefinitions) {
      if (achievementUnlocked(achievement) || !achievementComplete(achievement)) continue;
      meta.achievements[achievement.key] = todayKey();
      if (achievement.title) meta.activeTitle = achievement.title;
      unlocked.push(achievement);
      rewardItems.push(...addAchievementReward(tunedAchievementReward(achievement)));
    }
    if (unlocked.length === 0) return false;
    saveMeta();
    const headline = unlocked.length === 1 ? unlocked[0].name : `${unlocked.length} 项成就`;
    showRewardToast([
      { type: "medal", label: headline, amount: 1 },
      ...compactRewardItems(rewardItems),
    ]);
    if (state.mode === "playing" || state.mode === "gameover" || state.mode === "stageclear") {
      state.eventName = `成就解锁：${headline}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.8);
    }
    return true;
  }

  function finalizeRunStats(outcome) {
    if (state.runRecorded) return;
    state.runRecorded = true;
    meta.stats = normalizeStats(meta.stats);
    const runStats = state.runStats || emptyRunStats();
    const score = Math.max(0, Math.floor(state.score || 0));
    meta.stats.totalRuns += 1;
    meta.stats.totalScore += score;
    meta.stats.bestScore = Math.max(meta.stats.bestScore, score, Math.floor(state.best || 0));
    meta.stats.totalPapers += Math.floor(runStats.papers || 0);
    meta.stats.totalKills += Math.floor(runStats.kills || 0);
    meta.stats.totalEliteKills += Math.floor(runStats.eliteKills || 0);
    meta.stats.totalTreasureKills += Math.floor(runStats.treasureKills || 0);
    meta.stats.totalBossKills += Math.floor(runStats.bossKills || 0);
    meta.stats.totalNearMisses += Math.floor(runStats.nearMisses || 0);
    meta.stats.totalManualShots += Math.floor(runStats.manualShots || 0);
    meta.stats.totalUltimates += Math.floor(runStats.ultimates || 0);
    meta.stats.totalBossBreaks += Math.floor(runStats.bossBreaks || 0);
    meta.stats.totalBossDamage += Math.floor(runStats.bossDamage || 0);
    meta.stats.totalBreakCores += Math.floor(runStats.breakCores || 0);
    meta.stats.totalMountCores += Math.floor(runStats.mountCores || 0);
    meta.stats.totalComboSigils += Math.floor(runStats.comboSigils || 0);
    meta.stats.totalCounterBursts += Math.floor(runStats.counterBursts || 0);
    meta.stats.totalElementCores += Math.floor(runStats.elementCores || 0);
    meta.stats.totalPurificationCores += Math.floor(runStats.purificationCores || 0);
    meta.stats.totalStarTrailBursts += Math.floor(runStats.starTrailBursts || 0);
    meta.stats.totalMirrorShards += Math.floor(runStats.mirrorShards || 0);
    meta.stats.totalMirrorBursts += Math.floor(runStats.mirrorBursts || 0);
    meta.stats.totalForgeSigils += Math.floor(runStats.forgeSigils || 0);
    meta.stats.totalForgeWaves += Math.floor(runStats.forgeWaves || 0);
    meta.stats.totalCurrentShells += Math.floor(runStats.currentShells || 0);
    meta.stats.totalAdventureSurges += Math.floor(runStats.adventureSurges || 0);
    meta.stats.totalAdventureExplore += Math.floor(runStats.adventureExplore || 0);
    meta.stats.totalAdventureIntel += Math.floor(runStats.adventureIntel || 0);
    meta.stats.totalAdventureCargo += Math.floor(runStats.adventureCargo || 0);
    meta.stats.totalAdventureContracts += Math.floor(runStats.adventureContracts || 0);
    meta.stats.totalAdventureSupports += Math.floor(runStats.adventureSupports || 0);
    meta.stats.bestCombo = Math.max(meta.stats.bestCombo, Math.floor(runStats.maxCombo || 0));
    if (state.gameMode === "daily") {
      meta.stats.totalDailyDamage += Math.floor(state.dailyDamage || 0);
    }
    if (outcome === "stageclear") {
      meta.stats.totalStageClears += 1;
      meta.stats.bestStage = Math.max(meta.stats.bestStage, isStageMode() ? activeStageNumber() : state.selectedStage || 1);
      if (state.hitsTaken === 0) meta.stats.cleanStageClears += 1;
    }
    if (state.missionBonusClaimed) meta.stats.bountyClears += 1;
    if (!checkAchievements()) saveMeta();
  }

  function runSummaryItems() {
    if (state.mode !== "gameover" && state.mode !== "stageclear") return [];
    const stats = state.runStats || emptyRunStats();
    const items = [
      ["击破", stats.kills || 0],
      ["纸卷", stats.papers || 0],
      ["最高连击", stats.maxCombo || 0],
      ["重击", stats.manualShots || 0],
      ["大招", stats.ultimates || 0],
      ["破防", stats.bossBreaks || 0],
      ["破防核心", stats.breakCores || 0],
      ["坐骑共鸣", stats.mountCores || 0],
      ["连击祭印", stats.comboSigils || 0],
      ["闪反", stats.counterBursts || 0],
      ["五行灵核", stats.elementCores || 0],
      ["净化核心", stats.purificationCores || 0],
      ["星辉爆发", stats.starTrailBursts || 0],
      ["镜流碎片", stats.mirrorShards || 0],
      ["折返脉冲", stats.mirrorBursts || 0],
      ["铸炉符印", stats.forgeSigils || 0],
      ["铸炉波", stats.forgeWaves || 0],
      ["顺流贝壳", stats.currentShells || 0],
      ["冲流爆发", stats.adventureSurges || 0],
      ["冒险契约", stats.adventureContracts || 0],
      ["远征支援", stats.adventureSupports || 0],
    ].filter((entry) => entry[1] > 0);
    if (state.gameMode === "adventure") {
      const route = adventureRouteProgress();
      items.push(["航图", `${Math.floor(adventureRoutePercent())}%`]);
      if (route.target.intel > 0) items.push(["线索", `${Math.floor(route.intel)}/${route.target.intel}`]);
      if (route.target.cargo > 0) items.push(["货箱", `${Math.floor(route.cargo)}/${route.target.cargo}`]);
    }
    if (state.gameMode === "daily") items.push(["挑战伤害", Math.floor(state.dailyDamage || 0)]);
    else if (stats.bossDamage > 0) items.push(["Boss伤害", Math.floor(stats.bossDamage)]);
    items.push(["最终战力", formatCombatPower(runHeroCombatPower())]);
    if (meta.activeTitle) items.push(["称号", meta.activeTitle]);
    return items;
  }

  function setPanelCopy(copy, summaryItems = []) {
    if (!panelCopy) return;
    panelCopy.textContent = "";
    const main = document.createElement("div");
    main.className = "panel-copy-main";
    main.textContent = copy;
    panelCopy.appendChild(main);
    if (summaryItems.length === 0) return;
    const summary = document.createElement("div");
    summary.className = "run-summary";
    for (const [label, value] of summaryItems) {
      const chip = document.createElement("span");
      chip.textContent = `${label} ${value}`;
      summary.appendChild(chip);
    }
    panelCopy.appendChild(summary);
  }

  function stageBossPowerScale(stage = activeStage()) {
    if (!stage || !stage.bossStage) return 1;
    return stage.adventure ? ADVENTURE_BOSS_POWER_SCALE : STAGE_BOSS_POWER_SCALE;
  }

  function bossHpScaleFromPower(scale) {
    return Math.max(1, scale);
  }

  function bossDamageScaleFromPower(scale) {
    return scale <= 1 ? 1 : Math.pow(scale, 0.48);
  }

  function bossCadenceScaleFromPower(scale) {
    return scale <= 1 ? 1 : clamp(1 - (scale - 1) * 0.045, 0.84, 1);
  }

  function bossSpeedScaleFromPower(scale) {
    return scale <= 1 ? 1 : clamp(1 + (scale - 1) * 0.055, 1, 1.16);
  }

  function bossGrowthForIndex(level, stageIndex, endless = 0) {
    const mid = Math.max(0, stageIndex - 25);
    const late = Math.max(0, stageIndex - 45);
    const levelCurve = Math.pow(Math.max(0, level - 8), 1.18);
    return {
      hp: 1.09 + mid * 0.028 + late * 0.054 + endless * 0.09 + levelCurve * 0.058,
      damage: 1.05 + mid * 0.0095 + late * 0.023 + endless * 0.037 + Math.max(0, level - 10) * 0.02,
      cadence: clamp(0.98 - late * 0.0072 - endless * 0.015, 0.7, 0.98),
      speed: clamp(1.01 + late * 0.0054 + endless * 0.012, 1.01, 1.24),
    };
  }

  function endlessBossProgress(level = state.bossLevel) {
    const bossNo = Math.max(1, Number(level) || 1);
    const surge = Math.max(0, bossNo - 3);
    const deep = Math.max(0, bossNo - 8);
    return {
      stageIndex: bossNo * 6.9 + (Math.pow(surge, 1.15) * 2.35 + Math.pow(deep, 1.28) * 1.35) * ENDLESS_BOSS_PROGRESS_MULTIPLIER,
      endless: (surge * 1.62 + Math.pow(deep, 1.18) * 0.64) * ENDLESS_BOSS_PROGRESS_MULTIPLIER,
      stagePower: bossNo * (7.1 + Math.min(7.2, bossNo * 0.45)) + Math.pow(Math.max(0, bossNo - 6), 1.22) * 5.2 * ENDLESS_BOSS_PROGRESS_MULTIPLIER,
    };
  }

  function bossGrowth(level) {
    const endlessProgress = state.gameMode === "endless" ? endlessBossProgress(state.bossLevel) : null;
    const stageIndex = isStageMode()
      ? activeStage().number
      : state.gameMode === "daily"
        ? 42 + Math.floor(currentHeroLevel() * 0.45)
        : endlessProgress ? endlessProgress.stageIndex : Math.max(1, state.bossLevel) * 5;
    const endless = endlessProgress ? endlessProgress.endless : 0;
    return bossGrowthForIndex(level, stageIndex, endless);
  }

  function bossAttackPatternFactor(attackKey) {
    return {
      poopVolley: 1.04,
      plungerCharge: 1.14,
      stinkLab: 1.18,
      bubbleStorm: 1.24,
      sewerBarrage: 1.3,
      demonRain: 1.38,
      toxicPump: 1.28,
      mixerBlade: 1.34,
      wasteCore: 1.44,
      cycloneClog: 1.36,
      slimeCourt: 1.42,
      leviathanWave: 1.5,
    }[attackKey] || 1.1;
  }

  function bossAttackInterval(seconds) {
    return Math.max(0.01, seconds) / BOSS_ATTACK_RATE_SCALE;
  }

  function bossPatternCount(count, min = 1) {
    return clamp(Math.floor(count * BOSS_PROJECTILE_DENSITY_SCALE), min, count);
  }

  function bossCombatPower(bossData) {
    const profile = bossData.profile || bossProfiles[0];
    const level = Math.max(1, Number(bossData.level) || 1);
    const maxHp = Math.max(1, Number(bossData.maxHp || bossData.hp) || 1);
    const damageScale = bossData.damageScale || 1;
    const cadenceScale = bossData.cadenceScale || 1;
    const speedScale = bossData.speedScale || 1;
    const cadence = Math.max(0.52, (profile.cadence + 0.34 - level * 0.018) * cadenceScale);
    const attackRate = BOSS_ATTACK_RATE_SCALE / cadence;
    const pattern = bossAttackPatternFactor(profile.attack) * (profile.percentDamage ? 1.18 : 1);
    const baseHit = (18 + level * 4.2) * profile.damage * damageScale;
    const percentHit = (profile.percentDamage || 0) * Math.max(100, state.maxHealth || 100) * 2.8;
    const offense = (baseHit + percentHit) * attackRate * pattern * (1 + Math.max(0, speedScale - 1) * 0.85);
    const bulk = Math.sqrt(maxHp) * (70 + level * 2.9) * (0.82 + profile.hp * 0.13);
    const scaling = Math.pow(level, 1.18) * 52 + maxHp * 1.8 + profile.hp * 150;
    const phase = (bossData.enraged ? 1.08 : 1) * (bossData.daily ? 1.14 : 1);
    return Math.round((offense * 30 + bulk + scaling) * phase);
  }

  function dailyBossTargetPower() {
    return Math.max(1, Math.round(runHeroCombatPower() * DAILY_BOSS_POWER_MULTIPLIER));
  }

  function tuneDailyBossToTarget(bossData) {
    if (!bossData || !bossData.daily) return;
    const target = dailyBossTargetPower();
    const before = Math.max(1, bossCombatPower(bossData));
    const scale = clamp(target / before, 0.08, 80);
    const hpScale = clamp(Math.pow(scale, 0.58), 0.42, 18);
    const damageScale = clamp(Math.pow(scale, 0.34), 0.48, 6.5);
    bossData.maxHp = Math.max(1, Math.round(bossData.maxHp * hpScale));
    bossData.hp = bossData.maxHp;
    bossData.damageScale *= damageScale;
    bossData.cadenceScale *= clamp(1 - (damageScale - 1) * 0.018, 0.88, 1.06);
    bossData.speedScale *= clamp(1 + (damageScale - 1) * 0.018, 0.92, 1.1);
    bossData.dailyPowerTarget = target;
    bossData.power = target;
  }

  function syncDailyBossPower() {
    if (!boss || !boss.daily) return boss ? boss.power || bossCombatPower(boss) : 0;
    boss.power = dailyBossTargetPower();
    return boss.power;
  }

  function bossBattleRating(heroPower, bossPower, options = {}) {
    const ratio = heroPower / Math.max(1, bossPower);
    if (options.daily) {
      if (ratio >= 0.18) return { key: "challenge", label: "高伤", ratio, tip: "弱点期全力爆发" };
      if (ratio >= 0.08) return { key: "challenge", label: "挑战", ratio, tip: "打弱点冲奖励" };
      return { key: "challenge", label: "磨血", ratio, tip: "保命攒大招" };
    }
    if (ratio >= 1.45) return { key: "crush", label: "压制", ratio, tip: "追击弱点拿奖励" };
    if (ratio >= 1.16) return { key: "advantage", label: "优势", ratio, tip: "大招留给狂暴" };
    if (ratio >= 0.92) return { key: "even", label: "均势", ratio, tip: "弱点出现再爆发" };
    if (ratio >= 0.72) return { key: "danger", label: "危险", ratio, tip: "先保命攒能量" };
    return { key: "critical", label: "绝境", ratio, tip: "用道具打弱点" };
  }

  function currentBossBattleRating() {
    if (!boss) return null;
    const bossPower = boss.daily ? syncDailyBossPower() : boss.power || bossCombatPower(boss);
    return bossBattleRating(runHeroCombatPower(), bossPower, { daily: boss.daily });
  }

  function stageRecommendedPower(stage) {
    if (!stage) return 0;
    if (stage.bossStage) {
      const level = stage.bossLevel + Math.floor(stage.number / 5);
      const profile = bossProfileForStage(stage);
      const growth = bossGrowthForIndex(level, stage.number, 0);
      const powerScale = stageBossPowerScale(stage);
      const stagePower = stage.number * (stage.adventure ? 7.6 : 6.2);
      const baseHp = Math.round((26 + level * 15 + 6 + stagePower) * profile.hp * growth.hp * bossHpScaleFromPower(powerScale));
      const estimate = bossCombatPower({
        level,
        profile,
        hp: baseHp,
        maxHp: baseHp,
        damageScale: growth.damage * bossDamageScaleFromPower(powerScale),
        cadenceScale: growth.cadence * bossCadenceScaleFromPower(powerScale),
        speedScale: growth.speed * bossSpeedScaleFromPower(powerScale),
        daily: false,
      });
      return Math.round(estimate * (stage.adventure ? 0.94 : 0.88));
    }
    const hitPressure = stage.hitLimit > 0 ? (9 - stage.hitLimit) * 360 : 0;
    if (stage.adventure) {
      return Math.round(1500 + stage.number * 115 + Math.pow(stage.number, 1.28) * 38 + stage.target * 0.28 + hitPressure * 0.82 + 300 + stage.number * 35);
    }
    return Math.round(1900 + stage.number * 135 + Math.pow(stage.number, 1.34) * 46 + stage.target * 0.34 + hitPressure);
  }

  function stageReadiness(stage) {
    const recommended = stageRecommendedPower(stage);
    const heroPower = heroCombatPower();
    const rating = bossBattleRating(heroPower, recommended);
    if (rating.key === "crush") return { ...rating, recommended, label: "轻松" };
    if (rating.key === "advantage") return { ...rating, recommended, label: "稳妥" };
    if (rating.key === "even") return { ...rating, recommended, label: "可战" };
    if (rating.key === "danger") return { ...rating, recommended, label: "吃力" };
    return { ...rating, recommended, label: "高危" };
  }

  function makeEquipment(slotKey, qualityKey, sourceLevel) {
    const quality = qualityByKey(qualityKey);
    const level = Math.max(1, Math.floor(sourceLevel || 1));
    const mult = quality.mult;
    const stats = { health: 0, energy: 0, attack: 0, luck: 0, crit: 0, dodge: 0, regen: 0, guard: 0, haste: 0 };
    const base = Math.max(2, Math.round((level + currentHeroLevel() * 0.45) * mult));
    const trait = Math.max(1, Math.round((1.1 + level * 0.028 + quality.power * 0.22) * quality.power));
    if (slotKey === "helmet") {
      stats.health = base * 5;
      stats.energy = Math.round(base * 1.2);
      stats.guard = Math.max(1, Math.round(trait * 1.1));
      if (Math.random() < 0.45) stats.crit = Math.max(1, Math.round(trait * 0.45));
    } else if (slotKey === "armor") {
      stats.health = base * 8;
      stats.guard = Math.max(1, Math.round(trait * 1.55));
      stats.regen = Math.max(1, Math.round(trait * 0.45));
    } else if (slotKey === "boots") {
      stats.energy = base * 3;
      stats.health = Math.round(base * 2.4);
      stats.dodge = Math.max(1, Math.round(trait * 1.25));
      stats.haste = Math.max(1, Math.round(trait * 0.85));
    } else if (slotKey === "weapon") {
      stats.attack = Math.max(1, Math.round(base * 0.55));
      stats.crit = Math.max(1, Math.round(trait * 1.65));
      stats.haste = Math.max(1, Math.round(trait * 0.55));
    } else if (slotKey === "necklace") {
      stats.energy = base * 2;
      stats.luck = Math.max(1, Math.round(base * 0.5 + quality.power * 2));
      stats.crit = Math.max(1, Math.round(trait * 0.75));
      stats.dodge = Math.max(1, Math.round(trait * 0.75));
      stats.regen = Math.max(1, Math.round(trait * 0.6));
    }
    return {
      id: `eq_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      slot: slotKey,
      quality: quality.key,
      level,
      name: equipmentName(slotKey, quality.key),
      iconVariant: Math.random() < 0.5 ? 0 : 1,
      stats,
    };
  }

  function rollEquipmentQuality(sourceLevel, bossDrop, eliteDrop = false) {
    const luck = equipmentStats().luck;
    const weights = bossDrop
      ? [28, 26, 21, 14, 7, 3, 1]
      : eliteDrop
        ? [55, 28, 12, 4, 0.85, 0.14, 0.01]
      : [78, 18, 3.6, 0.4, 0, 0, 0];
    const boost = Math.min(3.2, sourceLevel * 0.035 + luck * 0.05 + (bossDrop ? 0.5 : 0));
    for (let i = 1; i < weights.length; i += 1) {
      const moved = weights[i - 1] * 0.045 * boost;
      weights[i - 1] -= moved;
      weights[i] += moved;
    }
    const total = weights.reduce((sum, value) => sum + value, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < weights.length; i += 1) {
      roll -= weights[i];
      if (roll <= 0) return equipmentQualities[i].key;
    }
    return equipmentQualities[0].key;
  }

  function shopGearBoxRainbowChance() {
    const progress = clamp((playerProgressScore() - 10) / 165, 0, 1);
    return clamp(0.015 + progress * 0.035, 0.015, 0.05);
  }

  function rollShopGearBoxQuality(sourceLevel) {
    if (Math.random() < shopGearBoxRainbowChance()) return "rainbow";
    const progress = clamp((sourceLevel + playerProgressScore() * 0.35 - 12) / 92, 0, 1);
    const weights = [
      { key: "purple", weight: 78 - progress * 30 },
      { key: "gold", weight: 18 + progress * 17 },
      { key: "red", weight: 4 + progress * 13 },
    ];
    const total = weights.reduce((sum, entry) => sum + entry.weight, 0);
    let roll = Math.random() * total;
    for (const entry of weights) {
      roll -= entry.weight;
      if (roll <= 0) return entry.key;
    }
    return "purple";
  }

  function dropEquipment(source, level) {
    const luck = equipmentStats().luck;
    const bossDrop = source === "boss";
    const eliteDrop = source === "elite";
    const chance = bossDrop
      ? Math.min(0.9, 0.58 + luck * 0.004)
      : eliteDrop
        ? Math.min(0.12, 0.038 + luck * 0.00055)
        : Math.min(0.024, 0.007 + luck * 0.00016);
    if (Math.random() > chance) return;
    const availableSlots = equipmentSlots.filter((slot) => slot.key !== "necklace");
    const necklaceChance = bossDrop ? Math.min(0.32, 0.18 + luck * 0.0025) : 0;
    const slot = bossDrop && Math.random() < necklaceChance
      ? equipmentSlots.find((entry) => entry.key === "necklace")
      : availableSlots[Math.floor(Math.random() * availableSlots.length)];
    const quality = rollEquipmentQuality(level, bossDrop, eliteDrop);
    awardEquipment(makeEquipment(slot.key, quality, level));
  }

  function awardEquipment(item) {
    const current = meta.equipped[item.slot];
    const itemPower = equipmentPower(item);
    if (!current || itemPower > equipmentPower(current)) {
      if (current) meta.equipmentBag.unshift(current);
      meta.equipped[item.slot] = item;
      panelCopy.textContent = `获得并穿戴 ${item.name}，战力提升到 ${heroCombatPower()}。`;
    } else {
      meta.equipmentBag.unshift(item);
      panelCopy.textContent = `获得 ${item.name}，已放入装备背包。`;
    }
    meta.equipmentBag = meta.equipmentBag
      .filter(Boolean)
      .sort((a, b) => equipmentPower(b) - equipmentPower(a))
      .slice(0, 40);
    saveMeta();
    showRewardToast([{ type: "equipment", label: item.name, amount: 1 }]);
    refreshHeroStatsFromMeta();
    checkAchievements();
  }

  function bossProfileForStage(stageOrNumber) {
    const stage = stageOrNumber && typeof stageOrNumber === "object" ? stageOrNumber : null;
    const stageNumber = stage ? stage.number : stageOrNumber;
    if (stage && stage.profileKey) {
      return bossProfiles.find((profile) => profile.key === stage.profileKey) || bossProfiles[0];
    }
    if (specialStageBosses[stageNumber]) {
      return bossProfiles.find((profile) => profile.key === specialStageBosses[stageNumber]) || bossProfiles[0];
    }
    const index = clamp(Math.floor(stageNumber / 5) - 1, 0, bossProfiles.length - 1);
    return bossProfiles[index];
  }

  function bossProfileForEndless(level) {
    return bossProfiles[(Math.max(1, level) - 1) % bossProfiles.length];
  }

  function activeMap() {
    if (state.gameMode === "daily") return "deep";
    if (isStageMode()) return activeStage().map;
    if (state.score >= 5200 || state.bossLevel >= 7) return "adventure";
    return state.score >= 2600 || state.bossLevel >= 3 ? "deep" : "city";
  }

  function warmMapBackground(map, priority = "low") {
    const keys = map === "adventure"
      ? ["backgroundAdventureRefit", "backgroundAdventure", "adventureRouteCompass", "stageContractBadge"]
      : map === "deep"
        ? ["backgroundDeepRefit", "backgroundDeep"]
        : ["backgroundCityRefit", "background"];
    warmAssetQueue(keys, { priority, delay: priority === "high" ? 20 : 90 });
  }

  function warmUpcomingBackgrounds() {
    if (state.mode !== "playing") return;
    warmMapBackground(activeMap(), "high");
    if (state.gameMode === "endless") {
      if (state.score >= 1800 || state.bossLevel >= 2) warmMapBackground("deep", "high");
      if (state.score >= 4300 || state.bossLevel >= 5) warmMapBackground("adventure", "high");
    } else if (isStageMode()) {
      const list = activeStageList();
      const next = list[Math.min(list.length - 1, activeStageNumber())];
      if (next && next.map) warmMapBackground(next.map, "low");
    }
  }

  function isDailyBossActive() {
    return state.gameMode === "daily" || (boss && boss.daily);
  }

  function bossVisualLevel(level) {
    return isDailyBossActive() ? Math.min(level, 18 + Math.sqrt(Math.max(1, level)) * 1.7) : level;
  }

  function bossWidth(level, scale) {
    const visualLevel = bossVisualLevel(level);
    const landscape = isLandscapePlay();
    const daily = isDailyBossActive();
    const playable = Math.max(140, playBottom() - playTop());
    let width = (166 + visualLevel * 13) * scale * BOSS_SIZE_SCALE * (landscape ? 0.9 : 1);
    if (landscape) {
      width = Math.min(width, state.width * (daily ? 0.13 : 0.19), playable * (daily ? 0.38 : 0.52));
    }
    if (daily) {
      const playable = Math.max(140, playBottom() - playTop());
      width = Math.min(width * (landscape ? 0.68 : 0.68), state.width * (landscape ? 0.135 : 0.32), playable * (landscape ? 0.38 : 0.46));
    }
    return Math.max(width, landscape ? 50 * playScale() : 82 * playScale());
  }

  function bossHeight(level, scale) {
    const visualLevel = bossVisualLevel(level);
    const landscape = isLandscapePlay();
    const daily = isDailyBossActive();
    const playable = Math.max(140, playBottom() - playTop());
    let height = (132 + visualLevel * 10) * scale * BOSS_SIZE_SCALE * (landscape ? 0.9 : 1);
    if (landscape) {
      height = Math.min(height, playable * (daily ? 0.4 : 0.56));
    }
    if (daily) {
      const playable = Math.max(140, playBottom() - playTop());
      height = Math.min(height * (landscape ? 0.68 : 0.68), playable * (landscape ? 0.4 : 0.5));
    }
    return Math.max(height, landscape ? 42 * playScale() : 70 * playScale());
  }

  function bossAttackLevel() {
    if (!boss || !boss.daily) return boss ? boss.level : 1;
    return Math.min(15, 6 + Math.floor(currentHeroLevel() * 0.14) + Math.floor(state.time / 24));
  }

  function autoShootInterval() {
    return intervalFromAttacksPerSecond(heroAttacksPerSecond({ run: true }));
  }

  function manualShootInterval() {
    return Math.round(intervalFromAttacksPerSecond(heroAttacksPerSecond({ run: true }) * 0.92) * 1000);
  }

  function manualEnergyCost() {
    const focus = runPerkLevel("focus");
    const cost = 52 + attackTier() * 1.8 - Math.floor(state.level / 6) - currentEvolution() * 1.05 - focus * 1.8;
    return Math.round(clamp(cost, 36, 66));
  }

  function strongAttackDamageMultiplier(shot = {}) {
    const focus = runPerkLevel("focus");
    const nearMissBoost = state.nearMissTimer > 0 ? 0.1 : 0;
    const weakSpotBoost = boss && boss.weakDuration > 0 ? 0.07 : 0;
    const heroBoost = meta.selectedHero === "tigerMetal" ? 0.12 : meta.selectedHero === "voidChef" ? 0.055 : meta.selectedHero === "dragonWood" ? 0.06 : meta.selectedHero === "neonMedic" ? 0.035 : meta.selectedHero === "alchemist" ? 0.025 : 0;
    const shotBoost = shot.strongBonus || 0;
    return 1.32 + Math.min(0.22, attackTier() * 0.02) + focus * 0.035 + nearMissBoost + weakSpotBoost + heroBoost + shotBoost;
  }

  function ultimateEnergyCost() {
    return Math.ceil(state.maxEnergy * ULTIMATE_ENERGY_RATIO);
  }

  function directorPressure() {
    const stageNo = isStageMode() ? activeStage().number : 0;
    const adventureStagePressure = state.gameMode === "adventure"
      ? stageNo * (stageNo <= 8 ? 0.0058 : 0.0068 + Math.min(0.002, (stageNo - 8) * 0.00008))
      : 0;
    const stagePressure = isStageMode() ? Math.min(0.34, state.gameMode === "adventure" ? adventureStagePressure : stageNo * 0.0055) : 0;
    const endlessPressure = state.gameMode === "endless" ? Math.min(0.26, state.bossLevel * 0.032) : 0;
    const timePressure = Math.min(0.32, state.time * 0.0048);
    const comboPressure = Math.min(0.16, state.combo * 0.005);
    const feverPressure = state.feverTimer > 0 ? 0.06 : 0;
    const recoveryRelief = state.recoveryTimer > 0 ? 0.34 : 0;
    const healthRelief = state.health < state.maxHealth * 0.36 ? 0.16 : state.health < state.maxHealth * 0.55 ? 0.08 : 0;
    const energyRelief = state.energy < state.maxEnergy * 0.22 ? 0.06 : 0;
    const eventRelief = state.eventKind === "cleanWind" ? 0.2 : state.eventKind === "adventureCurrent" ? 0.14 : state.eventKind === "supplyDrop" ? 0.1 : state.eventKind === "purificationTide" ? 0.13 : state.eventKind === "mirrorCurrent" ? 0.1 : state.eventKind === "auroraForge" ? 0.09 : state.eventKind === "elementRift" ? 0.075 : state.eventKind === "starTrail" ? 0.075 : state.eventKind === "mountTrial" ? 0.08 : state.eventKind === "comboShrine" ? 0.04 : state.eventKind === "counterTrial" ? 0.035 : 0;
    const sigilRelief = state.comboSurgeTimer > 0 ? 0.06 : 0;
    const draftRelief = state.draftTimer > 0 ? 0.08 : 0;
    const contractRelief = state.adventureContractBoostTimer > 0 ? 0.055 : 0;
    const adventureSupportRelief = state.adventureSupportTimer > 0 ? 0.075 : 0;
    const classicRelief = state.gameMode === "stage" ? (classicStageProfile(activeStage()).pressureRelief || 0) : 0;
    const classicGreenRelief = state.classicGreenWaveReliefTimer > 0 ? 0.045 : 0;
    return clamp(stagePressure + endlessPressure + timePressure + comboPressure + feverPressure + (runModifier().danger || 0) - recoveryRelief - healthRelief - energyRelief - eventRelief - sigilRelief - draftRelief - contractRelief - adventureSupportRelief - classicRelief - classicGreenRelief, 0, 0.78);
  }

  function pickupGenerosity() {
    let value = 1;
    if (state.recoveryTimer > 0) value += 0.42;
    if (state.health < state.maxHealth * 0.42) value += 0.28;
    if (state.energy < state.maxEnergy * 0.32) value += 0.18;
    if (state.eventKind === "cleanWind") value += 0.28;
    if (state.classicGreenWaveReliefTimer > 0) value += 0.08;
    if (state.eventKind === "goldRush") value += 0.36;
    if (state.eventKind === "draftGate") value += 0.14;
    if (state.eventKind === "paperRain") value += 0.22;
    if (state.eventKind === "treasureRun") value += 0.18;
    if (state.eventKind === "mysteryRoute") value += 0.24;
    if (state.eventKind === "supplyDrop") value += 0.3;
    if (state.eventKind === "relicRoute") value += 0.2;
    if (state.adventureSupportTimer > 0) value += 0.16;
    if (state.eventKind === "elementRift") value += 0.24;
    if (state.eventKind === "purificationTide") value += 0.24;
    if (state.eventKind === "mirrorCurrent") value += 0.2;
    if (state.eventKind === "auroraForge") value += 0.18;
    if (state.eventKind === "starTrail") value += 0.08;
    if (state.eventKind === "mountTrial") value += 0.24;
    if (state.eventKind === "comboShrine") value += 0.18;
    if (state.eventKind === "counterTrial") value += 0.18;
    if (state.feverTimer > 0) value += 0.12;
    if (state.gameMode === "stage") value += classicStageProfile(activeStage()).pickupBonus || 0;
    value *= runModifier().pickup || 1;
    return value;
  }

  function effectBudget() {
    const base = EFFECT_BUDGETS[state.effectiveQuality === "smooth" ? "smooth" : "normal"];
    const sceneScale = sceneTransitionActive() ? (state.effectiveQuality === "smooth" ? 0.7 : 0.6) : 1;
    if (!isLandscapePlay()) {
      if (sceneScale >= 1) return base;
      return {
        particles: Math.max(64, Math.floor(base.particles * sceneScale)),
        floaters: Math.max(3, Math.floor(base.floaters * sceneScale)),
        projectiles: base.projectiles,
        hazards: base.hazards,
        pop: base.pop * sceneScale,
        trail: base.trail * sceneScale,
      };
    }
    const tight = landscapeTightness();
    const compact = state.height <= 430 ? 0.84 : 0.92;
    const scale = clamp(compact - tight * 0.12, 0.68, 0.94);
    return {
      particles: Math.max(70, Math.floor(base.particles * scale * sceneScale)),
      floaters: Math.max(4, Math.floor(base.floaters * scale * sceneScale)),
      projectiles: Math.max(48, Math.floor(base.projectiles * scale)),
      hazards: Math.max(42, Math.floor(base.hazards * scale)),
      pop: base.pop * scale * sceneScale,
      trail: base.trail * scale * sceneScale,
    };
  }

  function isSmoothQuality() {
    return state.effectiveQuality === "smooth";
  }

  function trimPlayArrays() {
    const budget = effectBudget();
    if (particles.length > budget.particles) particles.splice(0, particles.length - budget.particles);
    if (floaters.length > budget.floaters) floaters.splice(0, floaters.length - budget.floaters);
    if (projectiles.length > budget.projectiles) projectiles.splice(0, projectiles.length - budget.projectiles);
    const pickupLimit = activePickupLimit();
    if (pickups.length > pickupLimit) pickups.splice(0, pickups.length - pickupLimit);
    if (hazards.length > budget.hazards) {
      const excess = hazards.length - budget.hazards;
      hazards.splice(0, Math.min(excess, Math.max(0, hazards.length - 18)));
    }
  }

  function pushProjectiles(shots) {
    const list = Array.isArray(shots) ? shots : [shots];
    const room = Math.max(0, effectBudget().projectiles - projectiles.length);
    if (room <= 0) return;
    projectiles.push(...list.slice(0, room).map((shot) => {
      return {
        ...shot,
        rx: (shot.rx || 24) * HERO_PROJECTILE_SIZE_SCALE,
        ry: (shot.ry || 18) * HERO_PROJECTILE_SIZE_SCALE,
        maxLife: shot.maxLife || shot.life || 0.8,
        strong: shot.strong === undefined ? !!shot.manual : !!shot.strong,
        strongMult: shot.strongMult || (shot.manual ? strongAttackDamageMultiplier(shot) : 1),
      };
    }));
  }

  function applyEffectiveQuality(next, silent = false) {
    if (state.effectiveQuality === next) return;
    state.effectiveQuality = next;
    trimPlayArrays();
    resize();
    if (!silent && state.mode === "playing" && next === "smooth") {
      state.eventName = "自动流畅";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.1);
    }
  }

  function updatePerformance(rawDt) {
    const frameMs = clamp(rawDt * 1000, 8, 80);
    state.frameAvg = state.frameAvg * 0.94 + frameMs * 0.06;
    state.qualityTimer = Math.max(0, state.qualityTimer - rawDt);
    if (state.qualityMode === "smooth") {
      applyEffectiveQuality("smooth", true);
      return;
    }
    const compactLandscape = isLandscapePlay() && state.height <= 430;
    const activeObjects = projectiles.length + hazards.length;
    const heavyLoad = state.frameAvg > (compactLandscape ? 21 : 24) || particles.length > (compactLandscape ? 128 : 175) || activeObjects > (compactLandscape ? 88 : 118);
    const calmLoad = state.frameAvg < (compactLandscape ? 17.2 : 18.4) && particles.length < (compactLandscape ? 58 : 82) && activeObjects < (compactLandscape ? 48 : 64);
    if (heavyLoad && state.effectiveQuality !== "smooth") {
      applyEffectiveQuality("smooth");
      state.qualityTimer = 6;
    } else if (calmLoad && state.effectiveQuality === "smooth" && state.qualityTimer <= 0) {
      applyEffectiveQuality("normal", true);
      state.qualityTimer = 5;
    }
  }

  function setQualityMode(mode) {
    state.qualityMode = mode === "smooth" ? "smooth" : "auto";
    storageSet("shitSupermanQualityMode", state.qualityMode);
    applyEffectiveQuality(state.qualityMode === "smooth" ? "smooth" : "normal", true);
    updateQualityUi();
    if (panelCopy) {
      panelCopy.textContent = state.qualityMode === "smooth"
        ? "已切换为流畅模式：减少粒子、漂浮物和高密度弹幕，低端手机更稳。"
        : "已切换为自动画质：画面会按设备状态动态调节。";
    }
  }

  function updateQualityUi() {
    if (qualityAutoButton) qualityAutoButton.classList.toggle("is-selected", state.qualityMode !== "smooth");
    if (qualitySmoothButton) qualitySmoothButton.classList.toggle("is-selected", state.qualityMode === "smooth");
  }

  function bossDifficultyTuning(bossData) {
    const basePower = Math.max(1, bossCombatPower(bossData));
    const ratio = runHeroCombatPower() / basePower;
    const low = clamp((0.82 - ratio) / 0.34, 0, 1);
    const high = clamp((ratio - 1.08) / 0.72, 0, 1);
    const daily = state.gameMode === "daily";
    return {
      ratio,
      hp: clamp(1.05 - low * (daily ? 0.07 : 0.1) + high * (daily ? 0.07 : 0.22), daily ? 0.9 : 0.92, daily ? 1.13 : 1.3),
      damage: clamp(1.04 - low * (daily ? 0.18 : 0.1) + high * (daily ? 0.045 : 0.13), daily ? 0.78 : 0.89, daily ? 1.03 : 1.18),
      cadence: daily
        ? clamp(1.1 + low * 0.13 - high * 0.045, 1.05, 1.27)
        : clamp(0.98 + low * 0.1 - high * 0.085, 0.86, 1.08),
      speed: clamp(1.02 - low * (daily ? 0.16 : 0.075) + high * (daily ? 0.035 : 0.07), daily ? 0.78 : 0.94, daily ? 0.99 : 1.14),
      reward: clamp(1 + high * 0.18 + (low > 0.7 ? 0.05 : 0), 1, 1.2),
    };
  }

  function droneShotInterval(profile, level) {
    const base = Number(profile.cadence) || 1.25;
    const min = Number(profile.minCadence) || 0.82;
    const levelBonus = Math.max(0, level - 1) * 0.1;
    const feverBonus = state.feverTimer > 0 ? 0.08 : 0;
    return clamp(base - levelBonus - feverBonus, min, base);
  }

  function droneTargetY(defaultY = hero.y) {
    if (boss) return boss.y + Math.sin(state.time * 2.4) * boss.h * 0.16;
    let target = null;
    let distance = Infinity;
    for (const h of hazards) {
      if (!h || h.type !== "toilet") continue;
      const dx = h.x - hero.x;
      if (dx < 60 * playScale() || dx > state.width * 0.76) continue;
      if (dx < distance) {
        distance = dx;
        target = h;
      }
    }
    return target ? target.y : defaultY;
  }

  function makeDroneProjectile(profile, level, lane = 0) {
    const s = playScale();
    const yOffset = (lane === 0 ? -1 : 1) * (42 + Math.min(18, level * 3)) * s;
    const y = hero.y + yOffset;
    const aimedVy = clamp((droneTargetY(y) - y) * 1.35, -150 * s, 150 * s);
    const common = {
      x: hero.x + (lane === 0 ? 38 : 20) * s,
      y,
      pulse: 0,
      manual: false,
      drone: true,
      strong: false,
    };
    if (profile.key === "aquaNeedle") {
      return {
        ...common,
        vx: 700 + state.level * 8 + level * 18,
        vy: aimedVy * 0.72,
        life: 0.74 + level * 0.02,
        kind: "waterBolt",
        damage: Math.max(1, Math.round(state.attackDamage * (0.34 + level * 0.045))),
        critChance: clamp(runCombatStats().crit * 0.42, 0, 34),
        critMult: 1.42,
        rx: (11 + level * 0.7) * s,
        ry: (7 + level * 0.45) * s,
        pierce: level >= 3 && lane === 0 ? 1 : 0,
      };
    }
    if (profile.key === "medicHalo") {
      if (state.health < state.maxHealth * 0.72 || level >= 2) {
        state.shieldTimer = Math.max(state.shieldTimer || 0, 0.16 + level * 0.045);
      }
      return {
        ...common,
        vx: 620 + state.level * 7 + level * 14,
        vy: aimedVy * 0.58,
        life: 0.8 + level * 0.025,
        kind: "neonSyringe",
        damage: Math.max(1, Math.round(state.attackDamage * (0.28 + level * 0.04))),
        critChance: clamp(runCombatStats().crit * 0.38, 0, 30),
        critMult: 1.38,
        rx: (11 + level * 0.6) * s,
        ry: (7 + level * 0.4) * s,
        pierce: 0,
      };
    }
    if (profile.key === "voidCauldron") {
      return {
        ...common,
        vx: 560 + state.level * 6 + level * 12,
        vy: aimedVy * 0.46,
        life: 0.92 + level * 0.03,
        kind: "voidCleaver",
        damage: Math.max(1, Math.round(state.attackDamage * (0.38 + level * 0.055))),
        critChance: clamp(runCombatStats().crit * 0.45, 0, 34),
        critMult: 1.48,
        rx: (13 + level * 0.8) * s,
        ry: (9 + level * 0.5) * s,
        pierce: level >= 2 ? 1 : 0,
      };
    }
    if (profile.key === "tigerSpark") {
      return {
        ...common,
        vx: 650 + state.level * 7 + level * 16,
        vy: aimedVy * 0.38,
        life: 0.82 + level * 0.025,
        kind: "metalTigerSlash",
        variant: level >= 3 ? "tigerFang" : "",
        damage: Math.max(1, Math.round(state.attackDamage * (0.48 + level * 0.06))),
        critChance: clamp(runCombatStats().crit * 0.55 + level * 1.5, 0, 42),
        critMult: 1.58,
        rx: (13 + level * 0.75) * s,
        ry: (8 + level * 0.45) * s,
        pierce: level >= 3 ? 1 : 0,
      };
    }
    return {
      ...common,
      vx: 640 + state.level * 8 + level * 22,
      vy: lane === 0 ? Math.sin(state.time * 5) * 30 * s : aimedVy * 0.28,
      life: 0.78 + level * 0.03,
      kind: "poop",
      damage: Math.max(1, Math.round(state.attackDamage * (0.4 + level * 0.055))),
      critChance: clamp(runCombatStats().crit * 0.56, 0, 40),
      critMult: 1.52,
      rx: (12 + level) * s,
      ry: (9 + level * 0.7) * s,
      pierce: level >= 3 && lane === 0 ? 1 : 0,
      color: "#9d5a2c",
      dark: "#4d2716",
      core: "#dfff7a",
    };
  }

  function updateDrone(dt) {
    const level = runPerkLevel("drone");
    if (level <= 0 || state.mode !== "playing") return;
    const profile = activeDroneProfile();
    state.droneShootTimer -= dt;
    if (state.droneShootTimer > 0) return;
    state.droneShootTimer = droneShotInterval(profile, level);
    const shots = [makeDroneProjectile(profile, level, 0)];
    if (level >= 2) shots.push(makeDroneProjectile(profile, level, 1));
    pushProjectiles(shots);
  }

  function isLandscapePlay() {
    return state.width > state.height * 1.12 && state.height <= 640;
  }

  function playScale() {
    return isLandscapePlay() ? clamp(state.height / 680, 0.5, 0.7) : 1;
  }

  function landscapeTightness() {
    return isLandscapePlay() ? clamp((560 - state.height) / 260, 0, 1) : 0;
  }

  function heroScale() {
    return playScale() * (isLandscapePlay() ? 0.78 : 1);
  }

  function baseHeroX() {
    return isLandscapePlay() ? clamp(state.width * 0.14, 94, 126) : Math.min(162, state.width * 0.2);
  }

  function heroFreeMove() {
    return !!heroProfile().freeMove;
  }

  function heroXBounds() {
    if (heroFreeMove()) {
      const padding = Math.max((hero.radiusX || 44) + 10, isLandscapePlay() ? 46 : 42);
      return { left: padding, right: Math.max(padding + 80, state.width - padding) };
    }
    const left = isLandscapePlay() ? Math.max(76, state.width * 0.08) : Math.max(68, state.width * 0.12);
    const right = isLandscapePlay() ? Math.min(state.width * 0.42, 390) : Math.min(state.width * 0.46, 240);
    return { left, right: Math.max(left + 42, right) };
  }

  function hazardScale() {
    return playScale() * (isLandscapePlay() ? 0.98 : 1.06);
  }

  function bossScale() {
    return playScale() * (isLandscapePlay() ? 0.97 : 1.02);
  }

  function bossAttackScale() {
    return playScale() * (isLandscapePlay() ? 0.8 : 1.04);
  }

  function landscapeHitScale() {
    return isLandscapePlay() ? 0.89 : 1;
  }

  function playTop() {
    return isLandscapePlay() ? Math.max(62, state.height * 0.16) : 76;
  }

  function playBottom() {
    const margin = isLandscapePlay() ? Math.max(58, state.height * 0.15) : 78;
    return state.height - margin;
  }

  function randomLaneY(margin = 0) {
    const min = playTop() + margin;
    const max = playBottom() - margin;
    return min < max ? random(min, max) : (playTop() + playBottom()) * 0.5;
  }

  function updateAppHeight() {
    document.documentElement.style.setProperty("--app-height", `${Math.max(240, window.innerHeight)}px`);
  }

  function updateHeroCollision() {
    const s = heroScale();
    hero.radiusX = 44 * s;
    hero.radiusY = 31 * s;
  }

  function resize() {
    updateAppHeight();
    const bounds = canvas.getBoundingClientRect();
    const landscape = bounds.width > bounds.height * 1.12 && bounds.height <= 640;
    const maxDpr = isSmoothQuality() ? (landscape ? 1.15 : 1.35) : (landscape ? 1.65 : 2);
    state.dpr = Math.max(1, Math.min(maxDpr, window.devicePixelRatio || 1));
    canvas.width = Math.round(bounds.width * state.dpr);
    canvas.height = Math.round(bounds.height * state.dpr);
    state.width = bounds.width;
    state.height = bounds.height;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    updateHeroCollision();
    if (heroFreeMove()) {
      const xBounds = heroXBounds();
      hero.x = clamp(hero.x || baseHeroX(), xBounds.left, xBounds.right);
      state.dragTargetX = clamp(state.dragTargetX || hero.x, xBounds.left, xBounds.right);
    } else {
      hero.x = baseHeroX();
      state.dragTargetX = hero.x;
    }
    hero.y = clamp(hero.y || state.height * 0.5, playTop() + hero.radiusY, playBottom() - hero.radiusY);
    state.dragTargetY = clamp(state.dragTargetY || hero.y, playTop() + hero.radiusY, playBottom() - hero.radiusY);
    updateOrientationHint();
  }

  function refreshHeroStatsFromMeta() {
    const bonus = heroBonus();
    const healthRatio = state.maxHealth > 0 ? state.health / state.maxHealth : 1;
    const energyRatio = state.maxEnergy > 0 ? state.energy / state.maxEnergy : 1;
    state.maxHealth = 100 + bonus.health;
    state.maxEnergy = 100 + bonus.energy;
    state.health = clamp(Math.max(state.health, state.maxHealth * healthRatio), 0, state.maxHealth);
    state.energy = clamp(Math.max(state.energy, state.maxEnergy * energyRatio), 0, state.maxEnergy);
    state.attackDamage = 1 + bonus.attack;
    state.scoreBonus = bonus.score;
  }

  function resetGame() {
    if (!consumeTrialAccessForRun()) {
      return false;
    }
    scheduleGameplayAssetWarmup("start");
    const stage = activeStage();
    const bonus = heroBonus();
    hazards.length = 0;
    pickups.length = 0;
    particles.length = 0;
    projectiles.length = 0;
    floaters.length = 0;
    boss = null;
    hidePerkChoice();
    state.mode = "playing";
    state.stageBossSpawned = false;
    state.stageCompleted = false;
    state.stageTarget = isStageMode() ? stage.target : 0;
    state.stageHitLimit = isStageMode() ? stage.hitLimit : 0;
    state.hitsTaken = 0;
    state.stageFailReason = "";
    state.dailyTimeLeft = state.gameMode === "daily" ? 60 : 0;
    state.dailyDamage = 0;
    state.dailyBossKey = state.gameMode === "daily" ? dailyBossProfile().key : "";
    state.dailyBossDefeated = false;
    state.time = 0;
    state.score = 0;
    state.level = 1;
    state.xp = 0;
    state.xpToNext = 100;
    state.combo = 0;
    state.comboTimer = 0;
    state.nextComboReward = 8;
    state.runStats = emptyRunStats();
    state.runRecorded = false;
    resetRunPerks();
    state.runModifier = pickRunModifier();
    state.missionBonusClaimed = false;
    state.recommendedPerkKey = "";
    state.perkChoiceTimer = 0;
    state.reviveUsed = false;
    state.droneShootTimer = 0.8;
    createRunMissions();
    state.maxHealth = 100 + bonus.health;
    state.health = state.maxHealth;
    state.maxEnergy = 100 + bonus.energy;
    state.energy = Math.max(92, state.maxEnergy * 0.82);
    state.attackDamage = 1 + bonus.attack;
    state.scoreBonus = bonus.score;
    state.specialTimer = 0;
    state.bossLevel = 1;
    state.nextBossScore = 700;
    state.bossRewardTimer = 0;
    state.shieldTimer = 0;
    state.magnetTimer = 0;
    state.eventTimer = 0;
    state.eventLabelTimer = 2.1;
    state.feverTimer = 0;
    state.comboSurgeTimer = 0;
    state.elementSurgeTimer = 0;
    state.elementSurgeKind = "";
    state.elementSurgePulse = 0;
    state.starTrailCharge = 0;
    state.starTrailLanePhase = random(0, Math.PI * 2);
    state.starTrailPulse = 0;
    state.mirrorCharge = 0;
    state.mirrorLanePhase = random(0, Math.PI * 2);
    state.mirrorPulse = 0;
    state.mirrorGuardTimer = 0;
    state.forgeHeat = 0;
    state.forgeLanePhase = random(0, Math.PI * 2);
    state.forgePulse = 0;
    state.forgeTempoTimer = 0;
    state.adventureExplore = 0;
    state.adventureIntel = 0;
    state.adventureCargo = 0;
    state.adventureRoutePulse = 0;
    state.adventureContractProgress = 0;
    state.adventureContractClaimed = state.gameMode !== "adventure";
    state.adventureContractPulse = 0;
    state.adventureContractBoostTimer = 0;
    state.adventureRouteMilestoneMask = 0;
    state.adventureContractMilestoneMask = 0;
    state.adventureSupportTimer = 0;
    state.adventureSupportPulse = 0;
    state.adventureCurrentCharge = 0;
    state.adventureLanePhase = random(0, Math.PI * 2);
    state.adventurePulse = 0;
    state.adventureBoostTimer = 0;
    state.classicLanePhase = random(0, Math.PI * 2);
    state.classicDistrictProgress = 0;
    state.classicDistrictTarget = state.gameMode === "stage" ? classicDistrictTarget(stage) : 0;
    state.classicDistrictClaimed = state.gameMode !== "stage";
    state.classicDistrictMilestone = 0;
    state.classicDistrictPulse = 0;
    state.classicDistrictBoostTimer = 0;
    state.classicRouteFocusKey = "";
    state.classicRouteFocusTimer = 0;
    state.classicRouteFocusPulse = 0;
    state.classicRouteClearPulse = 0;
    state.classicRouteClearStreak = 0;
    state.classicRouteLastClearGroup = "";
    state.classicGreenWaveCharge = 0;
    state.classicGreenWavePulse = 0;
    state.classicGreenWaveReliefTimer = 0;
    state.goldRushCharge = 0;
    state.draftLaneCharge = 0;
    state.mysteryLaneCharge = 0;
    state.mysteryLanePhase = random(0, Math.PI * 2);
    state.mysteryPulse = 0;
    state.classicEventPulse = 0;
    state.purificationPulse = 0;
    state.counterTimer = 0;
    state.counterStacks = 0;
    state.counterPulse = 0;
    state.nextFeverCombo = 12;
    state.nearMissTimer = 0;
    state.hurtFlashTimer = 0;
    state.recoveryTimer = 0;
    state.dangerLevel = 0;
    state.nextEventScore = state.gameMode === "adventure"
      ? 260
      : state.gameMode === "stage"
        ? Math.floor(clamp(stage.target * 0.22, 230, 360))
        : 360;
    state.eventKind = "";
    state.eventName = runModifier().name;
    state.styleScore = 0;
    state.styleTimer = 0;
    state.draftTimer = 0;
    state.spawnTimer = state.gameMode === "daily" ? 4.2 : 2.7;
    state.lastHazardPatternKey = "";
    state.routeHazardSerial = 0;
    state.pickupTimer = 0.8;
    state.scroll = 0;
    state.speed = 185;
    state.shake = 0;
    state.sceneTransitionTimer = 0;
    state.sceneLoadReliefTimer = 0;
    state.backgroundFrameKey = "";
    state.backgroundCurrentFrame = null;
    state.backgroundPreviousFrame = null;
    state.shootCooldown = 0;
    state.autoShootTimer = autoShootInterval() * 0.55;
    state.strongAutoTimer = 0.36;
    state.ultimateTimer = 0;
    state.ultimateCooldown = 0;
    state.ultimatePulse = 0;
    state.ultimateKind = heroProfile().ultimate || "poop";
    state.ultimateBreakTick = 0;
    state.mountCharge = 18 + effectiveMountLevel() * 1.6;
    state.mountCooldown = 2.2;
    state.mountSkillTimer = 0;
    state.mountSkillKind = "";
    state.lastHeroAttackAt = 0;
    state.lastShotAt = 0;
    state.lastCanvasAttackAt = 0;
    clearStrongTapBuffer();
    state.strongTapHintTimer = 0;
    state.dragPointerId = null;
    updateHeroCollision();
    hero.y = isLandscapePlay() ? (playTop() + playBottom()) * 0.52 : state.height * 0.43;
    hero.x = heroFreeMove() ? clamp(baseHeroX() + 18 * playScale(), heroXBounds().left, heroXBounds().right) : baseHeroX();
    state.dragTargetX = hero.x;
    state.dragTargetY = hero.y;
    state.dragLastX = hero.x;
    state.dragLastY = hero.y;
    hero.vy = -220;
    hero.invuln = 1.8;
    hero.flap = 0;
    hideMenu();
    resetRunItemLoadout();
    applyOpeningConsumables();
    updateMetaUi();
    beep(380, 0.08, "triangle", 0.05);
    return true;
  }

  function showMenu(copy, startLabel, restartVisible = false, options = {}) {
    stopBgm(true);
    const pauseOpen = !!options.pause;
    const resultOpen = !pauseOpen && (state.mode === "gameover" || state.mode === "stageclear");
    menuPanel.hidden = false;
    document.body.classList.add("menu-open");
    menuPanel.classList.toggle("is-compact", restartVisible || state.mode !== "ready");
    menuPanel.classList.toggle("pause-open", pauseOpen);
    menuPanel.classList.toggle("result-open", resultOpen);
    if (pauseOpen) {
      menuPanel.classList.remove("module-open");
      if (moduleHeader) moduleHeader.hidden = true;
    } else {
      setMenuPage("home");
    }
    const missionInfo = (state.mode === "gameover" || state.mode === "stageclear") ? runMissionSummary() : "";
    setPanelCopy(missionInfo && !copy.includes("悬赏") ? `${copy}${missionInfo}` : copy, runSummaryItems());
    startButton.textContent = startLabel;
    restartButton.hidden = !restartVisible;
    if (homeButton) homeButton.hidden = !(pauseOpen || resultOpen);
  }

  function hideMenu() {
    menuPanel.hidden = true;
    document.body.classList.remove("menu-open");
    menuPanel.classList.remove("is-compact");
    menuPanel.classList.remove("module-open");
    menuPanel.classList.remove("pause-open");
    menuPanel.classList.remove("result-open");
    if (homeButton) homeButton.hidden = true;
    if (state.mode === "playing") startBgm();
  }

  function gameOver() {
    state.mode = "gameover";
    hidePerkChoice();
    state.best = Math.max(state.best, Math.floor(state.score));
    storageSet("shitSupermanBest", String(state.best));
    finalizeRunStats("gameover");
    if (state.gameMode === "endless") {
      const heroKey = meta.selectedHero;
      if (!meta.heroStoneClaims) meta.heroStoneClaims = { ...metaDefaults.heroStoneClaims };
      if (!Array.isArray(meta.heroStoneClaims[heroKey])) meta.heroStoneClaims[heroKey] = [];
      const heroClaims = meta.heroStoneClaims[heroKey];
      const reachedMilestones = ENDLESS_EVO_STONE_MILESTONES.filter((score) => state.score >= score);
      const newMilestones = reachedMilestones.filter((score) => !heroClaims.includes(score));
      if (newMilestones.length > 0) {
        addHeroEvoStones(newMilestones.length, heroKey);
        heroClaims.push(...newMilestones);
        heroClaims.sort((a, b) => a - b);
        saveMeta();
        showRewardToast([{ type: "stone", label: `${heroLabel(heroKey)}专属进化石`, amount: newMilestones.length }]);
        showMenu(`无尽得分 ${Math.floor(state.score)}，${heroLabel(heroKey)}首次达成 ${newMilestones.map(formatScore).join("、")} 分，获得 ${newMilestones.length} 颗专属进化石。`, "重开", false);
      } else {
        const nextMilestone = ENDLESS_EVO_STONE_MILESTONES.find((score) => !heroClaims.includes(score));
        const hint = nextMilestone
          ? `${heroLabel(heroKey)}下一个专属进化石目标：${formatScore(nextMilestone)} 分。`
          : `${heroLabel(heroKey)}的四个专属进化石里程碑已经全部领取。`;
        showMenu(`无尽得分 ${Math.floor(state.score)}。${hint}`, "重开", false);
      }
    } else if (state.gameMode === "daily") {
      settleDailyChallenge();
    } else {
      const reason = state.stageFailReason ? `${state.stageFailReason}，` : "";
      const stage = activeStage();
      const modeName = state.gameMode === "adventure" ? "冒险" : "";
      showMenu(`${modeName}第 ${stage.number} 关${reason}挑战失败，升级或带道具再来。`, "重开", false);
    }
    beep(120, 0.16, "sawtooth", 0.04);
  }

  function dailyBossClearReward(totalDamage = state.dailyDamage) {
    const targetPower = Math.max(1, dailyBossTargetPower());
    const rewardBase = Math.max(targetPower, Math.floor(totalDamage || 0));
    return {
      coins: Math.max(52000, runCoinReward(Math.floor(rewardBase * 2.4))),
      materials: Math.max(2200, runMaterialReward(Math.floor(rewardBase / 8))),
      poopCoins: 5,
      energy: 5,
      shield: 3,
      storm: 2,
      reroll: 1,
      wing: 1,
    };
  }

  function settleDailyChallenge() {
    const date = todayKey();
    if (meta.dailyChallenge.date !== date) {
      meta.dailyChallenge.date = date;
      meta.dailyChallenge.rewardedDamage = 0;
      meta.dailyChallenge.bossDefeated = false;
    }
    const totalDamage = Math.floor(state.dailyDamage);
    const rewardableDamage = Math.max(0, totalDamage - meta.dailyChallenge.rewardedDamage);
    const coins = runCoinReward(Math.floor(rewardableDamage * 1.15));
    const materials = runMaterialReward(Math.floor(rewardableDamage / 65));
    const energy = rewardableDamage >= 1200 ? 1 : 0;
    const shield = rewardableDamage >= 2400 ? 1 : 0;
    const clearReward = state.dailyBossDefeated && !meta.dailyChallenge.bossDefeated
      ? dailyBossClearReward(totalDamage)
      : null;
    if (rewardableDamage > 0 || clearReward) {
      meta.dailyChallenge.rewardedDamage = totalDamage;
      meta.coins += coins;
      meta.materials += materials;
      meta.inventory.energy += energy;
      meta.inventory.shield += shield;
      if (clearReward) {
        meta.dailyChallenge.bossDefeated = true;
        meta.coins += clearReward.coins;
        meta.materials += clearReward.materials;
        meta.poopCoins = (meta.poopCoins || 0) + clearReward.poopCoins;
        meta.inventory.energy += clearReward.energy;
        meta.inventory.shield += clearReward.shield;
        meta.inventory.storm += clearReward.storm;
        meta.inventory.reroll += clearReward.reroll;
        meta.inventory.wing += clearReward.wing;
      }
      saveMeta();
      const rewardToast = [
        ...(coins ? [{ type: "coin", amount: coins }] : []),
        ...(materials ? [{ type: "material", amount: materials }] : []),
        ...(energy ? [{ type: "energy", amount: energy }] : []),
        ...(shield ? [{ type: "shield", amount: shield }] : []),
        ...(clearReward ? [
          { type: "coin", amount: clearReward.coins },
          { type: "material", amount: clearReward.materials },
          { type: "poopCoin", amount: clearReward.poopCoins },
          { type: "energy", amount: clearReward.energy },
          { type: "shield", amount: clearReward.shield },
          { type: "storm", amount: clearReward.storm },
          { type: "reroll", amount: clearReward.reroll },
          { type: "wing", amount: clearReward.wing },
        ] : []),
      ];
      showRewardToast(rewardToast);
    }
    const bossName = dailyBossProfile(date).name;
    const itemText = [energy ? "能量 +1" : "", shield ? "护盾 +1" : ""].filter(Boolean).join("、");
    const clearText = clearReward
      ? `首次击败奖励：${clearReward.coins} 金币、${clearReward.materials} 材料、便便币 +5、能量 +${clearReward.energy}、护盾 +${clearReward.shield}、臭弹 +${clearReward.storm}、重骰 +${clearReward.reroll}、羽翼 +${clearReward.wing}。`
      : state.dailyBossDefeated && meta.dailyChallenge.bossDefeated
        ? "今日击败奖励已领取。"
        : "";
    const rewardText = rewardableDamage > 0
      ? `新增伤害 ${rewardableDamage}，获得 ${coins} 金币、${materials} 材料${itemText ? `、${itemText}` : ""}。`
      : "今日奖励已按最高伤害领取，刷新更高伤害可补领奖励。";
    showMenu(`每日挑战 ${bossName}：造成 ${totalDamage} 伤害。${rewardText}${clearText ? ` ${clearText}` : ""}`, "再挑战", false);
  }

  function endCurrentRun() {
    if (state.mode !== "playing" && state.mode !== "paused") return;
    keys.clear();
    state.dragPointerId = null;
    gameOver();
  }

  function togglePause() {
    if (state.mode === "playing") {
      state.mode = "paused";
      showMenu("暂停中", "继续", true, { pause: true });
    } else if (state.mode === "paused") {
      state.mode = "playing";
      hideMenu();
    }
  }

  function returnHomeFromPause() {
    if (!["paused", "gameover", "stageclear"].includes(state.mode)) return;
    keys.clear();
    state.dragPointerId = null;
    state.mode = "ready";
    showMenu("冲破马桶机器人的封锁，用便便弹把纸卷带回城市。", "开始游戏", false);
  }

  function fullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
  }

  function shouldShowOrientationHint() {
    return window.innerHeight > window.innerWidth * 1.06;
  }

  function updateOrientationHint() {
    if (!orientationHint) return;
    const show = shouldShowOrientationHint();
    orientationHint.hidden = !show;
    document.body.classList.toggle("portrait-hint-open", show);
  }

  function updateFullscreenButton() {
    if (!fullscreenButton) return;
    fullscreenButton.textContent = fullscreenElement() ? "退出" : "全屏";
  }

  async function lockLandscapeExperience() {
    try {
      if (!fullscreenElement()) {
        const target = gameShell || document.documentElement;
        const request = target.requestFullscreen || target.webkitRequestFullscreen || target.msRequestFullscreen;
        if (request) await request.call(target);
      }
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock("landscape").catch(() => {});
      }
    } catch {}
    updateFullscreenButton();
    resize();
    updateOrientationHint();
  }

  async function toggleFullscreen() {
    if (!fullscreenButton) return;
    try {
      if (fullscreenElement()) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) await exit.call(document);
      } else {
        await lockLandscapeExperience();
        return;
      }
    } catch {}
    updateFullscreenButton();
    resize();
    updateOrientationHint();
  }

  function update(dt) {
    if (state.mode !== "playing") return;

    state.time += dt;
    updateBgm();
    if (state.gameMode === "daily") {
      state.dailyTimeLeft = Math.max(0, state.dailyTimeLeft - dt);
      if (state.dailyTimeLeft <= 0) {
        gameOver();
        return;
      }
    }
    updateHeroCollision();
    state.recoveryTimer = Math.max(0, state.recoveryTimer - dt);
    const modifier = runModifier();
    state.dangerLevel = directorPressure();
    const activeRunStage = isStageMode() ? activeStage() : null;
    const stageNo = activeRunStage ? activeRunStage.number : 0;
    const classicProfile = state.gameMode === "stage" && activeRunStage ? classicStageProfile(activeRunStage) : null;
    const stageBoost = isStageMode() ? stageNo * (state.gameMode === "adventure" ? (stageNo <= 10 ? 2.45 : 3.05) : 2.8) : 0;
    const recoverySlow = state.recoveryTimer > 0 ? 14 : 0;
    const landscapeSpeedEase = isLandscapePlay() ? 0.92 : 1;
    state.speed = (182 + stageBoost + Math.min(136, state.time * 2.25) + state.dangerLevel * 28 - recoverySlow) * landscapeSpeedEase;
    state.scroll += state.speed * dt;
    prepareBackgroundTransition();
    const movementScoreBoost = state.controlMode === "tap" ? 1.2 : 1;
    const feverBoost = state.feverTimer > 0 ? 1.35 : 1;
    const draftBoost = state.draftTimer > 0 ? 1.16 : 1;
    const comboSurgeBoost = state.comboSurgeTimer > 0 ? 1.12 : 1;
    const forgeTempoBoost = state.forgeTempoTimer > 0 ? 1.08 : 1;
    const adventureBoost = state.adventureBoostTimer > 0 ? 1.08 : 1;
    const contractBoost = state.adventureContractBoostTimer > 0 ? 1.07 : 1;
    const adventureSupportBoost = state.adventureSupportTimer > 0 ? 1.08 : 1;
    const classicScoreBoost = classicProfile ? (classicProfile.scoreBoost || 1) : 1;
    const districtBoost = state.classicDistrictBoostTimer > 0 ? 1.05 : 1;
    addScore((dt * 12 + state.combo * dt * 1.8) * movementScoreBoost * feverBoost * draftBoost * comboSurgeBoost * forgeTempoBoost * adventureBoost * contractBoost * adventureSupportBoost * classicScoreBoost * districtBoost * styleMultiplier() * (modifier.score || 1));
    state.energy = clamp(state.energy + dt * (7.8 + state.level * 0.08 + (state.feverTimer > 0 ? 3.5 : 0) + (state.draftTimer > 0 ? 2.6 : 0) + (state.comboSurgeTimer > 0 ? 1.7 : 0) + (state.forgeTempoTimer > 0 ? 1.45 : 0) + (state.adventureBoostTimer > 0 ? 1.35 : 0) + (state.adventureContractBoostTimer > 0 ? 1.25 : 0) + (state.adventureSupportTimer > 0 ? 1.35 : 0) + (state.classicDistrictBoostTimer > 0 ? 1.2 : 0)) * (modifier.energy || 1), 0, state.maxEnergy);
    if (classicProfile) updateClassicRouteFocus(dt, classicProfile);
    const runStats = runCombatStats();
    if (runStats.regen > 0 && state.health > 0 && state.health < state.maxHealth) {
      state.health = clamp(state.health + dt * (runStats.regen * 0.18 + state.maxHealth * Math.min(0.0025, runStats.regen * 0.00005)), 0, state.maxHealth);
    }
    gainXp(dt * 0.9, false);
    state.shootCooldown = Math.max(0, state.shootCooldown - dt);
    state.autoShootTimer = Math.max(0, state.autoShootTimer - dt);
    state.strongAutoTimer = Math.max(0, (state.strongAutoTimer || 0) - dt);
    state.strongTapHintTimer = Math.max(0, (state.strongTapHintTimer || 0) - dt);
    state.ultimateCooldown = Math.max(0, state.ultimateCooldown - dt);
    state.ultimateTimer = Math.max(0, state.ultimateTimer - dt);
    state.ultimateBreakTick = Math.max(0, state.ultimateBreakTick - dt);
    state.ultimatePulse += dt;
    updateMount(dt);
    state.specialTimer = Math.max(0, state.specialTimer - dt);
    state.bossRewardTimer = Math.max(0, state.bossRewardTimer - dt);
    state.shieldTimer = Math.max(0, state.shieldTimer - dt);
    state.magnetTimer = Math.max(0, state.magnetTimer - dt);
    state.eventTimer = Math.max(0, state.eventTimer - dt);
    state.eventLabelTimer = Math.max(0, state.eventLabelTimer - dt);
    state.feverTimer = Math.max(0, state.feverTimer - dt);
    state.comboSurgeTimer = Math.max(0, (state.comboSurgeTimer || 0) - dt);
    state.adventureContractPulse = Math.max(0, (state.adventureContractPulse || 0) - dt * 0.92);
    state.adventureContractBoostTimer = Math.max(0, (state.adventureContractBoostTimer || 0) - dt);
    state.adventureSupportTimer = Math.max(0, (state.adventureSupportTimer || 0) - dt);
    state.adventureSupportPulse = Math.max(0, (state.adventureSupportPulse || 0) - dt * 0.82);
    state.elementSurgeTimer = Math.max(0, (state.elementSurgeTimer || 0) - dt);
    state.elementSurgePulse = Math.max(0, (state.elementSurgePulse || 0) - dt * 0.85);
    state.classicDistrictPulse = Math.max(0, (state.classicDistrictPulse || 0) - dt * 0.9);
    state.classicDistrictBoostTimer = Math.max(0, (state.classicDistrictBoostTimer || 0) - dt);
    state.classicRouteFocusTimer = Math.max(0, (state.classicRouteFocusTimer || 0) - dt);
    state.classicRouteFocusPulse = Math.max(0, (state.classicRouteFocusPulse || 0) - dt * 0.92);
    state.classicRouteClearPulse = Math.max(0, (state.classicRouteClearPulse || 0) - dt * 1.15);
    if (state.classicRouteFocusTimer <= 0) state.classicRouteFocusKey = "";
    state.purificationPulse = Math.max(0, (state.purificationPulse || 0) - dt * 0.88);
    if (state.counterTimer > 0) {
      state.counterTimer = Math.max(0, state.counterTimer - dt);
    } else {
      state.counterStacks = 0;
    }
    state.counterPulse = Math.max(0, (state.counterPulse || 0) - dt);
    state.nearMissTimer = Math.max(0, state.nearMissTimer - dt);
    state.hurtFlashTimer = Math.max(0, state.hurtFlashTimer - dt);
    state.sceneTransitionTimer = Math.max(0, state.sceneTransitionTimer - dt);
    state.sceneLoadReliefTimer = Math.max(0, state.sceneLoadReliefTimer - dt);
    state.backgroundWarmTimer = Math.max(0, (state.backgroundWarmTimer || 0) - dt);
    if (state.backgroundWarmTimer <= 0) {
      warmUpcomingBackgrounds();
      state.backgroundWarmTimer = 0.55;
    }
    state.draftTimer = Math.max(0, state.draftTimer - dt);
    state.styleTimer = Math.max(0, state.styleTimer - dt);
    if (state.styleTimer <= 0) {
      state.styleScore = Math.max(0, state.styleScore - dt * (state.comboTimer > 0 ? 3.4 : 7.5));
    }
    if (state.eventTimer <= 0 && state.eventKind) {
      if (state.eventKind === "goldRush") state.goldRushCharge = 0;
      if (state.eventKind === "draftGate") state.draftLaneCharge = 0;
      if (state.eventKind === "mysteryRoute") state.mysteryLaneCharge = 0;
      if (state.eventKind === "starTrail") state.starTrailCharge = 0;
      if (state.eventKind === "mirrorCurrent") state.mirrorCharge = 0;
      if (state.eventKind === "auroraForge") state.forgeHeat = 0;
      if (state.eventKind === "adventureCurrent") state.adventureCurrentCharge = 0;
      state.eventKind = "";
      state.eventName = "";
    }
    state.comboTimer = Math.max(0, state.comboTimer - dt);
    if (state.comboSurgeTimer > 0 && state.combo > 0) {
      state.comboTimer = Math.max(state.comboTimer, 1.85);
      state.styleTimer = Math.max(state.styleTimer, 0.35);
    }
    state.shake = SCREEN_SHAKE_ENABLED ? Math.max(0, state.shake - dt * 18) : 0;
    hero.invuln = Math.max(0, hero.invuln - dt);
    updateAdventureRoute(dt);
    if (state.gameMode !== "daily") {
      maybeStartEvent();
      prepareBackgroundTransition();
    }

    const thrusting = keys.has("Space") || keys.has("ArrowUp") || keys.has("KeyW") || keys.has("PointerFly");
    const dragging = state.controlMode === "drag" && state.dragPointerId !== null;
    const freeMove = heroFreeMove();
    if (dragging) {
      const target = clamp(state.dragTargetY, playTop() + hero.radiusY, playBottom() - hero.radiusY);
      const prevY = hero.y;
      const follow = freeMove
        ? Math.min(isLandscapePlay() ? 0.24 : 0.28, dt * (isLandscapePlay() ? 4.2 : 4.5))
        : Math.min(isLandscapePlay() ? 0.18 : 0.24, dt * (isLandscapePlay() ? 2.55 : 3.15));
      hero.y += (target - hero.y) * follow;
      hero.vy = clamp((hero.y - prevY) / Math.max(dt, 0.001), freeMove ? -300 : isLandscapePlay() ? -190 : -220, freeMove ? 300 : isLandscapePlay() ? 190 : 220);
      if (freeMove) {
        const xBounds = heroXBounds();
        const targetX = clamp(state.dragTargetX || hero.x, xBounds.left, xBounds.right);
        const xFollow = Math.min(isLandscapePlay() ? 0.22 : 0.24, dt * (isLandscapePlay() ? 3.8 : 4.1));
        hero.x += (targetX - hero.x) * xFollow;
      }
      hero.flap = 0.62;
      addTrail(hero.x - 44 * playScale(), hero.y + 16 * playScale());
    } else if (thrusting) {
      hero.vy -= (isLandscapePlay() ? 1110 : 1320) * dt;
      if (freeMove) {
        const xBounds = heroXBounds();
        hero.x = clamp(hero.x + (isLandscapePlay() ? 46 : 34) * dt, xBounds.left, xBounds.right);
        state.dragTargetX = hero.x;
      }
      hero.flap += dt * 20;
      addTrail(hero.x - 44 * playScale(), hero.y + 16 * playScale());
    } else {
      hero.flap = Math.max(0, hero.flap - dt * 8);
      if (!freeMove) {
        hero.x += (baseHeroX() - hero.x) * Math.min(1, dt * 4);
      }
    }

    if (!dragging) {
      hero.vy += (isLandscapePlay() ? 460 : 510) * (modifier.gravity || 1) * dt;
      hero.vy = clamp(hero.vy, isLandscapePlay() ? -360 : -430, isLandscapePlay() ? 285 : 330);
      hero.y += hero.vy * dt;
    }
    const top = playTop() + hero.radiusY;
    const bottom = playBottom() - hero.radiusY;
    if (hero.y < top) {
      hero.y = top;
      hero.vy = 80;
    }
    if (hero.y > bottom) {
      hero.y = bottom;
      hero.vy = -150;
      hero.invuln = Math.max(hero.invuln, 0.18);
      pop(hero.x, hero.y + hero.radiusY * 0.5, "#fff0a8", 5);
    }
    updateClassicEvents(dt);
    updateAdventureCurrent(dt);
    updateStarTrail(dt);
    updateMirrorCurrent(dt);
    updateAuroraForge(dt);

    if (state.autoShootTimer <= 0) {
      shoot(false);
      state.autoShootTimer = autoShootInterval();
    }
    updateAutoStrongAttack(dt);
    updateDrone(dt);

    maybeSpawnBoss();
    maybeCompleteStage();
    if (state.gameMode !== "daily") spawnHazards(dt);
    spawnPickups(dt);
    updateProjectiles(dt);
    updateUltimate(dt);
    updateBoss(dt);
    updatePerkChoice(dt);
    updateHazards(dt);
    updatePickups(dt);
    updateParticles(dt);
    trimPlayArrays();
    updateHud();
  }

  function addMountCharge(amount) {
    if (state.mode !== "playing" || amount <= 0 || !mountRiding()) return;
    const level = effectiveMountLevel();
    const gain = amount * (1 + Math.min(0.38, level * 0.018));
    state.mountCharge = clamp((state.mountCharge || 0) + gain, 0, 100);
  }

  function updateMount(dt) {
    if (!mountRiding()) return;
    state.mountCooldown = Math.max(0, (state.mountCooldown || 0) - dt);
    state.mountSkillTimer = Math.max(0, (state.mountSkillTimer || 0) - dt);
    addMountCharge(dt * (3.2 + effectiveMountLevel() * 0.12));
    if ((state.mountCharge || 0) < 100 || state.mountCooldown > 0) return;
    const profile = mountProfile();
    if (profile.key === "plungerBoard") {
      const threat = nearestMountThreat();
      if (threat) triggerMountDash(threat);
    } else if (profile.key === "slimeSkate") {
      if (hazards.some((h) => h.x > hero.x - 80 && h.x < hero.x + 360) || boss) triggerMountSlime();
    } else if (profile.key === "thunderSeat") {
      if (boss || hazards.some((h) => h.type === "toilet" && h.x > hero.x && h.x < state.width + 80)) triggerMountLightning();
    } else if (profile.key === "rocketToilet") {
      if (nearestMountThreat() || hazards.some((h) => h.x > hero.x && h.x < hero.x + 460 * playScale())) triggerMountRocket();
    } else if (profile.key === "crystalDragon") {
      if (hazards.length >= 2 || boss) triggerMountCrystal();
    } else if (profile.key === "nebulaComet") {
      if (boss || hazards.some((h) => h.type === "toilet" && h.x > hero.x - 80 && h.x < state.width + 160)) triggerMountStarfall();
    } else if (profile.key === "woodDragonBoat") {
      if (boss || state.health < state.maxHealth * 0.82 || hazards.some((h) => h.x > hero.x - 70 && h.x < hero.x + 360 * playScale())) triggerMountWoodDragon();
    } else if (profile.key === "gravityCauldron") {
      if (boss || hazards.length >= 2 || nearestMountThreat()) triggerMountGravityCauldron();
    } else if (profile.key === "ambulanceHover") {
      if (state.health < state.maxHealth * 0.72 || boss || nearestMountThreat()) triggerMountAmbulanceHover();
    } else if (profile.key === "metalTigerChariot") {
      if (boss || nearestMountThreat() || hazards.some((h) => h.type === "toilet" && h.x > hero.x && h.x < hero.x + 520 * playScale())) triggerMountMetalTiger();
    } else if (profile.key === "fiveElementKirin") {
      if (boss || hazards.length >= 3 || state.energy < state.maxEnergy * 0.45) triggerMountKirin();
    }
  }

  function hasAutoStrongTarget() {
    if (boss) return true;
    const s = playScale();
    return hazards.some((h) => {
      if (!h || h.type !== "toilet") return false;
      return h.x > hero.x + 70 * s && h.x < state.width + 70 * s;
    });
  }

  function updateAutoStrongAttack(dt) {
    if (state.mode !== "playing") return;
    if (state.strongAutoTimer > 0 || !strongAttackReady()) return;
    if (!hasAutoStrongTarget()) return;
    const before = state.energy;
    shoot(true, { source: "auto" });
    if (state.energy < before) {
      state.strongAutoTimer = clamp(0.58 - attackTier() * 0.015, 0.34, 0.58);
    } else {
      state.strongAutoTimer = 0.12;
    }
  }

  function nearestMountThreat() {
    const s = playScale();
    let best = null;
    let bestScore = Infinity;
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x;
      const hy = h.y || (playTop() + playBottom()) * 0.5;
      if (hx < hero.x - 44 * s || hx > hero.x + 238 * s) continue;
      const dx = Math.max(0, hx - hero.x);
      const dy = Math.abs(hy - hero.y);
      const danger = h.bossDamage ? 0.72 : h.elite ? 0.86 : 1;
      const score = dx * danger + dy * 1.25;
      if (dy < hero.radiusY + Math.max(h.h || h.w || 42 * s, 42 * s) * 0.58 + 38 * s && score < bestScore) {
        best = h;
        bestScore = score;
      }
    }
    return best;
  }

  function spendMountCharge(kind, cooldown, color) {
    state.mountCharge = 0;
    state.mountCooldown = cooldown;
    state.mountSkillTimer = 0.72;
    state.mountSkillKind = kind;
    state.shake = Math.max(state.shake, 5);
    pop(hero.x, hero.y, color, 18);
    spawnMountParticles(color, 14);
    beep(kind === "thunderSeat" ? 1240 : kind === "slimeSkate" ? 860 : 760, 0.07, "triangle", 0.04);
  }

  function triggerMountDash(threat) {
    const level = effectiveMountLevel();
    const s = playScale();
    const top = playTop() + hero.radiusY;
    const bottom = playBottom() - hero.radiusY;
    const threatY = threat && threat.y ? threat.y : hero.y;
    const roomUp = hero.y - top;
    const roomDown = bottom - hero.y;
    let dir = threatY >= hero.y ? -1 : 1;
    if ((dir < 0 && roomUp < 56 * s) || (dir > 0 && roomDown < 56 * s)) dir *= -1;
    hero.y = clamp(hero.y + dir * (78 + level * 4) * s, top, bottom);
    hero.vy = dir * (isLandscapePlay() ? 150 : 180);
    hero.invuln = Math.max(hero.invuln, 0.46 + level * 0.012);
    state.recoveryTimer = Math.max(state.recoveryTimer, 0.55);
    state.draftTimer = Math.max(state.draftTimer, 1.2 + level * 0.06);
    for (const h of hazards) {
      if (Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y) < (150 + level * 5) * s) {
        h.slow = Math.max(h.slow || 0, 0.8 + level * 0.035);
      }
    }
    gainStyle(10 + Math.floor(level / 2), "坐骑闪避", "#9de8ff");
    state.eventName = "坐骑：闪避冲刺";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1);
    spendMountCharge("plungerBoard", Math.max(3.8, 6.2 - level * 0.12), "#9de8ff");
  }

  function triggerMountSlime() {
    const level = effectiveMountLevel();
    const s = playScale();
    const radius = (172 + level * 9) * s;
    let affected = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dist = Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y);
      if (dist > radius + Math.max(h.w || 0, h.h || 0) * 0.4) continue;
      h.slow = Math.max(h.slow || 0, 1.35 + level * 0.04);
      affected += 1;
      if (h.type === "toilet") {
        h.hp -= Math.max(1, state.attackDamage * (0.9 + level * 0.035));
        h.hit = Math.max(h.hit || 0, 0.18);
        if (h.hp <= 0) destroyHazard(i, h);
      } else if (affected <= 3 && h.bossDamage) {
        hazards.splice(i, 1);
        pop(h.x, h.y, "#a7f04a", 8);
      }
    }
    if (boss && Math.hypot(boss.x - hero.x, boss.y - hero.y) < radius * 1.45) {
      applyBossControl("root", 0.36 + level * 0.012);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.28 + level * 0.012), 0, bossBreakThreshold());
    }
    state.shieldTimer = Math.max(state.shieldTimer, 1.2 + level * 0.04);
    gainStyle(12 + affected, "黏液滑流", "#a7f04a");
    state.eventName = `坐骑：黏液滑流${affected ? ` x${affected}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
    spendMountCharge("slimeSkate", Math.max(4.2, 7.1 - level * 0.13), "#a7f04a");
  }

  function triggerMountLightning() {
    const level = effectiveMountLevel();
    const s = playScale();
    const targets = hazards
      .filter((h) => h && h.type === "toilet" && h.x > hero.x - 40 * s)
      .sort((a, b) => Math.hypot(a.x - hero.x, a.y - hero.y) - Math.hypot(b.x - hero.x, b.y - hero.y))
      .slice(0, 3 + Math.floor(level / 5));
    let hits = 0;
    for (const h of targets) {
      h.hp -= Math.max(2, state.attackDamage * (1.55 + level * 0.06));
      h.hit = Math.max(h.hit || 0, 0.22);
      h.slow = Math.max(h.slow || 0, 0.65);
      hits += 1;
      pop(h.x, h.y, "#c45dff", 10);
      if (h.hp <= 0) {
        const index = hazards.indexOf(h);
        if (index >= 0) destroyHazard(index, h);
      }
    }
    if (boss) {
      const damage = Math.round((state.attackDamage * (2.9 + level * 0.16) + currentEvolution() * 8) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.24);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.36 + level * 0.014), 0, bossBreakThreshold());
      recordRunStat("bossDamage", damage);
      hits += 1;
      pop(boss.x - boss.w * 0.24, boss.y, "#c45dff", 14);
      if (boss.hp <= 0) defeatBoss();
    }
    gainStyle(13 + hits * 2, "连锁闪电", "#c45dff");
    state.eventName = `坐骑：连锁闪电${hits ? ` x${hits}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
    spendMountCharge("thunderSeat", Math.max(4.8, 8.4 - level * 0.12), "#c45dff");
  }

  function triggerMountRocket() {
    const level = effectiveMountLevel();
    const s = playScale();
    let cleared = 0;
    hero.invuln = Math.max(hero.invuln, 0.42 + level * 0.012);
    state.draftTimer = Math.max(state.draftTimer, 1.9 + level * 0.07);
    hero.x = clamp(hero.x + (28 + level * 1.6) * s, heroXBounds().left, heroXBounds().right);
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dx = (h.x || 0) - hero.x;
      const dy = Math.abs((h.y || hero.y) - hero.y);
      if (dx < -90 * s || dx > (420 + level * 8) * s || dy > (118 + level * 3) * s) continue;
      if (h.type === "toilet") {
        h.hp -= Math.max(2, state.attackDamage * (1.4 + level * 0.055));
        h.hit = Math.max(h.hit || 0, 0.22);
        if (h.hp <= 0) {
          destroyHazard(i, h);
          cleared += 1;
        }
      } else if (cleared < 5 || h.bossDamage) {
        hazards.splice(i, 1);
        cleared += 1;
        pop(h.x, h.y, "#ff8d54", 9);
      }
    }
    if (boss && Math.abs(boss.y - hero.y) < 170 * s) {
      const damage = Math.round((state.attackDamage * (2.2 + level * 0.11) + level * 3) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.24);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("manual") * (0.32 + level * 0.012), 0, bossBreakThreshold());
      recordRunStat("bossDamage", damage);
      if (boss.hp <= 0) defeatBoss();
    }
    gainStyle(14 + cleared * 2, "烈焰突进", "#ff8d54");
    state.eventName = `坐骑：烈焰突进${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.1);
    spendMountCharge("rocketToilet", Math.max(4.4, 7.7 - level * 0.13), "#ff8d54");
  }

  function triggerMountCrystal() {
    const level = effectiveMountLevel();
    const s = playScale();
    const radius = (190 + level * 10) * s;
    let frozen = 0;
    for (const h of hazards) {
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      if (Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y) > radius + Math.max(h.w || 0, h.h || 0) * 0.4) continue;
      h.slow = Math.max(h.slow || 0, 1.8 + level * 0.05);
      h.hit = Math.max(h.hit || 0, 0.18);
      if (h.type === "toilet") h.hp -= Math.max(1, state.attackDamage * (0.78 + level * 0.035));
      frozen += 1;
    }
    if (boss) {
      applyBossControl("freeze", 0.72 + level * 0.025);
      boss.weakDuration = Math.max(boss.weakDuration || 0, 1.3 + level * 0.045);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.44 + level * 0.015), 0, bossBreakThreshold());
    }
    state.shieldTimer = Math.max(state.shieldTimer, 1.8 + level * 0.055);
    state.recoveryTimer = Math.max(state.recoveryTimer, 0.8);
    gainStyle(13 + frozen, "晶翼冻结", "#54d0ff");
    state.eventName = `坐骑：晶翼冻结${frozen ? ` x${frozen}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.1);
    spendMountCharge("crystalDragon", Math.max(4.7, 8.0 - level * 0.12), "#54d0ff");
  }

  function triggerMountStarfall() {
    const level = effectiveMountLevel();
    const s = playScale();
    const targets = hazards
      .filter((h) => h && h.type !== "pipeTop" && h.type !== "pipeBottom" && h.x > hero.x - 80 * s)
      .sort((a, b) => Math.hypot(a.x - hero.x, a.y - hero.y) - Math.hypot(b.x - hero.x, b.y - hero.y))
      .slice(0, 4 + Math.floor(level / 4));
    let hits = 0;
    for (const h of targets) {
      if (h.type === "toilet") {
        h.hp -= Math.max(2, state.attackDamage * (1.65 + level * 0.065));
        h.hit = Math.max(h.hit || 0, 0.24);
        h.slow = Math.max(h.slow || 0, 0.9);
        if (h.hp <= 0) {
          const index = hazards.indexOf(h);
          if (index >= 0) destroyHazard(index, h);
        }
      } else {
        const index = hazards.indexOf(h);
        if (index >= 0) hazards.splice(index, 1);
      }
      hits += 1;
      pop(h.x, h.y, "#fff1a6", 12);
    }
    if (boss) {
      const damage = Math.round((state.attackDamage * (3.4 + level * 0.19) + currentEvolution() * 10) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.26);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.42 + level * 0.016), 0, bossBreakThreshold());
      recordRunStat("bossDamage", damage);
      hits += 1;
      pop(boss.x - boss.w * 0.22, boss.y, "#fff1a6", 16);
      if (boss.hp <= 0) defeatBoss();
    }
    state.energy = clamp(state.energy + state.maxEnergy * 0.15, 0, state.maxEnergy);
    gainStyle(15 + hits * 2, "星环轰击", "#fff1a6");
    state.eventName = `坐骑：星环轰击${hits ? ` x${hits}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.1);
    spendMountCharge("nebulaComet", Math.max(5.1, 9.0 - level * 0.12), "#fff1a6");
  }

  function triggerMountWoodDragon() {
    const level = effectiveMountLevel();
    const s = playScale();
    const radius = (210 + level * 11) * s;
    let rooted = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dist = Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y);
      if (dist > radius + Math.max(h.w || 0, h.h || 0) * 0.45) continue;
      h.slow = Math.max(h.slow || 0, 1.55 + level * 0.055);
      h.hit = Math.max(h.hit || 0, 0.18);
      rooted += 1;
      if (h.type === "toilet") {
        h.hp -= Math.max(1, state.attackDamage * (0.92 + level * 0.04));
        h.vy = (h.vy || 0) * 0.55 + (hero.y - h.y) * 0.12;
        if (h.hp <= 0) destroyHazard(i, h);
      } else if (rooted <= 4 && h.bossDamage) {
        hazards.splice(i, 1);
        pop(h.x, h.y, "#35d07f", 9);
      }
    }
    if (boss) {
      applyBossControl("root", 0.62 + level * 0.022);
      boss.weakDuration = Math.max(boss.weakDuration || 0, 0.82 + level * 0.035);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.48 + level * 0.016), 0, bossBreakThreshold());
    }
    const heal = Math.round(state.maxHealth * (0.045 + Math.min(0.055, level * 0.003)));
    state.health = clamp(state.health + heal, 0, state.maxHealth);
    state.shieldTimer = Math.max(state.shieldTimer, 1.3 + level * 0.04);
    state.recoveryTimer = Math.max(state.recoveryTimer, 0.75);
    gainStyle(15 + rooted, "青龙藤界", "#35d07f");
    state.eventName = `坐骑：青龙藤界${rooted ? ` x${rooted}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.15);
    spendMountCharge("woodDragonBoat", Math.max(4.9, 8.4 - level * 0.12), "#35d07f");
  }

  function triggerMountGravityCauldron() {
    const level = effectiveMountLevel();
    const s = playScale();
    const cx = hero.x + (145 + level * 2) * s;
    const cy = clamp(hero.y, playTop() + 42 * s, playBottom() - 42 * s);
    const radius = (220 + level * 11) * s;
    let affected = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x || 0;
      const hy = h.y || cy;
      const dist = Math.hypot(hx - cx, hy - cy);
      if (dist > radius + Math.max(h.w || 0, h.h || 0) * 0.45) continue;
      affected += 1;
      h.slow = Math.max(h.slow || 0, 1.45 + level * 0.045);
      h.vy = (h.vy || 0) * 0.35 + (cy - hy) * 0.22;
      h.x += (16 + level * 0.4) * s;
      h.hit = Math.max(h.hit || 0, 0.2);
      if (h.type === "toilet") {
        h.hp -= Math.max(2, state.attackDamage * (1.12 + level * 0.045));
        if (h.hp <= 0) destroyHazard(i, h);
      } else if (affected <= 5 && h.bossDamage) {
        h.x += 18 * s;
        pop(h.x, h.y, "#33f0df", 6);
      }
    }
    if (boss) {
      const damage = Math.round((state.attackDamage * (2.45 + level * 0.13) + level * 3) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.26);
      applyBossControl("root", 0.58 + level * 0.018, { attackScale: 0.74 });
      addBossBreakPressure(bossBreakGain("glance") * (0.52 + level * 0.015), boss.x, boss.y);
      recordRunStat("bossDamage", damage);
      if (state.gameMode === "daily") state.dailyDamage += damage;
      affected += 1;
      if (boss.hp <= 0) defeatBoss();
    }
    state.draftTimer = Math.max(state.draftTimer, 0.75 + level * 0.035);
    gainStyle(17 + affected * 2, "引力坍缩", "#33f0df");
    state.eventName = `坐骑：引力坍缩${affected ? ` x${affected}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.18);
    spendMountCharge("gravityCauldron", Math.max(5.1, 9.0 - level * 0.12), "#33f0df");
  }

  function triggerMountAmbulanceHover() {
    const level = effectiveMountLevel();
    const s = playScale();
    const radius = (180 + level * 9) * s;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dist = Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y);
      if (dist > radius + Math.max(h.w || 0, h.h || 0) * 0.35) continue;
      h.slow = Math.max(h.slow || 0, 1.05 + level * 0.03);
      h.hit = Math.max(h.hit || 0, 0.2);
      if (h.bossDamage || h.type !== "toilet") {
        hazards.splice(i, 1);
        cleared += 1;
        pop(h.x, h.y, "#54d0ff", 8);
      } else {
        h.hp -= Math.max(1, state.attackDamage * (0.75 + level * 0.03));
        if (h.hp <= 0) {
          destroyHazard(i, h);
          cleared += 1;
        }
      }
    }
    if (boss) {
      const damage = Math.round((state.attackDamage * (1.75 + level * 0.09) + level * 2) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.2);
      boss.weakDuration = Math.max(boss.weakDuration || 0, 0.75 + level * 0.03);
      addBossBreakPressure(bossBreakGain("glance") * (0.34 + level * 0.012), boss.x, boss.y);
      recordRunStat("bossDamage", damage);
      if (state.gameMode === "daily") state.dailyDamage += damage;
      if (boss.hp <= 0) defeatBoss();
    }
    const heal = Math.round(state.maxHealth * (0.075 + Math.min(0.07, level * 0.004)));
    state.health = clamp(state.health + heal, 0, state.maxHealth);
    state.energy = clamp(state.energy + state.maxEnergy * (0.12 + Math.min(0.07, level * 0.004)), 0, state.maxEnergy);
    state.shieldTimer = Math.max(state.shieldTimer, 2.2 + level * 0.07);
    state.recoveryTimer = Math.max(state.recoveryTimer, 1.15 + level * 0.035);
    hero.invuln = Math.max(hero.invuln, 0.68 + level * 0.01);
    gainStyle(16 + cleared * 2, "急救护幕", "#54d0ff");
    state.eventName = `坐骑：急救护幕${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.18);
    spendMountCharge("ambulanceHover", Math.max(4.8, 8.2 - level * 0.12), "#54d0ff");
  }

  function triggerMountMetalTiger() {
    const level = effectiveMountLevel();
    const s = playScale();
    let slashes = 0;
    hero.invuln = Math.max(hero.invuln, 0.32 + level * 0.01);
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dx = (h.x || 0) - hero.x;
      const dy = Math.abs((h.y || hero.y) - hero.y);
      if (dx < -70 * s || dx > (520 + level * 10) * s || dy > (132 + level * 3) * s) continue;
      if (h.type === "toilet") {
        h.hp -= Math.max(3, state.attackDamage * (1.85 + level * 0.08));
        h.hit = Math.max(h.hit || 0, 0.24);
        h.slow = Math.max(h.slow || 0, 0.42);
        if (h.hp <= 0) {
          destroyHazard(i, h);
          slashes += 1;
        }
      } else {
        hazards.splice(i, 1);
        slashes += 1;
        pop(h.x, h.y, "#fff8e8", 10);
      }
    }
    if (boss && Math.abs(boss.y - hero.y) < 190 * s) {
      const damage = Math.round((state.attackDamage * (3.0 + level * 0.18) + currentEvolution() * 11) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.28);
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("manual") * (0.38 + level * 0.015), 0, bossBreakThreshold());
      recordRunStat("bossDamage", damage);
      slashes += 1;
      pop(boss.x - boss.w * 0.28, boss.y, "#fff8e8", 18);
      if (boss.hp <= 0) defeatBoss();
    }
    state.draftTimer = Math.max(state.draftTimer, 0.95 + level * 0.04);
    gainStyle(16 + slashes * 2, "白虎斩轮", "#fff8e8");
    state.eventName = `坐骑：白虎斩轮${slashes ? ` x${slashes}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.15);
    spendMountCharge("metalTigerChariot", Math.max(5.0, 8.8 - level * 0.12), "#fff8e8");
  }

  function triggerMountKirin() {
    const level = effectiveMountLevel();
    const s = playScale();
    const elements = [
      { key: "wood", label: "木", color: "#35d07f" },
      { key: "fire", label: "火", color: "#ff8d54" },
      { key: "earth", label: "土", color: "#f5c84b" },
      { key: "metal", label: "金", color: "#fff8e8" },
      { key: "water", label: "水", color: "#54d0ff" },
    ];
    const element = elements[(Math.floor(state.time * 0.7) + level) % elements.length];
    const radius = (230 + level * 11) * s;
    let affected = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const dist = Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y);
      if (dist > radius + Math.max(h.w || 0, h.h || 0) * 0.5) continue;
      affected += 1;
      if (h.type === "toilet") {
        h.hp -= Math.max(2, state.attackDamage * (1.35 + level * 0.065));
        h.hit = Math.max(h.hit || 0, 0.22);
        h.slow = Math.max(h.slow || 0, element.key === "water" || element.key === "wood" ? 1.2 : 0.62);
        if (h.hp <= 0) destroyHazard(i, h);
      } else if (affected <= 5 || h.bossDamage) {
        hazards.splice(i, 1);
        pop(h.x, h.y, element.color, 10);
      }
    }
    if (boss) {
      const damage = Math.round((state.attackDamage * (2.7 + level * 0.16) + currentEvolution() * 9) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - damage);
      boss.hit = Math.max(boss.hit || 0, 0.26);
      if (element.key === "wood" || element.key === "water") {
        applyBossControl(element.key === "water" ? "paralyze" : "root", 0.52 + level * 0.018);
      }
      boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain("glance") * (0.5 + level * 0.018), 0, bossBreakThreshold());
      recordRunStat("bossDamage", damage);
      affected += 1;
      if (boss.hp <= 0) defeatBoss();
    }
    state.energy = clamp(state.energy + state.maxEnergy * (0.11 + Math.min(0.08, level * 0.004)), 0, state.maxEnergy);
    state.shieldTimer = Math.max(state.shieldTimer, 1 + level * 0.035);
    gainStyle(18 + affected * 2, "五行轮转", element.color);
    state.eventName = `坐骑：五行${element.label}轮${affected ? ` x${affected}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.2);
    spendMountCharge("fiveElementKirin", Math.max(5.8, 10.2 - level * 0.12), element.color);
  }

  function spawnMountParticles(color, count) {
    const budget = effectBudget();
    const s = playScale();
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      particles.push({
        x: hero.x - 18 * s + random(-26, 26) * s,
        y: hero.y + random(-18, 24) * s,
        vx: random(-120, 40) * s,
        vy: random(-90, 72) * s,
        life: random(0.32, 0.62),
        maxLife: 0.62,
        size: random(3, 7) * s,
        color,
      });
    }
  }

  function hazardPatternKey(hazard) {
    if (!hazard) return "";
    if (hazard.type === "pipeTop" || hazard.type === "pipeBottom") return "pipePair";
    return hazard.type || "";
  }

  function hazardPatternIsStackedNearSpawn(pattern) {
    if (!pattern) return false;
    const s = playScale();
    const left = state.width - 90 * s;
    const right = state.width + 230 * s;
    return hazards.some((hazard) => hazardPatternKey(hazard) === pattern && hazard.x >= left && hazard.x <= right);
  }

  function hazardPatternBlocked(pattern) {
    return !!pattern && (state.lastHazardPatternKey === pattern || hazardPatternIsStackedNearSpawn(pattern));
  }

  function hazardPatternPool() {
    const pool = ["toilet", "pipePair", "plunger", "barricade", "sludgeBarrel", "acidGeyser"];
    if (state.eventKind === "stink") pool.unshift("stinkCloud");
    if (state.eventKind === "bubble") pool.unshift("soapBubble");
    return [...new Set(pool)];
  }

  function preferredHazardPattern(roll) {
    if (state.eventKind === "stink" && roll < 0.36) return "stinkCloud";
    if (state.eventKind === "bubble" && roll < 0.38) return "soapBubble";
    if (roll < (state.eventKind === "treasureRun" ? 0.55 : 0.4)) return "toilet";
    if (roll < 0.62) return "pipePair";
    if (roll < 0.78) return "plunger";
    if (roll < 0.87) return "barricade";
    if (roll < 0.95) return "sludgeBarrel";
    return "acidGeyser";
  }

  function chooseHazardPattern(roll) {
    const preferred = preferredHazardPattern(roll);
    if (!hazardPatternBlocked(preferred)) return preferred;
    const options = hazardPatternPool().filter((pattern) => pattern !== preferred && !hazardPatternBlocked(pattern));
    return options.length ? options[Math.floor(Math.random() * options.length)] : preferred;
  }

  function rememberHazardPattern(pattern) {
    state.lastHazardPatternKey = pattern || "";
  }

  function nextRouteHazardGroup(pattern) {
    state.routeHazardSerial = (state.routeHazardSerial || 0) + 1;
    return `${pattern || "hazard"}:${state.routeHazardSerial}`;
  }

  function spawnHazards(dt) {
    if (boss) return;
    if (state.gameMode === "daily" && state.time > 0.4) return;
    state.spawnTimer -= dt;
    if (state.spawnTimer > 0) return;
    if (hazards.length > effectBudget().hazards * 0.86) {
      state.spawnTimer = 0.34;
      return;
    }

    const s = playScale();
    const hs = hazardScale();
    const top = playTop();
    const bottom = playBottom();
    const playable = Math.max(120, bottom - top);
    const pressure = state.dangerLevel || directorPressure();
    const eventBoost = state.eventKind === "rush" ? 0.24 : state.eventKind === "eliteWave" ? 0.18 : state.eventKind === "treasureRun" ? 0.12 : state.eventKind === "counterTrial" ? 0.1 : state.eventKind === "comboShrine" ? 0.08 : state.eventKind === "relicRoute" ? 0.08 : state.eventKind === "mirrorCurrent" ? -0.06 : state.eventKind === "auroraForge" ? -0.04 : state.eventKind === "starTrail" ? -0.05 : state.eventKind === "purificationTide" ? -0.08 : state.eventKind === "mountTrial" ? -0.04 : state.eventKind === "adventureCurrent" ? -0.08 : state.eventKind === "supplyDrop" ? -0.06 : 0;
    const recoveryDelay = state.recoveryTimer > 0 ? 0.42 : 0;
    const calmDelay = state.eventKind === "cleanWind" ? 0.26 : state.eventKind === "adventureCurrent" ? 0.18 : state.eventKind === "purificationTide" ? 0.18 : state.eventKind === "supplyDrop" ? 0.16 : state.eventKind === "mirrorCurrent" ? 0.16 : state.eventKind === "auroraForge" ? 0.14 : state.eventKind === "starTrail" ? 0.14 : state.eventKind === "mountTrial" ? 0.12 : 0;
    const landscapeDelay = isLandscapePlay() ? 0.12 + landscapeTightness() * 0.12 : 0;
    const interval = clamp(1.92 - state.time * 0.006 - pressure * 0.64 - eventBoost + recoveryDelay + calmDelay + landscapeDelay, isLandscapePlay() ? 0.92 : 0.82, 2.22);
    state.spawnTimer = (interval + random(0.14, 0.48)) * HAZARD_SPAWN_INTERVAL_SCALE;
    const pattern = chooseHazardPattern(Math.random());
    rememberHazardPattern(pattern);
    const routeGroup = nextRouteHazardGroup(pattern);
    if (pattern === "stinkCloud") {
      hazards.push({
        type: "stinkCloud",
        routeGroup,
        routePattern: pattern,
        x: state.width + 96 * s,
        y: randomLaneY(34 * hs),
        w: random(76, 110) * hs,
        h: random(46, 64) * hs,
        phase: random(0, 6.28),
        slow: 0,
      });
    } else if (pattern === "soapBubble") {
      hazards.push({
        type: "soapBubble",
        routeGroup,
        routePattern: pattern,
        x: state.width + 84 * s,
        y: randomLaneY(30 * hs),
        w: random(44, 60) * hs,
        h: random(44, 60) * hs,
        phase: random(0, 6.28),
      });
    } else if (pattern === "toilet") {
      const progressStage = isStageMode() ? activeStage().number : state.selectedStage;
      const eliteChance = state.eventKind === "eliteWave"
        ? 0.58
        : state.time > 38 || progressStage >= 12
          ? clamp(0.035 + pressure * 0.16 + (runModifier().elite || 0), 0, 0.32)
          : 0;
      const elite = Math.random() < eliteChance;
      const treasureChance = state.eventKind === "treasureRun"
        ? 0.52
        : clamp(0.018 + runPerkLevel("jackpot") * 0.012 + (state.feverTimer > 0 ? 0.012 : 0), 0.018, 0.09);
      const treasure = !elite && state.time > 14 && Math.random() < treasureChance;
      const w = random(treasure ? 84 : elite ? 78 : 70, treasure ? 108 : elite ? 102 : 94) * hs;
      hazards.push({
        type: "toilet",
        routeGroup,
        routePattern: pattern,
        elite,
        treasure,
        x: state.width + 110 * s,
        y: randomLaneY(36 * hs),
        w,
        h: 0,
        vy: random(-22, 22) * hs,
        phase: random(0, 6.28),
        hp: (state.time > 32 ? 3 : 2) + (elite ? 3 + Math.floor(pressure * 4) : 0) + (treasure ? 2 + Math.floor(state.level / 8) : 0),
        hit: 0,
      });
    } else if (pattern === "pipePair") {
      const gap = isLandscapePlay() ? random(playable * 0.76, playable * 0.88) : random(300, 360);
      const minCenter = top + gap * 0.55;
      const maxCenter = bottom - gap * 0.55;
      const center = minCenter < maxCenter ? random(minCenter, maxCenter) : (top + bottom) * 0.5;
      const pipeW = (isLandscapePlay() ? 50 : 58) * hs;
      hazards.push({ type: "pipeTop", routeGroup, routePattern: pattern, x: state.width + 96 * s, y: 0, w: pipeW, h: Math.max(0, center - gap * 0.5) });
      hazards.push({ type: "pipeBottom", routeGroup, routePattern: pattern, x: state.width + 96 * s, y: center + gap * 0.5, w: pipeW, h: Math.max(0, state.height - (center + gap * 0.5)) });
    } else if (pattern === "plunger") {
      hazards.push({
        type: "plunger",
        routeGroup,
        routePattern: pattern,
        x: state.width + 90 * s,
        y: randomLaneY(30 * hs),
        w: 64 * hs,
        h: 24 * hs,
        spin: random(0, 6.28),
      });
    } else if (pattern === "barricade") {
      hazards.push({
        type: "barricade",
        routeGroup,
        routePattern: pattern,
        x: state.width + 104 * s,
        y: randomLaneY(38 * hs),
        w: 92 * hs,
        h: 45 * hs,
        phase: random(0, 6.28),
      });
    } else if (pattern === "sludgeBarrel") {
      hazards.push({
        type: "sludgeBarrel",
        routeGroup,
        routePattern: pattern,
        x: state.width + 96 * s,
        y: randomLaneY(42 * hs),
        w: 54 * hs,
        h: 76 * hs,
        phase: random(0, 6.28),
      });
    } else {
      const fromTop = Math.random() < 0.5;
      const h = isLandscapePlay() ? random(playable * 0.16, playable * 0.25) : random(playable * 0.24, playable * 0.36);
      hazards.push({
        type: "acidGeyser",
        routeGroup,
        routePattern: pattern,
        x: state.width + 96 * s,
        y: fromTop ? top + h * 0.5 : bottom - h * 0.5,
        w: random(42, 54) * hs,
        h,
        fromTop,
        phase: random(0, 6.28),
      });
    }
  }

  function spawnPickups(dt) {
    state.pickupTimer -= dt;
    if (state.pickupTimer > 0) return;
    const generosity = pickupGenerosity();
    const fastEvent = state.eventKind === "paperRain" || state.eventKind === "cleanWind" || state.eventKind === "goldRush" || state.eventKind === "draftGate" || state.eventKind === "mysteryRoute" || state.eventKind === "adventureCurrent" || state.eventKind === "supplyDrop" || state.eventKind === "relicRoute" || state.eventKind === "elementRift" || state.eventKind === "purificationTide" || state.eventKind === "mirrorCurrent" || state.eventKind === "auroraForge" || state.eventKind === "mountTrial" || state.eventKind === "comboShrine" || state.eventKind === "counterTrial";
    state.pickupTimer = fastEvent ? random(0.58, 1.0) / generosity : random(1.72, 2.82) / generosity;
    const s = playScale();
    const top = playTop();
    const bottom = playBottom();
    const roll = Math.random();
    let type = "paper";
    if (state.eventKind === "draftGate") type = "draftGate";
    else if (state.eventKind === "cleanWind") type = roll > 0.68 ? "shield" : roll > 0.36 ? "energy" : roll > 0.16 ? "focusOrb" : "paper";
    else if (state.eventKind === "supplyDrop") type = roll > 0.62 ? "supplyCrate" : roll > 0.36 ? "shield" : roll > 0.18 ? "energy" : "paper";
    else if (state.eventKind === "relicRoute") type = roll > 0.54 ? "relicShard" : roll > 0.24 ? "mysteryCapsule" : "focusOrb";
    else if (state.eventKind === "elementRift") type = roll > 0.55 ? "elementCore" : roll > 0.3 ? "focusOrb" : roll > 0.14 ? "energy" : "paper";
    else if (state.eventKind === "purificationTide") type = roll > 0.52 ? "purificationCore" : roll > 0.3 ? "shield" : roll > 0.14 ? "energy" : "focusOrb";
    else if (state.eventKind === "mirrorCurrent") type = roll > 0.54 ? "mirrorShard" : roll > 0.31 ? "focusOrb" : roll > 0.14 ? "shield" : "energy";
    else if (state.eventKind === "auroraForge") type = roll > 0.54 ? "forgeSigil" : roll > 0.31 ? "focusOrb" : roll > 0.15 ? "energy" : "shield";
    else if (state.eventKind === "mountTrial") type = roll > 0.5 ? "mountCore" : roll > 0.26 ? "focusOrb" : roll > 0.12 ? "energy" : "paper";
    else if (state.eventKind === "comboShrine") type = roll > 0.52 ? "comboSigil" : roll > 0.32 ? "focusOrb" : roll > 0.16 ? "bonusPaper" : "paper";
    else if (state.eventKind === "counterTrial") type = roll > 0.5 ? "counterSeal" : roll > 0.28 ? "focusOrb" : roll > 0.12 ? "shield" : "paper";
    else if (state.eventKind === "adventureCurrent") type = roll > 0.56 ? "currentShell" : roll > 0.34 ? "focusOrb" : roll > 0.16 ? "energy" : "paper";
    else if (state.eventKind === "mysteryRoute") type = roll > 0.52 ? "mysteryCapsule" : "focusOrb";
    else if (state.eventKind === "goldRush" && roll > 0.42) type = "bonusPaper";
    else if ((state.score > 1100 || state.level >= 5) && roll > 0.965 - runPerkLevel("mystery") * 0.025) type = "mysteryCapsule";
    else if (state.ultimateCooldown > 5 && state.energy >= state.maxEnergy * 0.45 && roll > 0.88) type = "focusOrb";
    else if (state.combo >= 18 && roll > 0.9) type = "focusOrb";
    else if (state.recoveryTimer > 0 && roll > 0.66) type = roll > 0.84 ? "shield" : "energy";
    else if (state.energy < state.maxEnergy * 0.34 && roll > 0.58) type = "energy";
    else if (roll > 0.93) type = "magnet";
    else if (roll > 0.86) type = "shield";
    else if (roll > 0.76) type = "energy";
    const baseY = random(top + 34 * s, bottom - 34 * s);
    const pickupType = state.eventKind === "paperRain" ? "paper" : type;
    const strength = pickupType === "mysteryCapsule" || pickupType === "relicShard" || pickupType === "supplyCrate" || pickupType === "mountCore" || pickupType === "comboSigil" || pickupType === "counterSeal" || pickupType === "elementCore" || pickupType === "purificationCore" || pickupType === "mirrorShard" || pickupType === "forgeSigil" || pickupType === "currentShell" || pickupType === "breakCore" ? 1 + Math.min(0.8, state.level * 0.025 + runPerkLevel("mystery") * 0.12) : 1;
    addPickup({
      type: pickupType,
      x: state.width + 90 * s,
      y: baseY,
      r: pickupRadius(pickupType, s, strength),
      strength,
      elementKind: pickupType === "elementCore" ? randomElementKind() : "",
      phase: random(0, 6.28),
    });
  }

  function maybeStartEvent() {
    if (boss || state.eventTimer > 0 || state.score < state.nextEventScore) return;
    const events = [
      ["paperRain", "纸卷雨"],
      ["rush", "马桶突袭"],
      ["stink", "臭气云带"],
      ["bubble", "肥皂泡乱流"],
    ];
    const stage = isStageMode() ? activeStage() : null;
    const stageNo = stage ? stage.number : state.selectedStage;
    if (state.score > 650 || stageNo >= 3) events.push(["draftGate", "顺风门阵"]);
    if (state.score > 760 || stageNo >= 5 || state.gameMode === "adventure") events.push(["supplyDrop", "补给空投"]);
    if (state.score > 900 || stageNo >= 4) events.push(["cleanWind", "清风补给"]);
    if (state.score > 1200 || stageNo >= 6 || runPerkLevel("mystery") > 0) events.push(["mysteryRoute", "奇遇航线"]);
    if (state.score > 1350 || stageNo >= 7 || state.gameMode === "adventure") events.push(["comboShrine", "连击祭坛"]);
    if (state.score > 1450 || stageNo >= 7 || (state.gameMode === "endless" && state.bossLevel >= 2)) events.push(["counterTrial", "闪反试炼"]);
    if (state.score > 1650 || stageNo >= 8 || (state.gameMode === "endless" && state.bossLevel >= 3) || (state.gameMode === "adventure" && stageNo >= 6)) events.push(["elementRift", "五行裂隙"]);
    if (state.score > 1780 || stageNo >= 8 || (state.gameMode === "endless" && state.bossLevel >= 3) || (state.gameMode === "adventure" && stageNo >= 7)) events.push(["purificationTide", "净化潮汐"]);
    if (state.score > 1900 || stageNo >= 9 || (state.gameMode === "endless" && state.bossLevel >= 3) || (state.gameMode === "adventure" && stageNo >= 7)) events.push(["starTrail", "星轨试炼"]);
    if (state.score > 2020 || stageNo >= 10 || (state.gameMode === "endless" && state.bossLevel >= 4) || (state.gameMode === "adventure" && stageNo >= 8)) events.push(["mirrorCurrent", "镜流回廊"]);
    if (state.score > 2160 || stageNo >= 11 || (state.gameMode === "endless" && state.bossLevel >= 4) || (state.gameMode === "adventure" && stageNo >= 9)) events.push(["auroraForge", "极光铸炉"]);
    if (mountRiding() && (state.score > 980 || stageNo >= 5)) events.push(["mountTrial", "坐骑试炼"]);
    if (state.gameMode === "adventure" && (stageNo >= 4 || state.score > 960)) events.push(["relicRoute", "云海遗迹"]);
    if (state.gameMode === "endless" && (state.score > 2100 || state.bossLevel >= 3)) events.push(["relicRoute", "废都遗迹"]);
    if (state.score > 1800 || stageNo >= 10) events.push(["goldRush", "黄金纸潮"]);
    if (state.score > 2300 || stageNo >= 12) events.push(["treasureRun", "黄金马桶车队"]);
    if (state.score > 2800 || stageNo >= 16) events.push(["eliteWave", "精英马桶潮"]);
    if (state.gameMode === "adventure" && (state.score > 420 || stageNo <= 4)) events.push(["adventureCurrent", "云海顺流"]);
    if (state.gameMode === "adventure" && !adventureContractReady(stage)) {
      const contract = adventureContractForStage(stage);
      if (contract && contract.key === "scout") events.push(["adventureCurrent", "云海顺流"], ["draftGate", "顺风门阵"], ["mysteryRoute", "奇遇航线"]);
      if (contract && contract.key === "cargo") events.push(["supplyDrop", "补给空投"], ["supplyDrop", "补给空投"], ["adventureCurrent", "云海顺流"]);
      if (contract && contract.key === "hunt") events.push(["eliteWave", "精英马桶潮"], ["treasureRun", "黄金马桶车队"], ["counterTrial", "闪反试炼"]);
      if (contract && contract.key === "relic") events.push(["relicRoute", "云海遗迹"], ["mysteryRoute", "奇遇航线"], ["elementRift", "五行裂隙"]);
    }
    if (state.gameMode === "stage" && stage) {
      const profile = classicStageProfile(stage);
      const progressRatio = stage.target > 0 ? state.score / stage.target : 0;
      for (const bias of profile.eventBias || []) {
        if (stageNo >= (bias.minStage || 1) || state.score >= (bias.minScore || 0)) {
          events.push([bias.kind, bias.label]);
        }
      }
      if (!stage.bossStage && progressRatio > 0.5 && profile.eventBias && profile.eventBias[0]) {
        const bias = profile.eventBias[0];
        events.push([bias.kind, bias.label]);
      }
    }
    const pick = events[Math.floor(Math.random() * events.length)];
    state.eventKind = pick[0];
    state.eventName = pick[1];
    state.eventTimer = (pick[0] === "eliteWave" ? 7.2 : pick[0] === "cleanWind" ? 7.8 : pick[0] === "treasureRun" ? 7.4 : pick[0] === "draftGate" ? 7.8 : pick[0] === "mysteryRoute" ? 8.2 : pick[0] === "supplyDrop" ? 7.4 : pick[0] === "relicRoute" ? 8.6 : pick[0] === "elementRift" ? 8.8 : pick[0] === "purificationTide" ? 8.6 : pick[0] === "starTrail" ? 9.4 : pick[0] === "mirrorCurrent" ? 9.2 : pick[0] === "auroraForge" ? 9.0 : pick[0] === "mountTrial" ? 7.8 : pick[0] === "comboShrine" ? 7.6 : pick[0] === "counterTrial" ? 7.8 : pick[0] === "adventureCurrent" ? 7.6 : 8.5) + Math.min(4, state.level * 0.45);
    state.eventLabelTimer = 2.4;
    const classicEventGap = state.gameMode === "stage" && stage ? (classicStageProfile(stage).eventGap || 1) : 1;
    state.nextEventScore = Math.floor(state.score + (620 + state.level * 96 + state.dangerLevel * 180) * classicEventGap);
    if (state.gameMode === "stage" && stage) {
      const profile = classicStageProfile(stage);
      const biased = (profile.eventBias || []).some((entry) => entry.kind === pick[0]);
      addClassicDistrictProgress(biased ? 12 : 6, biased ? "major" : "event");
    }
    if (state.gameMode === "adventure") {
      const eventIntel = pick[0] === "relicRoute" || pick[0] === "mysteryRoute" ? 1 : 0;
      const eventCargo = pick[0] === "supplyDrop" || pick[0] === "treasureRun" ? 1 : 0;
      const routeGain = 5 + stageNo * 0.25 + (pick[0] === "adventureCurrent" ? 2.5 : 0);
      addAdventureRouteProgress(routeGain, {
        intel: eventIntel,
        cargo: eventCargo,
        silent: true,
        pulse: true,
        major: eventIntel > 0 || eventCargo > 0,
      });
    }
    if (pick[0] === "cleanWind") {
      state.classicLanePhase = random(0, Math.PI * 2);
      state.classicEventPulse = Math.max(state.classicEventPulse || 0, 0.62);
      state.recoveryTimer = Math.max(state.recoveryTimer, 1.2);
      state.health = clamp(state.health + state.maxHealth * 0.08, 0, state.maxHealth);
      state.energy = clamp(state.energy + state.maxEnergy * 0.08, 0, state.maxEnergy);
    }
    if (pick[0] === "goldRush") {
      state.classicLanePhase = random(0, Math.PI * 2);
      state.goldRushCharge = Math.max(state.goldRushCharge || 0, 18);
      state.classicEventPulse = Math.max(state.classicEventPulse || 0, 0.58);
    }
    if (pick[0] === "draftGate") {
      state.classicLanePhase = random(0, Math.PI * 2);
      state.draftLaneCharge = Math.max(state.draftLaneCharge || 0, 18);
      state.classicEventPulse = Math.max(state.classicEventPulse || 0, 0.58);
      state.draftTimer = Math.max(state.draftTimer, 0.9);
    }
    if (pick[0] === "mysteryRoute") {
      state.mysteryLanePhase = random(0, Math.PI * 2);
      state.mysteryLaneCharge = Math.max(state.mysteryLaneCharge || 0, 16);
      state.mysteryPulse = Math.max(state.mysteryPulse || 0, 0.62);
    }
    if (pick[0] === "starTrail") {
      state.starTrailCharge = 0;
      state.starTrailLanePhase = random(0, Math.PI * 2);
      state.starTrailPulse = Math.max(state.starTrailPulse || 0, 0.5);
    }
    if (pick[0] === "mirrorCurrent") {
      state.mirrorCharge = 0;
      state.mirrorLanePhase = random(0, Math.PI * 2);
      state.mirrorPulse = Math.max(state.mirrorPulse || 0, 0.55);
      state.mirrorGuardTimer = Math.max(state.mirrorGuardTimer || 0, 0.6);
    }
    if (pick[0] === "auroraForge") {
      state.forgeHeat = 0;
      state.forgeLanePhase = random(0, Math.PI * 2);
      state.forgePulse = Math.max(state.forgePulse || 0, 0.58);
      state.forgeTempoTimer = Math.max(state.forgeTempoTimer || 0, 0.55);
    }
    if (pick[0] === "adventureCurrent") {
      state.adventureCurrentCharge = Math.max(state.adventureCurrentCharge || 0, 18);
      state.adventureLanePhase = random(0, Math.PI * 2);
      state.adventurePulse = Math.max(state.adventurePulse || 0, 0.62);
      state.adventureBoostTimer = Math.max(state.adventureBoostTimer || 0, 0.75);
    }
    state.spawnTimer = Math.min(state.spawnTimer, pick[0] === "cleanWind" || pick[0] === "draftGate" || pick[0] === "adventureCurrent" || pick[0] === "supplyDrop" || pick[0] === "elementRift" || pick[0] === "purificationTide" || pick[0] === "starTrail" || pick[0] === "mirrorCurrent" || pick[0] === "auroraForge" || pick[0] === "mountTrial" || pick[0] === "comboShrine" || pick[0] === "counterTrial" ? 0.75 : 0.45);
    state.pickupTimer = Math.min(state.pickupTimer, pick[0] === "cleanWind" || pick[0] === "draftGate" || pick[0] === "mysteryRoute" || pick[0] === "adventureCurrent" || pick[0] === "supplyDrop" || pick[0] === "relicRoute" || pick[0] === "elementRift" || pick[0] === "purificationTide" || pick[0] === "mirrorCurrent" || pick[0] === "auroraForge" || pick[0] === "mountTrial" || pick[0] === "comboShrine" || pick[0] === "counterTrial" ? 0.18 : 0.35);
    state.shake = Math.max(state.shake, 4);
    beep(660, 0.07, "triangle", 0.035);
  }

  function maybeCompleteStage() {
    if (!isStageMode() || state.stageCompleted) return;
    const stage = activeStage();
    if (!stage.bossStage && state.score >= state.stageTarget) {
      if (state.gameMode === "adventure" && !adventureStageObjectivesReady(stage)) {
        markAdventureObjectivesBlocked(stage);
        return;
      }
      state.eventName = state.gameMode === "adventure" ? "航图签章完成" : "分数达标";
      state.eventLabelTimer = 2.4;
      completeStage(false);
    }
  }

  function projectileDamage(shot) {
    const strongMult = shot.strong ? (shot.strongMult || strongAttackDamageMultiplier(shot)) : 1;
    const base = (shot.damage || 1) * strongMult * (shot.ignoreStyle ? 1 : styleMultiplier());
    const chance = (shot.critChance === undefined ? runCombatStats().crit : shot.critChance) + (shot.strong ? STRONG_ATTACK_CRIT_BONUS : 0);
    const crit = Math.random() * 100 < chance;
    if (!crit) return { damage: Math.max(1, Math.round(base)), crit: false };
    const mult = shot.critMult || 1.7;
    return { damage: Math.max(base + 1, Math.round(base * mult)), crit: true };
  }

  function applyProjectileSpecialToBoss(shot) {
    if (!boss) return;
    if (shot.kind === "poisonFlask") {
      boss.poisonTimer = Math.max(boss.poisonTimer || 0, 2.4 + currentEvolution() * 0.22);
    } else if (shot.kind === "paperRoll") {
      if (boss.weakDuration > 0) registerBossWeakHit("glance", shot.x, shot.y);
    } else if (shot.kind === "waterBolt") {
      boss.hit = Math.max(boss.hit || 0, 0.2);
    } else if (shot.kind === "woodDragonLeaf") {
      if (shot.manual) applyBossControl("root", 0.24 + currentEvolution() * 0.028);
      boss.hit = Math.max(boss.hit || 0, shot.manual ? 0.26 : 0.18);
      addBossBreakPressure(bossBreakGain(shot.manual ? "manual" : "glance") * (shot.manual ? 0.28 : 0.18), shot.x, shot.y);
    } else if (shot.kind === "voidCleaver") {
      applyBossControl("root", shot.manual ? 0.38 : 0.2, { attackScale: 0.72 });
      boss.hit = Math.max(boss.hit || 0, shot.manual ? 0.28 : 0.2);
      addBossBreakPressure(bossBreakGain(shot.manual ? "manual" : "glance") * (shot.manual ? 0.32 : 0.2), shot.x, shot.y);
    } else if (shot.kind === "neonSyringe") {
      boss.hit = Math.max(boss.hit || 0, shot.manual ? 0.22 : 0.16);
      if (shot.manual || state.health < state.maxHealth * 0.62) {
        state.health = clamp(state.health + state.maxHealth * (shot.manual ? 0.012 : 0.005), 0, state.maxHealth);
        state.shieldTimer = Math.max(state.shieldTimer || 0, shot.manual ? 0.72 : 0.28);
      }
      if (shot.manual && boss.weakDuration > 0) addBossBreakPressure(bossBreakGain("glance") * 0.18, shot.x, shot.y);
    } else if (shot.kind === "metalTigerSlash") {
      boss.hit = Math.max(boss.hit || 0, shot.manual ? 0.34 : 0.24);
      addBossBreakPressure(bossBreakGain(shot.manual ? "manual" : "glance") * (shot.manual ? 0.36 : 0.24), shot.x, shot.y);
    }
  }

  function applyProjectileSpecialToHazard(shot, hazard) {
    if (!hazard) return;
    if (shot.kind === "poisonFlask") {
      hazard.poison = Math.max(hazard.poison || 0, 2.8 + currentEvolution() * 0.2);
      hazard.slow = Math.max(hazard.slow || 0, 0.5);
    } else if (shot.kind === "paperRoll") {
      hazard.slow = Math.max(hazard.slow || 0, 0.62);
      hazard.vy = (hazard.vy || 0) * 0.5 + (hero.y - hazard.y) * 0.18;
    } else if (shot.kind === "waterBolt") {
      hazard.x += 10 * playScale();
      hazard.slow = Math.max(hazard.slow || 0, 0.18);
    } else if (shot.kind === "woodDragonLeaf") {
      hazard.slow = Math.max(hazard.slow || 0, shot.manual ? 1.25 : 0.92);
      hazard.vy = (hazard.vy || 0) * 0.48 + (hero.y - hazard.y) * (shot.manual ? 0.2 : 0.15);
      hazard.hp -= Math.max(1, Math.round(state.attackDamage * (shot.manual ? 0.28 : 0.14)));
    } else if (shot.kind === "voidCleaver") {
      hazard.slow = Math.max(hazard.slow || 0, shot.manual ? 1.42 : 0.9);
      hazard.vy = (hazard.vy || 0) * 0.4 + (shot.y - hazard.y) * (shot.manual ? 0.28 : 0.18);
      hazard.x += (shot.manual ? 20 : 10) * playScale();
      hazard.hp -= Math.max(1, Math.round(state.attackDamage * (shot.manual ? 0.38 : 0.18)));
    } else if (shot.kind === "neonSyringe") {
      hazard.slow = Math.max(hazard.slow || 0, shot.manual ? 0.78 : 0.38);
      hazard.hit = Math.max(hazard.hit || 0, shot.manual ? 0.26 : 0.16);
      if (state.health < state.maxHealth * 0.65) {
        state.health = clamp(state.health + state.maxHealth * (shot.manual ? 0.01 : 0.004), 0, state.maxHealth);
      }
    } else if (shot.kind === "metalTigerSlash") {
      hazard.hit = Math.max(hazard.hit || 0, shot.manual ? 0.34 : 0.24);
      hazard.hp -= Math.max(1, Math.round(state.attackDamage * (shot.manual ? 0.52 : 0.32)));
    }
  }

  function bossWeakSpotHit(shot) {
    if (!boss || boss.weakDuration <= 0) return false;
    const sx = boss.x - boss.w * 0.24;
    const sy = boss.y + boss.h * (boss.weakOffset || 0);
    const range = Math.max(24 * playScale(), boss.w * 0.18);
    return ellipseDistance(shot.x, shot.y, shot.rx || 18, shot.ry || 14, sx, sy, range);
  }

  function bossBreakThreshold() {
    if (!boss) return 100;
    const repeatTax = Math.max(0, boss.breakCount || 0) * (boss.daily ? 22 : 15);
    return 88 + Math.min(56, boss.level * 2.2) + repeatTax + (boss.daily ? 16 : 0);
  }

  function bossBreakDamageMultiplier() {
    if (!boss || (boss.breakTimer || 0) <= 0) return 1;
    return 1.26 + runPerkLevel("execution") * 0.08 + runPerkLevel("weakbreaker") * 0.03;
  }

  function bossBreakGain(source = "auto") {
    const base = {
      manual: 43,
      auto: 28,
      drone: 23,
      ultimate: 12,
      item: 35,
      glance: 15,
    }[source] || 28;
    const perkBoost = 1 + runPerkLevel("weakbreaker") * 0.24;
    const focusBoost = source === "manual" ? 1 + runPerkLevel("focus") * 0.04 : 1;
    return base * perkBoost * focusBoost;
  }

  function addBossBreakPressure(amount, x = boss ? boss.x : hero.x, y = boss ? boss.y : hero.y) {
    if (!boss || amount <= 0) return;
    const threshold = bossBreakThreshold();
    boss.breakMeter = clamp((boss.breakMeter || 0) + amount, 0, threshold);
    if (boss.breakMeter >= threshold) triggerBossBreak(x, y);
  }

  function bossControlActive() {
    return !!boss && ((boss.breakTimer || 0) > 0
      || (boss.stunTimer || 0) > 0
      || (boss.paralyzeTimer || 0) > 0
      || (boss.freezeTimer || 0) > 0
      || (boss.rootTimer || 0) > 0);
  }

  function bossHardControlActive() {
    return !!boss && ((boss.breakTimer || 0) > 0
      || (boss.stunTimer || 0) > 0
      || (boss.paralyzeTimer || 0) > 0
      || (boss.freezeTimer || 0) > 0);
  }

  function delayBossAttack(seconds, source = "hit") {
    if (!boss || seconds <= 0) return false;
    const special = source === "break"
      || source === "stun"
      || source === "paralyze"
      || source === "freeze"
      || source === "root"
      || bossControlActive();
    if (!special) return false;
    const cap = source === "break" ? 1.18 : source === "root" ? 0.34 : 0.52;
    boss.attackTimer = Math.max(boss.attackTimer || 0, Math.min(seconds, cap));
    return true;
  }

  function applyBossControl(kind, seconds, options = {}) {
    if (!boss || seconds <= 0) return false;
    const map = {
      stun: "stunTimer",
      paralyze: "paralyzeTimer",
      freeze: "freezeTimer",
      root: "rootTimer",
    };
    const key = map[kind] || "stunTimer";
    boss[key] = Math.max(boss[key] || 0, seconds);
    boss.controlFlash = Math.max(boss.controlFlash || 0, 0.28);
    boss.hit = Math.max(boss.hit || 0, 0.16);
    if ((boss.attackControlDelayCooldown || 0) <= 0) {
      delayBossAttack(seconds * (options.attackScale || 0.86), kind);
      boss.attackControlDelayCooldown = kind === "root" ? 0.62 : 0.48;
    }
    return true;
  }

  function triggerBossBreak(x = boss ? boss.x : hero.x, y = boss ? boss.y : hero.y) {
    if (!boss) return;
    const weakbreaker = runPerkLevel("weakbreaker");
    const execution = runPerkLevel("execution");
    boss.breakMeter = 0;
    boss.breakCount = (boss.breakCount || 0) + 1;
    boss.breakTimer = clamp(2.65 + weakbreaker * 0.36 + Math.min(0.55, boss.level * 0.018), 2.65, 4.15);
    boss.breakCooldown = Math.max(boss.breakCooldown || 0, 1.25);
    boss.weakDuration = 0;
    boss.warning = false;
    boss.previewSafeLane = null;
    boss.nextAttack = "";
    delayBossAttack(1.08 + weakbreaker * 0.16, "break");
    boss.hit = Math.max(boss.hit || 0, 0.34);
    const chipDamage = Math.max(8, Math.round(boss.maxHp * (boss.daily ? 0.0038 : 0.011) * (1 + execution * 0.12)));
    boss.hp -= chipDamage;
    recordRunStat("bossDamage", chipDamage);
    recordRunStat("bossBreaks", 1);
    if (state.gameMode === "daily") state.dailyDamage += chipDamage;
    const energyGain = Math.round(state.maxEnergy * (0.08 + weakbreaker * 0.035));
    state.energy = clamp(state.energy + energyGain, 0, state.maxEnergy);
    addRoundedScore((boss.daily ? 120 : 260 + boss.level * 26) * state.scoreBonus * styleMultiplier());
    state.combo += 2 + weakbreaker;
    state.comboTimer = Math.max(state.comboTimer, 2.2);
    recordRunStat("maxCombo", state.combo);
    gainStyle(18 + weakbreaker * 4, "破防连携", "#fff1a6");
    showRewardToast([
      { type: "break", label: "破防", amount: 1 },
      { type: "energy", amount: energyGain },
    ], { duration: 1550 });
    state.eventName = "破防连携";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.15);
    state.shake = Math.max(state.shake, 8 + weakbreaker);
    pop(x, y, "#fff1a6", 26 + weakbreaker * 4);
    beep(1240, 0.07, "triangle", 0.05);
    setTimeout(() => beep(720, 0.08, "sawtooth", 0.035), 70);
    if (boss && boss.hp > 0) spawnBreakCore(x, y);
    if (boss && boss.hp <= 0) defeatBoss();
  }

  function spawnBreakCore(x = boss ? boss.x : hero.x, y = boss ? boss.y : hero.y) {
    if (state.mode !== "playing") return;
    const s = playScale();
    const targetX = boss
      ? clamp((hero.x + boss.x) * 0.5 - 18 * s, hero.x + 96 * s, state.width - 74 * s)
      : clamp(hero.x + 190 * s, hero.x + 88 * s, state.width - 74 * s);
    const targetY = clamp(y + random(-28, 28) * s, playTop() + 42 * s, playBottom() - 42 * s);
    const strength = 1.16 + Math.min(0.45, state.level * 0.018 + runPerkLevel("weakbreaker") * 0.08);
    addPickup({
      type: "breakCore",
      x: targetX,
      y: targetY,
      r: pickupRadius("breakCore", s, strength),
      strength,
      phase: random(0, Math.PI * 2),
    }, true);
  }

  function triggerBreakCore(p) {
    const s = playScale();
    const potency = Math.max(1, p.strength || 1);
    const radius = (116 + potency * 32) * s;
    let cleared = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
      const hx = h.x + (h.w || 0) * 0.5;
      const hy = h.y || p.y;
      if (Math.hypot(hx - p.x, hy - p.y) > radius + Math.max(h.w || 0, h.h || 0) * 0.35) continue;
      h.hit = Math.max(h.hit || 0, 0.14);
      h.slow = Math.max(h.slow || 0, 0.84 + potency * 0.18);
      if (h.type === "toilet") {
        h.hp -= state.attackDamage * (1.9 + potency * 0.28) + state.level * 0.75;
        if (h.hp > 0) continue;
        destroyHazard(i, h);
      } else {
        hazards.splice(i, 1);
        pop(hx, hy, "#fff1a6", 7);
      }
      cleared += 1;
    }

    let bossDamage = 0;
    if (boss) {
      boss.breakTimer = Math.max(boss.breakTimer || 0, 1.55 + potency * 0.32 + runPerkLevel("execution") * 0.12);
      delayBossAttack(0.82 + potency * 0.14, "break");
      boss.hit = Math.max(boss.hit || 0, 0.24);
      if ((boss.breakTimer || 0) <= 0.05) {
        addBossBreakPressure(bossBreakGain("manual") * (0.24 + potency * 0.05), boss.x, boss.y);
      }
      bossDamage = Math.round((state.attackDamage * (3.4 + potency * 0.55) + state.level * 2.6) * bossBreakDamageMultiplier());
      boss.hp = Math.max(0, boss.hp - bossDamage);
      recordRunStat("bossDamage", bossDamage);
      if (state.gameMode === "daily") state.dailyDamage += bossDamage;
      if (boss.hp <= 0) defeatBoss();
    }

    recordRunStat("breakCores", 1);
    state.energy = clamp(state.energy + state.maxEnergy * (0.16 + potency * 0.04), 0, state.maxEnergy);
    state.shieldTimer = Math.max(state.shieldTimer, 1.1 + potency * 0.35);
    state.specialTimer = Math.max(state.specialTimer, 2.1 + potency * 0.35);
    state.ultimateCooldown = Math.max(0, state.ultimateCooldown - (1.2 + potency * 0.42));
    state.combo += 2 + Math.min(3, cleared);
    state.comboTimer = Math.max(state.comboTimer, 3.25);
    recordRunStat("maxCombo", state.combo);
    addRoundedScore((220 + cleared * 70 + bossDamage * 0.4) * state.scoreBonus * styleMultiplier());
    gainXp(45 + state.level * 4 + cleared * 10);
    gainStyle(24 + cleared * 3, "破核追击", "#fff1a6");
    state.eventName = bossDamage > 0 ? "破核追击" : `破防核心${cleared ? ` x${cleared}` : ""}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.25);
    showRewardToast([{ type: "breakCore", label: "破防核心", amount: 1 }], { duration: 1450 });
    pop(p.x, p.y, "#fff1a6", 26 + Math.min(12, cleared * 2));
    state.shake = Math.max(state.shake, 5.5);
    beep(1320, 0.07, "triangle", 0.045);
  }

  function registerBossWeakHit(source = "auto", x = boss ? boss.x : hero.x, y = boss ? boss.y : hero.y) {
    if (!boss || (boss.breakTimer || 0) > 0 || (boss.breakCooldown || 0) > 0) return;
    const threshold = bossBreakThreshold();
    boss.breakMeter = clamp((boss.breakMeter || 0) + bossBreakGain(source), 0, threshold);
    const progress = boss.breakMeter / Math.max(1, threshold);
    state.eventName = `破防 ${Math.floor(progress * 100)}%`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.42);
    pop(x, y, progress >= 0.95 ? "#fff1a6" : "#fff8c4", progress >= 0.95 ? 18 : 8);
    if (boss.breakMeter >= threshold) triggerBossBreak(x, y);
  }

  function projectileHitPop(shot, crit = false, weak = false) {
    if (shot.kind === "chickenPeck") return { color: weak ? "#fff8c4" : "#fff3c4", count: weak ? 24 : crit ? 20 : 15 };
    if (shot.kind === "waterBolt") return { color: weak ? "#fff8e8" : "#9de8ff", count: weak ? 22 : crit ? 16 : 10 };
    if (shot.kind === "poisonFlask") return { color: weak ? "#dfff7a" : "#a7f04a", count: weak ? 24 : crit ? 18 : 12 };
    if (shot.kind === "paperRoll") return { color: weak ? "#fff8e8" : "#fff1a6", count: weak ? 24 : crit ? 17 : 11 };
    if (shot.kind === "woodDragonLeaf") return { color: weak ? "#dfff7a" : shot.manual ? "#54d0ff" : "#35d07f", count: weak ? 34 : crit ? 26 : shot.manual ? 21 : 14 };
    if (shot.kind === "voidCleaver") return { color: weak ? "#fff8e8" : shot.manual ? "#33f0df" : "#0dd6c6", count: weak ? 32 : crit ? 24 : shot.manual ? 20 : 13 };
    if (shot.kind === "neonSyringe") return { color: weak ? "#fff8e8" : shot.manual ? "#54d0ff" : "#ff7b7b", count: weak ? 28 : crit ? 20 : shot.manual ? 16 : 10 };
    if (shot.kind === "metalTigerSlash") return { color: weak ? "#fff8e8" : shot.manual ? "#9de8ff" : "#ffe37a", count: weak ? 38 : crit ? 30 : shot.manual ? 24 : 16 };
    return {
      color: weak ? "#fff8c4" : crit ? "#fff1a6" : shot.manual ? "#ffd15c" : state.specialTimer > 0 ? "#ffd95c" : "#8b5a2b",
      count: weak ? 18 : crit ? 15 : shot.manual ? 11 : 8,
    };
  }

  function updateProjectiles(dt) {
    for (let i = projectiles.length - 1; i >= 0; i -= 1) {
      const shot = projectiles[i];
      shot.x += shot.vx * dt;
      if (shot.gravity) shot.vy = (shot.vy || 0) + shot.gravity * dt;
      shot.y += (shot.vy || 0) * dt;
      shot.life -= dt;
      shot.pulse += dt * 12;
      if (shot.x > state.width + 80 || shot.life <= 0) {
        projectiles.splice(i, 1);
        continue;
      }
      if (boss && hitEllipseRect(shot.x, shot.y, shot.rx || 24, shot.ry || 18, boss.x, boss.y, boss.w, boss.h)) {
        const hit = projectileDamage(shot);
        const weakHit = bossWeakSpotHit(shot);
        const breakMultiplier = bossBreakDamageMultiplier();
        const damage = Math.max(1, Math.round((weakHit ? hit.damage * (boss.daily ? 1.58 : 1.36) : hit.damage) * breakMultiplier));
        boss.hp -= damage;
        recordRunStat("bossDamage", damage);
        if (state.gameMode === "daily") state.dailyDamage += damage;
        applyProjectileSpecialToBoss(shot);
        if (!boss) {
          projectiles.splice(i, 1);
          continue;
        }
        if ((weakHit || boss.weakDuration > 0) && boss.hp > 0) {
          const source = weakHit ? (shot.manual ? "manual" : shot.drone ? "drone" : "auto") : "glance";
          registerBossWeakHit(source, shot.x, shot.y);
          if (!boss) {
            projectiles.splice(i, 1);
            continue;
          }
        }
        boss.hit = boss.breakTimer > 0 ? 0.22 : 0.15;
        if (weakHit || hit.crit) {
          state.eventName = weakHit ? "弱点重击" : "暴击";
          state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.35);
          gainStyle(weakHit ? 8 : 4, weakHit ? "弱点重击" : "暴击", weakHit ? "#fff8c4" : "#fff1a6");
        }
        const impact = projectileHitPop(shot, hit.crit, weakHit);
        pop(shot.x, shot.y, impact.color, impact.count);
        if (shot.kind === "chickenPeck") gainStyle(3, "鸡啄连击", "#fff3c4");
        shot.pierce = (shot.pierce || 0) - 1;
        if (shot.pierce < 0) projectiles.splice(i, 1);
        beep(520, 0.035, "square", 0.03);
        if (boss.hp <= 0) {
          defeatBoss();
        }
        continue;
      }
      for (let j = hazards.length - 1; j >= 0; j -= 1) {
        const h = hazards[j];
        if (h.type !== "toilet") continue;
        if (hitEllipseRect(shot.x, shot.y, shot.rx || 24, shot.ry || 18, h.x, h.y, h.w, h.w * 0.78)) {
          const hit = projectileDamage(shot);
          h.hp -= hit.damage;
          h.hit = 0.13;
          applyProjectileSpecialToHazard(shot, h);
          if (hit.crit) {
            state.eventName = "暴击";
            state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.35);
            gainStyle(4, "暴击", "#fff1a6");
          }
          const impact = projectileHitPop(shot, hit.crit, false);
          pop(shot.x, shot.y, impact.color, impact.count);
          if (shot.kind === "chickenPeck") gainStyle(2, "鸡啄破甲", "#fff3c4");
          shot.pierce = (shot.pierce || 0) - 1;
          if (shot.pierce < 0) projectiles.splice(i, 1);
          beep(600, 0.035, "square", 0.025);
          if (h.hp <= 0) {
            destroyHazard(j, h);
          }
          break;
        }
      }
    }
  }

  function ultimateBeamRect() {
    const s = playScale();
    const kind = state.ultimateKind;
    const ikun = kind === "ikun";
    const paper = kind === "paper";
    const alchemist = kind === "alchemist";
    const jet = kind === "jet";
    const dragonWood = kind === "dragonWood";
    const voidChef = kind === "voidChef";
    const neonMedic = kind === "neonMedic";
    const tigerMetal = kind === "tigerMetal";
    const height = dragonWood ? 214 : voidChef ? 188 : neonMedic ? 154 : paper ? 168 : alchemist ? 150 : tigerMetal ? 176 : ikun ? 116 : jet ? 108 : 96;
    return {
      x: hero.x + (ikun ? 34 : paper ? 70 : dragonWood ? 42 : voidChef ? 48 : neonMedic ? 46 : tigerMetal ? 38 : 42) * s,
      y: hero.y - height * 0.5 * s,
      w: Math.max((dragonWood ? 214 : voidChef ? 198 : neonMedic ? 176 : paper ? 160 : tigerMetal ? 218 : ikun ? 138 : jet ? 150 : 120) * s, state.width - hero.x - (ikun ? 54 : paper ? 42 : dragonWood ? 28 : voidChef ? 30 : neonMedic ? 42 : tigerMetal ? 34 : 70) * s),
      h: height * s,
    };
  }

  function ultimateSkillName(kind = state.ultimateKind || heroProfile().ultimate || "poop") {
    return {
      ikun: "鸡鸣冲击波",
      jet: "超压冲水炮",
      alchemist: "臭气炼成阵",
      paper: "纸卷黑洞",
      dragonWood: "青龙星藤界",
      voidChef: "虚空锅炉",
      neonMedic: "急救霓虹幕",
      tigerMetal: "白虎庚金天裂",
      poop: "黄金大便能量波",
    }[kind] || "黄金大便能量波";
  }

  function addUltimateParticles(beam, dt) {
    const budget = effectBudget();
    const kind = state.ultimateKind;
    const smooth = isSmoothQuality();
    const rate = kind === "dragonWood" ? 88 : kind === "voidChef" ? 84 : kind === "neonMedic" ? 72 : kind === "tigerMetal" ? 96 : kind === "ikun" ? 54 : kind === "paper" ? 62 : kind === "alchemist" ? 56 : kind === "jet" ? 58 : 48;
    const count = Math.min(smooth ? 6 : 11, Math.floor(dt * rate + Math.random() * 2.4));
    for (let i = 0; i < count && particles.length < budget.particles; i += 1) {
      const t = Math.random();
      const orbit = kind === "paper" || kind === "alchemist" || kind === "dragonWood" || kind === "voidChef";
      const x = kind === "tigerMetal"
        ? beam.x + beam.w * ((state.ultimatePulse * 0.62 + i * 0.17 + t * 0.12) % 1)
        : orbit ? beam.x + beam.w * (0.54 + Math.cos(state.ultimatePulse * 4.2 + i) * 0.22) : random(beam.x, beam.x + beam.w * 0.94);
      const y = kind === "tigerMetal"
        ? hero.y + Math.sin(state.ultimatePulse * 8 + i) * beam.h * 0.35
        : orbit ? beam.y + beam.h * (0.5 + Math.sin(state.ultimatePulse * 5.3 + i) * 0.34) : beam.y + beam.h * (0.5 + random(-0.42, 0.42));
      particles.push({
        x,
        y,
        vx: kind === "paper" || kind === "voidChef" ? random(-190, 55) : kind === "jet" || kind === "tigerMetal" || kind === "neonMedic" ? random(40, 280) : random(-90, 170),
        vy: kind === "paper" || kind === "alchemist" || kind === "dragonWood" || kind === "voidChef" ? random(-150, 150) : random(-75, 75),
        size: random(3.5, kind === "tigerMetal" ? 17 : kind === "dragonWood" ? 16 : kind === "voidChef" ? 15 : kind === "neonMedic" ? 13 : kind === "ikun" ? 13 : kind === "paper" ? 12 : kind === "jet" ? 11 : 10),
        color: kind === "ikun"
          ? (t > 0.44 ? "#fff3c4" : t > 0.22 ? "#ff8d54" : "#f5c84b")
          : kind === "jet"
            ? (t > 0.5 ? "#9de8ff" : t > 0.25 ? "#54d0ff" : "#fff8e8")
            : kind === "alchemist"
              ? (t > 0.48 ? "#a7f04a" : t > 0.2 ? "#c45dff" : "#dfff7a")
              : kind === "paper"
                ? (t > 0.5 ? "#fff8e8" : t > 0.2 ? "#9de8ff" : "#fff1a6")
                : kind === "dragonWood"
                  ? (t > 0.52 ? "#dfff7a" : t > 0.24 ? "#35d07f" : "#54d0ff")
                  : kind === "voidChef"
                    ? (t > 0.52 ? "#33f0df" : t > 0.24 ? "#dfff7a" : "#142026")
                    : kind === "neonMedic"
                      ? (t > 0.5 ? "#fff8e8" : t > 0.22 ? "#54d0ff" : "#ff7b7b")
                      : kind === "tigerMetal"
                        ? (t > 0.5 ? "#fff8e8" : t > 0.22 ? "#ffe37a" : "#9de8ff")
                        : (t > 0.5 ? "#f5c84b" : t > 0.25 ? "#d8792f" : "#fff8c4"),
        life: random(0.26, 0.62),
        maxLife: 0.62,
      });
    }
  }

  function updateUltimate(dt) {
    if (state.mode !== "playing" || state.ultimateTimer <= 0) return;
    const beam = ultimateBeamRect();
    addUltimateParticles(beam, dt);
    const kind = state.ultimateKind;
    const ikun = kind === "ikun";
    const jet = kind === "jet";
    const alchemist = kind === "alchemist";
    const paper = kind === "paper";
    const dragonWood = kind === "dragonWood";
    const voidChef = kind === "voidChef";
    const neonMedic = kind === "neonMedic";
    const tigerMetal = kind === "tigerMetal";
    let damage = dt * (115 + state.attackDamage * 18 + currentEvolution() * 55) * styleMultiplier() * (ikun ? 1.06 : jet ? 1.12 : alchemist ? 0.88 : paper ? 0.98 : dragonWood ? 1.28 : voidChef ? 1.18 : neonMedic ? 0.92 : tigerMetal ? 1.55 : 1);
    if (neonMedic) {
      state.health = clamp(state.health + state.maxHealth * 0.018 * dt, 0, state.maxHealth);
      state.energy = clamp(state.energy + state.maxEnergy * 0.01 * dt, 0, state.maxEnergy);
      state.shieldTimer = Math.max(state.shieldTimer || 0, 0.42);
      state.recoveryTimer = Math.max(state.recoveryTimer || 0, 0.32);
    }
    if (boss && boss.weakDuration > 0) damage *= boss.daily ? 1.24 : 1.14;
    if (boss) damage *= bossBreakDamageMultiplier();
    if (boss && rectVsEllipse(beam.x, beam.y, beam.w, beam.h, boss.x, boss.y, boss.w * 0.5, boss.h * 0.46)) {
      if (boss.weakDuration > 0 && state.ultimateBreakTick <= 0) {
        registerBossWeakHit("ultimate", boss.x - boss.w * 0.24, boss.y + boss.h * (boss.weakOffset || 0));
        state.ultimateBreakTick = 0.34;
        if (!boss) return;
      }
      boss.hp -= damage;
      recordRunStat("bossDamage", damage);
      if (state.gameMode === "daily") state.dailyDamage += damage;
      boss.hit = 0.12;
      if (alchemist) {
        boss.poisonTimer = Math.max(boss.poisonTimer || 0, 3.2);
        boss.cadenceScale = Math.max(0.82, (boss.cadenceScale || 1) * 0.998);
      }
      if (paper) applyBossControl("root", 0.32);
      if (dragonWood) {
        applyBossControl("root", 0.56);
        addBossBreakPressure(bossBreakGain("ultimate") * dt * 2.25, boss.x, boss.y);
        state.health = clamp(state.health + state.maxHealth * 0.012 * dt, 0, state.maxHealth);
      }
      if (voidChef) {
        applyBossControl("root", 0.66, { attackScale: 0.68 });
        addBossBreakPressure(bossBreakGain("ultimate") * dt * 2.55, boss.x, boss.y);
        boss.cadenceScale = Math.max(0.78, (boss.cadenceScale || 1) * 0.997);
        boss.hp -= damage * 0.08;
      }
      if (neonMedic) {
        boss.weakDuration = Math.max(boss.weakDuration || 0, 0.34);
        addBossBreakPressure(bossBreakGain("ultimate") * dt * 1.7, boss.x, boss.y);
      }
      if (tigerMetal) {
        addBossBreakPressure(bossBreakGain("ultimate") * dt * 3.05, boss.x, boss.y);
        boss.hp -= damage * 0.18;
      }
      state.shake = Math.max(state.shake, tigerMetal ? 6.4 : voidChef ? 5.6 : dragonWood ? 5.2 : jet ? 4.2 : neonMedic ? 3.6 : ikun ? 3.2 : 2.5);
      if (boss.hp <= 0) defeatBoss();
    }
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      const hit = h.type === "pipeTop" || h.type === "pipeBottom"
        ? !(beam.x + beam.w < h.x || beam.x > h.x + h.w || beam.y + beam.h < h.y || beam.y > h.y + h.h)
        : rectVsEllipse(beam.x, beam.y, beam.w, beam.h, h.x, h.y, Math.max(8, h.w * 0.5), Math.max(8, h.h * 0.5));
      if (!hit) continue;
      if (h.type === "toilet") {
        h.hp -= damage * (tigerMetal ? 0.2 : voidChef ? 0.16 : dragonWood ? 0.15 : neonMedic ? 0.12 : alchemist ? 0.11 : jet ? 0.1 : 0.08);
        h.slow = Math.max(h.slow || 0, voidChef ? 1.48 : dragonWood ? 1.36 : neonMedic ? 0.72 : paper ? 0.64 : ikun ? 0.42 : alchemist ? 0.5 : tigerMetal ? 0.44 : 0.26);
        if (alchemist) h.poison = Math.max(h.poison || 0, 3.2);
        if (paper) {
          h.vy = (h.vy || 0) * 0.55 + (hero.y - h.y) * 0.32;
          h.x -= 26 * playScale();
        }
        if (dragonWood) h.vy = (h.vy || 0) * 0.42 + (hero.y - h.y) * 0.28;
        if (voidChef) {
          h.vy = (h.vy || 0) * 0.34 + (hero.y - h.y) * 0.34;
          h.x += 20 * playScale();
        }
        if (neonMedic) {
          h.hp -= damage * 0.04;
          if (state.health < state.maxHealth * 0.92) state.health = clamp(state.health + state.maxHealth * 0.0025, 0, state.maxHealth);
        }
        if (tigerMetal) h.hp -= damage * 0.08;
        h.hit = 0.12;
        if (h.hp > 0) continue;
      }
      pop(h.x, h.y, tigerMetal ? "#fff8e8" : voidChef ? "#33f0df" : neonMedic ? "#54d0ff" : dragonWood ? "#35d07f" : ikun ? "#fff3c4" : jet ? "#9de8ff" : alchemist ? "#a7f04a" : paper ? "#fff8e8" : "#ffcf5c", tigerMetal ? 16 : voidChef ? 15 : neonMedic ? 13 : dragonWood ? 15 : ikun ? 12 : paper ? 14 : 8);
      hazards.splice(i, 1);
      state.combo += 1;
      state.comboTimer = 1.6;
      maybeStartFever();
    }
  }

  function updateHazards(dt) {
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const h = hazards[i];
      const hitsBefore = state.hitsTaken || 0;
      const healthBefore = state.health || 0;
      const landscapeEase = isLandscapePlay() ? 0.86 : 1;
      const hitEase = h.type === "pipeTop" || h.type === "pipeBottom" ? 1 : landscapeHitScale();
      const slowFactor = h.slow > 0 ? 0.58 : 1;
      const speed = (state.speed + ((h.type === "plunger" || h.type === "barricade" ? 70 : 20) + (h.elite ? 28 : 0) + (h.bossSpeed || 0)) * landscapeEase) * slowFactor;
      h.x -= speed * dt;
      h.hit = Math.max(0, (h.hit || 0) - dt);
      h.slow = Math.max(0, (h.slow || 0) - dt);
      h.contactCooldown = Math.max(0, (h.contactCooldown || 0) - dt);
      if (h.poison > 0) {
        h.poison = Math.max(0, h.poison - dt);
        if (h.type === "toilet") {
          h.hp -= dt * (0.65 + state.attackDamage * 0.18);
          h.hit = Math.max(h.hit || 0, 0.08);
          if (h.hp <= 0) {
            destroyHazard(i, h);
            continue;
          }
        }
      }

      if (h.type === "toilet") {
        h.phase += dt * 2.4;
        h.y += (Math.sin(h.phase) * 18 + h.vy) * dt;
        h.y = clamp(h.y, playTop() + h.w * 0.38, playBottom() - h.w * 0.38);
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.w * 0.78 * hitEase)) {
          damageHero(h.elite ? 22 : 14);
          destroyHazard(i, h, false);
          continue;
        }
      } else if (h.type === "bossPoop") {
        h.x += h.vx * dt;
        h.y += h.vy * dt;
        h.vy += (h.gravity || 28) * dt;
        h.spin += dt * 5;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          damageHero(h.bossDamage || (16 + (boss ? boss.level * 2 : 0)));
          hazards.splice(i, 1);
          pop(h.x, h.y, "#8b5a2b", 10);
          continue;
        }
      } else if (h.type === "energyBall") {
        h.x += (h.vx || 0) * dt;
        h.y += (h.vy || 0) * dt;
        h.phase += dt * 6;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          damageHero(h.bossDamage || (14 + (boss ? boss.level * 2 : 0)));
          hazards.splice(i, 1);
          pop(h.x, h.y, h.color || "#9de8ff", 12);
          continue;
        }
      } else if (h.type === "plunger") {
        h.spin += dt * 12;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          damageHero(h.bossDamage || 10);
          hazards.splice(i, 1);
          pop(h.x, h.y, "#ff6a59", 8);
          continue;
        }
      } else if (h.type === "stinkCloud") {
        h.phase += dt * 2;
        h.y += Math.sin(h.phase) * 10 * dt;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          h.hit = Math.max(h.hit || 0, 0.16);
          if (h.contactCooldown <= 0) {
            damageHero(h.bossDamage || 6);
            h.contactCooldown = h.bossDamage ? 0.38 : 0.55;
            pop(h.x, h.y, "#a7f04a", 5);
          }
          state.energy = Math.max(0, state.energy - 9 * dt);
          hero.vy += 80 * dt;
          h.slow = 0.2;
        }
      } else if (h.type === "soapBubble") {
        h.phase += dt * 3.4;
        h.y += Math.sin(h.phase) * 42 * dt;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          if (h.bossDamage) damageHero(h.bossDamage);
          hero.vy = -260;
          if (!h.bossDamage) {
            state.energy = Math.min(state.maxEnergy, state.energy + 5);
            addMountCharge(6);
            gainStyle(6, "泡泡借力", "#9de8ff");
          }
          state.shake = Math.max(state.shake, 4);
          hazards.splice(i, 1);
          pop(h.x, h.y, "#9de8ff", 12);
          beep(700, 0.035, "sine", 0.03);
          continue;
        }
      } else if (h.type === "barricade") {
        h.phase += dt * 8.5;
        h.y += Math.sin(h.phase) * 18 * dt;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          h.hit = Math.max(h.hit || 0, 0.18);
          if (h.contactCooldown <= 0) {
            damageHero(h.bossDamage || 12);
            h.contactCooldown = isLandscapePlay() ? 0.62 : 0.48;
            h.x -= isLandscapePlay() ? 16 : 24;
            hero.vy = clamp(hero.vy - 120, -420, 300);
            state.shake = Math.max(state.shake, 4.5);
            pop(h.x, h.y, "#ff8d54", 8);
          }
        }
      } else if (h.type === "sludgeBarrel") {
        h.phase += dt * 2.2;
        h.y += Math.sin(h.phase) * 13 * dt;
        if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, h.x, h.y, h.w * hitEase, h.h * hitEase)) {
          h.hit = Math.max(h.hit || 0, 0.2);
          if (h.contactCooldown <= 0) {
            damageHero(h.bossDamage || 10);
            h.contactCooldown = h.bossDamage ? 0.42 : 0.6;
            pop(h.x, h.y, "#c45dff", 8);
          }
          state.energy = Math.max(0, state.energy - 13 * dt);
          h.slow = 0.28;
        }
      } else if (h.type === "acidGeyser") {
        h.phase += dt * 5.2;
        const pulse = 0.82 + Math.sin(h.phase) * 0.18;
        if (rectVsEllipse(h.x - h.w * hitEase * 0.5, h.y - h.h * hitEase * 0.5, h.w * hitEase, h.h * pulse * hitEase, hero.x, hero.y, hero.radiusX, hero.radiusY)) {
          damageHero(13);
          state.energy = Math.max(0, state.energy - 16 * dt);
          h.slow = 0.25;
        }
      } else if (h.type === "pipeTop" || h.type === "pipeBottom") {
        const inset = isLandscapePlay() ? Math.min(6, h.w * 0.18) : 0;
        if (rectVsEllipse(h.x + inset, h.y, Math.max(0, h.w - inset * 2), h.h, hero.x, hero.y, hero.radiusX, hero.radiusY)) {
          damageHero(h.bossDamage || 8);
        }
      } else if (rectVsEllipse(h.x, h.y, h.w, h.h, hero.x, hero.y, hero.radiusX, hero.radiusY)) {
        damageHero(h.bossDamage || 8);
      }

      if ((state.hitsTaken || 0) > hitsBefore || (state.health || 0) < healthBefore - 0.01) {
        h.routeDamaged = true;
        if (state.gameMode === "stage") state.classicRouteClearStreak = 0;
      }

      awardNearMiss(h);
      if (h.x < -180) {
        awardClassicRouteClear(h);
        hazards.splice(i, 1);
      }
    }
  }

  function awardClassicRouteClear(h) {
    if (!h || h.routeDamaged || state.gameMode !== "stage" || state.mode !== "playing" || state.classicDistrictClaimed) return;
    const pattern = h.routePattern || hazardPatternKey(h);
    if (!pattern || pattern === "bossPoop" || pattern === "energyBall") return;
    const s = playScale();
    const group = h.routeGroup || `${pattern}:${Math.round((h.x || 0) / Math.max(1, 44 * s))}`;
    if (state.classicRouteLastClearGroup === group) return;
    state.classicRouteLastClearGroup = group;
    const threat = hazardThreatProfile(h);
    const severe = threat.severe || pattern === "barricade" || pattern === "sludgeBarrel" || pattern === "acidGeyser";
    const value = pattern === "pipePair" ? 1.35 : severe ? 1.65 : 1.1;
    addClassicDistrictProgress(value, "clear");
    state.classicRouteClearPulse = Math.max(state.classicRouteClearPulse || 0, severe ? 0.52 : 0.34);
    state.classicDistrictPulse = Math.max(state.classicDistrictPulse || 0, severe ? 0.24 : 0.16);
    state.classicRouteClearStreak = (state.classicRouteClearStreak || 0) + 1;
    if (state.classicRouteClearStreak > 0 && state.classicRouteClearStreak % 4 === 0) {
      const profile = classicStageProfile(activeStage());
      const color = profile.districtColor || "#5bded4";
      state.eventName = `${profile.short}清障 x${state.classicRouteClearStreak}`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.75);
      gainStyle(5, "旧城清障", color);
      pop(hero.x + 30 * s, hero.y - 10 * s, color, 8);
    }
  }

  function awardNearMiss(h) {
    if (h.nearMissAwarded || state.mode !== "playing" || hero.invuln > 0.05) return;
    if (h.type === "pipeTop" || h.type === "pipeBottom") return;
    const hx = h.x;
    const hy = h.y;
    const rx = Math.max(18, (h.w || 42) * 0.5);
    const ry = Math.max(18, (h.h || h.w || 42) * 0.5);
    const passed = hx + rx < hero.x - hero.radiusX * 0.55 && hx + rx > hero.x - hero.radiusX * 2.7;
    const closeY = Math.abs(hy - hero.y) < hero.radiusY + ry + 22 * playScale();
    const safeGapScale = 0.78 * landscapeHitScale();
    const safeGap = !hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, hx, hy, (h.w || rx * 2) * safeGapScale, (h.h || ry * 2) * safeGapScale);
    if (!passed || !closeY || !safeGap) return;
    h.nearMissAwarded = true;
    state.nearMissTimer = 0.8;
    state.combo += 1;
    state.comboTimer = 2.1;
    recordRunStat("nearMisses", 1);
    addAdventureRouteProgress(2.2, { silent: true, pulse: true });
    addMountCharge(26);
    state.energy = clamp(state.energy + 6 + state.level * 0.25, 0, state.maxEnergy);
    if (runPerkLevel("timewarp") > 0) {
      state.draftTimer = Math.max(state.draftTimer, 1.25 + runPerkLevel("timewarp") * 0.35);
      state.energy = clamp(state.energy + 5 * runPerkLevel("timewarp"), 0, state.maxEnergy);
    }
    addRoundedScore((46 + state.combo * 4) * state.scoreBonus * (state.feverTimer > 0 ? 1.35 : 1));
    state.eventName = "极限闪避";
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.75);
    gainStyle(13, "极限闪避", "#9de8ff");
    pop(hero.x + 24 * playScale(), hero.y, "#9de8ff", 7);
    maybeChargeCounterFromDodge();
    maybeStartFever();
  }

  function maybeSpawnBoss() {
    if (boss) return;
    const s = playScale();
    let level = state.bossLevel;
    let profile = bossProfileForEndless(level);
    let bossName = profile.name;
    if (state.gameMode === "daily") {
      level = 18 + currentHeroLevel();
      profile = dailyBossProfile();
      bossName = `每日挑战 ${profile.name}`;
    } else if (isStageMode()) {
      const stage = activeStage();
      if (!stage.bossStage || state.stageBossSpawned || state.score < state.stageTarget) return;
      if (state.gameMode === "adventure" && !adventureStageObjectivesReady(stage)) {
        markAdventureObjectivesBlocked(stage);
        return;
      }
      level = stage.bossLevel + Math.floor(stage.number / 5);
      profile = bossProfileForStage(stage);
      bossName = `${state.gameMode === "adventure" ? "冒险" : "第"} ${stage.number} 关 ${profile.name}`;
      state.stageBossSpawned = true;
    } else if (state.score < state.nextBossScore) {
      return;
    }
    const growth = bossGrowth(level);
    const endlessProgress = state.gameMode === "endless" ? endlessBossProgress(level) : null;
    const stagePower = state.gameMode === "daily" ? currentHeroLevel() * 12 : isStageMode() ? activeStage().number * (state.gameMode === "adventure" ? 7.6 : 6.2) : endlessProgress ? endlessProgress.stagePower : state.bossLevel * 4.8;
    const stagePowerScale = isStageMode() ? stageBossPowerScale(activeStage()) : 1;
    const baseHp = Math.round((26 + level * 15 + state.level * 3 + stagePower) * profile.hp * growth.hp * bossHpScaleFromPower(stagePowerScale));
    boss = {
      level,
      profile,
      name: bossName,
      x: state.width + 150 * s,
      y: (playTop() + playBottom()) * 0.5,
      targetX: state.width - 84 * s,
      w: bossWidth(level, s),
      h: bossHeight(level, s),
      hp: baseHp,
      maxHp: baseHp,
      damageScale: growth.damage * bossDamageScaleFromPower(stagePowerScale),
      cadenceScale: growth.cadence * bossCadenceScaleFromPower(stagePowerScale),
      speedScale: growth.speed * bossSpeedScaleFromPower(stagePowerScale),
      power: 0,
      daily: state.gameMode === "daily",
      phase: 0,
      attackTimer: bossAttackInterval(0.95),
      weakTimer: state.gameMode === "daily" ? 3.2 : random(7.5, 10.5),
      weakDuration: 0,
      weakOffset: 0,
      breakMeter: 0,
      breakTimer: 0,
      breakCooldown: 0,
      breakCount: 0,
      poisonTimer: 0,
      stunTimer: 0,
      paralyzeTimer: 0,
      freezeTimer: 0,
      rootTimer: 0,
      controlFlash: 0,
      enraged: false,
      hit: 0,
      attackStep: 0,
      nextAttack: "",
      previewSafeLane: null,
      attackControlDelayCooldown: 0,
    };
    const tuning = bossDifficultyTuning(boss);
    boss.maxHp = Math.max(1, Math.round(boss.maxHp * tuning.hp));
    boss.hp = boss.maxHp;
    boss.damageScale *= tuning.damage;
    boss.cadenceScale *= tuning.cadence;
    boss.speedScale *= tuning.speed;
    boss.rewardScale = tuning.reward;
    boss.tuningRatio = tuning.ratio;
    if (boss.daily) {
      tuneDailyBossToTarget(boss);
    } else {
      boss.power = bossCombatPower(boss);
    }
    const rating = currentBossBattleRating();
    if (rating) {
      state.eventName = rating.key === "critical" ? "强敌压境" : rating.key === "danger" ? "谨慎迎战" : rating.key === "crush" ? "战力压制" : "BOSS 登场";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.45);
    }
    hazards.length = 0;
    state.spawnTimer = 3.2;
    state.shake = Math.max(state.shake, 6);
    beep(180, 0.18, "sawtooth", 0.05);
  }

  function bossThreatCount() {
    return hazards.reduce((count, hazard) => count + (hazard.bossDamage || hazard.type === "bossPoop" ? 1 : 0), 0);
  }

  function bossThreatBudget() {
    const budget = effectBudget().hazards;
    if (!isLandscapePlay()) return Math.max(16, Math.floor(budget * 0.72 * BOSS_PROJECTILE_DENSITY_SCALE));
    const tight = landscapeTightness();
    const dailyEase = boss && boss.daily ? 0.72 : 1;
    const compactEase = state.height <= 430 ? 0.6 : 0.72;
    return Math.max(boss && boss.daily ? 9 : 11, Math.floor((budget * compactEase * dailyEase - tight * 4) * BOSS_PROJECTILE_DENSITY_SCALE));
  }

  function trimBossThreatOverflow() {
    const budget = bossThreatBudget();
    let count = bossThreatCount();
    if (count < budget) return;
    const s = playScale();
    const target = Math.max(0, budget - 2);
    for (let i = 0; i < hazards.length && count > target; i += 1) {
      const hazard = hazards[i];
      if (!hazard || !(hazard.bossDamage || hazard.type === "bossPoop")) continue;
      if (hazard.x > hero.x - 70 * s && count <= budget + 2) continue;
      hazards.splice(i, 1);
      i -= 1;
      count -= 1;
    }
  }

  function bossSafeLane() {
    const s = playScale();
    const top = playTop() + hero.radiusY + 18 * s;
    const bottom = playBottom() - hero.radiusY - 18 * s;
    const playable = Math.max(90 * s, bottom - top);
    const half = clamp(playable * (isLandscapePlay() ? 0.15 : 0.13), 38 * s, 60 * s);
    const roomUp = Math.max(0, hero.y - top);
    const roomDown = Math.max(0, bottom - hero.y);
    const dir = roomDown >= roomUp ? 1 : -1;
    let center = hero.y + dir * (half + hero.radiusY + 18 * s);
    if (center < top + half || center > bottom - half) {
      center = hero.y - dir * (half + hero.radiusY + 18 * s);
    }
    center = clamp(center, top + half, bottom - half);
    return { top, bottom, center, half };
  }

  function moveOutsideBossSafeLane(y, radius, safe) {
    if (!safe) return y;
    const pad = 10 * playScale();
    if (Math.abs(y - safe.center) >= safe.half + radius + pad) return clamp(y, safe.top + radius, safe.bottom - radius);
    const upper = safe.center - safe.half - radius - pad;
    const lower = safe.center + safe.half + radius + pad;
    const upperOk = upper >= safe.top + radius;
    const lowerOk = lower <= safe.bottom - radius;
    if (upperOk && lowerOk) return Math.abs(y - upper) < Math.abs(y - lower) ? upper : lower;
    if (upperOk) return upper;
    if (lowerOk) return lower;
    return clamp(y, safe.top + radius, safe.bottom - radius);
  }

  function bossHazardLaneRadius(hazard) {
    const s = playScale();
    const vertical = hazard.h || hazard.w || 42 * s;
    return Math.max(16 * s, vertical * 0.5);
  }

  function bossThreatYAtHero(hazard) {
    const landscapeEase = isLandscapePlay() ? 0.86 : 1;
    const extra = ((hazard.type === "plunger" || hazard.type === "barricade" ? 70 : 20) + (hazard.bossSpeed || 0)) * landscapeEase;
    const netVx = (hazard.vx || 0) - (state.speed + extra);
    if (netVx >= -24 || hazard.x <= hero.x) return null;
    const t = (hazard.x - hero.x) / Math.abs(netVx);
    if (t < 0.08 || t > 3.2) return null;
    return hazard.y + (hazard.vy || 0) * t + 0.5 * (hazard.gravity || 0) * t * t;
  }

  function protectBossDodgeLane(hazard) {
    const safe = boss && boss.currentSafeLane;
    if (!safe || !hazard || hazard.ignoreSafeLane) return hazard;
    const s = playScale();
    if (hazard.type === "pipeBottom") {
      const minY = safe.center + safe.half + 14 * s;
      if (hazard.y < minY) {
        hazard.y = clamp(minY, playTop() + 36 * s, playBottom() - 24 * s);
        hazard.h = Math.max(0, state.height - hazard.y);
      }
      return hazard;
    }
    if (hazard.type === "pipeTop") {
      const maxH = safe.center - safe.half - 14 * s;
      if (hazard.h > maxH) hazard.h = Math.max(0, maxH);
      return hazard;
    }
    const radius = bossHazardLaneRadius(hazard);
    const projectedY = bossThreatYAtHero(hazard);
    if (projectedY !== null && Math.abs(projectedY - safe.center) < safe.half + radius) {
      const side = projectedY <= safe.center ? -1 : 1;
      const desiredY = clamp(safe.center + side * (safe.half + radius + 16 * s), safe.top + radius, safe.bottom - radius);
      const landscapeEase = isLandscapePlay() ? 0.86 : 1;
      const extra = ((hazard.type === "plunger" || hazard.type === "barricade" ? 70 : 20) + (hazard.bossSpeed || 0)) * landscapeEase;
      const netVx = (hazard.vx || 0) - (state.speed + extra);
      const t = netVx < -24 ? (hazard.x - hero.x) / Math.abs(netVx) : 0;
      if (t > 0.08) hazard.vy = (hazard.vy || 0) + (desiredY - projectedY) / t;
    }
    if (Math.abs((hazard.y || safe.center) - safe.center) < safe.half + radius) {
      hazard.y = moveOutsideBossSafeLane(hazard.y || safe.center, radius, safe);
    }
    return hazard;
  }

  function bossSolidHazardOverlapsSameType(candidate) {
    if (!candidate || candidate.type === "bossPoop" || candidate.type === "energyBall") return false;
    const key = hazardPatternKey(candidate);
    const w = candidate.w || 42 * playScale();
    const h = candidate.h || w;
    return hazards.some((hazard) => {
      if (!hazard || hazardPatternKey(hazard) !== key) return false;
      const otherW = hazard.w || 42 * playScale();
      const otherH = hazard.h || otherW;
      return Math.abs((hazard.x || 0) - (candidate.x || 0)) < Math.max(w, otherW) * 0.72
        && Math.abs((hazard.y || 0) - (candidate.y || 0)) < Math.max(h, otherH) * 0.72;
    });
  }

  function pushBossHazard(hazard) {
    protectBossDodgeLane(hazard);
    if (bossSolidHazardOverlapsSameType(hazard)) return false;
    if (bossThreatCount() >= bossThreatBudget()) return false;
    hazards.push(hazard);
    return true;
  }

  function updateBoss(dt) {
    if (!boss) return;
    const s = playScale();
    const profile = boss.profile || bossProfileForEndless(boss.level);
    boss.phase += dt;
    boss.hit = Math.max(0, boss.hit - dt);
    if (boss.poisonTimer > 0) {
      boss.poisonTimer = Math.max(0, boss.poisonTimer - dt);
      const poisonDamage = dt * (4 + state.attackDamage * 0.9 + currentEvolution() * 3.4) * styleMultiplier();
      boss.hp -= poisonDamage;
      recordRunStat("bossDamage", poisonDamage);
      if (state.gameMode === "daily") state.dailyDamage += poisonDamage;
      if (boss.hp <= 0) {
        defeatBoss();
        return;
      }
    }
    boss.breakTimer = Math.max(0, (boss.breakTimer || 0) - dt);
    boss.breakCooldown = Math.max(0, (boss.breakCooldown || 0) - dt);
    boss.stunTimer = Math.max(0, (boss.stunTimer || 0) - dt);
    boss.paralyzeTimer = Math.max(0, (boss.paralyzeTimer || 0) - dt);
    boss.freezeTimer = Math.max(0, (boss.freezeTimer || 0) - dt);
    boss.rootTimer = Math.max(0, (boss.rootTimer || 0) - dt);
    boss.controlFlash = Math.max(0, (boss.controlFlash || 0) - dt);
    boss.attackControlDelayCooldown = Math.max(0, (boss.attackControlDelayCooldown || 0) - dt);
    boss.w = bossWidth(boss.level, s);
    boss.h = bossHeight(boss.level, s);
    const rightAnchor = isLandscapePlay()
      ? Math.max(24 * s, boss.w * 0.48)
      : boss.daily
        ? Math.max(64 * s, boss.w * 0.45)
        : (78 + boss.level * 1.5) * s;
    boss.targetX = state.width - rightAnchor;
    boss.x += (boss.targetX - boss.x) * Math.min(1, dt * (isLandscapePlay() ? 2.8 : 2.2));
    const sway = boss.daily
      ? Math.min((playBottom() - playTop()) * (isLandscapePlay() ? 0.18 : 0.24), (28 + bossAttackLevel() * 1.4) * s)
      : (34 + boss.level * 3) * s * (isLandscapePlay() ? 0.74 : 1);
    boss.y = clamp(
      (playTop() + playBottom()) * 0.5 + Math.sin(boss.phase * 1.4) * sway,
      playTop() + boss.h * 0.45,
      playBottom() - boss.h * 0.45
    );

    if (boss.breakTimer > 0) {
      boss.weakDuration = 0;
    } else if (boss.weakDuration > 0) {
      boss.weakDuration = Math.max(0, boss.weakDuration - dt);
    } else {
      boss.weakTimer -= dt;
      if (boss.weakTimer <= 0) {
        boss.weakDuration = boss.daily ? 2.8 : 2.15;
        boss.weakTimer = random(boss.daily ? 6.4 : 8.5, boss.daily ? 8.2 : 12);
        boss.weakOffset = random(-0.24, 0.24);
        state.eventName = boss.daily ? "弱点暴露：猛攻" : "BOSS 弱点";
        state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.15);
        pop(boss.x - boss.w * 0.24, boss.y + boss.h * boss.weakOffset, "#fff1a6", 12);
      }
    }

    if (!boss.enraged && boss.hp < boss.maxHp * 0.5) {
      boss.enraged = true;
      boss.damageScale = (boss.damageScale || 1) * 1.08;
      boss.cadenceScale = Math.max(0.78, (boss.cadenceScale || 1) * 0.93);
      boss.speedScale = Math.min(1.16, (boss.speedScale || 1) * 1.05);
      boss.power = boss.daily ? syncDailyBossPower() : bossCombatPower(boss);
      state.eventName = "BOSS 狂暴";
      state.eventLabelTimer = 1.45;
      state.shake = Math.max(state.shake, 7);
      pop(boss.x, boss.y, "#ff5650", 24);
      beep(140, 0.13, "sawtooth", 0.045);
    }

    const breakActive = boss.breakTimer > 0;
    const hardControlActive = bossHardControlActive();
    const softControlActive = bossControlActive() && !hardControlActive;
    boss.attackTimer -= dt * (hardControlActive ? (breakActive ? 0.24 : 0.46) : softControlActive ? 0.72 : 1);
    if (hardControlActive) boss.attackTimer = Math.max(boss.attackTimer, breakActive ? 0.34 : 0.18);
    boss.warning = !hardControlActive && boss.attackTimer <= 0.5;
    if (boss.warning) {
      if (!boss.nextAttack) boss.nextAttack = chooseBossAttack(profile);
      if (!boss.previewSafeLane) boss.previewSafeLane = bossSafeLane();
    } else {
      boss.previewSafeLane = null;
      if (hardControlActive) boss.nextAttack = "";
    }
    if (!hardControlActive && boss.attackTimer <= 0) {
      if (bossThreatCount() >= bossThreatBudget()) {
        trimBossThreatOverflow();
      }
      if (bossThreatCount() >= bossThreatBudget()) {
        boss.warning = false;
        boss.previewSafeLane = null;
        boss.attackTimer = isLandscapePlay() ? 0.28 : 0.22;
        return;
      }
      boss.warning = false;
      const landscapeCadenceRelief = isLandscapePlay() ? 0.16 : 0;
      const dailyCadenceRelief = boss.daily ? (isLandscapePlay() ? 0.58 : 0.46) : 0;
      const levelCadencePressure = boss.level * (boss.daily ? 0.006 : 0.018);
      const minCadence = boss.daily ? (isLandscapePlay() ? 1.28 : 1.12) : (isLandscapePlay() ? 0.78 : 0.64);
      boss.attackTimer = bossAttackInterval(Math.max(minCadence, (profile.cadence + 0.34 + landscapeCadenceRelief + dailyCadenceRelief - levelCadencePressure) * (boss.cadenceScale || 1)));
      boss.currentSafeLane = boss.previewSafeLane || bossSafeLane();
      fireBossAttack(profile, bossAttackScale(), boss.nextAttack);
      boss.currentSafeLane = null;
      boss.previewSafeLane = null;
      boss.nextAttack = "";
      boss.attackStep = (boss.attackStep || 0) + 1;
    }

    const contactEase = isLandscapePlay() ? 0.82 : 1;
    const contactW = boss.w * (boss.daily ? 0.62 : 0.84) * contactEase;
    const contactH = boss.h * (boss.daily ? 0.56 : 0.74) * contactEase;
    if (hitEllipseRect(hero.x, hero.y, hero.radiusX, hero.radiusY, boss.x, boss.y, contactW, contactH)) {
      damageHero(Math.round((24 + boss.level * 5) * profile.damage * (boss.damageScale || 1) * (breakActive ? 0.58 : 1)));
      hero.vy = -220;
    }
  }

  function chooseBossAttack(profile) {
    if (!boss) return profile.attack;
    const primary = profile.attack;
    const level = bossAttackLevel();
    const step = boss.attackStep || 0;
    const variants = [primary];
    if (level >= 3) variants.push("aimedArc");
    if (level >= 5 || boss.enraged) variants.push("orbBurst");
    if (level >= 8 && !boss.daily) variants.push("splitFan");
    const scripted = step > 0 && step % 4 === 0 && variants.includes("orbBurst")
      ? "orbBurst"
      : step % 3 === 1 && variants.includes("aimedArc")
        ? "aimedArc"
        : "";
    if (scripted && scripted !== boss.lastAttack) {
      boss.lastAttack = scripted;
      return scripted;
    }
    const pool = variants.filter((key) => key !== boss.lastAttack);
    const picked = pool[Math.floor(Math.random() * pool.length)] || primary;
    boss.lastAttack = picked;
    return picked;
  }

  function fireBossAttack(profile, s, attackOverride = "") {
    profile = { ...profile, attack: attackOverride || chooseBossAttack(profile) };
    const level = bossAttackLevel();
    const damageScale = boss.damageScale || 1;
    const speedScale = boss.speedScale || 1;
    const landscape = isLandscapePlay();
    const dailyEase = boss.daily ? 0.76 : 1;
    const bossSpeedEase = (landscape ? 0.82 : 1) * dailyEase;
    const laneEase = landscape ? 0.72 : 1;
    if (profile.attack === "aimedArc") {
      pushBossPoop(0, 0, -(220 + level * 24) * s, 0, profile.color, 1.08, {
        arc: true,
        targetX: hero.x,
        targetY: hero.y,
        ignoreSafeLane: true,
      });
      if (level >= 9 && !landscape) {
        pushBossEnergyBall(-26 * s, -42 * s, -(150 + level * 10) * s, -52 * s, profile.color, 0.84);
        pushBossEnergyBall(-26 * s, 42 * s, -(150 + level * 10) * s, 52 * s, profile.color, 0.84);
      }
    } else if (profile.attack === "orbBurst") {
      const count = bossPatternCount(landscape ? 6 : 8, landscape ? 4 : 5);
      const speed = (132 + level * 9) * s * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase;
      const phase = (boss.attackStep || 0) * 0.37;
      for (let i = 0; i < count; i += 1) {
        const angle = phase + (Math.PI * 2 * i) / count;
        const vx = Math.cos(angle) * speed * (Math.cos(angle) > 0 ? 0.38 : 1);
        const vy = Math.sin(angle) * speed * (landscape ? 0.78 : 1);
        pushBossEnergyBall(0, 0, vx, vy, i % 2 ? profile.color : "#9de8ff", 0.86);
      }
    } else if (profile.attack === "splitFan") {
      const safe = boss.currentSafeLane || bossSafeLane();
      const lanes = landscape ? [-0.34, -0.16, 0.16, 0.34] : [-0.42, -0.2, 0, 0.2, 0.42];
      for (const lane of lanes) {
        const y = (playTop() + playBottom()) * 0.5 + lane * (playBottom() - playTop());
        if (Math.abs(y - safe.center) < safe.half + 26 * s) continue;
        pushBossPoop(-28 * s, y - boss.y, -(230 + level * 30) * s, lane * 82 * s, profile.color, 1.03);
      }
      pushBossEnergyBall(-18 * s, 0, -(118 + level * 8) * s, 0, "#c45dff", 0.92);
    } else if (profile.attack === "poopVolley") {
      const volley = bossPatternCount(Math.min(landscape ? 4 : 5, 2 + Math.floor(level / (landscape ? 3 : 2))), 2);
      for (let i = 0; i < volley; i += 1) {
        pushBossPoop(-i * 30 * s, (i - (volley - 1) / 2) * 22 * s * laneEase, -(230 + level * 34) * s, (i - (volley - 1) / 2) * 42 * s * laneEase, profile.color, 1.05);
      }
    } else if (profile.attack === "plungerCharge") {
      const count = bossPatternCount(Math.min(landscape ? 3 : 4, 2 + Math.floor(level / (landscape ? 4 : 3))), 2);
      for (let i = 0; i < count; i += 1) {
        pushBossHazard({
          type: "plunger",
          x: boss.x - boss.w * 0.42 - i * 34 * s,
          y: boss.y + (i - (count - 1) / 2) * 42 * s * laneEase,
          w: (92 + level * 5) * s,
          h: (32 + level * 2) * s,
          spin: random(0, 6.28),
          bossDamage: Math.round((18 + level * 4) * profile.damage * damageScale),
          bossSpeed: (150 + level * 18) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
        });
      }
    } else if (profile.attack === "stinkLab") {
      pushBossHazard({
        type: "stinkCloud",
        x: boss.x - boss.w * 0.5,
        y: boss.y + random(-44, 44) * s * laneEase,
        w: (142 + level * 7) * s,
        h: (78 + level * 4) * s,
        phase: random(0, 6.28),
        bossDamage: Math.round((9 + level * 2) * profile.damage * damageScale),
        bossSpeed: (55 + level * 8) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
      pushBossPoop(-28 * s, -28 * s * laneEase, -(210 + level * 28) * s, -70 * s * laneEase, profile.color, 0.95);
      pushBossPoop(-28 * s, 28 * s * laneEase, -(210 + level * 28) * s, 70 * s * laneEase, profile.color, 0.95);
    } else if (profile.attack === "bubbleStorm") {
      const count = bossPatternCount(Math.min(landscape ? 4 : 5, 3 + Math.floor(level / (landscape ? 4 : 3))), 2);
      for (let i = 0; i < count; i += 1) {
        pushBossHazard({
          type: "soapBubble",
          x: boss.x - boss.w * 0.42 - i * 22 * s,
          y: boss.y + (i - (count - 1) / 2) * 34 * s * laneEase,
          w: (60 + level * 4) * s,
          h: (60 + level * 4) * s,
          phase: random(0, 6.28),
          bossDamage: Math.round((12 + level * 3) * profile.damage * damageScale),
          bossSpeed: (105 + level * 12) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
        });
      }
    } else if (profile.attack === "sewerBarrage") {
      const lanes = landscape ? [-0.26, 0, 0.26] : [-0.35, 0, 0.35];
      for (const lane of lanes) {
        pushBossPoop(-26 * s, lane * (playBottom() - playTop()), -(250 + level * 38) * s, lane * 110 * s, profile.color, 1.25);
      }
      pushBossHazard({
        type: "pipeBottom",
        x: boss.x - boss.w * 0.6,
        y: playBottom() - (90 + level * 6) * s,
        w: (66 + level * 3) * s,
        h: state.height,
        bossDamage: Math.round((18 + level * 4) * profile.damage * damageScale),
      });
    } else if (profile.attack === "toxicPump") {
      pushBossHazard({
        type: "sludgeBarrel",
        x: boss.x - boss.w * 0.44,
        y: boss.y + random(-50, 50) * s * laneEase,
        w: (58 + level * 3) * s,
        h: (82 + level * 4) * s,
        phase: random(0, 6.28),
        bossDamage: Math.round((14 + level * 3) * profile.damage * damageScale),
        bossSpeed: (82 + level * 9) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
      pushBossPoop(-28 * s, -34 * s * laneEase, -(220 + level * 30) * s, -90 * s * laneEase, profile.color, 1.12);
      pushBossPoop(-34 * s, 30 * s * laneEase, -(205 + level * 26) * s, 80 * s * laneEase, "#c45dff", 1.02);
    } else if (profile.attack === "mixerBlade") {
      const count = bossPatternCount(Math.min(landscape ? 4 : 5, 2 + Math.floor(level / (landscape ? 3 : 2))), 2);
      for (let i = 0; i < count; i += 1) {
        pushBossHazard({
          type: "barricade",
          x: boss.x - boss.w * 0.46 - i * 24 * s,
          y: boss.y + (i - (count - 1) / 2) * 36 * s * laneEase,
          w: (92 + level * 4) * s,
          h: (46 + level * 2) * s,
          phase: random(0, 6.28),
          bossDamage: Math.round((16 + level * 3) * profile.damage * damageScale),
          bossSpeed: (118 + level * 11) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
        });
      }
    } else if (profile.attack === "wasteCore") {
      const lanes = landscape ? [-0.32, -0.1, 0.1, 0.32] : [-0.42, -0.14, 0.14, 0.42];
      for (const lane of lanes) {
        pushBossPoop(-34 * s, lane * (playBottom() - playTop()), -(250 + level * 34) * s, lane * 95 * s, lane > 0 ? "#c45dff" : "#a7f04a", 1.28);
      }
      pushBossHazard({
        type: "stinkCloud",
        x: boss.x - boss.w * 0.5,
        y: boss.y + random(-30, 30) * s,
        w: (150 + level * 8) * s,
        h: (78 + level * 5) * s,
        phase: random(0, 6.28),
        bossDamage: Math.round((14 + level * 3) * profile.damage * damageScale),
        bossSpeed: (78 + level * 10) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
    } else if (profile.attack === "cycloneClog") {
      const lanes = landscape ? [-0.28, 0.28] : [-0.36, 0, 0.36];
      for (const lane of lanes) {
        pushBossPoop(-28 * s, lane * (playBottom() - playTop()), -(185 + level * 24) * s, lane * 70 * s, profile.color, 1.08);
      }
      pushBossHazard({
        type: "plunger",
        x: boss.x - boss.w * 0.48,
        y: boss.y + Math.sin(state.time * 2.4) * 54 * s * laneEase,
        w: (104 + level * 4) * s,
        h: (34 + level * 1.8) * s,
        spin: random(0, 6.28),
        bossDamage: Math.round((17 + level * 3.4) * profile.damage * damageScale),
        bossSpeed: (96 + level * 9) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
    } else if (profile.attack === "slimeCourt") {
      pushBossHazard({
        type: "sludgeBarrel",
        x: boss.x - boss.w * 0.45,
        y: boss.y + random(-58, 58) * s * laneEase,
        w: (68 + level * 3.2) * s,
        h: (92 + level * 4.2) * s,
        phase: random(0, 6.28),
        bossDamage: Math.round((16 + level * 3.4) * profile.damage * damageScale),
        bossSpeed: (76 + level * 8) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
      const cloudCount = landscape ? 1 : 2;
      for (let i = 0; i < cloudCount; i += 1) {
        pushBossHazard({
          type: "stinkCloud",
          x: boss.x - boss.w * 0.54 - i * 38 * s,
          y: boss.y + (i ? 46 : -46) * s * laneEase,
          w: (112 + level * 5) * s,
          h: (62 + level * 3) * s,
          phase: random(0, 6.28),
          bossDamage: Math.round((9 + level * 2) * profile.damage * damageScale),
          bossSpeed: (50 + level * 6) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
        });
      }
    } else if (profile.attack === "leviathanWave") {
      const lanes = landscape ? [-0.24, 0.24] : [-0.34, 0, 0.34];
      for (const lane of lanes) {
        pushBossPoop(-34 * s, lane * (playBottom() - playTop()), -(215 + level * 27) * s, lane * 76 * s, profile.color, 1.2);
      }
      pushBossHazard({
        type: "soapBubble",
        x: boss.x - boss.w * 0.46,
        y: boss.y + random(-42, 42) * s * laneEase,
        w: (76 + level * 4.2) * s,
        h: (76 + level * 4.2) * s,
        phase: random(0, 6.28),
        bossDamage: Math.round((15 + level * 3.2) * profile.damage * damageScale),
        bossSpeed: (82 + level * 8) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
    } else {
      const count = bossPatternCount(Math.min(landscape ? 5 : 7, 4 + Math.floor(level / (landscape ? 3 : 2))), landscape ? 3 : 4);
      for (let i = 0; i < count; i += 1) {
        const offset = (i - (count - 1) / 2) * 26 * s * laneEase;
        pushBossPoop(-i * 18 * s, offset, -(270 + level * 42) * s, offset * 1.5, i % 2 ? "#f5c84b" : "#ff8d54", 1.35);
      }
      pushBossHazard({
        type: "stinkCloud",
        x: boss.x - boss.w * 0.55,
        y: boss.y,
        w: (170 + level * 8) * s,
        h: (86 + level * 5) * s,
        phase: random(0, 6.28),
        bossDamage: Math.round((12 + level * 2) * profile.damage * damageScale),
        bossSpeed: (75 + level * 10) * BOSS_ATTACK_SPEED_SCALE * speedScale * bossSpeedEase,
      });
    }
    beep(profile.attack === "bubbleStorm" ? 720 : profile.attack === "plungerCharge" ? 180 : 130, 0.05, "square", 0.03);
  }

  function pushBossEnergyBall(dx, dy, vx, vy, color, scale = 1, options = {}) {
    const s = bossAttackScale();
    const level = bossAttackLevel();
    const speedScale = boss.speedScale || 1;
    const damageScale = boss.damageScale || 1;
    const landscape = isLandscapePlay();
    const dailyEase = boss.daily ? 0.76 : 1;
    const speedEase = (landscape ? 0.82 : 1) * dailyEase;
    pushBossHazard({
      type: "energyBall",
      x: boss.x - boss.w * 0.42 + dx,
      y: boss.y + dy,
      w: (34 + level * 2.2) * s * scale * (boss.daily ? 0.82 : 1) * (landscape ? 0.9 : 1),
      h: (34 + level * 2.2) * s * scale * (boss.daily ? 0.82 : 1) * (landscape ? 0.9 : 1),
      vx: vx * speedEase,
      vy: vy * speedEase,
      color,
      phase: random(0, 6.28),
      bossDamage: Math.round((15 + level * 3.2) * ((boss.profile && boss.profile.damage) || 1.2) * damageScale),
      ignoreSafeLane: !!options.ignoreSafeLane,
    });
  }

  function pushBossPoop(dx, dy, vx, vy, color, scale = 1, options = {}) {
    const s = bossAttackScale();
    const landscape = isLandscapePlay();
    const arc = options.arc === undefined ? Math.random() < (boss.daily ? (landscape ? 0.16 : 0.22) : (landscape ? 0.28 : 0.34)) : !!options.arc;
    const level = bossAttackLevel();
    const speedScale = boss.speedScale || 1;
    const damageScale = boss.damageScale || 1;
    const speedEase = (landscape ? 0.82 : 1) * (boss.daily ? 0.76 : 1);
    const startX = boss.x - boss.w * 0.42 + dx;
    const startY = boss.y + dy;
    const shotVx = vx * BOSS_ATTACK_SPEED_SCALE * speedScale * speedEase;
    const gravity = arc ? (options.gravity || (260 + level * 9) * s * speedScale * speedEase) : 28;
    let shotVy = vy * BOSS_ATTACK_SPEED_SCALE * speedScale * speedEase;
    if (arc) {
      const xBounds = heroXBounds();
      const targetX = clamp(options.targetX === undefined ? hero.x : options.targetX, xBounds.left, xBounds.right);
      const targetY = clamp(options.targetY === undefined ? hero.y : options.targetY, playTop() + hero.radiusY, playBottom() - hero.radiusY);
      const scrollSpeed = state.speed + 20 * (landscape ? 0.86 : 1);
      const netVx = Math.min(-60 * s, shotVx - scrollSpeed);
      const travelTime = clamp((startX - targetX) / Math.abs(netVx), 0.52, landscape ? 1.85 : 2.25);
      shotVy = clamp((targetY - startY - 0.5 * gravity * travelTime * travelTime) / travelTime, -(430 + level * 12) * s, (260 + level * 8) * s);
    }
    pushBossHazard({
      type: "bossPoop",
      x: startX,
      y: startY,
      w: (50 + level * 4) * s * scale * (boss.daily ? 0.78 : 1) * (landscape ? 0.94 : 1),
      h: (38 + level * 3) * s * scale * (boss.daily ? 0.78 : 1) * (landscape ? 0.94 : 1),
      vx: shotVx,
      vy: shotVy,
      gravity,
      color,
      spin: random(0, 6.28),
      bossDamage: Math.round((20 + level * 4) * ((boss.profile && boss.profile.damage) || 1.2) * damageScale),
      ignoreSafeLane: !!options.ignoreSafeLane,
    });
  }

  function rollBossPoopCoinDrop() {
    if (Math.random() >= BOSS_POOP_COIN_DROP_RATE) return 0;
    meta.poopCoins = (meta.poopCoins || 0) + 1;
    saveMeta();
    showRewardToast([{ type: "poopCoin", amount: 1 }], { duration: 2600 });
    return 1;
  }

  function defeatBoss() {
    if (!boss) return;
    const defeated = boss;
    recordRunStat("bossKills", 1);
    const poopCoinDrop = rollBossPoopCoinDrop();
    if (state.gameMode === "daily") {
      boss = null;
      hazards.length = 0;
      state.dailyBossDefeated = true;
      state.dailyDamage += defeated.maxHp * 0.08;
      if (poopCoinDrop > 0) panelCopy.textContent = "Boss 掉落了极稀有便便币 +1！";
      gameOver();
      return;
    }
    const s = playScale();
    const rewardScale = defeated.rewardScale || 1;
    const rewardScore = Math.round((680 + defeated.level * 260) * state.scoreBonus * rewardScale);
    const rewardXp = Math.round((190 + defeated.level * 80 + state.level * 10) * rewardScale);
    boss = null;
    hazards.length = 0;
    addRoundedScore(rewardScore);
    state.energy = state.maxEnergy;
    state.health = clamp(state.health + state.maxHealth * 0.45, 0, state.maxHealth);
    if (runPerkLevel("leech") > 0) {
      state.health = clamp(state.health + state.maxHealth * Math.min(0.22, runPerkLevel("leech") * 0.045), 0, state.maxHealth);
      state.energy = state.maxEnergy;
    }
    state.combo += 3 + defeated.level;
    state.comboTimer = 3.4;
    gainStyle(22, "BOSS 击破", "#f5c84b");
    recordRunStat("bossDamage", defeated.maxHp);
    recordRunStat("maxCombo", state.combo);
    state.bossRewardTimer = 2.6;
    gainXp(rewardXp);
    state.bossLevel = defeated.level + 1;
    state.nextBossScore = Math.floor(state.score + 950 + state.bossLevel * 620);
    state.spawnTimer = 2.4;
    state.pickupTimer = 0.7;
    state.shake = Math.max(state.shake, 11);
    const powerBonus = Math.max(0, Math.floor((defeated.power || bossCombatPower(defeated)) / (runPerkLevel("jackpot") > 0 ? 1600 : 1800)));
    if (powerBonus > 0) {
      const bonusCoins = runCoinReward(powerBonus * 18);
      const bonusMaterials = runMaterialReward(powerBonus);
      meta.coins += bonusCoins;
      meta.materials += bonusMaterials;
      saveMeta();
      showRewardToast([
        { type: "coin", amount: bonusCoins },
        { type: "material", amount: bonusMaterials },
        { type: "poopCoin", amount: poopCoinDrop },
      ]);
    } else if (poopCoinDrop > 0) {
      panelCopy.textContent = "Boss 掉落了极稀有便便币 +1！";
    }

    const dropCount = 1;
    for (let i = 0; i < dropCount; i += 1) {
      addPickup({
        type: "goldPoop",
        x: Math.min(defeated.x - i * 58 * s, state.width - 72 * s),
        y: clamp(defeated.y + (i - (dropCount - 1) / 2) * 46 * s, playTop() + 32 * s, playBottom() - 32 * s),
        r: pickupRadius("goldPoop", s),
        phase: random(0, 6.28),
      }, true);
    }
    dropEquipment("boss", defeated.level);
    pop(defeated.x, defeated.y, "#f5c84b", 34);
    beep(1040, 0.1, "triangle", 0.055);
    setTimeout(() => beep(1320, 0.11, "triangle", 0.045), 85);
    if (isStageMode()) {
      completeStage(true);
    }
  }

  function completeStage(fromBoss) {
    if (state.stageCompleted) return;
    state.stageCompleted = true;
    state.mode = "stageclear";
    const stage = activeStage();
    const stageList = activeStageList();
    const cleared = activeStageCleared();
    const firstClear = !cleared[stage.number];
    const coinReward = runCoinReward(firstClear ? stage.coinReward : Math.round(stage.coinReward * 0.35));
    const matReward = runMaterialReward(firstClear ? stage.materialReward : Math.max(1, Math.round(stage.materialReward * 0.28)));
    const cleanBonus = !fromBoss && state.hitsTaken === 0 ? runCoinReward(Math.round(stage.coinReward * (firstClear ? 0.14 : 0.06))) : 0;
    const routeBonusCoins = state.gameMode === "adventure" ? runCoinReward(Math.round(stage.coinReward * (firstClear ? 0.22 : 0.08))) : 0;
    const routeBonusMaterials = state.gameMode === "adventure" ? runMaterialReward(Math.max(1, Math.round(stage.materialReward * (firstClear ? 0.18 : 0.07)))) : 0;
    const classicProfile = state.gameMode === "stage" ? classicStageProfile(stage) : null;
    const classicRawBonus = classicStageBonus(stage, firstClear);
    const classicBonusCoins = classicRawBonus.coins > 0 ? runCoinReward(classicRawBonus.coins) : 0;
    const classicBonusMaterials = classicRawBonus.materials > 0 ? runMaterialReward(classicRawBonus.materials) : 0;
    const districtRawBonus = classicDistrictReward(stage, firstClear, state.classicDistrictClaimed);
    const districtBonusCoins = districtRawBonus.coins > 0 ? runCoinReward(districtRawBonus.coins) : 0;
    const districtBonusMaterials = districtRawBonus.materials > 0 ? runMaterialReward(districtRawBonus.materials) : 0;
    const totalCoinReward = coinReward + cleanBonus + routeBonusCoins + classicBonusCoins + districtBonusCoins;
    const totalMaterialReward = matReward + routeBonusMaterials + classicBonusMaterials + districtBonusMaterials;
    meta.coins += totalCoinReward;
    meta.materials += totalMaterialReward;
    if (firstClear) {
      cleared[stage.number] = true;
      if (state.gameMode === "adventure") {
        meta.maxAdventureStage = Math.max(meta.maxAdventureStage, Math.min(adventureStages.length, stage.number + 1));
      } else {
        meta.maxStage = Math.max(meta.maxStage, Math.min(stages.length, stage.number + 1));
      }
      if (stage.itemReward && meta.inventory[stage.itemReward] !== undefined) {
        meta.inventory[stage.itemReward] += 1;
      }
    }
    saveMeta();
    showRewardToast([
      { type: "coin", amount: totalCoinReward },
      { type: "material", amount: totalMaterialReward },
      { type: stage.itemReward || "energy", amount: firstClear && stage.itemReward && meta.inventory[stage.itemReward] !== undefined ? 1 : 0 },
    ]);
    finalizeRunStats("stageclear");
    const itemText = firstClear && stage.itemReward && meta.inventory[stage.itemReward] !== undefined ? `，奖励道具 +1` : "";
    const cleanText = cleanBonus > 0 ? `，无伤奖励 ${cleanBonus} 金币` : "";
    const routeText = routeBonusCoins > 0 || routeBonusMaterials > 0 ? `（含航图奖励 ${routeBonusCoins} 金币 / ${routeBonusMaterials} 材料）` : "";
    const classicText = classicProfile && (classicBonusCoins > 0 || classicBonusMaterials > 0) ? `（含${classicProfile.short}航线奖励 ${classicBonusCoins} 金币 / ${classicBonusMaterials} 材料）` : "";
    const districtText = districtBonusCoins > 0 || districtBonusMaterials > 0 ? `（城区稳定 ${districtBonusCoins} 金币 / ${districtBonusMaterials} 材料）` : "";
    const clearReason = state.gameMode === "adventure"
      ? fromBoss ? "航图和契约完成后击败 BOSS" : `航图 + 契约完成，分数达到 ${state.stageTarget}`
      : fromBoss ? "击败 BOSS" : `${classicProfile ? `${classicProfile.name}完成，` : ""}分数达到 ${state.stageTarget}`;
    const modeName = state.gameMode === "adventure" ? "冒险" : "";
    showMenu(`${modeName}第 ${stage.number} 关通关！${clearReason}，获得 ${totalCoinReward} 金币、${totalMaterialReward} 材料${routeText}${classicText}${districtText}${itemText}${cleanText}。`, stage.number >= stageList.length ? "再玩一次" : "下一关", true);
  }

  function updatePickups(dt) {
    const pickupLimit = activePickupLimit();
    if (pickups.length > pickupLimit) pickups.splice(0, pickups.length - pickupLimit);
    for (let i = pickups.length - 1; i >= 0; i -= 1) {
      const p = pickups[i];
      p.x -= (state.speed - (p.type === "goldPoop" ? 78 : 20)) * dt;
      p.phase += dt * 4.5;
      const collector = runPerkLevel("collector");
      const attractRange = state.magnetTimer > 0 ? 260 * playScale() + collector * 42 * playScale() : collector > 0 ? (82 + collector * 24) * playScale() : 0;
      if (attractRange > 0 && p.type !== "goldPoop" && p.type !== "draftGate") {
        const dx = hero.x - p.x;
        const dy = hero.y - p.y;
        const dist = Math.max(1, Math.hypot(dx, dy));
        if (dist < attractRange) {
          p.x += (dx / dist) * 330 * dt;
          p.y += (dy / dist) * 330 * dt;
        }
      }
      if (p.type === "goldPoop") {
        p.y += (hero.y - p.y) * dt * 1.2 + Math.sin(p.phase) * dt * 12;
      } else {
        p.y += Math.sin(p.phase) * dt * 18;
      }
      const pickupRadius = p.type === "draftGate" ? p.r * 0.74 : p.r;
      if (ellipseDistance(hero.x, hero.y, hero.radiusX, hero.radiusY, p.x, p.y, pickupRadius)) {
        pickups.splice(i, 1);
        addMountCharge(p.type === "goldPoop" || p.type === "relicShard" || p.type === "supplyCrate" || p.type === "mysteryCapsule" || p.type === "mountCore" || p.type === "comboSigil" || p.type === "counterSeal" || p.type === "elementCore" || p.type === "purificationCore" || p.type === "mirrorShard" || p.type === "forgeSigil" || p.type === "currentShell" || p.type === "breakCore" ? 18 : 10);
        const districtValue = classicDistrictPickupValue(p.type);
        addClassicDistrictProgress(districtValue, districtValue >= 8 ? "major" : "pickup");
        if (p.type === "draftGate") {
          recordRunStat("draftGates", 1);
          state.draftTimer = Math.max(state.draftTimer, 5.4 + runPerkLevel("windrider") * 1.5);
          addRoundedScore((210 + state.combo * 16) * state.scoreBonus * styleMultiplier());
          state.energy = clamp(state.energy + 18 + state.level * 0.45, 0, state.maxEnergy);
          state.combo += 3;
          state.comboTimer = 3.1;
          gainXp(64 + state.level * 4);
          gainStyle(20, "顺风穿门", "#9de8ff");
          recordRunStat("maxCombo", state.combo);
          pop(p.x, p.y, "#9de8ff", 22);
          if (runPerkLevel("gatecrash") > 0) {
            shockwaveFrom(p.x, p.y, 0.86 + runPerkLevel("gatecrash") * 0.16, "风门冲撞");
          }
          beep(1120, 0.07, "triangle", 0.045);
          maybeStartFever();
          continue;
        }
        if (p.type === "goldPoop") {
          recordRunStat("papers", 2);
          state.specialTimer = Math.max(state.specialTimer, 12 + state.bossLevel);
          state.energy = state.maxEnergy;
          state.health = clamp(state.health + state.maxHealth * 0.35, 0, state.maxHealth);
          addRoundedScore(420 * state.scoreBonus);
          gainXp(120 + state.level * 12);
          gainStyle(14, "黄金便便", "#f5c84b");
          pop(p.x, p.y, "#f5c84b", 24);
          beep(980, 0.09, "triangle", 0.05);
          continue;
        }
        if (p.type === "mysteryCapsule") {
          recordRunStat("mysteries", 1);
          triggerMysteryCapsule(p);
          addRoundedScore((96 + state.combo * 8) * state.scoreBonus * styleMultiplier());
          state.combo += 1;
          state.comboTimer = Math.max(state.comboTimer, 2.9);
          recordRunStat("maxCombo", state.combo);
          maybeStartFever();
          continue;
        }
        if (p.type === "supplyCrate") {
          recordRunStat("supplies", 1);
          triggerSupplyCrate(p);
          state.combo += 1;
          state.comboTimer = Math.max(state.comboTimer, 2.8);
          recordRunStat("maxCombo", state.combo);
          maybeStartFever();
          continue;
        }
        if (p.type === "relicShard") {
          recordRunStat("relics", 1);
          triggerRelicShard(p);
          state.combo += 2;
          state.comboTimer = Math.max(state.comboTimer, 3.1);
          recordRunStat("maxCombo", state.combo);
          maybeStartFever();
          continue;
        }
        if (p.type === "mountCore") {
          recordRunStat("mountCores", 1);
          triggerMountCore(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "comboSigil") {
          recordRunStat("comboSigils", 1);
          triggerComboSigil(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "counterSeal") {
          triggerCounterSeal(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "elementCore") {
          triggerElementCore(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "purificationCore") {
          triggerPurificationCore(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "mirrorShard") {
          triggerMirrorShard(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "forgeSigil") {
          triggerForgeSigil(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "currentShell") {
          triggerCurrentShell(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "breakCore") {
          triggerBreakCore(p);
          maybeStartFever();
          continue;
        }
        if (p.type === "energy") {
          state.energy = state.maxEnergy;
          addRoundedScore(64 * state.scoreBonus);
          pop(p.x, p.y, "#54d0ff", 14);
          beep(900, 0.055, "sine", 0.04);
          continue;
        }
        if (p.type === "shield") {
          state.shieldTimer = Math.max(state.shieldTimer, 8);
          addRoundedScore(80 * state.scoreBonus);
          pop(p.x, p.y, "#9de8ff", 18);
          beep(760, 0.07, "triangle", 0.04);
          continue;
        }
        if (p.type === "magnet") {
          state.magnetTimer = Math.max(state.magnetTimer, 9);
          addRoundedScore(72 * state.scoreBonus);
          pop(p.x, p.y, "#dfff7a", 18);
          beep(840, 0.07, "triangle", 0.04);
          continue;
        }
        if (p.type === "focusOrb") {
          const cooldownCut = 4.5 + currentEvolution() * 0.45 + runPerkLevel("overcharge") * 0.65;
          state.ultimateCooldown = Math.max(0, state.ultimateCooldown - cooldownCut);
          state.energy = clamp(state.energy + state.maxEnergy * 0.3, 0, state.maxEnergy);
          state.specialTimer = Math.max(state.specialTimer, 5.2);
          addRoundedScore((150 + state.combo * 12) * state.scoreBonus * styleMultiplier());
          state.combo += 2;
          state.comboTimer = 3.2;
          gainXp(54 + state.level * 4);
          gainStyle(12, "技能核心", "#9de8ff");
          state.eventName = state.ultimateCooldown <= 0 ? "大招就绪" : "技能核心";
          state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.05);
          pop(p.x, p.y, "#9de8ff", 22);
          beep(1180, 0.08, "triangle", 0.045);
          continue;
        }
        if (p.type === "bonusPaper") {
          recordRunStat("papers", 1);
          addRoundedScore((128 + state.combo * 9) * state.scoreBonus * (state.feverTimer > 0 ? 1.25 : 1) * collectorBonus());
          state.energy = clamp(state.energy + 14 + state.level * 0.45, 0, state.maxEnergy);
          gainXp((42 + state.level * 3) * (state.feverTimer > 0 ? 1.18 : 1));
          state.combo += 2;
          state.comboTimer = 2.9;
          gainStyle(5, "奖励纸卷", "#f5c84b");
          pop(p.x, p.y, "#f5c84b", 14);
          beep(980, 0.055, "triangle", 0.04);
          maybeStartFever();
          continue;
        }
        recordRunStat("papers", 1);
        addRoundedScore((46 + state.combo * 6) * state.scoreBonus * (state.feverTimer > 0 ? 1.18 : 1) * collectorBonus());
        state.health = clamp(state.health + 5 + state.level, 0, state.maxHealth);
        state.energy = clamp(state.energy + 9 + state.level * 0.45, 0, state.maxEnergy);
        gainXp((24 + state.level * 2) * (state.feverTimer > 0 ? 1.12 : 1));
        state.combo += 1;
        state.comboTimer = 2.6;
        gainStyle(1.4, "", "#fff8e8");
        pop(p.x, p.y, "#ffffff", 9);
        beep(780, 0.05, "sine", 0.035);
        maybeStartFever();
      } else if (p.x < -70) {
        pickups.splice(i, 1);
      }
    }
    if (state.comboTimer <= 0) {
      state.combo = 0;
      state.nextComboReward = 8;
    }
  }

  function updateParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const p = particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 90 * dt;
      p.life -= dt;
      p.size *= 1 - dt * 0.85;
      if (p.life <= 0 || p.size < 0.8) particles.splice(i, 1);
    }
    for (let i = floaters.length - 1; i >= 0; i -= 1) {
      const f = floaters[i];
      f.x -= state.speed * 0.22 * dt;
      f.y += Math.sin(state.time + f.phase) * 14 * dt;
      f.a -= dt * 0.08;
      if (f.x < -60 || f.a <= 0) floaters.splice(i, 1);
    }
    const floaterChance = sceneTransitionActive() ? 0 : isSmoothQuality() ? 0.004 : 0.015;
    if (floaters.length < effectBudget().floaters && Math.random() < floaterChance && state.mode === "playing") {
      floaters.push({ x: state.width + 50, y: random(70, state.height - 90), a: 0.42, phase: random(0, 6.28), r: random(8, 18) });
    }
  }

  function draw() {
    ctx.save();
    ctx.clearRect(0, 0, state.width, state.height);
    if (SCREEN_SHAKE_ENABLED && state.shake > 0) {
      ctx.translate(random(-state.shake, state.shake), random(-state.shake, state.shake));
    }
    drawBackground();
    const transitioningScene = sceneTransitionActive();
    if ((!isSmoothQuality() || state.feverTimer > 0) && !transitioningScene) drawAtmosphere();
    if (!isSmoothQuality() && !transitioningScene) drawParallaxRibbons();
    if (!isSmoothQuality() && !transitioningScene) drawFloaters();
    drawClassicGreenWaveLane();
    drawClassicEventLane();
    drawAdventureCurrentLane();
    drawMysteryRouteLane();
    drawStarTrailLane();
    drawMirrorCurrentLane();
    drawForgeHeatLane();
    drawGroundContactShadows();
    drawThreatWarnings();
    drawBossAttackPreview();
    drawPickups();
    drawHazards();
    drawUltimateBeam();
    drawProjectiles();
    drawDrone();
    drawHero();
    drawFeverAura();
    drawParticles();
    drawEventBanner();
    drawClassicDistrictHud();
    drawAdventureRouteHud();
    drawAdventureContractHud();
    drawCombo();
    drawScenePolish();
    ctx.restore();
  }

  function imageReady(img) {
    return !!(img && img.complete && img.naturalWidth);
  }

  function sceneTransitionActive() {
    return state.sceneTransitionTimer > 0 || state.sceneLoadReliefTimer > 0;
  }

  function mapBackgroundAssetKey(map) {
    if (map === "adventure") return imageReady(assets.backgroundAdventureRefit) ? "backgroundAdventureRefit" : "backgroundAdventure";
    if (map === "deep") return imageReady(assets.backgroundDeepRefit) ? "backgroundDeepRefit" : "backgroundDeep";
    return imageReady(assets.backgroundCityRefit) ? "backgroundCityRefit" : "background";
  }

  function desiredBackgroundFrame() {
    const map = activeMap();
    const deepMap = map === "deep";
    const adventureMap = map === "adventure";
    const elementRiftMap = state.eventKind === "elementRift";
    const purificationMap = state.eventKind === "purificationTide";
    const mirrorMap = state.eventKind === "mirrorCurrent" || (state.mirrorPulse > 0 && !elementRiftMap && !purificationMap);
    const starTrailMap = (state.eventKind === "starTrail" || state.starTrailPulse > 0) && !elementRiftMap && !purificationMap && !mirrorMap;
    const forgeMap = (state.eventKind === "auroraForge" || state.forgePulse > 0) && !elementRiftMap && !purificationMap && !mirrorMap && !starTrailMap;
    const cityMap = !deepMap && !adventureMap && !elementRiftMap && !purificationMap && !mirrorMap && !starTrailMap && !forgeMap;
    const cityRefitReady = imageReady(assets.backgroundCityRefit);
    const deepRefitReady = imageReady(assets.backgroundDeepRefit);
    const adventureRefitReady = imageReady(assets.backgroundAdventureRefit);
    let assetKey = mapBackgroundAssetKey(map);
    let key = `map:${map}:${assetKey}`;
    if (elementRiftMap) {
      assetKey = "backgroundElementRift";
      key = "event:elementRift";
    } else if (purificationMap) {
      assetKey = "backgroundPurificationTide";
      key = "event:purificationTide";
    } else if (mirrorMap) {
      assetKey = "backgroundMirrorCurrent";
      key = "event:mirrorCurrent";
    } else if (starTrailMap) {
      assetKey = "backgroundStarTrail";
      key = "event:starTrail";
    } else if (forgeMap) {
      assetKey = "backgroundAuroraForge";
      key = "event:auroraForge";
    }
    const img = ensureImage(assets[assetKey]);
    return {
      key,
      assetKey,
      img,
      cityMap,
      deepMap,
      adventureMap,
      elementRiftMap,
      purificationMap,
      mirrorMap,
      starTrailMap,
      forgeMap,
      cityRefitReady,
      deepRefitReady,
      adventureRefitReady,
    };
  }

  function warmBackgroundFrame(frame) {
    if (!frame || !frame.assetKey) return;
    warmAssetImage(frame.assetKey, "high");
  }

  function switchBackgroundFrame(frame) {
    state.backgroundPreviousFrame = state.backgroundCurrentFrame;
    state.backgroundCurrentFrame = frame;
    state.backgroundFrameKey = frame.key;
    state.sceneTransitionDuration = isSmoothQuality() ? 0.72 : SCENE_TRANSITION_DURATION;
    state.sceneTransitionTimer = state.backgroundPreviousFrame ? state.sceneTransitionDuration : 0;
    state.sceneLoadReliefTimer = Math.max(state.sceneLoadReliefTimer, SCENE_TRANSITION_LOAD_WINDOW);
  }

  function resolveBackgroundFrame() {
    const desired = desiredBackgroundFrame();
    if (!state.backgroundCurrentFrame) {
      if (imageReady(desired.img)) {
        switchBackgroundFrame(desired);
      } else {
        warmBackgroundFrame(desired);
        state.backgroundCurrentFrame = desired;
        state.backgroundFrameKey = desired.key;
      }
    } else if (desired.key !== state.backgroundFrameKey) {
      if (imageReady(desired.img)) {
        switchBackgroundFrame(desired);
      } else {
        warmBackgroundFrame(desired);
        state.sceneLoadReliefTimer = Math.max(state.sceneLoadReliefTimer, 0.44);
      }
    }
    if (state.sceneTransitionTimer <= 0) state.backgroundPreviousFrame = null;
    const duration = Math.max(0.1, state.sceneTransitionDuration || SCENE_TRANSITION_DURATION);
    const rawBlend = state.sceneTransitionTimer > 0 ? 1 - clamp(state.sceneTransitionTimer / duration, 0, 1) : 1;
    const blend = rawBlend * rawBlend * (3 - rawBlend * 2);
    return {
      current: state.backgroundCurrentFrame || desired,
      previous: state.backgroundPreviousFrame,
      blend,
    };
  }

  function prepareBackgroundTransition() {
    if (state.mode !== "playing") return;
    resolveBackgroundFrame();
  }

  function backgroundPalette(frame) {
    return {
      top: frame.forgeMap ? "#17255f" : frame.mirrorMap ? "#d9ffff" : frame.purificationMap ? "#d8fff8" : frame.starTrailMap ? "#12345f" : frame.elementRiftMap ? "#235f8f" : frame.adventureMap ? "#1f5167" : frame.deepMap ? "#114252" : "#5bded4",
      mid: frame.forgeMap ? "#ffb75a" : frame.mirrorMap ? "#54d0ff" : frame.purificationMap ? "#5bded4" : frame.starTrailMap ? "#7b58d9" : frame.elementRiftMap ? "#f5c84b" : frame.adventureMap ? "#2f8f8c" : frame.deepMap ? "#6e3d87" : "#ffd27c",
      bottom: frame.forgeMap ? "#103a40" : frame.mirrorMap ? "#1d3d5c" : frame.purificationMap ? "#fff1a6" : frame.starTrailMap ? "#101823" : frame.elementRiftMap ? "#17312f" : frame.adventureMap ? "#17312f" : frame.deepMap ? "#201926" : "#2a211b",
      veil: frame.forgeMap ? "rgba(255, 183, 90, 0.04)" : frame.mirrorMap ? "rgba(255, 255, 255, 0.04)" : frame.purificationMap ? "rgba(255, 248, 232, 0.05)" : frame.adventureMap && frame.adventureRefitReady ? "rgba(4, 28, 32, 0.05)" : frame.deepMap && frame.deepRefitReady ? "rgba(6, 22, 25, 0.05)" : frame.cityMap ? "rgba(6, 22, 25, 0.08)" : "rgba(6, 22, 25, 0.16)",
      ground: frame.forgeMap ? "rgba(20, 18, 31, 0.36)" : frame.mirrorMap ? "rgba(8, 24, 42, 0.44)" : frame.purificationMap ? "rgba(255, 248, 232, 0.12)" : frame.starTrailMap ? "rgba(8, 16, 32, 0.5)" : frame.elementRiftMap ? "rgba(15, 24, 28, 0.58)" : frame.adventureMap ? (frame.adventureRefitReady ? "rgba(8, 35, 42, 0.5)" : "rgba(10, 39, 36, 0.68)") : frame.deepMap ? (frame.deepRefitReady ? "rgba(12, 18, 31, 0.46)" : "rgba(20, 18, 31, 0.68)") : frame.cityMap ? "rgba(13, 34, 37, 0.52)" : "rgba(13, 34, 37, 0.72)",
      lane: frame.forgeMap ? "rgba(255, 183, 90, 0.3)" : frame.mirrorMap ? "rgba(143, 247, 255, 0.28)" : frame.purificationMap ? "rgba(91, 222, 212, 0.22)" : frame.starTrailMap ? "rgba(157, 232, 255, 0.3)" : frame.elementRiftMap ? "rgba(255, 248, 232, 0.28)" : frame.adventureMap ? "rgba(91, 222, 212, 0.24)" : frame.deepMap ? "rgba(196, 93, 255, 0.24)" : frame.cityMap ? "rgba(91, 222, 212, 0.2)" : "rgba(245, 200, 75, 0.22)",
    };
  }

  function drawBackgroundGradient(frame) {
    const palette = backgroundPalette(frame);
    const grad = ctx.createLinearGradient(0, 0, 0, state.height);
    grad.addColorStop(0, palette.top);
    grad.addColorStop(0.52, palette.mid);
    grad.addColorStop(1, palette.bottom);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, state.width, state.height);
  }

  function drawMapReadabilityLayer(frame, palette) {
    const top = playTop();
    const bottom = playBottom();
    const laneY = clamp(hero.y || (top + bottom) * 0.5, top + 42 * playScale(), bottom - 42 * playScale());
    const profile = state.gameMode === "stage" ? classicStageProfile(activeStage()) : null;
    const color = profile ? profile.districtColor : frame.deepMap ? "#c45dff" : "#5bded4";
    const routePulse = profile && state.classicRouteFocusTimer > 0 && state.classicRouteFocusKey === profile.key ? (state.classicRouteFocusPulse || 0) : 0;
    const greenWave = profile && frame.cityMap && state.mode === "playing" ? clamp((state.classicGreenWaveCharge || 0) / 100, 0, 1) : 0;
    const greenPulse = profile && frame.cityMap ? (state.classicGreenWavePulse || 0) : 0;
    ctx.save();
    const lowerShade = ctx.createLinearGradient(0, top, 0, state.height);
    lowerShade.addColorStop(0, "rgba(6, 18, 24, 0)");
    lowerShade.addColorStop(0.62, frame.deepMap ? "rgba(8, 10, 18, 0.1)" : "rgba(8, 18, 20, 0.08)");
    lowerShade.addColorStop(1, frame.deepMap ? "rgba(8, 10, 18, 0.32)" : "rgba(8, 18, 20, 0.24)");
    ctx.fillStyle = lowerShade;
    ctx.fillRect(0, top, state.width, state.height - top);
    ctx.globalAlpha = frame.cityMap || frame.deepMap ? 0.52 : 0.28;
    ctx.fillStyle = frame.deepMap ? "rgba(10, 15, 26, 0.22)" : "rgba(255, 248, 232, 0.08)";
    roundRect(10, top + 20, state.width - 20, bottom - top - 40, 18);
    ctx.fill();
    ctx.globalAlpha = 0.72 + (state.classicDistrictPulse || 0) * 0.18 + routePulse * 0.14 + greenPulse * 0.08;
    const railY = laneY + 34 * playScale();
    const rail = ctx.createLinearGradient(0, railY, state.width, railY);
    rail.addColorStop(0, canvasRgba(color, 0));
    rail.addColorStop(0.18, canvasRgba(color, 0.22 + routePulse * 0.14 + greenWave * 0.08));
    rail.addColorStop(0.5, canvasRgba(color, 0.1 + routePulse * 0.18 + greenWave * 0.12));
    rail.addColorStop(0.82, canvasRgba(color, 0.22 + routePulse * 0.14 + greenWave * 0.08));
    rail.addColorStop(1, canvasRgba(color, 0));
    ctx.fillStyle = rail;
    roundRect(16, railY - 8 * playScale(), state.width - 32, 16 * playScale(), 9 * playScale());
    ctx.fill();
    if (greenWave > 0.01 || greenPulse > 0.01) {
      const greenY = railY - 20 * playScale();
      const greenBand = ctx.createLinearGradient(0, greenY, state.width, greenY);
      greenBand.addColorStop(0, "rgba(91, 222, 212, 0)");
      greenBand.addColorStop(0.24, `rgba(91, 222, 212, ${0.04 + greenWave * 0.08 + greenPulse * 0.08})`);
      greenBand.addColorStop(0.5, `rgba(255, 248, 232, ${0.025 + greenWave * 0.06})`);
      greenBand.addColorStop(0.76, `rgba(223, 255, 122, ${0.035 + greenWave * 0.08 + greenPulse * 0.06})`);
      greenBand.addColorStop(1, "rgba(91, 222, 212, 0)");
      ctx.fillStyle = greenBand;
      roundRect(22, greenY - 5 * playScale(), state.width - 44, 10 * playScale(), 6 * playScale());
      ctx.fill();
    }
    if (routePulse > 0.01) {
      const focusBand = ctx.createLinearGradient(0, railY - 18 * playScale(), state.width, railY + 18 * playScale());
      focusBand.addColorStop(0, canvasRgba(color, 0));
      focusBand.addColorStop(0.5, canvasRgba(color, 0.16 * routePulse));
      focusBand.addColorStop(1, canvasRgba(color, 0));
      ctx.fillStyle = focusBand;
      roundRect(20, railY - 20 * playScale(), state.width - 40, 40 * playScale(), 14 * playScale());
      ctx.fill();
    }
    ctx.strokeStyle = canvasRgba(color, 0.24 + routePulse * 0.18);
    ctx.lineWidth = Math.max(1, (1.4 + routePulse * 0.7) * playScale());
    ctx.setLineDash([18 * playScale(), 16 * playScale()]);
    ctx.lineDashOffset = -state.scroll * 0.18;
    ctx.beginPath();
    ctx.moveTo(22, railY);
    ctx.lineTo(state.width - 22, railY);
    ctx.stroke();
    if (profile) drawClassicRouteMapMarks(profile, color, railY, routePulse);
    ctx.restore();
  }

  function drawClassicRouteMapMarks(profile, color, railY, routePulse = 0) {
    const s = playScale();
    const spacing = Math.max(88 * s, state.width / 5.2);
    const offset = ((state.scroll * 0.42) % spacing);
    ctx.save();
    ctx.globalAlpha = 0.34 + (state.classicDistrictPulse || 0) * 0.12 + routePulse * 0.22;
    ctx.strokeStyle = canvasRgba(color, 0.72 + routePulse * 0.2);
    ctx.fillStyle = canvasRgba(color, 0.2 + routePulse * 0.16);
    ctx.lineWidth = Math.max(1, (1.6 + routePulse * 0.8) * s);
    for (let x = -offset + 24 * s; x < state.width + spacing; x += spacing) {
      const y = railY + Math.sin((state.time || 0) * 0.9 + x * 0.018) * 3 * s;
      if (routePulse > 0.01) {
        ctx.save();
        ctx.globalAlpha *= 0.45 + routePulse * 0.18;
        ctx.fillStyle = canvasRgba(color, 0.18 + routePulse * 0.1);
        ctx.beginPath();
        ctx.ellipse(x, y, 22 * s, 12 * s, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      if (profile.key === "clean") {
        ctx.beginPath();
        ctx.arc(x, y, 8 * s, Math.PI * 0.15, Math.PI * 1.15);
        ctx.arc(x + 12 * s, y, 8 * s, Math.PI * 1.15, Math.PI * 0.15, true);
        ctx.stroke();
      } else if (profile.key === "supply") {
        roundRect(x - 10 * s, y - 8 * s, 20 * s, 16 * s, 3 * s);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - 10 * s, y - 1 * s);
        ctx.lineTo(x + 10 * s, y - 1 * s);
        ctx.moveTo(x, y - 8 * s);
        ctx.lineTo(x, y + 8 * s);
        ctx.stroke();
      } else if (profile.key === "combo") {
        ctx.beginPath();
        ctx.arc(x - 5 * s, y, 7 * s, 0, Math.PI * 2);
        ctx.arc(x + 8 * s, y, 7 * s, 0, Math.PI * 2);
        ctx.stroke();
      } else if (profile.key === "threat") {
        ctx.beginPath();
        ctx.moveTo(x - 12 * s, y + 8 * s);
        ctx.lineTo(x - 3 * s, y - 8 * s);
        ctx.moveTo(x + 1 * s, y + 8 * s);
        ctx.lineTo(x + 10 * s, y - 8 * s);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(x, y - 11 * s);
        ctx.lineTo(x + 11 * s, y - 3 * s);
        ctx.lineTo(x + 7 * s, y + 10 * s);
        ctx.lineTo(x, y + 13 * s);
        ctx.lineTo(x - 7 * s, y + 10 * s);
        ctx.lineTo(x - 11 * s, y - 3 * s);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function drawBackgroundFrame(frame, alpha = 1, options = {}) {
    if (!frame) return;
    const img = ensureImage(frame.img);
    const palette = backgroundPalette(frame);
    ctx.save();
    ctx.globalAlpha *= alpha;
    if (!imageReady(img)) {
      drawBackgroundGradient(frame);
      ctx.restore();
      return;
    }
    const scale = Math.max(state.height / img.naturalHeight, state.width / img.naturalWidth);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const y = (state.height - dh) * 0.5;
    const offset = -((state.scroll * 0.28) % dw);
    for (let x = offset - dw; x < state.width + dw; x += dw) {
      ctx.drawImage(img, x, y, dw, dh);
    }

    ctx.fillStyle = palette.veil;
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.fillStyle = palette.ground;
    ctx.fillRect(0, state.height - 48, state.width, 48);
    ctx.fillStyle = palette.lane;
    for (let x = -((state.scroll * 0.9) % 128); x < state.width + 128; x += 128) {
      ctx.fillRect(x, state.height - 39, 56, 5);
    }
    if (options.readability !== false) drawMapReadabilityLayer(frame, palette);
    ctx.restore();
  }

  function drawSceneTransitionWash(blend) {
    if (!sceneTransitionActive()) return;
    const wave = Math.sin(clamp(blend, 0, 1) * Math.PI);
    const alpha = state.sceneTransitionTimer > 0
      ? wave * (isSmoothQuality() ? 0.07 : 0.1)
      : Math.min(0.045, state.sceneLoadReliefTimer * 0.032);
    if (alpha <= 0.01) return;
    ctx.save();
    if (state.sceneTransitionTimer > 0) {
      ctx.fillStyle = `rgba(6, 13, 18, ${wave * 0.035})`;
      ctx.fillRect(0, 0, state.width, state.height);
    }
    ctx.globalAlpha = alpha;
    const wash = ctx.createLinearGradient(0, playTop(), state.width, playBottom());
    wash.addColorStop(0, "rgba(6, 24, 34, 0)");
    wash.addColorStop(0.48, "rgba(91, 222, 212, 0.46)");
    wash.addColorStop(1, "rgba(245, 200, 75, 0)");
    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.restore();
  }

  function drawBackground() {
    const frame = resolveBackgroundFrame();
    if (frame.previous && frame.blend < 1) {
      drawBackgroundFrame(frame.previous, 1, { readability: false });
      drawBackgroundFrame(frame.current, frame.blend);
      drawSceneTransitionWash(frame.blend);
      return;
    }
    drawBackgroundFrame(frame.current, 1);
    drawSceneTransitionWash(1);
  }

  function eventVisualTheme() {
    return {
      goldRush: { rgb: "245, 200, 75", accent: "#f5c84b", alpha: 0.2 },
      treasureRun: { rgb: "255, 141, 84", accent: "#ff8d54", alpha: 0.18 },
      eliteWave: { rgb: "255, 86, 80", accent: "#ff5650", alpha: 0.17 },
      stink: { rgb: "167, 240, 74", accent: "#a7f04a", alpha: 0.16 },
      bubble: { rgb: "157, 232, 255", accent: "#9de8ff", alpha: 0.16 },
      draftGate: { rgb: "157, 232, 255", accent: "#9de8ff", alpha: 0.2 },
      adventureCurrent: { rgb: "91, 222, 212", accent: "#5bded4", alpha: 0.17 },
      mysteryRoute: { rgb: "196, 93, 255", accent: "#c45dff", alpha: 0.17 },
      supplyDrop: { rgb: "157, 232, 255", accent: "#9de8ff", alpha: 0.18 },
      relicRoute: { rgb: "196, 93, 255", accent: "#c45dff", alpha: 0.2 },
      elementRift: { rgb: "255, 248, 232", accent: "#fff8e8", alpha: 0.2 },
      purificationTide: { rgb: "91, 222, 212", accent: "#fff1a6", alpha: 0.19 },
      starTrail: { rgb: "157, 232, 255", accent: "#9de8ff", alpha: 0.22 },
      mirrorCurrent: { rgb: "143, 247, 255", accent: "#8ff7ff", alpha: 0.21 },
      auroraForge: { rgb: "255, 183, 90", accent: "#ffb75a", alpha: 0.21 },
      mountTrial: { rgb: "255, 241, 166", accent: "#fff1a6", alpha: 0.19 },
      comboShrine: { rgb: "223, 255, 122", accent: "#dfff7a", alpha: 0.18 },
      counterTrial: { rgb: "255, 141, 84", accent: "#ff8d54", alpha: 0.18 },
      cleanWind: { rgb: "223, 255, 122", accent: "#dfff7a", alpha: 0.15 },
    }[state.eventKind] || null;
  }

  function drawAtmosphere() {
    const s = playScale();
    const fever = state.feverTimer > 0;
    const draft = state.draftTimer > 0;
    const theme = eventVisualTheme();
    ctx.save();
    ctx.globalAlpha = isSmoothQuality() ? 0.1 : fever ? 0.18 : draft ? 0.16 : theme ? theme.alpha : 0.08;
    ctx.strokeStyle = fever ? "#f5c84b" : draft ? "#dfff7a" : theme ? theme.accent : "#9de8ff";
    ctx.lineWidth = Math.max(1, 2 * s);
    const spacing = isSmoothQuality() ? 160 : fever ? 92 : draft ? 104 : 132;
    for (let x = -((state.scroll * (fever ? 1.45 : draft ? 1.18 : 0.8)) % spacing); x < state.width + spacing; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, playTop() + 16 * s);
      ctx.lineTo(x - 46 * s, playBottom() - 24 * s);
      ctx.stroke();
    }
    const vignette = ctx.createRadialGradient(state.width * 0.5, state.height * 0.48, state.height * 0.2, state.width * 0.5, state.height * 0.5, state.height * 0.78);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, fever ? "rgba(245, 200, 75, 0.12)" : "rgba(0,0,0,0.22)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, state.width, state.height);
    if (theme) {
      const eventGlow = ctx.createLinearGradient(0, playTop(), state.width, playBottom());
      eventGlow.addColorStop(0, `rgba(${theme.rgb}, ${theme.alpha * 0.3})`);
      eventGlow.addColorStop(0.5, `rgba(${theme.rgb}, ${theme.alpha * 0.12})`);
      eventGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = eventGlow;
      ctx.fillRect(0, playTop() - 20 * s, state.width, playBottom() - playTop() + 44 * s);
    }
    ctx.restore();
  }

  function drawParallaxRibbons() {
    const s = playScale();
    const theme = eventVisualTheme();
    const map = activeMap();
    const eventAlpha = theme ? theme.alpha : 0.07;
    const color = theme ? theme.rgb : map === "deep" ? "196, 93, 255" : map === "adventure" ? "91, 222, 212" : "255, 248, 232";
    const ribbonSpeed = state.speed * (state.feverTimer > 0 ? 1.25 : state.draftTimer > 0 ? 1.08 : 0.82);
    const spacing = isLandscapePlay() ? 118 : 154;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.lineWidth = Math.max(1, 2.4 * s);
    for (let i = 0; i < 7; i += 1) {
      const x = state.width - ((state.scroll * 0.55 + i * spacing + ribbonSpeed * 0.16) % (state.width + spacing));
      const y = playTop() + ((i * 47 + state.time * 18) % Math.max(80, playBottom() - playTop()));
      ctx.strokeStyle = `rgba(${color}, ${eventAlpha * (0.5 + (i % 3) * 0.18)})`;
      ctx.beginPath();
      ctx.moveTo(x + 70 * s, y - 18 * s);
      ctx.lineTo(x - 36 * s, y + 18 * s);
      ctx.stroke();
    }
    const fog = ctx.createLinearGradient(0, playBottom() - 52 * s, 0, state.height);
    fog.addColorStop(0, "rgba(0, 0, 0, 0)");
    fog.addColorStop(0.42, `rgba(${color}, ${0.035 + eventAlpha * 0.1})`);
    fog.addColorStop(1, "rgba(3, 9, 11, 0.18)");
    ctx.fillStyle = fog;
    ctx.fillRect(0, playBottom() - 58 * s, state.width, state.height - playBottom() + 70 * s);
    if (state.eventKind === "goldRush" || state.eventKind === "draftGate" || state.eventKind === "cleanWind" || state.eventKind === "mysteryRoute" || state.eventKind === "eliteWave" || state.eventKind === "supplyDrop" || state.eventKind === "relicRoute" || state.eventKind === "adventureCurrent" || state.eventKind === "elementRift" || state.eventKind === "purificationTide" || state.eventKind === "starTrail" || state.eventKind === "mirrorCurrent" || state.eventKind === "auroraForge" || state.eventKind === "mountTrial" || state.eventKind === "comboShrine" || state.eventKind === "counterTrial") {
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = theme ? theme.accent : "#9de8ff";
      const elementColors = ["#35d07f", "#ff5650", "#f5c84b", "#fff8e8", "#54d0ff"];
      for (let i = 0; i < 5; i += 1) {
        const x = state.width - ((state.scroll * 0.34 + i * 180) % (state.width + 180));
        const y = playTop() + 24 * s + i * 18 * s;
        ctx.beginPath();
        if (state.eventKind === "elementRift") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.6 + i) * 8 * s);
          ctx.rotate(state.time * 0.9 + i);
          ctx.strokeStyle = elementColors[i % elementColors.length];
          ctx.lineWidth = Math.max(1, 2.2 * s);
          ctx.beginPath();
          ctx.arc(0, 0, (10 + i * 1.5) * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, -13 * s);
          ctx.lineTo(11 * s, 0);
          ctx.lineTo(0, 13 * s);
          ctx.lineTo(-11 * s, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "purificationTide") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.2 + i) * 7 * s);
          ctx.rotate(Math.sin(state.time * 0.8 + i * 0.6) * 0.18);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#5bded4";
          ctx.lineWidth = Math.max(1, 2.1 * s);
          ctx.beginPath();
          ctx.arc(0, 0, (11 + i * 1.5) * s, -Math.PI * 0.15, Math.PI * 1.15);
          ctx.stroke();
          ctx.strokeStyle = "#fff1a6";
          ctx.beginPath();
          ctx.moveTo(-7 * s, -1 * s);
          ctx.quadraticCurveTo(0, -13 * s, 8 * s, -1 * s);
          ctx.quadraticCurveTo(0, 11 * s, -7 * s, -1 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "starTrail") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 3.1 + i) * 6 * s);
          ctx.rotate(state.time * 1.2 + i * 0.4);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#9de8ff";
          ctx.lineWidth = Math.max(1, 2 * s);
          ctx.beginPath();
          ctx.moveTo(0, -12 * s);
          ctx.lineTo(3.4 * s, -3.4 * s);
          ctx.lineTo(12 * s, 0);
          ctx.lineTo(3.4 * s, 3.4 * s);
          ctx.lineTo(0, 12 * s);
          ctx.lineTo(-3.4 * s, 3.4 * s);
          ctx.lineTo(-12 * s, 0);
          ctx.lineTo(-3.4 * s, -3.4 * s);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "mirrorCurrent") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.8 + i) * 6 * s);
          ctx.rotate(Math.sin(state.time * 1.1 + i) * 0.28);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#8ff7ff";
          ctx.lineWidth = Math.max(1, 2.1 * s);
          ctx.beginPath();
          ctx.moveTo(-12 * s, -6 * s);
          ctx.lineTo(0, -13 * s);
          ctx.lineTo(12 * s, -6 * s);
          ctx.lineTo(8 * s, 8 * s);
          ctx.lineTo(0, 13 * s);
          ctx.lineTo(-8 * s, 8 * s);
          ctx.closePath();
          ctx.stroke();
          ctx.strokeStyle = "#dfff7a";
          ctx.beginPath();
          ctx.moveTo(-8 * s, 0);
          ctx.lineTo(8 * s, 0);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "auroraForge") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.5 + i) * 7 * s);
          ctx.rotate(Math.sin(state.time * 0.9 + i) * 0.22);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#ffb75a";
          ctx.lineWidth = Math.max(1, 2.1 * s);
          ctx.beginPath();
          ctx.moveTo(0, -13 * s);
          ctx.lineTo(11 * s, -2 * s);
          ctx.lineTo(6 * s, 12 * s);
          ctx.lineTo(-6 * s, 12 * s);
          ctx.lineTo(-11 * s, -2 * s);
          ctx.closePath();
          ctx.stroke();
          ctx.strokeStyle = "#54d0ff";
          ctx.beginPath();
          ctx.arc(0, -1 * s, (5 + i * 0.7) * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.strokeStyle = "#fff1a6";
          ctx.beginPath();
          ctx.moveTo(-7 * s, 8 * s);
          ctx.quadraticCurveTo(0, -10 * s, 7 * s, 8 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "adventureCurrent") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.4 + i) * 6 * s);
          ctx.rotate(Math.sin(state.time * 0.9 + i) * 0.2);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#5bded4";
          ctx.lineWidth = Math.max(1, 2 * s);
          ctx.beginPath();
          ctx.arc(0, 0, (12 + i * 0.8) * s, Math.PI * 0.2, Math.PI * 1.82);
          ctx.stroke();
          ctx.strokeStyle = "#dfff7a";
          ctx.beginPath();
          ctx.moveTo(-10 * s, -2 * s);
          ctx.quadraticCurveTo(0, -10 * s, 10 * s, -2 * s);
          ctx.quadraticCurveTo(4 * s, 8 * s, -10 * s, -2 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "goldRush") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.1 + i) * 5 * s);
          ctx.rotate(Math.sin(state.time * 1.2 + i) * 0.18);
          ctx.fillStyle = "rgba(245, 200, 75, 0.42)";
          ctx.strokeStyle = "#fff8e8";
          ctx.lineWidth = Math.max(1, 1.7 * s);
          roundRect(-10 * s, -7 * s, 20 * s, 14 * s, 3 * s);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-5 * s, -1 * s);
          ctx.lineTo(5 * s, -1 * s);
          ctx.moveTo(-4 * s, 3 * s);
          ctx.lineTo(4 * s, 3 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "draftGate") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.6 + i) * 6 * s);
          ctx.strokeStyle = i % 2 ? "#dfff7a" : "#9de8ff";
          ctx.lineWidth = Math.max(1, 2 * s);
          ctx.beginPath();
          ctx.arc(0, 0, (12 + i * 0.6) * s, Math.PI * 0.55, Math.PI * 1.45);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-13 * s, -8 * s);
          ctx.quadraticCurveTo(3 * s, 0, -13 * s, 8 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "cleanWind") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 1.9 + i) * 5 * s);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#dfff7a";
          ctx.lineWidth = Math.max(1, 1.8 * s);
          ctx.beginPath();
          ctx.moveTo(-13 * s, 2 * s);
          ctx.quadraticCurveTo(-2 * s, -12 * s, 11 * s, -4 * s);
          ctx.quadraticCurveTo(2 * s, -1 * s, 13 * s, 9 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "mysteryRoute") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.3 + i) * 6 * s);
          ctx.rotate(state.time * 0.8 + i * 0.45);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#c45dff";
          ctx.lineWidth = Math.max(1, 2 * s);
          ctx.beginPath();
          ctx.moveTo(0, -12 * s);
          ctx.lineTo(12 * s, 0);
          ctx.lineTo(0, 12 * s);
          ctx.lineTo(-12 * s, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, (4 + i * 0.5) * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "eliteWave") {
          ctx.save();
          ctx.translate(x, y + Math.sin(state.time * 2.7 + i) * 5 * s);
          ctx.strokeStyle = i % 2 ? "#fff8e8" : "#ff5650";
          ctx.lineWidth = Math.max(1, 2.1 * s);
          ctx.beginPath();
          ctx.arc(0, 0, (10 + i * 0.8) * s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-12 * s, 0);
          ctx.lineTo(12 * s, 0);
          ctx.moveTo(0, -12 * s);
          ctx.lineTo(0, 12 * s);
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "mountTrial") {
          ctx.arc(x, y, (7 + i) * s, 0, Math.PI * 2);
          ctx.strokeStyle = theme ? theme.accent : "#fff1a6";
          ctx.lineWidth = Math.max(1, 2 * s);
          ctx.stroke();
        } else if (state.eventKind === "comboShrine") {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(state.time * 1.4 + i);
          ctx.strokeStyle = theme ? theme.accent : "#dfff7a";
          ctx.lineWidth = Math.max(1, 2 * s);
          ctx.beginPath();
          ctx.moveTo(0, -10 * s);
          ctx.lineTo(10 * s, 0);
          ctx.lineTo(0, 10 * s);
          ctx.lineTo(-10 * s, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        } else if (state.eventKind === "counterTrial") {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-0.35 + Math.sin(state.time * 3 + i) * 0.12);
          ctx.strokeStyle = theme ? theme.accent : "#ff8d54";
          ctx.lineWidth = Math.max(1, 2.2 * s);
          ctx.beginPath();
          ctx.moveTo(-12 * s, 0);
          ctx.lineTo(0, -8 * s);
          ctx.lineTo(12 * s, 0);
          ctx.lineTo(0, 8 * s);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.ellipse(x, y, (18 + i * 2) * s, 4 * s, -0.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.restore();
  }

  function drawClassicGreenWaveLane() {
    if (state.gameMode !== "stage" || state.mode !== "playing" || !isStageMode()) return;
    const stage = activeStage();
    if (!stage || stage.map !== "city") return;
    const s = playScale();
    const profile = classicStageProfile(stage);
    const lane = classicGreenWaveLaneInfo(profile);
    const progress = clamp((state.classicGreenWaveCharge || 0) / 100, 0, 1);
    const pulse = state.classicGreenWavePulse || 0;
    const inLane = Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.24;
    const eventOverlap = classicEventActive("cleanWind") || classicEventActive("goldRush") || classicEventActive("draftGate") || mysteryLaneActive();
    const alphaBase = (inLane ? 0.2 : 0.13) + progress * 0.1 + pulse * 0.08;
    const alpha = alphaBase * (eventOverlap ? 0.52 : 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(91, 222, 212, ${alpha * 0.5})`);
    band.addColorStop(0.48, `rgba(255, 248, 232, ${alpha * 0.18})`);
    band.addColorStop(1, `rgba(223, 255, 122, ${alpha * 0.32})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? "rgba(255, 248, 232, 0.66)" : "rgba(91, 222, 212, 0.36)";
    ctx.lineWidth = Math.max(1, (1.5 + progress * 0.7 + pulse * 0.4) * s);
    ctx.setLineDash([18 * s, 12 * s, 4 * s, 12 * s]);
    ctx.lineDashOffset = -state.scroll * 0.08;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const glyphCount = isSmoothQuality() ? 5 : 8;
    const wave = Math.sin(state.time * 8.4) * 0.5 + 0.5;
    ctx.globalAlpha = (eventOverlap ? 0.3 : 0.5) + progress * 0.16 + pulse * 0.12;
    for (let i = 0; i < glyphCount; i += 1) {
      const x = state.width - ((state.scroll * 0.78 + i * 108 * s) % (state.width + 120 * s));
      const y = lane.center + Math.sin(state.time * 2.05 + i * 1.38) * lane.half * 0.42;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(state.time * 1.2 + i) * 0.2);
      ctx.strokeStyle = i % 2 ? "rgba(255, 248, 232, 0.78)" : "rgba(91, 222, 212, 0.82)";
      ctx.fillStyle = i % 2 ? "rgba(223, 255, 122, 0.3)" : "rgba(91, 222, 212, 0.28)";
      ctx.lineWidth = Math.max(1, 1.55 * s);
      ctx.beginPath();
      ctx.moveTo(-13 * s, -6 * s);
      ctx.quadraticCurveTo(-2 * s, -13 * s, 10 * s, -4 * s);
      ctx.lineTo(14 * s, 0);
      ctx.lineTo(9 * s, 5 * s);
      ctx.quadraticCurveTo(-2 * s, 12 * s, -13 * s, 6 * s);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(-1 * s, 0, (5 + wave * 2) * s, (3.2 + wave) * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    const barW = Math.min(156 * s, state.width * 0.27);
    const barH = Math.max(5 * s, 4);
    const bx = clamp(hero.x - barW * 0.38, 16 * s, state.width - barW - 16 * s);
    const by = clamp(lane.center - lane.half - 13 * s, playTop() + 8 * s, playBottom() - 22 * s);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = eventOverlap ? 0.56 : 0.78;
    ctx.fillStyle = "rgba(8, 24, 28, 0.48)";
    roundRect(bx, by, barW, barH, barH * 0.5);
    ctx.fill();
    const fill = barW * progress;
    if (fill > 1) {
      const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
      grad.addColorStop(0, "#5bded4");
      grad.addColorStop(0.58, "#fff8e8");
      grad.addColorStop(1, "#dfff7a");
      ctx.fillStyle = grad;
      roundRect(bx, by, fill, barH, barH * 0.5);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawClassicEventLane() {
    const kind = state.eventKind;
    if (kind !== "cleanWind" && kind !== "goldRush" && kind !== "draftGate") return;
    if (!classicEventActive(kind) && state.classicEventPulse <= 0) return;
    const s = playScale();
    const lane = classicEventLaneInfo(kind);
    const pulse = Math.sin(state.time * 9.5) * 0.5 + 0.5;
    const inLane = Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.26;
    const theme = kind === "goldRush"
      ? { a: "245, 200, 75", b: "255, 248, 232", c: "255, 141, 84", edge: "#f5c84b", fill: "#fff1a6" }
      : kind === "draftGate"
        ? { a: "157, 232, 255", b: "223, 255, 122", c: "84, 208, 255", edge: "#9de8ff", fill: "#dfff7a" }
        : { a: "223, 255, 122", b: "255, 248, 232", c: "91, 222, 212", edge: "#dfff7a", fill: "#5bded4" };
    const activeAlpha = kind === "cleanWind" ? 0.22 : 0.24;
    const alpha = activeAlpha + (inLane ? 0.08 : 0) + (state.classicEventPulse || 0) * 0.06;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(${theme.a}, ${alpha * 0.42})`);
    band.addColorStop(0.5, `rgba(${theme.b}, ${alpha * 0.24})`);
    band.addColorStop(1, `rgba(${theme.c}, ${alpha * 0.34})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? `rgba(${theme.b}, 0.72)` : canvasRgba(theme.edge, 0.42);
    ctx.lineWidth = Math.max(1, 2.1 * s);
    ctx.setLineDash(kind === "draftGate" ? [16 * s, 9 * s, 4 * s, 9 * s] : [11 * s, 12 * s]);
    ctx.lineDashOffset = kind === "goldRush" ? -state.scroll * 0.07 : state.scroll * 0.08;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const glyphCount = isSmoothQuality() ? 5 : 8;
    ctx.globalAlpha = kind === "cleanWind" ? 0.48 : 0.6;
    for (let i = 0; i < glyphCount; i += 1) {
      const x = state.width - ((state.scroll * (kind === "draftGate" ? 0.98 : 0.72) + i * 104 * s) % (state.width + 114 * s));
      const y = lane.center + Math.sin(state.time * 2.2 + i * 1.45) * lane.half * 0.42;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(state.time * 1.1 + i) * 0.22);
      ctx.strokeStyle = i % 2 ? `rgba(${theme.b}, 0.78)` : canvasRgba(theme.edge, 0.74);
      ctx.fillStyle = canvasRgba(theme.fill, 0.38);
      ctx.lineWidth = Math.max(1, 1.5 * s);
      if (kind === "goldRush") {
        roundRect(-8 * s, -6 * s, 16 * s, 12 * s, 3 * s);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-5 * s, -1 * s);
        ctx.lineTo(5 * s, -1 * s);
        ctx.moveTo(-4 * s, 3 * s);
        ctx.lineTo(4 * s, 3 * s);
        ctx.stroke();
      } else if (kind === "draftGate") {
        ctx.beginPath();
        ctx.arc(0, 0, (10 + pulse * 2) * s, Math.PI * 0.55, Math.PI * 1.45);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-10 * s, -8 * s);
        ctx.quadraticCurveTo(2 * s, 0, -10 * s, 8 * s);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(-13 * s, 1 * s);
        ctx.quadraticCurveTo(-3 * s, -11 * s, 10 * s, -4 * s);
        ctx.quadraticCurveTo(3 * s, -2 * s, 13 * s, 8 * s);
        ctx.stroke();
      }
      ctx.restore();
    }

    if (kind === "goldRush" || kind === "draftGate") {
      const barW = Math.min(154 * s, state.width * 0.28);
      const barH = Math.max(5 * s, 4);
      const bx = clamp(hero.x - barW * 0.36, 16 * s, state.width - barW - 16 * s);
      const by = clamp(lane.center - lane.half - 14 * s, playTop() + 8 * s, playBottom() - 22 * s);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.78;
      ctx.fillStyle = "rgba(8, 16, 24, 0.5)";
      roundRect(bx, by, barW, barH, barH * 0.5);
      ctx.fill();
      const fill = barW * lane.progress;
      if (fill > 1) {
        const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
        grad.addColorStop(0, theme.edge);
        grad.addColorStop(0.55, "#fff8e8");
        grad.addColorStop(1, theme.fill);
        ctx.fillStyle = grad;
        roundRect(bx, by, fill, barH, barH * 0.5);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawAdventureCurrentLane() {
    if (!adventureCurrentActive() && state.adventurePulse <= 0 && state.adventureBoostTimer <= 0) return;
    const s = playScale();
    const lane = adventureCurrentLaneInfo();
    const pulse = Math.sin(state.time * 9.6) * 0.5 + 0.5;
    const active = adventureCurrentActive();
    const inLane = active && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.23;
    const alpha = active ? (inLane ? 0.34 : 0.23) : 0.15 * clamp(state.adventurePulse || 0, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(91, 222, 212, ${alpha * 0.5})`);
    band.addColorStop(0.5, `rgba(255, 248, 232, ${alpha * 0.23})`);
    band.addColorStop(1, `rgba(223, 255, 122, ${alpha * 0.28})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? "rgba(255, 248, 232, 0.78)" : "rgba(91, 222, 212, 0.5)";
    ctx.lineWidth = Math.max(1, 2.2 * s);
    ctx.setLineDash([16 * s, 9 * s, 5 * s, 9 * s]);
    ctx.lineDashOffset = state.scroll * 0.09;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const glyphCount = isSmoothQuality() ? 5 : 8;
    ctx.globalAlpha = active ? 0.62 : 0.3;
    for (let i = 0; i < glyphCount; i += 1) {
      const x = state.width - ((state.scroll * 0.92 + i * 112 * s) % (state.width + 122 * s));
      const y = lane.center + Math.sin(state.time * 2.15 + i * 1.36) * lane.half * 0.45;
      const r = (7 + (i % 3) * 1.8 + pulse * 1.6) * s;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(state.time * 1.1 + i) * 0.22);
      ctx.strokeStyle = i % 2 ? "#fff8e8" : "#5bded4";
      ctx.lineWidth = Math.max(1, 1.6 * s);
      ctx.beginPath();
      ctx.arc(0, 0, r * 1.55, Math.PI * 0.18, Math.PI * 1.78);
      ctx.stroke();
      ctx.fillStyle = i % 2 ? "rgba(223, 255, 122, 0.46)" : "rgba(91, 222, 212, 0.5)";
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.1, r * 0.68, -0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (active) {
      const barW = Math.min(160 * s, state.width * 0.28);
      const barH = Math.max(5 * s, 4);
      const bx = clamp(hero.x - barW * 0.4, 16 * s, state.width - barW - 16 * s);
      const by = clamp(lane.center - lane.half - 14 * s, playTop() + 8 * s, playBottom() - 22 * s);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.84;
      ctx.fillStyle = "rgba(8, 24, 28, 0.54)";
      roundRect(bx, by, barW, barH, barH * 0.5);
      ctx.fill();
      const fill = barW * lane.progress;
      if (fill > 1) {
        const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
        grad.addColorStop(0, "#5bded4");
        grad.addColorStop(0.52, "#fff8e8");
        grad.addColorStop(1, "#dfff7a");
        ctx.fillStyle = grad;
        roundRect(bx, by, fill, barH, barH * 0.5);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawMysteryRouteLane() {
    if (!mysteryLaneActive() && state.mysteryPulse <= 0) return;
    const s = playScale();
    const lane = mysteryLaneInfo();
    const pulse = Math.sin(state.time * 8.8) * 0.5 + 0.5;
    const active = mysteryLaneActive();
    const inLane = active && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.24;
    const alpha = active ? (inLane ? 0.32 : 0.22) : 0.16 * clamp(state.mysteryPulse || 0, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(196, 93, 255, ${alpha * 0.46})`);
    band.addColorStop(0.5, `rgba(255, 248, 232, ${alpha * 0.2})`);
    band.addColorStop(1, `rgba(84, 208, 255, ${alpha * 0.3})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? "rgba(255, 248, 232, 0.76)" : "rgba(196, 93, 255, 0.52)";
    ctx.lineWidth = Math.max(1, 2.1 * s);
    ctx.setLineDash([9 * s, 8 * s, 2 * s, 8 * s]);
    ctx.lineDashOffset = -state.scroll * 0.075;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const glyphCount = isSmoothQuality() ? 4 : 7;
    ctx.globalAlpha = 0.56 + pulse * 0.16;
    for (let i = 0; i < glyphCount; i += 1) {
      const x = state.width - ((state.scroll * 0.76 + i * 118 * s) % (state.width + 126 * s));
      const y = lane.center + Math.sin(state.time * 2 + i * 1.5) * lane.half * 0.44;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(state.time * 0.7 + i * 0.4);
      ctx.strokeStyle = i % 2 ? "rgba(255, 248, 232, 0.82)" : "rgba(196, 93, 255, 0.84)";
      ctx.fillStyle = i % 2 ? "rgba(84, 208, 255, 0.26)" : "rgba(196, 93, 255, 0.28)";
      ctx.lineWidth = Math.max(1, 1.8 * s);
      ctx.beginPath();
      ctx.moveTo(0, -12 * s);
      ctx.lineTo(12 * s, 0);
      ctx.lineTo(0, 12 * s);
      ctx.lineTo(-12 * s, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, (4 + pulse * 2) * s, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    const barW = Math.min(154 * s, state.width * 0.28);
    const barH = Math.max(5 * s, 4);
    const bx = clamp(hero.x - barW * 0.36, 16 * s, state.width - barW - 16 * s);
    const by = clamp(lane.center - lane.half - 14 * s, playTop() + 8 * s, playBottom() - 22 * s);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "rgba(8, 16, 24, 0.5)";
    roundRect(bx, by, barW, barH, barH * 0.5);
    ctx.fill();
    const fill = barW * lane.progress;
    if (fill > 1) {
      const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
      grad.addColorStop(0, "#c45dff");
      grad.addColorStop(0.55, "#fff8e8");
      grad.addColorStop(1, "#54d0ff");
      ctx.fillStyle = grad;
      roundRect(bx, by, fill, barH, barH * 0.5);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawScrollingLaneTexture(imgRef, lane, alpha, speed = 0.32) {
    const img = ensureImage(imgRef);
    if (!img || !img.complete || !img.naturalWidth || !img.naturalHeight) return false;
    const laneTop = lane.center - lane.half;
    const laneH = lane.half * 2;
    const drawH = Math.max(laneH * 1.18, 1);
    const drawW = Math.max(1, img.naturalWidth * (drawH / img.naturalHeight));
    const offset = -((state.scroll * speed + state.time * 34) % drawW);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.rect(0, laneTop, state.width, laneH);
    ctx.clip();
    for (let x = offset - drawW; x < state.width + drawW; x += drawW) {
      ctx.drawImage(img, x, lane.center - drawH * 0.5, drawW, drawH);
    }
    ctx.restore();
    return true;
  }

  function drawStarTrailLane() {
    if (!starTrailActive() && state.starTrailPulse <= 0) return;
    const s = playScale();
    const lane = starTrailLaneInfo();
    const pulse = Math.sin(state.time * 9) * 0.5 + 0.5;
    const active = starTrailActive();
    const inLane = active && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.24;
    const alpha = active ? (inLane ? 0.34 : 0.24) : 0.16 * clamp(state.starTrailPulse || 0, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    drawScrollingLaneTexture(assets.laneStarTrail, lane, active ? (inLane ? 0.62 : 0.44) : 0.28, 0.38);
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(157, 232, 255, ${alpha * 0.42})`);
    band.addColorStop(0.5, `rgba(255, 248, 232, ${alpha * 0.24})`);
    band.addColorStop(1, `rgba(196, 93, 255, ${alpha * 0.32})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? "rgba(255, 248, 232, 0.7)" : "rgba(157, 232, 255, 0.42)";
    ctx.lineWidth = Math.max(1, 2.2 * s);
    ctx.setLineDash([10 * s, 12 * s]);
    ctx.lineDashOffset = -state.scroll * 0.08;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const starCount = isSmoothQuality() ? 5 : 8;
    for (let i = 0; i < starCount; i += 1) {
      const x = state.width - ((state.scroll * 0.64 + i * 112 * s) % (state.width + 120 * s));
      const y = lane.center + Math.sin(state.time * 2.2 + i * 1.6) * lane.half * 0.48;
      const r = (3.6 + pulse * 1.6 + (i % 3)) * s;
      ctx.fillStyle = i % 2 ? "rgba(255, 248, 232, 0.82)" : "rgba(157, 232, 255, 0.78)";
      ctx.beginPath();
      ctx.moveTo(x, y - r * 1.6);
      ctx.lineTo(x + r * 0.38, y - r * 0.38);
      ctx.lineTo(x + r * 1.6, y);
      ctx.lineTo(x + r * 0.38, y + r * 0.38);
      ctx.lineTo(x, y + r * 1.6);
      ctx.lineTo(x - r * 0.38, y + r * 0.38);
      ctx.lineTo(x - r * 1.6, y);
      ctx.lineTo(x - r * 0.38, y - r * 0.38);
      ctx.closePath();
      ctx.fill();
    }

    if (active) {
      const barW = clamp(state.width * 0.2, 92 * s, 150 * s);
      const barH = 7 * s;
      const bx = clamp(hero.x - barW * 0.36, 16 * s, state.width - barW - 16 * s);
      const by = clamp(lane.center - lane.half - 18 * s, playTop() + 10 * s, playBottom() - 22 * s);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(8, 16, 32, 0.5)";
      roundRect(bx, by, barW, barH, barH * 0.5);
      ctx.fill();
      const fill = Math.max(0, barW * lane.progress);
      const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
      grad.addColorStop(0, "#9de8ff");
      grad.addColorStop(0.56, "#fff8e8");
      grad.addColorStop(1, "#c45dff");
      ctx.fillStyle = grad;
      roundRect(bx, by, fill, barH, barH * 0.5);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawScenePolish() {
    if (!state.width || !state.height) return;
    const smooth = isSmoothQuality();
    ctx.save();
    const grade = ctx.createLinearGradient(0, 0, state.width, state.height);
    grade.addColorStop(0, "rgba(255, 248, 232, 0.035)");
    grade.addColorStop(0.48, "rgba(79, 214, 208, 0.022)");
    grade.addColorStop(1, "rgba(6, 13, 18, 0.16)");
    ctx.fillStyle = grade;
    ctx.fillRect(0, 0, state.width, state.height);

    const edge = ctx.createRadialGradient(
      state.width * 0.5,
      state.height * 0.52,
      state.height * 0.18,
      state.width * 0.5,
      state.height * 0.5,
      Math.max(state.width, state.height) * 0.7
    );
    edge.addColorStop(0, "rgba(0, 0, 0, 0)");
    edge.addColorStop(1, "rgba(0, 0, 0, 0.2)");
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, state.width, state.height);

    const floorDepth = ctx.createLinearGradient(0, state.height * 0.64, 0, state.height);
    floorDepth.addColorStop(0, "rgba(0, 0, 0, 0)");
    floorDepth.addColorStop(1, "rgba(3, 9, 11, 0.18)");
    ctx.fillStyle = floorDepth;
    ctx.fillRect(0, 0, state.width, state.height);

    if (state.hurtFlashTimer > 0) {
      const hurt = clamp(state.hurtFlashTimer / 0.28, 0, 1);
      const danger = ctx.createRadialGradient(
        state.width * 0.5,
        state.height * 0.52,
        state.height * 0.2,
        state.width * 0.5,
        state.height * 0.52,
        Math.max(state.width, state.height) * 0.64
      );
      danger.addColorStop(0, "rgba(255, 86, 80, 0)");
      danger.addColorStop(1, `rgba(255, 86, 80, ${0.24 * hurt})`);
      ctx.fillStyle = danger;
      ctx.fillRect(0, 0, state.width, state.height);
    }

    if (!smooth) {
      ctx.globalAlpha = 0.045;
      ctx.fillStyle = "#fff8e8";
      const seed = Math.floor(state.time * 9);
      for (let i = 0; i < 36; i += 1) {
        const x = (Math.sin((i + seed) * 91.7) * 0.5 + 0.5) * state.width;
        const y = (Math.sin((i + seed) * 43.3 + 5.1) * 0.5 + 0.5) * state.height;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    ctx.restore();
  }

  function drawMirrorCurrentLane() {
    if (!mirrorCurrentActive() && state.mirrorPulse <= 0 && state.mirrorGuardTimer <= 0) return;
    const s = playScale();
    const lane = mirrorLaneInfo();
    const pulse = Math.sin(state.time * 10.5) * 0.5 + 0.5;
    const active = mirrorCurrentActive();
    const inLane = active && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.2;
    const alpha = active ? (inLane ? 0.32 : 0.22) : 0.14 * clamp(state.mirrorPulse || 0, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    drawScrollingLaneTexture(assets.laneMirrorCurrent, lane, active ? (inLane ? 0.6 : 0.42) : 0.26, 0.5);
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(143, 247, 255, ${alpha * 0.48})`);
    band.addColorStop(0.5, `rgba(255, 248, 232, ${alpha * 0.3})`);
    band.addColorStop(1, `rgba(223, 255, 122, ${alpha * 0.24})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? "rgba(255, 248, 232, 0.76)" : "rgba(143, 247, 255, 0.45)";
    ctx.lineWidth = Math.max(1, 2.2 * s);
    ctx.setLineDash([18 * s, 9 * s, 4 * s, 9 * s]);
    ctx.lineDashOffset = state.scroll * 0.09;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const barW = Math.min(160 * s, state.width * 0.28);
    const barH = Math.max(5 * s, 4);
    const bx = clamp(hero.x - barW * 0.42, 16 * s, state.width - barW - 16 * s);
    const by = lane.center - lane.half - 13 * s;
    ctx.globalAlpha = active ? 0.82 : 0.42;
    ctx.fillStyle = "rgba(8, 24, 42, 0.52)";
    roundRect(bx, by, barW, barH, barH * 0.5);
    ctx.fill();
    const fill = barW * lane.progress;
    if (fill > 1) {
      const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
      grad.addColorStop(0, "#8ff7ff");
      grad.addColorStop(0.55, "#fff8e8");
      grad.addColorStop(1, "#dfff7a");
      ctx.fillStyle = grad;
      roundRect(bx, by, fill, barH, barH * 0.5);
      ctx.fill();
    }
    ctx.globalAlpha = active ? 0.64 : 0.28;
    for (let i = 0; i < 7; i += 1) {
      const x = state.width - ((state.scroll * 1.05 + i * 118 * s) % (state.width + 118 * s));
      const size = (5 + (i % 3) * 2 + pulse * 1.4) * s;
      ctx.save();
      ctx.translate(x, lane.center + Math.sin(state.time * 2.2 + i) * lane.half * 0.45);
      ctx.rotate(state.time * 1.4 + i);
      ctx.strokeStyle = i % 2 ? "#fff8e8" : "#8ff7ff";
      ctx.lineWidth = Math.max(1, 1.4 * s);
      ctx.beginPath();
      ctx.rect(-size, -size, size * 2, size * 2);
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }

  function drawForgeHeatLane() {
    if (!auroraForgeActive() && state.forgePulse <= 0 && state.forgeTempoTimer <= 0) return;
    const s = playScale();
    const lane = forgeLaneInfo();
    const pulse = Math.sin(state.time * 11.5) * 0.5 + 0.5;
    const active = auroraForgeActive();
    const inLane = active && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.22;
    const alpha = active ? (inLane ? 0.34 : 0.23) : 0.15 * clamp(state.forgePulse || 0, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    drawScrollingLaneTexture(assets.laneForgeHeat, lane, active ? (inLane ? 0.62 : 0.44) : 0.26, 0.46);
    const band = ctx.createLinearGradient(0, lane.center - lane.half, state.width, lane.center + lane.half);
    band.addColorStop(0, `rgba(255, 183, 90, ${alpha * 0.5})`);
    band.addColorStop(0.48, `rgba(255, 248, 232, ${alpha * 0.25})`);
    band.addColorStop(1, `rgba(84, 208, 255, ${alpha * 0.34})`);
    ctx.fillStyle = band;
    ctx.fillRect(0, lane.center - lane.half, state.width, lane.half * 2);

    ctx.strokeStyle = inLane ? "rgba(255, 248, 232, 0.78)" : "rgba(255, 183, 90, 0.46)";
    ctx.lineWidth = Math.max(1, 2.3 * s);
    ctx.setLineDash([14 * s, 9 * s, 3 * s, 9 * s]);
    ctx.lineDashOffset = -state.scroll * 0.1;
    ctx.beginPath();
    ctx.moveTo(0, lane.center - lane.half);
    ctx.lineTo(state.width, lane.center - lane.half);
    ctx.moveTo(0, lane.center + lane.half);
    ctx.lineTo(state.width, lane.center + lane.half);
    ctx.stroke();
    ctx.setLineDash([]);

    const barW = Math.min(164 * s, state.width * 0.29);
    const barH = Math.max(5 * s, 4);
    const bx = clamp(hero.x - barW * 0.4, 16 * s, state.width - barW - 16 * s);
    const by = clamp(lane.center - lane.half - 14 * s, playTop() + 8 * s, playBottom() - 22 * s);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = active ? 0.84 : 0.42;
    ctx.fillStyle = "rgba(20, 18, 31, 0.54)";
    roundRect(bx, by, barW, barH, barH * 0.5);
    ctx.fill();
    const fill = barW * lane.progress;
    if (fill > 1) {
      const grad = ctx.createLinearGradient(bx, by, bx + barW, by);
      grad.addColorStop(0, "#ff8d54");
      grad.addColorStop(0.5, "#fff8e8");
      grad.addColorStop(1, "#54d0ff");
      ctx.fillStyle = grad;
      roundRect(bx, by, fill, barH, barH * 0.5);
      ctx.fill();
    }

    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = active ? 0.66 : 0.28;
    for (let i = 0; i < 7; i += 1) {
      const x = state.width - ((state.scroll * 0.98 + i * 120 * s) % (state.width + 120 * s));
      const y = lane.center + Math.sin(state.time * 2.4 + i * 1.35) * lane.half * 0.42;
      const r = (4.6 + (i % 3) * 1.6 + pulse * 1.5) * s;
      ctx.fillStyle = i % 2 ? "rgba(84, 208, 255, 0.72)" : "rgba(255, 183, 90, 0.84)";
      ctx.beginPath();
      ctx.moveTo(x, y - r * 1.45);
      ctx.quadraticCurveTo(x + r * 1.1, y - r * 0.2, x + r * 0.36, y + r * 1.28);
      ctx.quadraticCurveTo(x, y + r * 0.62, x - r * 0.36, y + r * 1.28);
      ctx.quadraticCurveTo(x - r * 1.1, y - r * 0.2, x, y - r * 1.45);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawGroundContactShadows() {
    if (state.mode === "ready" && document.body.classList.contains("menu-open")) return;
    const s = playScale();
    const floorY = Math.min(state.height - 26 * s, playBottom() + 13 * s);
    ctx.save();
    ctx.globalCompositeOperation = "multiply";
    const heroLift = clamp((floorY - hero.y) / Math.max(80 * s, floorY - playTop()), 0.22, 1);
    drawSoftShadow(hero.x + 5 * s, floorY, 54 * s * (1.08 - heroLift * 0.22), 11 * s, 0.2 * (1.1 - heroLift * 0.28));

    for (const h of hazards) {
      if (h.x < -120 || h.x > state.width + 180) continue;
      if (h.type === "pipeTop" || h.type === "pipeBottom" || h.type === "acidGeyser") continue;
      const w = Math.max(24 * s, h.w || 54 * s);
      const centerY = h.y || floorY;
      const lift = clamp((floorY - centerY) / Math.max(120 * s, floorY - playTop()), 0.2, 1);
      drawSoftShadow(h.x, floorY, w * (0.34 + (1 - lift) * 0.18), Math.max(5 * s, w * 0.08), 0.1 + (1 - lift) * 0.08);
    }

    if (boss) {
      drawSoftShadow(boss.x + boss.w * 0.02, floorY, boss.w * 0.32, Math.max(10 * s, boss.h * 0.045), boss.daily ? 0.13 : 0.17);
    }
    ctx.restore();
  }

  function drawSoftShadow(x, y, rx, ry, alpha) {
    ctx.fillStyle = `rgba(2, 7, 9, ${clamp(alpha, 0, 0.28)})`;
    ctx.beginPath();
    ctx.ellipse(x, y, Math.max(1, rx), Math.max(1, ry), 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function hazardThreatProfile(h) {
    if (h.type === "stinkCloud") return { rgb: "167, 240, 74", accent: "#a7f04a", severe: Boolean(h.bossDamage), icon: "stink" };
    if (h.type === "soapBubble") return { rgb: "157, 232, 255", accent: "#9de8ff", severe: Boolean(h.bossDamage), icon: "bubble" };
    if (h.type === "barricade") return { rgb: "255, 141, 84", accent: "#ff8d54", severe: true, icon: "spike" };
    if (h.type === "sludgeBarrel") return { rgb: "196, 93, 255", accent: "#c45dff", severe: true, icon: "sludge" };
    if (h.type === "acidGeyser") return { rgb: "167, 240, 74", accent: "#a7f04a", severe: true, icon: "geyser" };
    if (h.type === "pipeTop" || h.type === "pipeBottom") return { rgb: "245, 200, 75", accent: "#f5c84b", severe: false, icon: "pipe" };
    if (h.elite || h.treasure || h.bossDamage || h.type === "bossPoop") return { rgb: "255, 86, 80", accent: "#ff5650", severe: true, icon: "chevron" };
    return { rgb: "245, 200, 75", accent: "#f5c84b", severe: false, icon: "chevron" };
  }

  function groupedThreatWarnings(windowStart, windowEnd, s) {
    const byGroup = new Map();
    for (const h of hazards) {
      if (!h || h.x < windowStart || h.x > windowEnd) continue;
      const pattern = h.routePattern || hazardPatternKey(h);
      const laneBucket = Math.round(((h.y || (playTop() + playBottom()) * 0.5) - playTop()) / Math.max(1, 52 * s));
      const key = h.routeGroup || `${pattern}:${Math.round((h.x || 0) / Math.max(1, 42 * s))}:${laneBucket}`;
      let entry = byGroup.get(key);
      if (!entry) {
        entry = {
          key,
          pattern,
          sample: h,
          minX: h.x,
          count: 0,
          yTotal: 0,
          yCount: 0,
          severe: false,
        };
        byGroup.set(key, entry);
      }
      const threat = hazardThreatProfile(h);
      entry.minX = Math.min(entry.minX, h.x || entry.minX);
      entry.count += 1;
      entry.severe = entry.severe || threat.severe || Boolean(h.elite || h.bossDamage);
      const sampleThreat = hazardThreatProfile(entry.sample);
      if ((threat.severe && !sampleThreat.severe) || (threat.severe === sampleThreat.severe && (h.x || 0) < (entry.sample.x || Infinity))) {
        entry.sample = h;
      }
      if (h.type === "pipeTop") {
        entry.topY = h.h;
      } else if (h.type === "pipeBottom") {
        entry.bottomY = h.y;
      } else {
        entry.yTotal += h.y || (playTop() + playBottom()) * 0.5;
        entry.yCount += 1;
      }
    }
    return Array.from(byGroup.values()).map((entry) => {
      const pipeGapY = Number.isFinite(entry.topY) && Number.isFinite(entry.bottomY)
        ? (entry.topY + entry.bottomY) * 0.5
        : null;
      return {
        ...entry,
        y: clamp(pipeGapY || (entry.yCount ? entry.yTotal / entry.yCount : (playTop() + playBottom()) * 0.5), playTop() + 12 * s, playBottom() - 12 * s),
      };
    }).sort((a, b) => a.minX - b.minX).slice(0, 5);
  }

  function drawThreatWarnings() {
    if (state.mode !== "playing" || hazards.length === 0) return;
    const s = playScale();
    const windowStart = state.width + 12 * s;
    const windowEnd = state.width + (isLandscapePlay() ? 190 : 150) * s;
    const visible = groupedThreatWarnings(windowStart, windowEnd, s);
    if (visible.length === 0) return;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    for (const entry of visible) {
      const h = entry.sample;
      const progress = clamp((windowEnd - entry.minX) / Math.max(1, windowEnd - windowStart), 0, 1);
      const alpha = 0.18 + progress * 0.46;
      const x = state.width - (18 + progress * 12) * s;
      const y = entry.y;
      const threat = hazardThreatProfile(h);
      const pulse = Math.sin(state.time * 16 + (h.phase || 0)) * 0.5 + 0.5;
      ctx.strokeStyle = `rgba(${threat.rgb}, ${alpha * 0.22})`;
      ctx.lineWidth = Math.max(1, 1.4 * s);
      ctx.beginPath();
      ctx.moveTo(state.width - 58 * s, y);
      ctx.lineTo(state.width - 7 * s, y);
      ctx.stroke();
      if (entry.pattern === "pipePair" && Number.isFinite(entry.topY) && Number.isFinite(entry.bottomY)) {
        const topY = clamp(entry.topY, playTop() + 6 * s, playBottom() - 6 * s);
        const bottomY = clamp(entry.bottomY, playTop() + 6 * s, playBottom() - 6 * s);
        ctx.strokeStyle = `rgba(${threat.rgb}, ${alpha * 0.32})`;
        ctx.lineWidth = Math.max(2, 3 * s);
        ctx.beginPath();
        ctx.moveTo(state.width - 7 * s, topY);
        ctx.lineTo(state.width - 7 * s, bottomY);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(${threat.rgb}, ${alpha * (threat.severe ? 1 : 0.86)})`;
      ctx.strokeStyle = `rgba(255, 248, 232, ${alpha * (threat.severe ? 0.82 : 0.62)})`;
      ctx.lineWidth = Math.max(1.5, 2.2 * s);
      if (threat.icon === "stink") {
        for (let i = 0; i < 3; i += 1) {
          const r = (6 + i * 3 + pulse * 2) * s;
          ctx.beginPath();
          ctx.arc(x - i * 8 * s, y + (i - 1) * 4 * s, r, -0.3, Math.PI * 1.42);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.ellipse(x - 10 * s, y, (18 + pulse * 4) * s, (11 + pulse * 2) * s, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (threat.icon === "bubble") {
        for (let i = 0; i < 3; i += 1) {
          ctx.beginPath();
          ctx.arc(x - i * 9 * s, y + Math.sin(state.time * 5 + i) * 5 * s, (6 + i * 2 + pulse * 2) * s, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      } else if (threat.icon === "spike") {
        for (let i = 0; i < 3; i += 1) {
          const dx = i * 9 * s;
          ctx.beginPath();
          ctx.moveTo(x - dx - 2 * s, y + 10 * s);
          ctx.lineTo(x - dx + 5 * s, y - 12 * s);
          ctx.lineTo(x - dx + 12 * s, y + 10 * s);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      } else if (threat.icon === "sludge") {
        ctx.beginPath();
        ctx.moveTo(x - 8 * s, y - 14 * s);
        ctx.quadraticCurveTo(x + 10 * s, y - 8 * s, x + 6 * s, y + 12 * s);
        ctx.quadraticCurveTo(x - 10 * s, y + 16 * s, x - 16 * s, y + 2 * s);
        ctx.quadraticCurveTo(x - 18 * s, y - 9 * s, x - 8 * s, y - 14 * s);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x - 2 * s, y - 1 * s, (4 + pulse * 2) * s, 0, Math.PI * 2);
        ctx.stroke();
      } else if (threat.icon === "geyser") {
        ctx.beginPath();
        ctx.moveTo(x - 7 * s, y + 14 * s);
        ctx.quadraticCurveTo(x - 16 * s, y - 2 * s, x - 5 * s, y - 14 * s);
        ctx.quadraticCurveTo(x + 8 * s, y - 5 * s, x + 2 * s, y + 14 * s);
        ctx.fill();
        ctx.stroke();
        ctx.fillRect(state.width - 5 * s, Math.max(playTop(), y - 20 * s), 3 * s, 40 * s);
      } else {
        for (let i = 0; i < 2; i += 1) {
          const dx = i * 10 * s;
          ctx.beginPath();
          ctx.moveTo(x - dx, y);
          ctx.lineTo(x - dx + 10 * s, y - 9 * s);
          ctx.lineTo(x - dx + 10 * s, y + 9 * s);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }
      if (h.type === "pipeTop" || h.type === "pipeBottom") {
        ctx.globalAlpha = alpha * 0.9;
        ctx.fillRect(state.width - 5 * s, Math.max(playTop(), y - 20 * s), 3 * s, 40 * s);
        ctx.globalAlpha = 1;
      }
      if (entry.count > 1 && entry.pattern !== "pipePair") {
        ctx.fillStyle = `rgba(255, 248, 232, ${alpha * 0.78})`;
        for (let i = 0; i < Math.min(3, entry.count - 1); i += 1) {
          ctx.beginPath();
          ctx.arc(x - (26 + i * 6) * s, y + 14 * s, 2.2 * s, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.restore();
  }

  function drawBossAttackPreview() {
    if (state.mode !== "playing" || !boss || !boss.warning) return;
    const s = playScale();
    const pulse = Math.sin(state.time * 22) * 0.5 + 0.5;
    const attack = boss.nextAttack || "";
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    if (attack === "aimedArc") {
      const x = clamp(hero.x, heroXBounds().left, heroXBounds().right);
      const y = clamp(hero.y, playTop() + hero.radiusY, playBottom() - hero.radiusY);
      const radius = Math.max(hero.radiusY + 18 * s, 34 * s) * (1 + pulse * 0.08);
      ctx.strokeStyle = `rgba(255, 86, 80, ${0.42 + pulse * 0.28})`;
      ctx.lineWidth = Math.max(2, 3 * s);
      ctx.setLineDash([6 * s, 8 * s]);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x - radius * 0.68, y);
      ctx.lineTo(x + radius * 0.68, y);
      ctx.moveTo(x, y - radius * 0.68);
      ctx.lineTo(x, y + radius * 0.68);
      ctx.stroke();
      ctx.globalAlpha = 0.38 + pulse * 0.22;
      ctx.beginPath();
      ctx.moveTo(boss.x - boss.w * 0.42, boss.y);
      ctx.quadraticCurveTo((boss.x + x) * 0.5, Math.max(playTop() + 24 * s, y - 145 * s), x, y);
      ctx.stroke();
    } else {
      const safe = boss.previewSafeLane || bossSafeLane();
      const left = Math.max(0, hero.x - 58 * s);
      const top = clamp(safe.center - safe.half, playTop(), playBottom());
      const height = Math.max(14 * s, Math.min(playBottom(), safe.center + safe.half) - top);
      const grad = ctx.createLinearGradient(left, 0, state.width, 0);
      grad.addColorStop(0, "rgba(157, 232, 255, 0)");
      grad.addColorStop(0.18, `rgba(157, 232, 255, ${0.1 + pulse * 0.05})`);
      grad.addColorStop(0.72, `rgba(223, 255, 122, ${0.08 + pulse * 0.04})`);
      grad.addColorStop(1, "rgba(157, 232, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(left, top, state.width - left, height);
      ctx.strokeStyle = `rgba(255, 248, 232, ${0.22 + pulse * 0.18})`;
      ctx.lineWidth = Math.max(1.4, 2 * s);
      ctx.setLineDash([10 * s, 8 * s]);
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(state.width, top);
      ctx.moveTo(left, top + height);
      ctx.lineTo(state.width, top + height);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawHero() {
    ctx.save();
    const blink = hero.invuln > 0 && Math.floor(hero.invuln * 16) % 2 === 0;
    ctx.globalAlpha = blink ? 0.54 : 1;
    ctx.translate(hero.x, hero.y);
    ctx.rotate(clamp(hero.vy / 920, -0.35, 0.42));
    const s = heroScale();
    drawTrail(-54 * s, 18 * s, hero.flap);
    const profile = heroProfile();
    const assetImg = profile.asset && assets[profile.asset] ? ensureImage(assets[profile.asset]) : null;
    const img = profile.canvas && assetImg ? assetImg : profile.canvas ? null : heroImage();
    const zodiacImage = profile.canvas && img;
    const w = zodiacImage
      ? (isLandscapePlay()
          ? Math.min(168, state.width * 0.18, state.height * 0.42)
          : Math.min(250, state.width * 0.24))
      : isLandscapePlay()
        ? Math.min(82, state.width * 0.09, state.height * 0.18)
        : Math.min(178, state.width * 0.16);
    const frameCount = profile.sheet ? 5 : 1;
    const sourceW = img && img.naturalWidth && frameCount > 1 ? img.naturalWidth / frameCount : img && img.naturalWidth || 620;
    const h = zodiacImage
      ? w * (img.naturalHeight || 417) / (sourceW || 620)
      : profile.canvas ? w * 0.94 : w * (img.naturalHeight || 417) / (sourceW || 620);
    const mounted = mountRiding();
    const pose = mounted ? mountedHeroPose(meta.selectedHero, meta.selectedMount) : { x: 0, y: 0, scale: 1 };
    const drawW = w * pose.scale;
    const drawH = h * pose.scale;
    if (mounted) drawMountSprite(s);
    drawHeroBacklight(drawW, drawH, s);
    ctx.shadowColor = "rgba(2, 7, 9, 0.34)";
    ctx.shadowBlur = 8 * s;
    ctx.shadowOffsetY = 3 * s;
    ctx.filter = profile.canvas ? "none" : "saturate(0.96) contrast(1.06)";
    if (zodiacImage && img.complete && img.naturalWidth) {
      const yNudge = profile.key === "dragonWood" ? -8 : profile.key === "voidChef" ? -6 : profile.key === "neonMedic" ? -10 : profile.key === "tigerMetal" ? -4 : 0;
      ctx.drawImage(img, -drawW * 0.46 + pose.x * s, -drawH * 0.58 + (pose.y + yNudge) * s, drawW, drawH);
    } else if (profile.canvas) {
      drawCanvasHero(profile.key, drawW, drawH, s, pose);
    } else if (img.complete && img.naturalWidth) {
      if (frameCount > 1) {
        const frame = clamp(currentEvolution(), 0, 4);
        ctx.drawImage(img, frame * sourceW, 0, sourceW, img.naturalHeight, -drawW * 0.45 + pose.x * s, -drawH * 0.56 + pose.y * s, drawW, drawH);
      } else {
        ctx.drawImage(img, -drawW * 0.45 + pose.x * s, -drawH * 0.56 + pose.y * s, drawW, drawH);
      }
    } else {
      drawFallbackHero();
    }
    ctx.filter = "none";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    if (mounted) drawRiderSeatOverlay(s, pose);
    if (state.shieldTimer > 0) {
      ctx.globalAlpha = 0.35 + Math.sin(state.time * 10) * 0.08;
      ctx.strokeStyle = "#9de8ff";
      ctx.lineWidth = 5 * s;
      ctx.beginPath();
      ctx.ellipse(4 * s, 0, 68 * s, 46 * s, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawCanvasHero(key, drawW, drawH, s, pose) {
    const evo = currentEvolution();
    const pulse = Math.sin(state.time * 7) * 0.5 + 0.5;
    ctx.save();
    ctx.translate(-drawW * 0.45 + pose.x * s + drawW * 0.5, -drawH * 0.56 + pose.y * s + drawH * 0.54);
    const u = Math.max(0.55, drawW / 96);
    ctx.scale(u, u);
    if (key === "dragonWood") {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 3; i += 1) {
        ctx.strokeStyle = `rgba(${i === 1 ? "84, 208, 255" : "223, 255, 122"}, ${0.14 + pulse * 0.14})`;
        ctx.lineWidth = 3 + i;
        ctx.beginPath();
        ctx.ellipse(-2, 2, 47 + i * 8 + pulse * 5, 30 + i * 4, -0.25 + i * 0.22, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
      const body = ctx.createLinearGradient(-56, -18, 48, 28);
      body.addColorStop(0, "#dfff7a");
      body.addColorStop(0.34, "#35d07f");
      body.addColorStop(0.72, "#19a48b");
      body.addColorStop(1, "#07524d");
      ctx.strokeStyle = "rgba(4, 31, 30, 0.7)";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(-48, 18);
      ctx.bezierCurveTo(-33, -22, -6, -24, 9, 5);
      ctx.bezierCurveTo(22, 28, 42, 17, 49, -6);
      ctx.stroke();
      ctx.strokeStyle = body;
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(-49, 17);
      ctx.bezierCurveTo(-33, -20, -7, -22, 9, 4);
      ctx.bezierCurveTo(23, 25, 40, 15, 48, -7);
      ctx.stroke();
      ctx.fillStyle = `rgba(223, 255, 122, ${0.68 + pulse * 0.18})`;
      for (let i = 0; i < 7; i += 1) {
        ctx.beginPath();
        ctx.ellipse(-37 + i * 11, -7 + Math.sin(i * 0.9 + state.time * 4) * 8, 6.4, 3.4, -0.35, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = "rgba(255, 248, 232, 0.7)";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(-44, 11);
      ctx.bezierCurveTo(-24, -10, -4, -9, 20, 8);
      ctx.bezierCurveTo(31, 14, 40, 6, 47, -5);
      ctx.stroke();
      const head = ctx.createLinearGradient(13, -32, 55, 8);
      head.addColorStop(0, "#54d0ff");
      head.addColorStop(0.48, "#35d07f");
      head.addColorStop(1, "#dfff7a");
      ctx.fillStyle = head;
      ctx.beginPath();
      ctx.ellipse(32, -14, 24, 18, -0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath();
      ctx.ellipse(49, -9, 10, 7, -0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#063c36";
      ctx.beginPath();
      ctx.arc(39, -18, 3.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#dfff7a";
      ctx.beginPath();
      ctx.arc(40, -18, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#dfff7a";
      ctx.lineWidth = 4.2;
      ctx.beginPath();
      ctx.moveTo(19, -27);
      ctx.quadraticCurveTo(27, -48, 43, -34);
      ctx.moveTo(31, -28);
      ctx.quadraticCurveTo(49, -45, 55, -22);
      ctx.stroke();
      ctx.strokeStyle = "rgba(255, 248, 232, 0.82)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(46, -8);
      ctx.quadraticCurveTo(62, -19, 73, -8);
      ctx.moveTo(45, -5);
      ctx.quadraticCurveTo(63, 4, 72, -6);
      ctx.stroke();
      ctx.fillStyle = evo >= 2 ? "#dfff7a" : "rgba(223, 255, 122, 0.76)";
      for (let i = 0; i < 5; i += 1) {
        ctx.beginPath();
        ctx.ellipse(-34 + i * 16, -30 + Math.sin(state.time * 4.3 + i) * 3, 10, 4.4, 0.44, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = `rgba(84, 208, 255, ${0.2 + pulse * 0.18})`;
      ctx.beginPath();
      ctx.arc(5, 4, 18 + pulse * 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    } else if (key === "tigerMetal") {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 4; i += 1) {
        ctx.strokeStyle = `rgba(${i % 2 ? "157, 232, 255" : "255, 227, 122"}, ${0.22 + pulse * 0.2})`;
        ctx.lineWidth = 3.5 + i * 0.7;
        ctx.beginPath();
        ctx.moveTo(-51 + i * 12, -29 + i * 8);
        ctx.lineTo(45 + i * 7, 10 + i * 7);
        ctx.stroke();
      }
      ctx.strokeStyle = `rgba(255, 248, 232, ${0.28 + pulse * 0.28})`;
      ctx.lineWidth = 5.5;
      ctx.beginPath();
      ctx.arc(0, 2, 47 + pulse * 5, -0.92, 0.86);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
      const armor = ctx.createLinearGradient(-42, -20, 44, 34);
      armor.addColorStop(0, "#fff8e8");
      armor.addColorStop(0.36, "#ffe37a");
      armor.addColorStop(0.68, "#9de8ff");
      armor.addColorStop(1, "#516070");
      ctx.fillStyle = armor;
      ctx.beginPath();
      ctx.ellipse(-7, 8, 42, 27, -0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(17, 27, 34, 0.9)";
      for (let i = 0; i < 4; i += 1) {
        ctx.save();
        ctx.translate(-31 + i * 15, -10 + i * 3);
        ctx.rotate(-0.52);
        roundRect(-3, -15, 6, 30, 3);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = "rgba(255, 248, 232, 0.74)";
      for (let i = 0; i < 4; i += 1) {
        ctx.beginPath();
        ctx.ellipse(-26 + i * 15, 24 + Math.sin(state.time * 5 + i) * 1.5, 8, 3.2, 0.1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath();
      ctx.ellipse(28, -8, 24, 18, 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#151f27";
      ctx.beginPath();
      ctx.arc(37, -12, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ff5650";
      ctx.beginPath();
      ctx.arc(38, -12, 1.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffe37a";
      ctx.beginPath();
      ctx.moveTo(16, -21);
      ctx.lineTo(23, -40);
      ctx.lineTo(33, -22);
      ctx.moveTo(38, -20);
      ctx.lineTo(52, -35);
      ctx.lineTo(49, -11);
      ctx.fill();
      ctx.strokeStyle = "rgba(17, 27, 34, 0.88)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(22, -12);
      ctx.lineTo(35, -7);
      ctx.moveTo(20, -3);
      ctx.lineTo(36, 0);
      ctx.stroke();
      ctx.strokeStyle = "#fff8e8";
      ctx.lineWidth = 4.6;
      for (let i = 0; i < 4; i += 1) {
        ctx.beginPath();
        ctx.moveTo(20 + i * 6, 13 + i * 3);
        ctx.lineTo(54 + i * 7, 19 + i * 3);
        ctx.stroke();
      }
      ctx.strokeStyle = `rgba(157, 232, 255, ${0.38 + pulse * 0.2})`;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.arc(0, 4, 36 + evo * 4, -0.72, 0.82);
      ctx.stroke();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = `rgba(255, 227, 122, ${0.16 + pulse * 0.16})`;
      ctx.beginPath();
      ctx.arc(24, -4, 22 + pulse * 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
    ctx.restore();
  }

  function mountedHeroPose(heroKey, mountKey) {
    const byHero = {
      poop: { x: -4, y: 12, scale: 0.78 },
      ikun: { x: -6, y: 10, scale: 0.76 },
      jet: { x: -8, y: 13, scale: 0.74 },
      alchemist: { x: -5, y: 9, scale: 0.75 },
      paper: { x: -2, y: 8, scale: 0.75 },
      dragonWood: { x: -6, y: 9, scale: 0.76 },
      voidChef: { x: -5, y: 8, scale: 0.75 },
      neonMedic: { x: -4, y: 7, scale: 0.74 },
      tigerMetal: { x: -7, y: 11, scale: 0.75 },
    }[heroKey] || { x: -4, y: 10, scale: 0.76 };
    const byMount = {
      plungerBoard: { x: -2, y: 0, scale: 1 },
      slimeSkate: { x: -4, y: 2, scale: 0.98 },
      thunderSeat: { x: -2, y: -1, scale: 0.98 },
      rocketToilet: { x: -8, y: 1, scale: 0.96 },
      crystalDragon: { x: -5, y: -4, scale: 0.96 },
      nebulaComet: { x: -1, y: -5, scale: 0.94 },
      woodDragonBoat: { x: -6, y: -5, scale: 0.94 },
      gravityCauldron: { x: -5, y: -7, scale: 0.94 },
      ambulanceHover: { x: -3, y: -8, scale: 0.93 },
      metalTigerChariot: { x: -7, y: -2, scale: 0.94 },
      fiveElementKirin: { x: -4, y: -7, scale: 0.92 },
    }[mountKey] || { x: 0, y: 0, scale: 1 };
    return {
      x: byHero.x + byMount.x,
      y: byHero.y + byMount.y,
      scale: byHero.scale * byMount.scale,
    };
  }

  function drawRiderSeatOverlay(s, pose) {
    const profile = mountProfile();
    const color = profile.color || "#f5c84b";
    const pulse = Math.sin(state.time * 9) * 0.5 + 0.5;
    ctx.save();
    ctx.globalAlpha = 0.86;
    ctx.strokeStyle = "rgba(17, 27, 34, 0.72)";
    ctx.lineWidth = Math.max(2, 4 * s);
    ctx.beginPath();
    ctx.moveTo((-22 + pose.x * 0.2) * s, 18 * s);
    ctx.quadraticCurveTo(-2 * s, 31 * s, (27 + pose.x * 0.15) * s, 20 * s);
    ctx.stroke();
    ctx.strokeStyle = canvasRgba(color, 0.72 + pulse * 0.16);
    ctx.lineWidth = Math.max(1.5, 2.2 * s);
    ctx.beginPath();
    ctx.moveTo(-20 * s, 18 * s);
    ctx.quadraticCurveTo(-1 * s, 27 * s, 25 * s, 19 * s);
    ctx.stroke();
    ctx.fillStyle = "rgba(17, 27, 34, 0.78)";
    roundRect(-20 * s, 17 * s, 40 * s, 9 * s, 5 * s);
    ctx.fill();
    ctx.fillStyle = color;
    roundRect(-13 * s, 14 * s, 26 * s, 6 * s, 3 * s);
    ctx.fill();
    ctx.strokeStyle = canvasRgba(color, 0.62);
    ctx.lineWidth = Math.max(1.2, 1.8 * s);
    ctx.beginPath();
    ctx.moveTo(24 * s, 8 * s);
    ctx.quadraticCurveTo(38 * s, 2 * s, 41 * s, -12 * s);
    ctx.stroke();
    ctx.restore();
  }

  function drawMountChargeEffects(s, profile, charge, pulse) {
    const spectacle = Math.max(1, Number(profile.spectacle) || 1);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = canvasRgba(profile.color, 0.28 + charge * 0.28 + Math.min(0.18, spectacle * 0.04));
    ctx.lineWidth = Math.max(2, (2.4 + spectacle * 0.28) * s);
    const ringCount = spectacle >= 2.4 ? 3 : spectacle >= 1.6 ? 2 : 1;
    for (let i = 0; i < ringCount; i += 1) {
      ctx.beginPath();
      ctx.ellipse(
        0,
        (i - 1) * 3 * s,
        (66 + charge * 14 + pulse * 3 + i * 13) * s,
        (23 + pulse * 2 + i * 4) * s,
        (i - 1) * 0.13,
        0,
        Math.PI * 2,
      );
      ctx.stroke();
    }
    if (spectacle >= 2) {
      const sparks = Math.min(7, Math.floor(2 + spectacle * 1.5));
      for (let i = 0; i < sparks; i += 1) {
        const angle = state.time * (1.2 + spectacle * 0.08) + i * Math.PI * 2 / sparks;
        const x = Math.cos(angle) * (56 + charge * 15) * s;
        const y = Math.sin(angle * 0.85) * (22 + pulse * 4) * s;
        ctx.fillStyle = i % 2 ? canvasRgba(profile.color, 0.62) : "rgba(255, 248, 232, 0.72)";
        ctx.beginPath();
        ctx.arc(x, y, (1.6 + spectacle * 0.42) * s, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (state.mountSkillTimer > 0) {
      ctx.globalAlpha = clamp(state.mountSkillTimer, 0, 0.76);
      ctx.strokeStyle = canvasRgba(profile.color, 0.64 + Math.min(0.18, spectacle * 0.04));
      ctx.lineWidth = Math.max(3, (4.5 + spectacle * 0.5) * s);
      ctx.beginPath();
      ctx.ellipse(0, 0, (78 + (0.72 - state.mountSkillTimer) * 42 + spectacle * 6) * s, (32 + pulse * 5 + spectacle * 2) * s, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgba(17, 27, 34, 0.74)";
    roundRect(-30 * s, 20 * s, 60 * s, 5 * s, 3 * s);
    ctx.fill();
    ctx.fillStyle = profile.color;
    roundRect(-30 * s, 20 * s, 60 * s * charge, 5 * s, 3 * s);
    ctx.fill();
  }

  function mountAtlasPose(profile) {
    return {
      plungerBoard: { w: 132, y: -2 },
      slimeSkate: { w: 136, y: 0 },
      thunderSeat: { w: 145, y: -16 },
      rocketToilet: { w: 160, y: 4 },
      crystalDragon: { w: 150, y: -6 },
      nebulaComet: { w: 164, y: -4 },
      woodDragonBoat: { w: 166, y: -2 },
      metalTigerChariot: { w: 168, y: 2 },
      fiveElementKirin: { w: 172, y: -10 },
    }[profile.key] || { w: 138, y: 0 };
  }

  function drawMountAtlasSprite(s, profile, charge, pulse) {
    if (!Number.isFinite(profile.atlasFrame)) return false;
    const img = ensureImage(assets.mountAtlas);
    if (!img || !img.complete || !img.naturalWidth) return false;
    const frame = clamp(Math.floor(profile.atlasFrame), 0, 8);
    const cols = 3;
    const rows = 3;
    const sourceW = img.naturalWidth / cols;
    const sourceH = img.naturalHeight / rows;
    const sx = (frame % cols) * sourceW;
    const sy = Math.floor(frame / cols) * sourceH;
    const pose = mountAtlasPose(profile);
    const drawW = (pose.w + charge * 5 + pulse * 1.5) * s;
    const drawH = drawW * (sourceH / sourceW);
    ctx.save();
    ctx.shadowColor = canvasRgba(profile.color, 0.34 + charge * 0.2);
    ctx.shadowBlur = (10 + (profile.spectacle || 1) * 4 + charge * 8) * s;
    ctx.filter = `saturate(${1.02 + Math.min(0.32, (profile.spectacle || 1) * 0.06)}) contrast(1.04)`;
    ctx.drawImage(img, sx, sy, sourceW, sourceH, -drawW * 0.5, (-drawH * 0.5 + pose.y * s), drawW, drawH);
    ctx.filter = "none";
    ctx.restore();
    return true;
  }

  function drawHeroBacklight(w, h, s) {
    const pulse = Math.sin(state.time * 5.6) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(-w * 0.06, -h * 0.04, 1, -w * 0.06, -h * 0.04, w * 0.68);
    glow.addColorStop(0, `rgba(255, 248, 232, ${0.12 + pulse * 0.03})`);
    glow.addColorStop(0.42, "rgba(245, 200, 75, 0.08)");
    glow.addColorStop(1, "rgba(245, 200, 75, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.ellipse(0, 1 * s, w * 0.64, h * 0.46, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 248, 232, 0.16)";
    ctx.lineWidth = Math.max(1, 1.4 * s);
    ctx.beginPath();
    ctx.ellipse(2 * s, 0, w * 0.5, h * 0.36, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawDroneSprite(profile, size, pulse) {
    const img = ensureImage(assets[profile.asset]);
    if (img && img.complete && img.naturalWidth) {
      ctx.save();
      ctx.shadowColor = canvasRgba(profile.color || "#9de8ff", 0.44);
      ctx.shadowBlur = 10 + pulse * 6;
      ctx.filter = "saturate(1.08) contrast(1.04)";
      const radius = size * 0.18;
      roundRect(-size * 0.5, -size * 0.5, size, size, radius);
      ctx.clip();
      ctx.drawImage(img, -size * 0.5, -size * 0.5, size, size);
      ctx.filter = "none";
      ctx.restore();
      return true;
    }
    ctx.fillStyle = "rgba(17, 27, 34, 0.72)";
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.34, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = profile.color || "#9de8ff";
    ctx.beginPath();
    ctx.arc(size * 0.14, -size * 0.08, size * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = profile.key === "voidCauldron" ? "#33f0df" : profile.key === "tigerSpark" ? "#ffe37a" : "#dfff7a";
    ctx.lineWidth = Math.max(1.4, size * 0.045);
    ctx.beginPath();
    ctx.arc(0, 0, size * (0.38 + pulse * 0.05), 0, Math.PI * 2);
    ctx.stroke();
    return false;
  }

  function drawDrone() {
    const level = runPerkLevel("drone");
    if (level <= 0 || state.mode === "ready") return;
    const profile = activeDroneProfile();
    const s = playScale();
    const pulse = Math.sin(state.time * 7) * 0.5 + 0.5;
    const drones = level >= 2 ? 2 : 1;
    ctx.save();
    for (let i = 0; i < drones; i += 1) {
      const sign = i === 0 ? -1 : 1;
      const x = hero.x - (28 + i * 12) * s;
      const y = hero.y + sign * (48 + pulse * 6 + i * 4) * s;
      const size = (profile.key === "tigerSpark" ? 58 : profile.key === "medicHalo" ? 54 : 50) * s;
      ctx.save();
      ctx.translate(x, y);
      if (i > 0) ctx.scale(0.9, 0.9);
      ctx.globalAlpha = i > 0 ? 0.72 : 0.88;
      drawDroneSprite(profile, size, pulse);
      ctx.restore();
    }
    ctx.restore();
  }

  function drawFeverAura() {
    const classicAura = state.eventKind === "cleanWind" || state.eventKind === "goldRush" || state.eventKind === "draftGate" || state.eventKind === "mysteryRoute" || state.classicEventPulse > 0 || state.mysteryPulse > 0 || state.classicGreenWavePulse > 0;
    if (state.feverTimer <= 0 && state.nearMissTimer <= 0 && state.draftTimer <= 0 && state.comboSurgeTimer <= 0 && state.elementSurgeTimer <= 0 && state.elementSurgePulse <= 0 && state.purificationPulse <= 0 && state.starTrailPulse <= 0 && !starTrailActive() && state.mirrorPulse <= 0 && state.mirrorGuardTimer <= 0 && !mirrorCurrentActive() && state.forgePulse <= 0 && state.forgeTempoTimer <= 0 && !auroraForgeActive() && state.adventurePulse <= 0 && state.adventureBoostTimer <= 0 && state.adventureContractPulse <= 0 && state.adventureContractBoostTimer <= 0 && state.adventureSupportTimer <= 0 && state.adventureSupportPulse <= 0 && !adventureCurrentActive() && state.counterTimer <= 0 && state.counterPulse <= 0 && !classicAura) return;
    const s = playScale();
    ctx.save();
    ctx.translate(hero.x, hero.y);
    if (state.feverTimer > 0) {
      ctx.globalAlpha = 0.18 + Math.sin(state.time * 16) * 0.05;
      ctx.strokeStyle = "#f5c84b";
      ctx.lineWidth = 4 * s;
      ctx.beginPath();
      ctx.ellipse(0, 0, (72 + Math.sin(state.time * 8) * 6) * s, 48 * s, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (state.nearMissTimer > 0) {
      ctx.globalAlpha = state.nearMissTimer;
      ctx.strokeStyle = "#9de8ff";
      ctx.lineWidth = 3 * s;
      ctx.beginPath();
      ctx.arc(0, 0, (58 + (0.8 - state.nearMissTimer) * 44) * s, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (state.draftTimer > 0) {
      ctx.globalAlpha = Math.min(0.48, state.draftTimer / 5.4);
      ctx.strokeStyle = "#9de8ff";
      ctx.lineWidth = 4 * s;
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(-14 * s - i * 20 * s, 0, (74 + i * 14 + Math.sin(state.time * 9 + i) * 5) * s, (42 + i * 4) * s, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    if (classicAura) {
      const pulse = Math.sin(state.time * 8.4) * 0.5 + 0.5;
      const color = state.eventKind === "goldRush" ? "#f5c84b" : state.eventKind === "draftGate" ? "#9de8ff" : state.eventKind === "mysteryRoute" ? "#c45dff" : state.classicGreenWavePulse > state.classicEventPulse ? "#5bded4" : "#dfff7a";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.36, 0.14 + (state.classicEventPulse || 0) * 0.16 + (state.mysteryPulse || 0) * 0.14 + (state.classicGreenWavePulse || 0) * 0.12 + pulse * 0.04);
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(2, 2.7 * s);
      ctx.beginPath();
      ctx.ellipse(-4 * s, 0, (58 + pulse * 7) * s, (36 + pulse * 4) * s, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
    }
    if (adventureCurrentActive() || state.adventurePulse > 0 || state.adventureBoostTimer > 0) {
      const lane = adventureCurrentLaneInfo();
      const laneFit = adventureCurrentActive() && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.23;
      const pulse = Math.sin(state.time * 12.5) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.5, 0.15 + (state.adventurePulse || 0) * 0.26 + (state.adventureBoostTimer > 0 ? 0.12 : 0) + (laneFit ? 0.12 : 0));
      ctx.strokeStyle = laneFit ? "#fff8e8" : "#5bded4";
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 0, (48 + i * 12 + pulse * 6 + (state.adventurePulse || 0) * 30) * s, (28 + i * 5 + pulse * 4) * s, -0.14, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.strokeStyle = "#dfff7a";
      ctx.lineWidth = Math.max(1.5, 2.1 * s);
      ctx.beginPath();
      ctx.arc(0, 0, (40 + pulse * 5) * s, Math.PI * 0.2, Math.PI * 1.82);
      ctx.stroke();
      ctx.fillStyle = "#5bded4";
      for (let i = 0; i < 4; i += 1) {
        const a = state.time * 2.5 + i * Math.PI * 0.5;
        const x = Math.cos(a) * (42 + pulse * 6) * s;
        const y = Math.sin(a * 0.82) * (24 + pulse * 4) * s;
        ctx.beginPath();
        ctx.ellipse(x, y, (4 + pulse) * s, (2.5 + pulse * 0.6) * s, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (state.adventureContractPulse > 0 || state.adventureContractBoostTimer > 0) {
      const contract = adventureContractForStage();
      const pulse = Math.sin(state.time * 10.5) * 0.5 + 0.5;
      const color = contract ? contract.color : "#f5c84b";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.52, 0.13 + (state.adventureContractPulse || 0) * 0.24 + (state.adventureContractBoostTimer > 0 ? 0.15 : 0));
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 2; i += 1) {
        ctx.save();
        ctx.rotate(state.time * (0.28 + i * 0.09) + i * Math.PI * 0.5);
        ctx.beginPath();
        ctx.rect((-48 - pulse * 4 - i * 8) * s, (-34 - i * 5) * s, (96 + pulse * 8 + i * 16) * s, (68 + i * 10) * s);
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = color;
      for (let i = 0; i < 4; i += 1) {
        const a = state.time * 2.1 + i * Math.PI * 0.5;
        ctx.beginPath();
        ctx.arc(Math.cos(a) * 44 * s, Math.sin(a) * 28 * s, (3.2 + pulse) * s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (state.adventureSupportTimer > 0 || state.adventureSupportPulse > 0) {
      const pulse = Math.sin(state.time * 12) * 0.5 + 0.5;
      const support = clamp((state.adventureSupportPulse || 0) + (state.adventureSupportTimer > 0 ? 0.32 : 0), 0, 1);
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.42, 0.12 + support * 0.2 + pulse * 0.04);
      ctx.strokeStyle = "#54d0ff";
      ctx.lineWidth = Math.max(2, 2.6 * s);
      ctx.beginPath();
      ctx.ellipse(-2 * s, 0, (68 + pulse * 9 + support * 18) * s, (40 + pulse * 4) * s, -0.08, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = "#dfff7a";
      ctx.lineWidth = Math.max(1.5, 2 * s);
      ctx.beginPath();
      ctx.arc(0, 0, (48 + support * 14) * s, state.time * 1.6, state.time * 1.6 + Math.PI * 1.45);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
    }
    if (state.comboSurgeTimer > 0) {
      const pulse = Math.sin(state.time * 10) * 0.5 + 0.5;
      ctx.globalAlpha = Math.min(0.46, 0.2 + state.comboSurgeTimer / 24);
      ctx.strokeStyle = "#dfff7a";
      ctx.lineWidth = Math.max(2, 3 * s);
      ctx.beginPath();
      ctx.moveTo(0, (-62 - pulse * 5) * s);
      ctx.lineTo((72 + pulse * 6) * s, 0);
      ctx.lineTo(0, (62 + pulse * 5) * s);
      ctx.lineTo((-72 - pulse * 6) * s, 0);
      ctx.closePath();
      ctx.stroke();
    }
    if (state.elementSurgeTimer > 0 || state.elementSurgePulse > 0) {
      const element = elementCoreInfo(state.elementSurgeKind || "wood");
      const pulse = Math.sin(state.time * 11) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.58, 0.2 + (state.elementSurgeTimer || 0) / 18 + (state.elementSurgePulse || 0) * 0.22);
      ctx.strokeStyle = element.color;
      ctx.lineWidth = Math.max(2, 3.4 * s);
      for (let i = 0; i < 5; i += 1) {
        ctx.save();
        ctx.rotate(state.time * (0.72 + i * 0.04) + i * Math.PI * 0.4);
        ctx.beginPath();
        ctx.ellipse(0, 0, (58 + i * 8 + pulse * 6 + (state.elementSurgePulse || 0) * 26) * s, (34 + i * 4 + pulse * 4) * s, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = canvasRgba(element.color, 0.18, element.rgb);
      ctx.beginPath();
      ctx.arc(0, 0, (38 + pulse * 8) * s, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
    if (state.purificationPulse > 0) {
      const pulse = Math.sin(state.time * 12.5) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.56, 0.18 + state.purificationPulse * 0.28);
      ctx.strokeStyle = "#5bded4";
      ctx.lineWidth = Math.max(2, 3.3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 0, (54 + i * 10 + pulse * 8 + state.purificationPulse * 34) * s, (30 + i * 5 + pulse * 4) * s, -0.08 + i * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = canvasRgba("#5bded4", 0.16, "91, 222, 212");
      ctx.beginPath();
      ctx.arc(0, 0, (34 + pulse * 8) * s, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff8e8";
      for (let i = 0; i < 4; i += 1) {
        const a = state.time * 3 + i * Math.PI * 0.5;
        const x = Math.cos(a) * (44 + i * 3) * s;
        const y = Math.sin(a * 0.8) * (24 + i * 2) * s;
        ctx.beginPath();
        ctx.arc(x, y, (2.5 + pulse * 1.2) * s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (starTrailActive() || state.starTrailPulse > 0) {
      const lane = starTrailLaneInfo();
      const laneFit = starTrailActive() && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.24;
      const pulse = Math.sin(state.time * 13) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.52, 0.16 + (state.starTrailPulse || 0) * 0.28 + (laneFit ? 0.16 : 0));
      ctx.strokeStyle = laneFit ? "#fff8e8" : "#9de8ff";
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 0, (50 + i * 12 + pulse * 7 + (state.starTrailPulse || 0) * 36) * s, (29 + i * 6 + pulse * 4) * s, -0.16, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 5; i += 1) {
        const a = state.time * 2.8 + i * Math.PI * 0.4;
        const x = Math.cos(a) * (46 + pulse * 7) * s;
        const y = Math.sin(a * 0.7) * (26 + pulse * 4) * s;
        ctx.fillStyle = i % 2 ? "#fff8e8" : "#9de8ff";
        ctx.beginPath();
        ctx.arc(x, y, (2.8 + pulse * 1.4) * s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (mirrorCurrentActive() || state.mirrorPulse > 0 || state.mirrorGuardTimer > 0) {
      const lane = mirrorLaneInfo();
      const laneFit = mirrorCurrentActive() && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.2;
      const pulse = Math.sin(state.time * 14) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.54, 0.15 + (state.mirrorPulse || 0) * 0.28 + (state.mirrorGuardTimer > 0 ? 0.14 : 0) + (laneFit ? 0.12 : 0));
      ctx.strokeStyle = laneFit ? "#fff8e8" : "#8ff7ff";
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 0, (48 + i * 13 + pulse * 6 + (state.mirrorPulse || 0) * 34) * s, (28 + i * 6 + pulse * 4) * s, 0.12 + i * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.strokeStyle = "#dfff7a";
      ctx.lineWidth = Math.max(1.5, 2.2 * s);
      ctx.beginPath();
      ctx.moveTo((-34 - pulse * 4) * s, -30 * s);
      ctx.lineTo((34 + pulse * 4) * s, 30 * s);
      ctx.moveTo((34 + pulse * 4) * s, -30 * s);
      ctx.lineTo((-34 - pulse * 4) * s, 30 * s);
      ctx.stroke();
      ctx.fillStyle = "#8ff7ff";
      for (let i = 0; i < 4; i += 1) {
        const a = -state.time * 2.6 + i * Math.PI * 0.5;
        const x = Math.cos(a) * (44 + pulse * 6) * s;
        const y = Math.sin(a * 0.8) * (25 + pulse * 4) * s;
        ctx.beginPath();
        ctx.rect(x - 3 * s, y - 3 * s, 6 * s, 6 * s);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (auroraForgeActive() || state.forgePulse > 0 || state.forgeTempoTimer > 0) {
      const lane = forgeLaneInfo();
      const laneFit = auroraForgeActive() && Math.abs(hero.y - lane.center) <= lane.half + hero.radiusY * 0.22;
      const pulse = Math.sin(state.time * 14.5) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.56, 0.16 + (state.forgePulse || 0) * 0.28 + (state.forgeTempoTimer > 0 ? 0.14 : 0) + (laneFit ? 0.13 : 0));
      ctx.strokeStyle = laneFit ? "#fff8e8" : "#ffb75a";
      ctx.lineWidth = Math.max(2, 3.2 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 0, (50 + i * 12 + pulse * 6 + (state.forgePulse || 0) * 34) * s, (29 + i * 6 + pulse * 4) * s, -0.12 + i * 0.16, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.strokeStyle = "#54d0ff";
      ctx.lineWidth = Math.max(1.5, 2.2 * s);
      ctx.beginPath();
      ctx.arc(0, 0, (42 + pulse * 5) * s, -Math.PI * 0.08, Math.PI * 1.08);
      ctx.stroke();
      ctx.fillStyle = "#ffb75a";
      for (let i = 0; i < 4; i += 1) {
        const a = state.time * 2.7 + i * Math.PI * 0.5;
        const x = Math.cos(a) * (44 + pulse * 6) * s;
        const y = Math.sin(a * 0.8) * (25 + pulse * 4) * s;
        ctx.beginPath();
        ctx.arc(x, y, (2.8 + pulse * 1.3) * s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (state.counterTimer > 0 || state.counterPulse > 0) {
      const pulse = Math.sin(state.time * 16) * 0.5 + 0.5;
      ctx.globalAlpha = Math.min(0.56, 0.22 + (state.counterTimer || 0) / 18 + (state.counterPulse || 0) * 0.22);
      ctx.strokeStyle = "#ff8d54";
      ctx.lineWidth = Math.max(2, 3.2 * s);
      for (let i = 0; i < 3; i += 1) {
        const radius = (50 + i * 14 + pulse * 5 + (state.counterPulse || 0) * 42) * s;
        ctx.beginPath();
        ctx.arc(0, 0, radius, -Math.PI * 0.2 + i * 0.5, Math.PI * 1.08 + i * 0.5);
        ctx.stroke();
      }
      for (let i = 0; i < 3; i += 1) {
        ctx.fillStyle = i < (state.counterStacks || 0) ? "#fff8e8" : "rgba(255, 248, 232, 0.22)";
        ctx.beginPath();
        ctx.arc((-18 + i * 18) * s, -58 * s, 4.5 * s, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawMountSprite(s) {
    if (!mountRiding()) return;
    const profile = mountProfile();
    const charge = clamp(state.mountCharge || 0, 0, 100) / 100;
    const pulse = Math.sin(state.time * 9) * 0.5 + 0.5;
    const y = 34 * s;
    ctx.save();
    ctx.translate(-10 * s, y);
    const assetImg = profile.asset && assets[profile.asset] ? ensureImage(assets[profile.asset]) : null;
    if (assetImg && assetImg.complete && assetImg.naturalWidth) {
      const pose = {
        gravityCauldron: { w: 168, y: -9, sx: 135, sy: 45, sw: 670, sh: 540 },
        ambulanceHover: { w: 174, y: -8, sx: 80, sy: 55, sw: 785, sh: 515 },
      }[profile.key] || { w: 150, y: 0 };
      const drawW = (pose.w + charge * 8 + pulse * 3) * s;
      const sourceW = pose.sw || assetImg.naturalWidth;
      const sourceH = pose.sh || assetImg.naturalHeight;
      const sourceX = pose.sx || 0;
      const sourceY = pose.sy || 0;
      const drawH = drawW * (sourceH / sourceW);
      ctx.shadowColor = canvasRgba(profile.color, 0.34 + charge * 0.22);
      ctx.shadowBlur = (10 + (profile.spectacle || 1) * 4 + charge * 8) * s;
      ctx.drawImage(assetImg, sourceX, sourceY, sourceW, sourceH, -drawW * 0.5, (-drawH * 0.5 + pose.y * s), drawW, drawH);
      drawMountChargeEffects(s, profile, charge, pulse);
      ctx.restore();
      return;
    }
    if (drawMountAtlasSprite(s, profile, charge, pulse)) {
      drawMountChargeEffects(s, profile, charge, pulse);
      ctx.restore();
      return;
    }
    if (profile.key === "slimeSkate") {
      const grad = ctx.createLinearGradient(-54 * s, -12 * s, 52 * s, 13 * s);
      grad.addColorStop(0, "#dfff7a");
      grad.addColorStop(0.52, "#a7f04a");
      grad.addColorStop(1, "#54d0ff");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(0, 4 * s, 62 * s, 17 * s, Math.sin(state.time * 3) * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(223, 255, 122, ${0.24 + pulse * 0.16})`;
      ctx.beginPath();
      ctx.ellipse(-22 * s, -5 * s, 28 * s, 9 * s, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(17, 27, 34, 0.58)";
      roundRect(-24 * s, -9 * s, 48 * s, 14 * s, 8 * s);
      ctx.fill();
    } else if (profile.key === "thunderSeat") {
      ctx.fillStyle = "#5f4adb";
      roundRect(-42 * s, -12 * s, 82 * s, 26 * s, 12 * s);
      ctx.fill();
      ctx.fillStyle = "#c45dff";
      ctx.beginPath();
      ctx.ellipse(-8 * s, -2 * s, 34 * s, 18 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 248, 232, ${0.5 + pulse * 0.26})`;
      ctx.lineWidth = Math.max(2, 2.6 * s);
      ctx.beginPath();
      ctx.moveTo(16 * s, -18 * s);
      ctx.lineTo(3 * s, 0);
      ctx.lineTo(19 * s, -2 * s);
      ctx.lineTo(5 * s, 20 * s);
      ctx.stroke();
    } else if (profile.key === "rocketToilet") {
      const flame = ctx.createLinearGradient(-92 * s, 0, -28 * s, 0);
      flame.addColorStop(0, "rgba(255, 86, 80, 0)");
      flame.addColorStop(0.45, `rgba(255, 141, 84, ${0.5 + pulse * 0.26})`);
      flame.addColorStop(1, "rgba(255, 241, 166, 0.9)");
      ctx.fillStyle = flame;
      ctx.beginPath();
      ctx.ellipse(-62 * s, 4 * s, (34 + pulse * 8) * s, 13 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      const body = ctx.createLinearGradient(-46 * s, -20 * s, 60 * s, 18 * s);
      body.addColorStop(0, "#8b4f25");
      body.addColorStop(0.35, "#ff8d54");
      body.addColorStop(0.72, "#fff8e8");
      body.addColorStop(1, "#54d0ff");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.ellipse(2 * s, 2 * s, 62 * s, 23 * s, -0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ff5650";
      ctx.beginPath();
      ctx.moveTo(48 * s, -14 * s);
      ctx.lineTo(78 * s, 2 * s);
      ctx.lineTo(48 * s, 18 * s);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgba(17, 27, 34, 0.7)";
      ctx.beginPath();
      ctx.ellipse(-22 * s, 0, 16 * s, 11 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(15 * s, 0, 14 * s, 10 * s, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (profile.key === "crystalDragon") {
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = `rgba(84, 208, 255, ${0.18 + pulse * 0.16})`;
      ctx.beginPath();
      ctx.moveTo(-34 * s, -8 * s);
      ctx.lineTo(-74 * s, -36 * s);
      ctx.lineTo(-18 * s, -24 * s);
      ctx.lineTo(18 * s, -8 * s);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-10 * s, -8 * s);
      ctx.lineTo(42 * s, -34 * s);
      ctx.lineTo(62 * s, -4 * s);
      ctx.closePath();
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      const dragon = ctx.createLinearGradient(-58 * s, -18 * s, 64 * s, 22 * s);
      dragon.addColorStop(0, "#9de8ff");
      dragon.addColorStop(0.52, "#54d0ff");
      dragon.addColorStop(1, "#c45dff");
      ctx.fillStyle = dragon;
      ctx.beginPath();
      ctx.ellipse(-4 * s, 4 * s, 62 * s, 19 * s, -0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath();
      ctx.ellipse(48 * s, -3 * s, 18 * s, 13 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 248, 232, 0.7)";
      ctx.lineWidth = Math.max(1.4, 2 * s);
      ctx.beginPath();
      ctx.moveTo(58 * s, -12 * s);
      ctx.lineTo(72 * s, -22 * s);
      ctx.moveTo(58 * s, -7 * s);
      ctx.lineTo(76 * s, -8 * s);
      ctx.stroke();
    } else if (profile.key === "nebulaComet") {
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(255, 241, 166, ${0.42 + pulse * 0.28})`;
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(0, 2 * s, (62 + i * 13 + pulse * 4) * s, (18 + i * 4) * s, (i - 1) * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
      const comet = ctx.createRadialGradient(-10 * s, -7 * s, 2 * s, 0, 0, 70 * s);
      comet.addColorStop(0, "#fff8e8");
      comet.addColorStop(0.38, "#fff1a6");
      comet.addColorStop(0.72, "#c45dff");
      comet.addColorStop(1, "#5f4adb");
      ctx.fillStyle = comet;
      ctx.beginPath();
      ctx.ellipse(0, 3 * s, 54 * s, 22 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(17, 27, 34, 0.7)";
      ctx.beginPath();
      ctx.ellipse(0, -2 * s, 28 * s, 11 * s, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (profile.key === "woodDragonBoat") {
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(53, 208, 127, ${0.35 + pulse * 0.28})`;
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.ellipse(-4 * s, 2 * s, (58 + i * 11 + pulse * 4) * s, (20 + i * 3) * s, i * 0.14, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
      const hull = ctx.createLinearGradient(-68 * s, -18 * s, 70 * s, 18 * s);
      hull.addColorStop(0, "#0f6c62");
      hull.addColorStop(0.42, "#35d07f");
      hull.addColorStop(0.72, "#dfff7a");
      hull.addColorStop(1, "#54d0ff");
      ctx.fillStyle = hull;
      ctx.beginPath();
      ctx.moveTo(-72 * s, 0);
      ctx.quadraticCurveTo(-38 * s, 24 * s, 30 * s, 20 * s);
      ctx.quadraticCurveTo(62 * s, 18 * s, 78 * s, -2 * s);
      ctx.quadraticCurveTo(26 * s, -22 * s, -56 * s, -16 * s);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#dfff7a";
      ctx.beginPath();
      ctx.ellipse(48 * s, -9 * s, 22 * s, 15 * s, 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 248, 232, 0.78)";
      ctx.lineWidth = Math.max(1.5, 2 * s);
      ctx.beginPath();
      ctx.moveTo(55 * s, -19 * s);
      ctx.quadraticCurveTo(65 * s, -31 * s, 78 * s, -21 * s);
      ctx.moveTo(58 * s, -13 * s);
      ctx.lineTo(78 * s, -10 * s);
      ctx.stroke();
    } else if (profile.key === "metalTigerChariot") {
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(255, 227, 122, ${0.48 + pulse * 0.3})`;
      ctx.lineWidth = Math.max(3, 4 * s);
      ctx.beginPath();
      ctx.arc(-34 * s, 7 * s, (24 + pulse * 3) * s, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(34 * s, 7 * s, (24 + pulse * 3) * s, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
      const chariot = ctx.createLinearGradient(-64 * s, -20 * s, 68 * s, 18 * s);
      chariot.addColorStop(0, "#7e8ca0");
      chariot.addColorStop(0.46, "#fff8e8");
      chariot.addColorStop(0.78, "#ffe37a");
      chariot.addColorStop(1, "#ff8d54");
      ctx.fillStyle = chariot;
      ctx.beginPath();
      ctx.moveTo(-70 * s, 0);
      ctx.lineTo(-34 * s, -22 * s);
      ctx.lineTo(32 * s, -20 * s);
      ctx.lineTo(78 * s, 0);
      ctx.lineTo(38 * s, 20 * s);
      ctx.lineTo(-42 * s, 18 * s);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#151f27";
      ctx.beginPath();
      ctx.ellipse(43 * s, -5 * s, 16 * s, 10 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#fff8e8";
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.moveTo((56 + i * 7) * s, (-10 + i * 5) * s);
        ctx.lineTo((80 + i * 8) * s, (-18 + i * 7) * s);
        ctx.stroke();
      }
    } else if (profile.key === "fiveElementKirin") {
      const colors = ["#35d07f", "#ff8d54", "#f5c84b", "#fff8e8", "#54d0ff"];
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < colors.length; i += 1) {
        ctx.strokeStyle = canvasRgba(colors[i], 0.26 + pulse * 0.18);
        ctx.lineWidth = Math.max(1.5, 2.2 * s);
        ctx.beginPath();
        ctx.ellipse(0, 1 * s, (50 + i * 7 + pulse * 4) * s, (18 + i * 2) * s, i * 0.36 + state.time * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
      const body = ctx.createRadialGradient(-8 * s, -8 * s, 2 * s, 0, 0, 74 * s);
      body.addColorStop(0, "#fff8e8");
      body.addColorStop(0.28, "#ffe37a");
      body.addColorStop(0.56, "#35d07f");
      body.addColorStop(0.78, "#54d0ff");
      body.addColorStop(1, "#5f4adb");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.ellipse(-4 * s, 3 * s, 62 * s, 24 * s, -0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath();
      ctx.ellipse(48 * s, -8 * s, 20 * s, 15 * s, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffe37a";
      ctx.lineWidth = Math.max(2, 3 * s);
      ctx.beginPath();
      ctx.moveTo(42 * s, -20 * s);
      ctx.quadraticCurveTo(52 * s, -36 * s, 63 * s, -20 * s);
      ctx.moveTo(54 * s, -18 * s);
      ctx.lineTo(75 * s, -28 * s);
      ctx.stroke();
    } else {
      const grad = ctx.createLinearGradient(-58 * s, -14 * s, 56 * s, 16 * s);
      grad.addColorStop(0, "#fff8e8");
      grad.addColorStop(0.5, "#9de8ff");
      grad.addColorStop(1, "#54d0ff");
      ctx.fillStyle = grad;
      roundRect(-56 * s, -12 * s, 112 * s, 24 * s, 11 * s);
      ctx.fill();
      ctx.fillStyle = "#ff5650";
      ctx.beginPath();
      ctx.ellipse(34 * s, -2 * s, 16 * s, 12 * s, 0.15, 0, Math.PI * 2);
      ctx.fill();
    }
    drawMountChargeEffects(s, profile, charge, pulse);
    ctx.restore();
  }

  function heroImage() {
    const profile = heroProfile();
    if (profile.sheet) return ensureImage(assets[profile.asset]);
    const evo = currentEvolution();
    return ensureImage(evo > 0 ? assets[`heroEvolution${evo}`] || assets.hero : assets.hero);
  }

  function drawTrail(x, y, power) {
    const alpha = 0.12 + Math.min(0.28, power * 0.018);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#fff1a6";
    for (let i = 0; i < 4; i += 1) {
      ctx.beginPath();
      ctx.ellipse(x - i * 18, y + Math.sin(state.time * 12 + i) * 5, 26 - i * 4, 9 - i, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawFallbackHero() {
    ctx.fillStyle = "#9b542e";
    ctx.beginPath();
    ctx.ellipse(0, 0, 56, 42, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e44943";
    ctx.fillRect(-70, -4, 58, 20);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(16, -12, 9, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawHazards() {
    for (const h of hazards) {
      drawHazardAura(h);
      if (h.type === "toilet") drawToilet(h);
      if (h.type === "bossPoop") drawPoopBlob(h.x, h.y, h.w, h.spin || 0, h.color || "#8b4f25", "#5b2e18");
      if (h.type === "energyBall") drawBossEnergyBall(h);
      if (h.type === "plunger") drawPlunger(h);
      if (h.type === "stinkCloud") drawStinkCloud(h);
      if (h.type === "soapBubble") drawSoapBubble(h);
      if (h.type === "barricade") drawImageObstacle(h, bestObstacleImage(assets.obstacleBarricadeRefit, assets.obstacleBarricade), "#ff8d54");
      if (h.type === "sludgeBarrel") drawImageObstacle(h, bestObstacleImage(assets.obstacleSludgeRefit, assets.obstacleSludge), "#c45dff");
      if (h.type === "acidGeyser") drawAcidGeyser(h);
      if (h.type === "pipeTop" || h.type === "pipeBottom") drawPipe(h);
    }
    drawBoss();
  }

  function drawHazardAura(h) {
    if (h.x < -120 || h.x > state.width + 180) return;
    const s = playScale();
    const pulse = Math.sin(state.time * 7 + (h.phase || 0)) * 0.5 + 0.5;
    const threat = hazardThreatProfile(h);
    const severe = threat.severe || h.elite || h.bossDamage;
    const color = threat.rgb;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    if (h.type === "pipeTop" || h.type === "pipeBottom") {
      const lipY = h.type === "pipeTop" ? h.h : h.y;
      ctx.strokeStyle = `rgba(${color}, ${0.16 + pulse * 0.07})`;
      ctx.lineWidth = Math.max(2, 3 * s);
      ctx.beginPath();
      ctx.moveTo(h.x - 6 * s, lipY);
      ctx.lineTo(h.x + h.w + 6 * s, lipY);
      ctx.stroke();
      ctx.restore();
      return;
    }
    const w = Math.max(22 * s, h.w || 48 * s);
    const visualH = Math.max(18 * s, h.h || w * (h.type === "toilet" ? 0.78 : 0.72));
    ctx.translate(h.x, h.y || (playTop() + playBottom()) * 0.5);
    const contact = Math.max(h.hit || 0, h.contactCooldown ? 0.16 : 0);
    ctx.fillStyle = `rgba(${color}, ${severe ? 0.12 + pulse * 0.05 + contact * 0.2 : 0.08 + pulse * 0.04 + contact * 0.14})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * (h.type === "barricade" ? 0.74 : 0.66), visualH * (h.type === "sludgeBarrel" ? 0.8 : 0.72), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 248, 232, ${severe ? 0.22 + contact * 0.28 : 0.14 + contact * 0.2})`;
    ctx.lineWidth = Math.max(1, 1.8 * s);
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.52, visualH * 0.56, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawIkunPeckSprite(frame, x = 0, y = 0, width = 96, alpha = 1, rotation = 0) {
    const img = ensureImage(assets.ikunChickenPeck);
    const frameCount = 4;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha *= alpha;
    if (img.complete && img.naturalWidth) {
      const sourceW = img.naturalWidth / frameCount;
      const sourceH = img.naturalHeight;
      const index = clamp(Math.floor(frame), 0, frameCount - 1);
      const height = width * (sourceH / sourceW);
      ctx.drawImage(img, index * sourceW, 0, sourceW, sourceH, -width * 0.5, -height * 0.5, width, height);
    } else {
      const r = width * 0.22;
      ctx.fillStyle = "#fff3c4";
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.2, r * 0.86, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ff8d54";
      ctx.beginPath();
      ctx.moveTo(r * 0.9, 0);
      ctx.lineTo(r * 1.65, -r * 0.25);
      ctx.lineTo(r * 1.65, r * 0.25);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#e44943";
      ctx.beginPath();
      ctx.arc(-r * 0.08, -r * 0.68, r * 0.3, Math.PI, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawUltimateBeam() {
    if (state.ultimateTimer <= 0) return;
    const beam = ultimateBeamRect();
    const kind = state.ultimateKind;
    const ikun = kind === "ikun";
    const jet = kind === "jet";
    const alchemist = kind === "alchemist";
    const paper = kind === "paper";
    const dragonWood = kind === "dragonWood";
    const voidChef = kind === "voidChef";
    const neonMedic = kind === "neonMedic";
    const tigerMetal = kind === "tigerMetal";
    const pulse = Math.sin(state.ultimatePulse * 16) * 0.5 + 0.5;
    const s = playScale();
    const lifeRatio = clamp(state.ultimateTimer / ULTIMATE_DURATION, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const grad = ctx.createLinearGradient(beam.x, beam.y, beam.x + beam.w, beam.y);
    if (ikun) {
      grad.addColorStop(0, `rgba(255, 248, 196, ${0.84 + pulse * 0.1})`);
      grad.addColorStop(0.22, `rgba(255, 141, 84, ${0.62 + pulse * 0.14})`);
      grad.addColorStop(0.55, `rgba(245, 200, 75, ${0.4 + pulse * 0.12})`);
      grad.addColorStop(1, "rgba(255, 248, 196, 0)");
    } else if (jet) {
      grad.addColorStop(0, `rgba(255, 248, 232, ${0.82 + pulse * 0.12})`);
      grad.addColorStop(0.32, `rgba(84, 208, 255, ${0.68 + pulse * 0.16})`);
      grad.addColorStop(0.72, `rgba(157, 232, 255, ${0.34 + pulse * 0.12})`);
      grad.addColorStop(1, "rgba(84, 208, 255, 0)");
    } else if (alchemist) {
      grad.addColorStop(0, `rgba(223, 255, 122, ${0.64 + pulse * 0.1})`);
      grad.addColorStop(0.36, `rgba(167, 240, 74, ${0.5 + pulse * 0.16})`);
      grad.addColorStop(0.74, `rgba(196, 93, 255, ${0.28 + pulse * 0.12})`);
      grad.addColorStop(1, "rgba(167, 240, 74, 0)");
    } else if (paper) {
      grad.addColorStop(0, `rgba(255, 248, 232, ${0.68 + pulse * 0.12})`);
      grad.addColorStop(0.4, `rgba(157, 232, 255, ${0.42 + pulse * 0.14})`);
      grad.addColorStop(0.78, `rgba(255, 241, 166, ${0.24 + pulse * 0.1})`);
      grad.addColorStop(1, "rgba(255, 248, 232, 0)");
    } else if (dragonWood) {
      grad.addColorStop(0, `rgba(223, 255, 122, ${0.78 + pulse * 0.12})`);
      grad.addColorStop(0.28, `rgba(53, 208, 127, ${0.56 + pulse * 0.16})`);
      grad.addColorStop(0.7, `rgba(84, 208, 255, ${0.26 + pulse * 0.12})`);
      grad.addColorStop(1, "rgba(53, 208, 127, 0)");
    } else if (voidChef) {
      grad.addColorStop(0, `rgba(255, 248, 232, ${0.62 + pulse * 0.1})`);
      grad.addColorStop(0.3, `rgba(51, 240, 223, ${0.48 + pulse * 0.16})`);
      grad.addColorStop(0.64, `rgba(17, 27, 34, ${0.5 + pulse * 0.14})`);
      grad.addColorStop(1, "rgba(51, 240, 223, 0)");
    } else if (neonMedic) {
      grad.addColorStop(0, `rgba(255, 248, 232, ${0.8 + pulse * 0.12})`);
      grad.addColorStop(0.28, `rgba(84, 208, 255, ${0.62 + pulse * 0.16})`);
      grad.addColorStop(0.58, `rgba(255, 123, 123, ${0.34 + pulse * 0.12})`);
      grad.addColorStop(1, "rgba(84, 208, 255, 0)");
    } else if (tigerMetal) {
      grad.addColorStop(0, `rgba(255, 248, 232, ${0.9 + pulse * 0.08})`);
      grad.addColorStop(0.22, `rgba(255, 227, 122, ${0.72 + pulse * 0.14})`);
      grad.addColorStop(0.62, `rgba(157, 232, 255, ${0.28 + pulse * 0.12})`);
      grad.addColorStop(1, "rgba(255, 248, 232, 0)");
    } else {
      grad.addColorStop(0, `rgba(255, 244, 168, ${0.82 + pulse * 0.12})`);
      grad.addColorStop(0.32, `rgba(255, 141, 84, ${0.52 + pulse * 0.16})`);
      grad.addColorStop(0.7, `rgba(157, 90, 44, ${0.22 + pulse * 0.08})`);
      grad.addColorStop(1, "rgba(245, 200, 75, 0)");
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(beam.x + beam.w * (paper ? 0.62 : dragonWood ? 0.56 : voidChef ? 0.58 : neonMedic ? 0.5 : tigerMetal ? 0.48 : 0.5), beam.y + beam.h * 0.5, beam.w * (paper ? 0.34 : dragonWood ? 0.44 : voidChef ? 0.46 : neonMedic ? 0.42 : tigerMetal ? 0.5 : 0.52), beam.h * (dragonWood ? 0.46 + pulse * 0.08 : voidChef ? 0.5 + pulse * 0.1 : neonMedic ? 0.42 + pulse * 0.08 : paper ? 0.52 + pulse * 0.08 : ikun ? 0.38 + pulse * 0.09 : tigerMetal ? 0.32 + pulse * 0.08 : 0.34 + pulse * 0.08), 0, 0, Math.PI * 2);
    ctx.fill();
    const coreColor = tigerMetal ? "255, 248, 232" : voidChef ? "51, 240, 223" : neonMedic ? "84, 208, 255" : dragonWood ? "53, 208, 127" : jet ? "84, 208, 255" : alchemist ? "167, 240, 74" : paper ? "255, 248, 232" : ikun ? "255, 211, 92" : "245, 200, 75";
    const coreGlow = ctx.createRadialGradient(hero.x + 36 * s, hero.y, 6 * s, hero.x + 36 * s, hero.y, (dragonWood ? 158 : voidChef ? 150 : neonMedic ? 138 : paper ? 150 : tigerMetal ? 132 : 118) * s);
    coreGlow.addColorStop(0, `rgba(255, 248, 232, ${0.5 + pulse * 0.2})`);
    coreGlow.addColorStop(0.42, `rgba(${coreColor}, ${0.2 + pulse * 0.14})`);
    coreGlow.addColorStop(1, "rgba(255, 248, 232, 0)");
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(hero.x + 36 * s, hero.y, (dragonWood ? 158 : voidChef ? 150 : neonMedic ? 138 : paper ? 150 : tigerMetal ? 132 : 118) * s, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(${coreColor}, ${0.42 + pulse * 0.28})`;
    ctx.lineWidth = Math.max(2, 3.5 * s);
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(hero.x + 36 * s, hero.y, (30 + i * 21 + pulse * 7) * s, 0, Math.PI * 2);
      ctx.stroke();
    }
    for (let i = 0; i < 3; i += 1) {
      const offset = (i - 1) * beam.h * (ikun ? 0.2 : 0.16);
      const sideColor = tigerMetal ? "255, 227, 122" : voidChef ? "51, 240, 223" : neonMedic ? "255, 123, 123" : dragonWood ? "53, 208, 127" : jet ? "84, 208, 255" : alchemist ? "167, 240, 74" : paper ? "255, 248, 232" : ikun ? "255, 198, 78" : "245, 200, 75";
      ctx.strokeStyle = `rgba(${i === 1 ? "255, 248, 232" : sideColor}, ${0.32 + pulse * 0.22})`;
      ctx.lineWidth = (i === 1 ? 5.5 : 3.2) * s;
      ctx.beginPath();
      ctx.moveTo(beam.x - 8 * s, hero.y + offset * 0.25);
      ctx.bezierCurveTo(
        beam.x + beam.w * 0.28,
        hero.y - beam.h * (dragonWood ? 0.42 : voidChef ? 0.46 : neonMedic ? 0.28 : ikun ? 0.46 : tigerMetal ? 0.24 : 0.34) + offset,
        beam.x + beam.w * 0.66,
        hero.y + beam.h * (dragonWood ? 0.34 : voidChef ? 0.4 : neonMedic ? 0.26 : ikun ? 0.36 : tigerMetal ? 0.22 : 0.27) - offset,
        beam.x + beam.w,
        hero.y + offset * 0.18
      );
      ctx.stroke();
    }
    const edgeX = beam.x + beam.w * (0.78 + pulse * 0.04);
    ctx.fillStyle = `rgba(255, 248, 232, ${0.14 + pulse * 0.12})`;
    ctx.beginPath();
    ctx.ellipse(edgeX, hero.y, (36 + pulse * 18) * s, beam.h * 0.56, 0, 0, Math.PI * 2);
    ctx.fill();
    if (ikun) {
      ctx.strokeStyle = `rgba(255, 141, 84, ${0.5 + pulse * 0.24})`;
      ctx.lineWidth = Math.max(3, 5 * s);
      for (let i = 0; i < 4; i += 1) {
        const x = beam.x + beam.w * (0.2 + i * 0.17);
        ctx.beginPath();
        ctx.arc(x, hero.y + Math.sin(state.ultimatePulse * 5 + i) * beam.h * 0.16, (22 + pulse * 10) * s, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 4; i += 1) {
        const t = (state.ultimatePulse * 0.62 + i * 0.23) % 1;
        const x = beam.x + beam.w * t;
        const y = hero.y + Math.sin(t * Math.PI * 2 + state.ultimatePulse * 6) * beam.h * 0.22;
        drawIkunPeckSprite(i, x, y, (54 + pulse * 10) * s, 0.28 + lifeRatio * 0.32, -0.06 + Math.sin(t * 7) * 0.14);
      }
      ctx.fillStyle = `rgba(255, 236, 120, ${0.35 + pulse * 0.2})`;
      for (let i = 0; i < 5; i += 1) {
        const x = beam.x + beam.w * (0.18 + i * 0.16);
        const y = hero.y + Math.sin(state.ultimatePulse * 7 + i) * beam.h * 0.28;
        ctx.beginPath();
        ctx.arc(x, y, (6 + pulse * 5) * s, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (jet) {
      ctx.strokeStyle = `rgba(255, 248, 232, ${0.52 + pulse * 0.2})`;
      ctx.lineWidth = Math.max(2, 3 * s);
      for (let i = 0; i < 5; i += 1) {
        const y = hero.y + (i - 2) * beam.h * 0.15;
        ctx.beginPath();
        ctx.moveTo(hero.x + 8 * s, y);
        ctx.lineTo(beam.x + beam.w * (0.9 + Math.sin(state.ultimatePulse * 8 + i) * 0.04), y + Math.sin(state.ultimatePulse * 10 + i) * 10 * s);
        ctx.stroke();
      }
      for (let i = 0; i < 7; i += 1) {
        const t = (state.ultimatePulse * 0.58 + i * 0.13) % 1;
        const x = beam.x + beam.w * t;
        const y = hero.y + Math.sin(t * Math.PI * 2 + i) * beam.h * 0.24;
        ctx.fillStyle = `rgba(157, 232, 255, ${0.35 + pulse * 0.18})`;
        ctx.beginPath();
        ctx.ellipse(x, y, (12 + pulse * 9) * s, (5 + pulse * 4) * s, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (alchemist) {
      ctx.strokeStyle = `rgba(196, 93, 255, ${0.42 + pulse * 0.26})`;
      ctx.lineWidth = Math.max(3, 4.5 * s);
      for (let i = 0; i < 3; i += 1) {
        const x = beam.x + beam.w * (0.32 + i * 0.18);
        ctx.beginPath();
        ctx.ellipse(x, hero.y, (34 + pulse * 8) * s, (beam.h * (0.33 + i * 0.04)), state.ultimatePulse + i, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 8; i += 1) {
        const t = (state.ultimatePulse * 0.28 + i * 0.12) % 1;
        const x = beam.x + beam.w * t;
        const y = hero.y + Math.sin(t * Math.PI * 2 + state.ultimatePulse * 3) * beam.h * 0.34;
        ctx.fillStyle = i % 2 ? `rgba(167, 240, 74, ${0.28 + pulse * 0.2})` : `rgba(196, 93, 255, ${0.2 + pulse * 0.16})`;
        ctx.beginPath();
        ctx.arc(x, y, (10 + pulse * 8) * s, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (paper) {
      const cx = beam.x + beam.w * 0.64;
      const cy = hero.y;
      const vortex = ctx.createRadialGradient(cx, cy, 4 * s, cx, cy, (120 + pulse * 18) * s);
      vortex.addColorStop(0, "rgba(17, 27, 34, 0.72)");
      vortex.addColorStop(0.42, `rgba(157, 232, 255, ${0.22 + pulse * 0.12})`);
      vortex.addColorStop(1, "rgba(255, 248, 232, 0)");
      ctx.fillStyle = vortex;
      ctx.beginPath();
      ctx.arc(cx, cy, (120 + pulse * 18) * s, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 10; i += 1) {
        const a = state.ultimatePulse * 5 + i * 0.63;
        const radius = (22 + i * 7 + pulse * 8) * s;
        const x = cx + Math.cos(a) * radius;
        const y = cy + Math.sin(a) * radius * 0.62;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a);
        ctx.fillStyle = "rgba(255, 248, 232, 0.76)";
        ctx.fillRect(-10 * s, -4 * s, 20 * s, 8 * s);
        ctx.restore();
      }
      ctx.strokeStyle = `rgba(157, 232, 255, ${0.55 + pulse * 0.28})`;
      ctx.lineWidth = 5 * s;
      ctx.beginPath();
      ctx.arc(cx, cy, (72 + pulse * 10) * s, 0, Math.PI * 2);
      ctx.stroke();
    } else if (dragonWood) {
      const dragonCx = beam.x + beam.w * 0.54;
      const dragonCy = hero.y;
      ctx.strokeStyle = `rgba(223, 255, 122, ${0.52 + pulse * 0.28})`;
      ctx.lineWidth = Math.max(4, 6.2 * s);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < 7; i += 1) {
        const t = (state.ultimatePulse * 0.18 + i * 0.14) % 1;
        const x = beam.x + beam.w * (0.08 + t * 0.86);
        const y = hero.y + Math.sin(t * Math.PI * 2 + i * 0.7) * beam.h * 0.34;
        ctx.beginPath();
        ctx.bezierCurveTo(hero.x + 18 * s, hero.y, x - 78 * s, y - 58 * s, x, y);
        ctx.stroke();
        ctx.fillStyle = i % 3 === 0 ? "rgba(84, 208, 255, 0.5)" : i % 2 ? "rgba(53, 208, 127, 0.58)" : "rgba(223, 255, 122, 0.54)";
        ctx.beginPath();
        ctx.ellipse(x, y, (22 + pulse * 9) * s, (8 + pulse * 5) * s, state.ultimatePulse + i, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = `rgba(84, 208, 255, ${0.44 + pulse * 0.24})`;
      ctx.lineWidth = Math.max(2.4, 3.5 * s);
      for (let i = 0; i < 4; i += 1) {
        const x = beam.x + beam.w * (0.2 + i * 0.18);
        ctx.beginPath();
        ctx.ellipse(x, hero.y, (50 + pulse * 14) * s, beam.h * (0.25 + i * 0.035), state.ultimatePulse * 0.48 + i * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.strokeStyle = `rgba(255, 248, 232, ${0.56 + pulse * 0.24})`;
      ctx.lineWidth = Math.max(6, 9 * s);
      ctx.beginPath();
      ctx.moveTo(hero.x + 18 * s, hero.y + beam.h * 0.08);
      ctx.bezierCurveTo(dragonCx - beam.w * 0.22, dragonCy - beam.h * 0.5, dragonCx + beam.w * 0.08, dragonCy + beam.h * 0.42, beam.x + beam.w * 0.92, dragonCy - beam.h * 0.08);
      ctx.stroke();
      ctx.fillStyle = `rgba(223, 255, 122, ${0.32 + pulse * 0.2})`;
      for (let i = 0; i < 9; i += 1) {
        const a = state.ultimatePulse * 2.6 + i * 0.7;
        const x = dragonCx + Math.cos(a) * (60 + i * 8) * s;
        const y = dragonCy + Math.sin(a) * (beam.h * 0.18);
        ctx.beginPath();
        ctx.arc(x, y, (4 + pulse * 4) * s, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (voidChef) {
      const cx = beam.x + beam.w * 0.58;
      const cy = hero.y;
      const vortex = ctx.createRadialGradient(cx, cy, 4 * s, cx, cy, (132 + pulse * 18) * s);
      vortex.addColorStop(0, "rgba(7, 13, 17, 0.86)");
      vortex.addColorStop(0.36, `rgba(51, 240, 223, ${0.28 + pulse * 0.16})`);
      vortex.addColorStop(0.72, `rgba(223, 255, 122, ${0.12 + pulse * 0.08})`);
      vortex.addColorStop(1, "rgba(51, 240, 223, 0)");
      ctx.fillStyle = vortex;
      ctx.beginPath();
      ctx.ellipse(cx, cy, (132 + pulse * 18) * s, beam.h * (0.48 + pulse * 0.06), state.ultimatePulse * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < 7; i += 1) {
        const a = state.ultimatePulse * 4.2 + i * 0.9;
        const rx = (42 + i * 13 + pulse * 8) * s;
        const ry = beam.h * (0.12 + i * 0.025);
        ctx.strokeStyle = i % 2 ? `rgba(51, 240, 223, ${0.38 + pulse * 0.18})` : `rgba(255, 248, 232, ${0.24 + pulse * 0.12})`;
        ctx.lineWidth = Math.max(2, (2.4 + i * 0.3) * s);
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, a * 0.16, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 9; i += 1) {
        const t = (state.ultimatePulse * 0.42 + i * 0.11) % 1;
        const a = t * Math.PI * 2 + i;
        const x = cx + Math.cos(a) * (32 + i * 9) * s;
        const y = cy + Math.sin(a) * beam.h * 0.32;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a + Math.PI * 0.25);
        ctx.fillStyle = i % 3 === 0 ? "rgba(223, 255, 122, 0.72)" : "rgba(51, 240, 223, 0.78)";
        roundRect(-16 * s, -4 * s, 32 * s, 8 * s, 4 * s);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 248, 232, 0.82)";
        ctx.beginPath();
        ctx.moveTo(10 * s, -8 * s);
        ctx.lineTo(25 * s, 0);
        ctx.lineTo(10 * s, 8 * s);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = `rgba(17, 27, 34, ${0.58 + pulse * 0.18})`;
      ctx.beginPath();
      ctx.arc(cx, cy, (34 + pulse * 10) * s, 0, Math.PI * 2);
      ctx.fill();
    } else if (neonMedic) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const cx = beam.x + beam.w * 0.48;
      const cy = hero.y;
      ctx.strokeStyle = `rgba(84, 208, 255, ${0.5 + pulse * 0.24})`;
      ctx.lineWidth = Math.max(4, 6 * s);
      for (let i = 0; i < 4; i += 1) {
        const x = beam.x + beam.w * (0.18 + i * 0.2);
        ctx.beginPath();
        ctx.ellipse(x, cy, (42 + pulse * 12) * s, beam.h * (0.22 + i * 0.025), -0.18 + i * 0.12, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 6; i += 1) {
        const t = (state.ultimatePulse * 0.5 + i * 0.15) % 1;
        const x = beam.x + beam.w * (0.08 + t * 0.86);
        const y = cy + Math.sin(t * Math.PI * 2 + i) * beam.h * 0.28;
        const r = (13 + pulse * 5) * s;
        ctx.strokeStyle = i % 2 ? `rgba(255, 123, 123, ${0.52 + pulse * 0.18})` : `rgba(255, 248, 232, ${0.58 + pulse * 0.18})`;
        ctx.lineWidth = Math.max(2.2, 3.5 * s);
        ctx.beginPath();
        ctx.moveTo(x - r, y);
        ctx.lineTo(x + r, y);
        ctx.moveTo(x, y - r);
        ctx.lineTo(x, y + r);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(84, 208, 255, ${0.16 + pulse * 0.14})`;
      ctx.beginPath();
      ctx.ellipse(cx, cy, (104 + pulse * 18) * s, beam.h * 0.42, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 248, 232, ${0.36 + pulse * 0.22})`;
      ctx.lineWidth = Math.max(2, 3.4 * s);
      for (let i = 0; i < 5; i += 1) {
        const y = cy + (i - 2) * beam.h * 0.13;
        ctx.beginPath();
        ctx.moveTo(hero.x + 10 * s, y);
        ctx.lineTo(beam.x + beam.w * 0.96, y + Math.sin(state.ultimatePulse * 9 + i) * 7 * s);
        ctx.stroke();
      }
    } else if (tigerMetal) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < 8; i += 1) {
        const t = (state.ultimatePulse * 0.5 + i * 0.13) % 1;
        const x = beam.x + beam.w * (0.08 + t * 0.86);
        const y = hero.y + (i - 3.5) * beam.h * 0.075 + Math.sin(state.ultimatePulse * 9 + i) * 10 * s;
        ctx.strokeStyle = `rgba(255, 248, 232, ${0.6 + pulse * 0.28})`;
        ctx.lineWidth = Math.max(5, 8.2 * s);
        ctx.beginPath();
        ctx.moveTo(x - 56 * s, y - (24 + pulse * 8) * s);
        ctx.lineTo(x + 76 * s, y + (24 + pulse * 8) * s);
        ctx.stroke();
        ctx.strokeStyle = `rgba(255, 227, 122, ${0.42 + pulse * 0.24})`;
        ctx.lineWidth = Math.max(2.5, 3.8 * s);
        ctx.beginPath();
        ctx.moveTo(x - 38 * s, y + (26 + pulse * 6) * s);
        ctx.lineTo(x + 70 * s, y - (26 + pulse * 6) * s);
        ctx.stroke();
      }
      ctx.strokeStyle = `rgba(157, 232, 255, ${0.36 + pulse * 0.24})`;
      ctx.lineWidth = Math.max(3, 4.2 * s);
      for (let i = 0; i < 3; i += 1) {
        const x = beam.x + beam.w * (0.34 + i * 0.16);
        ctx.beginPath();
        ctx.ellipse(x, hero.y, (54 + pulse * 14) * s, beam.h * (0.23 + i * 0.03), -0.16 + i * 0.18, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(255, 227, 122, ${0.32 + pulse * 0.22})`;
      for (let i = 0; i < 10; i += 1) {
        const x = beam.x + beam.w * (0.12 + i * 0.082);
        ctx.beginPath();
        ctx.arc(x, hero.y + Math.sin(state.ultimatePulse * 9 + i) * beam.h * 0.28, (5 + pulse * 6) * s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = `rgba(255, 248, 232, ${0.18 + pulse * 0.16})`;
      ctx.beginPath();
      ctx.ellipse(beam.x + beam.w * 0.38, hero.y, (74 + pulse * 16) * s, beam.h * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = `rgba(255, 241, 166, ${0.44 + pulse * 0.25})`;
      ctx.lineWidth = Math.max(3, 4.5 * s);
      for (let i = 0; i < 4; i += 1) {
        const t = (state.ultimatePulse * 0.22 + i * 0.25) % 1;
        const x = beam.x + beam.w * (0.22 + t * 0.58);
        ctx.beginPath();
        ctx.ellipse(x, hero.y + Math.sin(state.ultimatePulse * 4 + i) * beam.h * 0.18, (32 + pulse * 8) * s, (18 + pulse * 5) * s, state.ultimatePulse + i, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 5; i += 1) {
        const t = (state.ultimatePulse * 0.38 + i * 0.19) % 1;
        const x = beam.x + beam.w * t;
        const y = hero.y + Math.sin(t * Math.PI * 2 + state.ultimatePulse * 5) * beam.h * 0.2;
        drawPoopBlob(x, y, (18 + pulse * 8) * s, state.ultimatePulse + i, i % 2 ? "#f5c84b" : "#9d5a2c", "#5b2e18");
      }
    }
    ctx.restore();
  }

  function drawToilet(h) {
    const img = assets.toilet;
    const w = h.w;
    const drawH = w * 0.79;
    ctx.save();
    ctx.translate(h.x, h.y);
    if (h.hit > 0) {
      ctx.filter = "brightness(1.45) saturate(1.35)";
    }
    if (img.complete && img.naturalWidth) {
      ctx.drawImage(img, -w * 0.5, -drawH * 0.52, w, drawH);
    } else {
      ctx.fillStyle = "#f7f0de";
      ctx.fillRect(-w * 0.42, -drawH * 0.34, w * 0.84, drawH * 0.7);
      ctx.fillStyle = "#e44943";
      ctx.fillRect(-w * 0.28, -drawH * 0.08, w * 0.56, 10);
    }
    if (h.treasure) {
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = "rgba(245, 200, 75, 0.86)";
      ctx.lineWidth = 4 * playScale();
      ctx.beginPath();
      ctx.ellipse(0, 0, w * 0.62, drawH * 0.62, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#ffe37a";
      ctx.beginPath();
      ctx.arc(w * 0.18, -drawH * 0.42, w * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#8b4f25";
      ctx.font = `900 ${Math.max(12, w * 0.15)}px Microsoft YaHei, Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("宝", w * 0.18, -drawH * 0.42);
      ctx.globalCompositeOperation = "source-over";
    }
    if (h.elite) {
      ctx.globalCompositeOperation = "lighter";
      const pulse = Math.sin(state.time * 8 + (h.phase || 0)) * 0.5 + 0.5;
      ctx.strokeStyle = `rgba(255, 216, 92, ${0.72 + pulse * 0.18})`;
      ctx.lineWidth = 3 * playScale();
      ctx.beginPath();
      ctx.ellipse(0, 0, w * 0.58, drawH * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = `rgba(255, 86, 80, ${0.44 + pulse * 0.22})`;
      ctx.lineWidth = Math.max(1.5, 2.2 * playScale());
      ctx.beginPath();
      ctx.arc(0, 0, w * (0.72 + pulse * 0.08), -Math.PI * 0.22, Math.PI * 1.12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-w * 0.7, 0);
      ctx.lineTo(-w * 0.46, 0);
      ctx.moveTo(w * 0.46, 0);
      ctx.lineTo(w * 0.7, 0);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#f5c84b";
      ctx.beginPath();
      ctx.moveTo(-w * 0.24, -drawH * 0.58);
      ctx.lineTo(-w * 0.1, -drawH * 0.78);
      ctx.lineTo(0, -drawH * 0.58);
      ctx.lineTo(w * 0.12, -drawH * 0.78);
      ctx.lineTo(w * 0.25, -drawH * 0.58);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  function drawBoss() {
    if (!boss) return;
    const profile = boss.profile || bossProfileForEndless(boss.level);
    const img = ensureImage(assets[profile.asset] || assets.toilet);
    const w = boss.w;
    const h = boss.h;
    ctx.save();
    ctx.translate(boss.x, boss.y);
    drawBossBacklight(w, h);
    ctx.rotate(Math.sin(boss.phase * 1.8) * 0.04);
    if (boss.enraged) {
      const ragePulse = Math.sin(state.time * 12) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(255, 86, 80, ${0.34 + ragePulse * 0.28})`;
      ctx.lineWidth = Math.max(3, 5 * playScale());
      ctx.beginPath();
      ctx.ellipse(0, 0, w * (0.7 + ragePulse * 0.04), h * (0.68 + ragePulse * 0.04), 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
    }
    if (boss.breakTimer > 0) {
      const breakPulse = Math.sin(state.time * 20) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(255, 241, 166, ${0.55 + breakPulse * 0.32})`;
      ctx.lineWidth = Math.max(3, 6 * playScale());
      ctx.beginPath();
      ctx.ellipse(-w * 0.02, -h * 0.02, w * (0.68 + breakPulse * 0.04), h * (0.64 + breakPulse * 0.04), 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = "rgba(255, 141, 84, 0.62)";
      ctx.lineWidth = Math.max(2, 3 * playScale());
      for (let i = 0; i < 5; i += 1) {
        const a = boss.phase * 1.7 + i * 1.26;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * w * 0.18, Math.sin(a) * h * 0.16);
        ctx.lineTo(Math.cos(a + 0.4) * w * 0.42, Math.sin(a + 0.35) * h * 0.38);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (boss.breakTimer <= 0 && bossControlActive()) {
      const controlPulse = Math.sin(state.time * 18) * 0.5 + 0.5;
      const controlColor = boss.freezeTimer > 0 ? "84, 208, 255" : boss.paralyzeTimer > 0 ? "196, 93, 255" : boss.rootTimer > 0 ? "53, 208, 127" : "255, 241, 166";
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(${controlColor}, ${0.38 + controlPulse * 0.26})`;
      ctx.lineWidth = Math.max(2, 4 * playScale());
      ctx.beginPath();
      ctx.ellipse(0, 0, w * (0.66 + controlPulse * 0.03), h * (0.62 + controlPulse * 0.03), 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
    }
    if (boss.warning) {
      const pulse = Math.sin(state.time * 28) * 0.5 + 0.5;
      ctx.strokeStyle = `rgba(255, 86, 80, ${0.45 + pulse * 0.35})`;
      ctx.lineWidth = Math.max(2, 4 * playScale());
      ctx.beginPath();
      ctx.ellipse(-w * 0.04, -h * 0.02, w * (0.62 + pulse * 0.05), h * (0.58 + pulse * 0.05), 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.shadowColor = "rgba(255, 78, 60, 0.5)";
    ctx.shadowBlur = 18;
    if (boss.hit > 0) ctx.filter = "brightness(1.55) saturate(1.4)";
    if (img.complete && img.naturalWidth) {
      if (profile.frameCount) {
        const frameCount = Math.max(1, Math.floor(profile.frameCount));
        const sourceW = img.naturalWidth / frameCount;
        const frame = clamp(Math.floor(profile.frame || 0), 0, frameCount - 1);
        ctx.drawImage(img, frame * sourceW, 0, sourceW, img.naturalHeight, -w * 0.56, -h * 0.6, w * 1.08, h * 1.08);
      } else {
        ctx.drawImage(img, -w * 0.56, -h * 0.6, w * 1.08, h * 1.08);
      }
    } else {
      ctx.fillStyle = "#f7f0de";
      roundRect(-w * 0.42, -h * 0.34, w * 0.84, h * 0.7, 8);
      ctx.fill();
    }
    ctx.filter = "none";
    ctx.shadowBlur = 0;
    if (boss.weakDuration > 0) {
      const pulse = Math.sin(state.time * 18) * 0.5 + 0.5;
      const wx = -w * 0.24;
      const wy = h * (boss.weakOffset || 0);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = `rgba(255, 248, 196, ${0.24 + pulse * 0.16})`;
      ctx.beginPath();
      ctx.arc(wx, wy, Math.max(18 * playScale(), w * 0.16), 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 241, 166, ${0.68 + pulse * 0.28})`;
      ctx.lineWidth = Math.max(2, 3 * playScale());
      ctx.beginPath();
      ctx.arc(wx, wy, Math.max(13 * playScale(), w * 0.105), 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(wx - w * 0.12, wy);
      ctx.lineTo(wx + w * 0.12, wy);
      ctx.moveTo(wx, wy - w * 0.12);
      ctx.lineTo(wx, wy + w * 0.12);
      ctx.stroke();
      const breakProgress = clamp((boss.breakMeter || 0) / Math.max(1, bossBreakThreshold()), 0, 1);
      if (breakProgress > 0) {
        ctx.strokeStyle = `rgba(255, 141, 84, ${0.72 + pulse * 0.18})`;
        ctx.lineWidth = Math.max(3, 4 * playScale());
        ctx.beginPath();
        ctx.arc(wx, wy, Math.max(19 * playScale(), w * 0.14), -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * breakProgress);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(255, 241, 166, ${0.76 + pulse * 0.18})`;
      ctx.font = `${Math.max(10, 12 * playScale())}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText("弱点", wx, wy - Math.max(24 * playScale(), w * 0.18));
      ctx.globalCompositeOperation = "source-over";
    }
    if (boss.breakTimer > 0) {
      const pulse = Math.sin(state.time * 16) * 0.5 + 0.5;
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = `rgba(255, 241, 166, ${0.78 + pulse * 0.2})`;
      ctx.font = `900 ${Math.max(14, 18 * playScale())}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("破防", 0, -h * 0.54);
      ctx.globalCompositeOperation = "source-over";
    }
    ctx.fillStyle = "rgba(17,27,34,0.78)";
    roundRect(-w * 0.46, h * 0.44, w * 0.92, 16, 8);
    ctx.fill();
    ctx.fillStyle = "#ff5650";
    roundRect(-w * 0.44, h * 0.46, w * 0.88 * clamp(boss.hp / boss.maxHp, 0, 1), 10, 5);
    ctx.fill();
    ctx.restore();
  }

  function drawBossBacklight(w, h) {
    const pulse = Math.sin(state.time * 4.8) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(-w * 0.08, -h * 0.04, 1, -w * 0.08, -h * 0.04, w * 0.78);
    glow.addColorStop(0, `rgba(255, 86, 80, ${0.1 + pulse * 0.05})`);
    glow.addColorStop(0.52, "rgba(245, 200, 75, 0.05)");
    glow.addColorStop(1, "rgba(255, 86, 80, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.72, h * 0.58, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawBossEnergyBall(h) {
    const pulse = Math.sin((h.phase || 0) * 2.2) * 0.5 + 0.5;
    const r = Math.max(h.w || 24, h.h || 24) * 0.5;
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.15, 0, 0, r * (1.95 + pulse * 0.24));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.9)");
    glow.addColorStop(0.42, canvasRgba(h.color || "#9de8ff", 0.52));
    glow.addColorStop(1, "rgba(157, 232, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.85, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = h.color || "#9de8ff";
    ctx.beginPath();
    ctx.arc(0, 0, r * (0.74 + pulse * 0.08), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 248, 232, 0.78)";
    ctx.lineWidth = Math.max(2, r * 0.13);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.98, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawPoopBlob(x, y, size, rotation, color, dark) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    const scale = size / 46;
    ctx.scale(scale, scale);
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.ellipse(0, 14, 21, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, 10, 20, 12, 0, 0, Math.PI * 2);
    ctx.ellipse(2, -2, 15, 11, 0, 0, Math.PI * 2);
    ctx.ellipse(7, -13, 9, 8, -0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.34)";
    ctx.beginPath();
    ctx.ellipse(8, -6, 4, 2.6, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawPlunger(h) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate(h.spin);
    ctx.scale((h.w || 68) / 68, (h.h || 36) / 36);
    ctx.fillStyle = "#8a6b4a";
    roundRect(-34, -5, 54, 10, 5);
    ctx.fill();
    ctx.fillStyle = "#e44943";
    ctx.beginPath();
    ctx.moveTo(18, -18);
    ctx.quadraticCurveTo(45, -10, 47, 0);
    ctx.quadraticCurveTo(45, 12, 18, 18);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#6f211e";
    ctx.fillRect(13, -18, 8, 36);
    ctx.restore();
  }

  function drawStinkCloud(h) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.globalAlpha = 0.72;
    ctx.fillStyle = h.slow > 0 ? "#dfff7a" : "#89a85c";
    for (let i = 0; i < 5; i += 1) {
      ctx.beginPath();
      ctx.ellipse((i - 2) * h.w * 0.16, Math.sin(h.phase + i) * 8, h.w * 0.22, h.h * 0.34, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = "rgba(64, 82, 37, 0.65)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-h.w * 0.28, -h.h * 0.36);
    ctx.quadraticCurveTo(-h.w * 0.05, -h.h * 0.56, h.w * 0.16, -h.h * 0.32);
    ctx.stroke();
    ctx.restore();
  }

  function drawSoapBubble(h) {
    ctx.save();
    ctx.translate(h.x, h.y);
    const r = h.w * 0.5;
    const grad = ctx.createRadialGradient(-r * 0.28, -r * 0.28, 3, 0, 0, r);
    grad.addColorStop(0, "rgba(255,255,255,0.9)");
    grad.addColorStop(0.42, "rgba(157,232,255,0.32)");
    grad.addColorStop(1, "rgba(84,208,255,0.12)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }

  function drawPipe(h) {
    const grd = ctx.createLinearGradient(h.x, 0, h.x + h.w, 0);
    grd.addColorStop(0, "#43675e");
    grd.addColorStop(0.5, "#a9b37d");
    grd.addColorStop(1, "#31463f");
    ctx.fillStyle = grd;
    roundRect(h.x, h.y, h.w, h.h, 6);
    ctx.fill();
    ctx.fillStyle = "rgba(0,0,0,0.16)";
    for (let y = h.y + 34; y < h.y + h.h; y += 62) {
      ctx.fillRect(h.x, y, h.w, 5);
    }
    ctx.fillStyle = "#d0d29b";
    if (h.type === "pipeTop") {
      roundRect(h.x - 6, h.h - 22, h.w + 12, 26, 6);
    } else {
      roundRect(h.x - 6, h.y - 4, h.w + 12, 26, 6);
    }
    ctx.fill();
  }

  function drawAcidGeyser(h) {
    const pulse = 0.82 + Math.sin(h.phase) * 0.18;
    const sprayH = h.h * pulse;
    const y = h.fromTop ? h.y - h.h * 0.5 : h.y + h.h * 0.5 - sprayH;
    ctx.save();
    ctx.globalAlpha = h.slow > 0 ? 0.95 : 0.82;
    const grad = ctx.createLinearGradient(h.x, y, h.x, y + sprayH);
    grad.addColorStop(0, "rgba(223, 255, 122, 0.18)");
    grad.addColorStop(0.45, "rgba(167, 240, 74, 0.72)");
    grad.addColorStop(1, "rgba(82, 136, 56, 0.22)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(h.x, y + sprayH * 0.5, h.w * 0.45, sprayH * 0.52, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(223, 255, 122, 0.72)";
    ctx.lineWidth = Math.max(2, 3 * playScale());
    ctx.beginPath();
    ctx.moveTo(h.x - h.w * 0.22, y + sprayH * 0.12);
    ctx.quadraticCurveTo(h.x + h.w * 0.18, y + sprayH * 0.5, h.x - h.w * 0.1, y + sprayH * 0.9);
    ctx.stroke();
    ctx.restore();
  }

  function drawImageObstacle(h, img, glow) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate(Math.sin(h.phase || 0) * 0.07);
    if (h.slow > 0) ctx.filter = "brightness(1.25) saturate(1.25)";
    ctx.shadowColor = glow;
    ctx.shadowBlur = 10;
    if (img.complete && img.naturalWidth) {
      ctx.drawImage(img, -h.w * 0.5, -h.h * 0.5, h.w, h.h);
    } else {
      ctx.fillStyle = glow;
      roundRect(-h.w * 0.5, -h.h * 0.5, h.w, h.h, 8);
      ctx.fill();
    }
    ctx.restore();
  }

  function bestObstacleImage(primary, fallback) {
    const img = ensureImage(primary);
    if (img && img.complete && img.naturalWidth) return img;
    return ensureImage(fallback) || img;
  }

  function drawPickups() {
    for (const p of pickups) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.sin(p.phase) * 0.2);
      if (p.type === "draftGate") {
        drawDraftGate(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "goldPoop") {
        ctx.fillStyle = "rgba(255, 214, 82, 0.26)";
        ctx.beginPath();
        ctx.arc(0, 0, p.r * 1.65, 0, Math.PI * 2);
        ctx.fill();
        drawPoopBlob(0, 0, p.r * 2.1, Math.sin(p.phase) * 0.2, "#f5c84b", "#a85a22");
        ctx.restore();
        continue;
      }
      if (p.type === "bonusPaper") {
        ctx.fillStyle = "rgba(245, 200, 75, 0.26)";
        ctx.beginPath();
        ctx.arc(0, 0, p.r * 1.75 + Math.sin(p.phase * 2) * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffe37a";
        roundRect(-19, -13, 34, 26, 6);
        ctx.fill();
        ctx.fillStyle = "#a85a22";
        ctx.beginPath();
        ctx.arc(7, 0, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff8c4";
        ctx.font = `800 ${Math.max(12, p.r * 0.72)}px Microsoft YaHei, Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("奖", 7, 1);
        ctx.restore();
        continue;
      }
      if (p.type === "supplyCrate") {
        drawSupplyCrate(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "relicShard") {
        drawRelicShard(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "mountCore") {
        drawMountCore(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "comboSigil") {
        drawComboSigil(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "counterSeal") {
        drawCounterSeal(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "elementCore") {
        drawElementCore(p);
        ctx.restore();
        continue;
      }
      if (p.type === "purificationCore") {
        drawPurificationCore(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "mirrorShard") {
        drawMirrorShard(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "forgeSigil") {
        drawForgeSigil(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "currentShell") {
        drawCurrentShell(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "breakCore") {
        drawBreakCore(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "mysteryCapsule") {
        drawMysteryCapsule(p.r, p.phase);
        ctx.restore();
        continue;
      }
      if (p.type === "energy") {
        drawImagePickup(assets.pickupEnergy, p.r, p.phase, "#54d0ff", "E");
        ctx.restore();
        continue;
      }
      if (p.type === "shield") {
        drawImagePickup(assets.pickupShield, p.r, p.phase, "#9de8ff", "盾");
        ctx.restore();
        continue;
      }
      if (p.type === "magnet") {
        drawImagePickup(assets.pickupMagnet, p.r, p.phase, "#dfff7a", "磁");
        ctx.restore();
        continue;
      }
      if (p.type === "focusOrb") {
        drawFocusOrb(p.r, p.phase);
        ctx.restore();
        continue;
      }
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.beginPath();
      ctx.arc(0, 0, 27 + Math.sin(p.phase * 2) * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff7e6";
      roundRect(-18, -13, 32, 26, 6);
      ctx.fill();
      ctx.fillStyle = "#d0b98b";
      ctx.beginPath();
      ctx.arc(7, 0, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#6c5541";
      ctx.beginPath();
      ctx.arc(7, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#efe2bd";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(13, 9);
      ctx.quadraticCurveTo(32, 18, 39, 5);
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawSupplyCrate(r, phase) {
    const pulse = Math.sin(phase * 2.1) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.25, 0, 0, r * (1.8 + pulse * 0.18));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.76)");
    glow.addColorStop(0.44, "rgba(157, 232, 255, 0.38)");
    glow.addColorStop(1, "rgba(84, 208, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.12);
    const grad = ctx.createLinearGradient(-r, -r, r, r);
    grad.addColorStop(0, "#fff8e8");
    grad.addColorStop(0.5, "#9de8ff");
    grad.addColorStop(1, "#4fd6d0");
    ctx.fillStyle = grad;
    roundRect(-r * 0.82, -r * 0.62, r * 1.64, r * 1.24, r * 0.24);
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.62)";
    ctx.lineWidth = Math.max(2, r * 0.09);
    ctx.stroke();
    ctx.fillStyle = "rgba(17, 27, 34, 0.78)";
    roundRect(-r * 0.15, -r * 0.48, r * 0.3, r * 0.96, r * 0.08);
    ctx.fill();
    roundRect(-r * 0.58, -r * 0.13, r * 1.16, r * 0.26, r * 0.08);
    ctx.fill();
    ctx.fillStyle = "#fff8e8";
    ctx.font = `900 ${Math.max(13, r * 0.52)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("补", 0, 1);
    ctx.restore();
  }

  function drawRelicShard(r, phase) {
    const pulse = Math.sin(phase * 2.6) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.18, 0, 0, r * (2 + pulse * 0.28));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.88)");
    glow.addColorStop(0.38, "rgba(196, 93, 255, 0.44)");
    glow.addColorStop(0.72, "rgba(84, 208, 255, 0.18)");
    glow.addColorStop(1, "rgba(196, 93, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.rotate(phase * 0.42);
    const shard = ctx.createLinearGradient(-r * 0.6, -r, r * 0.6, r);
    shard.addColorStop(0, "#fff8e8");
    shard.addColorStop(0.36, "#9de8ff");
    shard.addColorStop(1, "#c45dff");
    ctx.fillStyle = shard;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.08);
    ctx.lineTo(r * 0.64, -r * 0.12);
    ctx.lineTo(r * 0.26, r * 1.05);
    ctx.lineTo(-r * 0.7, r * 0.24);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.55 + pulse * 0.26})`;
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 248, 232, 0.52)";
    ctx.beginPath();
    ctx.moveTo(-r * 0.22, -r * 0.58);
    ctx.lineTo(r * 0.18, r * 0.58);
    ctx.stroke();
    ctx.restore();
  }

  function drawGeneratedPickupIcon(imgRef, r, phase, glow) {
    const img = ensureImage(imgRef);
    if (!img || !img.complete || !img.naturalWidth) return false;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const pulse = Math.sin(phase * 2.8) * 0.5 + 0.5;
    ctx.fillStyle = `${glow}38`;
    ctx.beginPath();
    ctx.arc(0, 0, r * (1.86 + pulse * 0.14), 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.11);
    const size = r * 2.78;
    ctx.shadowColor = glow;
    ctx.shadowBlur = Math.max(8, r * 0.32);
    ctx.drawImage(img, -size * 0.5, -size * 0.5, size, size);
    ctx.restore();
    return true;
  }

  function drawMountCore(r, phase) {
    if (drawGeneratedPickupIcon(assets.iconMountCore, r, phase, mountProfile().color || "#f5c84b")) return;
    const pulse = Math.sin(phase * 2.8) * 0.5 + 0.5;
    const color = mountProfile().color || "#f5c84b";
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * (2 + pulse * 0.24));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.9)");
    glow.addColorStop(0.34, canvasRgba(color, 0.42, "245, 200, 75"));
    glow.addColorStop(1, "rgba(255, 241, 166, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.16);
    const body = ctx.createLinearGradient(-r, -r, r, r);
    body.addColorStop(0, "#fff8e8");
    body.addColorStop(0.48, color);
    body.addColorStop(1, "#8b4f25");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.9, r * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.7)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.72 + pulse * 0.18})`;
    ctx.lineWidth = Math.max(3, r * 0.13);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.46, Math.PI * 0.18, Math.PI * 1.82);
    ctx.stroke();
    ctx.fillStyle = "#14202a";
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff8e8";
    ctx.font = `900 ${Math.max(12, r * 0.46)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("骑", 0, 1);
    ctx.restore();
  }

  function drawComboSigil(r, phase) {
    if (drawGeneratedPickupIcon(assets.iconComboSigil, r, phase, "#dfff7a")) return;
    const pulse = Math.sin(phase * 3) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.18, 0, 0, r * (2.05 + pulse * 0.22));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.9)");
    glow.addColorStop(0.38, "rgba(223, 255, 122, 0.46)");
    glow.addColorStop(1, "rgba(84, 208, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(phase * 0.32);
    const grad = ctx.createLinearGradient(-r, -r, r, r);
    grad.addColorStop(0, "#fff8e8");
    grad.addColorStop(0.48, "#dfff7a");
    grad.addColorStop(1, "#54d0ff");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.02);
    ctx.lineTo(r * 0.92, 0);
    ctx.lineTo(0, r * 1.02);
    ctx.lineTo(-r * 0.92, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.68)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.rotate(-phase * 0.7);
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.64 + pulse * 0.26})`;
    ctx.lineWidth = Math.max(2, r * 0.1);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.56, Math.PI * 0.18, Math.PI * 1.82);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(12, r * 0.52)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("连", 0, 1);
    ctx.restore();
  }

  function drawCounterSeal(r, phase) {
    const pulse = Math.sin(phase * 3.2) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.16, 0, 0, r * (2.1 + pulse * 0.26));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.92)");
    glow.addColorStop(0.34, "rgba(255, 141, 84, 0.5)");
    glow.addColorStop(0.72, "rgba(157, 232, 255, 0.18)");
    glow.addColorStop(1, "rgba(255, 86, 80, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.18);
    const grad = ctx.createLinearGradient(-r, -r, r, r);
    grad.addColorStop(0, "#fff8e8");
    grad.addColorStop(0.45, "#ff8d54");
    grad.addColorStop(1, "#54d0ff");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.04);
    ctx.lineTo(r * 0.86, -r * 0.1);
    ctx.lineTo(r * 0.22, r * 0.92);
    ctx.lineTo(-r * 0.9, r * 0.08);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.72)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.64 + pulse * 0.28})`;
    ctx.lineWidth = Math.max(2, r * 0.12);
    ctx.beginPath();
    ctx.moveTo(-r * 0.42, r * 0.18);
    ctx.lineTo(-r * 0.02, -r * 0.42);
    ctx.lineTo(r * 0.42, r * 0.18);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(12, r * 0.48)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("反", 0, r * 0.28);
    ctx.restore();
  }

  function drawMirrorShard(r, phase) {
    if (drawGeneratedPickupIcon(assets.iconMirrorShard, r, phase, "#8ff7ff")) return;
    const pulse = Math.sin(phase * 3.1) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.14, 0, 0, r * (2.18 + pulse * 0.28));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.96)");
    glow.addColorStop(0.34, "rgba(143, 247, 255, 0.5)");
    glow.addColorStop(0.72, "rgba(223, 255, 122, 0.2)");
    glow.addColorStop(1, "rgba(143, 247, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(phase * 0.28);
    const shard = ctx.createLinearGradient(-r, -r, r, r);
    shard.addColorStop(0, "#fff8e8");
    shard.addColorStop(0.46, "#8ff7ff");
    shard.addColorStop(1, "#1d3d5c");
    ctx.fillStyle = shard;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.08);
    ctx.lineTo(r * 0.82, -r * 0.34);
    ctx.lineTo(r * 0.52, r * 0.78);
    ctx.lineTo(0, r * 1.06);
    ctx.lineTo(-r * 0.52, r * 0.78);
    ctx.lineTo(-r * 0.82, -r * 0.34);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.68)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.rotate(-phase * 0.58);
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.68 + pulse * 0.24})`;
    ctx.lineWidth = Math.max(2, r * 0.1);
    ctx.beginPath();
    ctx.moveTo(-r * 0.42, -r * 0.18);
    ctx.lineTo(r * 0.42, r * 0.18);
    ctx.moveTo(r * 0.36, -r * 0.28);
    ctx.lineTo(-r * 0.36, r * 0.28);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(12, r * 0.48)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("镜", 0, 1);
    ctx.restore();
  }

  function drawForgeSigil(r, phase) {
    if (drawGeneratedPickupIcon(assets.iconForgeSigil, r, phase, "#ffb75a")) return;
    const pulse = Math.sin(phase * 3.2) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.14, 0, 0, r * (2.2 + pulse * 0.28));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.96)");
    glow.addColorStop(0.34, "rgba(255, 183, 90, 0.5)");
    glow.addColorStop(0.72, "rgba(84, 208, 255, 0.22)");
    glow.addColorStop(1, "rgba(255, 141, 84, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.18);
    const core = ctx.createLinearGradient(-r, -r, r, r);
    core.addColorStop(0, "#fff8e8");
    core.addColorStop(0.42, "#ffb75a");
    core.addColorStop(0.72, "#54d0ff");
    core.addColorStop(1, "#14202a");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.08);
    ctx.lineTo(r * 0.82, -r * 0.18);
    ctx.lineTo(r * 0.46, r * 0.92);
    ctx.lineTo(0, r * 1.12);
    ctx.lineTo(-r * 0.46, r * 0.92);
    ctx.lineTo(-r * 0.82, -r * 0.18);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.72)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.rotate(-phase * 0.58);
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.66 + pulse * 0.26})`;
    ctx.lineWidth = Math.max(2, r * 0.11);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.54, Math.PI * 0.12, Math.PI * 1.88);
    ctx.stroke();
    ctx.strokeStyle = "#fff1a6";
    ctx.beginPath();
    ctx.moveTo(-r * 0.34, r * 0.18);
    ctx.quadraticCurveTo(0, -r * 0.56, r * 0.34, r * 0.18);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(12, r * 0.48)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("铸", 0, 1);
    ctx.restore();
  }

  function drawCurrentShell(r, phase) {
    const pulse = Math.sin(phase * 3) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.14, 0, 0, r * (2.05 + pulse * 0.26));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.92)");
    glow.addColorStop(0.38, "rgba(91, 222, 212, 0.48)");
    glow.addColorStop(0.74, "rgba(223, 255, 122, 0.18)");
    glow.addColorStop(1, "rgba(91, 222, 212, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.18);
    const shell = ctx.createRadialGradient(-r * 0.28, -r * 0.24, r * 0.08, 0, 0, r * 0.94);
    shell.addColorStop(0, "#fff8e8");
    shell.addColorStop(0.45, "#5bded4");
    shell.addColorStop(0.76, "#dfff7a");
    shell.addColorStop(1, "#14535a");
    ctx.fillStyle = shell;
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.96);
    ctx.bezierCurveTo(r * 0.78, -r * 0.7, r * 1.02, r * 0.24, r * 0.42, r * 0.78);
    ctx.quadraticCurveTo(0, r * 1.06, -r * 0.42, r * 0.78);
    ctx.bezierCurveTo(-r * 1.02, r * 0.24, -r * 0.78, -r * 0.7, 0, -r * 0.96);
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.68)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.66 + pulse * 0.24})`;
    ctx.lineWidth = Math.max(1.5, r * 0.065);
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.78);
      ctx.quadraticCurveTo(i * r * 0.18, -r * 0.08, i * r * 0.28, r * 0.62);
      ctx.stroke();
    }
    ctx.strokeStyle = "#dfff7a";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.52, Math.PI * 0.18, Math.PI * 1.82);
    ctx.stroke();
    ctx.fillStyle = "#102328";
    ctx.font = `900 ${Math.max(12, r * 0.46)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("流", 0, r * 0.12);
    ctx.restore();
  }

  function drawElementCore(p) {
    const r = p.r;
    const phase = p.phase;
    const element = elementCoreInfo(p.elementKind || "wood");
    const pulse = Math.sin(phase * 3.4) * 0.5 + 0.5;
    const colors = ["#35d07f", "#ff5650", "#f5c84b", "#fff8e8", "#54d0ff"];
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.12, 0, 0, r * (2.25 + pulse * 0.28));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.95)");
    glow.addColorStop(0.34, canvasRgba(element.color, 0.48, element.rgb));
    glow.addColorStop(0.72, "rgba(84, 208, 255, 0.18)");
    glow.addColorStop(1, "rgba(255, 248, 232, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(phase * 0.26);
    for (let i = 0; i < 5; i += 1) {
      const a = i * Math.PI * 0.4 - Math.PI * 0.5;
      ctx.save();
      ctx.rotate(a);
      const shard = ctx.createLinearGradient(0, -r * 0.95, 0, r * 0.28);
      shard.addColorStop(0, "#fff8e8");
      shard.addColorStop(0.54, colors[i]);
      shard.addColorStop(1, "rgba(17, 27, 34, 0.82)");
      ctx.fillStyle = shard;
      ctx.beginPath();
      ctx.moveTo(0, -r * (1.06 + pulse * 0.04));
      ctx.lineTo(r * 0.2, -r * 0.16);
      ctx.lineTo(0, r * 0.34);
      ctx.lineTo(-r * 0.2, -r * 0.16);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 248, 232, 0.58)";
      ctx.lineWidth = Math.max(1.5, r * 0.04);
      ctx.stroke();
      ctx.restore();
    }
    ctx.rotate(-phase * 0.7);
    const core = ctx.createRadialGradient(-r * 0.18, -r * 0.18, r * 0.08, 0, 0, r * 0.72);
    core.addColorStop(0, "#fff8e8");
    core.addColorStop(0.45, element.color);
    core.addColorStop(1, "#14202a");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.72 + pulse * 0.18})`;
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(12, r * 0.54)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(element.glyph, 0, 1);
    ctx.restore();
  }

  function drawPurificationCore(r, phase) {
    if (drawGeneratedPickupIcon(assets.iconPurificationCore, r, phase, "#5bded4")) return;
    const pulse = Math.sin(phase * 3.2) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.12, 0, 0, r * (2.25 + pulse * 0.3));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.96)");
    glow.addColorStop(0.34, "rgba(91, 222, 212, 0.48)");
    glow.addColorStop(0.72, "rgba(255, 241, 166, 0.22)");
    glow.addColorStop(1, "rgba(91, 222, 212, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.16);
    const shell = ctx.createRadialGradient(-r * 0.25, -r * 0.22, r * 0.08, 0, 0, r * 0.95);
    shell.addColorStop(0, "#fff8e8");
    shell.addColorStop(0.44, "#5bded4");
    shell.addColorStop(1, "#1a6d68");
    ctx.fillStyle = shell;
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.92, r * 0.78, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.66)";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.stroke();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.72 + pulse * 0.22})`;
    ctx.lineWidth = Math.max(2, r * 0.11);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.56, Math.PI * 0.15, Math.PI * 1.85);
    ctx.stroke();
    ctx.strokeStyle = "#fff1a6";
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.beginPath();
    ctx.moveTo(-r * 0.34, -r * 0.12);
    ctx.quadraticCurveTo(0, -r * 0.48, r * 0.34, -r * 0.12);
    ctx.quadraticCurveTo(0, r * 0.42, -r * 0.34, -r * 0.12);
    ctx.stroke();
    ctx.fillStyle = "#102328";
    ctx.font = `900 ${Math.max(12, r * 0.5)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("净", 0, 1);
    ctx.restore();
  }

  function drawBreakCore(r, phase) {
    if (drawGeneratedPickupIcon(assets.iconBreakCore, r, phase, "#ff8d54")) return;
    const pulse = Math.sin(phase * 3.1) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.16, 0, 0, r * (2.15 + pulse * 0.26));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.92)");
    glow.addColorStop(0.34, "rgba(255, 241, 166, 0.5)");
    glow.addColorStop(0.72, "rgba(255, 141, 84, 0.2)");
    glow.addColorStop(1, "rgba(255, 241, 166, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(phase * 0.22);
    const core = ctx.createLinearGradient(-r, -r, r, r);
    core.addColorStop(0, "#fff8e8");
    core.addColorStop(0.46, "#fff1a6");
    core.addColorStop(1, "#ff8d54");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.05);
    ctx.lineTo(r * 0.74, -r * 0.28);
    ctx.lineTo(r * 0.56, r * 0.78);
    ctx.lineTo(0, r * 1.06);
    ctx.lineTo(-r * 0.56, r * 0.78);
    ctx.lineTo(-r * 0.74, -r * 0.28);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 27, 34, 0.72)";
    ctx.lineWidth = Math.max(2, r * 0.09);
    ctx.stroke();
    ctx.rotate(-phase * 0.72);
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.68 + pulse * 0.24})`;
    ctx.lineWidth = Math.max(2, r * 0.12);
    ctx.beginPath();
    ctx.moveTo(-r * 0.48, -r * 0.08);
    ctx.lineTo(-r * 0.1, -r * 0.08);
    ctx.lineTo(-r * 0.26, r * 0.46);
    ctx.lineTo(r * 0.42, -r * 0.24);
    ctx.lineTo(r * 0.1, -r * 0.24);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(12, r * 0.46)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("破", 0, 1);
    ctx.restore();
  }

  function drawMysteryCapsule(r, phase) {
    const pulse = Math.sin(phase * 2.4) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const glow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * (1.85 + pulse * 0.24));
    glow.addColorStop(0, "rgba(255, 248, 232, 0.9)");
    glow.addColorStop(0.45, "rgba(255, 141, 84, 0.42)");
    glow.addColorStop(1, "rgba(196, 93, 255, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.9, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.rotate(Math.sin(phase) * 0.18);
    const grad = ctx.createLinearGradient(-r * 0.9, -r, r * 0.9, r);
    grad.addColorStop(0, "#fff8e8");
    grad.addColorStop(0.45, "#ff8d54");
    grad.addColorStop(1, "#c45dff");
    ctx.fillStyle = grad;
    roundRect(-r * 0.78, -r * 0.58, r * 1.56, r * 1.16, r * 0.32);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 248, 232, 0.78)";
    ctx.lineWidth = Math.max(2, r * 0.11);
    ctx.stroke();
    ctx.fillStyle = "#111b22";
    ctx.font = `900 ${Math.max(18, r * 0.92)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("?", 0, 1);
    ctx.restore();
  }

  function drawFocusOrb(r, phase) {
    const pulse = Math.sin(phase * 2.2) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    const grad = ctx.createRadialGradient(0, 0, r * 0.12, 0, 0, r * (1.7 + pulse * 0.18));
    grad.addColorStop(0, "rgba(255, 248, 232, 0.96)");
    grad.addColorStop(0.34, "rgba(157, 232, 255, 0.62)");
    grad.addColorStop(0.72, "rgba(245, 200, 75, 0.24)");
    grad.addColorStop(1, "rgba(79, 214, 208, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, r * (1.55 + pulse * 0.15), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 248, 232, ${0.52 + pulse * 0.28})`;
    ctx.lineWidth = Math.max(2, r * 0.12);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
    ctx.stroke();
    ctx.rotate(phase * 0.9);
    ctx.strokeStyle = "#fff8c4";
    ctx.lineWidth = Math.max(2, r * 0.13);
    ctx.beginPath();
    ctx.moveTo(-r * 0.16, -r * 0.76);
    ctx.lineTo(r * 0.18, -r * 0.14);
    ctx.lineTo(-r * 0.08, -r * 0.08);
    ctx.lineTo(r * 0.24, r * 0.72);
    ctx.stroke();
    ctx.restore();
  }

  function drawDraftGate(r, phase) {
    const pulse = Math.sin(phase * 2) * 0.5 + 0.5;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `rgba(157, 232, 255, ${0.62 + pulse * 0.22})`;
    ctx.lineWidth = Math.max(3, r * 0.09);
    ctx.beginPath();
    ctx.ellipse(0, 0, r * (1.18 + pulse * 0.04), r * (0.72 + pulse * 0.04), 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 248, 232, 0.72)";
    ctx.lineWidth = Math.max(2, r * 0.045);
    for (let i = -1; i <= 1; i += 1) {
      const x = i * r * 0.36 - pulse * 5;
      ctx.beginPath();
      ctx.moveTo(x - r * 0.16, -r * 0.24);
      ctx.lineTo(x + r * 0.16, 0);
      ctx.lineTo(x - r * 0.16, r * 0.24);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(84, 208, 255, 0.16)";
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 1.28, r * 0.82, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawRoundPickup(color, markColor, mark, r, phase) {
    ctx.fillStyle = `${color}55`;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.55 + Math.sin(phase * 2) * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = markColor;
    ctx.font = `800 ${Math.max(13, r * 0.9)}px Microsoft YaHei, Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(mark, 0, 1);
  }

  function drawImagePickup(img, r, phase, glow, fallbackMark) {
    img = ensureImage(img);
    ctx.fillStyle = `${glow}44`;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.7 + Math.sin(phase * 2) * 2, 0, Math.PI * 2);
    ctx.fill();
    if (img && img.complete && img.naturalWidth) {
      const size = r * 2.75;
      ctx.drawImage(img, -size * 0.5, -size * 0.5, size, size);
      return;
    }
    drawRoundPickup(glow, "#14202a", fallbackMark, r, phase);
  }

  function drawEventBanner() {
    if (state.eventLabelTimer <= 0 || !state.eventName || state.mode !== "playing") return;
    ctx.save();
    const alpha = Math.min(1, state.eventLabelTimer / 0.5);
    ctx.globalAlpha = alpha;
    ctx.translate(state.width * 0.5, playTop() + 34);
    ctx.font = "800 18px Microsoft YaHei, Arial";
    const bannerWidth = clamp(ctx.measureText(state.eventName).width + 48, 180, Math.min(420, state.width - 36));
    ctx.fillStyle = "rgba(17, 27, 34, 0.72)";
    roundRect(-bannerWidth * 0.5, -20, bannerWidth, 40, 8);
    ctx.fill();
    ctx.fillStyle = "#f5c84b";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(state.eventName, 0, 0);
    ctx.restore();
  }

  function drawClassicRouteRadar(cx, cy, radius, forecast, color) {
    const pulse = Math.sin(state.time * 8) * 0.5 + 0.5;
    const clearPulse = state.classicRouteClearPulse || 0;
    const accent = forecast ? (forecast.severe ? "#ff8d54" : color) : "#dfff7a";
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = canvasRgba(accent, 0.36 + clearPulse * 0.26);
    ctx.lineWidth = Math.max(1, radius * 0.13);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 248, 232, 0.2)";
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.58, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - radius * 0.9, cy);
    ctx.lineTo(cx + radius * 0.9, cy);
    ctx.moveTo(cx, cy - radius * 0.9);
    ctx.lineTo(cx, cy + radius * 0.9);
    ctx.stroke();
    if (forecast) {
      const angle = -Math.PI * 0.5 + Math.sin(state.time * 2.2 + forecast.distance) * 0.52;
      const distance = clamp(forecast.distance / 12, 0.22, 0.92);
      const bx = cx + Math.cos(angle) * radius * distance;
      const by = cy + Math.sin(angle) * radius * distance;
      ctx.fillStyle = canvasRgba(accent, 0.74 + pulse * 0.2);
      ctx.beginPath();
      ctx.arc(bx, by, radius * (forecast.severe ? 0.28 : 0.22), 0, Math.PI * 2);
      ctx.fill();
      if (forecast.followSame) {
        ctx.strokeStyle = canvasRgba(accent, 0.46 + pulse * 0.18);
        ctx.beginPath();
        ctx.arc(bx, by, radius * 0.46, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else {
      ctx.strokeStyle = canvasRgba(accent, 0.68 + clearPulse * 0.18);
      ctx.lineWidth = Math.max(1.4, radius * 0.15);
      ctx.beginPath();
      ctx.moveTo(cx - radius * 0.38, cy + radius * 0.02);
      ctx.lineTo(cx - radius * 0.08, cy + radius * 0.28);
      ctx.lineTo(cx + radius * 0.48, cy - radius * 0.34);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawClassicDistrictHud() {
    if (state.gameMode !== "stage" || state.mode !== "playing" || state.classicDistrictTarget <= 0) return;
    const stage = activeStage();
    const profile = classicStageProfile(stage);
    const compact = isLandscapePlay();
    const target = state.classicDistrictTarget || classicDistrictTarget(stage);
    const progress = clamp(state.classicDistrictProgress || 0, 0, target);
    const percent = clamp(progress / Math.max(1, target), 0, 1);
    const ready = state.classicDistrictClaimed || percent >= 1;
    const pulse = state.classicDistrictPulse || 0;
    const focusActive = state.classicRouteFocusTimer > 0 && state.classicRouteFocusKey === profile.key;
    const focusPulse = focusActive ? (state.classicRouteFocusPulse || 0) : 0;
    const forecast = classicRouteForecastInfo();
    const color = profile.districtColor || "#5bded4";
    const greenActive = classicGreenWaveActive();
    const greenProgress = clamp((state.classicGreenWaveCharge || 0) / 100, 0, 1);
    const w = compact ? clamp(state.width * 0.26, 150, 186) : 246;
    const h = compact ? 38 : 58;
    const x = compact ? 12 : 18;
    const y = playTop() + (compact ? 62 : 70);
    const barX = x + 12;
    const barW = w - 24;
    const textMaxW = barW - (compact ? 25 : 34);
    const barH = compact ? 6 : 9;
    const barY = y + h - (compact ? 11 : 17);
    ctx.save();
    ctx.globalAlpha = 0.88;
    ctx.fillStyle = `rgba(13, 25, 34, ${0.64 + pulse * 0.16 + focusPulse * 0.1})`;
    roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.strokeStyle = forecast && forecast.severe
      ? canvasRgba("#ff8d54", 0.62 + pulse * 0.16)
      : focusActive ? canvasRgba(color, 0.68 + focusPulse * 0.22) : ready ? "rgba(223, 255, 122, 0.82)" : canvasRgba(color, 0.52 + pulse * 0.28);
    ctx.lineWidth = 1.4 + pulse * 1.1 + focusPulse * 0.8;
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = ready ? "#dfff7a" : "#fff8e8";
    ctx.font = `800 ${compact ? 10 : 14}px Microsoft YaHei, Arial`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(ready ? `${profile.short}城区稳定` : `${profile.short}稳定 ${Math.floor(percent * 100)}%`, barX, y + (compact ? 5 : 8), textMaxW);
    ctx.fillStyle = "rgba(255, 248, 232, 0.78)";
    ctx.font = `700 ${compact ? 8 : 12}px Microsoft YaHei, Arial`;
    const hint = focusActive
      ? `${classicRouteFocusLabel(profile)} ${Math.ceil(state.classicRouteFocusTimer)}s · ${compact ? "委托" : "委托支援"}`
      : ready ? `增益 ${Math.ceil(state.classicDistrictBoostTimer || 0)}s` : forecast && forecast.severe ? `${forecast.label} · ${forecast.distance}格` : greenActive ? `绿波 ${Math.floor(greenProgress * 100)}% · 跟线` : forecast ? `${forecast.label} · ${forecast.distance}格` : `${Math.floor(progress)}/${target} · 路况清晰`;
    ctx.fillText(hint, barX, y + (compact ? 18 : 27), textMaxW);
    drawClassicRouteRadar(x + w - (compact ? 14 : 18), y + (compact ? 14 : 20), compact ? 8 : 11, forecast, color);
    ctx.fillStyle = "rgba(255, 248, 232, 0.14)";
    roundRect(barX, barY, barW, barH, barH * 0.5);
    ctx.fill();
    const grad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    grad.addColorStop(0, color);
    grad.addColorStop(0.72, "#fff8e8");
    grad.addColorStop(1, ready ? "#dfff7a" : "#f5c84b");
    ctx.fillStyle = grad;
    if (barW * percent > 0.5) {
      roundRect(barX, barY, barW * percent, barH, barH * 0.5);
      ctx.fill();
    }
    if (focusActive) {
      const focusW = barW * clamp(state.classicRouteFocusTimer / 4.2, 0, 1);
      ctx.fillStyle = canvasRgba(color, 0.18 + focusPulse * 0.18);
      roundRect(barX, barY - (compact ? 5 : 7), focusW, compact ? 2 : 3, compact ? 1 : 1.5);
      ctx.fill();
    }
    const pips = classicDistrictMilestonePlan(stage);
    for (const step of pips) {
      const px = barX + barW * step.ratio;
      const claimed = percent >= step.ratio;
      ctx.beginPath();
      ctx.arc(px, barY + barH * 0.5, compact ? 3.6 : 5, 0, Math.PI * 2);
      ctx.fillStyle = claimed ? (step.ratio >= 1 ? "#dfff7a" : color) : "rgba(255, 248, 232, 0.28)";
      ctx.fill();
      ctx.lineWidth = 1.1;
      ctx.strokeStyle = claimed ? "rgba(255, 248, 232, 0.82)" : "rgba(13, 25, 34, 0.72)";
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawAdventureRouteHud() {
    if (state.gameMode !== "adventure" || state.mode !== "playing") return;
    const route = adventureRouteProgress();
    const percent = Math.floor(adventureRoutePercent());
    const ready = adventureRouteReady();
    const compact = isLandscapePlay();
    const s = playScale();
    const w = compact ? clamp(state.width * 0.27, 150, 184) : 230;
    const h = compact ? 48 : 62;
    const x = compact ? 12 : 18;
    const y = playTop() + (compact ? 64 : 72);
    const icon = compact ? 28 : 42;
    const pulse = state.adventureRoutePulse || 0;
    const barX = x + icon + 16 * s;
    const barY = y + h - (compact ? 15 : 18);
    const barW = Math.max(72, w - (barX - x) - 12);
    const barH = compact ? 7 : 9;
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = `rgba(13, 25, 34, ${0.68 + pulse * 0.12})`;
    roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.strokeStyle = ready ? "rgba(191, 255, 139, 0.82)" : `rgba(84, 208, 255, ${0.5 + pulse * 0.28})`;
    ctx.lineWidth = 1.4 + pulse * 1.1;
    ctx.stroke();
    ctx.globalAlpha = 1;
    if (assets.adventureRouteCompass.complete && assets.adventureRouteCompass.naturalWidth) {
      ctx.drawImage(assets.adventureRouteCompass, x + 8, y + (h - icon) * 0.5, icon, icon);
    } else {
      const cx = x + 8 + icon * 0.5;
      const cy = y + h * 0.5;
      ctx.fillStyle = "rgba(84, 208, 255, 0.2)";
      ctx.beginPath();
      ctx.arc(cx, cy, icon * 0.46, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#9de8ff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, icon * 0.38, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath();
      ctx.moveTo(cx, cy - icon * 0.32);
      ctx.lineTo(cx + icon * 0.12, cy + icon * 0.1);
      ctx.lineTo(cx - icon * 0.12, cy + icon * 0.1);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = ready ? "#dfff7a" : "#fff8e8";
    ctx.font = `800 ${compact ? 11 : 14}px Microsoft YaHei, Arial`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(ready ? "航图完成" : `航图 ${percent}%`, barX, y + (compact ? 7 : 9));
    ctx.fillStyle = "rgba(255, 248, 232, 0.82)";
    ctx.font = `700 ${compact ? 9 : 12}px Microsoft YaHei, Arial`;
    ctx.fillText(`线索 ${Math.floor(route.intel)}/${route.target.intel} · 货箱 ${Math.floor(route.cargo)}/${route.target.cargo}`, barX, y + (compact ? 22 : 27));
    ctx.fillStyle = "rgba(255, 248, 232, 0.16)";
    roundRect(barX, barY, barW, barH, barH * 0.5);
    ctx.fill();
    const fillW = barW * clamp(percent / 100, 0, 1);
    const grad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    grad.addColorStop(0, "#54d0ff");
    grad.addColorStop(0.62, "#9de8ff");
    grad.addColorStop(1, ready ? "#dfff7a" : "#f5c84b");
    ctx.fillStyle = grad;
    if (fillW > 0.5) {
      roundRect(barX, barY, fillW, barH, barH * 0.5);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawAdventureContractHud() {
    if (state.gameMode !== "adventure" || state.mode !== "playing") return;
    const info = adventureContractProgressInfo();
    if (!info.contract) return;
    const compact = isLandscapePlay();
    const s = playScale();
    const w = compact ? clamp(state.width * 0.29, 150, 184) : 220;
    const h = compact ? 44 : 58;
    const x = state.width - w - (compact ? 12 : 18);
    const y = playTop() + (compact ? 118 : 142);
    const icon = compact ? 28 : 40;
    const pulse = state.adventureContractPulse || 0;
    const ready = info.ready;
    const color = ready ? "#dfff7a" : info.contract.color;
    const barX = x + icon + 16 * s;
    const barY = y + h - (compact ? 13 : 17);
    const barW = Math.max(70, w - (barX - x) - 12);
    const barH = compact ? 7 : 9;
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = `rgba(13, 25, 34, ${0.66 + pulse * 0.14})`;
    roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.strokeStyle = ready ? "rgba(223, 255, 122, 0.84)" : color;
    ctx.lineWidth = 1.4 + pulse * 1.2;
    ctx.stroke();
    ctx.globalAlpha = 1;
    if (assets.stageContractBadge.complete && assets.stageContractBadge.naturalWidth) {
      ctx.drawImage(assets.stageContractBadge, x + 8, y + (h - icon) * 0.5, icon, icon);
    } else {
      const cx = x + 8 + icon * 0.5;
      const cy = y + h * 0.5;
      ctx.fillStyle = "rgba(245, 200, 75, 0.22)";
      ctx.beginPath();
      ctx.arc(cx, cy, icon * 0.46, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#f5c84b";
      ctx.beginPath();
      ctx.moveTo(cx, cy - icon * 0.34);
      ctx.lineTo(cx + icon * 0.28, cy + icon * 0.3);
      ctx.lineTo(cx - icon * 0.3, cy - icon * 0.08);
      ctx.lineTo(cx + icon * 0.3, cy - icon * 0.08);
      ctx.lineTo(cx - icon * 0.28, cy + icon * 0.3);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = ready ? "#dfff7a" : "#fff8e8";
    ctx.font = `800 ${compact ? 11 : 14}px Microsoft YaHei, Arial`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(ready ? "契约完成" : `${info.contract.short} ${Math.floor(info.percent)}%`, barX, y + (compact ? 7 : 9));
    ctx.fillStyle = "rgba(255, 248, 232, 0.82)";
    ctx.font = `700 ${compact ? 9 : 12}px Microsoft YaHei, Arial`;
    ctx.fillText(`${Math.floor(info.value)}/${info.target}${state.adventureContractBoostTimer > 0 ? ` · 签章 ${Math.ceil(state.adventureContractBoostTimer)}s` : ""}`, barX, y + (compact ? 22 : 27));
    ctx.fillStyle = "rgba(255, 248, 232, 0.16)";
    roundRect(barX, barY, barW, barH, barH * 0.5);
    ctx.fill();
    const fillW = barW * clamp(info.percent / 100, 0, 1);
    const grad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    grad.addColorStop(0, info.contract.color);
    grad.addColorStop(0.65, "#fff8e8");
    grad.addColorStop(1, ready ? "#dfff7a" : "#f5c84b");
    ctx.fillStyle = grad;
    if (fillW > 0.5) {
      roundRect(barX, barY, fillW, barH, barH * 0.5);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawProjectiles() {
    for (const shot of projectiles) {
      ctx.save();
      ctx.translate(shot.x, shot.y);
      ctx.globalAlpha = Math.max(0.2, shot.life / 0.8);
      if (shot.kind === "poop") {
        drawPoopBlob(0, 0, (shot.rx || 22) * 1.6, Math.sin(shot.pulse) * 0.28, shot.color || "#9d5a2c", shot.dark || "#5b2e18");
        ctx.restore();
        continue;
      }
      if (shot.kind === "chickenPeck") {
        const r = shot.rx || 24;
        const frame = Math.floor(shot.pulse * 0.78) % 4;
        ctx.rotate(Math.sin(shot.pulse * 0.7) * 0.08);
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(245, 200, 75, 0.24)";
        ctx.beginPath();
        ctx.ellipse(-r * 0.55, 0, r * 1.5, r * 0.82, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        drawIkunPeckSprite(frame, 0, 0, r * (shot.manual ? 4.3 : 3.8), 1, 0);
        ctx.restore();
        continue;
      }
      if (shot.kind === "waterBolt") {
        const r = shot.rx || 22;
        ctx.globalCompositeOperation = "lighter";
        const grad = ctx.createLinearGradient(-r * 2.2, 0, r * 2.4, 0);
        grad.addColorStop(0, "rgba(84, 208, 255, 0)");
        grad.addColorStop(0.35, "rgba(84, 208, 255, 0.62)");
        grad.addColorStop(1, "rgba(255, 248, 232, 0.9)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 2.2, r * 0.72, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        continue;
      }
      if (shot.kind === "poisonFlask") {
        const r = shot.rx || 20;
        ctx.rotate(shot.pulse * 0.7);
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(167, 240, 74, 0.26)";
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.55, r * 1.05, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#a7f04a";
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 0.72, r, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#c45dff";
        ctx.fillRect(-r * 0.28, -r * 1.2, r * 0.56, r * 0.48);
        ctx.restore();
        continue;
      }
      if (shot.kind === "paperRoll") {
        const r = shot.rx || 21;
        ctx.rotate(shot.pulse * 0.85);
        ctx.fillStyle = "#fff8e8";
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.2, r * 0.76, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#9de8ff";
        ctx.lineWidth = Math.max(2, r * 0.16);
        ctx.stroke();
        ctx.fillStyle = "#4f6d7a";
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        continue;
      }
      if (shot.kind === "voidCleaver") {
        const r = shot.rx || 23;
        ctx.rotate(Math.sin(shot.pulse * 0.42) * 0.18);
        ctx.globalCompositeOperation = "lighter";
        const well = ctx.createRadialGradient(0, 0, 2, 0, 0, r * 2.2);
        well.addColorStop(0, "rgba(17, 27, 34, 0.92)");
        well.addColorStop(0.42, "rgba(51, 240, 223, 0.42)");
        well.addColorStop(1, "rgba(51, 240, 223, 0)");
        ctx.fillStyle = well;
        ctx.beginPath();
        ctx.ellipse(-r * 0.2, 0, r * 2.3, r * 1.05, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = shot.manual ? "rgba(255, 248, 232, 0.82)" : "rgba(51, 240, 223, 0.76)";
        ctx.lineWidth = Math.max(3, r * 0.18);
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.18, -0.78, 0.78);
        ctx.stroke();
        ctx.strokeStyle = "rgba(223, 255, 122, 0.42)";
        ctx.lineWidth = Math.max(1.5, r * 0.08);
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.62, r * 0.62, shot.pulse * 0.08, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        ctx.restore();
        continue;
      }
      if (shot.kind === "neonSyringe") {
        const r = shot.rx || 20;
        ctx.rotate(Math.sin(shot.pulse * 0.5) * 0.06);
        ctx.globalCompositeOperation = "lighter";
        const grad = ctx.createLinearGradient(-r * 1.8, 0, r * 2.2, 0);
        grad.addColorStop(0, "rgba(84, 208, 255, 0)");
        grad.addColorStop(0.35, "rgba(84, 208, 255, 0.5)");
        grad.addColorStop(1, "rgba(255, 248, 232, 0.92)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 2.2, r * 0.58, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = shot.manual ? "#fff8e8" : "#54d0ff";
        roundRect(-r * 0.92, -r * 0.24, r * 1.58, r * 0.48, r * 0.18);
        ctx.fill();
        ctx.fillStyle = "#ff7b7b";
        roundRect(-r * 0.42, -r * 0.34, r * 0.5, r * 0.68, r * 0.16);
        ctx.fill();
        ctx.strokeStyle = "#fff8e8";
        ctx.lineWidth = Math.max(1.4, r * 0.1);
        ctx.beginPath();
        ctx.moveTo(r * 0.7, 0);
        ctx.lineTo(r * 1.42, -r * 0.18);
        ctx.lineTo(r * 1.42, r * 0.18);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        continue;
      }
      if (shot.kind === "woodDragonLeaf") {
        const r = shot.rx || 21;
        ctx.rotate(Math.sin(shot.pulse * 0.5) * 0.18);
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = shot.manual ? "rgba(84, 208, 255, 0.3)" : "rgba(53, 208, 127, 0.24)";
        ctx.beginPath();
        ctx.ellipse(-r * 0.35, 0, r * (shot.variant === "dragonHead" ? 2.45 : 1.9), r * (shot.manual ? 0.88 : 0.72), -0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(223, 255, 122, ${shot.manual ? 0.58 : 0.38})`;
        ctx.lineWidth = Math.max(2, r * 0.13);
        ctx.beginPath();
        ctx.arc(-r * 0.2, 0, r * (shot.variant === "dragonHead" ? 1.24 : 0.92), -0.62, 0.62);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        const grad = ctx.createLinearGradient(-r * 1.1, -r * 0.7, r * 1.2, r * 0.6);
        grad.addColorStop(0, "#dfff7a");
        grad.addColorStop(0.48, "#35d07f");
        grad.addColorStop(1, "#54d0ff");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(-r * 1.15, 0);
        ctx.quadraticCurveTo(-r * 0.15, -r * 1.05, r * 1.2, -r * 0.1);
        ctx.quadraticCurveTo(0, r * 0.92, -r * 1.15, 0);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 248, 232, 0.62)";
        ctx.lineWidth = Math.max(1.4, r * 0.11);
        ctx.beginPath();
        ctx.moveTo(-r * 0.86, 0);
        ctx.quadraticCurveTo(-r * 0.04, -r * 0.08, r * 0.74, -r * 0.02);
        ctx.stroke();
        if (shot.variant === "dragonHead") {
          ctx.fillStyle = "#fff8e8";
          ctx.beginPath();
          ctx.arc(r * 0.62, -r * 0.24, Math.max(2, r * 0.13), 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#dfff7a";
          ctx.lineWidth = Math.max(1.6, r * 0.1);
          ctx.beginPath();
          ctx.moveTo(r * 0.3, -r * 0.46);
          ctx.quadraticCurveTo(r * 0.55, -r * 0.95, r * 0.9, -r * 0.54);
          ctx.moveTo(r * 0.46, -r * 0.38);
          ctx.quadraticCurveTo(r * 0.86, -r * 0.72, r * 1.0, -r * 0.22);
          ctx.stroke();
        }
        ctx.restore();
        continue;
      }
      if (shot.kind === "metalTigerSlash") {
        const r = shot.rx || 24;
        ctx.rotate(Math.sin(shot.pulse * 0.6) * 0.05);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = shot.manual ? "rgba(255, 248, 232, 0.95)" : "rgba(255, 248, 232, 0.84)";
        ctx.lineWidth = Math.max(4, r * (shot.variant === "tigerFang" ? 0.38 : 0.3));
        ctx.beginPath();
        ctx.arc(-r * 0.3, 0, r * (shot.variant === "tigerFang" ? 1.42 : 1.25), -0.68, 0.68);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255, 227, 122, 0.72)";
        ctx.lineWidth = Math.max(2, r * 0.14);
        ctx.beginPath();
        ctx.arc(-r * 0.42, 0, r * 1.04, -0.54, 0.54);
        ctx.stroke();
        ctx.strokeStyle = "rgba(157, 232, 255, 0.52)";
        ctx.lineWidth = Math.max(1.4, r * 0.08);
        ctx.beginPath();
        ctx.moveTo(-r * 1.02, -r * 0.4);
        ctx.lineTo(r * 1.12, r * 0.38);
        ctx.moveTo(-r * 0.85, r * 0.42);
        ctx.lineTo(r * 0.95, -r * 0.34);
        ctx.stroke();
        ctx.fillStyle = shot.manual ? "rgba(157, 232, 255, 0.34)" : "rgba(157, 232, 255, 0.24)";
        ctx.beginPath();
        ctx.ellipse(-r * 0.18, 0, r * (shot.variant === "tigerFang" ? 2.18 : 1.8), r * (shot.manual ? 0.68 : 0.54), 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        continue;
      }
      const r = (shot.rx || 21) + Math.sin(shot.pulse) * 3;
      const grad = ctx.createRadialGradient(0, 0, 2, 0, 0, r + 12);
      grad.addColorStop(0, shot.core || "#f8ff93");
      grad.addColorStop(0.55, shot.color || "#76e37e");
      grad.addColorStop(1, "rgba(76, 227, 126, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(0, 0, r + 14, (shot.ry || r * 0.7) + 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.42)";
      ctx.beginPath();
      ctx.arc(-6, -5, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawParticles() {
    for (const p of particles) {
      ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function drawFloaters() {
    for (const f of floaters) {
      ctx.save();
      ctx.globalAlpha = f.a;
      ctx.fillStyle = "#fff7e8";
      ctx.beginPath();
      ctx.ellipse(f.x, f.y, f.r * 1.3, f.r * 0.75, Math.sin(f.phase), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawCombo() {
    if (state.mode !== "playing") return;
    const showCombo = state.combo > 2 && state.comboTimer > 0;
    const showStyle = state.styleScore >= 18 || state.draftTimer > 0 || state.comboSurgeTimer > 0 || state.elementSurgeTimer > 0 || adventureCurrentActive() || starTrailActive() || mirrorCurrentActive() || auroraForgeActive();
    if (!showCombo && !showStyle) return;
    const rank = styleRank();
    ctx.save();
    ctx.translate(hero.x + 86, hero.y - 62);
    ctx.fillStyle = "rgba(17, 27, 34, 0.7)";
    roundRect(-66, -22, 132, 44, 8);
    ctx.fill();
    ctx.fillStyle = rank.color;
    ctx.font = "800 18px Microsoft YaHei, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(showCombo ? `${state.combo} 连击` : `技巧 ${rank.label}`, 0, -5);
    ctx.fillStyle = state.comboSurgeTimer > 0 ? "#dfff7a" : state.elementSurgeTimer > 0 ? elementCoreInfo(state.elementSurgeKind || "wood").color : auroraForgeActive() ? "#ffb75a" : mirrorCurrentActive() ? "#8ff7ff" : starTrailActive() ? "#9de8ff" : adventureCurrentActive() ? "#5bded4" : state.draftTimer > 0 ? "#9de8ff" : "rgba(255, 248, 232, 0.82)";
    ctx.font = "700 12px Microsoft YaHei, Arial";
    ctx.fillText(state.comboSurgeTimer > 0 ? `祭坛 ${Math.ceil(state.comboSurgeTimer)}s` : state.elementSurgeTimer > 0 ? `五行 ${Math.ceil(state.elementSurgeTimer)}s` : auroraForgeActive() ? `铸炉 ${Math.floor((state.forgeHeat || 0))}%` : mirrorCurrentActive() ? `镜流 ${Math.floor((state.mirrorCharge || 0))}%` : starTrailActive() ? `星轨 ${Math.floor((state.starTrailCharge || 0))}%` : adventureCurrentActive() ? `顺流 ${Math.floor((state.adventureCurrentCharge || 0))}%` : state.draftTimer > 0 ? `风道 ${Math.ceil(state.draftTimer)}s` : `技巧 ${rank.label} x${rank.mult.toFixed(2)}`, 0, 12);
    ctx.restore();
  }

  function shoot(manual = true, options = {}) {
    if (manual && (state.mode === "ready" || state.mode === "gameover")) {
      resetGame();
      return;
    }
    if (!manual && state.mode !== "playing") return;
    if (manual && state.mode === "paused") {
      togglePause();
      return;
    }
    const tier = attackTier();
    const cost = manual ? manualEnergyCost() : 0;
    const now = performance.now();
    if (manual && now - state.lastShotAt < manualShootInterval()) return;
    if (manual && (state.shootCooldown > 0 || state.energy < cost)) return;
    if (now - (state.lastHeroAttackAt || 0) < HERO_MIN_ATTACK_INTERVAL * 1000) return;
    const special = state.specialTimer > 0;
    state.lastHeroAttackAt = now;
    if (manual) {
      state.lastShotAt = now;
      state.energy -= cost;
      state.shootCooldown = Math.max(HERO_MIN_ATTACK_INTERVAL, 0.48 - tier * 0.022 - currentEvolution() * 0.012);
      state.autoShootTimer = Math.max(state.autoShootTimer, HERO_MIN_ATTACK_INTERVAL);
      recordRunStat("manualShots", 1);
      addMountCharge(meta.selectedMount === "thunderSeat" ? 7.5 : 4.6);
      gainStyle(4, options.source === "auto" ? "自动强袭" : "强化强袭", "#fff1a6");
      if (options.source === "auto" && state.eventLabelTimer <= 0.18) {
        state.eventName = "自动强袭";
        state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.48);
      }
    }
    if (meta.selectedHero === "ikun") {
      shootIkun(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "jet") {
      shootJet(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "alchemist") {
      shootAlchemist(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "paper") {
      shootPaperMage(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "dragonWood") {
      shootDragonWood(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "voidChef") {
      shootVoidChef(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "neonMedic") {
      shootNeonMedic(manual, tier, special);
      return;
    }
    if (meta.selectedHero === "tigerMetal") {
      shootTigerMetal(manual, tier, special);
      return;
    }
    const focus = runPerkLevel("focus");
    const manualBoost = manual ? 1 : 0;
    const combat = runCombatStats();
    const base = {
      x: hero.x + 62,
      y: hero.y + 10,
      vx: (manual ? 820 : 690) + state.level * 12,
      life: (manual ? 0.94 : 0.78) + tier * 0.05,
      pulse: 0,
      kind: "poop",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 2 + 1 + (special ? 2 : 0)) * (1 + focus * 0.08))
        : Math.max(1, state.attackDamage + (special ? 1 : 0) - 1),
      critChance: clamp(combat.crit + (manual ? 5 : 0) + (special ? 4 : 0), 0, manual ? 78 : 64),
      critMult: manual ? 1.82 + focus * 0.04 : 1.62,
      rx: 16 + tier * 2 + manualBoost * 8 + (special ? 6 : 0),
      ry: 12 + tier * 2 + manualBoost * 5 + (special ? 4 : 0),
      pierce: (tier >= 4 || special ? 1 : 0) + (manual ? 1 : 0),
      color: special ? "#f5c84b" : manual ? "#c87938" : tier >= 4 ? "#b56a32" : tier >= 3 ? "#9d5a2c" : "#8b4f25",
      dark: special ? "#a85a22" : manual ? "#6a351b" : "#5b2e18",
      core: special ? "#fff1a6" : "#f8ff93",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 14 }, { ...base, y: base.y + 14 }]
        : tier === 3
          ? [{ ...base }, { ...base, y: base.y - 18, vy: -72 }, { ...base, y: base.y + 18, vy: 72 }]
          : [
              { ...base, rx: base.rx + 12, ry: base.ry + 8, damage: base.damage + 1, pierce: 2, life: base.life + 0.16 },
              { ...base, y: base.y - 24, vy: -95, damage: base.damage },
              { ...base, y: base.y + 24, vy: 95, damage: base.damage },
            ];
    if (tier >= 5) {
      shots.push(
        { ...base, y: base.y - 34, vy: -130, damage: base.damage + 1, pierce: base.pierce + 1, color: "#f5c84b", dark: "#7d3b18" },
        { ...base, y: base.y + 34, vy: 130, damage: base.damage + 1, pierce: base.pierce + 1, color: "#f5c84b", dark: "#7d3b18" }
      );
    }
    if (tier >= 6) {
      shots.push(
        { ...base, x: base.x - 10, y: base.y - 58, vy: 180, vx: base.vx + 110, rx: base.rx + 10, ry: base.ry + 7, damage: base.damage + 3, pierce: base.pierce + 2, color: "#ff8d54", dark: "#6a351b" },
        { ...base, x: base.x - 20, y: base.y + 58, vy: -180, vx: base.vx + 110, rx: base.rx + 10, ry: base.ry + 7, damage: base.damage + 3, pierce: base.pierce + 2, color: "#ff8d54", dark: "#6a351b" }
      );
    }
    if (tier >= 7) {
      shots.push(
        { ...base, x: base.x + 8, y: base.y - 6, vx: base.vx + 170, rx: base.rx + 18, ry: base.ry + 11, damage: base.damage + 5, pierce: base.pierce + 3, color: "#ffe37a", dark: "#8b4f25", core: "#fff8c4" },
        { ...base, x: base.x - 26, y: base.y - 78, vy: 250, vx: base.vx + 60, damage: base.damage + 4, pierce: base.pierce + 2, color: "#d8793b", dark: "#512816" },
        { ...base, x: base.x - 26, y: base.y + 78, vy: -250, vx: base.vx + 60, damage: base.damage + 4, pierce: base.pierce + 2, color: "#d8793b", dark: "#512816" }
      );
    }
    if (tier >= 8) {
      shots.push(
        { ...base, x: base.x + 18, y: base.y - 36, vx: base.vx + 230, vy: -34, rx: base.rx + 22, ry: base.ry + 13, damage: base.damage + 8, pierce: base.pierce + 5, life: base.life + 0.35, color: "#f5c84b", dark: "#3f1f12", core: "#fff4b8" },
        { ...base, x: base.x + 18, y: base.y + 36, vx: base.vx + 230, vy: 34, rx: base.rx + 22, ry: base.ry + 13, damage: base.damage + 8, pierce: base.pierce + 5, life: base.life + 0.35, color: "#f5c84b", dark: "#3f1f12", core: "#fff4b8" }
      );
    }
    pushProjectiles(shots);
    pop(hero.x + 50, hero.y + 12, special ? "#f5c84b" : manual ? "#ffd15c" : "#8b5a2b", manual ? 9 : 4);
    addTrail(hero.x - 36, hero.y + 22);
    if (manual) {
      beep(tier >= 3 ? 280 : 230, 0.06, "sawtooth", 0.035 + tier * 0.005);
    } else {
      beep(210, 0.025, "square", 0.012);
    }
  }

  function shootIkun(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const evolved = currentEvolution();
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const base = {
      x: hero.x + 62,
      y: hero.y + 4,
      vx: (manual ? 860 : 720) + state.level * 13,
      life: (manual ? 1.02 : 0.82) + tier * 0.05,
      pulse: 0,
      kind: "chickenPeck",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 2 + 2 + evolved + (special ? 2 : 0)) * (1 + focus * 0.08))
        : Math.max(1, state.attackDamage + evolved + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 5 : 0) + (special ? 4 : 0), 0, manual ? 78 : 64),
      critMult: manual ? 1.78 + focus * 0.04 : 1.58,
      rx: 17 + tier * 2 + manualBoost * 7 + evolved * 2,
      ry: 15 + tier * 2 + manualBoost * 4 + evolved,
      pierce: (tier >= 4 ? 1 : 0) + (tier >= 6 ? 1 : 0) + manualBoost,
      color: special ? "#f5c84b" : "#d8792f",
      core: "#fff3c4",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 14 }, { ...base, y: base.y + 14 }]
        : tier === 3
          ? [{ ...base }, { ...base, y: base.y - 20, vy: -80 }, { ...base, y: base.y + 20, vy: 80 }]
          : [
              { ...base, rx: base.rx + 8, ry: base.ry + 5, damage: base.damage + 1, pierce: base.pierce + 1 },
              { ...base, kind: "chickenPeck", y: base.y - 25, vy: -110, damage: base.damage + 1 },
              { ...base, kind: "chickenPeck", y: base.y + 25, vy: 110, damage: base.damage + 1 },
            ];
    if (tier >= 5) {
      shots.push(
        { ...base, y: base.y - 42, vy: -145, damage: base.damage + 2, pierce: base.pierce + 1 },
        { ...base, y: base.y + 42, vy: 145, damage: base.damage + 2, pierce: base.pierce + 1 }
      );
    }
    if (tier >= 7) {
      shots.push(
        { ...base, kind: "chickenPeck", x: base.x + 10, vx: base.vx + 180, rx: base.rx + 12, damage: base.damage + 5, pierce: base.pierce + 3 },
        { ...base, x: base.x - 24, y: base.y - 72, vy: 250, vx: base.vx + 70, damage: base.damage + 4 }
      );
    }
    pushProjectiles(shots);
    pop(hero.x + 50, hero.y + 8, "#fff3c4", manual ? 10 : 5);
    addTrail(hero.x - 36, hero.y + 22);
    beep(740, manual ? 0.06 : 0.025, "square", manual ? 0.04 : 0.014);
  }

  function shootJet(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const base = {
      x: hero.x + 66,
      y: hero.y + 2,
      vx: (manual ? 980 : 790) + state.level * 14,
      life: (manual ? 0.84 : 0.68) + tier * 0.04,
      pulse: 0,
      kind: "waterBolt",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 1.85 + 2 + (special ? 2 : 0)) * (1 + focus * 0.07))
        : Math.max(1, state.attackDamage + (tier >= 5 ? 1 : 0) + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 4 : 0) + (special ? 3 : 0), 0, manual ? 76 : 62),
      critMult: manual ? 1.72 + focus * 0.035 : 1.55,
      rx: 18 + tier * 2 + manualBoost * 8,
      ry: 11 + tier + manualBoost * 3,
      pierce: 1 + (tier >= 4 ? 1 : 0) + (manual ? 1 : 0),
      color: special ? "#fff8e8" : "#54d0ff",
      core: "#9de8ff",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 15, vy: -28 }, { ...base, y: base.y + 15, vy: 28 }]
        : [{ ...base, rx: base.rx + 7, damage: base.damage + 1 }, { ...base, y: base.y - 24, vy: -72 }, { ...base, y: base.y + 24, vy: 72 }];
    if (tier >= 5) shots.push({ ...base, x: base.x - 24, vx: base.vx + 180, rx: base.rx + 15, damage: base.damage + 4, pierce: base.pierce + 2, life: base.life + 0.14 });
    if (tier >= 7) shots.push({ ...base, y: base.y - 48, vy: -95, damage: base.damage + 3 }, { ...base, y: base.y + 48, vy: 95, damage: base.damage + 3 });
    pushProjectiles(shots);
    if (manual && heroFreeMove()) {
      const xBounds = heroXBounds();
      hero.x = clamp(hero.x + 12 * playScale(), xBounds.left, xBounds.right);
      state.dragTargetX = hero.x;
    }
    pop(hero.x + 54, hero.y, "#9de8ff", manual ? 12 : 6);
    addTrail(hero.x - 40, hero.y + 18);
    beep(520, manual ? 0.06 : 0.026, "sawtooth", manual ? 0.04 : 0.014);
  }

  function shootAlchemist(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const base = {
      x: hero.x + 58,
      y: hero.y + 4,
      vx: (manual ? 760 : 630) + state.level * 9,
      vy: manual ? -42 : 0,
      gravity: 110 * playScale(),
      life: (manual ? 1.16 : 0.95) + tier * 0.06,
      pulse: 0,
      kind: "poisonFlask",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 1.65 + 2 + currentEvolution() + (special ? 2 : 0)) * (1 + focus * 0.06))
        : Math.max(1, state.attackDamage + currentEvolution() + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 6 : 0), 0, manual ? 76 : 62),
      critMult: manual ? 1.66 + focus * 0.03 : 1.5,
      rx: 16 + tier * 2 + manualBoost * 6,
      ry: 17 + tier * 2 + manualBoost * 5,
      pierce: (tier >= 5 ? 1 : 0) + manualBoost,
      color: "#a7f04a",
      core: "#dfff7a",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 18, vy: -92 }, { ...base, y: base.y + 18, vy: 42 }]
        : [{ ...base }, { ...base, y: base.y - 26, vy: -130 }, { ...base, y: base.y + 26, vy: 90 }];
    if (tier >= 5) shots.push({ ...base, x: base.x - 18, y: base.y - 46, vy: 30, vx: base.vx + 90, damage: base.damage + 3, pierce: base.pierce + 1, rx: base.rx + 8 });
    if (tier >= 7) shots.push({ ...base, y: base.y + 52, vy: -120, vx: base.vx + 130, damage: base.damage + 4, pierce: base.pierce + 2, color: "#c45dff" });
    pushProjectiles(shots);
    pop(hero.x + 48, hero.y + 8, "#a7f04a", manual ? 13 : 6);
    addTrail(hero.x - 34, hero.y + 18);
    beep(300, manual ? 0.065 : 0.026, "triangle", manual ? 0.038 : 0.014);
  }

  function shootPaperMage(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const targetY = boss ? boss.y : nearestHazardY(hero.y);
    const base = {
      x: hero.x + 58,
      y: hero.y,
      vx: (manual ? 830 : 680) + state.level * 10,
      vy: clamp((targetY - hero.y) * 0.42, -135, 135),
      life: (manual ? 1.16 : 0.92) + tier * 0.06,
      pulse: 0,
      kind: "paperRoll",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 1.75 + 2 + (special ? 2 : 0)) * (1 + focus * 0.07))
        : Math.max(1, state.attackDamage + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 7 : 2), 0, manual ? 78 : 64),
      critMult: manual ? 1.72 + focus * 0.04 : 1.56,
      rx: 17 + tier * 2 + manualBoost * 7,
      ry: 13 + tier * 2 + manualBoost * 4,
      pierce: (tier >= 3 ? 1 : 0) + (tier >= 6 ? 1 : 0) + manualBoost,
      color: "#fff8e8",
      core: "#9de8ff",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 18, vy: base.vy - 45 }, { ...base, y: base.y + 18, vy: base.vy + 45 }]
        : [{ ...base }, { ...base, y: base.y - 30, vy: base.vy - 88 }, { ...base, y: base.y + 30, vy: base.vy + 88 }];
    if (tier >= 5) shots.push({ ...base, x: base.x + 8, vx: base.vx + 150, rx: base.rx + 10, damage: base.damage + 3, pierce: base.pierce + 2 });
    if (tier >= 7) shots.push({ ...base, y: base.y - 58, vy: base.vy + 160, vx: base.vx + 70, damage: base.damage + 3 }, { ...base, y: base.y + 58, vy: base.vy - 160, vx: base.vx + 70, damage: base.damage + 3 });
    pushProjectiles(shots);
    pop(hero.x + 50, hero.y, "#fff8e8", manual ? 12 : 5);
    addTrail(hero.x - 34, hero.y + 18);
    beep(860, manual ? 0.06 : 0.024, "sine", manual ? 0.038 : 0.014);
  }

  function shootDragonWood(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const evolved = currentEvolution();
    const targetY = boss ? boss.y + Math.sin(state.time * 4.2) * boss.h * 0.16 : nearestHazardY(hero.y);
    const base = {
      x: hero.x + 60,
      y: hero.y + 2,
      vx: (manual ? 910 : 720) + state.level * 12,
      vy: clamp((targetY - hero.y) * 0.44, -145, 145),
      life: (manual ? 1.26 : 0.98) + tier * 0.065,
      pulse: 0,
      kind: "woodDragonLeaf",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 2.18 + 4 + evolved * 1.25 + (special ? 3 : 0)) * (1 + focus * 0.08))
        : Math.max(2, state.attackDamage + 1 + Math.floor(evolved * 0.7) + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 8 : 2) + (special ? 4 : 0), 0, manual ? 82 : 66),
      critMult: manual ? 1.82 + focus * 0.045 : 1.6,
      rx: 22 + tier * 2 + manualBoost * 8,
      ry: 15 + tier * 2 + manualBoost * 5,
      pierce: 1 + (tier >= 3 ? 1 : 0) + (tier >= 6 ? 1 : 0) + manualBoost,
      strongBonus: manual ? 0.12 : 0,
      color: special ? "#dfff7a" : "#35d07f",
      core: "#dfff7a",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 18, vy: base.vy - 52 }, { ...base, y: base.y + 18, vy: base.vy + 52 }]
        : [
            { ...base, rx: base.rx + 5, ry: base.ry + 3, damage: base.damage + 1, variant: "dragonHead" },
            { ...base, y: base.y - 30, vy: base.vy - 96 },
            { ...base, y: base.y + 30, vy: base.vy + 96 },
          ];
    if (tier >= 5) {
      shots.push(
        { ...base, x: base.x + 10, vx: base.vx + 160, rx: base.rx + 12, ry: base.ry + 5, damage: base.damage + 4, pierce: base.pierce + 2, color: "#54d0ff", variant: "dragonHead" },
        { ...base, x: base.x - 18, y: base.y - 58, vy: base.vy + 160, damage: base.damage + 3, color: "#dfff7a" },
        { ...base, x: base.x - 24, y: base.y + 58, vy: base.vy - 160, damage: base.damage + 3, color: "#19a48b" }
      );
    }
    if (tier >= 7) {
      shots.push(
        { ...base, y: base.y + 66, vy: base.vy - 210, vx: base.vx + 130, damage: base.damage + 5, pierce: base.pierce + 2, rx: base.rx + 9, color: "#54d0ff" },
        { ...base, y: base.y - 66, vy: base.vy + 210, vx: base.vx + 130, damage: base.damage + 5, pierce: base.pierce + 2, rx: base.rx + 9, color: "#54d0ff" },
        { ...base, x: base.x + 18, vx: base.vx + 230, rx: base.rx + 18, ry: base.ry + 8, damage: base.damage + 8, pierce: base.pierce + 4, color: "#dfff7a", variant: "dragonHead" }
      );
    }
    if (tier >= 8) {
      shots.push(
        { ...base, x: base.x + 30, y: base.y - 8, vx: base.vx + 310, vy: base.vy * 0.45, rx: base.rx + 28, ry: base.ry + 13, damage: base.damage + 11, pierce: base.pierce + 5, color: "#fff8e8", core: "#54d0ff", variant: "dragonHead" }
      );
    }
    pushProjectiles(shots);
    if (manual) {
      state.recoveryTimer = Math.max(state.recoveryTimer, 0.34);
      state.health = clamp(state.health + state.maxHealth * (0.01 + evolved * 0.002), 0, state.maxHealth);
      const reach = 330 * playScale();
      for (let i = hazards.length - 1; i >= 0; i -= 1) {
        const h = hazards[i];
        if (h.type !== "toilet" || h.x < hero.x - 20 || h.x > hero.x + reach) continue;
        h.slow = Math.max(h.slow || 0, 1.05);
        h.hp -= Math.max(1, Math.round(state.attackDamage * 0.46));
        h.hit = Math.max(h.hit || 0, 0.2);
        if (h.hp <= 0) destroyHazard(i, h);
      }
      if (boss) {
        applyBossControl("root", 0.28);
        addBossBreakPressure(bossBreakGain("manual") * 0.18, hero.x + 120 * playScale(), hero.y);
      }
      state.shake = Math.max(state.shake, 2.5);
    }
    pop(hero.x + 50, hero.y, "#35d07f", manual ? 20 : 8);
    addTrail(hero.x - 36, hero.y + 18);
    beep(manual ? 560 : 460, manual ? 0.07 : 0.026, "triangle", manual ? 0.045 : 0.014);
  }

  function shootVoidChef(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const targetY = boss ? boss.y + Math.sin(state.time * 3.6) * boss.h * 0.12 : nearestHazardY(hero.y);
    const base = {
      x: hero.x + 60,
      y: hero.y + 2,
      vx: (manual ? 820 : 650) + state.level * 10,
      vy: clamp((targetY - hero.y) * 0.38, -120, 120),
      life: (manual ? 1.34 : 1.08) + tier * 0.06,
      pulse: 0,
      kind: "voidCleaver",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 2.12 + 4 + (special ? 3 : 0)) * (1 + focus * 0.075))
        : Math.max(2, state.attackDamage + 1 + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 8 : 2) + (special ? 4 : 0), 0, manual ? 82 : 66),
      critMult: manual ? 1.84 + focus * 0.045 : 1.58,
      rx: 22 + tier * 2 + manualBoost * 8,
      ry: 15 + tier * 2 + manualBoost * 5,
      pierce: 1 + (tier >= 3 ? 1 : 0) + (tier >= 6 ? 1 : 0) + manualBoost,
      color: special ? "#dfff7a" : "#33f0df",
      core: "#fff8e8",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 17, vy: base.vy - 44 }, { ...base, y: base.y + 17, vy: base.vy + 44 }]
        : [
            { ...base, rx: base.rx + 7, damage: base.damage + 1, pierce: base.pierce + 1 },
            { ...base, y: base.y - 30, vy: base.vy - 86 },
            { ...base, y: base.y + 30, vy: base.vy + 86 },
          ];
    if (tier >= 5) {
      shots.push(
        { ...base, x: base.x + 12, vx: base.vx + 140, rx: base.rx + 12, ry: base.ry + 5, damage: base.damage + 4, pierce: base.pierce + 2, color: "#dfff7a" },
        { ...base, x: base.x - 24, y: base.y - 58, vy: base.vy + 150, damage: base.damage + 3 },
        { ...base, x: base.x - 24, y: base.y + 58, vy: base.vy - 150, damage: base.damage + 3 }
      );
    }
    if (tier >= 7) {
      shots.push(
        { ...base, x: base.x + 22, vx: base.vx + 230, rx: base.rx + 18, ry: base.ry + 8, damage: base.damage + 8, pierce: base.pierce + 4, color: "#fff8e8" },
        { ...base, y: base.y - 72, vy: base.vy + 220, vx: base.vx + 80, damage: base.damage + 5, pierce: base.pierce + 2 },
        { ...base, y: base.y + 72, vy: base.vy - 220, vx: base.vx + 80, damage: base.damage + 5, pierce: base.pierce + 2 }
      );
    }
    pushProjectiles(shots);
    if (manual) {
      const s = playScale();
      const radius = (260 + tier * 12) * s;
      let pulled = 0;
      for (let i = hazards.length - 1; i >= 0; i -= 1) {
        const h = hazards[i];
        if (!h || h.type === "pipeTop" || h.type === "pipeBottom") continue;
        const dist = Math.hypot((h.x || 0) - (hero.x + 160 * s), (h.y || hero.y) - hero.y);
        if (dist > radius + Math.max(h.w || 0, h.h || 0) * 0.4) continue;
        h.slow = Math.max(h.slow || 0, 1.15 + tier * 0.035);
        h.vy = (h.vy || 0) * 0.38 + (hero.y - (h.y || hero.y)) * 0.22;
        if (h.type === "toilet") {
          h.hp -= Math.max(1, Math.round(state.attackDamage * 0.42));
          h.hit = Math.max(h.hit || 0, 0.22);
          if (h.hp <= 0) destroyHazard(i, h);
        } else if (pulled < 4 && h.bossDamage) {
          h.x += 22 * s;
          h.hit = Math.max(h.hit || 0, 0.2);
        }
        pulled += 1;
      }
      if (boss) {
        applyBossControl("root", 0.32);
        addBossBreakPressure(bossBreakGain("manual") * 0.22, hero.x + 150 * s, hero.y);
      }
      gainStyle(8 + Math.min(8, pulled), "引力锅铲", "#33f0df");
      state.shake = Math.max(state.shake, 3);
    }
    pop(hero.x + 52, hero.y, "#33f0df", manual ? 22 : 9);
    addTrail(hero.x - 36, hero.y + 18);
    beep(manual ? 420 : 360, manual ? 0.07 : 0.026, "triangle", manual ? 0.044 : 0.014);
  }

  function shootNeonMedic(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const targetY = boss ? boss.y : nearestHazardY(hero.y);
    const base = {
      x: hero.x + 62,
      y: hero.y,
      vx: (manual ? 930 : 760) + state.level * 13,
      vy: clamp((targetY - hero.y) * 0.28, -94, 94),
      life: (manual ? 1.08 : 0.86) + tier * 0.045,
      pulse: 0,
      kind: "neonSyringe",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 1.9 + 3 + (special ? 2 : 0)) * (1 + focus * 0.065))
        : Math.max(1, state.attackDamage + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 6 : 1) + (special ? 4 : 0), 0, manual ? 78 : 62),
      critMult: manual ? 1.76 + focus * 0.04 : 1.54,
      rx: 18 + tier * 2 + manualBoost * 7,
      ry: 12 + tier * 2 + manualBoost * 4,
      pierce: (tier >= 3 ? 1 : 0) + (tier >= 6 ? 1 : 0) + manualBoost,
      color: special ? "#fff8e8" : "#54d0ff",
      core: "#ff7b7b",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 16, vy: base.vy - 38 }, { ...base, y: base.y + 16, vy: base.vy + 38 }]
        : [
            { ...base, rx: base.rx + 6, damage: base.damage + 1 },
            { ...base, y: base.y - 27, vy: base.vy - 76, color: "#ff7b7b" },
            { ...base, y: base.y + 27, vy: base.vy + 76, color: "#54d0ff" },
          ];
    if (tier >= 5) {
      shots.push(
        { ...base, x: base.x + 8, vx: base.vx + 170, rx: base.rx + 10, damage: base.damage + 4, pierce: base.pierce + 2, color: "#fff8e8" },
        { ...base, x: base.x - 22, y: base.y - 54, vy: base.vy + 135, damage: base.damage + 3 },
        { ...base, x: base.x - 22, y: base.y + 54, vy: base.vy - 135, damage: base.damage + 3 }
      );
    }
    if (tier >= 7) {
      shots.push(
        { ...base, x: base.x + 24, vx: base.vx + 260, rx: base.rx + 16, ry: base.ry + 7, damage: base.damage + 7, pierce: base.pierce + 3, color: "#fff8e8" },
        { ...base, y: base.y - 72, vy: base.vy + 210, vx: base.vx + 80, damage: base.damage + 5 },
        { ...base, y: base.y + 72, vy: base.vy - 210, vx: base.vx + 80, damage: base.damage + 5 }
      );
    }
    pushProjectiles(shots);
    if (manual) {
      const heal = state.maxHealth * (0.026 + Math.min(0.026, tier * 0.0025));
      state.health = clamp(state.health + heal, 0, state.maxHealth);
      state.energy = clamp(state.energy + state.maxEnergy * 0.045, 0, state.maxEnergy);
      state.shieldTimer = Math.max(state.shieldTimer || 0, 1.05 + tier * 0.04);
      state.recoveryTimer = Math.max(state.recoveryTimer || 0, 0.7);
      let cleared = 0;
      const s = playScale();
      for (let i = hazards.length - 1; i >= 0; i -= 1) {
        const h = hazards[i];
        if (!h || !h.bossDamage || h.type === "pipeTop" || h.type === "pipeBottom") continue;
        if (Math.hypot((h.x || 0) - hero.x, (h.y || hero.y) - hero.y) > (165 + tier * 8) * s) continue;
        hazards.splice(i, 1);
        cleared += 1;
        pop(h.x, h.y, "#54d0ff", 7);
      }
      gainStyle(8 + cleared * 2, "霓虹急救", "#54d0ff");
    }
    pop(hero.x + 52, hero.y, "#54d0ff", manual ? 18 : 7);
    addTrail(hero.x - 36, hero.y + 18);
    beep(manual ? 1040 : 760, manual ? 0.058 : 0.024, "sine", manual ? 0.04 : 0.013);
  }

  function shootTigerMetal(manual, tier, special) {
    const manualBoost = manual ? 1 : 0;
    const focus = runPerkLevel("focus");
    const combat = runCombatStats();
    const evolved = currentEvolution();
    const base = {
      x: hero.x + 66,
      y: hero.y,
      vx: (manual ? 1080 : 850) + state.level * 15,
      life: (manual ? 1.02 : 0.82) + tier * 0.05,
      pulse: 0,
      kind: "metalTigerSlash",
      manual,
      damage: manual
        ? Math.round((state.attackDamage * 2.55 + 6 + evolved * 1.2 + (special ? 4 : 0)) * (1 + focus * 0.09))
        : Math.max(2, state.attackDamage + 2 + Math.floor(evolved * 0.5) + (special ? 1 : 0)),
      critChance: clamp(combat.crit + (manual ? 13 : 5) + (special ? 6 : 0), 0, manual ? 88 : 72),
      critMult: manual ? 2.04 + focus * 0.06 : 1.72,
      rx: 27 + tier * 2 + manualBoost * 10,
      ry: 16 + tier * 2 + manualBoost * 5,
      pierce: 2 + (tier >= 4 ? 1 : 0) + (tier >= 6 ? 1 : 0) + manualBoost,
      strongBonus: manual ? 0.22 : 0,
      color: special ? "#fff8e8" : "#ffe37a",
      core: "#fff8e8",
    };
    const shots = tier === 1
      ? [base]
      : tier === 2
        ? [{ ...base, y: base.y - 18, vy: -42 }, { ...base, y: base.y + 18, vy: 42 }]
        : [
            { ...base, rx: base.rx + 10, damage: base.damage + 2, variant: "tigerFang" },
            { ...base, y: base.y - 28, vy: -92, color: "#fff8e8" },
            { ...base, y: base.y + 28, vy: 92, color: "#9de8ff" },
          ];
    if (tier >= 5) {
      shots.push(
        { ...base, x: base.x + 18, vx: base.vx + 220, rx: base.rx + 17, ry: base.ry + 5, damage: base.damage + 6, pierce: base.pierce + 3, variant: "tigerFang" },
        { ...base, x: base.x - 22, y: base.y - 56, vy: 150, damage: base.damage + 4, color: "#9de8ff" },
        { ...base, x: base.x - 22, y: base.y + 56, vy: -150, damage: base.damage + 4, color: "#fff8e8" }
      );
    }
    if (tier >= 7) {
      shots.push(
        { ...base, x: base.x + 34, vx: base.vx + 310, rx: base.rx + 22, ry: base.ry + 8, damage: base.damage + 10, pierce: base.pierce + 5, color: "#fff8e8", variant: "tigerFang" },
        { ...base, y: base.y + 62, vy: -190, vx: base.vx + 150, damage: base.damage + 6, pierce: base.pierce + 2, color: "#9de8ff" },
        { ...base, y: base.y - 62, vy: 190, vx: base.vx + 150, damage: base.damage + 6, pierce: base.pierce + 2, color: "#ffe37a" }
      );
    }
    if (tier >= 8) {
      shots.push(
        { ...base, x: base.x + 46, y: base.y - 4, vx: base.vx + 390, rx: base.rx + 30, ry: base.ry + 12, damage: base.damage + 14, pierce: base.pierce + 6, color: "#fff8e8", core: "#9de8ff", variant: "tigerFang" }
      );
    }
    pushProjectiles(shots);
    if (manual) {
      const reach = 390 * playScale();
      const lane = 118 * playScale();
      for (let i = hazards.length - 1; i >= 0; i -= 1) {
        const h = hazards[i];
        if (h.type !== "toilet" || h.x < hero.x - 18 || h.x > hero.x + reach || Math.abs(h.y - hero.y) > lane) continue;
        h.hp -= Math.max(2, Math.round(state.attackDamage * 0.88));
        h.hit = Math.max(h.hit || 0, 0.28);
        h.slow = Math.max(h.slow || 0, 0.34);
        if (h.hp <= 0) destroyHazard(i, h);
      }
      if (boss && boss.x < hero.x + reach + boss.w * 0.5 && Math.abs(boss.y - hero.y) < lane + boss.h * 0.34) {
        const slashDamage = Math.max(6, Math.round((state.attackDamage * 1.65 + currentHeroLevel() * 0.08) * styleMultiplier() * bossBreakDamageMultiplier()));
        boss.hp -= slashDamage;
        recordRunStat("bossDamage", slashDamage);
        if (state.gameMode === "daily") state.dailyDamage += slashDamage;
        boss.hit = Math.max(boss.hit || 0, 0.32);
        addBossBreakPressure(bossBreakGain("manual") * 0.26, boss.x, boss.y);
        if (boss && boss.hp <= 0) defeatBoss();
      }
      state.shake = Math.max(state.shake, 3.4);
    }
    pop(hero.x + 56, hero.y, "#fff8e8", manual ? 24 : 9);
    addTrail(hero.x - 38, hero.y + 18);
    beep(manual ? 880 : 680, manual ? 0.06 : 0.024, "sawtooth", manual ? 0.052 : 0.015);
  }

  function nearestHazardY(fallback) {
    let best = null;
    let bestDist = Infinity;
    for (const h of hazards) {
      if (h.type === "pipeTop" || h.type === "pipeBottom") continue;
      if (h.x < hero.x) continue;
      const dist = Math.abs(h.x - hero.x);
      if (dist < bestDist) {
        bestDist = dist;
        best = h;
      }
    }
    return best ? best.y : fallback;
  }

  function useUltimate() {
    if (state.mode !== "playing") return;
    const cost = ultimateEnergyCost();
    if (state.ultimateCooldown > 0 || state.energy < cost) {
      beep(130, 0.04, "square", 0.02);
      return;
    }
    state.energy = Math.max(0, state.energy - cost);
    state.ultimateKind = heroProfile().ultimate || "poop";
    state.ultimateTimer = ULTIMATE_DURATION;
    state.ultimateCooldown = Math.max(8, (ULTIMATE_COOLDOWN - runPerkLevel("overcharge") * 1.2) * (runModifier().cooldown || 1));
    state.ultimatePulse = 0;
    state.ultimateBreakTick = 0;
    state.shake = Math.max(state.shake, 8);
    state.eventName = ultimateSkillName();
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.2);
    recordRunStat("ultimates", 1);
    const color = state.ultimateKind === "dragonWood" ? "#35d07f" : state.ultimateKind === "voidChef" ? "#33f0df" : state.ultimateKind === "neonMedic" ? "#54d0ff" : state.ultimateKind === "tigerMetal" ? "#fff8e8" : state.ultimateKind === "jet" ? "#9de8ff" : state.ultimateKind === "alchemist" ? "#a7f04a" : state.ultimateKind === "paper" ? "#fff8e8" : state.ultimateKind === "ikun" ? "#fff3c4" : "#f5c84b";
    pop(hero.x + 72 * playScale(), hero.y, color, 34);
    beep(state.ultimateKind === "tigerMetal" ? 760 : state.ultimateKind === "voidChef" ? 300 : state.ultimateKind === "neonMedic" ? 980 : state.ultimateKind === "dragonWood" ? 540 : state.ultimateKind === "paper" ? 920 : state.ultimateKind === "ikun" ? 520 : state.ultimateKind === "jet" ? 620 : 180, 0.08, "sawtooth", 0.05);
    setTimeout(() => beep(state.ultimateKind === "tigerMetal" ? 1180 : state.ultimateKind === "voidChef" ? 560 : state.ultimateKind === "neonMedic" ? 1320 : state.ultimateKind === "dragonWood" ? 820 : state.ultimateKind === "alchemist" ? 360 : state.ultimateKind === "paper" ? 1180 : state.ultimateKind === "ikun" ? 860 : 420, 0.1, "sawtooth", 0.045), 80);
  }

  function eventClientPoint(event) {
    const touch = event && event.touches && event.touches[0]
      ? event.touches[0]
      : event && event.changedTouches && event.changedTouches[0]
        ? event.changedTouches[0]
        : null;
    return {
      x: event && event.clientX !== undefined ? event.clientX : touch ? touch.clientX : undefined,
      y: event && event.clientY !== undefined ? event.clientY : touch ? touch.clientY : undefined,
    };
  }

  function clearStrongTapBuffer() {
    state.lastCanvasTapAt = 0;
    state.lastCanvasTapX = -9999;
    state.lastCanvasTapY = -9999;
  }

  function strongAttackReady() {
    return state.mode === "playing"
      && state.shootCooldown <= 0
      && state.energy >= manualEnergyCost()
      && performance.now() - (state.lastHeroAttackAt || 0) >= HERO_MIN_ATTACK_INTERVAL * 1000
      && performance.now() - (state.lastShotAt || 0) >= manualShootInterval();
  }

  function handleCanvasPress(event) {
    event.preventDefault();
    if (state.mode !== "playing") {
      resetGame();
      return;
    }
    const bounds = canvas.getBoundingClientRect();
    const point = eventClientPoint(event);
    const x = (point.x === undefined ? bounds.left : point.x) - bounds.left;
    const attackZone = isAttackZone(x, bounds.width);
    if (state.controlMode === "drag") {
      clearStrongTapBuffer();
      if (heroFreeMove() || !attackZone) startDragMove(event, bounds);
      return;
    }
    clearStrongTapBuffer();
    setFly(true);
  }

  function isAttackZone(x, width) {
    const leftSide = x < width * 0.5;
    return state.controlLayout === "leftAttack" ? leftSide : !leftSide;
  }

  function handleCanvasMove(event) {
    if (state.dragPointerId === null) return;
    if (event.pointerId !== undefined && event.pointerId !== state.dragPointerId) return;
    event.preventDefault();
    const bounds = canvas.getBoundingClientRect();
    const point = eventClientPoint(event);
    if (point.y === undefined) return;
    if (heroFreeMove()) {
      const xBounds = heroXBounds();
      const canvasX = point.x === undefined ? state.dragLastX : point.x - bounds.left;
      const canvasY = point.y - bounds.top;
      const lastX = Number.isFinite(state.dragLastX) ? state.dragLastX : canvasX;
      const lastY = Number.isFinite(state.dragLastY) ? state.dragLastY : canvasY;
      const slideScale = isLandscapePlay() ? 1.08 : 1.02;
      state.dragTargetX = clamp((state.dragTargetX || hero.x) + (canvasX - lastX) * slideScale, xBounds.left, xBounds.right);
      state.dragTargetY = clamp((state.dragTargetY || hero.y) + (canvasY - lastY) * slideScale, playTop() + hero.radiusY, playBottom() - hero.radiusY);
      state.dragLastX = canvasX;
      state.dragLastY = canvasY;
      return;
    }
    state.dragTargetY = clamp(point.y - bounds.top, playTop() + hero.radiusY, playBottom() - hero.radiusY);
  }

  function releaseCanvasControl(event) {
    const pointerId = event ? event.pointerId : undefined;
    if (state.dragPointerId !== null && (pointerId === undefined || pointerId === state.dragPointerId)) {
      state.dragPointerId = null;
      state.dragLastX = hero.x;
      state.dragLastY = hero.y;
      try {
        if (pointerId !== undefined) canvas.releasePointerCapture(pointerId);
      } catch {}
    }
    setFly(false);
  }

  function startDragMove(event, bounds) {
    const point = eventClientPoint(event);
    state.dragPointerId = event.pointerId === undefined ? -1 : event.pointerId;
    const canvasX = point.x === undefined ? hero.x : point.x - bounds.left;
    const canvasY = point.y === undefined ? hero.y : point.y - bounds.top;
    state.dragLastX = canvasX;
    state.dragLastY = canvasY;
    if (heroFreeMove()) {
      const xBounds = heroXBounds();
      state.dragTargetX = clamp(state.dragTargetX || hero.x, xBounds.left, xBounds.right);
      state.dragTargetY = clamp(state.dragTargetY || hero.y, playTop() + hero.radiusY, playBottom() - hero.radiusY);
    } else {
      state.dragTargetX = hero.x;
      state.dragTargetY = clamp(canvasY, playTop() + hero.radiusY, playBottom() - hero.radiusY);
    }
    hero.vy = 0;
    try {
      canvas.setPointerCapture(state.dragPointerId);
    } catch {}
  }

  function damageHero(amount) {
    if (hero.invuln > 0) return;
    const stats = runCombatStats();
    const dodgeChance = state.gameMode === "daily" ? stats.dodge * 0.72 : stats.dodge;
    if (Math.random() * 100 < dodgeChance) {
      hero.invuln = 0.42;
      state.eventName = "闪避";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.75);
      recordRunStat("nearMisses", 1);
      addMountCharge(22);
      gainStyle(12, "闪避", "#dfff7a");
      pop(hero.x, hero.y, "#dfff7a", 12);
      beep(760, 0.04, "triangle", 0.025);
      return;
    }
    if (state.mirrorGuardTimer > 0) {
      state.mirrorGuardTimer = Math.max(0, state.mirrorGuardTimer * 0.42 - 0.12);
      state.mirrorCharge = clamp((state.mirrorCharge || 0) + 28, 0, 100);
      state.mirrorPulse = Math.max(state.mirrorPulse || 0, 0.9);
      hero.invuln = 0.46;
      state.shake = Math.max(state.shake, 4.5);
      state.eventName = "镜流折返";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.95);
      gainStyle(12, "镜流折返", "#8ff7ff");
      triggerMirrorBurst(hero.x + 72 * playScale(), hero.y, { guard: true });
      return;
    }
    if (state.shieldTimer > 0) {
      state.shieldTimer = Math.max(0, state.shieldTimer - 2.2);
      hero.invuln = 0.45;
      state.shake = Math.max(state.shake, 4);
      pop(hero.x, hero.y, "#9de8ff", 12);
      beep(620, 0.05, "triangle", 0.035);
      return;
    }
    hero.invuln = 1.0;
    state.hurtFlashTimer = Math.max(state.hurtFlashTimer, 0.28);
    if (state.gameMode === "daily" && boss) {
      const basePercent = (boss.profile && boss.profile.percentDamage) || 0.055;
      const ramp = 0.5 + Math.min(1.05, (state.time / 60) * 1.05) + (boss.enraged ? 0.12 : 0);
      const percentScale = clamp(boss.damageScale || 1, 0.7, 1.05);
      amount = Math.max(amount, state.maxHealth * basePercent * ramp * percentScale);
    }
    amount *= 1 - Math.min(0.36, stats.guard * 0.006);
    recordRunStat("damageTaken", amount);
    if (isStageMode() && state.stageHitLimit > 0) {
      state.hitsTaken += 1;
      if (state.hitsTaken >= state.stageHitLimit) {
        state.stageFailReason = `受击 ${state.hitsTaken}/${state.stageHitLimit}`;
        state.health = 0;
        gameOver();
        return;
      }
    }
    state.recoveryTimer = Math.max(state.recoveryTimer, 4.4);
    state.pickupTimer = Math.min(state.pickupTimer, 0.22);
    if (!boss) {
      state.eventName = "缓冲补给";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.1);
    }
    state.health = clamp(state.health - amount, 0, state.maxHealth);
    const comboGuard = runPerkLevel("comboGuard");
    const sigilGuard = state.comboSurgeTimer > 0 ? 1 : 0;
    if ((comboGuard > 0 || sigilGuard > 0) && state.combo > 0) {
      const keepRatio = clamp(0.28 + comboGuard * 0.12 + sigilGuard * 0.14, 0.28, 0.72);
      state.combo = Math.floor(state.combo * keepRatio);
      state.comboTimer = state.combo > 0 ? 1.35 + comboGuard * 0.35 + sigilGuard * 0.2 : 0;
      state.styleScore = Math.max(0, state.styleScore - Math.max(12, 34 - comboGuard * 5 - sigilGuard * 6));
      state.styleTimer = Math.max(state.styleTimer, 1.8);
      if (sigilGuard) state.comboSurgeTimer *= 0.42;
      state.eventName = comboGuard > 0 ? "连击护符" : "祭印余光";
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.9);
    } else {
      state.combo = 0;
      state.comboTimer = 0;
      state.styleScore = Math.max(0, state.styleScore - 34);
      state.styleTimer = 0;
      state.nextComboReward = 8;
      state.nextFeverCombo = 12;
      state.comboSurgeTimer = 0;
    }
    state.draftTimer = 0;
    state.feverTimer = 0;
    state.shake = 9;
    pop(hero.x, hero.y, "#e44943", 13);
    beep(95, 0.08, "sawtooth", 0.045);
    if (state.health <= 0) {
      if (!state.reviveUsed && runItemAvailable("revive")) {
        state.reviveUsed = true;
        consumeRunItem("revive");
        state.health = Math.max(1, state.maxHealth * 0.46);
        state.energy = Math.max(state.energy, state.maxEnergy * 0.55);
        state.shieldTimer = Math.max(state.shieldTimer, 5.5);
        state.recoveryTimer = Math.max(state.recoveryTimer, 5.2);
        hero.invuln = 1.8;
        saveMeta();
        showRewardToast([{ type: "revive", label: "复活心核", amount: 1 }], { duration: 1800 });
        state.eventName = "复活心核";
        state.eventLabelTimer = 1.6;
        pop(hero.x, hero.y, "#ff8d54", 28);
        return;
      }
      gameOver();
    }
  }

  function splashDamageFrom(x, y, strength = 1) {
    const level = runPerkLevel("splash");
    if (level <= 0) return;
    const radius = (96 + level * 24) * playScale();
    const damage = 1.2 + level * 0.7 + state.attackDamage * 0.24;
    let hits = 0;
    for (let i = hazards.length - 1; i >= 0; i -= 1) {
      const target = hazards[i];
      if (!target || target.type !== "toilet") continue;
      if (Math.hypot(target.x - x, target.y - y) > radius) continue;
      target.hp -= damage * strength;
      target.hit = 0.14;
      hits += 1;
      pop(target.x, target.y, "#8b4f25", 5);
      if (target.hp <= 0) {
        hazards.splice(i, 1);
        state.combo += target.elite ? 2 : 1;
        gainXp(28 + state.level * 2);
        recordRunStat("kills", 1);
        if (target.elite) recordRunStat("eliteKills", 1);
        dropEquipment(target.elite ? "elite" : "mob", state.level + (target.elite ? 4 : 0));
      }
    }
    if (hits > 0) {
      addRoundedScore((58 + hits * 20) * state.scoreBonus);
      gainStyle(4 + hits * 2, "臭弹连爆", "#8b4f25");
    }
  }

  function destroyHazard(index, h, reward = true) {
    hazards.splice(index, 1);
    pop(h.x, h.y, h.treasure ? "#ffe37a" : h.elite ? "#ff8d54" : "#f5c84b", h.treasure ? 30 : h.elite ? 26 : 18);
    state.shake = Math.max(state.shake, h.treasure ? 7 : h.elite ? 6 : 4);
    if (reward) {
      splashDamageFrom(h.x, h.y, h.elite ? 1.4 : h.treasure ? 1.2 : 1);
      const treasureBonus = h.treasure ? 2.25 + runPerkLevel("jackpot") * 0.28 : 1;
      const eliteBonus = (h.elite ? 1.85 : 1) * treasureBonus;
      addRoundedScore((120 + state.combo * 12) * state.scoreBonus * eliteBonus);
      gainXp((58 + state.level * 4) * eliteBonus);
      state.combo += h.elite ? 2 : 1;
      if (h.treasure) state.combo += 2;
      state.comboTimer = 2.7;
      gainStyle(h.treasure ? 14 : h.elite ? 10 : 6, h.treasure ? "宝藏击破" : h.elite ? "精英击破" : "", h.treasure ? "#ffe37a" : h.elite ? "#ff8d54" : "#f5c84b");
      recordRunStat("kills", 1);
      if (h.elite) recordRunStat("eliteKills", 1);
      if (h.treasure) recordRunStat("treasureKills", 1);
      recordRunStat("maxCombo", state.combo);
      if (h.elite || h.treasure) {
        addAdventureRouteProgress(h.treasure ? 9 : 5.5, {
          intel: h.elite && Math.random() < 0.35 ? 1 : 0,
          cargo: h.treasure ? 1 : 0,
          label: h.treasure ? "宝藏航标" : "精英航标",
          major: !!h.treasure,
        });
      }
      const leech = runPerkLevel("leech");
      if (leech > 0) {
        state.health = clamp(state.health + 3.5 * leech + state.maxHealth * 0.012, 0, state.maxHealth);
        state.energy = clamp(state.energy + 4.5 * leech, 0, state.maxEnergy);
      }
      let droppedPickup = false;
      if (h.treasure) {
        const coins = runCoinReward(Math.round((28 + state.level * 5) * (1 + runPerkLevel("jackpot") * 0.18)));
        const materials = runMaterialReward(Math.round((2 + state.level * 0.18) * (1 + runPerkLevel("jackpot") * 0.16)));
        meta.coins += coins;
        meta.materials += materials;
        saveMeta();
        showRewardToast([
          { type: "coin", amount: coins },
          { type: "material", amount: materials },
        ]);
        spawnTreasureBurst(h.x, h.y, 1 + runPerkLevel("jackpot") * 0.5);
        droppedPickup = true;
        state.eventName = "宝藏马桶击破";
        state.eventLabelTimer = Math.max(state.eventLabelTimer, 1.1);
      }
      if (h.elite && !droppedPickup) {
        state.eventName = "精英击破";
        state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.9);
        const eliteWaveReward = state.eventKind === "eliteWave";
        const roll = Math.random();
        const type = eliteWaveReward
          ? roll > 0.82
            ? "mysteryCapsule"
            : roll > 0.58
              ? "focusOrb"
              : roll > 0.34
                ? "energy"
                : "bonusPaper"
          : "bonusPaper";
        addPickup({
          type,
          x: h.x,
          y: h.y,
          r: pickupRadius(type),
          strength: eliteWaveReward ? 1.15 : 1,
          phase: random(0, 6.28),
        }, true);
        droppedPickup = true;
      }
      if (!droppedPickup && runPerkLevel("jackpot") > 0 && Math.random() < 0.08 + runPerkLevel("jackpot") * 0.025) {
        addPickup({
          type: "bonusPaper",
          x: h.x,
          y: h.y,
          r: pickupRadius("bonusPaper"),
          phase: random(0, 6.28),
        }, true);
        droppedPickup = true;
      }
      maybeStartFever();
      dropEquipment(h.elite || h.treasure ? "elite" : "mob", state.level + (h.elite ? 4 : 0) + (h.treasure ? 3 : 0));
    }
  }

  function maybeStartFever() {
    recordRunStat("maxCombo", state.combo);
    checkComboReward();
    if (state.combo < state.nextFeverCombo || state.feverTimer > 0) return;
    state.feverTimer = 6.5;
    state.nextFeverCombo += 10;
    state.eventName = "狂热模式";
    state.eventLabelTimer = 1.3;
    state.shake = Math.max(state.shake, 5);
    pop(hero.x, hero.y, "#f5c84b", 22);
    beep(980, 0.08, "triangle", 0.045);
  }

  function checkComboReward() {
    if (state.mode !== "playing" || state.combo < state.nextComboReward) return;
    const milestone = state.nextComboReward;
    state.nextComboReward += milestone < 24 ? 8 : 10;
    const s = playScale();
    const top = playTop() + 34 * s;
    const bottom = playBottom() - 34 * s;
    const mysteryChance = milestone >= 24 ? 0.12 + runPerkLevel("mystery") * 0.12 : runPerkLevel("mystery") > 0 ? 0.08 : 0;
    const sigilChance = state.comboSurgeTimer > 0 && milestone >= 16 ? 0.16 : 0;
    const rewardType = Math.random() < sigilChance ? "comboSigil" : Math.random() < mysteryChance ? "mysteryCapsule" : milestone % 24 === 0 ? "energy" : milestone % 16 === 0 ? "shield" : "bonusPaper";
    addPickup({
      type: rewardType,
      x: Math.min(state.width - 70 * s, hero.x + 210 * s),
      y: clamp(hero.y + random(-42, 42) * s, top, bottom),
      r: pickupRadius(rewardType, s, 1.15 + runPerkLevel("mystery") * 0.16),
      phase: random(0, 6.28),
      strength: rewardType === "mysteryCapsule" || rewardType === "comboSigil" ? 1.15 + runPerkLevel("mystery") * 0.16 : 1,
    }, true);
    state.energy = clamp(state.energy + 8 + Math.min(18, milestone * 0.45), 0, state.maxEnergy);
    state.eventName = `连击奖励 ${milestone}`;
    state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.95);
    gainStyle(7, `连击奖励 ${milestone}`, "#f5c84b");
    pop(hero.x + 28 * s, hero.y - 8 * s, rewardType === "shield" ? "#9de8ff" : rewardType === "energy" ? "#54d0ff" : "#f5c84b", 10);
  }

  function addTrail(x, y) {
    const budget = effectBudget();
    if (particles.length > budget.particles || Math.random() > budget.trail) return;
    particles.push({
      x,
      y,
      vx: random(-130, -42),
      vy: random(-24, 32),
      size: random(3, 9),
      color: Math.random() > 0.5 ? "#fff0a8" : "#a8ff91",
      life: random(0.18, 0.34),
      maxLife: 0.34,
    });
  }

  function pop(x, y, color, count) {
    const budget = effectBudget();
    const capped = Math.min(
      Math.max(1, Math.round(count * budget.pop)),
      Math.max(0, budget.particles - particles.length)
    );
    for (let i = 0; i < capped; i += 1) {
      const a = random(0, Math.PI * 2);
      const s = random(70, 270);
      particles.push({
        x,
        y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        size: random(3, 9),
        color,
        life: random(0.34, 0.7),
        maxLife: 0.7,
      });
    }
  }

  function updateHud() {
    const scoreValue = state.gameMode === "daily" ? Math.floor(state.dailyDamage) : Math.floor(state.score);
    scoreText.textContent = formatScore(scoreValue);
    scoreText.title = String(scoreValue);
    if (bestLabel) bestLabel.textContent = state.gameMode === "daily" ? "剩余" : isStageMode() ? "目标" : "最佳";
    const bestValue = Math.max(state.best, Math.floor(state.score));
    const stageTarget = state.stageTarget || (isStageMode() ? activeStage().target : 0);
    bestText.textContent = state.gameMode === "daily"
      ? `${Math.ceil(state.dailyTimeLeft)}s`
      : isStageMode()
        ? formatScore(stageTarget)
        : formatScore(bestValue);
    bestText.title = state.gameMode === "daily"
      ? `${Math.ceil(state.dailyTimeLeft)} 秒`
      : isStageMode()
        ? `${Math.floor(state.score)}/${stageTarget}`
        : String(bestValue);
    levelText.textContent = String(state.level);
    if (runPowerText) runPowerText.textContent = formatCombatPower(runHeroCombatPower());
    const interactiveEventText = state.eventKind === "goldRush"
      ? `黄金纸潮 ${Math.floor(state.goldRushCharge || 0)}%`
      : state.eventKind === "draftGate"
        ? `顺风门阵 ${Math.floor(state.draftLaneCharge || 0)}%`
        : state.eventKind === "mysteryRoute"
          ? `奇遇航线 ${Math.floor(state.mysteryLaneCharge || 0)}%`
          : adventureCurrentActive()
            ? `云海顺流 ${Math.floor(state.adventureCurrentCharge || 0)}%`
            : starTrailActive()
              ? `星轨蓄能 ${Math.floor(state.starTrailCharge || 0)}%`
              : mirrorCurrentActive()
                ? `镜流蓄能 ${Math.floor(state.mirrorCharge || 0)}%`
                : auroraForgeActive()
                  ? `铸炉热量 ${Math.floor(state.forgeHeat || 0)}%`
                  : "";
    if (state.specialTimer > 0) {
      powerText.textContent = `黄金便便 ${Math.ceil(state.specialTimer)}s`;
    } else if (state.shieldTimer > 0) {
      powerText.textContent = `护盾 ${Math.ceil(state.shieldTimer)}s`;
    } else if (state.magnetTimer > 0) {
      powerText.textContent = `磁铁 ${Math.ceil(state.magnetTimer)}s`;
    } else if (interactiveEventText) {
      powerText.textContent = interactiveEventText;
    } else if (state.eventLabelTimer > 0 && state.eventName) {
      powerText.textContent = state.eventName;
    } else if (state.eventKind === "cleanWind") {
      powerText.textContent = `清风恢复 ${Math.ceil(state.eventTimer)}s`;
    } else if (state.bossRewardTimer > 0) {
      powerText.textContent = "BOSS 奖励";
    } else if (state.feverTimer > 0) {
      powerText.textContent = `狂热 ${Math.ceil(state.feverTimer)}s`;
    } else if (state.draftTimer > 0) {
      powerText.textContent = `顺风 ${Math.ceil(state.draftTimer)}s · 技巧 ${styleRank().label}`;
    } else if (state.comboSurgeTimer > 0) {
      powerText.textContent = `连击祭坛 ${Math.ceil(state.comboSurgeTimer)}s`;
    } else if (state.elementSurgeTimer > 0) {
      const element = elementCoreInfo(state.elementSurgeKind || "wood");
      powerText.textContent = `五行${element.label} ${Math.ceil(state.elementSurgeTimer)}s`;
    } else if (state.mirrorGuardTimer > 0) {
      powerText.textContent = `镜流护身 ${Math.ceil(state.mirrorGuardTimer)}s`;
    } else if (state.forgeTempoTimer > 0) {
      powerText.textContent = `铸炉节奏 ${Math.ceil(state.forgeTempoTimer)}s`;
    } else if (state.adventureContractBoostTimer > 0) {
      const contract = adventureContractForStage();
      powerText.textContent = `${contract ? contract.short : "契约"}签章 ${Math.ceil(state.adventureContractBoostTimer)}s`;
    } else if (state.adventureSupportTimer > 0) {
      powerText.textContent = `远征支援 ${Math.ceil(state.adventureSupportTimer)}s`;
    } else if (state.adventureBoostTimer > 0) {
      powerText.textContent = `顺流加速 ${Math.ceil(state.adventureBoostTimer)}s`;
    } else if (state.eventKind === "purificationTide") {
      powerText.textContent = `净化潮汐 ${Math.ceil(state.eventTimer)}s`;
    } else if (state.recoveryTimer > 0) {
      powerText.textContent = `缓冲 ${Math.ceil(state.recoveryTimer)}s`;
    } else if (state.gameMode === "daily") {
      powerText.textContent = "每日伤害";
    } else if (state.gameMode === "adventure") {
      powerText.textContent = adventureStageObjectivesReady() ? "航图契约完成" : adventureRouteReady() ? adventureContractShortText() : adventureRouteShortText();
    } else if (isStageMode() && state.stageHitLimit > 0) {
      const profile = classicStageProfile(activeStage());
      powerText.textContent = classicDistrictReady()
        ? `${profile.short}稳定 · 受击 ${state.hitsTaken}/${state.stageHitLimit}`
        : classicDistrictShortText();
    } else if (isStageMode() && !activeStage().bossStage) {
      const profile = classicStageProfile(activeStage());
      powerText.textContent = classicDistrictReady()
        ? `${profile.hud}稳定 · ${Math.floor(state.score)}/${stageTarget}`
        : classicDistrictShortText();
    } else {
      powerText.textContent = attackName();
    }
    healthBar.style.width = `${clamp((state.health / state.maxHealth) * 100, 0, 100)}%`;
    energyBar.style.width = `${clamp((state.energy / state.maxEnergy) * 100, 0, 100)}%`;
    expBar.style.width = `${clamp((state.xp / state.xpToNext) * 100, 0, 100)}%`;
    if (boss) {
      bossHud.hidden = false;
      const rawBossPower = boss.daily ? syncDailyBossPower() : boss.power || bossCombatPower(boss);
      const bossPower = Math.round(rawBossPower * (boss.breakTimer > 0 ? 0.72 : 1));
      const heroPower = runHeroCombatPower();
      const rating = bossBattleRating(heroPower, bossPower, { daily: boss.daily });
      bossNameText.textContent = `${boss.name} · 战力 ${formatCombatPower(bossPower)}`;
      if (bossPressureText) {
        const breakText = boss.breakTimer > 0
          ? ` · 破防 ${Math.ceil(boss.breakTimer)}s`
          : boss.breakMeter > 0
            ? ` · 破防 ${Math.floor((boss.breakMeter / Math.max(1, bossBreakThreshold())) * 100)}%`
            : "";
        bossPressureText.textContent = `${rating.label} · 我方 ${formatCombatPower(heroPower)} · ${rating.tip}${breakText}`;
      }
      if (bossHud) {
        bossHud.classList.remove("rating-crush", "rating-advantage", "rating-even", "rating-danger", "rating-critical", "rating-challenge", "rating-break");
        bossHud.classList.add(boss.breakTimer > 0 ? "rating-break" : `rating-${rating.key}`);
      }
      bossBar.style.width = `${clamp((boss.hp / boss.maxHp) * 100, 0, 100)}%`;
    } else {
      bossHud.hidden = true;
      if (bossHud) bossHud.classList.remove("rating-crush", "rating-advantage", "rating-even", "rating-danger", "rating-critical", "rating-challenge", "rating-break");
    }
    updateMissionHud();
    updateItemButtons();
  }

  function updateMetaUi() {
    coinText.textContent = String(meta.coins);
    materialText.textContent = String(meta.materials);
    if (poopCoinText) poopCoinText.textContent = String(meta.poopCoins || 0);
    const heroLevel = currentHeroLevel();
    const heroStones = currentHeroStoneCount();
    evoStoneText.textContent = String(heroStones);
    metaLevelText.textContent = String(heroLevel);
    evolutionText.textContent = String(currentEvolution());
    if (activeTitleText) activeTitleText.textContent = meta.activeTitle || "暂无";
    const shownMountLevel = effectiveMountLevel();
    const runCarryText = state.mode === "playing" || state.mode === "perkchoice" ? `本局携带 ${runItemLoadoutText()}` : `入场最多携带 ${RUN_ITEM_SLOT_LIMIT} 种`;
    inventoryText.textContent = `背包：护盾 ${meta.inventory.shield} · 磁铁 ${meta.inventory.magnet} · 能量 ${meta.inventory.energy} · 臭弹 ${meta.inventory.storm} · 重骰 ${meta.inventory.reroll} · 复活 ${meta.inventory.revive} · 羽翼 ${meta.inventory.wing} · 便便币 ${meta.poopCoins || 0} · ${runCarryText} · 坐骑 ${mountProfile().short} Lv.${shownMountLevel} · 僚机 ${activeDroneProfile().short}`;
    updateHeroPageUi();
    if (signInButton) {
      const signed = meta.signIn.lastDate === todayKey();
      signInButton.textContent = signed ? "今日已签" : "每日签到";
      signInButton.disabled = signed;
    }
    if (signInText) {
      const nextDay = meta.signIn.lastDate === todayKey() ? meta.signIn.streak + 1 : meta.signIn.streak + 1;
      const nextUnlock = heroProfiles.find((profile) => profile.unlockDay && !meta.unlockedHeroes[profile.key]);
      const heroText = nextUnlock ? `${heroUnlockText(nextUnlock)}：${nextUnlock.name}` : "签到英雄已全部解锁。";
      signInText.textContent = `签到 ${meta.signIn.streak} 天；下次第 ${nextDay} 天：${dailySignInSummary(nextDay)}。${heroText} ${signInMilestoneText(meta.signIn.streak)}`;
    }
    const sheet = heroSheetStats();
    const power = heroPowerBreakdown();
    if (combatPowerText) combatPowerText.textContent = `战力 ${formatCombatPower(power.total)} · 输出 ${formatCombatPower(power.offense)} · 生存 ${formatCombatPower(power.survival)}`;
    if (attributeText) {
      const daily = dailyBossProfile();
      const dailyStatus = meta.dailyChallenge.date === todayKey() && meta.dailyChallenge.bossDefeated ? "击败奖已领" : "击败奖便便币 +5";
      attributeText.textContent = state.gameMode === "daily"
        ? `今日Boss ${daily.name} · 20x 实时战力 · 已领奖伤害 ${meta.dailyChallenge.date === todayKey() ? meta.dailyChallenge.rewardedDamage : 0} · ${dailyStatus}`
        : `生命 ${sheet.health} · 能量 ${sheet.energy} · 攻击 ${sheet.attack} · 暴击 ${Math.round(sheet.crit)}% · 闪避 ${Math.round(sheet.dodge)}% · 韧性 ${Math.round(sheet.guard)} · 回复 ${Math.round(sheet.regen)} · 攻速 ${Math.round(sheet.haste)} · 幸运 ${sheet.luck}`;
    }
    if (equipmentText) {
      equipmentText.textContent = equipmentSlots
        .map((slot) => {
          const item = meta.equipped[slot.key];
          return `${slot.name} ${item ? item.name : "-"}`;
        })
        .join(" · ");
    }
    endlessModeButton.classList.toggle("is-selected", state.gameMode === "endless");
    stageModeButton.classList.toggle("is-selected", state.gameMode === "stage");
    if (adventureModeButton) adventureModeButton.classList.toggle("is-selected", state.gameMode === "adventure");
    if (dailyModeButton) dailyModeButton.classList.toggle("is-selected", state.gameMode === "daily");
    const trialHero = heroTrialSelected();
    upgradeHeroButton.textContent = trialHero ? "试用不可升级" : `升级 ${upgradeCost().coins}金/${upgradeCost().materials}材`;
    upgradeHeroButton.disabled = trialHero;
    evolveHeroButton.textContent = trialHero ? "试用不可进化" : `进化 ${evolveCost().materials}材/${evolveCost().stones}石`;
    evolveHeroButton.disabled = trialHero;
    renderStageGrid();
    renderStageSummary();
    renderMailPage();
    renderMountPage();
    renderDronePage();
    renderEquipmentPage();
    renderAchievementPage();
    refreshShopCards();
    updateTrialAccessUi();
    updateItemButtons();
  }

  function sellEquipmentValue(item) {
    if (!item) return 0;
    const qIndex = qualityIndex(item.quality);
    return Math.max(20, Math.round(equipmentPower(item) * (1.1 + qIndex * 0.24) + item.level * 8));
  }

  function sellEquipment(itemId) {
    const index = meta.equipmentBag.findIndex((item) => item && item.id === itemId);
    if (index < 0) return;
    const [item] = meta.equipmentBag.splice(index, 1);
    const coins = sellEquipmentValue(item);
    meta.coins += coins;
    saveMeta();
    panelCopy.textContent = `已出售 ${item.name}，获得 ${coins} 金币。`;
    showRewardToast([{ type: "coin", amount: coins }]);
    renderEquipmentPage();
    beep(680, 0.05, "sine", 0.03);
  }

  function sellEquipmentBatch(mode) {
    const bag = meta.equipmentBag || [];
    const sellable = mode === "all"
      ? bag.slice()
      : bag.filter((item) => qualityIndex(item.quality) <= 2);
    if (sellable.length === 0) {
      panelCopy.textContent = mode === "all" ? "背包里没有可出售装备。" : "没有白、绿、蓝品质的低品装备可一键出售。";
      return;
    }
    const ids = new Set(sellable.map((item) => item.id));
    const coins = sellable.reduce((sum, item) => sum + sellEquipmentValue(item), 0);
    meta.equipmentBag = bag.filter((item) => !ids.has(item.id));
    meta.coins += coins;
    saveMeta();
    panelCopy.textContent = `已出售 ${sellable.length} 件装备，获得 ${coins} 金币。`;
    showRewardToast([{ type: "coin", amount: coins }]);
    renderEquipmentPage();
    beep(720, 0.07, "triangle", 0.035);
  }

  function renderEquipmentPage() {
    if (!equippedGrid || !equipmentBagGrid) return;
    equippedGrid.innerHTML = "";
    for (const slot of equipmentSlots) {
      equippedGrid.appendChild(createEquipmentCard(meta.equipped[slot.key], slot.name));
    }
    if (sellWeakEquipmentButton) {
      sellWeakEquipmentButton.disabled = !(meta.equipmentBag || []).some((item) => qualityIndex(item.quality) <= 2);
    }
    if (sellAllEquipmentButton) {
      sellAllEquipmentButton.disabled = !(meta.equipmentBag || []).length;
    }
    equipmentBagGrid.innerHTML = "";
    const bag = (meta.equipmentBag || []).slice(0, 24);
    if (bag.length === 0) {
      const empty = document.createElement("div");
      empty.className = "equipment-card";
      empty.style.gridColumn = "1 / -1";
      empty.innerHTML = '<div class="equipment-name">暂无备用装备</div><div class="equipment-stat">击败 BOSS 或小怪有概率掉落</div>';
      equipmentBagGrid.appendChild(empty);
      return;
    }
    for (const item of bag) {
      equipmentBagGrid.appendChild(createEquipmentCard(item, "", true));
    }
  }

  function renderAchievementPage() {
    if (!achievementGrid) return;
    const unlockedCount = achievementDefinitions.filter(achievementUnlocked).length;
    if (achievementSummary) {
      const stats = normalizeStats(meta.stats);
      const title = meta.activeTitle || "暂无称号";
      achievementSummary.textContent = `已解锁 ${unlockedCount}/${achievementDefinitions.length} · 当前 ${title} · 累计分数 ${formatScore(stats.totalScore)} · 最佳连击 ${stats.bestCombo}`;
    }
    achievementGrid.innerHTML = "";
    for (const achievement of achievementDefinitions) {
      const unlocked = achievementUnlocked(achievement);
      const progress = achievementProgress(achievement);
      const capped = Math.min(progress, achievement.target);
      const card = document.createElement(achievement.title && unlocked ? "button" : "div");
      card.className = `achievement-card${unlocked ? " is-unlocked" : ""}${achievement.title && meta.activeTitle === achievement.title ? " is-active" : ""}`;
      if (card.tagName === "BUTTON") {
        card.type = "button";
        card.addEventListener("click", () => {
          meta.activeTitle = achievement.title;
          saveMeta();
          panelCopy.textContent = `已佩戴称号：${achievement.title}。`;
          beep(860, 0.06, "triangle", 0.035);
        });
      }
      const badge = document.createElement("span");
      badge.className = "achievement-badge";
      badge.textContent = unlocked ? "✓" : String(achievementGrid.children.length + 1);
      const body = document.createElement("span");
      body.className = "achievement-body";
      const title = document.createElement("strong");
      title.textContent = achievement.name;
      const desc = document.createElement("span");
      desc.textContent = achievement.desc;
      const progressText = document.createElement("span");
      progressText.className = "achievement-progress-text";
      progressText.textContent = `${formatScore(capped)}/${formatScore(achievement.target)} · ${unlocked ? achievement.title ? (meta.activeTitle === achievement.title ? "佩戴中" : "点按佩戴称号") : "已完成" : `奖励 ${formatAchievementReward(tunedAchievementReward(achievement))}`}`;
      const bar = document.createElement("i");
      bar.className = "achievement-bar";
      const fill = document.createElement("b");
      fill.style.width = `${clamp((capped / achievement.target) * 100, 0, 100)}%`;
      bar.appendChild(fill);
      body.append(title, desc, progressText, bar);
      card.append(badge, body);
      achievementGrid.appendChild(card);
    }
  }

  function createEquipmentCard(item, emptyName = "", inBag = false) {
    const card = document.createElement("div");
    card.className = "equipment-card";
    const icon = document.createElement("div");
    icon.className = `equipment-icon${item ? "" : " is-empty"}`;
    if (item) {
      const quality = qualityByKey(item.quality);
      icon.style.backgroundPosition = equipmentIconPosition(item);
      card.style.borderColor = quality.color;
      card.style.boxShadow = `inset 0 0 0 1px ${quality.color}33`;
    }
    const name = document.createElement("div");
    name.className = "equipment-name";
    name.textContent = item ? item.name : `${emptyName} 空`;
    const stat = document.createElement("div");
    stat.className = "equipment-stat";
    stat.textContent = item ? equipmentStatText(item) : "等待掉落";
    card.append(icon, name, stat);
    if (item && inBag) {
      const sellButton = document.createElement("button");
      sellButton.type = "button";
      sellButton.className = "equipment-sell-button";
      sellButton.textContent = `出售 +${sellEquipmentValue(item)}`;
      sellButton.addEventListener("click", (event) => {
        event.stopPropagation();
        sellEquipment(item.id);
      });
      card.appendChild(sellButton);
    }
    return card;
  }

  function startHeroTrial(key) {
    const profile = heroProfile(key);
    if (meta.unlockedHeroes[profile.key]) {
      selectHero(profile.key);
      return;
    }
    if (!heroTrialAvailable(profile)) {
      panelCopy.textContent = `${profile.name}暂不开放试用，${heroUnlockText(profile)}。`;
      return;
    }
    ensureTrialMeta();
    meta.trialHero = profile.key;
    meta.selectedHero = profile.key;
    state.ultimateKind = profile.ultimate || "poop";
    const reward = grantFirstTrialReward("hero", profile.key, profile.name);
    saveMeta();
    refreshHeroStatsFromMeta();
    updateMetaUi();
    panelCopy.textContent = reward
      ? `首次试用 ${profile.name}，已发放金币、材料和普通道具奖励；正式拥有仍需完成签到。${trialAccessSummary()}`
      : `${profile.name}试用中，正式拥有仍需完成签到。${trialAccessSummary()}`;
    beep(880, 0.075, "triangle", 0.04);
  }

  function updateHeroPageUi() {
    if (!heroGrid) return;
    heroGrid.innerHTML = "";
    for (const profile of heroProfiles) {
      const unlocked = !!meta.unlockedHeroes[profile.key];
      const trialAvailable = heroTrialAvailable(profile);
      const trialSelected = heroTrialSelected(profile.key);
      const selected = meta.selectedHero === profile.key;
      const card = document.createElement("div");
      card.className = `hero-card hero-card-${profile.key}`;
      card.classList.toggle("is-selected", selected);
      card.classList.toggle("is-locked", !unlocked);
      card.classList.toggle("is-trial", trialSelected);
      const portrait = document.createElement("div");
      portrait.className = `hero-portrait hero-${profile.key}`;
      const name = document.createElement("div");
      name.className = "hero-card-name";
      name.textContent = profile.name;
      const stat = document.createElement("div");
      stat.className = "hero-card-stat";
      stat.textContent = trialAvailable && !unlocked ? `${profile.stat} · 可试用` : profile.stat;
      const actions = document.createElement("div");
      actions.className = "hero-card-actions";
      const button = document.createElement("button");
      button.type = "button";
      if (trialAvailable) {
        button.textContent = trialSelected && selected ? "试用中" : trialRewardClaimed("hero", profile.key) ? "试用" : "试用领奖";
        button.disabled = trialSelected && selected;
        button.className = "trial-button";
        button.addEventListener("click", () => startHeroTrial(profile.key));
      } else {
        button.textContent = selected ? "出战中" : unlocked ? "选择" : heroUnlockButtonText(profile);
        button.disabled = selected || !unlocked;
        button.addEventListener("click", () => selectHero(profile.key));
      }
      actions.appendChild(button);
      card.append(portrait, name, stat, actions);
      heroGrid.appendChild(card);
    }
  }

  function mountUpgradeCost(key) {
    const profile = mountProfile(key);
    if (profile.key === "none") return { coins: 0, materials: 0 };
    const level = Math.max(1, currentMountLevel(profile.key));
    return {
      coins: Math.round(profile.upgradeBase + level * 210 + level * level * 120),
      materials: 18 + Math.floor(level * 4.5),
    };
  }

  function unlockMount(key) {
    const profile = mountProfile(key);
    if (profile.key === "none") {
      selectMount(profile.key);
      return;
    }
    if (mountUnlocked(profile.key)) {
      selectMount(profile.key);
      return;
    }
    const unlockCost = mountUnlockCost(profile.key);
    if (meta.coins < unlockCost.coins || (meta.poopCoins || 0) < unlockCost.poopCoins) {
      panelCopy.textContent = `解锁 ${profile.name} 需要 ${unlockCost.coins} 金币和 ${unlockCost.poopCoins} 便便币。便便币主要通过每日签到、节日邮件少量获得，Boss 掉落概率为 0.5%。`;
      return;
    }
    meta.coins -= unlockCost.coins;
    meta.poopCoins -= unlockCost.poopCoins;
    meta.unlockedMounts[profile.key] = true;
    meta.mountLevels[profile.key] = Math.max(1, currentMountLevel(profile.key));
    meta.selectedMount = profile.key;
    saveMeta();
    panelCopy.textContent = `${profile.name} 已解锁，消耗 ${unlockCost.coins} 金币和 ${unlockCost.poopCoins} 便便币，局内会通过闪避、拾取和攻击自动充能。`;
    showRewardToast([{ type: "medal", label: profile.name, amount: 1 }], { duration: 1500 });
    beep(920, 0.08, "triangle", 0.04);
  }

  function selectMount(key) {
    const profile = mountProfile(key);
    if (!mountPlayable(profile.key)) {
      unlockMount(profile.key);
      return;
    }
    meta.selectedMount = profile.key;
    if (mountUnlocked(profile.key) && meta.trialMount === profile.key) meta.trialMount = "";
    saveMeta();
    panelCopy.textContent = profile.key === "none" ? "本局将不乘坐坐骑，英雄会保持原始飞行姿态。" : `${mountTrialSelected(profile.key) ? "试用骑乘" : "已骑乘"} ${profile.name}：${profile.desc}`;
    beep(720, 0.055, "sine", 0.032);
  }

  function upgradeMount(key) {
    const profile = mountProfile(key);
    if (profile.key === "none") {
      selectMount(profile.key);
      return;
    }
    if (!mountUnlocked(profile.key)) {
      unlockMount(profile.key);
      return;
    }
    const level = currentMountLevel(profile.key);
    if (level >= 15) {
      panelCopy.textContent = `${profile.name} 已达到 Lv.15。`;
      return;
    }
    const cost = mountUpgradeCost(profile.key);
    if (meta.coins < cost.coins || meta.materials < cost.materials) {
      panelCopy.textContent = `升级 ${profile.name} 需要 ${cost.coins} 金币和 ${cost.materials} 材料。`;
      return;
    }
    meta.coins -= cost.coins;
    meta.materials -= cost.materials;
    meta.mountLevels[profile.key] = level + 1;
    meta.unlockedMounts[profile.key] = true;
    meta.selectedMount = profile.key;
    saveMeta();
    panelCopy.textContent = `${profile.name} 升到 Lv.${level + 1}，${profile.skill} 更容易充能且冷却更短。`;
    beep(980, 0.08, "triangle", 0.04);
  }

  function startMountTrial(key) {
    const profile = mountProfile(key);
    if (mountUnlocked(profile.key)) {
      selectMount(profile.key);
      return;
    }
    if (!mountTrialAvailable(profile)) {
      panelCopy.textContent = `${profile.name}暂不开放试用，仍可通过解锁费用或签到目标获得。`;
      return;
    }
    ensureTrialMeta();
    meta.trialMount = profile.key;
    meta.selectedMount = profile.key;
    const reward = grantFirstTrialReward("mount", profile.key, profile.name);
    saveMeta();
    refreshHeroStatsFromMeta();
    updateMetaUi();
    panelCopy.textContent = reward
      ? `首次试用 ${profile.name}，已发放金币、材料和普通道具奖励；正式拥有仍需消耗金币和便便币或完成签到。${trialAccessSummary()}`
      : `${profile.name}试用骑乘中，正式拥有仍需消耗金币和便便币或完成签到。${trialAccessSummary()}`;
    beep(900, 0.075, "triangle", 0.04);
  }

  function renderMountPage() {
    if (!mountGrid) return;
    mountGrid.innerHTML = "";
    if (mountText) {
      const profile = mountProfile();
      mountText.textContent = `当前坐骑：${profile.name} · ${mountPowerText(profile.key)}。便便币 ${meta.poopCoins || 0}，金币和便便币会同时用于解锁坐骑。`;
    }
    for (const profile of mountProfiles) {
      const unlocked = mountUnlocked(profile.key);
      const trialAvailable = mountTrialAvailable(profile);
      const trialSelected = mountTrialSelected(profile.key);
      const selected = meta.selectedMount === profile.key;
      const level = effectiveMountLevel(profile.key);
      const cost = mountUpgradeCost(profile.key);
      const card = document.createElement("div");
      card.className = "mount-card";
      card.classList.toggle("is-selected", selected);
      card.classList.toggle("is-locked", !unlocked);
      card.classList.toggle("is-trial", trialSelected);
      const icon = document.createElement("div");
      icon.className = `mount-icon mount-${profile.key}`;
      const name = document.createElement("div");
      name.className = "hero-card-name";
      name.textContent = profile.name;
      const stat = document.createElement("div");
      stat.className = "hero-card-stat";
      stat.textContent = unlocked || trialSelected ? mountPowerText(profile.key) : profile.desc;
      const skill = document.createElement("div");
      skill.className = "mount-skill-text";
      const unlockCost = mountUnlockCost(profile.key);
      const signText = profile.unlockDay ? `；签到第 ${profile.unlockDay} 天可直接解锁` : "";
      const trialText = trialAvailable ? "；可先试用" : "";
      skill.textContent = unlocked
        ? profile.desc
        : trialSelected
          ? `${profile.desc}（试用不消耗便便币，正式拥有仍需解锁）`
          : `解锁费用 ${unlockCost.coins} 金币 + ${unlockCost.poopCoins} 便便币${signText}${trialText}`;
      const actions = document.createElement("div");
      actions.className = "mount-actions";
      const selectButton = document.createElement("button");
      selectButton.type = "button";
      selectButton.textContent = profile.key === "none" ? selected ? "未骑乘" : "不乘坐" : unlocked ? selected ? "骑乘中" : "骑乘" : "解锁";
      selectButton.disabled = unlocked && selected;
      selectButton.addEventListener("click", () => unlocked ? selectMount(profile.key) : unlockMount(profile.key));
      actions.appendChild(selectButton);
      if (unlocked && profile.key !== "none") {
        const upgradeButton = document.createElement("button");
        upgradeButton.type = "button";
        upgradeButton.textContent = level >= 15 ? "已满级" : `升级 ${cost.coins}金`;
        upgradeButton.disabled = level >= 15;
        upgradeButton.addEventListener("click", () => upgradeMount(profile.key));
        actions.appendChild(upgradeButton);
      } else if (trialAvailable) {
        const trialButton = document.createElement("button");
        trialButton.type = "button";
        trialButton.className = "trial-button";
        trialButton.textContent = trialSelected && selected ? "试用中" : trialRewardClaimed("mount", profile.key) ? "试用" : "试用领奖";
        trialButton.disabled = trialSelected && selected;
        trialButton.addEventListener("click", () => startMountTrial(profile.key));
        actions.appendChild(trialButton);
      }
      card.append(icon, name, stat, skill, actions);
      mountGrid.appendChild(card);
    }
  }

  function droneUnlockRequirementText(profile) {
    if (!profile || profile.free) return "已解锁";
    const parts = [];
    if (profile.unlockStage) parts.push(`闯关进度 ${profile.unlockStage}`);
    if (profile.unlockAdventureStage) parts.push(`冒险进度 ${profile.unlockAdventureStage}`);
    return parts.length ? `需要${parts.join("、")}` : "可解锁";
  }

  function unlockDrone(key) {
    const profile = droneProfile(key);
    if (droneUnlocked(profile.key)) {
      selectDrone(profile.key);
      return;
    }
    if (!droneUnlockAvailable(profile)) {
      panelCopy.textContent = `${profile.name} 尚未开放，${droneUnlockRequirementText(profile)}。`;
      return;
    }
    const cost = droneUnlockCost(profile.key);
    if (meta.coins < cost.coins || meta.materials < cost.materials) {
      panelCopy.textContent = `解锁 ${profile.name} 需要 ${cost.coins} 金币和 ${cost.materials} 材料。`;
      return;
    }
    meta.coins -= cost.coins;
    meta.materials -= cost.materials;
    meta.unlockedDrones[profile.key] = true;
    meta.selectedDrone = profile.key;
    saveMeta();
    panelCopy.textContent = `${profile.name} 已解锁并设为当前僚机。局内获得“僚机信标”天赋后才会出战。`;
    showRewardToast([{ type: "medal", label: profile.name, amount: 1 }], { duration: 1500 });
    renderDronePage();
    updateMetaUi();
    beep(920, 0.08, "triangle", 0.04);
  }

  function selectDrone(key) {
    const profile = droneProfile(key);
    if (!droneUnlocked(profile.key)) {
      unlockDrone(profile.key);
      return;
    }
    meta.selectedDrone = profile.key;
    saveMeta();
    renderDronePage();
    updateMetaUi();
    panelCopy.textContent = `当前僚机切换为 ${profile.name}：${profile.skill}。局内需要拿到僚机信标天赋才会出现。`;
    beep(720, 0.055, "sine", 0.032);
  }

  function renderDronePage() {
    if (!droneGrid) return;
    droneGrid.innerHTML = "";
    const active = activeDroneProfile();
    if (droneText) {
      droneText.textContent = `当前僚机：${active.name} · ${active.skill}。天赋激活后出战，金币 ${meta.coins}，材料 ${meta.materials}。`;
    }
    for (const profile of droneProfiles) {
      const unlocked = droneUnlocked(profile.key);
      const selected = meta.selectedDrone === profile.key;
      const available = droneUnlockAvailable(profile);
      const cost = droneUnlockCost(profile.key);
      const card = document.createElement("div");
      card.className = "drone-card";
      card.classList.toggle("is-selected", selected);
      card.classList.toggle("is-locked", !unlocked);
      const icon = document.createElement("div");
      icon.className = `drone-icon drone-${profile.key}`;
      const name = document.createElement("div");
      name.className = "hero-card-name";
      name.textContent = profile.name;
      const stat = document.createElement("div");
      stat.className = "hero-card-stat";
      stat.textContent = `${profile.skill} · ${profile.short}`;
      const skill = document.createElement("div");
      skill.className = "mount-skill-text";
      skill.textContent = unlocked
        ? profile.desc
        : available
          ? `解锁费用 ${cost.coins} 金币 + ${cost.materials} 材料`
          : `${droneUnlockRequirementText(profile)} 后可解锁`;
      const actions = document.createElement("div");
      actions.className = "drone-actions";
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = unlocked ? selected ? "已选择" : "选择" : available ? "解锁" : "未开放";
      button.disabled = (unlocked && selected) || (!unlocked && !available);
      button.addEventListener("click", () => unlocked ? selectDrone(profile.key) : unlockDrone(profile.key));
      actions.appendChild(button);
      card.append(icon, name, stat, skill, actions);
      droneGrid.appendChild(card);
    }
  }

  function renderStageGrid() {
    if (!stageGrid) return;
    stageGrid.innerHTML = "";
    const mode = state.gameMode === "adventure" ? "adventure" : "stage";
    const list = mode === "adventure" ? adventureStages : stages;
    const maxStage = mode === "adventure" ? meta.maxAdventureStage : meta.maxStage;
    const cleared = mode === "adventure" ? meta.adventureCleared : meta.cleared;
    for (const stage of list) {
      const btn = document.createElement("button");
      const readiness = stageReadiness(stage);
      btn.type = "button";
      btn.textContent = stage.bossStage ? `${stage.number}王` : String(stage.number);
      btn.classList.toggle("is-boss", stage.bossStage);
      btn.classList.toggle("is-adventure", mode === "adventure");
      btn.classList.toggle("is-selected", state.gameMode === mode && activeStageNumber() === stage.number);
      btn.classList.toggle("is-cleared", !!cleared[stage.number]);
      btn.classList.toggle("is-risky", !cleared[stage.number] && ["danger", "critical"].includes(readiness.key));
      btn.disabled = stage.number > maxStage;
      const contract = mode === "adventure" ? adventureContractForStage(stage) : null;
      const contractText = contract ? ` · ${contract.short}契约` : "";
      const classicProfile = mode === "stage" ? classicStageProfile(stage) : null;
      const profileText = classicProfile ? ` · ${classicProfile.short}航线` : "";
      if (classicProfile) {
        btn.classList.add(`route-${classicProfile.key}`);
        btn.dataset.routeLabel = classicProfile.short;
      }
      btn.title = `推荐战力 ${formatCombatPower(readiness.recommended)} · ${readiness.label}${contractText}${profileText}`;
      btn.setAttribute("aria-label", `${mode === "adventure" ? "冒险" : "闯关"}第 ${stage.number} 关，推荐战力 ${formatCombatPower(readiness.recommended)}，${readiness.label}${contractText}${profileText}`);
      btn.addEventListener("click", () => {
        state.gameMode = mode;
        setActiveStageNumber(stage.number);
        updateMetaUi();
        renderStageSummary();
        beep(620, 0.04, "sine", 0.025);
      });
      stageGrid.appendChild(btn);
    }
  }

  function renderStageSummary() {
    if (!stageSummary) return;
    const stage = activeStage();
    const maxStage = activeStageMax();
    const cleared = activeStageCleared();
    const locked = stage.number > maxStage;
    const readiness = stageReadiness(stage);
    const modeName = state.gameMode === "adventure" ? "冒险" : "闯关";
    const classicProfile = state.gameMode === "stage" ? classicStageProfile(stage) : null;
    const clearText = cleared[stage.number] ? "已通关" : stage.number === maxStage ? "当前进度" : "可挑战";
    stageSummary.textContent = "";
    stageSummary.classList.toggle("is-structured", !locked);
    stageSummary.classList.toggle("is-adventure-summary", !locked && state.gameMode === "adventure");
    stageSummary.classList.toggle("is-classic-summary", !locked && state.gameMode === "stage");
    if (locked) {
      stageSummary.textContent = `${modeName}第 ${stage.number} 关尚未解锁，先通关前面的关卡。`;
    } else {
      const main = document.createElement("div");
      main.className = "stage-summary-main";
      const title = document.createElement("div");
      title.className = "stage-summary-title";
      title.textContent = stage.bossStage
        ? `${modeName}第 ${stage.number} 关 · BOSS ${bossProfileForStage(stage).name}${classicProfile ? ` · ${classicProfile.short}` : ""}`
        : `${modeName}第 ${stage.number} 关 · ${classicProfile ? classicProfile.name : "普通航线"}`;
      const status = document.createElement("div");
      status.className = "stage-summary-status";
      status.textContent = clearText;
      main.append(title, status);

      const goals = document.createElement("div");
      goals.className = "stage-summary-goals";
      let milestonePlan = null;
      const addChip = (label, value, kinds = "") => {
        const kindList = Array.isArray(kinds) ? kinds : kinds ? [kinds] : [];
        const chip = document.createElement("span");
        chip.className = ["stage-chip", ...kindList.map((kind) => `is-${kind}`)].join(" ");
        const labelNode = document.createElement("span");
        labelNode.className = "stage-chip-label";
        labelNode.textContent = label;
        const valueNode = document.createElement("span");
        valueNode.className = "stage-chip-value";
        valueNode.textContent = value;
        chip.append(labelNode, valueNode);
        goals.appendChild(chip);
      };
      const buildMilestonePlan = () => {
        if (!classicProfile) return null;
        const plan = document.createElement("div");
        plan.className = `stage-milestone-plan route-${classicProfile.key}`;
        const caption = document.createElement("span");
        caption.className = "stage-milestone-caption";
        caption.textContent = "稳定节奏";
        plan.appendChild(caption);
        for (const step of classicDistrictMilestonePlan(stage)) {
          const node = document.createElement("span");
          node.className = "stage-milestone-node";
          node.textContent = `${Math.round(step.ratio * 100)}% ${step.label}`;
          plan.appendChild(node);
        }
        return plan;
      };

      addChip("目标", `${formatScore(stage.target)} 分`);
      if (state.gameMode === "adventure") {
        const routeTargets = adventureRouteTargets(stage);
        const contract = adventureContractForStage(stage);
        addChip("探索", `${routeTargets.explore}`);
        addChip("线索", `${routeTargets.intel}`);
        addChip("货箱", `${routeTargets.cargo}`);
        if (contract) addChip("契约", `${contract.short} ${contract.target} · ${contract.hint || contract.desc}`, ["alert", "wide"]);
        addChip("支援", "航图/契约里程碑触发补给", ["wide"]);
        addChip(stage.bossStage ? "现身" : "通关", stage.bossStage ? "三目标完成后出 Boss" : "分数 + 航图 + 契约", stage.bossStage ? "boss" : "");
      } else if (stage.bossStage) {
        if (classicProfile) {
          addChip("航线", `${classicProfile.short} · ${classicProfile.desc}`, ["wide"]);
          addChip("备战", classicProfile.tip, ["wide", "alert"]);
          addChip("稳定", `${classicDistrictTarget(stage)} 进度 · 35/70/100% 分段支援`, "reward");
          const routeMission = classicRouteMission(stage);
          if (routeMission) addChip("委托", `${routeMission.label} ${routeMission.target} · 完成推进稳定`, "reward");
          milestonePlan = buildMilestonePlan();
        }
        addChip("挑战", `达到目标分后迎战 ${bossProfileForStage(stage).name}`, "boss");
      } else {
        if (classicProfile) {
          addChip("航线", `${classicProfile.short} · ${classicProfile.desc}`, ["wide"]);
          addChip("建议", classicProfile.tip, ["wide"]);
          addChip("稳定", `${classicDistrictTarget(stage)} 进度 · 35/70/100% 分段支援`, "reward");
          const routeMission = classicRouteMission(stage);
          if (routeMission) addChip("委托", `${routeMission.label} ${routeMission.target} · 完成推进稳定`, "reward");
          addChip("倾向", classicStageRewardText(classicProfile), "reward");
          milestonePlan = buildMilestonePlan();
        }
        addChip("通关", "达到目标分");
        addChip("无伤", "额外金币");
      }
      if (stage.hitLimit > 0) addChip("受击", `${stage.hitLimit} 次失败`, "alert");
      addChip("战力", `${formatCombatPower(readiness.recommended)} · ${readiness.label}`, ["danger", "critical"].includes(readiness.key) ? "alert" : "");
      if (classicProfile) {
        const preview = classicStageBonus(stage, !cleared[stage.number]);
        const previewCoins = preview.coins > 0 ? runCoinReward(preview.coins) : 0;
        const previewMaterials = preview.materials > 0 ? runMaterialReward(preview.materials) : 0;
        addChip("奖励", `${runCoinReward(stage.coinReward)} 金币 / ${runMaterialReward(stage.materialReward)} 材料 · 航线 +${previewCoins}/${previewMaterials}`, "reward");
      } else {
        addChip("奖励", `${runCoinReward(stage.coinReward)} 金币 / ${runMaterialReward(stage.materialReward)} 材料`);
      }
      if (milestonePlan) stageSummary.append(main, milestonePlan, goals);
      else stageSummary.append(main, goals);
    }
    if (stageStartButton) {
      stageStartButton.disabled = locked;
      stageStartButton.textContent = locked ? "未解锁" : `开始${modeName}第 ${stage.number} 关`;
    }
  }

  function upgradeCost() {
    const level = currentHeroLevel();
    return {
      coins: Math.round(280 + level * 120 + level * level * 24),
      materials: (6 + Math.floor(level * 1.8)) * 7,
    };
  }

  function evolveCost() {
    const evo = currentEvolution();
    return {
      level: 10 + evo * 10,
      materials: (80 + evo * 90) * 5,
      stones: 1,
    };
  }

  function upgradeHero() {
    if (heroTrialSelected()) {
      panelCopy.textContent = `${heroLabel()}正在试用中，试用英雄只能体验基础形态；正式拥有后才能升级。`;
      beep(150, 0.08, "sawtooth", 0.035);
      return;
    }
    const cost = upgradeCost();
    const level = currentHeroLevel();
    if (meta.coins < cost.coins || meta.materials < cost.materials) {
      panelCopy.textContent = `升级需要 ${cost.coins} 金币和 ${cost.materials} 材料。`;
      return;
    }
    if (level >= MAX_HERO_LEVEL) {
      panelCopy.textContent = `${heroLabel()}已经达到当前最高等级 Lv.50。`;
      return;
    }
    meta.coins -= cost.coins;
    meta.materials -= cost.materials;
    const nextLevel = setHeroLevel(level + 1);
    saveMeta();
    checkAchievements();
    panelCopy.textContent = `${heroLabel()}升到 Lv.${nextLevel}，生命、能量和攻击提高。`;
    beep(820, 0.08, "triangle", 0.04);
  }

  function evolveHero() {
    if (heroTrialSelected()) {
      panelCopy.textContent = `${heroLabel()}正在试用中，试用英雄不能进化；正式拥有后才能消耗进化石强化。`;
      beep(150, 0.08, "sawtooth", 0.035);
      return;
    }
    const cost = evolveCost();
    if (currentEvolution() >= 4) {
      panelCopy.textContent = `${heroLabel()}已经完成当前四段进化。`;
      return;
    }
    if (currentHeroLevel() < cost.level) {
      panelCopy.textContent = `进化需要超人达到 Lv.${cost.level}。`;
      return;
    }
    if (meta.materials < cost.materials || currentHeroStoneCount() < cost.stones) {
      panelCopy.textContent = `进化需要 ${cost.materials} 普通材料和 ${cost.stones} 颗${heroLabel()}专属进化石。专属进化石在无尽模式高分获得。`;
      return;
    }
    const nextEvolution = currentEvolution() + 1;
    meta.materials -= cost.materials;
    meta.heroEvoStones[meta.selectedHero] = currentHeroStoneCount() - cost.stones;
    meta.evoStones = meta.heroEvoStones[meta.selectedHero];
    meta.heroEvolutions[meta.selectedHero] = nextEvolution;
    meta.evolution = meta.heroEvolutions.poop;
    saveMeta();
    checkAchievements();
    panelCopy.textContent = `进化成功！${heroLabel()}属性与攻速提高，攻击形态继续强化。`;
    beep(1080, 0.12, "triangle", 0.05);
  }

  function signInToday() {
    const today = todayKey();
    if (meta.signIn.lastDate === today) {
      panelCopy.textContent = "今天已经签到了，明天再来领大奖。";
      return;
    }
    meta.signIn.lastDate = today;
    meta.signIn.streak += 1;
    const day = meta.signIn.streak;
    const reward = dailySignInBundle(day);
    const coins = reward.coins;
    const materials = reward.materials;
    const poopCoins = reward.poopCoins;
    meta.coins += coins;
    meta.materials += materials;
    meta.poopCoins = (meta.poopCoins || 0) + poopCoins;
    meta.inventory.shield += reward.shield;
    meta.inventory.magnet += reward.magnet;
    meta.inventory.energy += reward.energy;
    meta.inventory.storm += reward.storm;
    meta.inventory.reroll += reward.reroll;
    meta.inventory.wing += reward.wing;
    meta.inventory.revive += reward.revive;
    addHeroEvoStones(reward.stone);
    const extraParts = [`护盾 +${reward.shield}`, `能量 +${reward.energy}`];
    if (reward.magnet) extraParts.push(`磁铁 +${reward.magnet}`);
    if (reward.storm) extraParts.push(`臭弹 +${reward.storm}`);
    if (reward.reroll) extraParts.push(`重骰 +${reward.reroll}`);
    if (reward.wing) extraParts.push(`顺风羽翼 +${reward.wing}`);
    if (reward.revive) extraParts.push(`复活核心 +${reward.revive}`);
    if (reward.stone) extraParts.push(`当前英雄专属进化石 +${reward.stone}`);
    let extra = extraParts.join("，");
    const unlockedToday = [];
    for (const profile of heroProfiles) {
      if (!profile.unlockDay || profile.unlockDay !== day || meta.unlockedHeroes[profile.key]) continue;
      meta.unlockedHeroes[profile.key] = true;
      meta.selectedHero = profile.key;
      if (meta.trialHero === profile.key) meta.trialHero = "";
      unlockedToday.push(profile);
    }
    const unlockedMountsToday = [];
    for (const profile of mountProfiles) {
      if (!profile.unlockDay || profile.unlockDay !== day || meta.unlockedMounts[profile.key]) continue;
      meta.unlockedMounts[profile.key] = true;
      meta.mountLevels[profile.key] = Math.max(1, currentMountLevel(profile.key));
      meta.selectedMount = profile.key;
      if (meta.trialMount === profile.key) meta.trialMount = "";
      unlockedMountsToday.push(profile);
    }
    if (unlockedToday.length > 0) {
      extra += `，新英雄${unlockedToday.map((profile) => profile.name).join("、")}解锁`;
    }
    if (unlockedMountsToday.length > 0) {
      extra += `，新坐骑${unlockedMountsToday.map((profile) => profile.name).join("、")}解锁`;
    }
    saveMeta();
    refreshHeroStatsFromMeta();
    checkAchievements();
    showRewardToast([
      { type: "coin", amount: coins },
      { type: "material", amount: materials },
      { type: "poopCoin", amount: poopCoins },
      { type: "shield", amount: reward.shield },
      { type: "magnet", amount: reward.magnet },
      { type: "energy", amount: reward.energy },
      { type: "storm", amount: reward.storm },
      { type: "reroll", amount: reward.reroll },
      { type: "wing", amount: reward.wing },
      { type: "revive", amount: reward.revive },
      { type: "stone", amount: reward.stone },
      ...unlockedToday.map((profile) => ({ type: "medal", label: profile.name, amount: 1 })),
      ...unlockedMountsToday.map((profile) => ({ type: "medal", label: profile.name, amount: 1 })),
    ]);
    panelCopy.textContent = `签到第 ${day} 天成功！获得 ${coins} 金币、${materials} 材料、${poopCoins} 便便币，${extra}。`;
    beep(980, 0.1, "triangle", 0.05);
  }

  function selectHero(key) {
    const profile = heroProfile(key);
    if (!heroPlayable(profile.key)) {
      panelCopy.textContent = `${profile.name}尚未解锁，${heroUnlockText(profile)}。`;
      return;
    }
    meta.selectedHero = profile.key;
    if (meta.unlockedHeroes[profile.key] && meta.trialHero === profile.key) meta.trialHero = "";
    state.ultimateKind = profile.ultimate || "poop";
    saveMeta();
    refreshHeroStatsFromMeta();
    updateHeroPageUi();
    panelCopy.textContent = `已切换为${heroLabel()}。`;
  }

  function showShopDetail(key) {
    const info = shopInfo[key] || shopInfo.shield;
    if (!shopDetail || !info) return;
    shopDetail.dataset.shopKey = key;
    shopDetail.textContent = "";
    const cost = shopCostFor(key);
    const currency = shopCurrencyFor(key);
    const balance = shopBalanceFor(key);
    const stockText = shopStockText(key);
    const affordable = balance >= cost;
    const title = document.createElement("strong");
    title.textContent = info.name;
    const price = document.createElement("span");
    price.textContent = shopPriceText(key);
    const status = document.createElement("p");
    status.className = `shop-status${affordable ? "" : " is-short"}`;
    status.textContent = `${currency} ${balance}${stockText ? ` · ${stockText}` : ""}${affordable ? " · 可购买" : ` · 还差 ${cost - balance} ${currency}`}`;
    const metaGrid = document.createElement("div");
    metaGrid.className = "shop-detail-grid";
    const addMeta = (label, value, kind = "") => {
      const item = document.createElement("span");
      item.className = `shop-detail-meta${kind ? ` is-${kind}` : ""}`;
      const labelNode = document.createElement("span");
      labelNode.className = "shop-detail-label";
      labelNode.textContent = label;
      const valueNode = document.createElement("span");
      valueNode.className = "shop-detail-value";
      valueNode.textContent = value;
      item.append(labelNode, valueNode);
      metaGrid.appendChild(item);
    };
    addMeta("用途", shopUseText(key));
    addMeta("方式", shopCarryText(key));
    addMeta("库存", stockText || "立即生效");
    addMeta("余额", `${balance} ${currency}`, affordable ? "" : "short");
    if (key === "gear") {
      addMeta("彩装", `${(shopGearBoxRainbowChance() * 100).toFixed(1)}%`, "highlight");
    } else if (RUN_CARRIED_ITEM_TYPES.includes(key)) {
      addMeta("携带", `${RUN_ITEM_SLOT_LIMIT} 种上限`);
    }
    const effect = document.createElement("p");
    effect.className = "shop-effect";
    effect.textContent = shopEffectText(key);
    shopDetail.append(title, price, metaGrid, status, effect);
    shopCards.forEach((card) => {
      card.classList.toggle("is-selected", card.dataset.shopKey === key);
    });
  }

  function refreshShopCards() {
    shopCards.forEach((card) => {
      const key = card.dataset.shopKey;
      const price = card.querySelector(".shop-price");
      const button = card.querySelector("button");
      const affordable = shopAffordable(key);
      if (price) price.textContent = shopPriceText(key);
      card.classList.toggle("is-unaffordable", !affordable);
      card.setAttribute("aria-label", `${shopInfo[key] ? shopInfo[key].name : "商品"}，价格 ${shopPriceText(key)}，${affordable ? "可购买" : `还差 ${shopCostFor(key) - shopBalanceFor(key)} ${shopCurrencyFor(key)}`}`);
      if (button) button.title = affordable ? `购买 ${shopInfo[key] ? shopInfo[key].name : "商品"}` : `还差 ${shopCostFor(key) - shopBalanceFor(key)} ${shopCurrencyFor(key)}`;
    });
  }

  function setMenuPage(page) {
    const target = ["home", "stage", "growth", "mail", "hero", "mount", "drone", "equipment", "shop", "achievement", "rules"].includes(page) ? page : "home";
    const moduleOpen = target !== "home";
    menuPanel.classList.toggle("module-open", moduleOpen);
    if (moduleHeader) moduleHeader.hidden = !moduleOpen;
    if (moduleTitle) {
      moduleTitle.textContent = target === "stage" ? (state.gameMode === "adventure" ? "冒险模式" : "闯关模式") : target === "growth" ? "养成" : target === "mail" ? "邮箱" : target === "hero" ? "英雄" : target === "drone" ? "僚机" : target === "equipment" ? "装备" : target === "shop" ? "商店" : target === "achievement" ? "成就" : target === "rules" ? "规则" : "";
    }
    if (moduleTitle && target === "mount") moduleTitle.textContent = "坐骑";
    if (stagePage) stagePage.hidden = target !== "stage";
    if (growthPage) growthPage.hidden = target !== "growth";
    if (mailPage) mailPage.hidden = target !== "mail";
    if (heroPage) heroPage.hidden = target !== "hero";
    if (mountPage) mountPage.hidden = target !== "mount";
    if (dronePage) dronePage.hidden = target !== "drone";
    if (equipmentPage) equipmentPage.hidden = target !== "equipment";
    if (shopPage) shopPage.hidden = target !== "shop";
    if (achievementPage) achievementPage.hidden = target !== "achievement";
    if (rulesPage) rulesPage.hidden = target !== "rules";
    if (growthPageButton) growthPageButton.classList.toggle("is-selected", target === "growth");
    if (mailPageButton) mailPageButton.classList.toggle("is-selected", target === "mail");
    if (heroPageButton) heroPageButton.classList.toggle("is-selected", target === "hero");
    if (mountPageButton) mountPageButton.classList.toggle("is-selected", target === "mount");
    if (dronePageButton) dronePageButton.classList.toggle("is-selected", target === "drone");
    if (equipmentPageButton) equipmentPageButton.classList.toggle("is-selected", target === "equipment");
    if (shopPageButton) shopPageButton.classList.toggle("is-selected", target === "shop");
    if (achievementPageButton) achievementPageButton.classList.toggle("is-selected", target === "achievement");
    if (rulesPageButton) rulesPageButton.classList.toggle("is-selected", target === "rules");
    if (target === "equipment") renderEquipmentPage();
    if (target === "mail") {
      syncMailboxMessages({ persist: true });
      renderMailPage();
    }
    if (target === "hero") updateHeroPageUi();
    if (target === "mount") renderMountPage();
    if (target === "drone") renderDronePage();
    if (target === "stage") {
      renderStageGrid();
      renderStageSummary();
    }
    if (target === "shop") {
      const selectedShopKey = shopDetail && shopDetail.dataset.shopKey ? shopDetail.dataset.shopKey : "shield";
      setRedeemStatus();
      refreshShopCards();
      showShopDetail(selectedShopKey);
    }
    if (target === "achievement") renderAchievementPage();
  }

  function buyShopItem(key, action) {
    showShopDetail(key);
    action();
    refreshShopCards();
    showShopDetail(key);
  }

  function buyItem(type, cost = SHOP_COIN_PRICES[type]) {
    if (meta.coins < cost) {
      panelCopy.textContent = `金币不足，购买需要 ${cost} 金币。`;
      return;
    }
    meta.coins -= cost;
    meta.inventory[type] += 1;
    saveMeta();
    updateMetaUi();
    showRewardToast([{ type, amount: 1 }]);
    panelCopy.textContent = `购买成功，已放入背包。道具不会跨关清空。`;
    beep(760, 0.06, "sine", 0.035);
  }

  function buyReviveCore() {
    const cost = SHOP_POOP_PRICES.revive;
    if ((meta.poopCoins || 0) < cost) {
      panelCopy.textContent = `便便币不足，复活心核需要 ${cost} 便便币。`;
      return;
    }
    meta.poopCoins = Math.max(0, (meta.poopCoins || 0) - cost);
    meta.inventory.revive += 1;
    saveMeta();
    updateMetaUi();
    showRewardToast([{ type: "revive", amount: 1 }]);
    panelCopy.textContent = "复活心核购买成功，已放入背包；进局若被携带，濒死时自动触发一次。";
    beep(860, 0.07, "triangle", 0.04);
  }

  function buyMaterialPack() {
    const cost = SHOP_COIN_PRICES.material;
    if (meta.coins < cost) {
      panelCopy.textContent = `金币不足，材料补给需要 ${cost} 金币。`;
      return;
    }
    const materials = 46 + Math.floor(currentHeroLevel() * 0.8);
    const energy = 1;
    meta.coins -= cost;
    meta.materials += materials;
    meta.inventory.energy += energy;
    saveMeta();
    updateMetaUi();
    showRewardToast([
      { type: "material", amount: materials },
      { type: "energy", amount: energy },
    ]);
    panelCopy.textContent = `材料补给购买成功，获得 ${materials} 材料和能量瓶 +${energy}。`;
    beep(820, 0.07, "triangle", 0.04);
  }

  function buyBattlePack() {
    const cost = SHOP_COIN_PRICES.battle;
    if (meta.coins < cost) {
      panelCopy.textContent = `金币不足，战斗礼包需要 ${cost} 金币。`;
      return;
    }
    meta.coins -= cost;
    meta.inventory.shield += 3;
    meta.inventory.magnet += 2;
    meta.inventory.energy += 2;
    meta.inventory.storm += 1;
    saveMeta();
    updateMetaUi();
    showRewardToast([
      { type: "shield", amount: 3 },
      { type: "magnet", amount: 2 },
      { type: "energy", amount: 2 },
      { type: "storm", amount: 1 },
    ]);
    panelCopy.textContent = "战斗礼包购买成功，护盾、磁铁、能量瓶和臭弹炸弹已放入背包。";
    beep(900, 0.08, "triangle", 0.04);
  }

  function buyGearBox() {
    const cost = SHOP_COIN_PRICES.gear;
    if (meta.coins < cost) {
      panelCopy.textContent = `金币不足，装备补给箱需要 ${cost} 金币。`;
      return;
    }
    meta.coins -= cost;
    const progressStage = Math.max(1, meta.maxStage || 1, meta.maxAdventureStage || 1, isStageMode() ? activeStageNumber() : state.selectedStage || 1);
    const quality = rollShopGearBoxQuality(currentHeroLevel() + progressStage);
    const slot = equipmentSlots[Math.floor(Math.random() * equipmentSlots.length)];
    const item = makeEquipment(slot.key, quality, Math.max(currentHeroLevel(), progressStage));
    awardEquipment(item);
    meta.coins = Math.max(0, meta.coins);
    saveMeta();
    updateMetaUi();
    panelCopy.textContent = `装备补给箱开启，获得 ${item.name}。当前彩色概率约 ${(shopGearBoxRainbowChance() * 100).toFixed(1)}%。`;
    beep(1040, 0.09, "triangle", 0.045);
  }

  function buyLuckyBox() {
    const cost = SHOP_COIN_PRICES.luckyBox;
    if (meta.coins < cost) {
      panelCopy.textContent = `金币不足，幸运宝箱需要 ${cost} 金币。`;
      return;
    }
    meta.coins -= cost;
    const premium = Math.random() < 0.3;
    const targetValue = Math.round(premium ? random(5400, 8600) : random(1900, 4800));
    let remaining = targetValue;
    const coinReward = Math.round(remaining * random(0.35, 0.58));
    remaining -= coinReward;
    const materialReward = Math.max(8, Math.round(remaining / random(42, 58)));
    const shieldReward = premium ? 1 + Math.floor(Math.random() * 2) : Math.random() < 0.45 ? 1 : 0;
    const magnetReward = premium ? 1 : Math.random() < 0.32 ? 1 : 0;
    const energyReward = 1 + (premium && Math.random() < 0.55 ? 1 : 0);
    const rerollReward = premium && Math.random() < 0.5 ? 1 : Math.random() < 0.18 ? 1 : 0;
    const stormReward = premium && Math.random() < 0.42 ? 1 : Math.random() < 0.16 ? 1 : 0;
    const wingReward = premium && Math.random() < 0.32 ? 1 : 0;
    const stoneReward = premium && Math.random() < 0.08 ? 1 : 0;
    meta.coins += coinReward;
    meta.materials += materialReward;
    meta.inventory.shield += shieldReward;
    meta.inventory.magnet += magnetReward;
    meta.inventory.energy += energyReward;
    meta.inventory.reroll += rerollReward;
    meta.inventory.storm += stormReward;
    meta.inventory.wing += wingReward;
    addHeroEvoStones(stoneReward);
    saveMeta();
    updateMetaUi();
    showRewardToast([
      { type: "coin", amount: coinReward },
      { type: "material", amount: materialReward },
      { type: "shield", amount: shieldReward },
      { type: "magnet", amount: magnetReward },
      { type: "energy", amount: energyReward },
      { type: "reroll", amount: rerollReward },
      { type: "storm", amount: stormReward },
      { type: "wing", amount: wingReward },
      { type: "stone", amount: stoneReward },
    ]);
    const items = [];
    if (shieldReward) items.push(`护盾 +${shieldReward}`);
    if (magnetReward) items.push(`磁铁 +${magnetReward}`);
    if (energyReward) items.push(`能量 +${energyReward}`);
    if (rerollReward) items.push(`重骰 +${rerollReward}`);
    if (stormReward) items.push(`臭弹 +${stormReward}`);
    if (wingReward) items.push(`羽翼 +${wingReward}`);
    if (stoneReward) items.push(`${heroLabel()}专属进化石 +${stoneReward}`);
    panelCopy.textContent = `幸运宝箱开启！获得 ${coinReward} 金币、${materialReward} 材料${items.length ? `、${items.join("、")}` : ""}${premium ? "。本次开出稀有组合！" : "。"}`;
    beep(premium ? 1180 : 820, 0.1, "triangle", premium ? 0.055 : 0.04);
  }

  function useInventoryItem(type) {
    if (state.mode !== "playing") return;
    if (!runItemAvailable(type)) {
      state.eventName = runItemCarried(type) ? `${RUN_ITEM_NAMES[type] || "道具"}已用` : `${RUN_ITEM_NAMES[type] || "道具"}未携带`;
      state.eventLabelTimer = Math.max(state.eventLabelTimer, 0.85);
      updateItemButtons();
      return;
    }
    consumeRunItem(type);
    if (type === "shield") state.shieldTimer = Math.max(state.shieldTimer, 10 + currentEvolution() * 2);
    if (type === "magnet") state.magnetTimer = Math.max(state.magnetTimer, 11 + currentEvolution() * 2);
    if (type === "energy") state.energy = state.maxEnergy;
    if (type === "storm") {
      const damage = 280 + state.level * 24 + state.attackDamage * 18;
      let cleared = 0;
      for (let i = hazards.length - 1; i >= 0; i -= 1) {
        const h = hazards[i];
        if (h.type === "pipeTop" || h.type === "pipeBottom") continue;
        if (h.x < -40 || h.x > state.width + 120) continue;
        hazards.splice(i, 1);
        cleared += 1;
        pop(h.x, h.y, "#8b4f25", h.elite ? 16 : 9);
      }
      if (boss) {
        const bossDamage = damage * (1 + runPerkLevel("splash") * 0.12) * bossBreakDamageMultiplier();
        boss.hp -= bossDamage;
        recordRunStat("bossDamage", bossDamage);
        if (state.gameMode === "daily") state.dailyDamage += bossDamage;
        if (boss.weakDuration > 0) registerBossWeakHit("item", boss.x - boss.w * 0.24, boss.y + boss.h * (boss.weakOffset || 0));
        if (!boss) {
          saveMeta();
          pop(hero.x, hero.y, "#8b4f25", 28);
          beep(900, 0.07, "triangle", 0.04);
          return;
        }
        boss.hit = 0.22;
        if (boss.hp <= 0) defeatBoss();
      }
      state.combo += Math.min(8, cleared);
      state.comboTimer = Math.max(state.comboTimer, 2.5);
      addRoundedScore((220 + cleared * 58) * state.scoreBonus);
      gainStyle(12 + cleared * 2, "臭弹炸弹", "#8b4f25");
      state.shake = Math.max(state.shake, 12);
    }
    saveMeta();
    updateItemButtons();
    pop(hero.x, hero.y, type === "shield" ? "#9de8ff" : type === "magnet" ? "#dfff7a" : type === "storm" ? "#8b4f25" : "#54d0ff", type === "storm" ? 28 : 18);
    beep(900, 0.07, "triangle", 0.04);
  }

  function updateItemButtons() {
    useShieldButton.innerHTML = `<span class="item-control-icon shield"></span><span class="item-control-count">${runItemButtonCount("shield")}</span>`;
    useMagnetButton.innerHTML = `<span class="item-control-icon magnet"></span><span class="item-control-count">${runItemButtonCount("magnet")}</span>`;
    useEnergyButton.innerHTML = `<span class="item-control-icon energy"></span><span class="item-control-count">${runItemButtonCount("energy")}</span>`;
    if (useStormButton) useStormButton.innerHTML = `<span class="item-control-icon storm"></span><span class="item-control-count">${runItemButtonCount("storm")}</span>`;
    useShieldButton.title = runItemStatusText("shield");
    useMagnetButton.title = runItemStatusText("magnet");
    useEnergyButton.title = runItemStatusText("energy");
    if (useStormButton) useStormButton.title = runItemStatusText("storm");
    const inRun = state.mode === "playing" || state.mode === "perkchoice";
    useShieldButton.disabled = inRun && !runItemAvailable("shield");
    useMagnetButton.disabled = inRun && !runItemAvailable("magnet");
    useEnergyButton.disabled = inRun && !runItemAvailable("energy");
    if (useStormButton) useStormButton.disabled = inRun && !runItemAvailable("storm");
    if (ultimateButton) {
      const cost = ultimateEnergyCost();
      const skillName = ultimateSkillName(heroProfile().ultimate || "poop");
      let label = "";
      if (state.ultimateTimer > 0) {
        label = `${Math.ceil(state.ultimateTimer)}s`;
      } else if (state.ultimateCooldown > 0) {
        label = `${Math.ceil(state.ultimateCooldown)}s`;
      } else {
        label = state.energy >= cost ? "大招" : "能量";
      }
      ultimateButton.innerHTML = `<span class="item-control-icon ultimate ${heroProfile().ultimate || "poop"}"></span><span class="item-control-count">${label}</span>`;
      ultimateButton.setAttribute("aria-label", `释放${skillName}，消耗 ${cost} 能量`);
      ultimateButton.title = `${skillName} · 消耗 ${cost} 能量`;
      ultimateButton.disabled = state.mode === "playing" && (state.ultimateCooldown > 0 || state.energy < cost);
    }
  }

  function gainXp(amount, show = true) {
    if (state.mode !== "playing" || amount <= 0 || state.level >= MAX_HERO_LEVEL) return;
    state.xp += amount;
    while (state.xp >= state.xpToNext && state.level < MAX_HERO_LEVEL) {
      state.xp -= state.xpToNext;
      levelUp(show);
    }
    if (state.level >= MAX_HERO_LEVEL) state.xp = 0;
  }

  function levelUp(show = true) {
    if (state.level >= MAX_HERO_LEVEL) return;
    state.level += 1;
    state.xpToNext = Math.round(140 + state.level * 82 + state.level * state.level * 9);
    state.maxHealth += 3;
    state.maxEnergy += 2;
    state.attackDamage = 1 + Math.floor((state.level - 1) / 5) + heroBonus().attack;
    state.scoreBonus = heroBonus().score + (state.level - 1) * 0.012;
    state.health = clamp(state.health + 18 + currentEvolution() * 3, 0, state.maxHealth);
    state.energy = clamp(state.energy + 9 + currentEvolution(), 0, state.maxEnergy);
    state.shake = Math.max(state.shake, 5);
    maybeGrantRunPerk();
    if (show) {
      pop(hero.x, hero.y - 22, "#f5c84b", 24);
      beep(880, 0.08, "triangle", 0.045);
    }
  }

  function attackTier() {
    if (state.level >= 50) return 8;
    if (state.level >= 35) return 7;
    if (state.level >= 25) return 6;
    if (state.level >= 15) return 5;
    if (state.level >= 7) return 4;
    if (state.level >= 5) return 3;
    if (state.level >= 3) return 2;
    return 1;
  }

  function attackName() {
    const list = {
      ikun: ["鸡啄发射", "双啄快攻", "三路鸡啄", "鸡啄冲锋", "连环鸡啄", "全场啄击", "鸡你太美风暴", "终极唱跳啄杀"],
      jet: ["水压飞弹", "双喷速射", "三线水炮", "破浪穿刺", "高压连喷", "涡轮水阵", "骑士冲刷", "圣蓝冲水阵"],
      alchemist: ["腐蚀毒瓶", "双瓶投掷", "毒雾散射", "黏液炼金", "连锁腐蚀", "毒云压制", "剧毒爆瓶", "终极臭气炼成"],
      paper: ["追踪纸卷", "双卷环绕", "纸卷散射", "束缚卷轴", "星纸法阵", "回旋纸雨", "纸卷风暴", "终极纸卷星河"],
      poop: ["普通便弹", "双重大便", "扇形便雨", "穿透金便", "旋风便弹", "陨石便雨", "黄金便风暴", "终极臭星雨"],
    };
    const names = list[meta.selectedHero] || list.poop;
    return names[attackTier() - 1];
  }

  function loop(now) {
    if (!state.last) state.last = now;
    const rawDt = (now - state.last) / 1000;
    const dt = Math.min(0.033, rawDt);
    state.last = now;
    updatePerformance(rawDt);
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }

  function ensureAudio() {
    if (state.audio) return state.audio;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    state.audio = new AudioContext();
    return state.audio;
  }

  function beep(freq, duration, type, gainValue) {
    if (state.muted) return;
    const audio = ensureAudio();
    if (!audio) return;
    if (audio.state === "suspended") audio.resume();
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.frequency.value = freq;
    osc.type = type;
    gain.gain.setValueAtTime(gainValue, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start();
    osc.stop(audio.currentTime + duration);
  }

  function ensureBgm(audio = ensureAudio()) {
    if (!audio) return null;
    if (state.bgm && state.bgm.master) return state.bgm;
    const master = audio.createGain();
    master.gain.value = 0.0001;
    master.connect(audio.destination);
    state.bgm = {
      master,
      active: false,
      step: 0,
      nextStepTime: 0,
      mode: "",
    };
    return state.bgm;
  }

  function bgmMode() {
    if (boss) return "boss";
    if (state.feverTimer > 0 || state.comboSurgeTimer > 0) return "fever";
    if (state.eventTimer > 0 && state.eventKind) return "event";
    if (state.gameMode === "daily") return "daily";
    return state.gameMode === "adventure" ? "adventure" : "run";
  }

  function bgmBpm(mode = bgmMode()) {
    return mode === "boss" ? 172 : mode === "fever" ? 176 : mode === "daily" ? 168 : mode === "event" ? 164 : 156;
  }

  function bgmTargetVolume(mode = bgmMode()) {
    return mode === "boss" ? 0.062 : mode === "fever" ? 0.066 : mode === "event" ? 0.058 : 0.052;
  }

  function startBgm() {
    if (state.muted || !["playing", "perkchoice"].includes(state.mode)) return;
    const audio = ensureAudio();
    if (!audio) return;
    if (audio.state === "suspended") audio.resume();
    const bgm = ensureBgm(audio);
    if (!bgm) return;
    const now = audio.currentTime;
    const mode = bgmMode();
    bgm.active = true;
    bgm.mode = mode;
    if (!bgm.nextStepTime || bgm.nextStepTime < now) bgm.nextStepTime = now + 0.04;
    bgm.master.gain.cancelScheduledValues(now);
    bgm.master.gain.setValueAtTime(Math.max(0.0001, bgm.master.gain.value), now);
    bgm.master.gain.linearRampToValueAtTime(bgmTargetVolume(mode), now + 0.45);
  }

  function stopBgm(fade = true) {
    const bgm = state.bgm;
    if (!bgm || !bgm.master || !state.audio) return;
    const now = state.audio.currentTime;
    bgm.active = false;
    bgm.master.gain.cancelScheduledValues(now);
    bgm.master.gain.setValueAtTime(Math.max(0.0001, bgm.master.gain.value), now);
    bgm.master.gain.linearRampToValueAtTime(0.0001, now + (fade ? 0.38 : 0.04));
  }

  function scheduleBgmTone(freq, time, duration, type, gainValue, detune = 0) {
    const audio = state.audio;
    const bgm = state.bgm;
    if (!audio || !bgm || !bgm.master || freq <= 0) return;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    if (detune) osc.detune.setValueAtTime(detune, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainValue), time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + Math.max(0.025, duration));
    osc.connect(gain);
    gain.connect(bgm.master);
    osc.start(time);
    osc.stop(time + duration + 0.03);
  }

  function scheduleBgmNoise(time, duration, gainValue, filterType = "highpass", frequency = 2200) {
    const audio = state.audio;
    const bgm = state.bgm;
    if (!audio || !bgm || !bgm.master) return;
    const buffer = audio.createBuffer(1, Math.max(1, Math.floor(audio.sampleRate * duration)), audio.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = random(-1, 1) * (1 - i / data.length);
    const source = audio.createBufferSource();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();
    source.buffer = buffer;
    filter.type = filterType;
    filter.frequency.setValueAtTime(frequency, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainValue), time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(bgm.master);
    source.start(time);
    source.stop(time + duration + 0.02);
  }

  function noteFreq(base, semitone) {
    return base * (2 ** (semitone / 12));
  }

  function scheduleBgmStep(step, time, stepDuration, mode) {
    const heavy = mode === "boss" || mode === "fever";
    const root = mode === "adventure" ? 61.74 : mode === "boss" ? 51.91 : 55;
    const bassPattern = mode === "boss"
      ? [0, 0, 7, 0, 6, 0, 10, 7, 0, 0, 7, 0, 13, 10, 7, 6]
      : [0, 0, 7, 0, 10, 7, 5, 7, 0, 0, 7, 0, 12, 10, 7, 5];
    const leadPattern = mode === "boss"
      ? [24, 19, 22, 18, 24, 19, 25, 22, 24, 19, 22, 18, 27, 25, 22, 19]
      : [19, 15, 17, 12, 19, 15, 22, 17, 19, 15, 17, 12, 24, 22, 19, 17];
    const bassNote = bassPattern[step % bassPattern.length];
    if (step % 4 === 0 || (heavy && step % 8 === 6)) scheduleBgmTone(72, time, stepDuration * 1.1, "sine", heavy ? 0.045 : 0.036, -900);
    if (step % 8 === 4 || step % 16 === 12) scheduleBgmNoise(time, 0.08, heavy ? 0.026 : 0.02, "bandpass", 1800);
    if (step % 2 === 1 || heavy) scheduleBgmNoise(time, 0.028, heavy ? 0.012 : 0.008, "highpass", 5200);
    if ([0, 3, 6, 8, 11, 14].includes(step % 16)) {
      scheduleBgmTone(noteFreq(root, bassNote), time, stepDuration * 1.6, "sawtooth", heavy ? 0.025 : 0.019, -5);
    }
    if (step % 4 === 0) {
      scheduleBgmTone(noteFreq(root * 2, bassNote + 12), time, stepDuration * 2.6, "triangle", mode === "boss" ? 0.014 : 0.011);
      scheduleBgmTone(noteFreq(root * 2, bassNote + 19), time, stepDuration * 2.4, "triangle", mode === "boss" ? 0.01 : 0.008);
    }
    if ((heavy && step % 2 === 0) || (!heavy && [2, 5, 10, 13].includes(step % 16))) {
      const lead = leadPattern[step % leadPattern.length];
      scheduleBgmTone(noteFreq(root * 2, lead), time, stepDuration * 0.82, mode === "boss" ? "square" : "sawtooth", heavy ? 0.014 : 0.01, step % 4 === 0 ? 4 : -4);
    }
  }

  function updateBgm() {
    if (state.muted || !["playing", "perkchoice"].includes(state.mode)) {
      stopBgm(true);
      return;
    }
    startBgm();
    const audio = state.audio;
    const bgm = state.bgm;
    if (!audio || !bgm || !bgm.active) return;
    const mode = bgmMode();
    const now = audio.currentTime;
    if (mode !== bgm.mode) {
      bgm.mode = mode;
      bgm.master.gain.cancelScheduledValues(now);
      bgm.master.gain.setValueAtTime(Math.max(0.0001, bgm.master.gain.value), now);
      bgm.master.gain.linearRampToValueAtTime(bgmTargetVolume(mode), now + 0.24);
    }
    let safety = 0;
    while (bgm.nextStepTime < now + 0.26 && safety < 24) {
      const stepDuration = 60 / bgmBpm(mode) / 4;
      scheduleBgmStep(bgm.step % 16, bgm.nextStepTime, stepDuration, mode);
      bgm.step += 1;
      bgm.nextStepTime += stepDuration;
      safety += 1;
    }
  }

  function hitEllipseRect(cx, cy, rx, ry, x, y, w, h) {
    return rectVsEllipse(x - w * 0.5, y - h * 0.5, w, h, cx, cy, rx, ry);
  }

  function rectVsEllipse(x, y, w, h, cx, cy, rx, ry) {
    if (w <= 0 || h <= 0) return false;
    const px = clamp(cx, x, x + w);
    const py = clamp(cy, y, y + h);
    const nx = (px - cx) / rx;
    const ny = (py - cy) / ry;
    return nx * nx + ny * ny <= 1;
  }

  function ellipseDistance(cx, cy, rx, ry, x, y, r) {
    const dx = (x - cx) / (rx + r);
    const dy = (y - cy) / (ry + r);
    return dx * dx + dy * dy <= 1;
  }

  function roundRect(x, y, w, h, r) {
    const rr = Math.min(r, w * 0.5, h * 0.5);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function formatScore(score) {
    if (score >= 10000) {
      const value = score / 10000;
      return `${Number.isInteger(value) ? value : value.toFixed(value >= 10 ? 1 : 2)}万`;
    }
    return String(score);
  }

  function setFly(active) {
    if (active) {
      const justPressed = !keys.has("PointerFly");
      keys.add("PointerFly");
      if (justPressed && state.mode === "playing") {
        hero.vy = Math.min(hero.vy - 12, -185);
        hero.flap = Math.max(hero.flap, 0.38);
        addTrail(hero.x - 46 * playScale(), hero.y + 18 * playScale());
      }
    } else {
      keys.delete("PointerFly");
    }
  }

  function setControlMode(mode) {
    state.controlMode = mode === "drag" ? "drag" : "tap";
    storageSet("shitSupermanMoveMode", state.controlMode);
    state.dragPointerId = null;
    keys.delete("PointerFly");
    updateMoveModeUi();
  }

  function updateMoveModeUi() {
    const drag = state.controlMode === "drag";
    tapMoveButton.classList.toggle("is-selected", !drag);
    dragMoveButton.classList.toggle("is-selected", drag);
    updateControlLayoutUi();
  }

  function setControlLayout(layout) {
    state.controlLayout = layout === "rightAttack" ? "rightAttack" : "leftAttack";
    storageSet("shitSupermanControlLayout", state.controlLayout);
    releaseCanvasControl();
    updateControlLayoutUi();
  }

  function updateControlLayoutUi() {
    const swapped = state.controlLayout === "rightAttack";
    document.body.classList.toggle("controls-swapped", swapped);
    if (controlSideButton) {
      controlSideButton.textContent = swapped ? "右攻左移" : "左攻右移";
      controlSideButton.setAttribute("aria-label", swapped ? "当前右半屏攻击，点按切换为左攻右移" : "当前左半屏攻击，点按切换为右攻左移");
    }
  }

  function bindPress(target, onDown, onUp = () => {}) {
    let lastTouchAt = 0;
    const down = (event) => {
      const now = performance.now();
      if (event.type.startsWith("touch")) lastTouchAt = now;
      if (event.type.startsWith("mouse") && now - lastTouchAt < 700) return;
      event.preventDefault();
      onDown(event);
    };
    const up = (event) => {
      const now = performance.now();
      if (event.type.startsWith("touch")) lastTouchAt = now;
      if (event.type.startsWith("mouse") && now - lastTouchAt < 700) return;
      event.preventDefault();
      onUp(event);
    };
    if (window.PointerEvent) {
      target.addEventListener("pointerdown", down);
      target.addEventListener("pointerup", up);
      target.addEventListener("pointercancel", up);
      target.addEventListener("lostpointercapture", up);
      return;
    }
    target.addEventListener("touchstart", down, { passive: false });
    target.addEventListener("touchend", up, { passive: false });
    target.addEventListener("touchcancel", up, { passive: false });
    target.addEventListener("mousedown", down);
    target.addEventListener("mouseup", up);
    target.addEventListener("mouseleave", up);
  }

  function bindGlobalRelease(onUp) {
    if (window.PointerEvent) {
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
      return;
    }
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchcancel", onUp);
    window.addEventListener("mouseup", onUp);
  }

  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("selectstart", (event) => event.preventDefault());
  document.addEventListener("dragstart", (event) => event.preventDefault());
  window.addEventListener("error", reportRuntimeIssue);
  window.addEventListener("unhandledrejection", reportRuntimeIssue);
  document.addEventListener("fullscreenchange", () => {
    updateFullscreenButton();
    updateOrientationHint();
  });
  document.addEventListener("webkitfullscreenchange", () => {
    updateFullscreenButton();
    updateOrientationHint();
  });
  document.addEventListener("msfullscreenchange", () => {
    updateFullscreenButton();
    updateOrientationHint();
  });
  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", () => setTimeout(() => {
    resize();
    updateOrientationHint();
  }, 160));
  document.addEventListener("visibilitychange", () => {
    state.last = 0;
    if (document.hidden && state.mode === "playing") {
      keys.clear();
      state.dragPointerId = null;
      state.mode = "paused";
      showMenu("已自动暂停", "继续", true, { pause: true });
    }
  });
  window.addEventListener("keydown", (event) => {
    if (["Space", "ArrowUp", "ArrowDown"].includes(event.code)) event.preventDefault();
    if (state.pendingPerks && state.pendingPerks.length > 0) {
      if (event.code === "Digit1") choosePendingPerkByIndex(0);
      if (event.code === "Digit2") choosePendingPerkByIndex(1);
      if (event.code === "Digit3") choosePendingPerkByIndex(2);
      if (event.code === "Digit4") choosePendingPerkByIndex(3);
      if (event.code === "KeyR") rerollPerkChoices();
      if (["Digit1", "Digit2", "Digit3", "Digit4", "KeyR"].includes(event.code)) return;
    }
    if (state.mode !== "playing" && ["Space", "ArrowUp", "KeyW"].includes(event.code)) {
      if (resetGame()) {
        keys.add(event.code);
        setFly(true);
      }
      return;
    }
    if (["Space", "ArrowUp", "KeyW"].includes(event.code)) {
      setFly(true);
    }
    keys.add(event.code);
    if (event.code === "KeyJ" || event.code === "ArrowRight") shoot();
    if (event.code === "KeyK") useUltimate();
    if (event.code === "KeyB") useInventoryItem("storm");
    if (event.code === "KeyP" || event.code === "Escape") togglePause();
    if (event.code === "Enter" && state.mode !== "playing") {
      if (state.mode === "paused") togglePause();
      else resetGame();
    }
  });
  window.addEventListener("keyup", (event) => {
    keys.delete(event.code);
    if (["Space", "ArrowUp", "KeyW"].includes(event.code) && !keys.has("Space") && !keys.has("ArrowUp") && !keys.has("KeyW")) {
      setFly(false);
    }
  });

  if (window.PointerEvent) {
    canvas.addEventListener("pointerdown", handleCanvasPress);
    canvas.addEventListener("pointermove", handleCanvasMove);
    canvas.addEventListener("pointerup", releaseCanvasControl);
    canvas.addEventListener("pointercancel", releaseCanvasControl);
    canvas.addEventListener("lostpointercapture", releaseCanvasControl);
  } else {
    bindPress(canvas, handleCanvasPress, releaseCanvasControl);
    canvas.addEventListener("touchmove", handleCanvasMove, { passive: false });
    canvas.addEventListener("mousemove", handleCanvasMove);
  }
  bindGlobalRelease(releaseCanvasControl);
  startButton.addEventListener("click", async () => {
    await lockLandscapeExperience();
    if (state.mode === "paused") togglePause();
    else {
      if (state.mode === "stageclear" && isStageMode() && activeStageNumber() < activeStageList().length) {
        setActiveStageNumber(Math.min(activeStageMax(), activeStageNumber() + 1));
      }
      resetGame();
    }
  });
  restartButton.addEventListener("click", async () => {
    await lockLandscapeExperience();
    resetGame();
  });
  if (homeButton) homeButton.addEventListener("click", returnHomeFromPause);
  if (orientationFullscreenButton) orientationFullscreenButton.addEventListener("click", lockLandscapeExperience);
  endlessModeButton.addEventListener("click", () => {
    state.gameMode = "endless";
    panelCopy.textContent = "无尽模式：后段会切换到新地图，并逐步出现奖励事件、奇遇胶囊与精英怪；每个英雄首次达到 50万、100万、250万、500万分时，各获得 1 颗自己的专属进化石。";
    updateMetaUi();
  });
  stageModeButton.addEventListener("click", () => {
    state.gameMode = "stage";
    state.selectedStage = Math.min(state.selectedStage, meta.maxStage);
    setMenuPage("stage");
    panelCopy.textContent = "闯关模式：普通关冲目标分，Boss 关要击败 Boss；后续关卡会加入受击限制，推荐先看关卡战力提示再带道具出战。";
    updateMetaUi();
  });
  if (adventureModeButton) {
    adventureModeButton.addEventListener("click", () => {
      state.gameMode = "adventure";
      state.selectedAdventureStage = Math.min(state.selectedAdventureStage, meta.maxAdventureStage);
      setMenuPage("stage");
      panelCopy.textContent = "冒险模式：分数、航图和契约要一起推进，关键进度会触发远征支援；适合练路线、拿补给和稳步推进高阶内容。";
      updateMetaUi();
    });
  }
  if (dailyModeButton) {
    dailyModeButton.addEventListener("click", () => {
      state.gameMode = "daily";
      const daily = dailyBossProfile();
      panelCopy.textContent = `每日挑战：今日Boss为${daily.name}。Boss战力固定为玩家当前实时战力的 20 倍，击败可领取每日大额奖励和便便币 +5；60秒内尽量多打伤害，弱点期全力爆发。`;
      updateMetaUi();
    });
  }
  upgradeHeroButton.addEventListener("click", upgradeHero);
  evolveHeroButton.addEventListener("click", evolveHero);
  if (signInButton) signInButton.addEventListener("click", signInToday);
  if (selectPoopHeroButton) selectPoopHeroButton.addEventListener("click", () => selectHero("poop"));
  if (selectIkunHeroButton) selectIkunHeroButton.addEventListener("click", () => selectHero("ikun"));
  if (growthPageButton) growthPageButton.addEventListener("click", () => setMenuPage("growth"));
  if (mailPageButton) mailPageButton.addEventListener("click", () => setMenuPage("mail"));
  if (heroPageButton) heroPageButton.addEventListener("click", () => setMenuPage("hero"));
  if (mountPageButton) mountPageButton.addEventListener("click", () => setMenuPage("mount"));
  if (dronePageButton) dronePageButton.addEventListener("click", () => setMenuPage("drone"));
  if (claimAllMailButton) claimAllMailButton.addEventListener("click", claimAllMailboxMessages);
  if (refreshMailButton) {
    refreshMailButton.addEventListener("click", () => {
      const added = syncMailboxMessages({ persist: true });
      renderMailPage();
      panelCopy.textContent = added > 0 ? `邮箱收到 ${added} 封新邮件。` : "邮箱已刷新，暂无新邮件。";
      showSystemToast(added > 0 ? `收到 ${added} 封新邮件` : "邮箱已刷新");
    });
  }
  if (buyHeroTrialPassButton) buyHeroTrialPassButton.addEventListener("click", buyTrialDayPass);
  if (buyMountTrialPassButton) buyMountTrialPassButton.addEventListener("click", buyTrialDayPass);
  if (equipmentPageButton) equipmentPageButton.addEventListener("click", () => setMenuPage("equipment"));
  if (shopPageButton) shopPageButton.addEventListener("click", () => setMenuPage("shop"));
  if (achievementPageButton) achievementPageButton.addEventListener("click", () => setMenuPage("achievement"));
  if (rulesPageButton) rulesPageButton.addEventListener("click", () => setMenuPage("rules"));
  if (moduleBackButton) moduleBackButton.addEventListener("click", () => setMenuPage("home"));
  shopCards.forEach((card) => {
    const key = card.dataset.shopKey;
    card.tabIndex = 0;
    card.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      showShopDetail(key);
    });
    card.addEventListener("focus", () => showShopDetail(key));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      showShopDetail(key);
    });
  });
  if (stageStartButton) {
    stageStartButton.addEventListener("click", async () => {
      await lockLandscapeExperience();
      if (!isStageMode()) state.gameMode = "stage";
      setActiveStageNumber(Math.min(activeStageNumber(), activeStageMax()));
      resetGame();
    });
  }
  if (perkRerollButton) perkRerollButton.addEventListener("click", rerollPerkChoices);
  buyShieldButton.addEventListener("click", () => buyShopItem("shield", () => buyItem("shield")));
  buyMagnetButton.addEventListener("click", () => buyShopItem("magnet", () => buyItem("magnet")));
  buyEnergyButton.addEventListener("click", () => buyShopItem("energy", () => buyItem("energy")));
  if (buyLuckyBoxButton) buyLuckyBoxButton.addEventListener("click", () => buyShopItem("luckyBox", buyLuckyBox));
  if (buyMaterialPackButton) buyMaterialPackButton.addEventListener("click", () => buyShopItem("material", buyMaterialPack));
  if (buyBattlePackButton) buyBattlePackButton.addEventListener("click", () => buyShopItem("battle", buyBattlePack));
  if (buyGearBoxButton) buyGearBoxButton.addEventListener("click", () => buyShopItem("gear", buyGearBox));
  if (buyRerollButton) buyRerollButton.addEventListener("click", () => buyShopItem("reroll", () => buyItem("reroll")));
  if (buyReviveButton) buyReviveButton.addEventListener("click", () => buyShopItem("revive", buyReviveCore));
  if (buyStormButton) buyStormButton.addEventListener("click", () => buyShopItem("storm", () => buyItem("storm")));
  if (buyWingButton) buyWingButton.addEventListener("click", () => buyShopItem("wing", () => buyItem("wing")));
  if (redeemForm) redeemForm.addEventListener("submit", redeemCode);
  if (sellWeakEquipmentButton) sellWeakEquipmentButton.addEventListener("click", () => sellEquipmentBatch("weak"));
  if (sellAllEquipmentButton) sellAllEquipmentButton.addEventListener("click", () => sellEquipmentBatch("all"));
  useShieldButton.addEventListener("click", () => useInventoryItem("shield"));
  useMagnetButton.addEventListener("click", () => useInventoryItem("magnet"));
  useEnergyButton.addEventListener("click", () => useInventoryItem("energy"));
  if (useStormButton) useStormButton.addEventListener("click", () => useInventoryItem("storm"));
  if (ultimateButton) ultimateButton.addEventListener("click", useUltimate);
  pauseButton.addEventListener("click", togglePause);
  if (endRunButton) endRunButton.addEventListener("click", endCurrentRun);
  if (fullscreenButton) fullscreenButton.addEventListener("click", toggleFullscreen);
  if (controlSideButton) {
    controlSideButton.addEventListener("click", () => {
      setControlLayout(state.controlLayout === "leftAttack" ? "rightAttack" : "leftAttack");
    });
  }
  tapMoveButton.addEventListener("click", () => setControlMode("tap"));
  dragMoveButton.addEventListener("click", () => setControlMode("drag"));
  if (qualityAutoButton) qualityAutoButton.addEventListener("click", () => setQualityMode("auto"));
  if (qualitySmoothButton) qualitySmoothButton.addEventListener("click", () => setQualityMode("smooth"));
  muteButton.addEventListener("click", () => {
    state.muted = !state.muted;
    muteButton.textContent = state.muted ? "静音" : "声音";
    if (state.muted) stopBgm(false);
    else startBgm();
  });

  for (const key of Object.keys(assets)) {
    const img = assets[key];
    img.addEventListener("load", draw, { once: true });
    img.addEventListener("error", () => showSystemToast("部分图像加载失败，已使用简化绘制。"), { once: true });
  }

  if (state.qualityMode === "smooth") state.effectiveQuality = "smooth";
  resize();
  updateFullscreenButton();
  updateMoveModeUi();
  updateControlLayoutUi();
  updateQualityUi();
  syncMailboxMessages({ persist: true });
  updateMetaUi();
  checkAchievements();
  setMenuPage("home");
  updateHud();
  draw();
  scheduleGameplayAssetWarmup("boot");
  requestAnimationFrame(loop);
})();
