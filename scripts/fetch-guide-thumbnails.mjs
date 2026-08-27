#!/usr/bin/env node
/**
 * Fetch each guide site's og:image and build cinematic card thumbnails (one per hostname).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public/images/guides/hosts');
const MANIFEST_PATH = path.join(ROOT, 'src/data/guide-host-thumbnails.generated.json');
const WIDTH = 640;
const HEIGHT = 360;

/** Steam / curated fallbacks when a site has no og:image. */
const GAME_FALLBACK_IMAGES = [
	{ pattern: /tarkov|eft|besttarkov/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/3932890/header.jpg' },
	{ pattern: /arcraiders|sandraiders/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2427520/header.jpg' },
	{ pattern: /dbd/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg' },
	{ pattern: /unturned/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg' },
	{ pattern: /warthunder/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg' },
	{ pattern: /fortnite|fncheat/i, url: 'https://cdn2.unrealengine.com/fortnite-ch4-lobby-background-1920x1080-1920x1080-fcc45.jpg' },
	{ pattern: /battlefield/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg' },
	{ pattern: /lol|league/i, url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
	{ pattern: /warzone|cod/i, url: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw3/MWIII-REVEAL-TOUT.jpg' },
	{ pattern: /valo/i, url: 'https://images.contentstack.io/v3/assets/bltb6530b271f6170b1/blt29a5c29afe43fac/6309572b3485141c2b404c87/VCT22_Jett_KV.png' },
	{ pattern: /grayzone/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2471100/header.jpg' },
	{ pattern: /overwatch/i, url: 'https://blz-static.akamaized.net/overwatch/media/images/ow2-logo-600x600.png' },
	{ pattern: /theisle|isle/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/376210/header.jpg' },
	{ pattern: /thefinals/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2073850/header.jpg' },
	{ pattern: /dayz/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg' },
	{ pattern: /marvel|rivals/i, url: 'https://cdn.marvelrivals.com/media/0c0c0c0c0c0c0c0c0c0c0c0c/rivals-key-art.jpg' },
	{ pattern: /rust/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg' },
	{ pattern: /palworld/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg' },
	{ pattern: /r6|siege/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg' },
	{ pattern: /hunt/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header.jpg' },
	{ pattern: /destiny/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg' },
	{ pattern: /squad/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/393380/header.jpg' },
	{ pattern: /bodycam/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2406770/header.jpg' },
	{ pattern: /oncehuman/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg' },
	{ pattern: /reforger/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1874880/header.jpg' },
	{ pattern: /backrooms/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1943950/header.jpg' },
	{ pattern: /lostark/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/header.jpg' },
	{ pattern: /warframe/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg' },
	{ pattern: /genshin/i, url: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.svg' },
	{ pattern: /meccha|mecca/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2670630/header.jpg' },
	{ pattern: /caliber/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/307950/header.jpg' },
	{ pattern: /abi/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2063730/header.jpg' },
	{ pattern: /thefront/i, url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2285150/header.jpg' },
];

const URLS = [
	'https://arcraiderscheat.net/',
	'https://genshincheats.net/',
	'https://dbdcheats.net/',
	'https://tarkovcheats.net/',
	'https://unturnedcheats.net/',
	'https://unturnedcheats.com/',
	'https://warthundercheats.com/',
	'https://arcraiderscheat.net/',
	'https://genshincheats.net/',
	'https://dbdcheats.net/',
	'https://arcraiderscheat.net/',
	'https://genshincheats.net/',
	'https://dbdcheats.net/',
	'https://tarkovcheats.net/',
	'https://fortniteaimbot.com/',
	'https://marathoncheats.org/',
	'https://battlefieldcheats.org/',
	'https://lolcheats.org/',
	'https://warzonecheats.org/',
	'https://valocheats.com/',
	'https://grayzonecheats.com/',
	'https://arcraiderscheats.org/',
	'https://tarkovcheats.org/',
	'https://overwatchhacks.com/',
	'https://dbdcheats.org/',
	'https://theislehacks.org/',
	'https://islecheats.net/',
	'https://warthunderhacks.com/',
	'https://marathoncheats.cc/',
	'https://besttarkovcheats.com/',
	'https://thefinalscheats.org/',
	'https://dayzcheat.net/',
	'https://fncheats.net/',
	'http://islecheat.com',
	'http://islecheat.com',
	'http://marvelrivalscheat.net/',
	'http://meccacheats.com/',
	'http://rusthack.net',
	'http://warzonecheat.org/',
	'http://grayzonecheats.net/',
	'http://palworldhack.net/',
	'http://r6siegecheats.net/',
	'http://eftcheat.net/',
	'http://eftcheat.net/',
	'https://calibercheats.com/',
	'https://codcheats.net/',
	'https://huntcheats.com/',
	'https://lolcheat.net/',
	'https://marathonhacks.net/',
	'https://mecchahacks.com/',
	'https://palworldhack.com/',
	'https://tarkovhack.net/',
	'https://warthundercheats.net/',
	'https://huntshowdowncheats.com/',
	'https://destiny2cheats.com/',
	'https://tarkovhacks.net/',
	'https://r6siegecheats.com/',
	'https://sandraiderscheat.com/',
	'https://palworldhacks.com/',
	'https://squadhacks.com/',
	'https://eftcheats.net/',
	'https://marathonhack.net/',
	'https://abicheats.com/',
	'https://bodycamcheats.com/',
	'https://grayzonehacks.com/',
	'https://lolcheats.net/',
	'https://oncehumanhacks.com/',
	'https://palworldhacks.net/',
	'https://reforgercheats.com/',
	'https://rivalshacks.com/',
	'https://oncehumancheats.net/',
	'https://overwatchcheat.net/',
	'https://dayzhack.net/',
	'https://battlefieldcheat.com/',
	'https://abihacks.com/',
	'https://arcraidershack.com/',
	'https://backroomscheats.com/',
	'https://marvelrivalshacks.net/',
	'https://mecchachameleonhacks.com/',
	'https://mecchachameleonhacks.net/',
	'https://overwatch2cheats.com/',
	'https://sandraiderscheats.com/',
	'https://rivalscheats.net/',
	'https://squadcheat.com/',
	'https://sandraidersofsophiecheats.net/',
	'https://tarkovcheat.net/',
	'https://thefinalscheats.net/',
	'https://theislehacks.net/',
	'https://valoranthack.net/',
	'https://warzonehacks.net/',
	'https://thefrontcheats.com/',
	'https://lostarkcheats.net/',
	'https://valoranthacks.org/',
	'https://siegehacks.com/',
	'https://warframehacks.com/',
];

function hostKey(url) {
	const normalized = url.startsWith('http') ? url : `https://${url}`;
	return new URL(normalized).hostname.replace(/^www\./i, '').toLowerCase();
}

function hostSlug(host) {
	return host.replace(/\./g, '-');
}

function extractOgImage(html) {
	const patterns = [
		/property=["']og:image(?::secure_url)?["'][^>]*content=["']([^"']+)["']/i,
		/content=["']([^"']+)["'][^>]*property=["']og:image/i,
		/name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i,
	];
	for (const pattern of patterns) {
		const match = html.match(pattern);
		if (match?.[1]) return match[1].replace(/&amp;/g, '&');
	}
	return null;
}

function fallbackForHost(host) {
	const slug = host.replace(/\./g, '');
	for (const entry of GAME_FALLBACK_IMAGES) {
		if (entry.pattern.test(slug)) return entry.url;
	}
	return null;
}

async function fetchHtml(url) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), 12000);
	try {
		const res = await fetch(url, {
			signal: controller.signal,
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; UnturnedHacksBot/1.0)',
				Accept: 'text/html,application/xhtml+xml',
			},
			redirect: 'follow',
		});
		if (!res.ok) return null;
		return await res.text();
	} catch {
		return null;
	} finally {
		clearTimeout(timer);
	}
}

async function downloadImage(url) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), 15000);
	try {
		const res = await fetch(url, {
			signal: controller.signal,
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; UnturnedHacksBot/1.0)' },
			redirect: 'follow',
		});
		if (!res.ok) return null;
		return Buffer.from(await res.arrayBuffer());
	} catch {
		return null;
	} finally {
		clearTimeout(timer);
	}
}

function gradeOverlay(hueShift = 0) {
	const tint = (hueShift % 360 + 360) % 360;
	return Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#000" stop-opacity="0.05"/>
				<stop offset="55%" stop-color="#000" stop-opacity="0.15"/>
				<stop offset="100%" stop-color="#0a1628" stop-opacity="0.72"/>
			</linearGradient>
			<radialGradient id="t" cx="18%" cy="18%" r="75%">
				<stop offset="0%" stop-color="hsl(${tint} 55% 42%)" stop-opacity="0.22"/>
				<stop offset="100%" stop-color="hsl(${tint} 55% 42%)" stop-opacity="0"/>
			</radialGradient>
		</defs>
		<rect width="100%" height="100%" fill="url(#t)"/>
		<rect width="100%" height="100%" fill="url(#v)"/>
	</svg>`);
}

async function processThumbnail(inputBuffer, host, index) {
	const hueShift = [...host].reduce((acc, ch) => acc + ch.charCodeAt(0), 0) + index * 17;
	const overlay = gradeOverlay(hueShift);

	return sharp(inputBuffer)
		.rotate()
		.resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
		.modulate({ brightness: 0.92, saturation: 1.08 })
		.composite([{ input: overlay, blend: 'over' }])
		.webp({ quality: 84 })
		.toBuffer();
}

async function resolveSourceUrl(pageUrl, host) {
	const html = await fetchHtml(pageUrl);
	if (html) {
		const og = extractOgImage(html);
		if (og) {
			try {
				return new URL(og, pageUrl).href;
			} catch {
				/* fall through */
			}
		}
	}
	return fallbackForHost(host);
}

async function buildHostThumbnail(host, pageUrl, index) {
	const slug = hostSlug(host);
	const outFile = path.join(OUT_DIR, `${slug}.webp`);

	try {
		const sourceUrl = await resolveSourceUrl(pageUrl, host);
		if (!sourceUrl) {
			console.warn(`SKIP ${host} — no image source`);
			return null;
		}

		const raw = await downloadImage(sourceUrl);
		if (!raw) {
			console.warn(`FAIL ${host} — download failed (${sourceUrl})`);
			return null;
		}

		const processed = await processThumbnail(raw, host, index);
		await sharp(processed).toFile(outFile);
		console.log(`OK ${host} ← ${sourceUrl}`);
		return `/images/guides/hosts/${slug}.webp`;
	} catch (error) {
		const fallback = fallbackForHost(host);
		if (!fallback) {
			console.warn(`FAIL ${host} — ${error.message}`);
			return null;
		}
		try {
			const raw = await downloadImage(fallback);
			if (!raw) return null;
			const processed = await processThumbnail(raw, host, index);
			await sharp(processed).toFile(outFile);
			console.log(`OK ${host} ← fallback ${fallback}`);
			return `/images/guides/hosts/${slug}.webp`;
		} catch (fallbackError) {
			console.warn(`FAIL ${host} — ${fallbackError.message}`);
			return null;
		}
	}
}

await mkdir(OUT_DIR, { recursive: true });

const uniqueHosts = new Map();
for (const url of URLS) {
	const host = hostKey(url);
	if (!uniqueHosts.has(host)) uniqueHosts.set(host, url.startsWith('http') ? url : `https://${url}`);
}

const manifest = {};
let index = 0;
for (const [host, pageUrl] of uniqueHosts) {
	if (manifest[host]) continue;
	const thumb = await buildHostThumbnail(host, pageUrl, index);
	if (thumb) manifest[host] = thumb;
	index += 1;
}

await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Done — ${Object.keys(manifest).length}/${uniqueHosts.size} host thumbnails.`);
