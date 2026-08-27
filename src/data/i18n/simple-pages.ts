import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See players, zombies, items, vehicles, and bases through walls with distance readouts.',
					'Use filters so the overlay stays clear on PEI, Washington, Russia, and PvP servers.',
				],
				list: [
					'Player ESP & wallhack',
					'Zombie ESP & tracker',
					'Item & loot ESP',
					'Vehicle ESP & finder',
					'Base & structure ESP',
				],
			},
			{
				h2: 'Aimbot & no recoil',
				paragraphs: [
					'Aimbot with FOV, smoothness, and bone priority for players and zombies.',
					'No recoil, no spread, and combat tools you can tune before you join a server.',
				],
				list: ['Aimbot & aim assist', 'No recoil system', 'No spread', 'Hotkeys mid-session'],
			},
			{
				h2: 'Speed & movement',
				paragraphs: [
					'Speed hack, no stamina drain, and teleportation for faster travel across the map.',
					'Move between loot spots, bases, and PvP zones without burning stamina.',
				],
				list: ['Speed hack', 'No stamina drain', 'Teleportation', 'Fly hack'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big {game} or {antiCheat} patches.',
					'Check Status before you play after a patch day.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same player, zombie, item, vehicle, and base ESP on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and movement tools', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Unturned Hacks overview',
		ctaSecondaryHref: '/unturned-hacks/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 the package is online for Unturned on Windows PC. We post a new note here when a game or BattlEye patch needs a rebuild.',
					'If Status is green, you can session. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every session after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Unturned Hacks',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-session look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for Unturned on Windows PC — built for survival servers and PvP zones.',
				],
				list: [
					'Player, zombie, item, vehicle & base ESP',
					'Aimbot & no recoil system',
					'Speed hack & no stamina drain',
					'Teleportation & BattlEye rebuilds',
				],
			},
			{
				h2: 'Built for Unturned survival',
				paragraphs: [
					'Track players and zombies before you push, find loot and vehicles across the map, and locate bases with structure ESP. Tune aimbot and no recoil per weapon for PvP and horde survival.',
				],
				list: [
					'<a href="/unturned-esp/">ESP guide</a>',
					'<a href="/unturned-aimbot/">Aimbot controls</a>',
					'<a href="/unturned-radar-hack/">Movement tools</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'unturned-esp': page({
		title: 'Unturned ESP | {brand}',
		description:
			'Unturned ESP and wallhack for Windows PC — player ESP, zombie ESP, item ESP, vehicle ESP, base ESP, and loot finder in one license.',
		h1: 'ESP',
		intro: 'See players, zombies, items, vehicles, and bases through walls in Unturned. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Unturned Hacks overview',
		ctaSecondaryHref: '/unturned-hacks/',
		galleryTitle: 'ESP in game',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Boxes, distance, and filters for players, zombies, items, vehicles, and bases.'],
				list: ['Player ESP', 'Zombie ESP', 'Item & loot ESP', 'Vehicle ESP', 'Base & structure ESP'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Find loot, vehicles, and player bases without flooding the screen.'],
				list: ['Tune opacity', 'Filter by category', 'Pair with aimbot'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and radar in one plan.'],
				list: [
					'<a href="/unturned-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'unturned-aimbot': page({
		title: 'Unturned Aimbot | {brand}',
		description:
			'Unturned aimbot and no recoil for Windows PC — FOV, smoothness, bone priority, and recoil control for players and zombies.',
		h1: 'Aimbot',
		intro: 'Aimbot, no recoil, and combat tools you can tune for Unturned. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Unturned Hacks overview',
		ctaSecondaryHref: '/unturned-hacks/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, smoothness, bone priority, and no recoil before you join a server.'],
				list: ['Aimbot strength', 'No recoil system', 'Bone priority', 'Hotkeys mid-session'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit aim assist', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and movement tools in one license.'],
				list: [
					'<a href="/unturned-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Unturned Movement | {brand}',
		description:
			'Unturned speed hack, no stamina drain, and teleportation for Windows PC — fast movement across survival and PvP servers.',
		h1: 'Movement',
		intro: 'Speed hack, no stamina drain, and teleportation for faster travel. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Unturned Hacks overview',
		ctaSecondaryHref: '/unturned-hacks/',
		galleryTitle: 'Movement tools',
		sections: [
			{
				h2: 'What it includes',
				paragraphs: ['Speed hack, no stamina drain, and teleportation for cross-map travel.'],
				list: ['Speed hack', 'No stamina drain', 'Teleportation', 'Fly hack'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use movement tools to reach loot and bases faster. Use ESP to see threats on arrival.'],
				list: [
					'<a href="/unturned-esp/">ESP guide</a>',
					'<a href="/unturned-hacks/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
