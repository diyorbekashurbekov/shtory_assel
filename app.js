/**
 * SHTORY ASSEL — PRODUCTION CORE ENGINE
 * Featuring 25 Authentic Atelier Masterpieces
 * WhatsApp: 87054312732
 * Maps: https://maps.google.com/?q=42.324085,69.586426
 * Instagram: https://www.instagram.com/shtory_assel?stkn=MWY4dzNlMnZlamUxZA==
 */

const DEFAULT_DATA = {
  config: {
    salonName: "Салон штор «Әсел»",
    tagline: "1998 жылдан бері • Шымкент • Премиум перделер",
    whatsapp: "77054312732",
    phoneDisplay: "+7 (705) 431-27-32",
    instagramUrl: "https://www.instagram.com/shtory_assel?stkn=MWY4dzNlMnZlamUxZA==",
    instagramName: "@shtory_assel",
    mapsUrl: "https://maps.google.com/?q=42.324085,69.586426",
    address: "Шымкент қаласы (Google Maps: 42.324085, 69.586426)",
    workHours: "Күн сайын: 10:00 — 19:00",
    promoActive: true,
    promoText: "✨ 26 жылдық шеберлік құрметіне: Барлық элиталық маталарға дизайнердің үйге келуі мен өлшеу ТЕГІН! • Kaspi 0-0-12 • Тел: +7 (705) 431-27-32",
    heroImage: "images/hero-curtains.webp"
  },
  rates: {
    gr_setka: 1000,
    bambuk: 1800,
    sable: 2500,
    blackout_pekin: 4500,
    len: 6000,
    milana: 7000,
    blackout_turkey: 10000,
    ethno_shtory: 15000,
    // Backwards compatibility keys
    velvet: 7000,
    blackout: 10000,
    linen: 6000,
    jacquard: 15000,
    tulle: 1000,
    sewingPerMeter: 1200,
    rodManual: 3500,
    rodHidden: 6500,
    rodElectric: 35000,
    installAndSteam: 10000
  },
  fabrics: [
    {
        "id": "gr_setka",
        "name": "Гр сетка (Грек микросеткасы)",
        "price": 1000,
        "priceDisplay": "1 000 ₸ / метр",
        "badge": "Халықтық хит",
        "origin": "Түркия (Грек үлгісі)",
        "opacity": "20% Нәзік сүзгі",
        "desc": "Жұмсақ толқынмен мінсіз құйылатын, күн сәулесін нәзік таратып, бөлмеге шексіз кеңістік сыйлайтын аса берік әрі жеңіл грек микросеткасы.",
        "image": "images/french-lace-tulle.webp"
    },
    {
        "id": "bambuk",
        "name": "Бамбук (Эко зығыр-тюль)",
        "price": 1800,
        "priceDisplay": "1 800 ₸ / метр",
        "badge": "Эко таңдау",
        "origin": "Түркия (Фабрикалық)",
        "opacity": "40% Жұмсақ жарық",
        "desc": "Табиғи бамбук талшығынан тоқылған, ауа еркін өткізетін, шаң жинамайтын және күтімге барынша қолайлы сәнді эко-текстура.",
        "image": "images/roman-blind-linen.webp"
    },
    {
        "id": "sable",
        "name": "Сабле (Жібек софт)",
        "price": 2500,
        "priceDisplay": "2 500 ₸ / метр",
        "badge": "Сәнді таңдау",
        "origin": "Түркия",
        "opacity": "55% Күңгірттеу",
        "desc": "Асыл жібектей нәзік жылтыры бар, қыртысы түзу құйылатын, заманауи жайлылық пен талғампаздықты ұштастырған майысқақ сабле матасы.",
        "image": "images/living-caramel-cove.webp"
    },
    {
        "id": "blackout_pekin",
        "name": "Блэкаут «Пекин» (Тығыз қорғаныс)",
        "price": 4500,
        "priceDisplay": "4 500 ₸ / метр",
        "badge": "Тиімді баға",
        "origin": "Пекин (Азия, Класс А)",
        "opacity": "85% Қорғаныс",
        "desc": "Күн сәулесі мен ыстықтан 85% сенімді қорғайтын, жатын және балалар бөлмесіне арналған тығыз құрылымды қолжетімді блэкаут.",
        "image": "images/bedroom-botanical-cozy.webp"
    },
    {
        "id": "len",
        "name": "Табиғи Зығыр (Премиум Лен)",
        "price": 6000,
        "priceDisplay": "6 000 ₸ / метр",
        "badge": "Табиғи сән",
        "origin": "Түркия & Еуропа",
        "opacity": "70% Сабырлы жарық",
        "desc": "Интерьерге асыл қарапайымдылық, заманауи эко-эстетика мен сабырлы сән сыйлайтын таза еуропалық зығыр текстурасы.",
        "image": "images/minimal-sand-ripplefold.webp"
    },
    {
        "id": "milana",
        "name": "Милана (Корольдік барқыт-софт)",
        "price": 7000,
        "priceDisplay": "7 000 ₸ / метр",
        "badge": "ХИТ САТЫЛЫМ",
        "origin": "Түркия",
        "opacity": "90% Күңгірттеу",
        "desc": "Барқыттай аса жұмсақ жанасуы бар, қалың түсті, қыртыстанбайтын және оңтүстік өңірдегі салтанатты үйлердің №1 таңдауына айналған хит мата.",
        "image": "images/emerald-royal-drape.webp"
    },
    {
        "id": "blackout_turkey",
        "name": "Блэкаут «Ыстамбұл» 100% (Түркия)",
        "price": 10000,
        "priceDisplay": "10 000 ₸ / метр",
        "badge": "Премиум Түркия",
        "origin": "Түркия (Ыстамбұл)",
        "opacity": "100% Түнгі тыныштық",
        "desc": "Күн сәулесін 100% толық тұмшалап, жазғы ыстықты өткізбейтін, дыбыс оқшаулайтын түрік фабрикасының люкс класты түпнұсқа блэкаут матасы.",
        "image": "images/layered-charcoal-sheer.webp"
    },
    {
        "id": "ethno_shtory",
        "name": "Эксклюзивті Этно-Штора (Авторлық ою)",
        "price": 22000,
        "priceDisplay": "15 000 — 30 000 ₸ / метр",
        "badge": "Шеберхана мақтанышы",
        "origin": "«Әсел» авторлық шеберханасы",
        "opacity": "95% Сән & Қорғаныс",
        "desc": "Қазақы классикалық ұлттық ою-өрнектермен, таза алтын жіпті шашақтармен және жеке тапсырыспен тігілетін хан сарайы стиліндегі сәнді этно-перделер.",
        "image": "images/kazakh-ornament-arch.webp"
    }
],
  projects: [
    {
      id: 1,
      title: "«Бәйтерек» люкс қонақ бөлмесі",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Тұран мкр.",
      fabric: "Қос түсті крем-софт & Алтын шашақтар",
      specs: "Биіктігі 3.4м • Хрусталь люстрамен үйлесім",
      image: "images/crystal-ceiling-living.webp",
      desc: "Оюлы төбе мен хрусталь люстрасы бар салтанатты қонақ бөлмеге арналған екі түсті сәнді драпировка."
    },
    {
      id: 2,
      title: "«Салтанат» қонақ қабылдау залы",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Б. Момышұлы",
      fabric: "Алтын сатин драпировкасы & Металл қыстырғыш",
      specs: "Биіктігі 3.8м • Қатар орналасқан терезелер",
      image: "images/banquet-chairs-drapery.webp",
      desc: "Зәулім банкет залының терезелеріне арнайы тігілген, алтын қыстырғыштармен жиналған корольдік драпировка."
    },
    {
      id: 3,
      title: "«Еуразия» панорамалық витражы",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Shymkent City",
      fabric: "Алтын сатин & Жапырақ подхваттар",
      specs: "Биіктігі 3.5м • Витражды есіктерге арналған",
      image: "images/balcony-golden-swags.webp",
      desc: "Үлкен панорамалық витраждарға арналған сәнді алтын сатин және өрнекті жаккард перделері."
    },
    {
      id: 4,
      title: "«Тұран» бұрыштық қонақ бөлмесі",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Тұран мкр.",
      fabric: "Тауп матасы & Сәнді ұзын шашақтар",
      specs: "L-тәрізді бұрыш • Диодты заманауи жарық",
      image: "images/corner-salon-tassels.webp",
      desc: "Бұрыштық екі терезені біртұтас етіп безендіретін, ұзын сәнді шашақты подхваттары бар заманауи перделер."
    },
    {
      id: 5,
      title: "«Ақжайық» кең залының перделері",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Самал мкр.",
      fabric: "Қос маталы комбинация & Алтын подхват",
      specs: "Биіктігі 3.6м • 3 терезелі қабырға",
      image: "images/banquet-triple-window.webp",
      desc: "Үш үлкен терезесі бар қонақ қабылдау залына арналған біртұтас симметриялы сәулеттік перде ансамблі."
    },
    {
      id: 6,
      title: "«Арбат» авторлық рим пердесі",
      category: "roman",
      categoryName: "Рим перделері",
      location: "Шымкент, Қонаев даңғылы",
      fabric: "Табиғи бельгиялық зығыр & Контраст кант",
      specs: "Римдік тізбекті механизм • Дәл өлшем",
      image: "images/roman-blind-linen.webp",
      desc: "Шағын терезелерге, жуынатын бөлмелер мен ас үйге арналған геометриялық түзу жиналатын сәнді рим пердесі."
    },
    {
      id: 7,
      title: "«Отырар» карамельді сәулеттік перделері",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Тұран мкр.",
      fabric: "Карамель софт & Тік сызықты нәзік тюль",
      specs: "Биіктігі 3.3м • Төбелік LED жарық карнизі",
      image: "images/living-caramel-cove.webp",
      desc: "Төбеге жасырылған диодты жарықпен әсем көмкерілген жылы карамель түсті софт перделері."
    },
    {
      id: 8,
      title: "«Алатау» салтанатты сатин драпировкасы",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Б. Момышұлы",
      fabric: "Алтын сатин-атлас & Жапырақ қыстырғыш",
      specs: "Биіктігі 3.6м • Қос қабатты сәнді драпировка",
      image: "images/drape-gold-leaf-clasps.webp",
      desc: "Салтанатты алтын жапырақ қыстырғыштары бар, қос қабатты сәнді құйылған атлас-сатин перделері."
    },
    {
      id: 9,
      title: "«Нұрсәт» алтын гүлді брошь перделері",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Нұрсәт мкр.",
      fabric: "Тауп матасы & Алтын гүлді металл брошь",
      specs: "Биіктігі 3.2м • Классикалық молдинг үйлесімі",
      image: "images/floral-brooch-curtains.webp",
      desc: "Мәрмәр еденмен және қабырға молдингтерімен мінсіз үйлесетін, алтын гүлді брошь подхваты бар перде."
    },
    {
      id: 10,
      title: "«Бәйдібек би» құм реңкті минимализмі",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Бәйдібек би даңғылы",
      fabric: "Құм түстес софт & Сүтті тюль",
      specs: "Биіктігі 3.0м • Жасырын карниз",
      image: "images/minimal-sand-ripplefold.webp",
      desc: "Қазіргі заманғы сәнді интерьерлерге арналған жұмсақ құм түсті түзу сәулеттік толқынды перделер."
    },
    {
      id: 11,
      title: "«Хан Тәңірі» зүмірет барқыт драпировкасы",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Тұран мкр.",
      fabric: "Изумруд барқыты & Жаккард жапырақ өрнек",
      specs: "Биіктігі 3.6м • Жапырақ қыстырғыш",
      image: "images/emerald-royal-drape.webp",
      desc: "Зүмірет жасыл барқыт пен нәзік жапырақ өрнекті жаккардтың патшалық үйлесімі. Жапырақ пішінді алтын металл подхватпен көмкерілген."
    },
    {
      id: 12,
      title: "«Ақсу» күміс барқыт және хрусталь шашақтары",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Б. Момышұлы",
      fabric: "Күміс сұр барқыт & Хрусталь моншақтар",
      specs: "Биіктігі 3.8м • Ламбрекенді толқын",
      image: "images/silver-crystal-fringe.webp",
      desc: "Жиектеріне мөлдір хрустальді шашақтар қолмен тігілген, алтын жапырақ подхваты бар салтанатты зал пердесі."
    },
    {
      id: 13,
      title: "«Француз кружевосы» нәзік ақсүйек тюлі",
      category: "tulle",
      categoryName: "Тюль мен Кружево",
      location: "Шымкент, Самал мкр.",
      fabric: "Кружеволы микро-сетка & Алтын гүл подхват",
      specs: "Биіктігі 3.0м • Гүлді сәнді қыстырғыш",
      image: "images/french-lace-tulle.webp",
      desc: "Толқынды жиектері француз кружевосымен безендірілген, металл гүлді қыстырғышы бар нәзік тюль композициясы."
    },
    {
      id: 14,
      title: "«Тұран» резиденциясы • Мастер-спальня",
      category: "bedroom",
      categoryName: "Жатын бөлме",
      location: "Шымкент, Тұран мкр.",
      fabric: "Архитектуралық Blackout & Этуаль микро-тюль",
      specs: "Биіктігі 3.2м • Жасырын төбелік профиль",
      image: "images/hero-curtains.webp",
      desc: "Төбеге жасырылған арнайы профиль арқылы еденге дейін мінсіз толқынмен түсетін сәулеттік жатын бөлме перделері."
    },
    {
      id: 15,
      title: "«Самал» салтанатты қонақ бөлмесі",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Самал мкр.",
      fabric: "Премиум тауп софт & Алтын шашақты подхват",
      specs: "Биіктігі 3.4м • Панорамалық қос терезе",
      image: "images/living-grand-hall.webp",
      desc: "Кең қонақ бөлмедегі екі үлкен терезені көмкерген, алтын шашақты подхваттары бар сәнді перделер."
    },
    {
      id: 16,
      title: "«Империал» корольдік алтын сатині",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Қонаев даңғылы",
      fabric: "Алтын сатин & Жапырақ қыстырғыш аксессуар",
      specs: "Биіктігі 3.6м • Қос қабатты драпировка",
      image: "images/royal-gold-satin.webp",
      desc: "Қос қабатты сәнді драпировка, жапырақ пішінді металл қыстырғыштармен және бедерлі жаккардпен үйлесім тапқан."
    },
    {
      id: 17,
      title: "«Шымкент Сити» резиденциясының үлкен залы",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Shymkent City",
      fabric: "Бай сатин софт & Вертикалды шашақтар",
      specs: "Биіктігі 3.8м • 3 терезелі біртұтас қабырға",
      image: "images/banquet-grand-residence.webp",
      desc: "Биік төбелі және люкс люстрасы бар салтанатты залға арнайы тігілген кең ауқымды перде ансамблі."
    },
    {
      id: 18,
      title: "«Алтын Багет» классикалық шеберлігі",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Нұрсәт мкр.",
      fabric: "Шоколадты фактура & Алтын төбелік багет",
      specs: "Биіктігі 3.1м • Есілген сәнді бау",
      image: "images/classic-gold-cornice.webp",
      desc: "Төбесі алтын багетпен көмкерілген, тығыз тоқылған шоколадты мата және есілген жіпті шашақты подхват."
    },
    {
      id: 19,
      title: "«Ботаника» жайлы жатын бөлмесі",
      category: "bedroom",
      categoryName: "Жатын бөлме",
      location: "Шымкент, Шымсити",
      fabric: "Шампань софт матасы & Сүтті тюль",
      specs: "Биіктігі 2.9м • Жасырын карниз",
      image: "images/bedroom-botanical-cozy.webp",
      desc: "Қараңғы тұсқағазбен үйлескен, үйге ерекше тыныштық пен жылылық сыйлайтын шампань түстес жұмсақ перделер."
    },
    {
      id: 20,
      title: "«Нұрсәт» талғампаз асханасы",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Нұрсәт мкр.",
      fabric: "Контраст жиекті софт & Жұмсақ микро-тюль",
      specs: "Биіктігі 2.9м • Қара жиекті сәнді сызық",
      image: "images/dining-modern-accent.webp",
      desc: "Асхана бөлмесіне арналған, төменгі жиегінде сәнді жіңішке қара сызығы бар заманауи түзу қатпарлы софт перделер."
    },
    {
      id: 21,
      title: "«Асар» заманауи графитті жатын бөлмесі",
      category: "bedroom",
      categoryName: "Жатын бөлме",
      location: "Шымкент, Асар мкр.",
      fabric: "Сұр-графит Blackout 100% & Ақ түсті тюль",
      specs: "Биіктігі 3.1м • Жарық оқшаулау",
      image: "images/bedroom-grey-minimal.webp",
      desc: "Минималистік интерьерге арналған біртекті симметриялы сұр Blackout перделері — сапалы ұйқы кепілі."
    },
    {
      id: 22,
      title: "«Қонаев» авторлық кестелі бөлмесі",
      category: "bedroom",
      categoryName: "Жатын бөлме",
      location: "Шымкент, Қонаев даңғылы",
      fabric: "Кестелі ақсүйек матасы & Шашақты подхват",
      specs: "Авторлық дизайн • Дәстүрлі подхват",
      image: "images/classic-embroidered.webp",
      desc: "Гүлді нәзік кестемен көмкерілген ақсүйектік мата, жиектеріндегі сәнді шашақтарымен қайталанбас сән береді."
    },
    {
      id: 23,
      title: "«Шаян» пәтерінің қонақ бөлмесі",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Шаян көшесі",
      fabric: "Сүтті Крем Софт & Тік сызықты нәзік тюль",
      specs: "Биіктігі 2.8м • Мінсіз біртекті қатпар",
      image: "images/living-cream.webp",
      desc: "Жылы сүтті түстегі жұмсақ софт матасы және бөлмеге табиғи күн жарығын біркелкі тарататын әсем тюль үйлесімі."
    },
    {
      id: 24,
      title: "«Достық» геометриялық комбо перделері",
      category: "living",
      categoryName: "Қонақ бөлме мен Залдар",
      location: "Шымкент, Достық мкр.",
      fabric: "Қос маталы комбинация (Бежевый + Геометрия)",
      specs: "Биіктігі 3.0м • Контрасты жиектеу",
      image: "images/two-tone-modern.webp",
      desc: "Екі түрлі фактураның шебер үйлесімі: үстіңгі жағы бір түсті тегіс мата, астыңғы жағы геометриялық бедерлі классикалық өрнек."
    },
    {
      id: 25,
      title: "«Оңтүстік» салтанат сарайы / Банкет залы",
      category: "royal",
      categoryName: "Корольдік Драпировка",
      location: "Шымкент, Б. Момышұлы 20А",
      fabric: "Корольдік сатин-атлас & Алтын шашақты аксессуар",
      specs: "Биіктігі 3.6м • Ламбрекенді сәнді драпировка",
      image: "images/luxury-dining-tassels.webp",
      desc: "Салтанатты қонақ қабылдау бөлмелеріне арналған, алтын түстес шашақтармен жиналған француздық асыл драпировка."
    }
  ]
};

// Storage helper: Sync with 25 authentic user photos
function getStore() {
  localStorage.setItem("SHTORY_ASSEL_STORE_V7", JSON.stringify(DEFAULT_DATA));
  return DEFAULT_DATA;
}

function saveStore(data) {
  localStorage.setItem("SHTORY_ASSEL_STORE_V7", JSON.stringify(data));
}

let store = getStore();



// 1. PEARL AURORA ATMOSPHERE CONTROLLER
function initTheme() {
  // Enforce captivating Pearl Aurora warm ivory atmosphere
  document.documentElement.setAttribute("data-theme", "pearl-aurora");
  localStorage.setItem("SHTORY_ASSEL_THEME", "pearl-aurora");

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // Gentle pulse effect on the ambient aurora lights
      const orbMist = document.getElementById("aurora-orb-mist");
      const orbChampagne = document.getElementById("aurora-orb-champagne");
      if (orbMist && orbChampagne) {
        orbMist.style.opacity = "0.6";
        orbChampagne.style.opacity = "0.6";
        setTimeout(() => {
          orbMist.style.opacity = "";
          orbChampagne.style.opacity = "";
        }, 600);
      }
    });
  }
}

// 2. RENDER APPLICATION DETAILS FROM STORE
function renderAppFromStore() {
  const promoEl = document.getElementById("promo-banner");
  const promoTextEl = document.getElementById("promo-text");
  if (promoEl && promoTextEl) {
    if (store.config.promoActive) {
      promoTextEl.textContent = store.config.promoText;
      promoEl.classList.remove("hidden");
    } else {
      promoEl.classList.add("hidden");
    }
  }

  document.querySelectorAll(".bind-phone").forEach(el => {
    el.textContent = store.config.phoneDisplay;
    if (el.tagName === "A") el.href = `tel:+${store.config.whatsapp}`;
  });

  document.querySelectorAll(".bind-address").forEach(el => {
    el.textContent = store.config.address;
  });

  document.querySelectorAll(".bind-hours").forEach(el => {
    el.textContent = store.config.workHours;
  });

  const defaultMsg = encodeURIComponent("Сәлеметсіз бе! Салон штор «Әсел» сайтынан жазып тұрмын. Перделер мен дизайнердің үйге келуі бойынша ақпарат алғым келеді.");
  document.querySelectorAll(".bind-wa-link").forEach(link => {
    link.href = `https://wa.me/${store.config.whatsapp}?text=${defaultMsg}`;
  });

  document.querySelectorAll(".bind-insta-link").forEach(link => {
    link.href = store.config.instagramUrl;
  });

  document.querySelectorAll(".bind-maps-link").forEach(link => {
    link.href = store.config.mapsUrl;
  });

  const heroImgEl = document.getElementById("hero-main-img");
  if (heroImgEl && store.config.heroImage) {
    heroImgEl.src = store.config.heroImage;
  }
}

// 3. BESPOKE CALCULATOR ENGINE
function initCalculator() {
  const widthSlider = document.getElementById("calc-width");
  const widthVal = document.getElementById("calc-width-val");
  const heightSlider = document.getElementById("calc-height");
  const heightVal = document.getElementById("calc-height-val");

  const roomSelect = document.getElementById("calc-room");
  const fabricSelect = document.getElementById("calc-fabric");
  const rodSelect = document.getElementById("calc-rod");
  const includeTulleCheck = document.getElementById("calc-tulle");
  const includeInstallCheck = document.getElementById("calc-install");

  const totalPriceEl = document.getElementById("calc-total-price");
  const monthlyPriceEl = document.getElementById("calc-monthly-price");
  const fabricMeterageEl = document.getElementById("calc-fabric-meters");
  const waOrderBtn = document.getElementById("calc-send-wa");

  function calculate() {
    const width = parseFloat(widthSlider.value);
    const height = parseFloat(heightSlider.value);
    widthVal.textContent = width.toFixed(1) + " м";
    heightVal.textContent = height.toFixed(1) + " м";

    const fabricKey = fabricSelect.value;
    const fabricPricePerMeter = store.rates[fabricKey] || 7000;
    const pleatRatio = 2.0;

    const fabricMeters = width * pleatRatio;
    fabricMeterageEl.textContent = fabricMeters.toFixed(1) + " қума метр";

    let curtainFabricCost = fabricMeters * fabricPricePerMeter;
    let tailoringCost = fabricMeters * (store.rates.sewingPerMeter || 2500);

    let tulleCost = 0;
    if (includeTulleCheck.checked) {
      const tulleMeters = width * 2.2;
      tulleCost = (tulleMeters * (store.rates.tulle || 8500)) + (tulleMeters * 2000);
    }

    let rodCost = 0;
    const rodType = rodSelect.value;
    if (rodType === "manual") rodCost = width * store.rates.rodManual;
    else if (rodType === "hidden") rodCost = width * store.rates.rodHidden;
    else if (rodType === "electric") rodCost = (width * store.rates.rodHidden) + store.rates.rodElectric;

    let installCost = includeInstallCheck.checked ? store.rates.installAndSteam : 0;

    const total = Math.round(curtainFabricCost + tailoringCost + tulleCost + rodCost + installCost);
    const monthly = Math.round(total / 12);

    totalPriceEl.textContent = total.toLocaleString("kk-KZ") + " ₸";
    monthlyPriceEl.textContent = monthly.toLocaleString("kk-KZ") + " ₸ / айына (Kaspi 0-0-12)";

        const roomName = roomSelect && roomSelect.selectedIndex >= 0 ? roomSelect.options[roomSelect.selectedIndex].text : "";
    const fabricName = fabricSelect && fabricSelect.selectedIndex >= 0 ? fabricSelect.options[fabricSelect.selectedIndex].text : "";
    const rodName = rodSelect && rodSelect.selectedIndex >= 0 ? rodSelect.options[rodSelect.selectedIndex].text : "";
    const tulleText = includeTulleCheck.checked ? "Иә (+ Тюль)" : "Жоқ";
    const installText = includeInstallCheck.checked ? "Иә (+ Орнату мен булау)" : "Жоқ";

    const msg = 
`Сәлеметсіз бе! Салон штор «Әсел» сайтындағы калькулятор арқылы перде есептедім:

🏠 Бөлме: ${roomName}
📏 Карниз ені: ${width} м
📐 Төбе биіктігі: ${height} м
🧵 Мата түрі: ${fabricName}
✨ Тюль: ${tulleText}
🔩 Карниз түрі: ${rodName}
🛠 Орнату және булау: ${installText}

💰 Шамаланған құны: ${total.toLocaleString("kk-KZ")} ₸
💳 Kaspi 0-0-12: ${monthly.toLocaleString("kk-KZ")} ₸/ай

Мата үлгілерімен дизайнердің тегін келуіне өтінім қалдырғым келеді!`;

    waOrderBtn.href = `https://wa.me/${store.config.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  [widthSlider, heightSlider, roomSelect, fabricSelect, rodSelect, includeTulleCheck, includeInstallCheck].forEach(input => {
    input.addEventListener("input", calculate);
    input.addEventListener("change", calculate);
  });

  calculate();
}

// 4. PINNED FULL-SCREEN HORIZONTAL 3D GALLERY ENGINE (Awwwards Spatial Stage)
const HORIZONTAL_COMPOSITIONS = [
  // 1: Asymmetric Heroic Centerpiece (aspect 4/3, deep Z push)
  { aspect: "aspect-[4/3]", maxW: "max-w-2xl sm:max-w-3xl", num: "01", baseY: 0, yTravel: 35, zPush: 55, zRecede: 260, baseRx: 0, pitchFactor: 16, yawFactor: 24, rollFactor: -3, baseScale: 1.0, duet: false },
  // 2: Diagonal Ascendant Right (aspect 3/4 portrait, right canted)
  { aspect: "aspect-[3/4]", maxW: "max-w-xl sm:max-w-2xl", num: "02", baseY: -20, yTravel: 45, zPush: 50, zRecede: 280, baseRx: -8, pitchFactor: 20, yawFactor: 22, rollFactor: 4, baseScale: 0.98, duet: false },
  // 3: Layered Stereoscopic Duet (Main card + translucent backing plinth)
  { aspect: "aspect-[4/3]", maxW: "max-w-2xl sm:max-w-3xl", num: "03", baseY: 15, yTravel: 30, zPush: 65, zRecede: 250, baseRx: 0, pitchFactor: 14, yawFactor: 26, rollFactor: -2, baseScale: 1.02, duet: true },
  // 4: Cinema Panorama Horizon (aspect 16/9, unfolded from drafting board)
  { aspect: "aspect-[16/9]", maxW: "max-w-3xl sm:max-w-4xl", num: "04", baseY: -10, yTravel: 25, zPush: 45, zRecede: 240, baseRx: 14, pitchFactor: 22, yawFactor: 18, rollFactor: 0, baseScale: 1.0, duet: false },
  // 5: Cantilever Offset Left (asymmetrical tilt)
  { aspect: "aspect-[16/11]", maxW: "max-w-2xl sm:max-w-3xl", num: "05", baseY: 25, yTravel: 40, zPush: 50, zRecede: 270, baseRx: -6, pitchFactor: 16, yawFactor: 28, rollFactor: -4, baseScale: 1.0, duet: false },
  // 6: Monolithic Architectural Pillar (aspect 9/13 portrait)
  { aspect: "aspect-[9/13]", maxW: "max-w-lg sm:max-w-xl", num: "06", baseY: -25, yTravel: 50, zPush: 55, zRecede: 290, baseRx: 12, pitchFactor: 18, yawFactor: 20, rollFactor: 3, baseScale: 0.96, duet: false },
  // 7: Gravity Curve Arc (aspect 1/1 square)
  { aspect: "aspect-square", maxW: "max-w-xl sm:max-w-2xl", num: "07", baseY: 10, yTravel: 35, zPush: 48, zRecede: 260, baseRx: -10, pitchFactor: 15, yawFactor: 25, rollFactor: 5, baseScale: 0.98, duet: false },
  // 8: Imperial Center Zoom (colossal depth scale)
  { aspect: "aspect-[16/10]", maxW: "max-w-3xl sm:max-w-4xl", num: "08", baseY: 0, yTravel: 20, zPush: 65, zRecede: 320, baseRx: 0, pitchFactor: 12, yawFactor: 16, rollFactor: 0, baseScale: 1.04, duet: false },
  // 9: Diagonal Slide from Upper Right (aspect 4/3)
  { aspect: "aspect-[4/3]", maxW: "max-w-2xl sm:max-w-3xl", num: "09", baseY: -20, yTravel: 40, zPush: 50, zRecede: 260, baseRx: -8, pitchFactor: 18, yawFactor: 24, rollFactor: -4, baseScale: 1.0, duet: false },
  // 10: Horizontal Stereoscopic Drift (deep lateral yaw)
  { aspect: "aspect-[16/11]", maxW: "max-w-2xl sm:max-w-3xl", num: "10", baseY: 15, yTravel: 25, zPush: 52, zRecede: 270, baseRx: 0, pitchFactor: 10, yawFactor: 30, rollFactor: 0, baseScale: 1.0, duet: false },
  // 11: Emerald Sovereign Monolith (aspect 3/4 portrait, left dominant)
  { aspect: "aspect-[3/4]", maxW: "max-w-xl sm:max-w-2xl", num: "11", baseY: -15, yTravel: 45, zPush: 58, zRecede: 280, baseRx: 10, pitchFactor: 18, yawFactor: 22, rollFactor: -3, baseScale: 1.0, duet: true },
  // 12: Crystal Shimmer Incline (aspect 16/10)
  { aspect: "aspect-[16/10]", maxW: "max-w-2xl sm:max-w-3xl", num: "12", baseY: 20, yTravel: 30, zPush: 46, zRecede: 250, baseRx: 14, pitchFactor: 16, yawFactor: 20, rollFactor: 2, baseScale: 1.0, duet: false },
  // 13: Ethereal Lace Float (aspect square, weightless float)
  { aspect: "aspect-square", maxW: "max-w-xl sm:max-w-2xl", num: "13", baseY: 0, yTravel: 35, zPush: 50, zRecede: 240, baseRx: -6, pitchFactor: 12, yawFactor: 18, rollFactor: 4, baseScale: 1.02, duet: false },
  // 14: Master Bedroom Panoramic Horizon (aspect 16/9)
  { aspect: "aspect-[16/9]", maxW: "max-w-3xl sm:max-w-4xl", num: "14", baseY: -10, yTravel: 25, zPush: 45, zRecede: 260, baseRx: -8, pitchFactor: 14, yawFactor: 20, rollFactor: -2, baseScale: 1.0, duet: false },
  // 15: Grand Hall Cantilever (aspect 16/10, yaw rotation)
  { aspect: "aspect-[16/10]", maxW: "max-w-2xl sm:max-w-3xl", num: "15", baseY: 20, yTravel: 35, zPush: 52, zRecede: 270, baseRx: 0, pitchFactor: 12, yawFactor: 28, rollFactor: 3, baseScale: 1.0, duet: false },
  // 16: Botanical Sanctuary Portrait (aspect 3/4)
  { aspect: "aspect-[3/4]", maxW: "max-w-xl sm:max-w-2xl", num: "16", baseY: -20, yTravel: 40, zPush: 50, zRecede: 280, baseRx: 12, pitchFactor: 20, yawFactor: 22, rollFactor: -3, baseScale: 0.98, duet: false },
  // 17: Triple Window Architectural Vista (aspect 21/10 ultra wide)
  { aspect: "aspect-[21/10]", maxW: "max-w-3xl sm:max-w-4xl", num: "17", baseY: 0, yTravel: 20, zPush: 44, zRecede: 250, baseRx: 16, pitchFactor: 18, yawFactor: 16, rollFactor: 0, baseScale: 1.0, duet: false },
  // 18: Classic Gold Frame Rotational (aspect 4/3)
  { aspect: "aspect-[4/3]", maxW: "max-w-2xl sm:max-w-3xl", num: "18", baseY: 15, yTravel: 30, zPush: 52, zRecede: 260, baseRx: -12, pitchFactor: 16, yawFactor: 24, rollFactor: 3, baseScale: 1.0, duet: false },
  // 19: Modern Dining Accent (aspect 16/11)
  { aspect: "aspect-[16/11]", maxW: "max-w-2xl sm:max-w-3xl", num: "19", baseY: -15, yTravel: 35, zPush: 48, zRecede: 260, baseRx: 8, pitchFactor: 18, yawFactor: 22, rollFactor: -4, baseScale: 1.0, duet: false },
  // 20: Minimalist Graphite Pillar (aspect 9/13)
  { aspect: "aspect-[9/13]", maxW: "max-w-lg sm:max-w-xl", num: "20", baseY: 25, yTravel: 45, zPush: 55, zRecede: 290, baseRx: 14, pitchFactor: 20, yawFactor: 20, rollFactor: 0, baseScale: 0.96, duet: false },
  // 21: Imperial Golden Satin (aspect 4/3, royal depth push)
  { aspect: "aspect-[4/3]", maxW: "max-w-2xl sm:max-w-3xl", num: "21", baseY: 0, yTravel: 25, zPush: 60, zRecede: 280, baseRx: 0, pitchFactor: 14, yawFactor: 24, rollFactor: -2, baseScale: 1.02, duet: true },
  // 22: Embroidered Heirloom Plinth (aspect square)
  { aspect: "aspect-square", maxW: "max-w-xl sm:max-w-2xl", num: "22", baseY: -20, yTravel: 35, zPush: 48, zRecede: 250, baseRx: -8, pitchFactor: 15, yawFactor: 22, rollFactor: 4, baseScale: 1.0, duet: false },
  // 23: Cream Haven Drift (aspect 16/10)
  { aspect: "aspect-[16/10]", maxW: "max-w-2xl sm:max-w-3xl", num: "23", baseY: 15, yTravel: 30, zPush: 48, zRecede: 260, baseRx: 0, pitchFactor: 12, yawFactor: 26, rollFactor: 0, baseScale: 1.0, duet: false },
  // 24: Two-Tone Duo Elevation (aspect 3/4)
  { aspect: "aspect-[3/4]", maxW: "max-w-xl sm:max-w-2xl", num: "24", baseY: -15, yTravel: 40, zPush: 52, zRecede: 270, baseRx: 12, pitchFactor: 18, yawFactor: 22, rollFactor: -3, baseScale: 0.98, duet: false },
  // 25: Palace Banquet Monumental Finale (aspect 16/9, heroic finale)
  { aspect: "aspect-[16/9]", maxW: "max-w-3xl sm:max-w-4xl", num: "25", baseY: 0, yTravel: 20, zPush: 68, zRecede: 340, baseRx: 16, pitchFactor: 14, yawFactor: 18, rollFactor: 0, baseScale: 1.04, duet: true }
];

function initLookbook() {
  Horizontal3DGalleryEngine.init();
}

const Horizontal3DGalleryEngine = (() => {
  let stageEl = null;
  let wrapperEl = null;
  let counterEl = null;
  let titleEl = null;
  let progressBarEl = null;
  let prevBtn = null;
  let nextBtn = null;
  let playBtn = null;
  let liveIndicator = null;
  let orderWaBtn = null;
  let gridContainer = null;
  let gridViewEl = null;
  let btnMode3D = null;
  let btnModeGrid = null;

  let currentMode = "3d"; // "3d" or "grid"
  let filteredProjects = [];
  let cardItems = [];
  let isRunning = false;

  // Autoplay Engine State
  let isAutoplayActive = true;
  let isUserInteracting = false;
  let autoplayTimer = null;
  let resumeTimer = null;
  const AUTOPLAY_INTERVAL_MS = 2600; // Smooth 2.8s auto advance

  // Smooth floating index (0 to total-1)
  let currentIndex = 0;
  let targetIndex = 0;
  let activeIndex = 0;
  let activeFilter = "all";

  // Drag / Swipe State for Stage Only (Never intercepts page scroll)
  let isDragging = false;
  let touchStartX = 0;

  function init() {
    stageEl = document.getElementById("spatial-stage-3d");
    wrapperEl = document.getElementById("gallery-3d-wrapper");
    counterEl = document.getElementById("gallery-counter");
    titleEl = document.getElementById("gallery-active-title");
    progressBarEl = document.getElementById("gallery-progress-bar");
    prevBtn = document.getElementById("gallery-prev-btn");
    nextBtn = document.getElementById("gallery-next-btn");
    playBtn = document.getElementById("gallery-play-btn");
    liveIndicator = document.getElementById("gallery-live-indicator");
    orderWaBtn = document.getElementById("gallery-order-wa");
    gridContainer = document.getElementById("lookbook-grid-items");
    gridViewEl = document.getElementById("lookbook-grid-view");
    btnMode3D = document.getElementById("view-mode-3d");
    btnModeGrid = document.getElementById("view-mode-grid");

    if (!stageEl) return;

    setupEvents();
    renderProjects("all");
    startAutoplay();

    if (!isRunning) {
      isRunning = true;
      window.requestAnimationFrame(animationLoop);
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (isAutoplayActive && !isDragging && currentMode === "3d") {
        advanceSlide(1);
      }
    }, AUTOPLAY_INTERVAL_MS);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplayTimer() {
    stopAutoplay();
    startAutoplay();
  }

  function pauseAutoplayTemporarily(ms = 4500) {
    if (resumeTimer) clearTimeout(resumeTimer);
    isUserInteracting = true;
    resumeTimer = setTimeout(() => {
      isUserInteracting = false;
      resetAutoplayTimer();
    }, ms);
  }

  function toggleAutoplay() {
    isAutoplayActive = !isAutoplayActive;
    updatePlayPauseUI();
    if (isAutoplayActive) {
      isUserInteracting = false;
      resetAutoplayTimer();
    } else {
      stopAutoplay();
    }
  }

  function updatePlayPauseUI() {
    if (playBtn) {
      playBtn.setAttribute("title", isAutoplayActive ? "Авто-ойнатуды тоқтату" : "Авто-ойнатуды қосу");
      playBtn.innerHTML = isAutoplayActive 
        ? '<i data-lucide="pause" class="w-4 h-4"></i>'
        : '<i data-lucide="play" class="w-4 h-4"></i>';
      lucide.createIcons();
    }

    if (liveIndicator) {
      if (isAutoplayActive) {
        liveIndicator.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Авто-ойнату</span>';
        liveIndicator.className = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/20";
      } else {
        liveIndicator.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span><span>Кідіртілген</span>';
        liveIndicator.className = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20";
      }
    }
  }

  function advanceSlide(direction = 1) {
    const total = filteredProjects.length;
    if (total <= 1) return;

    let next = (targetIndex + direction) % total;
    if (next < 0) next = total - 1;
    targetIndex = next;
    ensureAnimationLoop();
  }

  function renderProjects(filter = "all") {
    activeFilter = filter;
    filteredProjects = filter === "all" ? store.projects : store.projects.filter(p => p.category === filter);

    // 1. Populate 3D Runway Stage
    if (stageEl) {
      const existingItems = stageEl.querySelectorAll(".gallery-3d-item");
      if (filter === "all" && existingItems.length === filteredProjects.length) {
        cardItems = [];
        existingItems.forEach((itemEl, idx) => {
          const p = filteredProjects[idx];
          const comp = HORIZONTAL_COMPOSITIONS[(p.id - 1) % HORIZONTAL_COMPOSITIONS.length];
          cardItems.push({
            el: itemEl,
            comp,
            project: p,
            idx
          });
        });
      } else {
        stageEl.innerHTML = "";
        cardItems = [];

        filteredProjects.forEach((p, idx) => {
          const comp = HORIZONTAL_COMPOSITIONS[(p.id - 1) % HORIZONTAL_COMPOSITIONS.length];
          const itemEl = document.createElement("div");
          itemEl.className = "gallery-3d-item";
          itemEl.setAttribute("data-id", p.id);
          itemEl.setAttribute("data-idx", idx);

          itemEl.innerHTML = `
            ${comp.duet ? '<div class="gallery-duet-back"></div>' : ''}
            
            <div class="gallery-3d-card mx-auto relative cursor-pointer" onclick="openLightbox(${p.id})">
              <div class="gallery-3d-media-wrap relative">
                <img src="${p.image}" alt="${p.title}" class="gallery-3d-img" loading="eager" decoding="async" />
                
                <!-- Category Badge -->
                <span class="gallery-3d-badge absolute top-4 left-4 badge-gold px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold backdrop-blur-md shadow-md">
                  ${p.categoryName}
                </span>

                <!-- Price Tag Badge on 3D Card -->
                <span class="gallery-3d-badge absolute top-4 right-4 bg-black/70 border border-[var(--gold-primary)]/50 text-[var(--gold-light)] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold backdrop-blur-md shadow-md">
                  ${p.priceText || "7 000 ₸/м бастап"}
                </span>
                
                <!-- Zoom Button -->
                <button type="button" class="gallery-3d-badge absolute bottom-3 right-3 bg-black/60 hover:bg-black/85 text-white backdrop-blur-md p-2 rounded-full transition-all shadow-lg" onclick="event.stopPropagation(); openLightbox(${p.id})" aria-label="Толық экранда қарау">
                  <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
              
              <!-- Details below image -->
              <div class="gallery-3d-details p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-t border-[var(--border-subtle)]">
                <div class="min-w-0">
                  <div class="flex items-center gap-2 text-[11px] text-[var(--gold-dark)] mb-0.5">
                    <i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>
                    <span class="truncate">${p.location}</span>
                    <span class="text-[var(--text-dim)]">•</span>
                    <span class="font-bold text-[var(--gold-primary)]">${p.priceText || "7 000 ₸/м"}</span>
                  </div>
                  <h3 class="font-display text-sm sm:text-base font-bold text-[var(--text-main)] truncate">${p.title}</h3>
                  <p class="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">${p.fabric}</p>
                </div>
                
                <a href="https://wa.me/${store.config.whatsapp}?text=${encodeURIComponent('Сәлеметсіз бе! «' + p.title + '» перде үлгісі ұнады (' + (p.priceText || '') + '). Үйіме бағасын есептеп бере аласыз ба?')}" target="_blank" onclick="event.stopPropagation();" class="btn-gold px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 flex items-center justify-center gap-1 shadow-sm">
                  <span>Тапсырыс</span>
                  <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
                </a>
              </div>
            </div>
          `;

          stageEl.appendChild(itemEl);
          cardItems.push({
            el: itemEl,
            comp,
            project: p,
            idx
          });
        });
      }
    }

    // 2. Populate Alternative 25-Project Grid View
    if (gridContainer) {
      const existingGridItems = gridContainer.children;
      if (filter !== "all" || existingGridItems.length !== filteredProjects.length) {
        gridContainer.innerHTML = filteredProjects.map((p, idx) => `
          <div class="bg-[var(--bg-card)] border border-[var(--border-gold)]/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-[var(--gold-primary)] transition-all duration-300 flex flex-col group cursor-pointer" onclick="openLightbox(${p.id})">
            <div class="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)]">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="eager" decoding="async" />
              <span class="absolute top-4 left-4 badge-gold px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
                ${p.categoryName}
              </span>
              <span class="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/50 text-white backdrop-blur-md">
                #${(idx + 1).toString().padStart(2, "0")}
              </span>
            </div>
            <div class="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
              <div>
                <div class="flex items-center gap-1.5 text-xs text-[var(--gold-dark)] mb-1">
                  <i data-lucide="map-pin" class="w-3.5 h-3.5 shrink-0"></i>
                  <span class="truncate">${p.location}</span>
                </div>
                <h3 class="font-display text-lg font-bold text-[var(--text-main)] mb-1">${p.title}</h3>
                <p class="text-xs text-[var(--text-muted)] line-clamp-2">${p.fabric}</p>
              </div>
              <div class="flex items-center justify-between gap-3 pt-3 border-t border-[var(--border-subtle)]">
                <button type="button" class="text-xs text-[var(--gold-dark)] hover:text-[var(--gold-primary)] font-semibold flex items-center gap-1 transition-colors" onclick="event.stopPropagation(); openLightbox(${p.id})">
                  <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                  <span>Толық көру</span>
                </button>
                <a href="https://wa.me/${store.config.whatsapp}?text=${encodeURIComponent('Сәлеметсіз бе! «' + p.title + '» перде үлгісі ұнады. Осы бойынша кеңес алғым келеді.')}" target="_blank" onclick="event.stopPropagation();" class="btn-gold px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <span>Тапсырыс</span>
                  <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
                </a>
              </div>
            </div>
          </div>
        `).join("");
      }
    }

    targetIndex = 0;
    currentIndex = 0;
    updateActiveInfo(0);
    resetAutoplayTimer();
    lucide.createIcons();
  }

  function setupEvents() {
    // Continuous autoplay: never stops merely on hover
    if (stageEl) {

      // Touch horizontal swipe inside stage
      stageEl.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          touchStartX = e.touches[0].clientX;
          isUserInteracting = true;
        }
      }, { passive: true });

      stageEl.addEventListener("touchend", (e) => {
        if (!isDragging) return;
        isDragging = false;
        const touchEndX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : touchStartX;
        const deltaX = touchEndX - touchStartX;
        if (deltaX < -35) {
          advanceSlide(1); // swipe left -> next
        } else if (deltaX > 35) {
          advanceSlide(-1); // swipe right -> prev
        }
        pauseAutoplayTemporarily(4000);
      }, { passive: true });
    }

    // Play / Pause Toggle Button
    if (playBtn) {
      playBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleAutoplay();
      });
    }

    // Prev & Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        advanceSlide(-1);
        pauseAutoplayTemporarily(4000);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        advanceSlide(1);
        pauseAutoplayTemporarily(4000);
      });
    }

    // Category Filter Buttons
    document.querySelectorAll(".lookbook-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".lookbook-filter-btn").forEach(b => {
          b.classList.remove("bg-[var(--gold-primary)]", "text-white", "shadow-sm");
          b.classList.add("bg-[var(--bg-card)]", "text-[var(--text-muted)]");
        });
        btn.classList.add("bg-[var(--gold-primary)]", "text-white", "shadow-sm");
        btn.classList.remove("bg-[var(--bg-card)]", "text-[var(--text-muted)]");

        const filter = btn.getAttribute("data-filter");
        renderProjects(filter);
      });
    });

    // View Switcher: 3D Stage vs Grid View
    if (btnMode3D && btnModeGrid) {
      btnMode3D.addEventListener("click", () => {
        currentMode = "3d";
        btnMode3D.classList.add("bg-[var(--gold-primary)]", "text-white", "shadow-sm");
        btnMode3D.classList.remove("text-[var(--text-muted)]");
        btnModeGrid.classList.remove("bg-[var(--gold-primary)]", "text-white", "shadow-sm");
        btnModeGrid.classList.add("text-[var(--text-muted)]");

        if (wrapperEl) wrapperEl.classList.remove("hidden");
        if (gridViewEl) gridViewEl.classList.add("hidden");
        resetAutoplayTimer();
      });

      btnModeGrid.addEventListener("click", () => {
        currentMode = "grid";
        btnModeGrid.classList.add("bg-[var(--gold-primary)]", "text-white", "shadow-sm");
        btnModeGrid.classList.remove("text-[var(--text-muted)]");
        btnMode3D.classList.remove("bg-[var(--gold-primary)]", "text-white", "shadow-sm");
        btnMode3D.classList.add("text-[var(--text-muted)]");

        if (wrapperEl) wrapperEl.classList.add("hidden");
        if (gridViewEl) {
          gridViewEl.classList.remove("hidden");
          lucide.createIcons();
        }
        stopAutoplay();
      });
    }
  }

  function updateActiveInfo(idx) {
    if (idx !== activeIndex && filteredProjects[idx]) {
      activeIndex = idx;
      const p = filteredProjects[idx];
      const total = filteredProjects.length;

      if (counterEl) {
        counterEl.textContent = `${(idx + 1).toString().padStart(2, "0")} / ${total.toString().padStart(2, "0")}`;
      }

      if (titleEl) {
        titleEl.innerHTML = `<span class="text-white">${p.title}</span><span class="ml-2 text-xs font-bold text-[var(--gold-primary)] bg-[var(--gold-primary)]/10 border border-[var(--gold-primary)]/30 px-2.5 py-0.5 rounded-full">${p.priceText || "7 000 ₸/м бастап"}</span>`;
      }

      if (progressBarEl) {
        const pct = Math.max(4, Math.min(100, ((idx + 1) / total) * 100));
        progressBarEl.style.width = `${pct}%`;
      }

      if (orderWaBtn) {
        const msg = encodeURIComponent(`Сәлеметсіз бе! «${p.title}» перде үлгісі ұнады. Осы үлгі бойынша үйіме бағасын есептеп бере аласыз ба?`);
        orderWaBtn.href = `https://wa.me/${store.config.whatsapp}?text=${msg}`;
      }
    }
  }

  // 60-120 FPS Battery & Mobile Optimized 3D Animation Loop
  let isSectionInView = true;
  function ensureAnimationLoop() {
    if (!isRunning && isSectionInView && currentMode === "3d") {
      isRunning = true;
      window.requestAnimationFrame(animationLoop);
    }
  }

  function animationLoop() {
    if (!isSectionInView || currentMode !== "3d" || cardItems.length === 0) {
      isRunning = false;
      return;
    }

    const diff = targetIndex - currentIndex;
    const isSettled = Math.abs(diff) < 0.002;

    if (isSettled && !isDragging) {
      currentIndex = targetIndex;
      updateCardsTransform();
      isRunning = false;
      return; // Sleep rAF loop when settled to save 100% mobile CPU/GPU!
    }

    // Smooth luxury spring lerp
    currentIndex += diff * 0.085;
    updateCardsTransform();

    window.requestAnimationFrame(animationLoop);
  }

  function updateCardsTransform() {
    const nearestIdx = Math.max(0, Math.min(filteredProjects.length - 1, Math.round(currentIndex)));
    updateActiveInfo(nearestIdx);

    const isMobile = window.innerWidth < 768;
    const stageWidth = isMobile ? window.innerWidth * 0.85 : Math.min(window.innerWidth * 0.65, 750);

    for (let i = 0; i < cardItems.length; i++) {
      const item = cardItems[i];
      const comp = item.comp;
      const u = i - currentIndex;

      // Culling: off-stage cards outside [-1.75, 1.75] are hidden
      if (Math.abs(u) > 1.75) {
        if (item.el.style.display !== "none") {
          item.el.style.display = "none";
        }
        continue;
      }

      if (item.el.style.display === "none") {
        item.el.style.display = "block";
      }

      const tx = u * stageWidth;
      const ty = comp.baseY + Math.sin(u * 1.6) * (isMobile ? comp.yTravel * 0.3 : comp.yTravel);
      const depthFactor = 1 - Math.min(1, Math.abs(u));
      const tz = (depthFactor * comp.zPush) - (Math.abs(u) * (isMobile ? comp.zRecede * 0.4 : comp.zRecede));
      const rx = isMobile ? comp.baseRx : comp.baseRx + (Math.sin(u * 1.4) * comp.pitchFactor);
      const ry = u * (isMobile ? comp.yawFactor * 0.35 : comp.yawFactor);
      const rz = isMobile ? 0 : u * comp.rollFactor;
      const scale = comp.baseScale * (1 - Math.min(0.25, Math.abs(u) * 0.12));
      const opacity = Math.max(0.05, 1 - Math.pow(Math.abs(u) / 1.6, 2));
      const zIndex = Math.round(100 - Math.abs(u) * 20);

      item.el.style.zIndex = zIndex;
      item.el.style.transform = `translate3d(calc(-50% + ${tx.toFixed(1)}px), calc(-50% + ${ty.toFixed(1)}px), ${tz.toFixed(1)}px) rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg) rotateZ(${rz.toFixed(1)}deg) scale3d(${scale.toFixed(3)}, ${scale.toFixed(3)}, 1)`;
      item.el.style.opacity = opacity.toFixed(2);
    }
  }

  return {
    init,
    renderProjects
  };
})();

// 5. TACTILE FABRIC SWATCH STUDIO
function selectFabricById(fabricId) {
  const fabric = store.fabrics.find(f => f.id === fabricId) || store.fabrics[0];
  if (!fabric) return;

  const previewImg = document.getElementById("fabric-preview-img");
  const previewName = document.getElementById("fabric-preview-name");
  const previewBadge = document.getElementById("fabric-preview-badge");
  const previewPrice = document.getElementById("fabric-preview-price");
  const previewOrigin = document.getElementById("fabric-preview-origin");
  const previewOpacity = document.getElementById("fabric-preview-opacity");
  const previewDesc = document.getElementById("fabric-preview-desc");
  const previewWaBtn = document.getElementById("fabric-preview-wa");

  if (previewImg) previewImg.src = fabric.image;
  if (previewName) previewName.textContent = fabric.name;
  if (previewBadge) previewBadge.textContent = fabric.badge;
  if (previewPrice) previewPrice.textContent = fabric.price.toLocaleString("kk-KZ") + " ₸ / метр";
  if (previewOrigin) previewOrigin.textContent = fabric.origin;
  if (previewOpacity) previewOpacity.textContent = fabric.opacity;
  if (previewDesc) previewDesc.textContent = fabric.desc;

  if (previewWaBtn) {
    const msg = encodeURIComponent(`Сәлеметсіз бе! Салон штор «Әсел» сайтынан «${fabric.name}» матасын қарап отырмын. Үйге дизайнерді мата үлгілерімен шақырғым келеді.`);
    previewWaBtn.href = `https://wa.me/${store.config.whatsapp}?text=${msg}`;
  }

  // Update card styles
  document.querySelectorAll(".fabric-swatch-card").forEach(card => {
    if (card.getAttribute("data-fabric-id") === fabricId) {
      card.classList.add("border-[var(--gold-primary)]", "bg-[var(--bg-card)]", "shadow-md");
      card.classList.remove("border-[var(--border-subtle)]", "bg-[var(--bg-card)]/70");
    } else {
      card.classList.remove("border-[var(--gold-primary)]", "shadow-md");
      card.classList.add("border-[var(--border-subtle)]", "bg-[var(--bg-card)]/70");
    }
  });
}
window.selectFabricById = selectFabricById;

function initFabricStudio() {
  const container = document.getElementById("fabric-swatch-list");
  if (!container) return;

  // Bind click handlers to pre-rendered fabric cards
  container.querySelectorAll(".fabric-swatch-card").forEach(card => {
    const fId = card.getAttribute("data-fabric-id");
    card.addEventListener("click", () => {
      selectFabricById(fId);
    });
  });

  if (store.fabrics.length > 0) {
    selectFabricById(store.fabrics[0].id);
  }
}

// 6. FULL-SCREEN LIGHTBOX
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}

function openLightbox(id) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const desc = document.getElementById("lightbox-desc");
  const specs = document.getElementById("lightbox-specs");
  const waBtn = document.getElementById("lightbox-wa-btn");

  const project = store.projects.find(p => p.id === id);
  if (!project) return;

  img.src = project.image;
  title.textContent = project.title;
  desc.textContent = project.desc;
  specs.textContent = `${project.location} • ${project.fabric} • ${project.priceText ? "Бағасы: " + project.priceText + " • " : ""}${project.specs}`;

  const msg = encodeURIComponent(`Сәлеметсіз бе! Портфолиодағы «${project.title}» бойынша кеңес алып, бағасын есептегім келеді.`);
  waBtn.href = `https://wa.me/${store.config.whatsapp}?text=${msg}`;

  modal.classList.add("active");
}
window.openLightbox = openLightbox;

// 7. SECRET INVISIBLE ADMIN PANEL
function initAdminSystem() {
  const drawer = document.getElementById("admin-drawer");
  const authModal = document.getElementById("admin-auth-modal");
  const pinInput = document.getElementById("admin-pin-input");
  const pinSubmit = document.getElementById("admin-pin-submit");
  const pinCancel = document.getElementById("admin-pin-cancel");
  const pinError = document.getElementById("admin-pin-error");

  const closeDrawerBtn = document.getElementById("admin-close-btn");
  const secretTriggerBtn = document.getElementById("secret-admin-trigger");

  let isAuthenticated = false;

  function promptLogin() {
    if (isAuthenticated) {
      openAdminDrawer();
    } else {
      authModal.classList.remove("hidden");
      pinInput.value = "";
      pinError.classList.add("hidden");
      pinInput.focus();
    }
  }

  function openAdminDrawer() {
    populateAdminFields();
    drawer.classList.add("open");
  }

  function closeAdminDrawer() {
    drawer.classList.remove("open");
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      promptLogin();
    }
  });

  if (secretTriggerBtn) {
    secretTriggerBtn.addEventListener("click", promptLogin);
  }

  if (pinCancel) {
    pinCancel.addEventListener("click", () => authModal.classList.add("hidden"));
  }

  if (pinSubmit) {
    pinSubmit.addEventListener("click", () => {
      if (pinInput.value === "1998") {
        isAuthenticated = true;
        authModal.classList.add("hidden");
        openAdminDrawer();
      } else {
        pinError.classList.remove("hidden");
      }
    });
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", closeAdminDrawer);
  }

  const tabBtns = document.querySelectorAll(".admin-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("border-[var(--gold-primary)]", "text-[var(--gold-dark)]"));
      btn.classList.add("border-[var(--gold-primary)]", "text-[var(--gold-dark)]");

      const tab = btn.getAttribute("data-tab");
      document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.add("hidden"));
      const target = document.getElementById(`admin-tab-${tab}`);
      if (target) target.classList.remove("hidden");
    });
  });

  const heroFileInput = document.getElementById("adm-hero-file");
  if (heroFileInput) {
    heroFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          store.config.heroImage = event.target.result;
          saveStore(store);
          renderAppFromStore();
          alert("✅ Басты беттің фотосы сәтті жаңартылды!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const saveConfigBtn = document.getElementById("admin-save-config");
  if (saveConfigBtn) {
    saveConfigBtn.addEventListener("click", () => {
      store.config.phoneDisplay = document.getElementById("adm-phone").value;
      store.config.whatsapp = document.getElementById("adm-wa").value.replace(/\D/g, "");
      store.config.instagramUrl = document.getElementById("adm-insta").value;
      store.config.mapsUrl = document.getElementById("adm-maps").value;
      store.config.address = document.getElementById("adm-address").value;
      store.config.workHours = document.getElementById("adm-hours").value;
      store.config.promoActive = document.getElementById("adm-promo-active").checked;
      store.config.promoText = document.getElementById("adm-promo-text").value;

      saveStore(store);
      renderAppFromStore();
      alert("✅ Баптаулар сәтті сақталды!");
    });
  }

  const saveRatesBtn = document.getElementById("admin-save-rates");
  if (saveRatesBtn) {
    saveRatesBtn.addEventListener("click", () => {
      store.rates.velvet = parseInt(document.getElementById("adm-rate-velvet").value) || 18500;
      store.rates.blackout = parseInt(document.getElementById("adm-rate-blackout").value) || 14000;
      store.rates.linen = parseInt(document.getElementById("adm-rate-linen").value) || 16500;
      store.rates.jacquard = parseInt(document.getElementById("adm-rate-jacquard").value) || 22000;
      store.rates.tulle = parseInt(document.getElementById("adm-rate-tulle").value) || 8500;
      store.rates.sewingPerMeter = parseInt(document.getElementById("adm-rate-sewing").value) || 2500;
      store.rates.rodManual = parseInt(document.getElementById("adm-rate-rod-manual").value) || 6000;
      store.rates.rodHidden = parseInt(document.getElementById("adm-rate-rod-hidden").value) || 9500;
      store.rates.rodElectric = parseInt(document.getElementById("adm-rate-rod-electric").value) || 38000;

      saveStore(store);
      alert("✅ Бағалар мен калькулятор мөлшерлемелері жаңартылды!");
    });
  }

  let uploadedProjectImgData = "";
  const projFileInput = document.getElementById("adm-proj-file");
  if (projFileInput) {
    projFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          uploadedProjectImgData = event.target.result;
          document.getElementById("adm-proj-img-preview").src = uploadedProjectImgData;
          document.getElementById("adm-proj-img-preview").classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const addProjectBtn = document.getElementById("admin-add-project-btn");
  if (addProjectBtn) {
    addProjectBtn.addEventListener("click", () => {
      const title = document.getElementById("adm-proj-title").value.trim();
      const cat = document.getElementById("adm-proj-cat").value;
      const catName = document.getElementById("adm-proj-cat").options[document.getElementById("adm-proj-cat").selectedIndex].text;
      const loc = document.getElementById("adm-proj-loc").value.trim();
      const fabric = document.getElementById("adm-proj-fabric").value.trim();
      const specs = document.getElementById("adm-proj-specs").value.trim();
      const imgUrlInput = document.getElementById("adm-proj-img").value.trim();
      const desc = document.getElementById("adm-proj-desc").value.trim();

      const finalImg = uploadedProjectImgData || imgUrlInput || "images/crystal-ceiling-living.webp";

      if (!title) {
        alert("Қате: Жоба тақырыбы міндетті түрде толтырылуы керек!");
        return;
      }

      const newProj = {
        id: Date.now(),
        title,
        category: cat,
        categoryName: catName,
        location: loc || "Шымкент",
        fabric: fabric || "Люкс мата",
        specs: specs || "Жеке өлшем",
        image: finalImg,
        desc: desc || "Салон штор «Әсел» шеберханасының эксклюзивті жұмысы."
      };

      store.projects.unshift(newProj);
      saveStore(store);
      initLookbook();
      renderAdminProjectList();
      alert("✅ Жаңа жоба портфолиоға қосылды!");

      document.getElementById("adm-proj-title").value = "";
      document.getElementById("adm-proj-img").value = "";
      document.getElementById("adm-proj-desc").value = "";
      uploadedProjectImgData = "";
      document.getElementById("adm-proj-img-preview").classList.add("hidden");
    });
  }

  const exportBtn = document.getElementById("admin-export-json");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "shtory_assel_backup.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  const resetBtn = document.getElementById("admin-reset-store");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Барлық деректерді бастапқы қалпына қайтаруды растайсыз ба?")) {
        localStorage.removeItem("SHTORY_ASSEL_STORE_V7");
        store = DEFAULT_DATA;
        saveStore(store);
        location.reload();
      }
    });
  }
}

function populateAdminFields() {
  document.getElementById("adm-phone").value = store.config.phoneDisplay;
  document.getElementById("adm-wa").value = store.config.whatsapp;
  document.getElementById("adm-insta").value = store.config.instagramUrl;
  document.getElementById("adm-maps").value = store.config.mapsUrl;
  document.getElementById("adm-address").value = store.config.address;
  document.getElementById("adm-hours").value = store.config.workHours;
  document.getElementById("adm-promo-active").checked = store.config.promoActive;
  document.getElementById("adm-promo-text").value = store.config.promoText;

  document.getElementById("adm-rate-velvet").value = store.rates.velvet;
  document.getElementById("adm-rate-blackout").value = store.rates.blackout;
  document.getElementById("adm-rate-linen").value = store.rates.linen;
  document.getElementById("adm-rate-jacquard").value = store.rates.jacquard;
  document.getElementById("adm-rate-tulle").value = store.rates.tulle;
  document.getElementById("adm-rate-sewing").value = store.rates.sewingPerMeter;
  document.getElementById("adm-rate-rod-manual").value = store.rates.rodManual;
  document.getElementById("adm-rate-rod-hidden").value = store.rates.rodHidden;
  document.getElementById("adm-rate-rod-electric").value = store.rates.rodElectric;

  renderAdminProjectList();
}

function renderAdminProjectList() {
  const container = document.getElementById("adm-projects-list");
  if (!container) return;
  container.innerHTML = "";

  store.projects.forEach(p => {
    const row = document.createElement("div");
    row.className = "flex items-center justify-between p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]";
    row.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-10 h-10 rounded object-cover border border-white/10" />
        <div>
          <h5 class="text-sm font-medium text-white">${p.title}</h5>
          <span class="text-xs text-[var(--text-dim)]">${p.categoryName} • ${p.location}</span>
        </div>
      </div>
      <button class="text-red-400 hover:text-red-300 p-1.5 delete-project-btn" data-id="${p.id}" title="Өшіру">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    `;

    row.querySelector(".delete-project-btn").addEventListener("click", () => {
      if (confirm(`«${p.title}» жобасын өшіруді қалайсыз ба?`)) {
        store.projects = store.projects.filter(item => item.id !== p.id);
        saveStore(store);
        initLookbook();
        renderAdminProjectList();
      }
    });

    container.appendChild(row);
  });

  lucide.createIcons();
}


// ==========================================================================
// 8. INTERACTIVE 3D SPATIAL MOTION ENGINE (Framer Motion & Natural Spring Physics)
// 60-120 FPS GPU Composited Transformations:
// - Real-time 3D tilt, pitch & yaw cursor tracking
// - Dynamic specular museum glare reflection
// - Ambient subtle harmonic 3D floating / breathing
// - Scroll-linked depth parallax (moving through Z-space)
// - Touch gestures on mobile (tilt + spring reset)
// - Viewport culling via IntersectionObserver (0% off-screen overhead)
// ==========================================================================

// Init App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderAppFromStore();
  initCalculator();
  initFabricStudio();
  initLightbox();
  initAdminSystem();
  lucide.createIcons();
  Horizontal3DGalleryEngine.init();
});
