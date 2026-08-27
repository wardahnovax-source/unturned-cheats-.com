#!/usr/bin/env node
/**
 * Generate crisp hero WebP/PNG ladder from the full master PNG.
 * Applies Lanczos3 resize + light sharpen for HD / 4K displays.
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(ROOT, 'public/images/unturned-hacks-hero-full.png');
const outDir = path.join(ROOT, 'public/images');

/** Width ladder — includes 4K target for ultra-wide / retina screens. */
const sizes = [
	{ name: 'unturned-hacks-hero-640w', width: 640, sharpen: 0.45 },
	{ name: 'unturned-hacks-hero-1024w', width: 1024, sharpen: 0.55 },
	{ name: 'unturned-hacks-hero-1536w', width: 1536, sharpen: 0.65 },
	{ name: 'unturned-hacks-hero-1920w', width: 1920, sharpen: 0.75 },
	{ name: 'unturned-hacks-hero-2560w', width: 2560, sharpen: 0.9 },
	{ name: 'unturned-hacks-hero-3840w', width: 3840, sharpen: 1.05 },
];

const meta = await sharp(src).metadata();
const nativeWidth = meta.width ?? 1983;
const nativeHeight = meta.height ?? 793;

function buildPipeline(width, sharpenSigma) {
	let pipeline = sharp(src).resize({
		width,
		fit: 'inside',
		withoutEnlargement: false,
		kernel: sharp.kernel.lanczos3,
	});

	if (sharpenSigma > 0) {
		pipeline = pipeline.sharpen({
			sigma: sharpenSigma,
			m1: 1.05,
			m2: 0.45,
			x1: 2,
			y2: 10,
			y3: 18,
		});
	}

	return pipeline;
}

for (const { name, width, sharpen } of sizes) {
	const pipeline = buildPipeline(width, sharpen);
	await pipeline
		.clone()
		.webp({ quality: 94, effort: 6, smartSubsample: false })
		.toFile(path.join(outDir, `${name}.webp`));
	await pipeline.clone().png({ compressionLevel: 6 }).toFile(path.join(outDir, `${name}.png`));
	const info = await sharp(path.join(outDir, `${name}.webp`)).metadata();
	console.log(`Created ${name}.webp (${info.width}x${info.height})`);
}

/** Native master — no upscale, maximum detail from source art. */
await sharp(src)
	.sharpen({ sigma: 0.35, m1: 1, m2: 0.35, x1: 2, y2: 8, y3: 16 })
	.webp({ quality: 96, effort: 6, smartSubsample: false })
	.toFile(path.join(outDir, 'unturned-hacks-hero-native.webp'));

await sharp(src)
	.sharpen({ sigma: 0.35, m1: 1, m2: 0.35, x1: 2, y2: 8, y3: 16 })
	.png({ compressionLevel: 6 })
	.toFile(path.join(outDir, 'unturned-hacks-hero-native.png'));

console.log(`Native master: ${nativeWidth}x${nativeHeight}`);
console.log('Hero HD ladder ready.');
