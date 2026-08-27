import guideThumbnails from './guide-thumbnails.generated.json';

export interface OtherGameGuide {
	url: string;
	label: string;
	title: string;
	description: string;
	accent: string;
	hue: number;
	thumbnail: string;
	thumbnailAlt: string;
}

/** Accent lines cycling like the reference DayZ template cards. */
const ACCENTS = ['#27ae60', '#f1a820', '#5dade2', '#e74c3c', '#9b59b6', '#1abc9c'] as const;

const GAME_PATTERNS: ReadonlyArray<{
	pattern: RegExp;
	game: string;
	topics: string;
	guideType: string;
}> = [
	{ pattern: /sandraidersofsophie|sandraiders/i, game: 'Sand Raiders', topics: 'desert raids, vehicles, and loot runs', guideType: 'Raid Guide' },
	{ pattern: /arcraiders/i, game: 'ARC Raiders', topics: 'extraction loops, loot routes, and PvP timing', guideType: 'Extraction Guide' },
	{ pattern: /genshin/i, game: 'Genshin Impact', topics: 'combat rotations, exploration, and team builds', guideType: 'Combat Guide' },
	{ pattern: /dbd/i, game: 'Dead by Daylight', topics: 'perks, chase paths, and gen pressure', guideType: 'Survivor Guide' },
	{ pattern: /tarkov|eft|besttarkov/i, game: 'Escape from Tarkov', topics: 'kit planning, map routes, and extract timing', guideType: 'Raid Prep Guide' },
	{ pattern: /unturned/i, game: 'Unturned', topics: 'ESP, aimbot, and survival tools', guideType: 'Features Guide' },
	{ pattern: /warthunder/i, game: 'War Thunder', topics: 'vehicle ESP, aim assist, and battle awareness', guideType: 'Combat Guide' },
	{ pattern: /fortnite|fncheat|fn/i, game: 'Fortnite', topics: 'aimbot, ESP, and build combat', guideType: 'Battle Royale Guide' },
	{ pattern: /marathon/i, game: 'Marathon', topics: 'movement, loadouts, and map control', guideType: 'Multiplayer Guide' },
	{ pattern: /battlefield/i, game: 'Battlefield', topics: 'vehicles, conquest lanes, and squad play', guideType: 'Multiplayer Guide' },
	{ pattern: /lol|league/i, game: 'League of Legends', topics: 'map awareness, last hitting, and team fights', guideType: 'Ranked Guide' },
	{ pattern: /warzone|cod/i, game: 'Call of Duty', topics: 'movement, loadouts, and map control', guideType: 'Multiplayer Guide' },
	{ pattern: /valo/i, game: 'Valorant', topics: 'crosshair placement, utility, and agent picks', guideType: 'Competitive Guide' },
	{ pattern: /grayzone/i, game: 'Gray Zone Warfare', topics: 'tactical movement, squad comms, and extraction', guideType: 'Tactical Guide' },
	{ pattern: /overwatch/i, game: 'Overwatch', topics: 'hero picks, team comps, and aim tools', guideType: 'Hero Guide' },
	{ pattern: /theisle|isle/i, game: 'The Isle', topics: 'dino survival, hunting routes, and growth', guideType: 'Survival Guide' },
	{ pattern: /thefinals/i, game: 'The Finals', topics: 'destruction, cash-out timing, and team roles', guideType: 'Arena Guide' },
	{ pattern: /dayz/i, game: 'DayZ', topics: 'loot routes, base building, and PvP zones', guideType: 'Survival Guide' },
	{ pattern: /marvel|rivals/i, game: 'Marvel Rivals', topics: 'hero synergy, team fights, and map control', guideType: 'Hero Guide' },
	{ pattern: /rust/i, game: 'Rust', topics: 'base raids, resource runs, and PvP', guideType: 'Survival Guide' },
	{ pattern: /palworld/i, game: 'Palworld', topics: 'pal teams, base layout, and boss fights', guideType: 'Base and Combat Guide' },
	{ pattern: /r6|siege/i, game: 'Rainbow Six Siege', topics: 'operator picks, site setups, and entry timing', guideType: 'Operator Guide' },
	{ pattern: /caliber/i, game: 'Caliber', topics: 'operator roles, loadouts, and objective control', guideType: 'Tactical Guide' },
	{ pattern: /hunt/i, game: 'Hunt: Showdown', topics: 'clues, boss fights, and extract routes', guideType: 'Bounty Hunt Guide' },
	{ pattern: /destiny/i, game: 'Destiny 2', topics: 'builds, raids, and PvP loadouts', guideType: 'Guardian Guide' },
	{ pattern: /squad/i, game: 'Squad', topics: 'squad tactics, vehicle ops, and map control', guideType: 'Tactical Guide' },
	{ pattern: /bodycam/i, game: 'Bodycam', topics: 'realistic FPS movement and combat', guideType: 'Combat Guide' },
	{ pattern: /oncehuman/i, game: 'Once Human', topics: 'base building, deviants, and zone control', guideType: 'Survival Guide' },
	{ pattern: /reforger/i, game: 'Arma Reforger', topics: 'squad tactics, vehicles, and combined arms', guideType: 'MilSim Guide' },
	{ pattern: /backrooms/i, game: 'Backrooms', topics: 'navigation, entity avoidance, and exits', guideType: 'Horror Guide' },
	{ pattern: /meccha|mecca/i, game: 'Mech Arena', topics: 'mech loadouts, arena positioning, and DPS', guideType: 'Arena Guide' },
	{ pattern: /abi/i, game: 'Arena Breakout Infinite', topics: 'loot routes, extracts, and loadout value', guideType: 'Extraction Guide' },
	{ pattern: /thefront/i, game: 'The Front', topics: 'base defense, crafting, and PvP raids', guideType: 'Survival Guide' },
	{ pattern: /lostark/i, game: 'Lost Ark', topics: 'classes, raids, and island progression', guideType: 'MMO Guide' },
	{ pattern: /warframe/i, game: 'Warframe', topics: 'frames, mods, and mission farming', guideType: 'Tenno Guide' },
];

/** Raw list — duplicates kept per request. */
const OTHER_GAME_GUIDE_URLS = [
	'https://arcraiderscheat.net/',
	'https://genshincheats.net/',
	'https://dbdcheats.net/',
	'https://tarkovcheats.net/',
	'https://unturnedcheats.net/',
	'https://unturnedcheats.com/',
	'https://warthundercheats.com/',
	'https://arcraiderscheat.net/',
	'https://genshincheats.net/',
	'https://dbdcheats.net/',
	'https://arcraiderscheat.net/',
	'https://genshincheats.net/',
	'https://dbdcheats.net/',
	'https://tarkovcheats.net/',
	'https://fortniteaimbot.com/',
	'https://marathoncheats.org/',
	'https://battlefieldcheats.org/',
	'https://lolcheats.org/',
	'https://warzonecheats.org/',
	'https://valocheats.com/',
	'https://grayzonecheats.com/',
	'https://arcraiderscheats.org/',
	'https://tarkovcheats.org/',
	'https://overwatchhacks.com/',
	'https://dbdcheats.org/',
	'https://theislehacks.org/',
	'https://islecheats.net/',
	'https://warthunderhacks.com/',
	'https://marathoncheats.cc/',
	'https://besttarkovcheats.com/',
	'https://thefinalscheats.org/',
	'https://dayzcheat.net/',
	'https://fncheats.net/',
	'http://islecheat.com',
	'http://islecheat.com',
	'http://marvelrivalscheat.net/',
	'http://meccacheats.com/',
	'http://rusthack.net',
	'http://warzonecheat.org/',
	'http://grayzonecheats.net/',
	'http://palworldhack.net/',
	'http://r6siegecheats.net/',
	'http://eftcheat.net/',
	'http://eftcheat.net/',
	'https://calibercheats.com/',
	'https://codcheats.net/',
	'https://huntcheats.com/',
	'https://lolcheat.net/',
	'https://marathonhacks.net/',
	'https://mecchahacks.com/',
	'https://palworldhack.com/',
	'https://tarkovhack.net/',
	'https://warthundercheats.net/',
	'https://huntshowdowncheats.com/',
	'https://destiny2cheats.com/',
	'https://tarkovhacks.net/',
	'https://r6siegecheats.com/',
	'https://sandraiderscheat.com/',
	'https://palworldhacks.com/',
	'https://squadhacks.com/',
	'https://eftcheats.net/',
	'https://marathonhack.net/',
	'https://abicheats.com/',
	'https://bodycamcheats.com/',
	'https://grayzonehacks.com/',
	'https://lolcheats.net/',
	'https://oncehumanhacks.com/',
	'https://palworldhacks.net/',
	'https://reforgercheats.com/',
	'https://rivalshacks.com/',
	'https://oncehumancheats.net/',
	'https://overwatchcheat.net/',
	'https://dayzhack.net/',
	'https://battlefieldcheat.com/',
	'https://abihacks.com/',
	'https://arcraidershack.com/',
	'https://backroomscheats.com/',
	'https://marvelrivalshacks.net/',
	'https://mecchachameleonhacks.com/',
	'https://mecchachameleonhacks.net/',
	'https://overwatch2cheats.com/',
	'https://sandraiderscheats.com/',
	'https://rivalscheats.net/',
	'https://squadcheat.com/',
	'https://sandraidersofsophiecheats.net/',
	'https://tarkovcheat.net/',
	'https://thefinalscheats.net/',
	'https://theislehacks.net/',
	'https://valoranthack.net/',
	'https://warzonehacks.net/',
	'https://thefrontcheats.com/',
	'https://lostarkcheats.net/',
	'https://valoranthacks.org/',
	'https://siegehacks.com/',
	'https://warframehacks.com/',
] as const;

function normalizeGuideUrl(raw: string): string {
	const trimmed = raw.trim();
	if (/^https?:\/\//i.test(trimmed)) return trimmed;
	return `https://${trimmed.replace(/^\/+/, '')}`;
}

function hostnameKey(url: string): string {
	try {
		return new URL(normalizeGuideUrl(url)).hostname.replace(/^www\./i, '').toLowerCase();
	} catch {
		return url.toLowerCase();
	}
}

function titleCaseGame(name: string): string {
	return name
		.split(/\s+/)
		.map((word) => (/^[A-Z0-9&:]+$/.test(word) ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
		.join(' ');
}

function fallbackFromHost(host: string): { game: string; topics: string; guideType: string } {
	const slug = host.replace(/\.(com|net|org|cc)$/i, '').replace(/cheats?|hacks?|aimbot|hack|cheat/gi, '');
	const game = titleCaseGame(slug.replace(/[-_]/g, ' ').trim() || host);
	return {
		game,
		topics: 'features, setup, and patch updates',
		guideType: 'Features Guide',
	};
}

function resolveGameMeta(host: string): { game: string; topics: string; guideType: string } {
	const hostSlug = host.replace(/\./g, '');
	for (const entry of GAME_PATTERNS) {
		if (entry.pattern.test(hostSlug)) {
			return { game: entry.game, topics: entry.topics, guideType: entry.guideType };
		}
	}
	return fallbackFromHost(host);
}

function resolveThumbnail(game: string): string {
	return (guideThumbnails as Record<string, string>)[game] ?? '/images/guides/default.webp';
}

function hashHue(input: string): number {
	let hash = 0;
	for (let i = 0; i < input.length; i += 1) {
		hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
	}
	return hash % 360;
}

export function buildOtherGameGuide(url: string, index: number): OtherGameGuide {
	const normalized = normalizeGuideUrl(url);
	const host = hostnameKey(normalized);
	const meta = resolveGameMeta(host);
	const accent = ACCENTS[index % ACCENTS.length];
	const hue = hashHue(`${host}-${index}`);

	return {
		url: normalized,
		label: meta.game.toUpperCase(),
		title: `${meta.game} ${meta.guideType}`,
		description: `A practical ${meta.game} guide covering ${meta.topics} for 2026 PC players.`,
		accent,
		hue,
		thumbnail: resolveThumbnail(meta.game),
		thumbnailAlt: `${meta.game} guide thumbnail`,
	};
}

export const otherGameGuides: OtherGameGuide[] = OTHER_GAME_GUIDE_URLS.map((url, index) =>
	buildOtherGameGuide(url, index),
);
