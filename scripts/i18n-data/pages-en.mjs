import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Unturned Hacks 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Unturned hacks for Windows PC — ESP, soft aim, radar, and BattlEye updates. Compare plans and buy.',
		h1: 'Unturned Hacks — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Unturned Hacks is the undetected unturned hacks package for Windows PC — built for Unturned on Windows PC. Unturned esp wallhack, 2D radar, and unturned aimbot with BattlEye maintenance after every major patch.',
		imageAlt: "Unturned Hacks homepage hero — ESP and aimbot for Unturned",
		galleryTitle: 'Unturned Hacks gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Unturned hacks in 2026',
				'Unturned rewards map awareness. Unturned Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on session, scav-run, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.unturned} and ${EXT.battleye}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/unturned-hacks/">Unturned hacks pillar</a>, <a href="/unturned-esp/">ESP guide</a>, <a href="/unturned-aimbot/">Aimbot controls</a>, and <a href="/unturned-hacks/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Unturned Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PMC sessions and scav-runs — covering both “unturned hacks” and “unturned cheats” search intent.',
				'Browse the <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>, <a href="/unturned-esp/">wallhack</a>, and <a href="/unturned-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'unturned-esp': {
		title: 'Unturned ESP 2026 | Player Boxes & Wallhack',
		description:
			'Unturned ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected unturned hacks for Unturned.',
		h1: 'Unturned ESP — Player Boxes & Wallhack',
		intro:
			'Unturned esp visibility tools for session and scav-run. Read enemy squads, players, zombies, loot, and distance before you commit — toggleable unturned esp wallhack overlays bundled in our unturned hacks package.',
		imageAlt: "Unturned ESP player boxes and distance readouts in a session",
		galleryTitle: 'Unturned ESP overlay visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Unturned wallhack guide',
		ctaSecondaryHref: '/unturned-esp/',
		sections: [
			section(
				'What Unturned ESP solves in sessions',
				'Unturned maps punish incomplete information. Unturned Hacks ESP wallhack helps you spot enemy squads early, spot players and zombies before they push your angle, and mark high-value loot worth the detour.',
				'On session, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Unturned’s live seasons and map updates are published by Battlestate Games (${EXT.unturned}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, safezone cues, and loot pins so only session-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PMC sessions and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/unturned-esp/">wallhack page</a> and pair visibility with the <a href="/unturned-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and safezone awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with BattlEye maintenance',
				'Unturned Hacks ESP wallhack is maintained for Unturned with rebuilds after BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.battleye} for how anti-cheat updates ship, then cross-check our <a href="/updates/">BattlEye bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/unturned-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/unturned-hacks/">Unturned hacks pillar</a> and <a href="/unturned-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'unturned-aimbot': {
		title: 'Unturned Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Unturned aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our unturned hacks package.',
		h1: 'Unturned Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Unturned firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Unturned Aimbot combat previews',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/unturned-esp/',
		sections: [
			section(
				'Aimbot tuned for Unturned combat pace',
				'Unturned mixes long-range AR fights with close-quarters SMG pushes. Unturned Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.unturned}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every session.',
				'Prefer softer tracking? Read the <a href="/unturned-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/unturned-esp/">ESP wallhack</a> and <a href="/unturned-radar-hack/">2D radar</a> in the same Unturned Hacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'BattlEye maintenance for undetected Aimbot',
				'Unturned Hacks rebuilds Aimbot behavior when BattlEye anti-cheat or major Unturned patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.battleye}, then follow our <a href="/updates/">BattlEye maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Unturned Hacks Features | ESP, Soft Aim & Radar',
		description:
			'Full unturned hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Unturned Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Unturned Hacks package for Unturned on Windows PC — with BattlEye maintenance after major patches.',
		imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Unturned Hacks feature gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and safezone awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports PMC sessions and scav-runs. Deep-dive the <a href="/unturned-esp/">ESP page</a> and <a href="/unturned-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.unturned} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-session safezones, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Unturned sessions. See <a href="/unturned-radar-hack/">radar</a> and <a href="/unturned-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/unturned-hacks/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and BattlEye maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@unturnedhacks.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/unturned-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Unturned Hacks Pricing | $35/mo or $150 Life',
		description:
			'Unturned hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Unturned Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Unturned Hacks — ESP wallhack, radar hack, and Aimbot for Unturned on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'Unturned Hacks package visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Unturned Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Unturned Hacks package — ideal if you play Unturned regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye anti-cheat or major Unturned patches.',
				`Season calendars and client updates come from ${EXT.unturned}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/unturned-hacks/">Unturned hacks</a>, <a href="/unturned-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Unturned Hacks Setup | Windows PC Guide',
		description:
			'Set up unturned hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first queue.',
		h1: 'Unturned Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure Unturned Hacks for Unturned on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before queueing.',
		imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'Unturned Hacks setup visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Unturned Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest BattlEye maintenance build before launching Unturned.',
				`Also glance at ${EXT.status} if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.`,
				'Unturned Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, zombies, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>, and <a href="/unturned-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/unturned-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Unturned or BattlEye anti-cheat patches',
				'When Battlestate Games ships a major Unturned update or BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.battleye}. Our practical workflow is documented on the <a href="/updates/">BattlEye bypass page</a> and <a href="/unturned-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Unturned Hacks Updates | BattlEye Maintenance Log',
		description:
			'Unturned hacks update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Unturned Hacks Updates — Maintenance Log',
		intro:
			'Track BattlEye maintenance and Unturned patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Unturned Hacks live status after BattlEye and game patches",
		galleryTitle: 'Unturned patch and maintenance visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/unturned-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'Unturned and BattlEye anti-cheat receive frequent patches. Unturned Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Battlestate Games platform health and this page for Unturned Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on session and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note BattlEye anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">BattlEye bypass guide</a> and <a href="/unturned-hacks/">undetected Unturned hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.unturned}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a BattlEye update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Unturned Hacks FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Unturned hacks FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Unturned Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected Unturned Hacks — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Unturned compatibility on Windows PC.',
		imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'Unturned Hacks FAQ visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Unturned Hacks?',
				'Unturned Hacks is an undetected cheat package for Unturned on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.',
				'Packages cover session and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/unturned-esp/">ESP</a> / <a href="/unturned-aimbot/">Aimbot</a> for module detail.',
				`Unturned itself is published by Battlestate Games (${EXT.unturned}). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.`,
			),
			section(
				'Are Unturned Hacks undetected in 2026?',
				'Unturned Hacks is maintained with rebuilds after BattlEye anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/unturned-hacks/">undetected Unturned hacks</a> and the <a href="/updates/">BattlEye guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@unturnedhacks.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Unturned Hacks Support | Help & Contact',
		description:
			'Contact unturned hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Unturned Hacks Support — Contact Us',
		intro:
			'Get help with Unturned Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Unturned on Windows PC.',
		imageAlt: "Unturned Hacks support page for license and setup help",
		galleryTitle: 'Unturned Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Unturned Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.',
				`Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href="/updates/">BattlEye anti-cheat page</a>.',
				'Email: support@unturnedhacks.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Unturned Hacks 2026 | BattlEye Maintenance',
		description:
			'Undetected unturned hacks with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Unturned Hacks — BattlEye Maintenance',
		intro:
			'How Unturned Hacks stays maintained for Unturned after BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Unturned Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected Unturned Hacks visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'BattlEye bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Unturned Hacks',
				'Undetected Unturned Hacks means the package is actively maintained against BattlEye anti-cheat and major Unturned patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.',
				`Anti-cheat technology is documented by ${EXT.battleye}; Unturned client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'BattlEye maintenance workflow',
				'When BattlEye anti-cheat or Unturned updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">BattlEye bypass Unturned guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/unturned-hacks/">Unturned hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Unturned Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Unturned wallhack ESP with player boxes and loot markers for Windows PC. Undetected unturned hacks — learn overlays and buy.',
		h1: 'Unturned Wallhack — ESP Boxes & Visibility',
		intro:
			'Unturned wallhack ESP for Unturned — see players, loot, bosses, and containers through toggleable wallhack overlays built for PMC sessions and scav-runs.',
		imageAlt: "Unturned wallhack visibility through walls in a session",
		galleryTitle: 'Unturned wallhack ESP gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Unturned ESP page',
		ctaSecondaryHref: '/unturned-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Unturned wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Unturned Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and safezone holds.',
				'For the broader ESP keyword page see <a href="/unturned-esp/">Unturned ESP</a>; for combat assist see <a href="/unturned-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support session, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.unturned}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/unturned-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after BattlEye anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/unturned-hacks/">undetected Unturned hacks</a> and <a href="/updates/">BattlEye bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/unturned-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Unturned Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Unturned radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our unturned hacks package.',
		h1: 'Unturned Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Unturned — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Unturned 2D radar overlay showing nearby threats",
		galleryTitle: 'Unturned radar hack visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/unturned-esp/',
		sections: [
			section(
				'Why radar hack matters in Unturned',
				'sessions fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Unturned Hacks radar complements <a href="/unturned-esp/">ESP wallhack</a> markers during squad pushes and safezone camp fights.',
				`Mode rules and seasonal changes come from ${EXT.unturned}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight safezone holds. Directional cues highlight flanks during building clears and flank pushes across session and scav-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/unturned-hacks/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/unturned-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive BattlEye maintenance rebuilds with the full Unturned Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Unturned patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/unturned-hacks/">undetected status</a>.',
			),
		],
	},
	'battleye': {
		title: 'BattlEye Bypass Unturned | Unturned Hacks Maintenance',
		description:
			'How unturned hacks rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'BattlEye Bypass — Unturned Hacks Maintenance',
		intro:
			'Understand BattlEye anti-cheat maintenance for Unturned Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Unturned security updates.',
		imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
		galleryTitle: 'BattlEye maintenance visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'BattlEye anti-cheat overview',
				`BattlEye anti-cheat is Battlestate Games' anti-cheat for Unturned on PC (see ${EXT.battleye}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Unturned Hacks monitors BattlEye patch notes and Unturned seasonal updates from ${EXT.unturned} to schedule module reviews.`,
				'“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a BattlEye patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Battlestate Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/unturned-hacks/">undetected Unturned hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Unturned Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best unturned hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected unturned hacks with BattlEye maintenance — compare and buy.',
		h1: 'Unturned Hacks 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Unturned Hacks package for Unturned — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Unturned Hacks product overview for Unturned",
		galleryTitle: 'Unturned Hacks 2026 gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why unturned hacks buyers choose Unturned Hacks in 2026',
				'2026 seasons bring new maps, weapons, and BattlEye anti-cheat updates. Unturned Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.unturned}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover session and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/unturned-hacks/">Unturned hacks pillar</a>, <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>, <a href="/unturned-esp/">wallhack</a>, <a href="/unturned-radar-hack/">radar</a>, <a href="/unturned-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/unturned-hacks/">Unturned hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/unturned-hacks/">Unturned hacks</a> checklist, <a href="/blog/unturned-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@unturnedhacks.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Unturned Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'Unturned hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare unturned hacks options and buy the full package.',
		h1: 'Unturned Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Unturned hacks for session and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye anti-cheat patches. This is the pillar guide for unturned hacks in 2026.',
		imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'Unturned hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/unturned-hacks/',
		sections: [
			section(
				'What Unturned hacks include in 2026',
				'Players searching for Unturned hacks usually want visibility and combat tools without stacking separate downloads. Unturned Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called unturned hacks.',
				'Coverage spans session and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.unturned}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Unturned hacks pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/unturned-hacks/">unturned hacks 2026</a> and <a href="/unturned-hacks/">Unturned hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/unturned-esp/">Unturned ESP</a>, <a href="/unturned-aimbot/">Unturned Aimbot</a>, <a href="/unturned-esp/">wallhack</a>, <a href="/unturned-radar-hack/">radar hack</a>, and <a href="/unturned-aimbot/">soft aim</a>.',
				'Blog guides expand BattlEye keyword: <a href="/blog/unturned-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/escape-from-unturned-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-unturned-hacks-battleye/">undetected BattlEye notes</a>.',
			),
			section(
				'Unturned hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Unturned Hacks maps the full session loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/unturned-hacks/">mod menu</a>, <a href="/unturned-aimbot/">aimbot</a>, <a href="/unturned-esp/">ESP</a>.',
			),
			section(
				'Undetected Unturned hacks with BattlEye maintenance',
				'Undetected Unturned hacks require rebuilds after BattlEye anti-cheat and major Unturned patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.battleye} for anti-cheat background and our <a href="/updates/">BattlEye bypass guide</a> for the practical workflow. Pair with <a href="/unturned-hacks/">undetected Unturned hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Unturned Hack Download 2026 | Instant Access',
		description:
			'Unturned hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Unturned Hack Download — Instant License Delivery',
		intro:
			'How Unturned hack download works for Unturned — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Unturned Hacks download and install delivery flow",
		galleryTitle: 'Unturned hack download visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Unturned hack download delivery works',
				'After checkout confirms payment, Unturned Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Battlestate Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Unturned hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PMC sessions and scav-runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Unturned or BattlEye anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/unturned-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Unturned Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Unturned mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected unturned hacks package.',
		h1: 'Unturned Mod Menu — In-Client Control Panel',
		intro:
			'Unturned mod menu controls for Unturned — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Unturned session on Windows PC.',
		imageAlt: "Unturned Hacks in-game menu controls",
		galleryTitle: 'Unturned mod menu gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Unturned mod menu controls',
				'A Unturned mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Unturned Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Unturned.',
				'Control deep-dives: <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>, <a href="/unturned-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for PMC sessions and scav-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and safezone holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.unturned} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/unturned-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after BattlEye patches',
				'Unturned mod menu behavior is rebuilt when BattlEye anti-cheat or major Unturned updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Unturned Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Unturned soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our unturned hacks with ESP boxes.',
		h1: 'Unturned Soft Aim — Smooth Aimbot Controls',
		intro:
			'Unturned soft aim settings for Unturned — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Unturned soft aim FOV and smoothness settings",
		galleryTitle: 'Unturned soft aim gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/unturned-aimbot/',
		sections: [
			section(
				'What Unturned soft aim means',
				'Unturned soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Unturned Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/unturned-aimbot/">Unturned Aimbot</a>. Alternate wording: <a href="/unturned-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.unturned} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/unturned-esp/">ESP wallhack</a> and <a href="/unturned-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with BattlEye maintenance',
				'Aimbot modules rebuild after BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Unturned Hacks 2026 | Buyer Guide',
		description:
			'Best unturned hacks for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Unturned Hacks — 2026 Buyer Guide',
		intro:
			'Compare the Unturned hacks for Unturned in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye anti-cheat rebuilds and instant delivery.',
		imageAlt: "Unturned Hacks overview for Unturned on PC",
		galleryTitle: 'Best Unturned hacks gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Unturned hacks in 2026',
				'The Unturned hacks combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Unturned Hacks covers session and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Unturned hacks feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Unturned patches.',
				'Review <a href="/features/">Features</a>, <a href="/unturned-hacks/">undetected status</a>, and <a href="/unturned-hacks/">Unturned hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/unturned-esp/">ESP</a>, <a href="/unturned-aimbot/">Aimbot</a>, <a href="/unturned-hacks/">hacks</a>.',
			),
			section(
				'Buying the Unturned hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Unturned Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Unturned aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our unturned hacks package.',
		h1: 'Unturned Aimbot Hack — Soft Aim Assist',
		intro:
			'Unturned aimbot hack tools for Unturned — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Unturned aimbot hack controls and bone priority",
		galleryTitle: 'Unturned aimbot hack gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/unturned-aimbot/',
		sections: [
			section(
				'Unturned aimbot hack vs visibility tools',
				'A Unturned aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Unturned Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Unturned combat pace across PMC sessions and scav-runs.',
				'Prefer softer tracking language? See <a href="/unturned-aimbot/">soft aim</a>. Full settings: <a href="/unturned-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session safezones.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.unturned} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after BattlEye anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/unturned-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Unturned ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Unturned ESP hack with player boxes and loot markers for Windows PC. Undetected unturned hacks with — see overlays and buy.',
		h1: 'Unturned ESP Hack — Player Boxes Guide',
		intro:
			'Unturned ESP hack overlays for Unturned — player outlines, boss threat cues, loot and container markers with distance readouts across session and scav-run.',
		imageAlt: "Unturned ESP hack boxes and loot markers",
		galleryTitle: 'Unturned ESP hack gallery',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/unturned-esp/',
		sections: [
			section(
				'What a Unturned ESP hack shows',
				'A Unturned ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/unturned-esp/">Unturned ESP</a>. Wallhack wording: <a href="/unturned-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for sessions',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports PMC sessions and scav-runs.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with BattlEye maintenance',
				'ESP hack modules rebuild after BattlEye anti-cheat and Unturned patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/unturned-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/unturned-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Unturned Unlock All 2026 | What It Really Means',
		description:
			'Unturned unlock all explained vs real unturned hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Unturned Unlock All — What Players Search For',
		intro:
			'Unturned unlock all is a common search term for Unturned — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Unturned Hacks actually provides on Windows PC.',
		imageAlt: "Unturned Hacks license features overview",
		galleryTitle: 'Unturned unlock all guide visuals',
		ctaPrimary: 'Buy Unturned Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Unturned unlock all usually means',
				'Unturned unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Unturned Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.unturned}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/unturned-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/unturned-hacks/">Unturned hacks</a> and <a href="/unturned-hacks/">Unturned hacks</a>.',
			),
			section(
				'Buying Unturned Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Unturned on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Unturned Hacks',
		description:
			'Privacy policy for Unturned Hacks. How we handle support emails, order data, and checkout for unturned hacks licenses on unturnedhacks.com.',
		h1: 'Privacy Policy',
		intro: 'How Unturned Hacks handles information when you browse unturnedhacks.com or contact support about a Unturned license.',
		imageAlt: "Unturned Hacks privacy policy page",
		galleryTitle: 'Unturned Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Unturned Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@unturnedhacks.com with your request details.',
				'Policy updates publish on this page. Continued use of unturnedhacks.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Unturned Hacks',
		description:
			'Refund policy for Unturned Hacks. Digital delivery terms and eligibility for unturned hacks packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Unturned Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Unturned.',
		imageAlt: "Unturned Hacks refund policy page",
		galleryTitle: 'Unturned Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Unturned Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@unturnedhacks.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Unturned Hacks Rules',
		description:
			'Terms of use for unturnedhacks.com and Unturned Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of unturnedhacks.com and Unturned Hacks licenses for Unturned on Windows PC.',
		imageAlt: "Unturned Hacks terms of use page",
		galleryTitle: 'Unturned Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Unturned Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Unturned on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Unturned may violate Battlestate Games terms and result in account penalties. Unturned Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/unturned-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@unturnedhacks.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
