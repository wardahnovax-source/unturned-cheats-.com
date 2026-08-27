#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Unturned source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['unturned-esp', 'unturned-esp'],
	['unturned-aimbot', 'unturned-aimbot'],
	['battleye', 'battleye'],
	['undetected-unturned-hacks', 'undetected-unturned-hacks'],
	['unturned-wallhack', 'unturned-wallhack'],
	['unturned-radar-hack', 'unturned-radar-hack'],
	['unturned-hacks-2026', 'unturned-hacks-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['unturnedhacks.com', 'unturnedhacks.com'],
	['trucos-unturned', 'trucos-unturned'],
	['triche-unturned', 'triche-unturned'],
	['unturned-hacks', 'escape-from-unturned-hacks'],
	['cheats-unturned', 'cheats-unturned'],
	['trucchi-unturned', 'trucchi-unturned'],
	['cheaty-unturned', 'cheaty-unturned'],
	['chity-unturned', 'chity-unturned'],
	['chitov-unturned', 'chitov-unturned'],
	['chitiv-unturned', 'chitiv-unturned'],
	['cheatow-unturned', 'cheatow-unturned'],
	['hile-unturned', 'hile-unturned'],
	['unturned-hile', 'unturned-hile'],
	['unturned-esp-chity', 'unturned-esp-chity'],
	['unturned-aimbot-chity', 'unturned-aimbot-chity'],
	['unentdeckte-unturned-hacks', 'unentdeckte-escape-from-unturned-hacks'],
	['cheats-unturned-indetectaveis', 'cheats-unturned-indetectaveis'],
	['trucchi-unturned-indetectabili', 'trucchi-unturned-indetectabili'],
	['niewykrywalne-cheats-unturned', 'niewykrywalne-cheats-unturned'],
	['nedecektiruemye-chity-unturned', 'nedecektiruemye-chity-unturned'],
	['tespit-edilemeyen-unturned-hileleri', 'tespit-edilemeyen-unturned-hileleri'],
	['nedecektovani-chity-unturned', 'nedecektovani-chity-unturned'],
	['cheats-unturned-nedetectabile', 'cheats-unturned-nedetectabile'],
	['basta-unturned-hacks', 'basta-escape-from-unturned-hacks'],
	['battleye-bypass-trucos-unturned', 'battleye-bypass-trucos-unturned'],
	['battleye-bypass-triche-unturned', 'battleye-bypass-triche-unturned'],
	['battleye-bypass-cheats-unturned', 'battleye-bypass-cheats-unturned'],
	['battleye-bypass-chity-unturned', 'battleye-bypass-chity-unturned'],
	['battleye-bypass-unturned', 'battleye-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix battleye key in englishPaths
	content = content.replace(/\tbattleye: '/, "\t'battleye': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-unturned-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-unturned-hacks-hero.webp',
	'unturned-esp': '/images/escape-from-unturned-hacks-esp-wallhack.webp',
	'unturned-aimbot': '/images/escape-from-unturned-hacks-aimbot-combat.webp',
	features: '/images/escape-from-unturned-hacks-package.webp',
	pricing: '/images/escape-from-unturned-hacks-cover.webp',
	setup: '/images/unturned-loadout-builder.webp',
	updates: '/images/unturned-header-art.webp',
	faq: '/images/unturned-squad-fight.webp',
	support: '/images/escape-from-unturned-hacks-package.webp',
	undetected: '/images/unturned-battle-royale-combat.webp',
	wallhack: '/images/escape-from-unturned-hacks-esp-wallhack.webp',
	radar: '/images/unturned-player-esp.webp',
	'battleye': '/images/unturned-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-unturned-hacks-hero.webp',
	privacy: '/images/escape-from-unturned-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-unturned-hacks-cover.webp',
	terms: '/images/escape-from-unturned-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'unturned-esp', 'unturned-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'unturned-esp' | 'unturned-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/safezoneFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
