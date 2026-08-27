import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'unturned-esp'
	| 'unturned-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'battleye'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'unturned-esp': '/unturned-esp/',
	'unturned-aimbot': '/unturned-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-unturned-hacks/',
	wallhack: '/unturned-wallhack/',
	radar: '/unturned-radar-hack/',
	'battleye': '/battleye-bypass/',
	'cheats-2026': '/unturned-hacks-2026/',
	hacks: '/unturned-hacks/',
	'cheat-download': '/unturned-hack-download/',
	'mod-menu': '/unturned-mod-menu/',
	'soft-aim': '/unturned-soft-aim/',
	'best-cheats': '/best-unturned-hacks/',
	'aimbot-hack': '/unturned-aimbot-hack/',
	'esp-hack': '/unturned-esp-hack/',
	'unlock-all': '/unturned-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'unturned-esp': {
		en: 'unturned-esp',
		es: 'trucos-unturned-esp',
		fr: 'triche-unturned-esp',
		de: 'unturned-esp-wallhack',
		pt: 'cheats-unturned-esp',
		it: 'trucchi-unturned-esp',
		nl: 'unturned-esp-wallhack',
		pl: 'cheaty-unturned-esp',
		ru: 'unturned-esp-chity',
		tr: 'unturned-esp-hile',
		ar: 'unturned-esp-wallhack',
		ja: 'unturned-esp-wallhack',
		ko: 'unturned-esp-wallhack',
		zh: 'unturned-esp-wallhack',
		hi: 'unturned-esp-wallhack',
		id: 'unturned-esp-wallhack',
		th: 'unturned-esp-wallhack',
		vi: 'unturned-esp-wallhack',
		uk: 'unturned-esp-chity',
		cs: 'unturned-esp-wallhack',
		ro: 'unturned-esp-wallhack',
		sv: 'unturned-esp-wallhack',
	},
	'unturned-aimbot': {
		en: 'unturned-aimbot',
		es: 'trucos-unturned-aimbot',
		fr: 'triche-unturned-aimbot',
		de: 'unturned-aimbot',
		pt: 'cheats-unturned-aimbot',
		it: 'trucchi-unturned-aimbot',
		nl: 'unturned-aimbot',
		pl: 'cheaty-unturned-aimbot',
		ru: 'unturned-aimbot-chity',
		tr: 'unturned-aimbot-hile',
		ar: 'unturned-aimbot',
		ja: 'unturned-aimbot',
		ko: 'unturned-aimbot',
		zh: 'unturned-aimbot',
		hi: 'unturned-aimbot',
		id: 'unturned-aimbot',
		th: 'unturned-aimbot',
		vi: 'unturned-aimbot',
		uk: 'unturned-aimbot-chity',
		cs: 'unturned-aimbot',
		ro: 'unturned-aimbot',
		sv: 'unturned-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-unturned',
		fr: 'fonctionnalites-triche-unturned',
		de: 'escape-from-unturned-hacks-funktionen',
		pt: 'recursos-cheats-unturned',
		it: 'funzioni-trucchi-unturned',
		nl: 'escape-from-unturned-hacks-functies',
		pl: 'funkcje-cheatow-unturned',
		ru: 'funkcii-chitov-unturned',
		tr: 'unturned-hile-ozellikleri',
		ar: 'escape-from-unturned-hacks-features',
		ja: 'escape-from-unturned-hacks-features',
		ko: 'escape-from-unturned-hacks-features',
		zh: 'escape-from-unturned-hacks-features',
		hi: 'escape-from-unturned-hacks-features',
		id: 'escape-from-unturned-hacks-features',
		th: 'escape-from-unturned-hacks-features',
		vi: 'escape-from-unturned-hacks-features',
		uk: 'funkcii-chitiv-unturned',
		cs: 'escape-from-unturned-hacks-funkce',
		ro: 'functii-cheats-unturned',
		sv: 'escape-from-unturned-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-unturned',
		fr: 'prix-triche-unturned',
		de: 'escape-from-unturned-hacks-preise',
		pt: 'precos-cheats-unturned',
		it: 'prezzi-trucchi-unturned',
		nl: 'escape-from-unturned-hacks-prijzen',
		pl: 'ceny-cheatow-unturned',
		ru: 'ceny-chitov-unturned',
		tr: 'unturned-hile-fiyatlari',
		ar: 'escape-from-unturned-hacks-pricing',
		ja: 'escape-from-unturned-hacks-pricing',
		ko: 'escape-from-unturned-hacks-pricing',
		zh: 'escape-from-unturned-hacks-pricing',
		hi: 'escape-from-unturned-hacks-pricing',
		id: 'escape-from-unturned-hacks-pricing',
		th: 'escape-from-unturned-hacks-pricing',
		vi: 'escape-from-unturned-hacks-pricing',
		uk: 'ciny-chitiv-unturned',
		cs: 'escape-from-unturned-hacks-ceny',
		ro: 'preturi-cheats-unturned',
		sv: 'escape-from-unturned-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-unturned',
		fr: 'installation-triche-unturned',
		de: 'escape-from-unturned-hacks-installation',
		pt: 'instalacao-cheats-unturned',
		it: 'installazione-trucchi-unturned',
		nl: 'escape-from-unturned-hacks-installatie',
		pl: 'instalacja-cheatow-unturned',
		ru: 'ustanovka-chitov-unturned',
		tr: 'unturned-hile-kurulum',
		ar: 'escape-from-unturned-hacks-setup',
		ja: 'escape-from-unturned-hacks-setup',
		ko: 'escape-from-unturned-hacks-setup',
		zh: 'escape-from-unturned-hacks-setup',
		hi: 'escape-from-unturned-hacks-setup',
		id: 'escape-from-unturned-hacks-setup',
		th: 'escape-from-unturned-hacks-setup',
		vi: 'escape-from-unturned-hacks-setup',
		uk: 'vstanovka-chitiv-unturned',
		cs: 'escape-from-unturned-hacks-instalace',
		ro: 'instalare-cheats-unturned',
		sv: 'escape-from-unturned-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-unturned',
		fr: 'mises-a-jour-triche-unturned',
		de: 'escape-from-unturned-hacks-updates',
		pt: 'atualizacoes-cheats-unturned',
		it: 'aggiornamenti-trucchi-unturned',
		nl: 'escape-from-unturned-hacks-updates',
		pl: 'aktualizacje-cheatow-unturned',
		ru: 'obnovleniya-chitov-unturned',
		tr: 'unturned-hile-guncellemeleri',
		ar: 'escape-from-unturned-hacks-updates',
		ja: 'escape-from-unturned-hacks-updates',
		ko: 'escape-from-unturned-hacks-updates',
		zh: 'escape-from-unturned-hacks-updates',
		hi: 'escape-from-unturned-hacks-updates',
		id: 'escape-from-unturned-hacks-updates',
		th: 'escape-from-unturned-hacks-updates',
		vi: 'escape-from-unturned-hacks-updates',
		uk: 'onovlennya-chitiv-unturned',
		cs: 'escape-from-unturned-hacks-aktualizace',
		ro: 'actualizari-cheats-unturned',
		sv: 'escape-from-unturned-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-unturned',
		fr: 'faq-triche-unturned',
		de: 'escape-from-unturned-hacks-faq',
		pt: 'faq-cheats-unturned',
		it: 'faq-trucchi-unturned',
		nl: 'escape-from-unturned-hacks-faq',
		pl: 'faq-cheatow-unturned',
		ru: 'faq-chitov-unturned',
		tr: 'unturned-hile-sss',
		ar: 'escape-from-unturned-hacks-faq',
		ja: 'escape-from-unturned-hacks-faq',
		ko: 'escape-from-unturned-hacks-faq',
		zh: 'escape-from-unturned-hacks-faq',
		hi: 'escape-from-unturned-hacks-faq',
		id: 'escape-from-unturned-hacks-faq',
		th: 'escape-from-unturned-hacks-faq',
		vi: 'escape-from-unturned-hacks-faq',
		uk: 'faq-chitiv-unturned',
		cs: 'escape-from-unturned-hacks-faq',
		ro: 'faq-cheats-unturned',
		sv: 'escape-from-unturned-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-unturned',
		fr: 'support-triche-unturned',
		de: 'escape-from-unturned-hacks-support',
		pt: 'suporte-cheats-unturned',
		it: 'supporto-trucchi-unturned',
		nl: 'escape-from-unturned-hacks-support',
		pl: 'wsparcie-cheatow-unturned',
		ru: 'podderzhka-chitov-unturned',
		tr: 'unturned-hile-destek',
		ar: 'escape-from-unturned-hacks-support',
		ja: 'escape-from-unturned-hacks-support',
		ko: 'escape-from-unturned-hacks-support',
		zh: 'escape-from-unturned-hacks-support',
		hi: 'escape-from-unturned-hacks-support',
		id: 'escape-from-unturned-hacks-support',
		th: 'escape-from-unturned-hacks-support',
		vi: 'escape-from-unturned-hacks-support',
		uk: 'pidtrymka-chitiv-unturned',
		cs: 'escape-from-unturned-hacks-podpora',
		ro: 'suport-cheats-unturned',
		sv: 'escape-from-unturned-hacks-support',
	},
	undetected: {
		en: 'undetected-unturned-hacks',
		es: 'trucos-unturned-indetectables',
		fr: 'triche-unturned-indetectable',
		de: 'unentdeckte-escape-from-unturned-hacks',
		pt: 'cheats-unturned-indetectaveis',
		it: 'trucchi-unturned-indetectabili',
		nl: 'undetected-unturned-hacks',
		pl: 'niewykrywalne-cheats-unturned',
		ru: 'nedecektiruemye-chity-unturned',
		tr: 'tespit-edilemeyen-unturned-hileleri',
		ar: 'undetected-unturned-hacks',
		ja: 'undetected-unturned-hacks',
		ko: 'undetected-unturned-hacks',
		zh: 'undetected-unturned-hacks',
		hi: 'undetected-unturned-hacks',
		id: 'undetected-unturned-hacks',
		th: 'undetected-unturned-hacks',
		vi: 'undetected-unturned-hacks',
		uk: 'nedecektovani-chity-unturned',
		cs: 'undetected-unturned-hacks',
		ro: 'cheats-unturned-nedetectabile',
		sv: 'undetected-unturned-hacks',
	},
	wallhack: {
		en: 'unturned-wallhack',
		es: 'wallhack-trucos-unturned',
		fr: 'wallhack-triche-unturned',
		de: 'unturned-wallhack',
		pt: 'wallhack-cheats-unturned',
		it: 'wallhack-trucchi-unturned',
		nl: 'unturned-wallhack',
		pl: 'wallhack-cheatow-unturned',
		ru: 'wallhack-chity-unturned',
		tr: 'unturned-wallhack-hile',
		ar: 'unturned-wallhack',
		ja: 'unturned-wallhack',
		ko: 'unturned-wallhack',
		zh: 'unturned-wallhack',
		hi: 'unturned-wallhack',
		id: 'unturned-wallhack',
		th: 'unturned-wallhack',
		vi: 'unturned-wallhack',
		uk: 'wallhack-chity-unturned',
		cs: 'unturned-wallhack',
		ro: 'wallhack-cheats-unturned',
		sv: 'unturned-wallhack',
	},
	radar: {
		en: 'unturned-radar-hack',
		es: 'radar-hack-trucos-unturned',
		fr: 'radar-hack-triche-unturned',
		de: 'unturned-radar-hack',
		pt: 'radar-hack-cheats-unturned',
		it: 'radar-hack-trucchi-unturned',
		nl: 'unturned-radar-hack',
		pl: 'radar-hack-cheatow-unturned',
		ru: 'radar-hack-chity-unturned',
		tr: 'unturned-radar-hack',
		ar: 'unturned-radar-hack',
		ja: 'unturned-radar-hack',
		ko: 'unturned-radar-hack',
		zh: 'unturned-radar-hack',
		hi: 'unturned-radar-hack',
		id: 'unturned-radar-hack',
		th: 'unturned-radar-hack',
		vi: 'unturned-radar-hack',
		uk: 'radar-hack-chity-unturned',
		cs: 'unturned-radar-hack',
		ro: 'radar-hack-cheats-unturned',
		sv: 'unturned-radar-hack',
	},
	'battleye': {
		en: 'battleye-bypass',
		es: 'battleye-bypass-trucos',
		fr: 'battleye-bypass-triche',
		de: 'battleye-bypass',
		pt: 'battleye-bypass-cheats',
		it: 'battleye-bypass-trucchi',
		nl: 'battleye-bypass',
		pl: 'battleye-bypass-cheatow',
		ru: 'battleye-bypass-chity',
		tr: 'battleye-bypass',
		ar: 'battleye-bypass',
		ja: 'battleye-bypass',
		ko: 'battleye-bypass',
		zh: 'battleye-bypass',
		hi: 'battleye-bypass',
		id: 'battleye-bypass',
		th: 'battleye-bypass',
		vi: 'battleye-bypass',
		uk: 'battleye-bypass-chity',
		cs: 'battleye-bypass',
		ro: 'battleye-bypass-cheats',
		sv: 'battleye-bypass',
	},
	'cheats-2026': {
		en: 'unturned-hacks-2026',
		es: 'trucos-unturned-2026',
		fr: 'triche-unturned-2026',
		de: 'unturned-hacks-2026',
		pt: 'cheats-unturned-2026',
		it: 'trucchi-unturned-2026',
		nl: 'unturned-hacks-2026',
		pl: 'cheaty-unturned-2026',
		ru: 'chity-unturned-2026',
		tr: 'unturned-hileleri-2026',
		ar: 'unturned-hacks-2026',
		ja: 'unturned-hacks-2026',
		ko: 'unturned-hacks-2026',
		zh: 'unturned-hacks-2026',
		hi: 'unturned-hacks-2026',
		id: 'unturned-hacks-2026',
		th: 'unturned-hacks-2026',
		vi: 'unturned-hacks-2026',
		uk: 'chity-unturned-2026',
		cs: 'unturned-hacks-2026',
		ro: 'cheats-unturned-2026',
		sv: 'unturned-hacks-2026',
	},
	hacks: {
		en: 'unturned-hacks',
		es: 'hacks-trucos-unturned',
		fr: 'hacks-triche-unturned',
		de: 'unturned-hacks',
		pt: 'hacks-cheats-unturned',
		it: 'hacks-trucchi-unturned',
		nl: 'unturned-hacks',
		pl: 'hacks-cheatow-unturned',
		ru: 'haksy-chity-unturned',
		tr: 'unturned-hile-hacks',
		ar: 'unturned-hacks',
		ja: 'unturned-hacks',
		ko: 'unturned-hacks',
		zh: 'unturned-hacks',
		hi: 'unturned-hacks',
		id: 'unturned-hacks',
		th: 'unturned-hacks',
		vi: 'unturned-hacks',
		uk: 'haksy-chity-unturned',
		cs: 'unturned-hacks',
		ro: 'hacks-cheats-unturned',
		sv: 'unturned-hacks',
	},
	'cheat-download': {
		en: 'unturned-hack-download',
		es: 'descarga-trucos-unturned',
		fr: 'telechargement-triche-unturned',
		de: 'unturned-hack-download',
		pt: 'download-cheats-unturned',
		it: 'download-trucchi-unturned',
		nl: 'unturned-hack-download',
		pl: 'pobieranie-cheatow-unturned',
		ru: 'skachat-chity-unturned',
		tr: 'unturned-hile-indir',
		ar: 'unturned-hack-download',
		ja: 'unturned-hack-download',
		ko: 'unturned-hack-download',
		zh: 'unturned-hack-download',
		hi: 'unturned-hack-download',
		id: 'unturned-hack-download',
		th: 'unturned-hack-download',
		vi: 'unturned-hack-download',
		uk: 'zavantazhennya-chitiv-unturned',
		cs: 'unturned-hack-download',
		ro: 'descarcare-cheats-unturned',
		sv: 'unturned-hack-download',
	},
	'mod-menu': {
		en: 'unturned-mod-menu',
		es: 'menu-mod-trucos-unturned',
		fr: 'menu-mod-triche-unturned',
		de: 'unturned-mod-menu',
		pt: 'menu-mod-cheats-unturned',
		it: 'menu-mod-trucchi-unturned',
		nl: 'unturned-mod-menu',
		pl: 'menu-mod-cheatow-unturned',
		ru: 'mod-menu-chity-unturned',
		tr: 'unturned-mod-menu',
		ar: 'unturned-mod-menu',
		ja: 'unturned-mod-menu',
		ko: 'unturned-mod-menu',
		zh: 'unturned-mod-menu',
		hi: 'unturned-mod-menu',
		id: 'unturned-mod-menu',
		th: 'unturned-mod-menu',
		vi: 'unturned-mod-menu',
		uk: 'mod-menu-chity-unturned',
		cs: 'unturned-mod-menu',
		ro: 'meniu-mod-cheats-unturned',
		sv: 'unturned-mod-menu',
	},
	'soft-aim': {
		en: 'unturned-soft-aim',
		es: 'soft-aim-trucos-unturned',
		fr: 'soft-aim-triche-unturned',
		de: 'unturned-soft-aim',
		pt: 'soft-aim-cheats-unturned',
		it: 'soft-aim-trucchi-unturned',
		nl: 'unturned-soft-aim',
		pl: 'soft-aim-cheatow-unturned',
		ru: 'soft-aim-chity-unturned',
		tr: 'unturned-soft-aim',
		ar: 'unturned-soft-aim',
		ja: 'unturned-soft-aim',
		ko: 'unturned-soft-aim',
		zh: 'unturned-soft-aim',
		hi: 'unturned-soft-aim',
		id: 'unturned-soft-aim',
		th: 'unturned-soft-aim',
		vi: 'unturned-soft-aim',
		uk: 'soft-aim-chity-unturned',
		cs: 'unturned-soft-aim',
		ro: 'soft-aim-cheats-unturned',
		sv: 'unturned-soft-aim',
	},
	'best-cheats': {
		en: 'best-unturned-hacks',
		es: 'mejores-trucos-unturned',
		fr: 'meilleures-triches-unturned',
		de: 'beste-escape-from-unturned-hacks',
		pt: 'melhores-cheats-unturned',
		it: 'migliori-trucchi-unturned',
		nl: 'beste-escape-from-unturned-hacks',
		pl: 'najlepsze-cheats-unturned',
		ru: 'luchshie-chity-unturned',
		tr: 'en-iyi-unturned-hileleri',
		ar: 'best-unturned-hacks',
		ja: 'best-unturned-hacks',
		ko: 'best-unturned-hacks',
		zh: 'best-unturned-hacks',
		hi: 'best-unturned-hacks',
		id: 'best-unturned-hacks',
		th: 'best-unturned-hacks',
		vi: 'best-unturned-hacks',
		uk: 'naykrashchi-chity-unturned',
		cs: 'nejlepsi-escape-from-unturned-hacks',
		ro: 'cele-mai-bune-cheats-unturned',
		sv: 'basta-escape-from-unturned-hacks',
	},
	'aimbot-hack': {
		en: 'unturned-aimbot-hack',
		es: 'aimbot-hack-trucos-unturned',
		fr: 'aimbot-hack-triche-unturned',
		de: 'unturned-aimbot-hack',
		pt: 'aimbot-hack-cheats-unturned',
		it: 'aimbot-hack-trucchi-unturned',
		nl: 'unturned-aimbot-hack',
		pl: 'aimbot-hack-cheatow-unturned',
		ru: 'aimbot-hack-chity-unturned',
		tr: 'unturned-aimbot-hack',
		ar: 'unturned-aimbot-hack',
		ja: 'unturned-aimbot-hack',
		ko: 'unturned-aimbot-hack',
		zh: 'unturned-aimbot-hack',
		hi: 'unturned-aimbot-hack',
		id: 'unturned-aimbot-hack',
		th: 'unturned-aimbot-hack',
		vi: 'unturned-aimbot-hack',
		uk: 'aimbot-hack-chity-unturned',
		cs: 'unturned-aimbot-hack',
		ro: 'aimbot-hack-cheats-unturned',
		sv: 'unturned-aimbot-hack',
	},
	'esp-hack': {
		en: 'unturned-esp-hack',
		es: 'esp-hack-trucos-unturned',
		fr: 'esp-hack-triche-unturned',
		de: 'unturned-esp-hack',
		pt: 'esp-hack-cheats-unturned',
		it: 'esp-hack-trucchi-unturned',
		nl: 'unturned-esp-hack',
		pl: 'esp-hack-cheatow-unturned',
		ru: 'esp-hack-chity-unturned',
		tr: 'unturned-esp-hack',
		ar: 'unturned-esp-hack',
		ja: 'unturned-esp-hack',
		ko: 'unturned-esp-hack',
		zh: 'unturned-esp-hack',
		hi: 'unturned-esp-hack',
		id: 'unturned-esp-hack',
		th: 'unturned-esp-hack',
		vi: 'unturned-esp-hack',
		uk: 'esp-hack-chity-unturned',
		cs: 'unturned-esp-hack',
		ro: 'esp-hack-cheats-unturned',
		sv: 'unturned-esp-hack',
	},
	'unlock-all': {
		en: 'unturned-unlock-all',
		es: 'unlock-all-trucos-unturned',
		fr: 'unlock-all-triche-unturned',
		de: 'unturned-unlock-all',
		pt: 'unlock-all-cheats-unturned',
		it: 'unlock-all-trucchi-unturned',
		nl: 'unturned-unlock-all',
		pl: 'unlock-all-cheatow-unturned',
		ru: 'unlock-all-chity-unturned',
		tr: 'unturned-unlock-all',
		ar: 'unturned-unlock-all',
		ja: 'unturned-unlock-all',
		ko: 'unturned-unlock-all',
		zh: 'unturned-unlock-all',
		hi: 'unturned-unlock-all',
		id: 'unturned-unlock-all',
		th: 'unturned-unlock-all',
		vi: 'unturned-unlock-all',
		uk: 'unlock-all-chity-unturned',
		cs: 'unturned-unlock-all',
		ro: 'unlock-all-cheats-unturned',
		sv: 'unturned-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('unturned-aimbot', locale), pageId: 'unturned-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('unturned-esp', locale), pageId: 'unturned-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
