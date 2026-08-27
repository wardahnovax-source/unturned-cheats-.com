#!/usr/bin/env node
/**
 * Generate themed guide-card thumbnails for the Reviews "Other Games Guides" grid.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public/images/guides');
const WIDTH = 640;
const HEIGHT = 360;

/** Per-game art direction — hue + accent + short tag for SVG motif. */
const GAME_THEMES = {
	'arc-raiders': { game: 'ARC Raiders', hue: 28, accent: '#f1a820', motif: 'extraction' },
	'arena-breakout-infinite': { game: 'Arena Breakout Infinite', hue: 42, accent: '#d4a017', motif: 'tactical' },
	'arma-reforger': { game: 'Arma Reforger', hue: 95, accent: '#7cb342', motif: 'milsim' },
	'backrooms': { game: 'Backrooms', hue: 48, accent: '#f5d76e', motif: 'horror' },
	'battlefield': { game: 'Battlefield', hue: 205, accent: '#5dade2', motif: 'warfare' },
	'bodycam': { game: 'Bodycam', hue: 0, accent: '#e74c3c', motif: 'fps' },
	'caliber': { game: 'Caliber', hue: 160, accent: '#1abc9c', motif: 'tactical' },
	'call-of-duty': { game: 'Call of Duty', hue: 38, accent: '#f39c12', motif: 'warfare' },
	'dayz': { game: 'DayZ', hue: 75, accent: '#82c91e', motif: 'survival' },
	'dead-by-daylight': { game: 'Dead by Daylight', hue: 350, accent: '#c0392b', motif: 'horror' },
	'destiny-2': { game: 'Destiny 2', hue: 265, accent: '#9b59b6', motif: 'scifi' },
	'escape-from-tarkov': { game: 'Escape from Tarkov', hue: 145, accent: '#27ae60', motif: 'extraction' },
	'fortnite': { game: 'Fortnite', hue: 280, accent: '#a855f7', motif: 'br' },
	'genshin-impact': { game: 'Genshin Impact', hue: 195, accent: '#48cae4', motif: 'fantasy' },
	'gray-zone-warfare': { game: 'Gray Zone Warfare', hue: 115, accent: '#58d68d', motif: 'tactical' },
	'hunt-showdown': { game: 'Hunt: Showdown', hue: 25, accent: '#e67e22', motif: 'western' },
	'league-of-legends': { game: 'League of Legends', hue: 210, accent: '#3498db', motif: 'moba' },
	'lost-ark': { game: 'Lost Ark', hue: 230, accent: '#6c5ce7', motif: 'mmo' },
	'marathon': { game: 'Marathon', hue: 320, accent: '#e056fd', motif: 'scifi' },
	'marvel-rivals': { game: 'Marvel Rivals', hue: 355, accent: '#ff4757', motif: 'hero' },
	'mech-arena': { game: 'Mech Arena', hue: 15, accent: '#ff6b35', motif: 'mech' },
	'once-human': { game: 'Once Human', hue: 170, accent: '#00b894', motif: 'survival' },
	'overwatch': { game: 'Overwatch', hue: 45, accent: '#f1c40f', motif: 'hero' },
	'palworld': { game: 'Palworld', hue: 185, accent: '#00cec9', motif: 'creature' },
	'rainbow-six-siege': { game: 'Rainbow Six Siege', hue: 200, accent: '#0984e3', motif: 'tactical' },
	'rust': { game: 'Rust', hue: 20, accent: '#d35400', motif: 'survival' },
	'sand-raiders': { game: 'Sand Raiders', hue: 35, accent: '#f39c12', motif: 'desert' },
	'squad': { game: 'Squad', hue: 130, accent: '#2ecc71', motif: 'milsim' },
	'the-finals': { game: 'The Finals', hue: 300, accent: '#fd79a8', motif: 'arena' },
	'the-front': { game: 'The Front', hue: 55, accent: '#f6b93b', motif: 'survival' },
	'the-isle': { game: 'The Isle', hue: 100, accent: '#6ab04c', motif: 'dino' },
	'unturned': { game: 'Unturned', hue: 155, accent: '#1a7a4a', motif: 'survival' },
	'valorant': { game: 'Valorant', hue: 0, accent: '#ff4655', motif: 'tactical' },
	'war-thunder': { game: 'War Thunder', hue: 215, accent: '#4a90e2', motif: 'vehicles' },
	'warframe': { game: 'Warframe', hue: 240, accent: '#5352ed', motif: 'scifi' },
	default: { game: 'PC Game', hue: 210, accent: '#5dade2', motif: 'tactical' },
};

function slugify(game) {
	return game
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function initials(game) {
	const words = game.split(/\s+/).filter(Boolean);
	if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
	return words
		.slice(0, 3)
		.map((w) => w[0])
		.join('')
		.toUpperCase();
}

function motifSvg(motif, accent) {
	const shapes = {
		extraction: `<path d="M80 280 L320 120 L560 280" stroke="${accent}" stroke-width="3" fill="none" opacity="0.35"/>
			<circle cx="320" cy="120" r="18" fill="${accent}" opacity="0.5"/>`,
		tactical: `<rect x="100" y="90" width="440" height="180" rx="8" stroke="${accent}" stroke-width="2" fill="none" opacity="0.25"/>
			<line x1="100" y1="180" x2="540" y2="180" stroke="${accent}" stroke-width="1.5" opacity="0.2"/>`,
		milsim: `<polygon points="320,80 420,280 220,280" stroke="${accent}" stroke-width="2" fill="${accent}" fill-opacity="0.08"/>
			<line x1="320" y1="80" x2="320" y2="300" stroke="${accent}" stroke-width="1" opacity="0.15"/>`,
		horror: `<circle cx="320" cy="170" r="70" stroke="${accent}" stroke-width="2" fill="none" opacity="0.2"/>
			<circle cx="295" cy="155" r="8" fill="${accent}" opacity="0.35"/>
			<circle cx="345" cy="155" r="8" fill="${accent}" opacity="0.35"/>`,
		warfare: `<rect x="60" y="220" width="520" height="40" fill="${accent}" opacity="0.12"/>
			<rect x="140" y="100" width="360" height="120" stroke="${accent}" stroke-width="2" fill="none" opacity="0.2"/>`,
		fps: `<circle cx="320" cy="180" r="55" stroke="${accent}" stroke-width="2" fill="none" opacity="0.35"/>
			<line x1="320" y1="180" x2="380" y2="150" stroke="${accent}" stroke-width="2" opacity="0.4"/>`,
		survival: `<path d="M120 260 Q320 80 520 260" stroke="${accent}" stroke-width="2" fill="none" opacity="0.3"/>
			<circle cx="320" cy="200" r="30" fill="${accent}" opacity="0.15"/>`,
		scifi: `<ellipse cx="320" cy="180" rx="160" ry="60" stroke="${accent}" stroke-width="2" fill="none" opacity="0.25"/>
			<circle cx="320" cy="180" r="12" fill="${accent}" opacity="0.45"/>`,
		br: `<polygon points="320,70 400,290 240,290" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="2" opacity="0.35"/>`,
		fantasy: `<path d="M200 260 C260 120 380 120 440 260" stroke="${accent}" stroke-width="2" fill="none" opacity="0.3"/>
			<circle cx="320" cy="150" r="24" fill="${accent}" opacity="0.2"/>`,
		western: `<rect x="180" y="200" width="280" height="8" fill="${accent}" opacity="0.25"/>
			<circle cx="320" cy="140" r="40" stroke="${accent}" stroke-width="2" fill="none" opacity="0.2"/>`,
		moba: `<rect x="140" y="100" width="360" height="200" rx="100" stroke="${accent}" stroke-width="2" fill="none" opacity="0.18"/>`,
		mmo: `<rect x="100" y="120" width="440" height="140" rx="12" stroke="${accent}" stroke-width="2" fill="${accent}" fill-opacity="0.06"/>`,
		hero: `<polygon points="320,90 370,250 270,250" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="2"/>`,
		mech: `<rect x="220" y="110" width="200" height="160" rx="16" stroke="${accent}" stroke-width="2" fill="${accent}" fill-opacity="0.1"/>
			<rect x="260" y="150" width="120" height="60" fill="${accent}" opacity="0.15"/>`,
		creature: `<circle cx="260" cy="200" r="35" fill="${accent}" opacity="0.15"/>
			<circle cx="380" cy="190" r="28" fill="${accent}" opacity="0.12"/>`,
		dino: `<path d="M180 250 Q240 120 320 180 Q400 240 460 250" stroke="${accent}" stroke-width="3" fill="none" opacity="0.3"/>`,
		desert: `<path d="M60 260 L200 180 L340 240 L520 160 L580 260 Z" fill="${accent}" fill-opacity="0.1" stroke="${accent}" stroke-width="1.5" opacity="0.3"/>`,
		arena: `<rect x="160" y="130" width="320" height="120" stroke="${accent}" stroke-width="2" fill="none" opacity="0.22"/>
			<line x1="320" y1="130" x2="320" y2="250" stroke="${accent}" stroke-width="1.5" opacity="0.15"/>`,
		vehicles: `<ellipse cx="320" cy="210" rx="180" ry="50" stroke="${accent}" stroke-width="2" fill="${accent}" fill-opacity="0.08"/>
			<rect x="240" y="160" width="160" height="50" rx="8" fill="${accent}" opacity="0.12"/>`,
	};

	return shapes[motif] ?? shapes.tactical;
}

function buildSvg(slug, theme) {
	const { game, hue, accent, motif } = theme;
	const init = initials(game);
	const bg1 = `hsl(${hue} 42% 14%)`;
	const bg2 = `hsl(${(hue + 28) % 360} 38% 8%)`;
	const glow = `hsl(${hue} 55% 38%)`;

	return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stop-color="${bg1}"/>
				<stop offset="100%" stop-color="${bg2}"/>
			</linearGradient>
			<radialGradient id="glow" cx="30%" cy="25%" r="65%">
				<stop offset="0%" stop-color="${glow}" stop-opacity="0.45"/>
				<stop offset="100%" stop-color="${glow}" stop-opacity="0"/>
			</radialGradient>
			<linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#fff" stop-opacity="0"/>
				<stop offset="50%" stop-color="#fff" stop-opacity="0.04"/>
				<stop offset="100%" stop-color="#fff" stop-opacity="0"/>
			</linearGradient>
		</defs>
		<rect width="100%" height="100%" fill="url(#bg)"/>
		<rect width="100%" height="100%" fill="url(#glow)"/>
		${motifSvg(motif, accent)}
		<text x="320" y="195" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="800" fill="#ffffff" fill-opacity="0.08" letter-spacing="4">${init}</text>
		<rect width="100%" height="100%" fill="url(#scan)"/>
		<rect x="0" y="0" width="100%" height="100%" fill="none" stroke="${accent}" stroke-opacity="0.15" stroke-width="2"/>
		<rect x="0" y="${HEIGHT - 4}" width="100%" height="4" fill="${accent}" fill-opacity="0.85"/>
	</svg>`;
}

await mkdir(OUT_DIR, { recursive: true });

const manifest = {};

for (const [slug, theme] of Object.entries(GAME_THEMES)) {
	const svg = buildSvg(slug, theme);
	const outPath = path.join(OUT_DIR, `${slug}.webp`);
	await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile(outPath);
	manifest[theme.game] = `/images/guides/${slug}.webp`;
	console.log(`Generated ${slug}.webp`);
}

await writeFile(
	path.join(ROOT, 'src/data/guide-thumbnails.generated.json'),
	`${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(`Done — ${Object.keys(GAME_THEMES).length} guide thumbnails.`);
