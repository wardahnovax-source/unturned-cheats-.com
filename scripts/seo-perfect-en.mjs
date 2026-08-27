#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromunturned.com)
	['published by ${EXT.activision}', 'published by Battlestate Games (${EXT.unturned})'],
	['from ${EXT.activision}', 'from ${EXT.unturned}'],
	['via ${EXT.activision}', 'via ${EXT.unturned}'],
	['belong with ${EXT.activision}', 'belong with Battlestate Games'],
	['${EXT.activision} terms', 'Battlestate Games terms'],
	['${EXT.activision} season updates', '${EXT.unturned} wipe and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Unturned
	['vehicles, loot', 'players, zombies, loot'],
	['notice vehicles before they push your position', 'spot players and zombies before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'boss markers, safezone cues, and loot pins so only session-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and safezone awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and safezone awareness cues'],
	['loot or chest pins', 'loot and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['loot and chest markers', 'loot and container markers'],
	['chests worth the detour', 'high-value loot worth the detour'],
	['vehicles, and chests', 'bosses, and containers'],
	['loot, vehicles, and chests', 'loot, bosses, and containers'],
	['players, loot, and vehicles', 'players, zombies, and loot'],
	['players, loot, vehicles', 'players, zombies, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track bosses and containers'],
	['full BR loop', 'full session loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'session-critical'],
	['endgame circles', 'safezone holds'],
	['final circles', 'late-session safezones'],
	['final-circle scrims', 'safezone camp fights'],
	['before your first ranked block', 'before your first session'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range scav fights'],
	['Battle Pass', 'wipe progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every session',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and bolt-actions'],
	['AR / SMG / sniper', 'AR / SMG / bolt-action'],
	['players, loot, and vehicles', 'players, zombies, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and safezones'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RBattlEye out for', 'Reach out for'],
	['an BattlEye', 'a BattlEye'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['unturned hacks & unturned hacks', 'unturned hacks'],
	[
		'covering both unturned hacks and unturned hacks search intent',
		'covering both “unturned hacks” and “unturned cheats” search intent',
	],
	[
		'also searched as unturned hacks and unturned hack.',
		'built for Unturned on Windows PC.',
	],
	[
		'Unturned hacks vs unturned hacks — same stack, clear pages',
		'How this Unturned hacks pillar fits nearby pages',
	],
	[
		'Searchers use unturned hacks and unturned hacks interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/unturned-esp-hack/', '/unturned-esp/'],
	['/unturned-aimbot-hack/', '/unturned-aimbot/'],
	['/best-unturned-hacks/', '/unturned-hacks/'],
	['best Unturned hacks guide', 'Unturned hacks pillar'],
	['best Unturned hacks checklist', 'Unturned hacks checklist'],
	['best Unturned hacks', 'Unturned hacks'],
	[
		'Prefer softer tracking? Read the <a href="/unturned-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/unturned-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/unturned-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/unturned-hack-download/">cheat download</a>, <a href="/unturned-mod-menu/">mod menu</a>, <a href="/unturned-aimbot/">aimbot hack</a>, <a href="/unturned-esp/">ESP hack</a>.',
		'Related landings: <a href="/unturned-hack-download/">cheat download</a>, <a href="/unturned-mod-menu/">mod menu</a>, <a href="/unturned-aimbot/">aimbot</a>, <a href="/unturned-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
