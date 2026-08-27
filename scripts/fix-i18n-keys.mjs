#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Unturned Hacks', 'Unturned Hacks'],
	['Unturned hacks', 'Unturned hacks'],
	['Unturned Hacks', 'Unturned Hacks'],
	['Unturned', 'Unturned'],
	['Unturned', 'Unturned'],
	['Call of Duty', 'Unturned'],
	['Unturned PC', 'Unturned PC'],
	['for Unturned', 'for Unturned'],
	['Unturned ', 'Unturned '],
	['unturned ', 'unturned '],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye anti-cheat', 'BattlEye anti-cheat'],
	['BattlEye', 'BattlEye anti-cheat'],
	['operatorEsp', 'playerEsp'],
	['safezoneFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['safezone', 'safezone'],
	['unturnedhacks.com', 'unturnedhacks.com'],
	['Trucos Unturned', 'Trucos Unturned'],
	['Triches Unturned', 'Triches Unturned'],
	['Cheats Unturned', 'Cheats Unturned'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en battleye key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tbattleye: \{/, "\t'battleye': {");
pagesEn = pagesEn.replace(/Unturned Unturned/g, 'Unturned');
pagesEn = pagesEn.replace(/for Unturned Unturned/g, 'for Unturned');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'battleye'/g, "'battleye'");
pagesI18n = pagesI18n.replace(/battleye:/g, "'battleye':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
