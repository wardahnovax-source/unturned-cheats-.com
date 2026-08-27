import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'unturned-esp' | 'unturned-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected unturned hacks 2026",
					subtitle: "Unturned hacks with unturned esp, radar hack and unturned aimbot for Windows PC — BattlEye maintenance included.",
					subtitleShort: "Unturned esp, radar & aimbot for PC",
					buyNow: "Buy Unturned Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Unturned Hacks — undetected unturned hacks live for Unturned on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye maintenance supported",
					antiCheatShort: "BattlEye anti-cheat supported",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected unturned hacks",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Unturned Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Unturned Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Unturned hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "Unturned hacks for Windows PC — ESP, soft aim, radar, and BattlEye updates. Compare plans and buy.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Unturned Hacks is the undetected unturned hacks package for Windows PC — built for Unturned on Windows PC. Unturned esp wallhack, 2D radar, and unturned aimbot with BattlEye maintenance after every major patch.",
					imageAlt: "Unturned Hacks homepage hero — ESP and aimbot for Unturned",
					galleryTitle: "Unturned Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Unturned hacks in 2026",
							paragraphs: [
								"Unturned rewards map awareness. Unturned Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on session, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a> and <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/unturned-hacks/\">Unturned hacks pillar</a>, <a href=\"/unturned-esp/\">ESP guide</a>, <a href=\"/unturned-aimbot/\">Aimbot controls</a>, and <a href=\"/unturned-hacks/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Unturned Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PMC sessions and scav-runs — covering both “unturned hacks” and “unturned cheats” search intent.",
								"Browse the <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>, <a href=\"/unturned-esp/\">wallhack</a>, and <a href=\"/unturned-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-esp.webp",
				},
				"unturned-esp": {
					title: "Unturned ESP 2026 | Player Boxes & Wallhack",
					description: "Unturned ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected unturned hacks for Unturned.",
					h1: "Unturned ESP — Player Boxes & Wallhack",
					intro: "Unturned esp visibility tools for session and scav-run. Read enemy squads, players, zombies, loot, and distance before you commit — toggleable unturned esp wallhack overlays bundled in our unturned hacks package.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP overlay visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Unturned wallhack guide",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "What Unturned ESP solves in sessions",
							paragraphs: [
								"Unturned maps punish incomplete information. Unturned Hacks ESP wallhack helps you spot enemy squads early, spot players and zombies before they push your angle, and mark high-value loot worth the detour.",
								"On session, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Unturned’s live seasons and map updates are published by Battlestate Games (<a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, safezone cues, and loot pins so only session-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PMC sessions and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/unturned-esp/\">wallhack page</a> and pair visibility with the <a href=\"/unturned-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and safezone awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with BattlEye maintenance",
							paragraphs: [
								"Unturned Hacks ESP wallhack is maintained for Unturned with rebuilds after BattlEye anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">BattlEye bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first session.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/unturned-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/unturned-hacks/\">Unturned hacks pillar</a> and <a href=\"/unturned-hacks/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-radar.webp",
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot 2026 | Soft Aim for Windows PC",
					description: "Unturned aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our unturned hacks package.",
					h1: "Unturned Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Unturned firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot combat previews",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Unturned combat pace",
							paragraphs: [
								"Unturned mixes long-range AR fights with close-quarters SMG pushes. Unturned Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every session.",
								"Prefer softer tracking? Read the <a href=\"/unturned-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/unturned-esp/\">ESP wallhack</a> and <a href=\"/unturned-radar-hack/\">2D radar</a> in the same Unturned Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "BattlEye maintenance for undetected Aimbot",
							paragraphs: [
								"Unturned Hacks rebuilds Aimbot behavior when BattlEye anti-cheat or major Unturned patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> and anti-cheat context on <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>, then follow our <a href=\"/updates/\">BattlEye maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot.webp",
				},
				features: {
					title: "Unturned Hacks Features | ESP, Soft Aim & Radar",
					description: "Full unturned hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Unturned Hacks Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the Unturned Hacks package for Unturned on Windows PC — with BattlEye maintenance after major patches.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Unturned Hacks feature gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and safezone awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.",
								"Team and enemy colour coding supports PMC sessions and scav-runs. Deep-dive the <a href=\"/unturned-esp/\">ESP page</a> and <a href=\"/unturned-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-session safezones, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Unturned sessions. See <a href=\"/unturned-radar-hack/\">radar</a> and <a href=\"/unturned-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/unturned-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and BattlEye maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@unturnedhacks.com.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/unturned-hacks/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "Unturned Hacks Pricing | $35/mo or $150 Life",
					description: "Unturned hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Unturned Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Unturned Hacks — ESP wallhack, radar hack, and Aimbot for Unturned on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Unturned Hacks package visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Unturned Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Unturned Hacks package — ideal if you play Unturned regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye anti-cheat or major Unturned patches.",
								"Season calendars and client updates come from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/unturned-hacks/\">Unturned hacks</a>, <a href=\"/unturned-hacks/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-session.webp",
				},
				setup: {
					title: "Unturned Hacks Setup | Windows PC Guide",
					description: "Set up unturned hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first queue.",
					h1: "Unturned Hacks Setup — Windows PC Guide",
					intro: "Install and configure Unturned Hacks for Unturned on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before queueing.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Unturned Hacks setup visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Unturned Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest BattlEye maintenance build before launching Unturned.",
								"Also glance at <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.",
								"Unturned Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, zombies, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>, and <a href=\"/unturned-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/unturned-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Unturned or BattlEye anti-cheat patches",
							paragraphs: [
								"When Battlestate Games ships a major Unturned update or BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">BattlEye bypass page</a> and <a href=\"/unturned-hacks/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-radar.webp",
				},
				updates: {
					title: "Unturned Hacks Updates | BattlEye Maintenance Log",
					description: "Unturned hacks update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Unturned Hacks Updates — Maintenance Log",
					intro: "Track BattlEye maintenance and Unturned patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Unturned patch and maintenance visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Unturned and BattlEye anti-cheat receive frequent patches. Unturned Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> for Battlestate Games platform health and this page for Unturned Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on session and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note BattlEye anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">BattlEye bypass guide</a> and <a href=\"/unturned-hacks/\">undetected Unturned hacks</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a BattlEye update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-esp.webp",
				},
				faq: {
					title: "Unturned Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "Unturned hacks FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Unturned Hacks FAQ — Common Questions",
					intro: "Answers about undetected Unturned Hacks — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Unturned compatibility on Windows PC.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "Unturned Hacks FAQ visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Unturned Hacks?",
							paragraphs: [
								"Unturned Hacks is an undetected cheat package for Unturned on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.",
								"Packages cover session and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/unturned-esp/\">ESP</a> / <a href=\"/unturned-aimbot/\">Aimbot</a> for module detail.",
								"Unturned itself is published by Battlestate Games (<a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Unturned Hacks undetected in 2026?",
							paragraphs: [
								"Unturned Hacks is maintained with rebuilds after BattlEye anti-cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/unturned-hacks/\">undetected Unturned hacks</a> and the <a href=\"/updates/\">BattlEye guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@unturnedhacks.com or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
				},
				support: {
					title: "Unturned Hacks Support | Help & Contact",
					description: "Contact unturned hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Unturned Hacks Support — Contact Us",
					intro: "Get help with Unturned Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Unturned on Windows PC.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Unturned Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Unturned Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.",
								"Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href=\"/updates/\">BattlEye anti-cheat page</a>.",
								"Email: support@unturnedhacks.com",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-session.webp",
				},
				undetected: {
					title: "Undetected Unturned Hacks 2026 | BattlEye Maintenance",
					description: "Undetected unturned hacks with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Unturned Hacks — BattlEye Maintenance",
					intro: "How Unturned Hacks stays maintained for Unturned after BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Unturned Hacks visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "BattlEye bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Unturned Hacks",
							paragraphs: [
								"Undetected Unturned Hacks means the package is actively maintained against BattlEye anti-cheat and major Unturned patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>; Unturned client updates ship through <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "BattlEye maintenance workflow",
							paragraphs: [
								"When BattlEye anti-cheat or Unturned updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">BattlEye bypass Unturned guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/unturned-hacks/\">Unturned hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-wallhack.webp",
				},
				wallhack: {
					title: "Unturned Wallhack 2026 | ESP Boxes & Visibility",
					description: "Unturned wallhack ESP with player boxes and loot markers for Windows PC. Undetected unturned hacks — learn overlays and buy.",
					h1: "Unturned Wallhack — ESP Boxes & Visibility",
					intro: "Unturned wallhack ESP for Unturned — see players, loot, bosses, and containers through toggleable wallhack overlays built for PMC sessions and scav-runs.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned wallhack ESP gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Unturned ESP page",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Unturned wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Unturned Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and safezone holds.",
								"For the broader ESP keyword page see <a href=\"/unturned-esp/\">Unturned ESP</a>; for combat assist see <a href=\"/unturned-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support session, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/unturned-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after BattlEye anti-cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/unturned-hacks/\">undetected Unturned hacks</a> and <a href=\"/updates/\">BattlEye bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/unturned-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-wallhack.webp",
				},
				radar: {
					title: "Unturned Radar Hack 2026 | 2D Threat Overlay",
					description: "Unturned radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our unturned hacks package.",
					h1: "Unturned Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Unturned — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Unturned radar hack visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Unturned",
							paragraphs: [
								"sessions fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Unturned Hacks radar complements <a href=\"/unturned-esp/\">ESP wallhack</a> markers during squad pushes and safezone camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight safezone holds. Directional cues highlight flanks during building clears and flank pushes across session and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/unturned-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/unturned-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive BattlEye maintenance rebuilds with the full Unturned Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Unturned patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/unturned-hacks/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-radar.webp",
				},
				battleye: {
					title: "BattlEye Bypass Unturned | Unturned Hacks Maintenance",
					description: "How unturned hacks rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "BattlEye Bypass — Unturned Hacks Maintenance",
					intro: "Understand BattlEye anti-cheat maintenance for Unturned Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Unturned security updates.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye maintenance visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye anti-cheat overview",
							paragraphs: [
								"BattlEye anti-cheat is Battlestate Games' anti-cheat for Unturned on PC (see <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Unturned Hacks monitors BattlEye patch notes and Unturned seasonal updates from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a> to schedule module reviews.",
								"“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a BattlEye patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Battlestate Games service health on <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/unturned-hacks/\">undetected Unturned hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best unturned hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected unturned hacks with BattlEye maintenance — compare and buy.",
					h1: "Unturned Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Unturned Hacks package for Unturned — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026 gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why unturned hacks buyers choose Unturned Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and BattlEye anti-cheat updates. Unturned Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover session and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/unturned-hacks/\">Unturned hacks pillar</a>, <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>, <a href=\"/unturned-esp/\">wallhack</a>, <a href=\"/unturned-radar-hack/\">radar</a>, <a href=\"/unturned-hacks/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/unturned-hacks/\">Unturned hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/unturned-hacks/\">Unturned hacks</a> checklist, <a href=\"/blog/unturned-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@unturnedhacks.com via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-esp.webp",
				},
				hacks: {
					title: "Unturned Hacks 2026 | Undetected ESP Aimbot Guide",
					description: "Unturned hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare unturned hacks options and buy the full package.",
					h1: "Unturned Hacks — Undetected ESP, Aimbot & Wallhack",
					intro: "Unturned hacks for session and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye anti-cheat patches. This is the pillar guide for unturned hacks in 2026.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "What Unturned hacks include in 2026",
							paragraphs: [
								"Players searching for Unturned hacks usually want visibility and combat tools without stacking separate downloads. Unturned Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called unturned hacks.",
								"Coverage spans session and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this Unturned hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/unturned-hacks/\">unturned hacks 2026</a> and <a href=\"/unturned-hacks/\">Unturned hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/unturned-esp/\">Unturned ESP</a>, <a href=\"/unturned-aimbot/\">Unturned Aimbot</a>, <a href=\"/unturned-esp/\">wallhack</a>, <a href=\"/unturned-radar-hack/\">radar hack</a>, and <a href=\"/unturned-aimbot/\">soft aim</a>.",
								"Blog guides expand BattlEye keyword: <a href=\"/blog/unturned-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/escape-from-unturned-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-unturned-hacks-battleye/\">undetected BattlEye notes</a>.",
							],
						},
						{
							h2: "Unturned hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Unturned Hacks maps the full session loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/unturned-hacks/\">mod menu</a>, <a href=\"/unturned-aimbot/\">aimbot</a>, <a href=\"/unturned-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Unturned hacks with BattlEye maintenance",
							paragraphs: [
								"Undetected Unturned hacks require rebuilds after BattlEye anti-cheat and major Unturned patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">BattlEye bypass guide</a> for the practical workflow. Pair with <a href=\"/unturned-hacks/\">undetected Unturned hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-session.webp",
				},
				"cheat-download": {
					title: "Unturned Hack Download 2026 | Instant Access",
					description: "Unturned hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Unturned Hack Download — Instant License Delivery",
					intro: "How Unturned hack download works for Unturned — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned hack download visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Unturned hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, Unturned Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Battlestate Games services are down, check <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Unturned hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PMC sessions and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Unturned or BattlEye anti-cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/unturned-hacks/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-session.webp",
				},
				"mod-menu": {
					title: "Unturned Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Unturned mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected unturned hacks package.",
					h1: "Unturned Mod Menu — In-Client Control Panel",
					intro: "Unturned mod menu controls for Unturned — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Unturned session on Windows PC.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned mod menu gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Unturned mod menu controls",
							paragraphs: [
								"A Unturned mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Unturned Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Unturned.",
								"Control deep-dives: <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>, <a href=\"/unturned-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for PMC sessions and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and safezone holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.unturned} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/unturned-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after BattlEye patches",
							paragraphs: [
								"Unturned mod menu behavior is rebuilt when BattlEye anti-cheat or major Unturned updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">BattlEye bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-radar.webp",
				},
				"soft-aim": {
					title: "Unturned Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Unturned soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our unturned hacks with ESP boxes.",
					h1: "Unturned Soft Aim — Smooth Aimbot Controls",
					intro: "Unturned soft aim settings for Unturned — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned soft aim gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "What Unturned soft aim means",
							paragraphs: [
								"Unturned soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Unturned Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/unturned-aimbot/\">Unturned Aimbot</a>. Alternate wording: <a href=\"/unturned-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/unturned-esp/\">ESP wallhack</a> and <a href=\"/unturned-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with BattlEye maintenance",
							paragraphs: [
								"Aimbot modules rebuild after BattlEye anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Unturned Hacks 2026 | Buyer Guide",
					description: "Best unturned hacks for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Unturned Hacks — 2026 Buyer Guide",
					intro: "Compare the Unturned hacks for Unturned in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye anti-cheat rebuilds and instant delivery.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Best Unturned hacks gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Unturned hacks in 2026",
							paragraphs: [
								"The Unturned hacks combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Unturned Hacks covers session and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.escapefromunturned.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Unturned hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Unturned patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/unturned-hacks/\">undetected status</a>, and <a href=\"/unturned-hacks/\">Unturned hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/unturned-esp/\">ESP</a>, <a href=\"/unturned-aimbot/\">Aimbot</a>, <a href=\"/unturned-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Unturned hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hack 2026 | Soft Aim Assist",
					description: "Unturned aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our unturned hacks package.",
					h1: "Unturned Aimbot Hack — Soft Aim Assist",
					intro: "Unturned aimbot hack tools for Unturned — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned aimbot hack gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned aimbot hack vs visibility tools",
							paragraphs: [
								"A Unturned aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Unturned Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Unturned combat pace across PMC sessions and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/unturned-aimbot/\">soft aim</a>. Full settings: <a href=\"/unturned-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session safezones.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after BattlEye anti-cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">BattlEye bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/unturned-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Unturned ESP Hack 2026 | Player Boxes & Loot",
					description: "Unturned ESP hack with player boxes and loot markers for Windows PC. Undetected unturned hacks with — see overlays and buy.",
					h1: "Unturned ESP Hack — Player Boxes Guide",
					intro: "Unturned ESP hack overlays for Unturned — player outlines, boss threat cues, loot and container markers with distance readouts across session and scav-run.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP hack gallery",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "What a Unturned ESP hack shows",
							paragraphs: [
								"A Unturned ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/unturned-esp/\">Unturned ESP</a>. Wallhack wording: <a href=\"/unturned-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for sessions",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports PMC sessions and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with BattlEye maintenance",
							paragraphs: [
								"ESP hack modules rebuild after BattlEye anti-cheat and Unturned patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/unturned-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/unturned-hacks/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "Unturned Unlock All 2026 | What It Really Means",
					description: "Unturned unlock all explained vs real unturned hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Unturned Unlock All — What Players Search For",
					intro: "Unturned unlock all is a common search term for Unturned — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Unturned Hacks actually provides on Windows PC.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned unlock all guide visuals",
					ctaPrimary: "Buy Unturned Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Unturned unlock all usually means",
							paragraphs: [
								"Unturned unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Unturned Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.escapefromunturned.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Unturned</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/unturned-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/unturned-hacks/\">Unturned hacks</a> and <a href=\"/unturned-hacks/\">Unturned hacks</a>.",
							],
						},
						{
							h2: "Buying Unturned Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Unturned on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Unturned Hacks",
					description: "Privacy policy for Unturned Hacks. How we handle support emails, order data, and checkout for unturned hacks licenses on unturnedhacks.com.",
					h1: "Privacy Policy",
					intro: "How Unturned Hacks handles information when you browse unturnedhacks.com or contact support about a Unturned license.",
					imageAlt: "Unturned Hacks privacy policy page",
					galleryTitle: "Unturned Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Unturned Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@unturnedhacks.com with your request details.",
								"Policy updates publish on this page. Continued use of unturnedhacks.com after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Unturned Hacks",
					description: "Refund policy for Unturned Hacks. Digital delivery terms and eligibility for unturned hacks packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Unturned Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Unturned.",
					imageAlt: "Unturned Hacks refund policy page",
					galleryTitle: "Unturned Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Unturned Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@unturnedhacks.com with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-session.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Unturned Hacks Rules",
					description: "Terms of use for unturnedhacks.com and Unturned Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of unturnedhacks.com and Unturned Hacks licenses for Unturned on Windows PC.",
					imageAlt: "Unturned Hacks terms of use page",
					galleryTitle: "Unturned Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Unturned Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Unturned on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Unturned may violate Battlestate Games terms and result in account penalties. Unturned Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/unturned-hacks/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@unturnedhacks.com for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Unturned indetectables",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para Unturned en PC Windows — mantenimiento BattlEye anti-cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Unturned PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Unturned Hacks está activo para Unturned en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento BattlEye anti-cheat incluido",
					antiCheatShort: "BattlEye anti-cheat incluido",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Unturned",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Unturned Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Unturned — checkout en Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Unturned indetectables para Unturned en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye anti-cheat. Entrega digital",
					h1: "Unturned Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Unturned en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye anti-cheat tras cada parche.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galería Unturned Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Unturned Hacks en 2026",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Cajas de jugador y wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Controles soft aim",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Funciones.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Precios.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Instalación.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro BattlEye",
					description: "Actualizaciones: BattlEye patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Actualizaciones.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. BattlEye patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Soporte.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after BattlEye anti-cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Trucos indetectables.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | Visibilidad ESP",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Mantenimiento de parches",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Unturned 2026 | Guía del comprador",
					description: "Trucos Unturned 2026: 2026 Unturned hacks checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Unturned 2026",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Trucos Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Trucos Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Trucos Unturned 2026",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Unturned | Guía ESP y Aimbot",
					description: "Trucos Unturned: the Unturned hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Trucos Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Unturned Hacks | Acceso instantáneo",
					description: "Descarga Unturned Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Unturned Hacks",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Descarga Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Descarga Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Unturned Hacks",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Unturned | Controles en partida",
					description: "Menú mod Unturned: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Menú mod Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Menú mod Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Ajustes soft aim",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Unturned | Lista de compra",
					description: "Mejores trucos Unturned: what to compare before buying Unturned hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Mejores trucos Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Mejores trucos Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. what to compare before buying Unturned hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Asistencia soft aim",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. undetected Aimbot hack assist for Unturned.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Cajas y loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | Qué significa",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Unturned Hacks",
					description: "Política de privacidad for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Política de privacidad for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Unturned Hacks",
					description: "Política de reembolso for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Política de reembolso for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Unturned Hacks",
					description: "Términos de uso for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Términos de uso for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Unturned Hacks ofrece ESP wallhack, radar hack y unturned aimbot indetectables para Unturned en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@unturnedhacks.com para solicitudes legales o de soporte.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Unturned indétectables",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Unturned sur PC Windows — maintenance BattlEye anti-cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Unturned PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Unturned Hacks est actif pour Unturned sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance BattlEye anti-cheat incluse",
					antiCheatShort: "BattlEye anti-cheat inclus",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Unturned",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Unturned Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Unturned indétectables pour Unturned sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye anti-cheat. Livraison",
					h1: "Unturned Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Unturned sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye anti-cheat après chaque patch.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galerie Unturned Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Unturned Hacks en 2026",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Boîtes joueur et wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Contrôles soft aim",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Fonctions.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Tarifs.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Installation.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal BattlEye",
					description: "Mises à jour: BattlEye patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Mises à jour.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. BattlEye patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Support.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after BattlEye anti-cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Triches indétectables.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | Visibilité ESP",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Maintenance des patchs",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Unturned 2026 | Guide acheteur",
					description: "Triches Unturned 2026: 2026 Unturned hacks checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Unturned 2026",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Triches Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Triches Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Triches Unturned 2026",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. 2026 Unturned hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Unturned | Guide ESP et Aimbot",
					description: "Triches Unturned: the Unturned hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Triches Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Unturned Hacks | Accès instantané",
					description: "Téléchargement Unturned Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Unturned Hacks",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Téléchargement Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Téléchargement Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Unturned Hacks",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Unturned | Contrôles en jeu",
					description: "Menu mod Unturned: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Menu mod Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Menu mod Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Réglages soft aim",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Unturned | Checklist acheteur",
					description: "Meilleures triches Unturned: what to compare before buying Unturned hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Meilleures triches Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Meilleures triches Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. what to compare before buying Unturned hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Assistance soft aim",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. undetected Aimbot hack assist for Unturned.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Boîtes et loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | Ce que ça signifie",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acheter Unturned Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Unturned Hacks",
					description: "Politique de confidentialité for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Politique de confidentialité for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Unturned Hacks",
					description: "Politique de remboursement for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Politique de remboursement for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Unturned Hacks",
					description: "Conditions d'utilisation for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Conditions d'utilisation for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Unturned Hacks combine ESP wallhack, radar hack et unturned aimbot indétectables pour Unturned sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@unturnedhacks.com pour le support ou les demandes légales.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Unturned Hacks",
					accentShort: "Unturned Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Unturned auf Windows PC — BattlEye anti-cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Unturned PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Unturned Hacks Paket ist live für Unturned auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-Wartung unterstützt",
					antiCheatShort: "BattlEye anti-cheat Support",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Unturned Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Unturned — Checkout über Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Unturned Hacks für Unturned auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye anti-cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Unturned: ESP Wallhack, Radar und Aimbot mit BattlEye anti-cheat-Wartung nach jedem Patch.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Unturned Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Unturned Hacks 2026 führt",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Spielerboxen & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft-Aim Steuerung",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Features.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Preise.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Setup.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Wartungslog",
					description: "Updates: BattlEye patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Updates.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. BattlEye patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Support.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after BattlEye anti-cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Undetected Cheats.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Sichtbarkeit",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch-Wartung",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Käuferleitfaden",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Cheat Download | Sofortzugang",
					description: "Unturned Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Cheat Download",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Cheat Download.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Cheat Download",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Cheat Download",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned Mod-Menü | In-Game Toggles",
					description: "Unturned Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Mod-Menü",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Mod-Menü.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned Mod-Menü",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Mod-Menü",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Soft-Aim Einstellungen",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Unturned Hacks | Käufer-Checkliste",
					description: "Beste Unturned Hacks: what to compare before buying Unturned hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Unturned Hacks",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Beste Unturned Hacks.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Beste Unturned Hacks",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Unturned Hacks",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. what to compare before buying Unturned hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hack | Soft-Aim Assist",
					description: "Unturned Aimbot Hack: undetected Aimbot hack assist for Unturned. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Aimbot Hack",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Aimbot Hack.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned Aimbot Hack",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Aimbot Hack",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. undetected Aimbot hack assist for Unturned.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP Hack | Boxen & Loot",
					description: "Unturned ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned ESP Hack",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned ESP Hack.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP Hack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP Hack",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | Was es bedeutet",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Unturned Hacks",
					description: "Datenschutz for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Datenschutz for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Unturned Hacks",
					description: "Rückerstattung for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Rückerstattung for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Unturned Hacks",
					description: "Nutzungsbedingungen for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Nutzungsbedingungen for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Unturned Hacks bündelt ESP wallhack, radar hack und unturned aimbot als undetected Paket für Unturned auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@unturnedhacks.com für Support und rechtliche Anfragen.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Unturned indetectáveis",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para Unturned no PC Windows — manutenção BattlEye anti-cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Unturned PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Unturned Hacks está ativo para Unturned no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção BattlEye anti-cheat incluída",
					antiCheatShort: "BattlEye anti-cheat incluído",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Unturned",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Unturned Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Unturned indetectáveis para Unturned no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye anti-cheat. Entrega digital",
					h1: "Unturned Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Unturned no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye anti-cheat após cada patch.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galeria Unturned Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Unturned Hacks em 2026",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Caixas de jogador e wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Controles soft aim",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Recursos.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Preços.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Instalação.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro BattlEye",
					description: "Atualizações: BattlEye patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Atualizações.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. BattlEye patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Suporte.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after BattlEye anti-cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Cheats indetectáveis.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | Visibilidade ESP",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Manutenção de patches",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Unturned 2026 | Guia do comprador",
					description: "Cheats Unturned 2026: 2026 Unturned hacks checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Unturned 2026",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Cheats Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Cheats Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheats Unturned 2026",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. 2026 Unturned hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Unturned | Guia ESP e Aimbot",
					description: "Cheats Unturned: the Unturned hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Cheats Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Unturned Hacks | Acesso instantâneo",
					description: "Download Unturned Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Unturned Hacks",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Download Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Download Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Unturned Hacks",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Unturned | Controles in-game",
					description: "Menu mod Unturned: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Menu mod Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Menu mod Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Ajustes soft aim",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Unturned | Checklist do comprador",
					description: "Melhores cheats Unturned: what to compare before buying Unturned hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Melhores cheats Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Melhores cheats Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. what to compare before buying Unturned hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Assistência soft aim",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. undetected Aimbot hack assist for Unturned.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Caixas e loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | O que significa",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Comprar Unturned Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Unturned Hacks",
					description: "Política de privacidade for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Política de privacidade for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Unturned Hacks",
					description: "Política de reembolso for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Política de reembolso for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Unturned Hacks",
					description: "Termos de uso for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Termos de uso for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks reúne ESP wallhack, radar hack e unturned aimbot indetectáveis para Unturned no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@unturnedhacks.com para suporte ou questões legais.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Unturned indetectable",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per Unturned su PC Windows — manutenzione BattlEye anti-cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Unturned PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Unturned Hacks è attivo per Unturned su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione BattlEye anti-cheat supportata",
					antiCheatShort: "BattlEye anti-cheat supportato",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Unturned",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Unturned Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Unturned indetectable per Unturned su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye anti-cheat. Consegna digitale",
					h1: "Unturned Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Unturned su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye anti-cheat dopo ogni patch.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galleria Unturned Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Unturned Hacks nel 2026",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Box giocatore e wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Controlli soft aim",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Funzioni.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Prezzi.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Setup.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione BattlEye",
					description: "Aggiornamenti: BattlEye patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Aggiornamenti.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. BattlEye patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Supporto.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after BattlEye anti-cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Cheat indetectable.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | Visibilità ESP",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Manutenzione patch",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Unturned 2026 | Guida acquirente",
					description: "Cheat Unturned 2026: 2026 Unturned hacks checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Unturned 2026",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Cheat Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Cheat Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheat Unturned 2026",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. 2026 Unturned hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Unturned | Guida ESP e Aimbot",
					description: "Cheat Unturned: the Unturned hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Cheat Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Unturned Hacks | Accesso istantaneo",
					description: "Download Unturned Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Unturned Hacks",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Download Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Download Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Unturned Hacks",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Unturned | Toggle in-game",
					description: "Mod menu Unturned: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Mod menu Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Mod menu Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Impostazioni soft aim",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Unturned | Checklist acquirente",
					description: "Migliori cheat Unturned: what to compare before buying Unturned hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Migliori cheat Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Migliori cheat Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. what to compare before buying Unturned hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Assist soft aim",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. undetected Aimbot hack assist for Unturned.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Box e loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | Cosa significa",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Acquista Unturned Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Unturned Hacks",
					description: "Informativa privacy for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Informativa privacy for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Unturned Hacks",
					description: "Politica di rimborso for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Politica di rimborso for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Unturned Hacks",
					description: "Termini di utilizzo for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Termini di utilizzo for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks unisce ESP wallhack, radar hack e unturned aimbot indetectable per Unturned su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@unturnedhacks.com per supporto o richieste legali.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Unturned Hacks",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Unturned op Windows PC — BattlEye anti-cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Unturned PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Unturned Hacks pakket is live voor Unturned op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-onderhoud ondersteund",
					antiCheatShort: "BattlEye anti-cheat support",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Unturned Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Unturned hacks voor Unturned op PC. ESP wallhack, radar hack en Aimbot met BattlEye anti-cheat-onderhoud. Directe digitale levering.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Unturned: ESP wallhack, radar en Aimbot met BattlEye anti-cheat-onderhoud na elke patch.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Unturned Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Unturned Hacks in 2026",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Functies.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Prijzen.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Setup.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Maintenance Log",
					description: "Updates: BattlEye patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Updates.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. BattlEye patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Support.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | BattlEye Safe Status",
					description: "Undetected Cheats: undetected maintenance after BattlEye anti-cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Undetected Cheats.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. directe digitale levering. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Buyer Guide",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Cheat Download | Instant Access",
					description: "Unturned Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Cheat Download",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Cheat Download.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Cheat Download",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Cheat Download",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned Mod Menu | In-Game Toggles",
					description: "Unturned Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Mod Menu",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Mod Menu.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned Mod Menu",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Mod Menu",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Unturned Hacks | Buyer Checklist",
					description: "Beste Unturned Hacks: what to compare before buying Unturned hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Unturned Hacks",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Beste Unturned Hacks.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Beste Unturned Hacks",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Unturned Hacks",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. what to compare before buying Unturned hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hack | Soft Aim Assist",
					description: "Unturned Aimbot Hack: undetected Aimbot hack assist for Unturned. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Aimbot Hack",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Aimbot Hack.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned Aimbot Hack",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Aimbot Hack",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. undetected Aimbot hack assist for Unturned.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP Hack | Boxes & Loot",
					description: "Unturned ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned ESP Hack",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned ESP Hack.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP Hack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP Hack",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@unturnedhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Unturned Hacks",
					description: "Privacybeleid for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Privacybeleid for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com voor support en juridische vragen.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Unturned Hacks",
					description: "Restitutiebeleid for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Restitutiebeleid for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com voor support en juridische vragen.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Unturned Hacks",
					description: "Gebruiksvoorwaarden for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Gebruiksvoorwaarden for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks bundelt ESP wallhack, radar hack en unturned aimbot als undetected pakket voor Unturned op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com voor support en juridische vragen.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Unturned",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do Unturned na PC Windows — konserwacja BattlEye anti-cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Unturned PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Unturned Hacks jest aktywny dla Unturned na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat wsparcie",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Unturned",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Unturned Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Unturned — checkout przez Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Unturned dla Unturned na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye anti-cheat. Natychmiastowa dostawa",
					h1: "Unturned Hacks — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Unturned na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye anti-cheat po każdym patchu.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galeria Unturned Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Unturned Hacks w 2026",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Player Boxes & Wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Soft Aim Controls",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Funkcje.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Cennik.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Instalacja.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | BattlEye Maintenance Log",
					description: "Aktualizacje: BattlEye patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Aktualizacje.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. BattlEye patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Wsparcie.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | BattlEye Safe Status",
					description: "Cheaty undetected: undetected maintenance after BattlEye anti-cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Cheaty undetected.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | ESP Visibility",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Unturned 2026 | Buyer Guide",
					description: "Cheaty Unturned 2026: 2026 Unturned hacks checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Unturned 2026",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Cheaty Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Cheaty Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheaty Unturned 2026",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. 2026 Unturned hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Unturned | ESP Aimbot Guide",
					description: "Cheaty Unturned: the Unturned hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Cheaty Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Unturned Hacks | Instant Access",
					description: "Pobieranie Unturned Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Unturned Hacks",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Pobieranie Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Pobieranie Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Unturned Hacks",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Unturned | In-Game Toggles",
					description: "Mod menu Unturned: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Mod menu Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Mod menu Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Smooth Aim Settings",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Unturned | Buyer Checklist",
					description: "Najlepsze cheaty Unturned: what to compare before buying Unturned hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Najlepsze cheaty Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Najlepsze cheaty Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. what to compare before buying Unturned hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Soft Aim Assist",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. undetected Aimbot hack assist for Unturned.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Boxes & Loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | What It Means",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Kup Unturned Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Unturned Hacks",
					description: "Polityka prywatności for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Polityka prywatności for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Unturned Hacks",
					description: "Polityka zwrotów for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Polityka zwrotów for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Unturned Hacks",
					description: "Warunki użytkowania for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Warunki użytkowania for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks łączy ESP wallhack, radar hack i unturned aimbot jako pakiet undetected dla Unturned na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com w sprawach wsparcia i prawnych.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Unturned",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для Unturned на Windows PC — обслуживание BattlEye anti-cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Unturned PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Unturned Hacks активен для Unturned на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat поддержка",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Unturned Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Unturned — оплата через Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Unturned для Unturned на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye anti-cheat. Мгновенная цифровая",
					h1: "Unturned Hacks — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Unturned на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye anti-cheat после патчей.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Галерея Unturned Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Unturned Hacks в 2026",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Боксы игроков и wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Управление soft aim",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Функции.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Цены.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Установка.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал BattlEye",
					description: "Обновления: BattlEye patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Обновления.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. BattlEye patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Поддержка.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after BattlEye anti-cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Undetected читы.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | Видимость ESP",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Обслуживание патчей",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Unturned 2026 | Гайд покупателя",
					description: "Читы Unturned 2026: 2026 Unturned hacks checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Unturned 2026",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Читы Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Читы Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Читы Unturned 2026",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Unturned | Гайд ESP и Aimbot",
					description: "Читы Unturned: the Unturned hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Читы Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Unturned Hacks | Мгновенный доступ",
					description: "Скачать Unturned Hacks: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Unturned Hacks",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Скачать Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Скачать Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Unturned Hacks",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Unturned | Игровые переключатели",
					description: "Мод-меню Unturned: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Мод-меню Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Мод-меню Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Настройки soft aim",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Unturned | Чеклист покупателя",
					description: "Лучшие читы Unturned: what to compare before buying Unturned hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Лучшие читы Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Лучшие читы Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. what to compare before buying Unturned hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Unturned | Soft aim ассист",
					description: "Хак aimbot Unturned: undetected Aimbot hack assist for Unturned. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Хак aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. undetected Aimbot hack assist for Unturned.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Unturned | Боксы и лут",
					description: "Хак ESP Unturned: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Хак ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Хак ESP Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | Что это значит",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купить Unturned Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Unturned Hacks",
					description: "Политика конфиденциальности for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Политика конфиденциальности for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Unturned Hacks",
					description: "Политика возврата for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Политика возврата for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Unturned Hacks",
					description: "Условия использования for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Условия использования for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks объединяет ESP wallhack, radar hack и unturned aimbot в undetected пакете для Unturned на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com для поддержки и юридических вопросов.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Unturned hileleri",
					accentShort: "Unturned Hacks",
					subtitle: "Unturned Windows PC için ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı dahil.",
					subtitleShort: "Unturned PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Unturned Hacks paketi Unturned Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "BattlEye anti-cheat bakım desteği",
					antiCheatShort: "BattlEye anti-cheat destek",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Unturned Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Unturned için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "Unturned için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı. Anında dijital teslimat.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack ve Aimbot",
					intro: "Unturned Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye anti-cheat bakımı dahil.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Unturned Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Unturned Hacks",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | BattlEye Maintenance Log",
					description: "Güncellemeler: BattlEye patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. BattlEye patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and BattlEye questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. SSS.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Destek.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | BattlEye Safe Status",
					description: "Undetected hileler: undetected maintenance after BattlEye anti-cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye bypass | Patch Maintenance",
					description: "BattlEye bypass: how BattlEye updates are handled for Unturned hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "BattlEye bypass",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. BattlEye bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye bypass",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. how BattlEye updates are handled for Unturned hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hileleri 2026 | Buyer Guide",
					description: "Unturned Hileleri 2026: 2026 Unturned hacks checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Hileleri 2026",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Hileleri 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hileleri 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hileleri 2026",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. 2026 Unturned hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hileleri | ESP Aimbot Guide",
					description: "Unturned Hileleri: the Unturned hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Hileleri",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Hileleri.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hileleri",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hileleri",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. the Unturned hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Hile İndir | Instant Access",
					description: "Unturned Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Hile İndir",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Hile İndir.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Hile İndir",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Hile İndir",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned Mod Menü | In-Game Toggles",
					description: "Unturned Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Mod Menü",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Mod Menü.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned Mod Menü",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Mod Menü",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Unturned Hileleri | Buyer Checklist",
					description: "En İyi Unturned Hileleri: what to compare before buying Unturned hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Unturned Hileleri",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. En İyi Unturned Hileleri.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "En İyi Unturned Hileleri",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Unturned Hileleri",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. what to compare before buying Unturned hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hilesi | Soft Aim Assist",
					description: "Unturned Aimbot Hilesi: undetected Aimbot hack assist for Unturned. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Aimbot Hilesi",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Aimbot Hilesi.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned Aimbot Hilesi",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Aimbot Hilesi",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. undetected Aimbot hack assist for Unturned.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP Hilesi | Boxes & Loot",
					description: "Unturned ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned ESP Hilesi",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned ESP Hilesi.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP Hilesi",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP Hilesi",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@unturnedhacks.com.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Unturned Hacks",
					description: "Gizlilik politikası for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Gizlilik politikası for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@unturnedhacks.com.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Unturned Hacks",
					description: "İade politikası for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. İade politikası for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@unturnedhacks.com.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Unturned Hacks",
					description: "Kullanım şartları for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Kullanım şartları for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks, Unturned için Windows PC üzerinde ESP wallhack, radar hack ve unturned aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@unturnedhacks.com.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Unturned غير مكتشف",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Unturned على Windows PC — صيانة BattlEye anti-cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Unturned PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Unturned Hacks نشطة لـ Unturned على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة BattlEye anti-cheat",
					antiCheatShort: "دعم BattlEye anti-cheat",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Unturned Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Unturned — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش Unturned undetected لـ Unturned على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye anti-cheat. تسليم رقمي فوري.",
					h1: "Unturned Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Unturned على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye anti-cheat.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "معرض Unturned Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Unturned Hacks في 2026",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Player Boxes & Wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Soft Aim Controls",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. الميزات.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. الأسعار.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. التثبيت.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | BattlEye Maintenance Log",
					description: "التحديثات: BattlEye patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. التحديثات.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. BattlEye patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and BattlEye questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. الأسئلة.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. الدعم.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | BattlEye Safe Status",
					description: "غش undetected: undetected maintenance after BattlEye anti-cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. غش undetected.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | ESP Visibility",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Unturned 2026 | Buyer Guide",
					description: "غش Unturned 2026: 2026 Unturned hacks checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Unturned 2026",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. غش Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "غش Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "غش Unturned 2026",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. 2026 Unturned hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Unturned | ESP Aimbot Guide",
					description: "غش Unturned: the Unturned hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. غش Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Unturned Hacks | Instant Access",
					description: "تحميل Unturned Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Unturned Hacks",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. تحميل Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "تحميل Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Unturned Hacks",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Unturned | In-Game Toggles",
					description: "قائمة مود Unturned: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. قائمة مود Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "قائمة مود Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Smooth Aim Settings",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Unturned | Buyer Checklist",
					description: "أفضل غش Unturned: what to compare before buying Unturned hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. أفضل غش Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "أفضل غش Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. what to compare before buying Unturned hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Unturned | Soft Aim Assist",
					description: "هاك Aimbot Unturned: undetected Aimbot hack assist for Unturned. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. هاك Aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. undetected Aimbot hack assist for Unturned.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Unturned | Boxes & Loot",
					description: "هاك ESP Unturned: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. هاك ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "هاك ESP Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | What It Means",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "اشترِ Unturned Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Unturned Hacks",
					description: "سياسة الخصوصية for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. سياسة الخصوصية for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Unturned Hacks",
					description: "سياسة الاسترداد for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. سياسة الاسترداد for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Unturned Hacks",
					description: "شروط الاستخدام for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. شروط الاستخدام for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Unturned Hacks يجمع ESP wallhack وradar hack وunturned aimbot غير مكتشف لـ Unturned على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@unturnedhacks.com للدعم والطلبات القانونية.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Unturnedチート",
					accentShort: "Unturned Hacks",
					subtitle: "Unturned Windows PC向けESP wallhack、radar hack、Aimbot — BattlEye anti-cheatメンテナンス付き。",
					subtitleShort: "Unturned PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Unturned HacksパッケージはUnturned Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheatメンテナンス対応",
					antiCheatShort: "BattlEye anti-cheat対応",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Unturned Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Unturned向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "Unturned向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheatメンテナンス。即時デジタル配信。",
					h1: "Unturned Hacks — Undetected ESP・Wallhack・Aimbot",
					intro: "Unturned Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEye anti-cheatメンテナンス付き。",
					imageAlt: "Unturned hacks hero ESP aimbot wallhack",
					galleryTitle: "Unturned Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にUnturned Hacksを選ぶ理由",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。機能.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。料金.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。更新.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。BattlEye patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | BattlEye Safe Status",
					description: "Undetectedチート: undetected maintenance after BattlEye anti-cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。how BattlEye updates are handled for Unturned hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Buyer Guide",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。2026 Unturned hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。the Unturned hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Cheat Download | Instant Access",
					description: "Unturned Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Cheat Download",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Cheat Download.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Cheat Download",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Cheat Download",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned Mod Menu | In-Game Toggles",
					description: "Unturned Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Mod Menu",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Mod Menu.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned Mod Menu",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Mod Menu",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Unturnedチート | Buyer Checklist",
					description: "最強Unturnedチート: what to compare before buying Unturned hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Unturnedチート",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。最強Unturnedチート.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "最強Unturnedチート",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Unturnedチート",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。what to compare before buying Unturned hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hack | Soft Aim Assist",
					description: "Unturned Aimbot Hack: undetected Aimbot hack assist for Unturned. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Aimbot Hack",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Aimbot Hack.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned Aimbot Hack",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Aimbot Hack",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。undetected Aimbot hack assist for Unturned.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP Hack | Boxes & Loot",
					description: "Unturned ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned ESP Hack",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned ESP Hack.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP Hack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP Hack",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@unturnedhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Unturned Hacks",
					description: "プライバシーポリシー for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。プライバシーポリシー for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Unturned Hacks",
					description: "返金ポリシー for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。返金ポリシー for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Unturned Hacks",
					description: "利用規約 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。利用規約 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Unturned HacksはUnturned向けWindows PC用ESP wallhack、radar hack、unturned aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Unturned 치트",
					accentShort: "Unturned Hacks",
					subtitle: "Unturned Windows PC용 ESP wallhack, radar hack, Aimbot — BattlEye anti-cheat 유지보수 포함.",
					subtitleShort: "Unturned PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Unturned Hacks 패키지는 Unturned Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat 유지보수 지원",
					antiCheatShort: "BattlEye anti-cheat 지원",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Unturned Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Unturned용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "Unturned undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat 유지보수. 즉시 디지털 배송.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack, Aimbot",
					intro: "Unturned Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye anti-cheat 유지보수 포함.",
					imageAlt: "Unturned hacks hero ESP aimbot wallhack",
					galleryTitle: "Unturned Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Unturned Hacks를 선택하는 이유",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | BattlEye Maintenance Log",
					description: "업데이트: BattlEye patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. BattlEye patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | BattlEye Safe Status",
					description: "Undetected 치트: undetected maintenance after BattlEye anti-cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. how BattlEye updates are handled for Unturned hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Buyer Guide",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 2026 Unturned hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. the Unturned hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Cheat Download | Instant Access",
					description: "Unturned Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Cheat Download",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Cheat Download.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Cheat Download",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Cheat Download",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned 모드 메뉴 | In-Game Toggles",
					description: "Unturned 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned 모드 메뉴",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned 모드 메뉴.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned 모드 메뉴",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned 모드 메뉴",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Unturned 치트 | Buyer Checklist",
					description: "최고의 Unturned 치트: what to compare before buying Unturned hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Unturned 치트",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 최고의 Unturned 치트.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "최고의 Unturned 치트",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Unturned 치트",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. what to compare before buying Unturned hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned 에임봇 핵 | Soft Aim Assist",
					description: "Unturned 에임봇 핵: undetected Aimbot hack assist for Unturned. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned 에임봇 핵",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned 에임봇 핵.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned 에임봇 핵",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned 에임봇 핵",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. undetected Aimbot hack assist for Unturned.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP 핵 | Boxes & Loot",
					description: "Unturned ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned ESP 핵",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned ESP 핵.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP 핵",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP 핵",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@unturnedhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Unturned Hacks",
					description: "개인정보 처리방침 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 개인정보 처리방침 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Unturned Hacks",
					description: "환불 정책 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 환불 정책 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Unturned Hacks",
					description: "이용 약관 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. 이용 약관 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks는 Unturned Windows PC용 ESP wallhack, radar hack, unturned aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Unturned作弊",
					accentShort: "Unturned Hacks",
					subtitle: "适用于Unturned Windows PC的ESP wallhack、radar hack和Aimbot — 含BattlEye anti-cheat维护。",
					subtitleShort: "Unturned PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Unturned Hacks套餐已在Unturned Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持BattlEye anti-cheat维护",
					antiCheatShort: "BattlEye anti-cheat支持",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Unturned Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Unturned undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "Unturned undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheat维护。即时数字交付。",
					h1: "Unturned Hacks — Undetected ESP、Wallhack、Aimbot",
					intro: "Unturned Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye anti-cheat维护。",
					imageAlt: "Unturned hacks hero ESP aimbot wallhack",
					galleryTitle: "Unturned Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Unturned Hacks的原因",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。一个许可证而非多个工具。",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。功能.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。价格.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。安装.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。更新.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。BattlEye patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and BattlEye questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。常见问题.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。ESP, soft aim, delivery, and BattlEye questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。支持.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | BattlEye Safe Status",
					description: "Undetected作弊: undetected maintenance after BattlEye anti-cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。undetected maintenance after BattlEye anti-cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. 即时数字交付. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。how BattlEye updates are handled for Unturned hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned作弊 2026 | Buyer Guide",
					description: "Unturned作弊 2026: 2026 Unturned hacks checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned作弊 2026",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned作弊 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned作弊 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned作弊 2026",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。2026 Unturned hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Unturned作弊 | ESP Aimbot Guide",
					description: "Unturned作弊: the Unturned hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned作弊",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned作弊.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned作弊",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned作弊",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。the Unturned hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned作弊下载 | Instant Access",
					description: "Unturned作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned作弊下载",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned作弊下载.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned作弊下载",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned作弊下载",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned修改菜单 | In-Game Toggles",
					description: "Unturned修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned修改菜单",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned修改菜单.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned修改菜单",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned修改菜单",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Unturned作弊 | Buyer Checklist",
					description: "最佳Unturned作弊: what to compare before buying Unturned hacks. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Unturned作弊",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。最佳Unturned作弊.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "最佳Unturned作弊",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Unturned作弊",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。what to compare before buying Unturned hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned自瞄外挂 | Soft Aim Assist",
					description: "Unturned自瞄外挂: undetected Aimbot hack assist for Unturned. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned自瞄外挂",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned自瞄外挂.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned自瞄外挂",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned自瞄外挂",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。undetected Aimbot hack assist for Unturned.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP外挂 | Boxes & Loot",
					description: "Unturned ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned ESP外挂",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned ESP外挂.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP外挂",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP外挂",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "购买 Unturned Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@unturnedhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Unturned Hacks",
					description: "隐私政策 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。隐私政策 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Unturned Hacks",
					description: "退款政策 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。退款政策 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Unturned Hacks",
					description: "使用条款 for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。使用条款 for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks为UnturnedWindows PC提供ESP wallhack、radar hack和unturned aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Unturned hacks",
					accentShort: "Unturned Hacks",
					subtitle: "Unturned Windows PC के लिए ESP wallhack, radar hack और Aimbot — BattlEye maintenance शामिल।",
					subtitleShort: "Unturned PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Unturned Hacks पैकेज Unturned Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "BattlEye maintenance समर्थित",
					antiCheatShort: "BattlEye anti-cheat समर्थित",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Unturned Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Unturned के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "Unturned undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack और Aimbot",
					intro: "Unturned Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.",
					imageAlt: "Unturned hacks hero ESP aimbot wallhack",
					galleryTitle: "Unturned Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Unturned Hacks क्यों",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | BattlEye Maintenance Log",
					description: "अपडेट: BattlEye patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। BattlEye patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected maintenance after BattlEye anti-cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। how BattlEye updates are handled for Unturned hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Buyer Guide",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। 2026 Unturned hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। the Unturned hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Cheat Download | Instant Access",
					description: "Unturned Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Cheat Download",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Cheat Download.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Cheat Download",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Cheat Download",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned Mod Menu | In-Game Toggles",
					description: "Unturned Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Mod Menu",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Mod Menu.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned Mod Menu",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Mod Menu",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Unturned Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ Unturned Hacks: what to compare before buying Unturned hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Unturned Hacks",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Unturned Hacks.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "सर्वश्रेष्ठ Unturned Hacks",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Unturned Hacks",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। what to compare before buying Unturned hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hack | Soft Aim Assist",
					description: "Unturned Aimbot Hack: undetected Aimbot hack assist for Unturned. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Aimbot Hack",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Aimbot Hack.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned Aimbot Hack",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Aimbot Hack",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Unturned.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP Hack | Boxes & Loot",
					description: "Unturned ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned ESP Hack",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned ESP Hack.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP Hack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP Hack",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Unturned Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@unturnedhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Unturned Hacks",
					description: "गोपनीयता नीति for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। गोपनीयता नीति for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Unturned Hacks",
					description: "रिफंड नीति for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। रिफंड नीति for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Unturned Hacks",
					description: "उपयोग की शर्तें for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। उपयोग की शर्तें for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks Unturned के लिए Windows PC पर ESP wallhack, radar hack और unturned aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@unturnedhacks.com",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Unturned undetected",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Unturned di PC Windows — pemeliharaan BattlEye anti-cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Unturned PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Unturned Hacks aktif untuk Unturned di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan BattlEye anti-cheat didukung",
					antiCheatShort: "BattlEye anti-cheat didukung",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Unturned Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Unturned undetected untuk Unturned di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye anti-cheat. Pengiriman digital",
					h1: "Unturned Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Unturned di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye anti-cheat.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galeri Unturned Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Unturned Hacks di 2026",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Player Boxes & Wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Soft Aim Controls",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Fitur.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Harga.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Setup.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | BattlEye Maintenance Log",
					description: "Pembaruan: BattlEye patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Pembaruan.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. BattlEye patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Dukungan.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: undetected maintenance after BattlEye anti-cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Cheat undetected.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | ESP Visibility",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Unturned 2026 | Buyer Guide",
					description: "Cheat Unturned 2026: 2026 Unturned hacks checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Unturned 2026",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Cheat Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Cheat Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheat Unturned 2026",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. 2026 Unturned hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Unturned | ESP Aimbot Guide",
					description: "Cheat Unturned: the Unturned hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Cheat Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Unturned | Instant Access",
					description: "Download Cheat Unturned: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Download Cheat Unturned.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Download Cheat Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Unturned | In-Game Toggles",
					description: "Menu mod Unturned: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Menu mod Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Menu mod Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Smooth Aim Settings",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Unturned terbaik | Buyer Checklist",
					description: "Cheat Unturned terbaik: what to compare before buying Unturned hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Unturned terbaik",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Cheat Unturned terbaik.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Cheat Unturned terbaik",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Unturned terbaik",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. what to compare before buying Unturned hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Soft Aim Assist",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. undetected Aimbot hack assist for Unturned.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Boxes & Loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | What It Means",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Beli Unturned Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@unturnedhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Unturned Hacks",
					description: "Kebijakan privasi for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Kebijakan privasi for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com untuk dukungan dan legal.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Unturned Hacks",
					description: "Kebijakan refund for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Kebijakan refund for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com untuk dukungan dan legal.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Unturned Hacks",
					description: "Syarat penggunaan for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Syarat penggunaan for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks menyediakan ESP wallhack, radar hack, dan unturned aimbot undetected untuk Unturned di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com untuk dukungan dan legal.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Unturned hacks ไม่ถูกตรวจจับ",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Unturned บน Windows PC — รวมการดูแล BattlEye anti-cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Unturned PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Unturned Hacks พร้อมใช้งานสำหรับ Unturned บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat รองรับ",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Unturned Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Unturned — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Unturned undetected สำหรับ Unturned บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Unturned บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "แกลเลอรี Unturned Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Unturned Hacks ปี 2026",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ฟีเจอร์.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ราคา.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ติดตั้ง.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | BattlEye Maintenance Log",
					description: "อัปเดต: BattlEye patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC อัปเดต.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC BattlEye patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ESP, soft aim, delivery, and BattlEye questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC สนับสนุน.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: undetected maintenance after BattlEye anti-cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Cheats undetected.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC undetected maintenance after BattlEye anti-cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC how BattlEye updates are handled for Unturned hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Buyer Guide",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC 2026 Unturned hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC the Unturned hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Unturned Hacks | Instant Access",
					description: "ดาวน์โหลด Unturned Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Unturned Hacks",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ดาวน์โหลด Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Unturned Hacks",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Unturned | In-Game Toggles",
					description: "เมนูมอด Unturned: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Unturned",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC เมนูมอด Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "เมนูมอด Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Unturned",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Unturned ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Unturned ที่ดีที่สุด: what to compare before buying Unturned hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Unturned ที่ดีที่สุด",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Cheat Unturned ที่ดีที่สุด.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Cheat Unturned ที่ดีที่สุด",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Unturned ที่ดีที่สุด",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC what to compare before buying Unturned hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Unturned | Soft Aim Assist",
					description: "Hack Aimbot Unturned: undetected Aimbot hack assist for Unturned. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Unturned",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Hack Aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC undetected Aimbot hack assist for Unturned.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Boxes & Loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "ซื้อ Unturned Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@unturnedhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Unturned Hacks",
					description: "นโยบายความเป็นส่วนตัว for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC นโยบายความเป็นส่วนตัว for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com สำหรับการสนับสนุน",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Unturned Hacks",
					description: "นโยบายการคืนเงิน for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC นโยบายการคืนเงิน for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com สำหรับการสนับสนุน",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Unturned Hacks",
					description: "ข้อกำหนดการใช้งาน for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC ข้อกำหนดการใช้งาน for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks รวม ESP wallhack, radar hack และ unturned aimbot แบบ undetected สำหรับ Unturned บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com สำหรับการสนับสนุน",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Unturned undetected",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Unturned trên PC Windows — bảo trì BattlEye anti-cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Unturned PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Unturned Hacks đang hoạt động cho Unturned trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì BattlEye anti-cheat",
					antiCheatShort: "Hỗ trợ BattlEye anti-cheat",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Unturned Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Unturned — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Unturned undetected cho Unturned trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye anti-cheat. Giao hàng kỹ thuật số tức",
					h1: "Unturned Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Unturned trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye anti-cheat.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Thư viện Unturned Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Player Boxes & Wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Soft Aim Controls",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Tính năng.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Giá.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Cài đặt.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | BattlEye Maintenance Log",
					description: "Cập nhật: BattlEye patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Cập nhật.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. BattlEye patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Hỗ trợ.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: undetected maintenance after BattlEye anti-cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Cheat undetected.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | ESP Visibility",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Unturned 2026 | Buyer Guide",
					description: "Cheat Unturned 2026: 2026 Unturned hacks checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Unturned 2026",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Cheat Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Cheat Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheat Unturned 2026",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. 2026 Unturned hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Unturned | ESP Aimbot Guide",
					description: "Cheat Unturned: the Unturned hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Cheat Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Unturned | Instant Access",
					description: "Tải Cheat Unturned: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Tải Cheat Unturned.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Unturned | In-Game Toggles",
					description: "Mod menu Unturned: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Mod menu Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Mod menu Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Smooth Aim Settings",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Unturned tốt nhất | Buyer Checklist",
					description: "Cheat Unturned tốt nhất: what to compare before buying Unturned hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Unturned tốt nhất",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Cheat Unturned tốt nhất.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Cheat Unturned tốt nhất",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Unturned tốt nhất",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. what to compare before buying Unturned hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Soft Aim Assist",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. undetected Aimbot hack assist for Unturned.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Boxes & Loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | What It Means",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Mua Unturned Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Unturned Hacks",
					description: "Chính sách bảo mật for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Chính sách bảo mật for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Unturned Hacks",
					description: "Chính sách hoàn tiền for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Chính sách hoàn tiền for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Unturned Hacks",
					description: "Điều khoản sử dụng for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Điều khoản sử dụng for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks cung cấp ESP wallhack, radar hack và unturned aimbot undetected cho Unturned trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com cho hỗ trợ và pháp lý.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Unturned",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для Unturned на Windows PC — обслуговування BattlEye anti-cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Unturned PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Unturned Hacks активний для Unturned на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat підтримка",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Unturned Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Unturned — оплата через Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Unturned для Unturned на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye anti-cheat. Мгновенная цифровая",
					h1: "Unturned Hacks — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Unturned на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye anti-cheat.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Галерея Unturned Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Unturned Hacks у 2026",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Player Boxes & Wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Soft Aim Controls",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Функції.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Ціни.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Встановлення.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | BattlEye Maintenance Log",
					description: "Оновлення: BattlEye patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Оновлення.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. BattlEye patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Підтримка.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | BattlEye Safe Status",
					description: "Undetected чіти: undetected maintenance after BattlEye anti-cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Undetected чіти.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | ESP Visibility",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Unturned 2026 | Buyer Guide",
					description: "Чіти Unturned 2026: 2026 Unturned hacks checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Unturned 2026",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Чіти Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Чіти Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Чіти Unturned 2026",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Unturned | ESP Aimbot Guide",
					description: "Чіти Unturned: the Unturned hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Чіти Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Unturned Hacks | Instant Access",
					description: "Завантаження Unturned Hacks: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Unturned Hacks",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Завантаження Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Завантаження Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Unturned Hacks",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Unturned | In-Game Toggles",
					description: "Мод-меню Unturned: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Мод-меню Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Мод-меню Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Smooth Aim Settings",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Unturned | Buyer Checklist",
					description: "Найкращі чіти Unturned: what to compare before buying Unturned hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Найкращі чіти Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Найкращі чіти Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. what to compare before buying Unturned hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Unturned | Soft Aim Assist",
					description: "Хак aimbot Unturned: undetected Aimbot hack assist for Unturned. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Хак aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. undetected Aimbot hack assist for Unturned.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Unturned | Boxes & Loot",
					description: "Хак ESP Unturned: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Хак ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Хак ESP Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | What It Means",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Купити Unturned Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@unturnedhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Unturned Hacks",
					description: "Політика конфіденційності for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Політика конфіденційності for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com для підтримки та правових питань.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Unturned Hacks",
					description: "Політика повернення for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Політика повернення for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com для підтримки та правових питань.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Unturned Hacks",
					description: "Умови використання for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Умови використання for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks об'єднує ESP wallhack, radar hack і unturned aimbot у undetected пакеті для Unturned на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com для підтримки та правових питань.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Unturned hacky",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Unturned na Windows PC — údržba BattlEye anti-cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Unturned PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Unturned Hacks je aktivní pro Unturned na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat podpora",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Unturned Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Unturned — checkout přes Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Unturned hacky pro Unturned na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye anti-cheat. Okamžité digitální doručení.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Unturned na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye anti-cheat.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galerie Unturned Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Unturned Hacks v roce 2026",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Funkce.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Ceny.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Instalace.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | BattlEye Maintenance Log",
					description: "Aktualizace: BattlEye patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Aktualizace.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. BattlEye patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Podpora.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | BattlEye Safe Status",
					description: "Undetected cheaty: undetected maintenance after BattlEye anti-cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Undetected cheaty.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned hacky 2026 | Buyer Guide",
					description: "Unturned hacky 2026: 2026 Unturned hacks checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned hacky 2026",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned hacky 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned hacky 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned hacky 2026",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Unturned hacky | ESP Aimbot Guide",
					description: "Unturned hacky: the Unturned hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned hacky",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned hacky.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned hacky",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned hacky",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Unturned Hacks | Instant Access",
					description: "Stáhnout Unturned Hacks: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Unturned Hacks",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Stáhnout Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Stáhnout Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Unturned Hacks",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned mod menu | In-Game Toggles",
					description: "Unturned mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned mod menu",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned mod menu.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned mod menu",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned mod menu",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Unturned hacky | Buyer Checklist",
					description: "Nejlepší Unturned hacky: what to compare before buying Unturned hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Unturned hacky",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Nejlepší Unturned hacky.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Nejlepší Unturned hacky",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Unturned hacky",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. what to compare before buying Unturned hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned aimbot hack | Soft Aim Assist",
					description: "Unturned aimbot hack: undetected Aimbot hack assist for Unturned. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned aimbot hack",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned aimbot hack.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned aimbot hack",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned aimbot hack",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. undetected Aimbot hack assist for Unturned.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP hack | Boxes & Loot",
					description: "Unturned ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned ESP hack",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned ESP hack.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP hack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP hack",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Koupit Unturned Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@unturnedhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Unturned Hacks",
					description: "Zásady ochrany soukromí for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Zásady ochrany soukromí for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com pro podporu a právní dotazy.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Unturned Hacks",
					description: "Zásady vrácení peněz for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Zásady vrácení peněz for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com pro podporu a právní dotazy.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Unturned Hacks",
					description: "Podmínky použití for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Podmínky použití for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks spojuje ESP wallhack, radar hack a unturned aimbot jako undetected balíček pro Unturned na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com pro podporu a právní dotazy.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Unturned undetected",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Unturned pe PC Windows — mentenanță BattlEye anti-cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Unturned PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Unturned Hacks este activ pentru Unturned pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță BattlEye anti-cheat suportată",
					antiCheatShort: "BattlEye anti-cheat suportat",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Unturned Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Unturned undetected pentru Unturned pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye anti-cheat. Livrare digitală",
					h1: "Unturned Hacks — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Unturned pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye anti-cheat.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Galerie Unturned Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Unturned Hacks în 2026",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "ESP Unturned | Player Boxes & Wallhack",
					description: "ESP Unturned: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. ESP Unturned.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "ESP Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "ESP Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Aimbot Unturned | Soft Aim Controls",
					description: "Aimbot Unturned: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Aimbot Unturned.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Aimbot Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Funcții.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Prețuri.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Instalare.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | BattlEye Maintenance Log",
					description: "Actualizări: BattlEye patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Actualizări.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. BattlEye patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Suport.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: undetected maintenance after BattlEye anti-cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Cheats undetected.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Unturned | ESP Visibility",
					description: "Wallhack Unturned: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Wallhack Unturned.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Wallhack Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Wallhack Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Radar hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Unturned hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Bypass BattlEye.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. how BattlEye updates are handled for Unturned hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Unturned 2026 | Buyer Guide",
					description: "Cheats Unturned 2026: 2026 Unturned hacks checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Unturned 2026",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Cheats Unturned 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Cheats Unturned 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Cheats Unturned 2026",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. 2026 Unturned hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Unturned | ESP Aimbot Guide",
					description: "Cheats Unturned: the Unturned hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Cheats Unturned.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Unturned",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. the Unturned hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Unturned Hacks | Instant Access",
					description: "Descărcare Unturned Hacks: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Unturned Hacks",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Descărcare Unturned Hacks.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Descărcare Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Unturned Hacks",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Unturned | In-Game Toggles",
					description: "Meniu mod Unturned: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Meniu mod Unturned.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Meniu mod Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Unturned | Smooth Aim Settings",
					description: "Soft aim Unturned: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Soft aim Unturned.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Soft aim Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Unturned | Buyer Checklist",
					description: "Cele mai bune cheats Unturned: what to compare before buying Unturned hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Cele mai bune cheats Unturned.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Cele mai bune cheats Unturned",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. what to compare before buying Unturned hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Unturned | Soft Aim Assist",
					description: "Hack aimbot Unturned: undetected Aimbot hack assist for Unturned. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Hack aimbot Unturned.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Unturned",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. undetected Aimbot hack assist for Unturned.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Unturned | Boxes & Loot",
					description: "Hack ESP Unturned: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Hack ESP Unturned.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Unturned",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Hack ESP Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Unturned | What It Means",
					description: "Unlock all Unturned: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Unturned",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Unlock all Unturned.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unlock all Unturned",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Cumpără Unturned Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Unturned",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@unturnedhacks.com pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Unturned Hacks",
					description: "Politica de confidențialitate for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Politica de confidențialitate for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com pentru suport și legal.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Unturned Hacks",
					description: "Politica de rambursare for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Politica de rambursare for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com pentru suport și legal.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Unturned Hacks",
					description: "Termeni de utilizare for Unturned Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Termeni de utilizare for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks combină ESP wallhack, radar hack și unturned aimbot undetected pentru Unturned pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com pentru suport și legal.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Unturned hacks",
					accentShort: "Unturned Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för Unturned på Windows PC — BattlEye anti-cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Unturned PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Unturned Hacks-paketet är live för Unturned på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-underhåll stöds",
					antiCheatShort: "BattlEye anti-cheat stöd",
				},
				product: {
					title: "Unturned Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Unturned",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Unturned Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Unturned — checkout via Zadeyo.",
				},
				images: {
					hero: "Unturned Hacks hero — ESP and aimbot overlay in Unturned",
					espWallhack: "Wallhack outlines showing players and zombies through walls",
					aimbotCombat: "Soft aim assist overlay during an Unturned session",
					squadFight: "Unturned Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Unturned session",
					headerArt: "Aimbot view and bone priority controls for Unturned",
					cheatsPackage: "2D radar threat overlay for Unturned",
					rebootFight: "Aimbot assist during a Unturned firefight",
					battleRoyale: "Unturned Hacks in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and safezones in Unturned",
				},
			},
			pages: {
				home: {
					title: "Unturned Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Unturned hacks för Unturned på PC. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat-underhåll. Omedelbar digital leverans.",
					h1: "Unturned Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Unturned på Windows PC: ESP wallhack, radar, Aimbot med BattlEye anti-cheat-underhåll.",
					imageAlt: "Unturned ESP player tags hack",
					galleryTitle: "Unturned Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"unturned-esp": {
					title: "Unturned ESP | Player Boxes & Wallhack",
					description: "Unturned ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned ESP",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned ESP.",
					imageAlt: "Unturned ESP player boxes and distance readouts in a session",
					galleryTitle: "Unturned ESP",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned ESP",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"unturned-aimbot": {
					title: "Unturned Aimbot | Soft Aim Controls",
					description: "Unturned Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Aimbot",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Aimbot.",
					imageAlt: "Unturned aimbot and soft aim controls on Windows PC",
					galleryTitle: "Unturned Aimbot",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Aimbot",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Funktioner.",
					imageAlt: "Unturned Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Priser.",
					imageAlt: "Unturned Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Installation.",
					imageAlt: "Unturned Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | BattlEye Maintenance Log",
					description: "Uppdateringar: BattlEye patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Uppdateringar.",
					imageAlt: "Unturned Hacks live status after BattlEye and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. BattlEye patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. FAQ.",
					imageAlt: "Unturned Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Support.",
					imageAlt: "Unturned Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected maintenance after BattlEye anti-cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Undetected cheats.",
					imageAlt: "Unturned Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Unturned Wallhack | ESP Visibility",
					description: "Unturned Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Wallhack",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Wallhack.",
					imageAlt: "Unturned wallhack visibility through walls in a session",
					galleryTitle: "Unturned Wallhack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned Wallhack",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Radar Hack.",
					imageAlt: "Unturned 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Unturned hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. BattlEye Bypass.",
					imageAlt: "Unturned Hacks maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. how BattlEye updates are handled for Unturned hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Unturned Hacks 2026 | Buyer Guide",
					description: "Unturned Hacks 2026: 2026 Unturned hacks checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Hacks 2026",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Hacks 2026.",
					imageAlt: "Unturned Hacks product overview for Unturned",
					galleryTitle: "Unturned Hacks 2026",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-hacks/",
					sections: [
						{
							h2: "Unturned Hacks 2026",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. 2026 Unturned hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Unturned Hacks | ESP Aimbot Guide",
					description: "Unturned Hacks: the Unturned hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Hacks",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Hacks.",
					imageAlt: "Unturned Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Unturned Hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Hacks",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. the Unturned hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Unturned Cheat Download | Instant Access",
					description: "Unturned Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Cheat Download",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Cheat Download.",
					imageAlt: "Unturned Hacks download and install delivery flow",
					galleryTitle: "Unturned Cheat Download",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Unturned Cheat Download",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Unturned Mod-meny | In-Game Toggles",
					description: "Unturned Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Mod-meny",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Mod-meny.",
					imageAlt: "Unturned Hacks in-game menu controls",
					galleryTitle: "Unturned Mod-meny",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Mod-meny",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Unturned Soft Aim | Smooth Aim Settings",
					description: "Unturned Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Soft Aim",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Soft Aim.",
					imageAlt: "Unturned soft aim FOV and smoothness settings",
					galleryTitle: "Unturned Soft Aim",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Soft Aim",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Unturned Hacks | Buyer Checklist",
					description: "Bästa Unturned Hacks: what to compare before buying Unturned hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Unturned Hacks",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Bästa Unturned Hacks.",
					imageAlt: "Unturned Hacks overview for Unturned on PC",
					galleryTitle: "Bästa Unturned Hacks",
					heroImage: "/images/unturned-hacks-esp.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Unturned Hacks",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. what to compare before buying Unturned hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Unturned Aimbot Hack | Soft Aim Assist",
					description: "Unturned Aimbot Hack: undetected Aimbot hack assist for Unturned. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Aimbot Hack",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Aimbot Hack.",
					imageAlt: "Unturned aimbot hack controls and bone priority",
					galleryTitle: "Unturned Aimbot Hack",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-aimbot/",
					sections: [
						{
							h2: "Unturned Aimbot Hack",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. undetected Aimbot hack assist for Unturned.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Unturned ESP Hack | Boxes & Loot",
					description: "Unturned ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned ESP Hack",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned ESP Hack.",
					imageAlt: "Unturned ESP hack boxes and loot markers",
					galleryTitle: "Unturned ESP Hack",
					heroImage: "/images/unturned-hacks-wallhack.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/unturned-esp/",
					sections: [
						{
							h2: "Unturned ESP Hack",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unturned Unlock All | What It Means",
					description: "Unturned Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Unturned Unlock All",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Unturned Unlock All.",
					imageAlt: "Unturned Hacks license features overview",
					galleryTitle: "Unturned Unlock All",
					heroImage: "/images/unturned-hacks-radar.webp",
					ctaPrimary: "Köp Unturned Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unturned Unlock All",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@unturnedhacks.com för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Unturned Hacks",
					description: "Integritetspolicy for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Integritetspolicy for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@unturnedhacks.com för support och juridik.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Unturned Hacks",
					description: "Återbetalningspolicy for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Återbetalningspolicy for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-session.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@unturnedhacks.com för support och juridik.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Unturned Hacks",
					description: "Användarvillkor for Unturned Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Användarvillkor for unturnedhacks.com and Unturned licenses.",
					imageAlt: "unturned hacks",
					galleryTitle: "unturned hacks",
					heroImage: "/images/unturned-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Unturned Hacks kombinerar ESP wallhack, radar hack och unturned aimbot som undetected paket för Unturned på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@unturnedhacks.com för support och juridik.",
								"Email: support@unturnedhacks.com",
							],
						},
					],
				},
			},
		},
	};
