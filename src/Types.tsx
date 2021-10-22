export enum ItemSlot {
  Head = "head",
  Neck = "neck",
  Shoulders = "shoulders",
  Back = "back",
  Chest = "chest",
  Bracer = "bracer",
  Gloves = "gloves",
  Belt = "belt",
  Legs = "legs",
  Boots = "boots",
  Ring = "ring",
  Trinket = "trinket",
  Mainhand = "mainhand",
  Offhand = "offhand",
  Twohand = "twohand",
  Wand = "wand"
}

export interface Item {
  name: string,
  varName: string,
  id: number,
  stamina?: number,
  intellect?: number,
  spirit?: number,
  meta?: number,
  blue?: number,
  yellow?: number,
  red?: number,
  socketBonus?: SocketBonus,
  spellPower?: number,
  shadowPower?: number,
  firePower?: number,
  hasteRating?: number,
  hitRating?: number,
  critRating?: number,
  resilienceRating?: number,
  spellPenetration?: number,
  mp5?: number,
  setId?: number,
  displayId?: number,
  unique?: boolean,
  source: ItemSource
  phase: Phase,
}

export interface Enchant {
  name: string,
  varName: string,
  spellPower?: number,
  hitRating?: number,
  id: number,
  source: ItemSource,
  phase: Phase,
  mp5?: number,
  fireResist?: number,
  shadowResist?: number,
  arcaneResist?: number,
  natureResist?: number,
  frostResist?: number,
  stamina?: number,
  critRating?: number,
  threatReduction?: number,
  spellPenetration?: number,
  intellect?: number,
  resilienceRating?: number,
  spirit?: number,
  shadowPower?: number,
  firePower?: number,
}

export interface SocketBonus {
  spellPower?: number,
  stamina?: number,
  spirit?: number,
  hitRating?: number,
  resilienceRating?: number,
  critRating?: number,
  mp5?: number,
  intellect?: number,
}

export interface Talent {
  name?: string,
  varName?: string,
  rankIDs?: number[],
  iconName?: string,
  requirement?: TalentRequirement
}

export interface TalentRequirement {
  name: string,
  points: number
}

export enum TalentTree {
  Affliction = "Affliction",
  Demonology = "Demonology",
  Destruction = "Destruction"
}

export enum ItemSource {
  Sunwell = "Sunwell Plateau",
  ZulAman = "Zul'Aman",
  BlackTemple = "Black Temple",
  MountHyjal = "Mount Hyjal",
  BlackTempleAndMountHyjal = "Hyjal Summit & Black Temple",
  TempestKeep = "Tempest Keep",
  SerpentshrineCavern = "Serpentshrine Cavern",
  MagtheridonsLair = "Magtheridon's Lair",
  GruulsLair = "Gruul's Lair",
  Karazhan = "Karazhan",
  Naxxramas = "Naxxramas",
  AQ40 = "AQ40",
  BlackwingLair = "Blackwing Lair",
  ZulGurub = "Zul'Gurub",
  DoomLordKazzak = "Doom Lord Kazzak",
  Doomwalker = "Doomwalker",
  HeroicBloodFurnace = "Heroic Blood Furnace",
  HeroicUnderbog = "Heroic Underbog",
  HeroicSlavePens = "Heroic Slave Pens",
  HeroicBlackMorass = "Heroic Black Morass",
  HeroicArcatraz = "Heroic Arcatraz",
  HeroicSethekkHalls = "Heroic Sethekk Halls",
  HeroicManaTombs = "Heroic Mana-Tombs",
  HeroicOldHillsbradFoothills = "Heroic Old Hillsbrad Foothills",
  HeroicBotanica = "Heroic Botanica",
  HeroicHellfireRamparts = "Heroic Hellfire Ramparts",
  HeroicAuchenaiCrypts = "Heroic Auchenai Crypts",
  HeroicMagistersTerrace = "Heroic Magisters' Terrace",
  HeroicShadowLabyrinth = "Heroic Shadow Labyrinth",
  Mechanar = "The Mechanar",
  HellfireRamparts = "Hellfire Ramparts",
  BlackrockDepths = "Blackrock Depths",
  BlackMorass = "Black Morass",
  Steamvaults = "The Steamvaults",
  OldHillsbradFoothills = "Old Hillsbrad Foothills",
  AuchenaiCrypts = "Auchenai Crypts",
  ManaTombs = "Mana-Tombs",
  SethekkHalls = "Sethekk Halls",
  Arcatraz = "Arcatraz",
  Underbog = "The Underbog",
  SlavePens = "Slave Pens",
  ShadowLabyrinth = "Shadow Labyrinth",
  Botanica = "The Botanica",
  BloodFurnace = "The Blood Furnace",
  ShatteredHalls = "The Shattered Halls",
  MagistersTerrace = "Magisters' Terrace",
  StratholmeLive = "Stratholme (Live)",
  BadgeOfJustice = "Badge of Justice",
  MarkOfHonorHoldOrThrallmar = "Mark of Honor Hold/Thrallmar",
  SpiritShard = "Spirit Shard",
  ApexisShard = "Apexis Shard",
  Tailoring = "Tailoring",
  TailoringBoE = "Tailoring BoE",
  Engineering = "Engineering",
  Leatherworking = "Leatherworking",
  Enchanting = "Enchanting",
  Jewelcrafting = "Jewelcrafting",
  JewelcraftingBoE = "Jewelcrafting BoE",
  BlacksmithingBoE = "Blacksmithing BoE",
  Arena = "Arena",
  PVP = "PVP",
  BlessingsDeck = "Blessings Deck",
  WorldDrop = "World Drop",
  NetherstormRareSpawn = "Netherstorm Rare Spawn",
  BladesEdgeMountainsRareSpawn = "BEM Rare Spawn",
  ShadowmoonValleyRareSpawn = "Shadowmoon Valley Rare Spawn",
  KaelThasEncounter = "Kael'Thas (only during encounter)",
  LordAhune = "Lord Ahune",
  WarlockSpell = "Warlock Spell",
  LowerCityRevered = "Lower City - Revered",
  LowerCityHonored = "Lower City - Honored",
  AldorExalted = "The Aldor - Exalted",
  AldorRevered = "The Aldor - Revered",
  AldorHonored = "The Aldor - Honored",
  ScryersExalted = "The Scryers - Exalted",
  ScryersRevered = "The Scryers - Revered",
  ScryersHonored = "The Scryers - Honored",
  ScaleOfTheSandsExalted = "The Scale of the Sands - Exalted",
  ScaleOfTheSandsRevered = "The Scale of the Sands - Revered",
  ScaleOfTheSandsHonored = "The Scale of the Sands - Honored",
  ScaleOfTheSandsFriendly = "The Scale of the Sands - Friendly",
  VioletEyeExalted = "The Violet Eye - Exalted",
  VioletEyeRevered = "The Violet Eye - Revered",
  VioletEyeHonored = "The Violet Eye - Honored",
  VioletEyeFriendly = "The Violet Eye - Friendly",
  CenarionExpeditionExalted = "Cenarion Expedition - Exalted",
  CenarionExpeditionHonored = "Cenarion Expedition - Honored",
  KeepersOfTimeRevered = "Keepers of Time - Revered",
  KeepersOfTimeHonored = "Keepers of Time - Honored",
  ShatarRevered = "The Sha'tar - Revered",
  ShatarHonored = "The Sha'tar - Honored",
  ZandalarTribeExalted = "Zandalar Tribe - Exalted",
  ShatteredSunOffensiveExalted = "Shattered Sun Offensive - Exalted",
  ShatteredSunOffensiveRevered = "Shattered Sun Offensive - Revered",
  HonorHoldExalted = "Honor Hold - Exalted",
  ThrallmarExalted = "Thrallmar - Exalted",
  HonorHoldOrThrallmarRevered = "Honor Hold/Thrallmar - Revered",
  HonorHoldOrThrallmarHonored = "Honor Hold/Thrallmar - Honored",
  AshtongueDeathswornExalted = "Ashtongue Deathsworn - Exalted",
  ShadowmoonValleyQuest = "Shadowmoon Valley Quest",
  SteamvaultsQuest = "Steamvaults Quest",
  BladesEdgeMountainsQuest = "Blade's Edge Mountains Quest",
  SethekkHallsQuest = "Sethekk Halls Quest",
  AuchenaiCryptsQuest = "Auchenai Crypts Quest",
  NetherstormQuest = "Netherstorm Quest",
  TempestKeepQuest = "Tempest Keep Quest",
  CavernsOfTimeQuest = "Caverns of Time Quest",
  AuchindonQuest = "Auchindon Quest",
  HellfirePeninsulaQuest = "Hellfire Peninsula Quest",
  BloodFurnaceQuest = "The Blood Furnace Quest",
  SilithusQuest = "Silithus Quest",
  NagrandQuest = "NagrandQuest",
  ZangarmarshQuest = "Zangarmarsh Quest",
  TerokkarForestQuest = "Terokkar Forest Quest",
  ShatteredHallsQuest = "Shattered Halls Quest",
  NagrandQuestHordeOnly = 'Nagrand Quest (Horde)',
}

export type Phase = 0|1|2|3|4|5;

export enum TalentNames {
  suppression = 'suppression',
  improvedCorruption = 'improvedCorruption',
  improvedCurseOfWeakness = 'improvedCurseOfWeakness',
  improvedDrainSoul = 'improvedDrainSoul',
  improvedLifeTap = 'improvedLifeTap',
  soulSiphon = 'soulSiphon',
  improvedCurseOfAgony = 'improvedCurseOfAgony',
  felConcentration = 'felConcentration',
  amplifyCurse = 'amplifyCurse',
  grimReach = 'grimReach',
  nightfall = 'nightfall',
  empoweredCorruption = 'empoweredCorruption',
  shadowEmbrace = 'shadowEmbrace',
  siphonLife = 'siphonLife',
  curseOfExhaustion = 'curseOfExhaustion',
  shadowMastery = 'shadowMastery',
  contagion = 'contagion',
  darkPact = 'darkPact',
  improvedHowlOfTerror = 'improvedHowlOfTerror',
  malediction = 'malediction',
  unstableAffliction = 'unstableAffliction',
  improvedHealthstone = 'improvedHealthstone',
  improvedImp = 'improvedImp',
  demonicEmbrace = 'demonicEmbrace',
  improvedHealthFunnel = 'improvedHealthFunnel',
  improvedVoidwalker = 'improvedVoidwalker',
  felIntellect = 'felIntellect',
  improvedSuccubus = 'improvedSuccubus',
  felDomination = 'felDomination',
  felStamina = 'felStamina',
  demonicAegis = 'demonicAegis',
  masterSummoner = 'masterSummoner',
  unholyPower = 'unholyPower',
  improvedEnslaveDemon = 'improvedEnslaveDemon',
  demonicSacrifice = 'demonicSacrifice',
  masterConjuror = 'masterConjuror',
  manaFeed = 'manaFeed',
  masterDemonologist = 'masterDemonologist',
  demonicResilience = 'demonicResilience',
  soulLink = 'soulLink',
  demonicKnowledge = 'demonicKnowledge',
  demonicTactics = 'demonicTactics',
  summonFelguard = 'summonFelguard',
  improvedShadowBolt = 'improvedShadowBolt',
  cataclysm = 'cataclysm',
  bane = 'bane',
  aftermath = 'aftermath',
  improvedFirebolt = 'improvedFirebolt',
  improvedLashOfPain = 'improvedLashOfPain',
  devastation = 'devastation',
  shadowburn = 'shadowburn',
  intensity = 'intensity',
  destructiveReach = 'destructiveReach',
  improvedSearingPain = 'improvedSearingPain',
  pyroclasm = 'pyroclasm',
  improvedImmolate = 'improvedImmolate',
  ruin = 'ruin',
  netherProtection = 'netherProtection',
  emberstorm = 'emberstorm',
  backlash = 'backlash',
  conflagrate = 'conflagrate',
  soulLeech = 'soulLeech',
  shadowAndFlame = 'shadowAndFlame',
  shadowfury = 'shadowfury'
}
