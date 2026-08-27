#!/usr/bin/env node
/** Final pass: fix remaining Unturned references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['unturnedImages', 'unturnedImages'],
	["from '../data/unturned'", "from '../data/unturned'"],
	["from './unturned'", "from './unturned'"],
	['/undetected-unturned-hacks/', '/undetected-unturned-hacks/'],
	['/unturned-wallhack/', '/unturned-wallhack/'],
	['/unturned-radar-hack/', '/unturned-radar-hack/'],
	['/battleye-bypass/', '/battleye-bypass/'],
	['/unturned-hacks-2026/', '/unturned-hacks-2026/'],
	['/unturned-aimbot/', '/unturned-aimbot/'],
	['/unturned-esp/', '/unturned-esp/'],
	['/unturned-hacks/', '/unturned-esp/'],
	['Unturned Hacks', 'Unturned Hacks'],
	['Unturned hacks', 'Unturned hacks'],
	['Unturned wallhack', 'Unturned wallhack'],
	['Unturned radar', 'Unturned radar'],
	['Unturned Aimbot', 'Unturned Aimbot'],
	['Unturned ESP', 'Unturned ESP'],
	['Unturned', 'Unturned'],
	['BattlEye', 'BattlEye anti-cheat'],
	['battleye', 'battleye'],
	['unturnedhacks.com', 'unturnedhacks.com'],
	['operatorEsp', 'playerEsp'],
	['safezoneFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
