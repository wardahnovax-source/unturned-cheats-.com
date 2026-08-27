import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'unturned hacks',
		title: 'unturned hacks gallery',
		subtitle: 'Simple unturned hacks visuals — ESP, wallhack, aimbot, and radar for Unturned on PC.',
		lead: 'Unturned Hacks helps you spot players, zombies, loot, and safezones with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'unturned hacks esp', copy: 'See players through walls with unturned hacks esp and wallhack overlays.' },
			{ title: 'unturned hacks radar', copy: 'Track nearby threats with unturned hacks radar before you push or safezone.' },
			{ title: 'unturned hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for Unturned sessions on Windows PC.' },
		],
		updatesLabel: 'unturned hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Unturned Hacks',
		title: 'Galería Unturned',
		subtitle: 'Visuales de Unturned con loadouts, peleas de escuadrón y combate session — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Unturned Hacks está pensado para el loop BR de Unturned: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al safezone.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Unturned', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Unturned Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Unturned Hacks',
		title: 'Galerie Unturned',
		subtitle: 'Visuels Unturned — loadouts, combats d\'escouade et session — avec ESP, radar et Aimbot.',
		lead: 'Unturned Hacks suit la boucle BR de Unturned : lire la carte, suivre les escouades, loot et survivre au safezone.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Unturned', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Unturned Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned Galerie',
		subtitle: 'Unturned-Bilder zu Loadouts, Squad-Kämpfen und session — mit ESP, Radar und Aimbot.',
		lead: 'Unturned Hacks passt zur Raid-Schleife von Unturned: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Unturned Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Unturned Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Unturned Hacks',
		title: 'Galeria Unturned',
		subtitle: 'Visuais de Unturned com loadouts, combates de esquadrão e session — com ESP, radar e Aimbot.',
		lead: 'Unturned Hacks segue o loop BR do Unturned: ler o mapa, rastrear esquadrões, lootar e sobreviver ao safezone.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Unturned', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Unturned Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Unturned Hacks',
		title: 'Galleria Unturned',
		subtitle: 'Immagini Unturned — loadout, scontri di squadra e session — con ESP, radar e Aimbot.',
		lead: 'Unturned Hacks è pensato per il loop BR di Unturned: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al safezone.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Unturned', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Unturned Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned galerij',
		subtitle: 'Unturned-beelden van loadouts, squadgevechten en session — met ESP, radar en Aimbot.',
		lead: 'Unturned Hacks volgt de session-loop van Unturned: kaart lezen, vijandelijke squads volgen, looten en de safezone overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Unturned Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Unturned Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Unturned Hacks',
		title: 'Galeria Unturned',
		subtitle: 'Grafiki Unturned — loadouty, walki drużynowe i session — z ESP, radar i Aimbot.',
		lead: 'Unturned Hacks pasuje do pętli BR Unturned: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj safezone.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Unturned', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Unturned Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Unturned Hacks',
		title: 'Галерея Unturned',
		subtitle: 'Визуалы Unturned — лоадауты, бои отрядов и session — с ESP, радаром и Aimbot.',
		lead: 'Unturned Hacks создан для рейд-циклу Unturned: читать карту, отслеживать вражеские отряды, лут и выживать в safezone.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Unturned', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Unturned Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned galerisi',
		subtitle: 'Loadout, takım savaşları ve session görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Unturned Hacks, Unturned BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve safezone\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Unturned Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Unturned Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Unturned Hacks',
		title: 'معرض Unturned',
		subtitle: 'صور Unturned — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'Unturned Hacks مبني لحلقة BR في Unturned: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في safezone.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Unturned', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Unturned Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのUnturnedビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Unturned HacksはUnturnedのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてsafezoneを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Unturnedエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Unturned Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Unturned 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Unturned Hacks는 Unturned BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, safezone 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Unturned 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Unturned Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned 图库',
		subtitle: 'Unturned 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Unturned Hacks 为 Unturned BR 循环设计：读图、追踪敌方小队、搜刮并在 safezone 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Unturned 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Unturned Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned गैलरी',
		subtitle: 'Loadout, squad fights और session visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Unturned Hacks Unturned BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और safezone survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Unturned Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Unturned Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Unturned Hacks',
		title: 'Galeri Unturned',
		subtitle: 'Visual Unturned — loadout, pertempuran squad, dan session — dengan ESP, radar, dan Aimbot.',
		lead: 'Unturned Hacks untuk loop BR Unturned: baca peta, lacak squad musuh, loot, dan selamat di safezone.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Unturned', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Unturned Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Unturned Hacks',
		title: 'แกลเลอรี Unturned',
		subtitle: 'ภาพ Unturned — loadout การต่อสู้ทีม และ session — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Unturned Hacks สำหรับลูป BR ของ Unturned: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด safezone',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Unturned', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Unturned Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Unturned Hacks',
		title: 'Thư viện Unturned',
		subtitle: 'Hình ảnh Unturned — loadout, chiến đấu squad và session — với ESP, radar và Aimbot.',
		lead: 'Unturned Hacks cho vòng BR Unturned: đọc bản đồ, theo dõi squad địch, loot và sống sót safezone.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Unturned', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Unturned Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Unturned Hacks',
		title: 'Галерея Unturned',
		subtitle: 'Візуали Unturned — loadout, бої загонів і session — з ESP, радаром і Aimbot.',
		lead: 'Unturned Hacks для рейд-циклу Unturned: читати карту, відстежувати ворожі загони, лут і виживати в safezone.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Unturned', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Unturned Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Unturned Hacks',
		title: 'Galerie Unturned',
		subtitle: 'Unturned vizuály — loadouty, squad souboje a session — s ESP, radarem a Aimbot.',
		lead: 'Unturned Hacks pro BR smyčku Unturned: číst mapu, sledovat nepřátelské squady, loot a přežít safezone.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Unturned', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Unturned Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Unturned Hacks',
		title: 'Galerie Unturned',
		subtitle: 'Vizualuri Unturned — loadout, lupte de squad și session — cu ESP, radar și Aimbot.',
		lead: 'Unturned Hacks pentru bucla BR Unturned: citește harta, urmărește squad-uri inamice, loot și supraviețuiește safezone.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Unturned', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Unturned Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Unturned Hacks',
		title: 'Unturned galleri',
		subtitle: 'Unturned-bilder — loadouts, squadstrider och session — med ESP, radar och Aimbot.',
		lead: 'Unturned Hacks för Unturned:s session-loop: läs kartan, spåra fiendesquads, loota och överlev safezone.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Unturned Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Unturned Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
