import { siteConfig } from './site';
import { unturnedImages } from './unturned';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	unturnedImages.espWallhack,
	unturnedImages.aimbotCombat,
	unturnedImages.aimbotSkeleton,
	unturnedImages.playerEsp,
	unturnedImages.cheatsCombat,
	'/images/unturned-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/unturned-hacks-hero-1024w.webp',
	'unturned-esp': unturnedImages.playerEsp,
	'unturned-aimbot': unturnedImages.aimbotCombat,
	features: unturnedImages.aimbotSkeleton,
	pricing: unturnedImages.cheatsCombat,
	setup: unturnedImages.playerEsp,
	updates: '/images/unturned-hacks-hero-1024w.webp',
	faq: unturnedImages.aimbotSkeleton,
	support: unturnedImages.cheatsCombat,
	undetected: unturnedImages.espWallhack,
	wallhack: unturnedImages.espWallhack,
	radar: unturnedImages.playerEsp,
	battleye: unturnedImages.aimbotCombat,
	'cheats-2026': '/images/unturned-hacks-hero-1024w.webp',
	hacks: unturnedImages.cheatsCombat,
	'cheat-download': unturnedImages.cheatsCombat,
	'mod-menu': unturnedImages.playerEsp,
	'soft-aim': unturnedImages.aimbotSkeleton,
	'best-cheats': '/images/unturned-hacks-hero-1024w.webp',
	'aimbot-hack': unturnedImages.aimbotSkeleton,
	'esp-hack': unturnedImages.espWallhack,
	'unlock-all': unturnedImages.playerEsp,
	privacy: unturnedImages.aimbotCombat,
	refund: unturnedImages.cheatsCombat,
	terms: unturnedImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
