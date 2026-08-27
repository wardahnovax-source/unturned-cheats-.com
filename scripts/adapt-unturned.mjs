#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Unturned Hacks (unturnedhacks.com).
 * Run from project root: node scripts/adapt-unturned.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'unturned-aimbot'],
	['tarkov-esp', 'unturned-esp'],
	['tarkov-wallhack', 'unturned-wallhack'],
	['tarkov-radar-hack', 'unturned-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-unturned-hacks'],
	['tarkov-cheats-2026', 'unturned-hacks-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['tarkov-cheats', 'unturned-hacks'],
	['tarkov-cheat-download', 'unturned-hack-download'],
	['tarkov-mod-menu', 'unturned-mod-menu'],
	['tarkov-soft-aim', 'unturned-soft-aim'],
	['best-tarkov-cheats', 'best-unturned-hacks'],
	['tarkov-aimbot-hack', 'unturned-aimbot-hack'],
	['tarkov-esp-hack', 'unturned-esp-hack'],
	['tarkov-unlock-all', 'unturned-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Funturned-novaxware'],
	['https://tarkovcheats.org', 'https://unturnedhacks.com'],
	['https://www.tarkovcheats.org', 'https://www.unturnedhacks.com'],
	['www.tarkovcheats.org', 'www.unturnedhacks.com'],
	['tarkovcheats.org', 'unturnedhacks.com'],
	['support@tarkovcheats.org', 'support@unturnedhacks.com'],
	['project-name=besttarkovcheats', 'project-name=unturnedhacks'],
	['project-name=tarkovcheats', 'project-name=unturnedhacks'],
	['name = "besttarkovcheats"', 'name = "unturnedhacks"'],
	['name = "tarkovcheats"', 'name = "unturnedhacks"'],
	['"name": "tarkov-cheats"', '"name": "unturned-hacks"'],
	['undetected-tarkov-cheats', 'undetected-unturned-hacks'],
	['best-tarkov-cheats', 'best-unturned-hacks'],
	['tarkov-cheat-download', 'unturned-hack-download'],
	['tarkov-cheats-2026', 'unturned-hacks-2026'],
	['tarkov-radar-hack', 'unturned-radar-hack'],
	['tarkov-aimbot-hack', 'unturned-aimbot-hack'],
	['tarkov-esp-hack', 'unturned-esp-hack'],
	['tarkov-unlock-all', 'unturned-unlock-all'],
	['tarkov-soft-aim', 'unturned-soft-aim'],
	['tarkov-mod-menu', 'unturned-mod-menu'],
	['tarkov-wallhack', 'unturned-wallhack'],
	['tarkov-cheats', 'unturned-hacks'],
	['tarkov-aimbot', 'unturned-aimbot'],
	['tarkov-esp', 'unturned-esp'],
	['escape-from-tarkov-cheats', 'unturned-hacks'],
	['Escape from Tarkov', 'Unturned'],
	['escape from tarkov', 'unturned'],
	['Tarkov Cheats', 'Unturned Hacks'],
	['Tarkov Cheats', 'Unturned Hacks'],
	['Tarkov cheats', 'Unturned hacks'],
	['Tarkov cheat', 'Unturned hack'],
	['Tarkov hacks', 'Unturned hacks'],
	['Tarkov hack', 'Unturned hack'],
	['Tarkov Intel', 'Unturned Intel'],
	['TarkovCheatsSite', 'UnturnedHacksSite'],
	['Buy Tarkov Cheats', 'Buy Unturned Hacks'],
	['Customs, Woods, and Streets of Tarkov', 'PEI, Washington, and Russia'],
	['Customs, Woods and Streets of Tarkov', 'PEI, Washington and Russia'],
	['PMC raids and Scav runs', 'survival servers and PvP zones'],
	['PMC & Scav', 'players & zombies'],
	['PMC raids and Scav run', 'survival servers and PvP zones'],
	['PMC and Scav', 'players and zombies'],
	['PMCs and Scavs', 'players and zombies'],
	['PMCs', 'players'],
	['Scavs', 'zombies'],
	['Scav runs', 'survival sessions'],
	['Scav run', 'survival session'],
	['extract fights', 'PvP fights'],
	['extract fight', 'PvP fight'],
	['extract timer', 'player tracker'],
	['extract and loot markers', 'item and loot markers'],
	['extracts', 'safezones'],
	['extract', 'safezone'],
	['raid rounds', 'game sessions'],
	['raid flow', 'survival gameplay'],
	['raid', 'session'],
	['raids', 'sessions'],
	['Battle Royale', 'survival mode'],
	['tarkovImages', 'unturnedImages'],
	["from './tarkov'", "from './unturned'"],
	["from '../data/tarkov'", "from '../data/unturned'"],
	["from '../../data/tarkov'", "from '../../data/unturned'"],
	['fetch-tarkov-images', 'fetch-unturned-images'],
	['tarkov-hack-overlays', 'unturned-hack-overlays'],
	['fix-tarkov-copy', 'fix-unturned-copy'],
	['trucos-tarkov', 'trucos-unturned'],
	['triche-tarkov', 'triche-unturned'],
	['cheats-tarkov', 'cheats-unturned'],
	['trucchi-tarkov', 'trucchi-unturned'],
	['cheaty-tarkov', 'cheaty-unturned'],
	['chity-tarkov', 'chity-unturned'],
	['chitov-tarkov', 'chitov-unturned'],
	['chitiv-tarkov', 'chitiv-unturned'],
	['cheatow-tarkov', 'cheatow-unturned'],
	['hile-tarkov', 'hile-unturned'],
	['tarkov-hile', 'unturned-hile'],
	['tarkov-esp-chity', 'unturned-esp-chity'],
	['tarkov-aimbot-chity', 'unturned-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-unturned-hacks'],
	['cheats-tarkov-indetectaveis', 'cheats-unturned-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-unturned-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-unturned'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-unturned'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-unturned-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-unturned'],
	['cheats-tarkov-nedetectabile', 'cheats-unturned-nedetectabile'],
	['basta-tarkov-cheats', 'basta-unturned-hacks'],
	['tarkov-cheats-funktionen', 'unturned-hacks-funktionen'],
	['tarkov-cheats-functies', 'unturned-hacks-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-unturned'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-unturned'],
	['recursos-cheats-tarkov', 'recursos-cheats-unturned'],
	['undetected tarkov cheats', 'undetected unturned hacks'],
	['best tarkov cheats', 'best unturned hacks'],
	['tarkov wallhack', 'unturned wallhack'],
	['tarkov esp', 'unturned esp'],
	['tarkov aimbot', 'unturned aimbot'],
	['tarkov cheats', 'unturned hacks'],
	['tarkov cheat', 'unturned hack'],
	['tarkov hacks', 'unturned hacks'],
	['tarkov hack', 'unturned hack'],
	['what-are-tarkov-cheats', 'what-are-unturned-hacks'],
	['are-tarkov-cheats-undetected-in-2026', 'are-unturned-hacks-undetected-in-2026'],
	['pmc-raids-and-scav-runs', 'survival-servers-and-pvp-zones'],
	['tarkov-cheats-hero', 'unturned-hacks-hero'],
	['tarkov-cheats-logo', 'unturned-hacks-logo'],
	['tarkov-cheats-esp', 'unturned-hacks-esp'],
	['tarkov-cheats-wallhack', 'unturned-hacks-wallhack'],
	['tarkov-cheats-aimbot', 'unturned-hacks-aimbot'],
	['tarkov-cheats-aimbot-view', 'unturned-hacks-aimbot-view'],
	['tarkov-cheats-radar', 'unturned-hacks-radar'],
	['tarkov-cheats-raid', 'unturned-hacks-gameplay'],
	['tarkov-esp-', 'unturned-esp-'],
	['tarkov-aimbot-', 'unturned-aimbot-'],
	['tarkov-patch-notes', 'unturned-patch-notes'],
	['tarkov-esp-wallhack', 'unturned-esp-wallhack'],
	['tarkov-cheats-vs-ghostware', 'unturned-hacks-vs-ghostware'],
	['Tarkov', 'Unturned'],
	['tarkov', 'unturned'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-unturned.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameTarkovTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'unturned.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → unturned.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-unturned-images.mjs'],
		['tarkov-hack-overlays.mjs', 'unturned-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-unturned-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'unturned-aimbot': 'unturned-aimbot',
		'unturned-esp': 'unturned-esp',
		'unturned-wallhack': 'wallhack',
		'unturned-radar-hack': 'radar',
		'undetected-unturned-hacks': 'undetected',
		'unturned-hacks-2026': 'cheats-2026',
		'battleye-bypass': 'battleye',
		'unturned-hacks': 'hacks',
		'unturned-hack-download': 'cheat-download',
		'unturned-mod-menu': 'mod-menu',
		'unturned-soft-aim': 'soft-aim',
		'best-unturned-hacks': 'best-cheats',
		'unturned-aimbot-hack': 'aimbot-hack',
		'unturned-esp-hack': 'esp-hack',
		'unturned-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'unturned');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Unturned Hacks (unturnedhacks.com)...\n');
	await renamePageDirs();
	await renameTarkovTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, images, sync:brand, build.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
