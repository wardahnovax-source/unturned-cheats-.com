#!/usr/bin/env node
/**
 * Completes escape-from-unturned-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'unturned-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'unturned-hack-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'unturned-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'unturned-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-unturned-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'unturned-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'unturned-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'unturned-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/unturned-unturned/g, 'unturned'],
	[/battleye-bypass-unturned/g, 'battleye-bypass'],
	[/Unturned/g, 'Unturned'],
	[/Unturned/g, 'Unturned'],
	[/Call of Duty/g, 'Unturned'],
	[/Unturned Wallhack/g, 'Unturned Wallhack'],
	[/Unturned Radar Hack/g, 'Unturned Radar Hack'],
	[/Unturned Cheat Features/g, 'Unturned Cheat Features'],
	[/Unturned Cheat Pricing/g, 'Unturned Cheat Pricing'],
	[/Unturned Cheat Setup/g, 'Unturned Cheat Setup'],
	[/Unturned Cheat Status/g, 'Unturned Cheat Status'],
	[/Unturned Cheat Support/g, 'Unturned Cheat Support'],
	[/Unturned squad fight/g, 'Unturned squad fight'],
	[/Unturned squad builder/g, 'Unturned loadout builder'],
	[/Unturned store header/g, 'Unturned header'],
	[/Unturned wasteland combat/g, 'Unturned battle royale combat'],
	[/Unturned loadout builder/g, 'Unturned loadout builder'],
	[/Unturned pricing/g, 'Unturned pricing'],
	[/Unturned BattlEye anti-cheat/g, 'Unturned BattlEye anti-cheat'],
	[/on Unturned/g, 'on Unturned'],
	[/for Unturned/g, 'for Unturned'],
	[/Unturned guides/g, 'Unturned guides'],
	[/Unturned guide/g, 'Unturned guide'],
	[/Unturned hileleri/g, 'Unturned hileleri'],
	[/Unturned hile/g, 'Unturned hile'],
	[/Unturned hileleri/g, 'Unturned hileleri'],
	[/cheatów Unturned/g, 'cheatów Unturned'],
	[/cheat Unturned/g, 'cheat Unturned'],
	[/cheats Unturned/g, 'cheats Unturned'],
	[/trucos Unturned/g, 'trucos Unturned'],
	[/triche Unturned/g, 'triche Unturned'],
	[/trucchi Unturned/g, 'trucchi Unturned'],
	[/Wallhack Unturned/g, 'Unturned Wallhack'],
	[/cheat Unturned undetected/g, 'cheat Unturned undetected'],
	[/cheats Unturned undetected/g, 'cheats Unturned undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/session and scav-run/g, 'session and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/battleye/gi, 'battleye'],
	[/BattlEye/g, 'BattlEye anti-cheat'],
	[/escape-from-unturned-hacks/g, 'escape-from-unturned-hacks'],
	[/escape-from-unturned/g, 'unturned'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Unturned'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Unturned anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Unturned Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Unturned guides/g, 'Unturned guides');
	content = content.replace(/Unturned guide/g, 'Unturned guide');
	content = content.replace(/Unturned hileleri/g, 'Unturned hileleri');
	content = content.replace(/Unturned hile/g, 'Unturned hile');
	content = content.replace(/cheat Unturned/g, 'cheat Unturned');
	content = content.replace(/cheats Unturned/g, 'cheats Unturned');
	content = content.replace(/trucos Unturned/g, 'trucos Unturned');
	content = content.replace(/triche Unturned/g, 'triche Unturned');
	content = content.replace(/trucchi Unturned/g, 'trucchi Unturned');
	content = content.replace(/cheatów Unturned/g, 'cheatów Unturned');
	content = content.replace(/читов Unturned/g, 'читов Unturned');
	content = content.replace(/читів Unturned/g, 'читів Unturned');
	content = content.replace(/Unturnedチート/g, 'Unturnedチート');
	content = content.replace(/Unturned 치트/g, 'Unturned 치트');
	content = content.replace(/Unturned作弊/g, 'Unturned作弊');
	content = content.replace(/Unturned rehberleri/g, 'Unturned rehberleri');
	content = content.replace(/Unturned gidsen/g, 'Unturned gidsen');
	content = content.replace(/Unturned průvodce/g, 'Unturned průvodce');
	content = content.replace(/Unturned guider/g, 'Unturned guider');
	content = content.replace(/Unturned related/g, 'Unturned related');
	content = content.replace(/Unturned ガイド/g, 'Unturned ガイド');
	content = content.replace(/Unturned 가이드/g, 'Unturned 가이드');
	content = content.replace(/Unturned指南/g, 'Unturned指南');
	content = content.replace(/Unturned गाइड/g, 'Unturned गाइड');
	content = content.replace(/Unturned panduan/g, 'Unturned panduan');
	content = content.replace(/Unturned คู่มือ/g, 'Unturned คู่มือ');
	content = content.replace(/Unturned hướng dẫn/g, 'Unturned hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Unturned Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
