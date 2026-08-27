#!/usr/bin/env node
/** Create 480w WebP variants for guide host thumbnails (lighter below-fold cards). */
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST_DIR = path.join(ROOT, 'public/images/guides/hosts');
const WIDTH = 480;

const files = (await readdir(HOST_DIR)).filter((f) => f.endsWith('.webp') && !f.includes('-480w'));

for (const file of files) {
	const input = path.join(HOST_DIR, file);
	const base = file.replace(/\.webp$/, '');
	const output = path.join(HOST_DIR, `${base}-480w.webp`);
	await sharp(input)
		.resize(WIDTH, Math.round((WIDTH * 9) / 16), { fit: 'cover', position: 'centre' })
		.webp({ quality: 78 })
		.toFile(output);
	console.log(`Optimized ${base}-480w.webp`);
}

console.log(`Done — ${files.length} host thumbnail variants.`);
