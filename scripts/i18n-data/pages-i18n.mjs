import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Unturned Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Unturned indetectables para Unturned en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye anti-cheat. Entrega digital instantánea.', h1: 'Unturned Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Unturned en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye anti-cheat tras cada parche.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galería Unturned Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Unturned Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Unturned Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Unturned indétectables pour Unturned sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye anti-cheat. Livraison numérique instantanée.', h1: 'Unturned Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Unturned sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye anti-cheat après chaque patch.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galerie Unturned Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Unturned Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Unturned Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Unturned Hacks für Unturned auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Unturned Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Unturned: ESP Wallhack, Radar und Aimbot mit BattlEye anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Unturned Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Unturned Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Unturned Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Unturned indetectáveis para Unturned no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye anti-cheat. Entrega digital instantánea.', h1: 'Unturned Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Unturned no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye anti-cheat após cada patch.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galeria Unturned Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Unturned Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Unturned Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Unturned indetectable per Unturned su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye anti-cheat. Consegna digitale istantanea.', h1: 'Unturned Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Unturned su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye anti-cheat dopo ogni patch.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galleria Unturned Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Unturned Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Unturned Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Unturned hacks voor Unturned op PC. ESP wallhack, radar hack en Aimbot met BattlEye anti-cheat-onderhoud. Directe digitale levering.', h1: 'Unturned Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Unturned: ESP wallhack, radar en Aimbot met BattlEye anti-cheat-onderhoud na elke patch.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Unturned Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Unturned Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Unturned Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Unturned dla Unturned na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Unturned Hacks — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Unturned na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye anti-cheat po każdym patchu.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galeria Unturned Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Unturned Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Unturned Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Unturned для Unturned на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye anti-cheat. Мгновенная цифровая доставка.', h1: 'Unturned Hacks — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Unturned на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye anti-cheat после патчей.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Галерея Unturned Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Unturned Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Unturned Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Unturned için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı. Anında dijital teslimat.', h1: 'Unturned Hacks — Undetected ESP, Wallhack ve Aimbot', intro: 'Unturned Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye anti-cheat bakımı dahil.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Unturned Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Unturned Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Unturned Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Unturned undetected لـ Unturned على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye anti-cheat. تسليم رقمي فوري.', h1: 'Unturned Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Unturned على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye anti-cheat.', imageAlt: 'Unturned ESP player tags hack', gallery: 'معرض Unturned Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Unturned Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Unturned Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Unturned向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheatメンテナンス。即時デジタル配信。', h1: 'Unturned Hacks — Undetected ESP・Wallhack・Aimbot', intro: 'Unturned Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEye anti-cheatメンテナンス付き。', imageAlt: 'Unturned hacks hero ESP aimbot wallhack', gallery: 'Unturned Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にUnturned Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Unturned Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Unturned undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Unturned Hacks — Undetected ESP, Wallhack, Aimbot', intro: 'Unturned Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye anti-cheat 유지보수 포함.', imageAlt: 'Unturned hacks hero ESP aimbot wallhack', gallery: 'Unturned Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Unturned Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Unturned Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Unturned undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheat维护。即时数字交付。', h1: 'Unturned Hacks — Undetected ESP、Wallhack、Aimbot', intro: 'Unturned Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye anti-cheat维护。', imageAlt: 'Unturned hacks hero ESP aimbot wallhack', gallery: 'Unturned Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Unturned Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Unturned Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Unturned undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.', h1: 'Unturned Hacks — Undetected ESP, Wallhack और Aimbot', intro: 'Unturned Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.', imageAlt: 'Unturned hacks hero ESP aimbot wallhack', gallery: 'Unturned Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Unturned Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Unturned Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Unturned undetected untuk Unturned di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye anti-cheat. Pengiriman digital instan.', h1: 'Unturned Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Unturned di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye anti-cheat.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galeri Unturned Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Unturned Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Unturned Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Unturned undetected สำหรับ Unturned บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.', h1: 'Unturned Hacks — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Unturned บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance', imageAlt: 'Unturned ESP player tags hack', gallery: 'แกลเลอรี Unturned Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Unturned Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Unturned Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Unturned undetected cho Unturned trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Unturned Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Unturned trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye anti-cheat.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Thư viện Unturned Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Unturned Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Unturned Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Unturned для Unturned на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye anti-cheat. Мгновенная цифровая доставка.', h1: 'Unturned Hacks — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Unturned на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye anti-cheat.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Галерея Unturned Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Unturned Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Unturned Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Unturned hacky pro Unturned na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye anti-cheat. Okamžité digitální doručení.', h1: 'Unturned Hacks — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Unturned na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye anti-cheat.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galerie Unturned Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Unturned Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Unturned Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Unturned undetected pentru Unturned pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye anti-cheat. Livrare digitală instantă.', h1: 'Unturned Hacks — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Unturned pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye anti-cheat.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Galerie Unturned Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Unturned Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Unturned Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Unturned hacks för Unturned på PC. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Unturned Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Unturned på Windows PC: ESP wallhack, radar, Aimbot med BattlEye anti-cheat-underhåll.', imageAlt: 'Unturned ESP player tags hack', gallery: 'Unturned Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Unturned Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'unturned-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'unturned-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'BattlEye Maintenance Log', focus: 'BattlEye patch status and rebuild notes', altKeyword: 'updates BattlEye maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and BattlEye questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'BattlEye Safe Status', focus: 'undetected maintenance after BattlEye anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	battleye: { suffix: 'Patch Maintenance', focus: 'how BattlEye updates are handled for Unturned hacks', altKeyword: 'BattlEye bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Unturned hacks checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Unturned hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Unturned hacks', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Unturned', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'unturned-esp': 'Cajas de jugador y wallhack',
		'unturned-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro BattlEye',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		battleye: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'unturned-esp': 'Boîtes joueur et wallhack',
		'unturned-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal BattlEye',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		battleye: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'unturned-esp': 'Spielerboxen & Wallhack',
		'unturned-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'BattlEye Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		battleye: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'unturned-esp': 'Caixas de jogador e wallhack',
		'unturned-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro BattlEye',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		battleye: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'unturned-esp': 'Box giocatore e wallhack',
		'unturned-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione BattlEye',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		battleye: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'unturned-esp': 'Боксы игроков и wallhack',
		'unturned-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал BattlEye',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		battleye: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Unturned Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Unturned Hacks screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'unturned-esp': { en: 'Unturned ESP', es: 'ESP Unturned', fr: 'ESP Unturned', de: 'Unturned ESP', pt: 'ESP Unturned', it: 'ESP Unturned', nl: 'Unturned ESP', pl: 'ESP Unturned', ru: 'ESP Unturned', tr: 'Unturned ESP', ar: 'ESP Unturned', ja: 'Unturned ESP', ko: 'Unturned ESP', zh: 'Unturned ESP', hi: 'Unturned ESP', id: 'ESP Unturned', th: 'Unturned ESP', vi: 'ESP Unturned', uk: 'ESP Unturned', cs: 'Unturned ESP', ro: 'ESP Unturned', sv: 'Unturned ESP' },
	'unturned-aimbot': { en: 'Unturned Aimbot', es: 'Aimbot Unturned', fr: 'Aimbot Unturned', de: 'Unturned Aimbot', pt: 'Aimbot Unturned', it: 'Aimbot Unturned', nl: 'Unturned Aimbot', pl: 'Aimbot Unturned', ru: 'Aimbot Unturned', tr: 'Unturned Aimbot', ar: 'Aimbot Unturned', ja: 'Unturned Aimbot', ko: 'Unturned Aimbot', zh: 'Unturned Aimbot', hi: 'Unturned Aimbot', id: 'Aimbot Unturned', th: 'Unturned Aimbot', vi: 'Aimbot Unturned', uk: 'Aimbot Unturned', cs: 'Unturned Aimbot', ro: 'Aimbot Unturned', sv: 'Unturned Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Unturned Wallhack', es: 'Wallhack Unturned', fr: 'Wallhack Unturned', de: 'Unturned Wallhack', pt: 'Wallhack Unturned', it: 'Wallhack Unturned', nl: 'Unturned Wallhack', pl: 'Wallhack Unturned', ru: 'Wallhack Unturned', tr: 'Unturned Wallhack', ar: 'Wallhack Unturned', ja: 'Unturned Wallhack', ko: 'Unturned Wallhack', zh: 'Unturned Wallhack', hi: 'Unturned Wallhack', id: 'Wallhack Unturned', th: 'Unturned Wallhack', vi: 'Wallhack Unturned', uk: 'Wallhack Unturned', cs: 'Unturned Wallhack', ro: 'Wallhack Unturned', sv: 'Unturned Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	battleye: { en: 'BattlEye Bypass', es: 'Bypass BattlEye', fr: 'Bypass BattlEye', de: 'BattlEye Bypass', pt: 'Bypass BattlEye', it: 'Bypass BattlEye', nl: 'BattlEye Bypass', pl: 'Bypass BattlEye', ru: 'Bypass BattlEye', tr: 'BattlEye bypass', ar: 'Bypass BattlEye', ja: 'BattlEye Bypass', ko: 'BattlEye Bypass', zh: 'BattlEye Bypass', hi: 'BattlEye Bypass', id: 'Bypass BattlEye', th: 'BattlEye Bypass', vi: 'Bypass BattlEye', uk: 'Bypass BattlEye', cs: 'BattlEye Bypass', ro: 'Bypass BattlEye', sv: 'BattlEye Bypass' },
	'cheats-2026': { en: 'Unturned Hacks 2026', es: 'Trucos Unturned 2026', fr: 'Triches Unturned 2026', de: 'Unturned Hacks 2026', pt: 'Cheats Unturned 2026', it: 'Cheat Unturned 2026', nl: 'Unturned Hacks 2026', pl: 'Cheaty Unturned 2026', ru: 'Читы Unturned 2026', tr: 'Unturned Hileleri 2026', ar: 'غش Unturned 2026', ja: 'Unturned Hacks 2026', ko: 'Unturned Hacks 2026', zh: 'Unturned作弊 2026', hi: 'Unturned Hacks 2026', id: 'Cheat Unturned 2026', th: 'Unturned Hacks 2026', vi: 'Cheat Unturned 2026', uk: 'Чіти Unturned 2026', cs: 'Unturned hacky 2026', ro: 'Cheats Unturned 2026', sv: 'Unturned Hacks 2026' },
	hacks: { en: 'Unturned Hacks', es: 'Trucos Unturned', fr: 'Triches Unturned', de: 'Unturned Hacks', pt: 'Cheats Unturned', it: 'Cheat Unturned', nl: 'Unturned Hacks', pl: 'Cheaty Unturned', ru: 'Читы Unturned', tr: 'Unturned Hileleri', ar: 'غش Unturned', ja: 'Unturned Hacks', ko: 'Unturned Hacks', zh: 'Unturned作弊', hi: 'Unturned Hacks', id: 'Cheat Unturned', th: 'Unturned Hacks', vi: 'Cheat Unturned', uk: 'Чіти Unturned', cs: 'Unturned hacky', ro: 'Cheats Unturned', sv: 'Unturned Hacks' },
	'cheat-download': { en: 'Unturned Cheat Download', es: 'Descarga Unturned Hacks', fr: 'Téléchargement Unturned Hacks', de: 'Unturned Cheat Download', pt: 'Download Unturned Hacks', it: 'Download Unturned Hacks', nl: 'Unturned Cheat Download', pl: 'Pobieranie Unturned Hacks', ru: 'Скачать Unturned Hacks', tr: 'Unturned Hile İndir', ar: 'تحميل Unturned Hacks', ja: 'Unturned Cheat Download', ko: 'Unturned Cheat Download', zh: 'Unturned作弊下载', hi: 'Unturned Cheat Download', id: 'Download Cheat Unturned', th: 'ดาวน์โหลด Unturned Hacks', vi: 'Tải Cheat Unturned', uk: 'Завантаження Unturned Hacks', cs: 'Stáhnout Unturned Hacks', ro: 'Descărcare Unturned Hacks', sv: 'Unturned Cheat Download' },
	'mod-menu': { en: 'Unturned Mod Menu', es: 'Menú mod Unturned', fr: 'Menu mod Unturned', de: 'Unturned Mod-Menü', pt: 'Menu mod Unturned', it: 'Mod menu Unturned', nl: 'Unturned Mod Menu', pl: 'Mod menu Unturned', ru: 'Мод-меню Unturned', tr: 'Unturned Mod Menü', ar: 'قائمة مود Unturned', ja: 'Unturned Mod Menu', ko: 'Unturned 모드 메뉴', zh: 'Unturned修改菜单', hi: 'Unturned Mod Menu', id: 'Menu mod Unturned', th: 'เมนูมอด Unturned', vi: 'Mod menu Unturned', uk: 'Мод-меню Unturned', cs: 'Unturned mod menu', ro: 'Meniu mod Unturned', sv: 'Unturned Mod-meny' },
	'soft-aim': { en: 'Unturned Soft Aim', es: 'Soft aim Unturned', fr: 'Soft aim Unturned', de: 'Unturned Soft Aim', pt: 'Soft aim Unturned', it: 'Soft aim Unturned', nl: 'Unturned Soft Aim', pl: 'Soft aim Unturned', ru: 'Soft aim Unturned', tr: 'Unturned Soft Aim', ar: 'Soft aim Unturned', ja: 'Unturned Soft Aim', ko: 'Unturned Soft Aim', zh: 'Unturned Soft Aim', hi: 'Unturned Soft Aim', id: 'Soft aim Unturned', th: 'Unturned Soft Aim', vi: 'Soft aim Unturned', uk: 'Soft aim Unturned', cs: 'Unturned Soft Aim', ro: 'Soft aim Unturned', sv: 'Unturned Soft Aim' },
	'best-cheats': { en: 'Best Unturned Hacks', es: 'Mejores trucos Unturned', fr: 'Meilleures triches Unturned', de: 'Beste Unturned Hacks', pt: 'Melhores cheats Unturned', it: 'Migliori cheat Unturned', nl: 'Beste Unturned Hacks', pl: 'Najlepsze cheaty Unturned', ru: 'Лучшие читы Unturned', tr: 'En İyi Unturned Hileleri', ar: 'أفضل غش Unturned', ja: '最強Unturnedチート', ko: '최고의 Unturned 치트', zh: '最佳Unturned作弊', hi: 'सर्वश्रेष्ठ Unturned Hacks', id: 'Cheat Unturned terbaik', th: 'Cheat Unturned ที่ดีที่สุด', vi: 'Cheat Unturned tốt nhất', uk: 'Найкращі чіти Unturned', cs: 'Nejlepší Unturned hacky', ro: 'Cele mai bune cheats Unturned', sv: 'Bästa Unturned Hacks' },
	'aimbot-hack': { en: 'Unturned Aimbot Hack', es: 'Hack aimbot Unturned', fr: 'Hack aimbot Unturned', de: 'Unturned Aimbot Hack', pt: 'Hack aimbot Unturned', it: 'Hack aimbot Unturned', nl: 'Unturned Aimbot Hack', pl: 'Hack aimbot Unturned', ru: 'Хак aimbot Unturned', tr: 'Unturned Aimbot Hilesi', ar: 'هاك Aimbot Unturned', ja: 'Unturned Aimbot Hack', ko: 'Unturned 에임봇 핵', zh: 'Unturned自瞄外挂', hi: 'Unturned Aimbot Hack', id: 'Hack aimbot Unturned', th: 'Hack Aimbot Unturned', vi: 'Hack aimbot Unturned', uk: 'Хак aimbot Unturned', cs: 'Unturned aimbot hack', ro: 'Hack aimbot Unturned', sv: 'Unturned Aimbot Hack' },
	'esp-hack': { en: 'Unturned ESP Hack', es: 'Hack ESP Unturned', fr: 'Hack ESP Unturned', de: 'Unturned ESP Hack', pt: 'Hack ESP Unturned', it: 'Hack ESP Unturned', nl: 'Unturned ESP Hack', pl: 'Hack ESP Unturned', ru: 'Хак ESP Unturned', tr: 'Unturned ESP Hilesi', ar: 'هاك ESP Unturned', ja: 'Unturned ESP Hack', ko: 'Unturned ESP 핵', zh: 'Unturned ESP外挂', hi: 'Unturned ESP Hack', id: 'Hack ESP Unturned', th: 'Hack ESP Unturned', vi: 'Hack ESP Unturned', uk: 'Хак ESP Unturned', cs: 'Unturned ESP hack', ro: 'Hack ESP Unturned', sv: 'Unturned ESP Hack' },
	'unlock-all': { en: 'Unturned Unlock All', es: 'Unlock all Unturned', fr: 'Unlock all Unturned', de: 'Unturned Unlock All', pt: 'Unlock all Unturned', it: 'Unlock all Unturned', nl: 'Unturned Unlock All', pl: 'Unlock all Unturned', ru: 'Unlock all Unturned', tr: 'Unturned Unlock All', ar: 'Unlock all Unturned', ja: 'Unturned Unlock All', ko: 'Unturned Unlock All', zh: 'Unturned Unlock All', hi: 'Unturned Unlock All', id: 'Unlock all Unturned', th: 'Unturned Unlock All', vi: 'Unlock all Unturned', uk: 'Unlock all Unturned', cs: 'Unturned Unlock All', ro: 'Unlock all Unturned', sv: 'Unturned Unlock All' },
};

const CTA2_HREF = {
	'unturned-esp': '/unturned-hacks/',
	'unturned-aimbot': '/unturned-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/unturned-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/unturned-hacks/',
	wallhack: '/unturned-esp/',
	radar: '/unturned-esp/',
	battleye: '/updates/',
	'cheats-2026': '/unturned-hacks/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/unturned-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/unturned-aimbot/',
	'esp-hack': '/unturned-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Unturned Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Unturned Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for unturnedhacks.com and Unturned licenses.`),
		imageAlt: 'unturned hacks',
		galleryTitle: 'unturned hacks',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on unturnedhacks.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@unturnedhacks.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
