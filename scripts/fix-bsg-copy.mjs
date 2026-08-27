#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'BattlEye security'],
	['Activision Status', 'Unturned Support'],
	['Activision Unturned', 'Unturned'],
	['Activision Support', 'Unturned Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'BattlEye guide'],
	['undetected EAC notes', 'undetected BattlEye notes'],
	['status.epicgames.com', 'www.escapefromunturned.com/support'],
	['www.epicgames.com/unturned', 'www.escapefromunturned.com'],
	['www.unturned.com/competitive', 'www.escapefromunturned.com'],
	['https://www.unturned.com/', 'https://www.escapefromunturned.com/'],
	['Unturned.com', 'Unturned'],
	['Unturned Competitive', 'Unturned'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
