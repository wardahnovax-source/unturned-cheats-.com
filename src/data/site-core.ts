import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	/** Google SERP titles typically display ~50–60 chars; clamp at 60. */
	return text.length <= 60 ? text : `${text.slice(0, 57).trim()}…`;
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and movement tools for PC',
	summary:
		'{brand} is an undetected {game} cheat package for Windows PC. Includes player, zombie, item, vehicle, and base ESP, aimbot, no recoil, speed hack, no stamina drain, and teleportation.',
	heroLede: 'Undetected player & zombie ESP, aimbot, no recoil, speed hack, and teleport for Unturned on Windows PC.',
	blogLabel: '{game} Intel',
	ctaBuy: 'Get Access',
	ctaBuyShort: 'Buy',
	featuresIntro: 'Everything included in one license for {game} on Windows PC.',
	storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
	statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
	previewIntro:
		'{brand} for Unturned — player, zombie, item, vehicle, and base ESP, aimbot, no recoil, speed hack, no stamina drain, and teleportation.',
	setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
	supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
	faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
	reviewsIntro: 'Real feedback from {brand} buyers — ESP, aimbot, movement tools, and support.',
	chipEsp: 'Player & zombie ESP',
	chipAim: 'Aimbot & no recoil',
	chipRadar: 'Speed & teleport',
	chipUpdates: 'Patch updates',
	navPreview: 'Preview',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: '{brand} | Undetected {primaryKeyword}',
	homeDescription:
		'{primaryKeyword} for Windows PC — ESP, aimbot, and radar with {antiCheat} maintenance. Compare plans and buy.',
	featuresTitle: '{game} Features | {brand}',
	featuresDescription:
		'Everything in one {game} license for Windows PC — ESP, aimbot, radar, and patch updates.',
	storeTitle: '{game} Store | {brand}',
	storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
	statusTitle: '{game} Status | {brand}',
	statusDescription:
		'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
	previewTitle: '{game} Preview | {brand}',
	previewDescription:
		'Quick preview of {brand} — ESP, aimbot, radar, and updates after {game} patches.',
	setupTitle: '{game} Setup | {brand}',
	setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
	supportTitle: '{game} Support | {brand}',
	supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
	faqTitle: '{game} FAQ | {brand}',
	faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
	reviewsTitle: '{brand} Reviews | Buyer Feedback',
	reviewsDescription:
		'Real buyer reviews for {brand} — ESP, soft aim, radar, and patch updates on Windows PC.',
	blogTitle: '{game} Intel | {brand}',
	blogDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
} as const;

/** Prefer brand.keywords — kept for Layout meta keywords. */
export const seoKeywords = brand.keywords.list;

/** Blog eyebrow / title suffix */
export const blogLabel = fillBrandTokens(brandCopy.blogLabel);

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: 'Support requests are reviewed daily',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	features: {
		esp: [
			'Player ESP / wallhack with distance readouts',
			'Zombie ESP, tracker, and wallhack',
			'Item ESP, loot finder, and supply drop markers',
			'Vehicle ESP, finder, and radar',
			'Base ESP, structure finder, and storage highlights',
		],
		aimbot: [
			'Aimbot with FOV, smoothness, and bone priority',
			'No recoil and recoil control',
			'No spread and weapon combat tools',
			'Player and zombie aimbot profiles',
			'Hotkeys mid-session',
		],
		movement: [
			'Speed hack and fast movement',
			'No stamina drain and infinite stamina',
			'Teleportation and fly hack',
			'Adjustable movement multipliers',
		],
		general: [
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Digital delivery after checkout',
			'Setup guide and support',
		],
	},
} as const;
