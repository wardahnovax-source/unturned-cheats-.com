#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'unturned hacks', espWallhack: 'unturned hacks wallhack', aimbotCombat: 'unturned hacks aimbot', squadFight: 'unturned hacks', playerEsp: 'unturned hacks esp', headerArt: 'unturned hacks aimbot', cheatsPackage: 'unturned hacks radar', rebootFight: 'unturned hacks aimbot', battleRoyale: 'unturned hacks', battleRoyaleIsland: 'unturned hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Unturned ESP player tags hack'", "imageAlt: 'unturned hacks esp'"],
	["imageAlt: 'Unturned ESP radar hack'", "imageAlt: 'unturned hacks radar'"],
	["imageAlt: 'Unturned aimbot sniper kill'", "imageAlt: 'unturned hacks aimbot'"],
	["imageAlt: 'Unturned aimbot skeleton targeting'", "imageAlt: 'unturned hacks aimbot'"],
	["imageAlt: 'Unturned hacks ADS combat'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks setup PC activation'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks updates BattlEye maintenance'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks FAQ ESP aimbot'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks support license help'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Undetected unturned hacks ESP wallhack'", "imageAlt: 'undetected unturned hacks'"],
	["imageAlt: 'Unturned wallhack skeleton ESP'", "imageAlt: 'unturned hacks wallhack'"],
	["imageAlt: 'BattlEye bypass unturned ESP aimbot'", "imageAlt: 'unturned hacks battleye'"],
	["imageAlt: 'Unturned hacks 2026 ESP aimbot'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks combat aimbot'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hack download ESP aimbot'", "imageAlt: 'unturned hacks download'"],
	["imageAlt: 'Unturned mod menu ESP aimbot'", "imageAlt: 'unturned hacks mod menu'"],
	["imageAlt: 'Unturned soft aim aimbot settings'", "imageAlt: 'unturned hacks soft aim'"],
	["imageAlt: 'Best unturned hacks 2026 ESP'", "imageAlt: 'best unturned hacks'"],
	["imageAlt: 'Unturned aimbot hack combat'", "imageAlt: 'unturned hacks aimbot'"],
	["imageAlt: 'Unturned ESP hack wallhack'", "imageAlt: 'unturned hacks esp'"],
	["imageAlt: 'Unturned unlock all ESP aimbot guide'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks privacy policy'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks refund policy'", "imageAlt: 'unturned hacks'"],
	["imageAlt: 'Unturned hacks terms of use'", "imageAlt: 'unturned hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Unturned ${meta.altKeyword}`")
	.join("imageAlt: 'unturned hacks'")
	.split("galleryTitle: `Unturned Hacks ${topicName}`")
	.join("galleryTitle: 'unturned hacks'")
	.split("imageAlt: `Unturned hacks ${kind} policy`")
	.join("imageAlt: 'unturned hacks'")
	.split("galleryTitle: `Unturned Hacks ${kind} resources`")
	.join("galleryTitle: 'unturned hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
