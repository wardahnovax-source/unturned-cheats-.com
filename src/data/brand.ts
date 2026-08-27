/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Unturned Hacks',
	/** Short product label if needed */
	shortName: 'Unturned',
	/** Canonical origin — no trailing slash */
	url: 'https://unturnedhacks.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@unturnedhacks.com',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Funturned-novaxware',

	/** Game this template instance targets */
	game: 'Unturned',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/unturned-hacks-logo.webp',
	logoRaster: '/images/unturned-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Unturned Hacks logo',
	defaultOgImage: '/images/unturned-hacks-hero-1024w.webp',
	heroImage: '/images/unturned-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#f1a820',
		bg: '#0a1628',
		soft: '#5dade2',
		deep: '#1a7a4a',
		hover: '#ffc94d',
		panel: '#0f1f35',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'unturned hacks',
		list: [
			'unturned hacks',
			'unturned hack',
			'unturned cheats',
			'unturned cheat',
			'unturned esp',
			'unturned aimbot',
			'unturned wallhack',
			'best unturned hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Unturned Hacks | Official Windows PC Site',
		homeDescription:
			'Official Unturned Hacks site for Windows PC. Player, zombie, item, vehicle, and base ESP plus aimbot, no recoil, speed hack, and teleport in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — player ESP, zombie ESP, item ESP, vehicle ESP, base ESP, aimbot, no recoil, speed hack, and teleportation.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same full feature set on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you join a server on Windows PC today.',
		previewTitle: 'Unturned Hacks | ESP, Aimbot & No Recoil',
		previewDescription:
			'Buy undetected unturned hacks for Unturned on Windows PC. Player, zombie, item, vehicle, and base ESP with aimbot, no recoil, speed hack, and teleport.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order before your first session.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Unturned — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, aimbot, no recoil, speed hack, and patch updates for Unturned on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — survival tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and movement tools for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes player, zombie, item, vehicle, and base ESP, aimbot, no recoil, speed hack, no stamina drain, and teleportation.',
		heroLede: 'Undetected player & zombie ESP, aimbot, no recoil, speed hack, and teleport for Unturned on Windows PC.',
		blogLabel: 'Unturned Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Unturned — player, zombie, item, vehicle, and base ESP, aimbot, no recoil, speed hack, no stamina drain, and teleportation with BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, movement tools, and support.',
		chipEsp: 'Player & zombie ESP',
		chipAim: 'Aimbot & no recoil',
		chipRadar: 'Speed & teleport',
		chipUpdates: 'Patch updates',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-08-27',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/unturned-hacks-screenshot-1.webp',
				title: 'Player and zombie ESP in Unturned',
				caption: 'Player ESP boxes, zombie tracking, and distance readouts on survival servers',
			},
			{
				src: '/images/unturned-hacks-screenshot-2.webp',
				title: 'Aimbot and combat tools for Unturned',
				caption: 'Aimbot, no recoil, and weapon controls for PvP on Windows PC',
			},
			{
				src: '/images/unturned-hacks-esp.webp',
				title: 'Item and loot ESP overlay',
				caption: 'Item ESP, loot finder, and supply drop markers across the map',
			},
			{
				src: '/images/unturned-hacks-aimbot.webp',
				title: 'Vehicle and base ESP for Unturned',
				caption: 'Vehicle finder, base ESP, and structure location tools',
			},
			{
				src: '/images/unturned-hacks-hero-1024w.webp',
				title: 'Unturned Hacks full feature package',
				caption: 'All-in-one unturned hacks with ESP, aimbot, speed hack, and teleportation',
			},
			{
				src: '/images/unturned-hacks-raid.webp',
				title: 'Unturned Hacks license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
