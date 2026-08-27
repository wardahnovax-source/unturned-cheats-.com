#!/usr/bin/env node
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(ROOT, 'public/images/unturned-hacks-hero-full.png');
const outDir = path.join(ROOT, 'public/images');

const sizes = [
	{ name: 'unturned-hacks-hero-640w', width: 640 },
	{ name: 'unturned-hacks-hero-1024w', width: 1024 },
	{ name: 'unturned-hacks-hero-1536w', width: 1536 },
];

for (const { name, width } of sizes) {
	const img = sharp(src).resize({ width, withoutEnlargement: false });
	await img.clone().webp({ quality: 82 }).toFile(path.join(outDir, `${name}.webp`));
	await img.clone().png({ compressionLevel: 9 }).toFile(path.join(outDir, `${name}.png`));
	console.log(`Created ${name}.webp and ${name}.png`);
}

console.log('Hero variants ready.');
