#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Unturned source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['unturned-esp', 'unturned-esp'],
	['unturned-aimbot', 'unturned-aimbot'],
	["'battleye'", "'battleye'"],
	['battleye-bypass', 'battleye-bypass'],
	['undetected-unturned-hacks', 'undetected-unturned-hacks'],
	['unturned-wallhack', 'unturned-wallhack'],
	['unturned-radar-hack', 'unturned-radar-hack'],
	['unturned-hacks-2026', 'unturned-hacks-2026'],
	['escape-from-unturned-hacks', 'escape-from-unturned-hacks'],
	['escape-from-unturned', 'unturned'],
	['Unturned', 'Unturned'],
	['Unturned', 'Unturned'],
	['Unturned Hacks', 'Unturned Hacks'],
	['Unturned hacks', 'Unturned hacks'],
	['Unturned hack', 'Unturned hack'],
	['Unturned ESP', 'Unturned ESP'],
	['Unturned Aimbot', 'Unturned Aimbot'],
	['Unturned wallhack', 'Unturned wallhack'],
	['Unturned radar', 'Unturned radar'],
	['Unturned firefights', 'Unturned firefights'],
	['Unturned combat', 'Unturned combat'],
	['Unturned patches', 'Unturned patches'],
	['Unturned updates', 'Unturned updates'],
	['Unturned setup', 'Unturned setup'],
	['Unturned license', 'Unturned license'],
	['Unturned licenses', 'Unturned licenses'],
	['Unturned sessions', 'Unturned sessions'],
	['in Unturned', 'in Unturned'],
	['for Unturned', 'for Unturned'],
	['Unturned on', 'Unturned on'],
	['Unturned or', 'Unturned or'],
	['Unturned\'s', 'Unturned\'s'],
	['Unturned ', 'Unturned '],
	['BattlEye anti-cheat', 'BattlEye anti-cheat'],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye bypass', 'BattlEye bypass'],
	['BattlEye Bypass', 'BattlEye Bypass'],
	['BattlEye', 'BattlEye anti-cheat'],
	['battleye', 'battleye'],
	['support@unturnedhacks.com', 'support@unturnedhacks.com'],
	['PEI, Washington, and Russia', 'PEI, Washington, and Russia'],
	['PEI, Washington and Russia', 'PEI, Washington and Russia'],
	['PvP fights', 'PvP fights'],
	['PvP fight', 'PvP fight'],
	['game sessions', 'game sessions'],
	['safezone', 'safezone'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['player tracker', 'player tracker'],
	['survival servers and PvP zones', 'survival servers and PvP zones'],
	['survival servers and PvP zones', 'survival servers and PvP zones'],
	['players & zombies', 'players & zombies'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Unturned combat pace'],
	['COD', 'Unturned'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Unturned Hacks',
	game: 'Unturned',
	checkout: 'Zadeyo',
	battleye: 'BattlEye anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.battleye/g, 'KW.battleye');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'PEI, Washington, and Russia'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
