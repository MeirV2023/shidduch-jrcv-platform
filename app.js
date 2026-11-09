// =========================================================================
// SHIDDUCH JRCV — Desktop & PWA Application Logic
// =========================================================================

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// Enable light-dismiss (backdrop click) on all native <dialog> elements
document.querySelectorAll('dialog.shidduch-modal').forEach((dlg) => {
  dlg.addEventListener('click', (e) => {
    const rect = dlg.getBoundingClientRect();
    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!clickedInDialog) {
      dlg.close();
    }
  });
});

// Language Dropdown Toggle & Translations
const langToggleBtn = document.getElementById('lang-toggle-btn');
const langMenu = document.getElementById('lang-menu');

if (langToggleBtn && langMenu) {
  langToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });
  document.addEventListener('click', () => {
    langMenu.classList.remove('open');
  });
}

const I18N = {
  RU: {
    nav_how: 'Как это работает',
    nav_about: 'О платформе',
    nav_security: 'Безопасность',
    nav_faq: 'FAQ',
    btn_login: 'Войти',
    btn_create_nav: 'Создать профиль',
    hero_title: 'Еврейский шидух<br />для создания семьи',
    hero_subtitle: 'Надёжная платформа, которая помогает<br />встретить достойного партнёра и построить семью.',
    btn_create_hero: 'Создать профиль',
    btn_how_hero: 'Как это работает',
    track_a_title: 'Современный приватный шидух',
    track_a_desc: 'Подбор с учётом ваших предпочтений',
    track_b_title: 'Традиционный шидух с шадханом',
    track_b_desc: 'Личное сопровождение опытного шадхана',
    feat_1: 'Проверенные анкеты',
    feat_2: 'Конфиденциальность',
    feat_3: 'Умный подбор',
    feat_4: 'Поддержка шадхана',
    how_heading: 'Как это работает',
    step_1_text: '<strong>1. Заполните</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;анкету',
    step_2_text: '<strong>2. Получите</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;подходящие<br />&nbsp;&nbsp;&nbsp;&nbsp;предложения',
    step_3_text: '<strong>3. Познакомьтесь</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;и постройте семью',
    cta_bottom_title: 'Сделайте первый шаг к своей семье',
    btn_fill_form: 'Заполнить анкету'
  },
  DE: {
    nav_how: 'Wie es funktioniert',
    nav_about: 'Über die Plattform',
    nav_security: 'Sicherheit',
    nav_faq: 'FAQ',
    btn_login: 'Anmelden',
    btn_create_nav: 'Profil erstellen',
    hero_title: 'Jüdischer Schidduch<br />zur Familiengründung',
    hero_subtitle: 'Eine vertrauenswürdige Plattform der JRCV Wien,<br />um den passenden Partner fürs Leben zu finden.',
    btn_create_hero: 'Profil erstellen',
    btn_how_hero: 'Wie es funktioniert',
    track_a_title: 'Moderner privater Schidduch',
    track_a_desc: 'Intelligentes Matching nach Ihren Werten',
    track_b_title: 'Traditioneller Schidduch mit Schadchan',
    track_b_desc: 'Persönliche Begleitung durch erfahrene Schadchanim',
    feat_1: 'Geprüfte Profile',
    feat_2: 'Vertraulichkeit',
    feat_3: 'Smartes Matching',
    feat_4: 'Schadchan-Begleitung',
    how_heading: 'Wie es funktioniert',
    step_1_text: '<strong>1. Fragebogen</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;ausfüllen',
    step_2_text: '<strong>2. Passende</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;Vorschläge<br />&nbsp;&nbsp;&nbsp;&nbsp;erhalten',
    step_3_text: '<strong>3. Kennenlernen</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;& Familie gründen',
    cta_bottom_title: 'Machen Sie den ersten Schritt zu Ihrer Familie',
    btn_fill_form: 'Fragebogen ausfüllen'
  },
  EN: {
    nav_how: 'How It Works',
    nav_about: 'About Platform',
    nav_security: 'Security',
    nav_faq: 'FAQ',
    btn_login: 'Log In',
    btn_create_nav: 'Create Profile',
    hero_title: 'Jewish Shidduch<br />for Building a Family',
    hero_subtitle: 'A trusted community platform helping you<br />meet a worthy partner and build a Jewish home.',
    btn_create_hero: 'Create Profile',
    btn_how_hero: 'How It Works',
    track_a_title: 'Modern Private Shidduch',
    track_a_desc: 'Smart matching tailored to your values',
    track_b_title: 'Traditional Shidduch with Shadchan',
    track_b_desc: 'Personal guidance by an experienced Shadchan',
    feat_1: 'Verified Profiles',
    feat_2: 'Full Privacy',
    feat_3: 'Smart Matching',
    feat_4: 'Shadchan Support',
    how_heading: 'How It Works',
    step_1_text: '<strong>1. Complete</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;your profile',
    step_2_text: '<strong>2. Receive</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;curated<br />&nbsp;&nbsp;&nbsp;&nbsp;matches',
    step_3_text: '<strong>3. Meet & build</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;your family',
    cta_bottom_title: 'Take the First Step Toward Your Family',
    btn_fill_form: 'Complete Questionnaire'
  },
  HE: {
    nav_how: 'איך זה עובד',
    nav_about: 'על הפלטפורמה',
    nav_security: 'אבטחה ופרטיות',
    nav_faq: 'שאלות נפוצות',
    btn_login: 'כניסה',
    btn_create_nav: 'יצירת פרופיל',
    hero_title: 'שידוך יהודי<br />להקמת בית בישראל',
    hero_subtitle: 'פלטפורמה קהילתית אמינה המסייעת<br />לפגוש בן/בת זוג ראויים ולהקים משפחה.',
    btn_create_hero: 'יצירת פרופיל',
    btn_how_hero: 'איך זה עובד',
    track_a_title: 'שידוך פרטי מודרני',
    track_a_desc: 'התאמה חכמה לפי הערכים והשאיפות שלך',
    track_b_title: 'שידוך מסורתי עם שדכן',
    track_b_desc: 'ליווי אישי של שדכן מנוסה מהקהילה',
    feat_1: 'פרופילים מאומתים',
    feat_2: 'דיסקרטיות מלאה',
    feat_3: 'התאמה חכמה',
    feat_4: 'ליווי שדכן',
    how_heading: 'איך זה עובד',
    step_1_text: '<strong>1. מלאו</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;את השאלון',
    step_2_text: '<strong>2. קבלו</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;הצעות<br />&nbsp;&nbsp;&nbsp;&nbsp;מתאימות',
    step_3_text: '<strong>3. הכירו</strong><br />&nbsp;&nbsp;&nbsp;&nbsp;והקימו משפחה',
    cta_bottom_title: 'עשו את הצעד הראשון למשפחה שלכם',
    btn_fill_form: 'מילוי שאלון'
  }
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.RU;
  document.getElementById('current-lang-label').textContent = lang;
  document.querySelectorAll('.lang-option').forEach((btn) => {
    btn.classList.toggle('active', btn.textContent.includes(lang));
  });
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

// Modal Helpers
function openModal(id) {
  const dlg = document.getElementById(id);
  if (dlg && typeof dlg.showModal === 'function') {
    dlg.showModal();
  }
}

function closeModal(id) {
  const dlg = document.getElementById(id);
  if (dlg) dlg.close();
}

function openLoginModal() {
  openModal('modal-login');
}

function openRegistrationModal() {
  goToRegStep(1);
  openModal('modal-register');
}

function goToRegStep(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('reg-step-' + i);
    if (el) el.style.display = i === stepNum ? 'block' : 'none';
  }
  const dots = document.querySelectorAll('#wizard-dots .wizard-step-dot');
  dots.forEach((d, idx) => {
    d.classList.toggle('active', idx < stepNum);
  });
}

function selectRole(role) {
  document.getElementById('role-self').classList.toggle('selected', role === 'self');
  document.getElementById('role-parent').classList.toggle('selected', role === 'parent');
}

function selectTrackChoice(track) {
  document.getElementById('track-self').classList.toggle('selected', track === 'modern');
  document.getElementById('track-shadchan').classList.toggle('selected', track === 'trad');
}

function completeRegistration() {
  closeModal('modal-register');
  switchToDashboard();
}

// Switch between Guest Landing Page and Logged-In Dashboard
function switchToDashboard() {
  document.getElementById('guest-view').classList.add('hidden');
  document.getElementById('dashboard-view').classList.add('active');
  document.getElementById('demo-pill-label').textContent = 'Режим просмотра: Личный кабинет (Давид)';
  document.getElementById('demo-pill-btn').textContent = '← Вернуться на страницу без регистрации';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchToLanding() {
  document.getElementById('dashboard-view').classList.remove('active');
  document.getElementById('guest-view').classList.remove('hidden');
  document.getElementById('demo-pill-label').textContent = 'Режим просмотра: Гостевая (без регистрации)';
  document.getElementById('demo-pill-btn').textContent = 'Открыть Кабинет Давида →';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDemoView() {
  const isDash = document.getElementById('dashboard-view').classList.contains('active');
  if (isDash) {
    switchToLanding();
  } else {
    switchToDashboard();
  }
}

function setDashboardMode(mode) {
  document.getElementById('tab-modern').classList.toggle('active', mode === 'modern');
  document.getElementById('tab-trad').classList.toggle('active', mode === 'trad');
}

// Candidate Modal Data
const CANDIDATES = {
  rachel: {
    name: 'Анализ совместимости: Рахель, 29',
    img: 'assets/cand-rachel.png',
    score: '95% совместимость',
    meta: '📍 Вена, Австрия • Учитель • Община JRCV'
  },
  miriam: {
    name: 'Анализ совместимости: Мириам, 27',
    img: 'assets/cand-miriam.png',
    score: '92% совместимость',
    meta: '📍 Вена, Австрия • Дизайнер • Ашкеназские корни'
  },
  esther: {
    name: 'Анализ совместимости: Эстер, 31',
    img: 'assets/cand-esther.png',
    score: '89% совместимость',
    meta: '📍 Вена, Австрия • Маркетолог • Традиционный дом'
  },
  leah: {
    name: 'Анализ совместимости: Лея, 28',
    img: 'assets/cand-leah.png',
    score: '87% совместимость',
    meta: '📍 Мюнхен / Европа (готова к переезду в Вену) • Психолог'
  }
};

function openCandidateModal(key) {
  const c = CANDIDATES[key] || CANDIDATES.rachel;
  document.getElementById('cand-modal-name').textContent = c.name;
  document.getElementById('cand-modal-img').src = c.img;
  document.getElementById('cand-modal-score').textContent = c.score;
  document.getElementById('cand-modal-meta').textContent = c.meta;
  openModal('modal-candidate');
}

// Info / Track Modals
const INFO_CONTENT = {
  modern: {
    title: 'Контур А: Современный приватный шидух',
    html: `
      <p style="font-size:16px; line-height:1.55; margin-bottom:14px;">
        <strong>Идеально для светской, традиционной и Modern Orthodox молодёжи Вены и Европы (DACH).</strong>
      </p>
      <ul style="padding-left:20px; line-height:1.65; font-size:15px; margin-bottom:18px;">
        <li><strong>Никакой «витрины»:</strong> закрытая база без публичного каталога всех анкет. Алгоритм присылает 3–5 лучших совпадений в день.</li>
        <li><strong>Контроль фотографий:</strong> режим размытия (Blur) до взаимной симпатии или открытие только верифицированным участникам.</li>
        <li><strong>Правило 72 часов:</strong> защита от гостинга — неактивные профили автоматически переводятся в спящий режим.</li>
        <li><strong>Кнопка «Позвать шадхана»:</strong> в любой момент можно подключить ментора/шадхана JRCV прямо из диалога.</li>
      </ul>
      <button type="button" class="btn-gold" style="height:46px; padding:0 28px; font-size:16px;" onclick="closeModal('modal-info'); openRegistrationModal();">
        Создать профиль в Контуре А →
      </button>
    `
  },
  traditional: {
    title: 'Контур Б: Традиционный шидух с шадханом',
    html: `
      <p style="font-size:16px; line-height:1.55; margin-bottom:14px;">
        <strong>Индивидуальное сопровождение с соблюдением Галахи и традиционных семейных ценностей (модель Canopy 2.0).</strong>
      </p>
      <ul style="padding-left:20px; line-height:1.65; font-size:15px; margin-bottom:18px;">
        <li><strong>Анонимизированные резюме:</strong> ценности, религиозный вектор и планы на семью без публикации имени и фото.</li>
        <li><strong>Семейные профили:</strong> официальная возможность заполнения анкеты родителями или родственниками кандидата.</li>
        <li><strong>Институт Бирурим:</strong> проверка рекомендателей и сопровождение шадхана на этапе взаимного интереса.</li>
        <li><strong>Режим Freeze Mode:</strong> когда пара активно встречается, анкеты временно замораживаются для других предложений.</li>
      </ul>
      <button type="button" class="btn-gold" style="height:46px; padding:0 28px; font-size:16px;" onclick="closeModal('modal-info'); openRegistrationModal();">
        Начать работу с шадханом →
      </button>
    `
  },
  platform: {
    title: 'Об экосистеме SHIDDUCH (JRCV Вена)',
    html: `
      <p style="font-size:15.5px; line-height:1.55; margin-bottom:12px;">
        Платформа создана под эгидой общины <strong>JRCV (Вена)</strong> для русскоязычных евреев Австрии, региона DACH (Германия, Швейцария), Европы и Израиля.
      </p>
      <p style="font-size:15px; line-height:1.55; margin-bottom:14px;">
        Единая база кандидатов объединяет <strong>два взаимосвязанных направления</strong>: современный алгоритмический подбор и классический шадханут с участием раввинов и шадханов общины.
      </p>
      <div style="background:#FCF7EE; border:1px solid #E5D4B9; border-radius:14px; padding:14px; font-size:14.5px; line-height:1.5;">
        ✨ <strong>JRCV Date Concierge:</strong> встроенный гид по лучшим кошерным кафе и лобби отелей Вены с генерацией QR-кода на бесплатный кофе для пар на первом свидании.
      </div>
    `
  },
  security: {
    title: 'Многоуровневая верификация и GDPR',
    html: `
      <p style="font-size:15px; line-height:1.55; margin-bottom:12px;">
        На платформе действуют <strong>3 независимых уровня подтверждения</strong>, которые не подменяют друг друга:
      </p>
      <ol style="padding-left:20px; line-height:1.65; font-size:15px; margin-bottom:14px;">
        <li><strong>Личность подтверждена:</strong> сверка документа и защита от дублирующихся/фейковых аккаунтов.</li>
        <li><strong>Данные и семейный статус проверены:</strong> модерация анкеты и проверка наличия Гета при разводе.</li>
        <li><strong>Еврейский статус проверен раввином:</strong> через «Зелёный коридор JRCV», поручителей или «Закрытый сейф документов» (файлы автоматически удаляются после проверки по Ст. 9 GDPR ЕС).</li>
      </ol>
    `
  },
  verified: {
    title: '6 этапов верификации кандидатов',
    html: `
      <p style="font-size:15px; line-height:1.6;">
        1. Подтверждение телефона (SMS/Telegram) и email.<br/>
        2. Подтверждение личности и защита от дубликатов.<br/>
        3. Проверка семейного положения (включая наличие Гета).<br/>
        4. Галахическая проверка еврейского статуса раввином.<br/>
        5. Модерация полноты и непротиворечивости анкеты.<br/>
        6. Присвоение бейджей верификации и допуск к подбору.
      </p>
    `
  },
  privacy: {
    title: 'Приватность и защита от «витрины»',
    html: `
      <p style="font-size:15px; line-height:1.6;">
        • Скрытие фамилии и контактов до момента взаимного согласия.<br/>
        • 3 режима видимости фотографий (Открыто верифицированным / Blur-размытие / Только через шадхана).<br/>
        • Защита фотографий от скачивания и водяные знаки.<br/>
        • Полное соответствие европейскому регламенту GDPR (Art. 9 Special Categories of Personal Data).
      </p>
    `
  },
  algorithm: {
    title: 'Алгоритм совместимости (Matching Engine)',
    html: `
      <p style="font-size:15px; line-height:1.55; margin-bottom:10px;">
        Двухэтапная система интеллектуального подбора:
      </p>
      <p style="font-size:14.5px; line-height:1.55; margin-bottom:10px;">
        <strong>Этап 1. Жёсткие стоп-факторы (Hard Filters):</strong> верификация, галахический фильтр Коэна, матрица географии/релокации, умный допуск по возрасту (±2 года) и росту (±3 см) при скоринге 85%+.
      </p>
      <p style="font-size:14.5px; line-height:1.55;">
        <strong>Этап 2. Взвешенный скоринг (100 баллов):</strong><br/>
        • Религиозный вектор «Сейчас vs Через 5 лет» — <strong>35 баллов</strong><br/>
        • Модель семьи и планы на детей — <strong>25 баллов</strong><br/>
        • Культурный код и языки общения — <strong>15 баллов</strong><br/>
        • Психотип, образование и интересы — <strong>15 баллов</strong><br/>
        • Индекс вовлечённости (Activity Score) — <strong>10 баллов</strong>
      </p>
    `
  },
  shadchan: {
    title: 'Сопровождение шадхана (Рав Ицхак и команда JRCV)',
    html: `
      <p style="font-size:15px; line-height:1.6; margin-bottom:14px;">
        В кабинете шадхана (CRM) работает 6-колоночная Канбан-доска: от 10-минутного велком-звонка и Split-Screen сравнения анкет до последовательной подачи (Sequential Pitch), сбора рекомендаций (Бирурим) и деликатного сбора обратной связи наутро после свидания.
      </p>
      <button type="button" class="btn-gold" style="height:44px; padding:0 24px; font-size:15px;" onclick="closeModal('modal-info'); openRegistrationModal();">
        Записаться на знакомство с шадханом →
      </button>
    `
  },
  how: {
    title: 'Как работает платформа SHIDDUCH',
    html: `
      <p style="font-size:15.5px; line-height:1.6; margin-bottom:14px;">
        <strong>Шаг 1. Быстрая анкета (3 этапа):</strong> заполните профиль лично или вместе с семьёй, укажите свой религиозный вектор и предпочтения («Обязательные», «Желательные», «Второстепенные»).<br/><br/>
        <strong>Шаг 2. Верификация и подбор:</strong> пройдите мягкую проверку через общину JRCV и получайте персональные рекомендации с детальным объяснением совместимости.<br/><br/>
        <strong>Шаг 3. Знакомство и свидание:</strong> общайтесь в защищённом чате или через шадхана и используйте гид JRCV Date Concierge для первой встречи.
      </p>
    `
  },
  faq: {
    title: 'Часто задаваемые вопросы (FAQ)',
    html: `
      <div style="font-size:14.5px; line-height:1.55; display:flex; flex-direction:column; gap:10px;">
        <div><strong>Бесплатна ли регистрация?</strong><br/>Да, базовый доступ бесплатен для кандидатов, а после создания семьи работает модель благодарности «Pay-it-Forward» / Шадханут в фонд проекта.</div>
        <div><strong>Увидят ли знакомые мою анкету в открытом поиске?</strong><br/>Нет! На сайте нет открытого каталога. В Контуре А анкеты видят только подобранные алгоритмом кандидаты, а в Контуре Б фото и имя полностью скрыты.</div>
        <div><strong>Как установить приложение на телефон?</strong><br/>Платформа работает по технологии PWA: откройте сайт в браузере iPhone или Android и нажмите «Установить на экран» — с мгновенными уведомлениями в Telegram/WhatsApp.</div>
      </div>
    `
  },
  filters: {
    title: 'Система фильтров: Обязательные и Предпочтительные',
    html: `
      <p style="font-size:15px; line-height:1.6;">
        Алгоритм разделяет ваши критерии на <strong>Обязательные (Hard Filters)</strong>, <strong>Желательные</strong> и <strong>Второстепенные</strong> по 10 параметрам: возраст, география и релокация (Вена / DACH / Израиль), семейное положение и дети, соблюдение Шаббата и Кашрута, галахический статус, образование, языки и семейные ценности.
      </p>
    `
  },
  messages: {
    title: 'Сообщения и уведомления (Правило 72 часов)',
    html: `
      <p style="font-size:15px; line-height:1.6;">
        • <strong>Рахель (10:24):</strong> «Шалом, Давид! Рада нашему совпадению в JRCV...»<br/>
        • <strong>Шадхан Рав Ицхак (Вчера):</strong> «У меня для вас отличное предложение с совместимостью 95%...»<br/>
        • <strong>Бот JRCV (Утро после встречи):</strong> деликатный сбор обратной связи после первого свидания.
      </p>
    `
  },
  concierge: {
    title: 'JRCV Date Concierge — Гид по свиданиям в Вене',
    html: `
      <p style="font-size:15px; line-height:1.6;">
        Для каждой совпавшей пары система открывает подборку лучших мест для 1-го и 2-го свидания в Вене (уютные лобби отелей в 1-м районе, кошерные кафе в Леопольдштадте с указанием экшера) и генерирует <strong>QR-код на два бесплатных кофе с десертом от JRCV</strong>!
      </p>
    `
  }
};

function openTrackModal(type) {
  openInfoModal(type === 'modern' ? 'modern' : 'traditional');
}

function openInfoModal(key) {
  const item = INFO_CONTENT[key] || INFO_CONTENT.platform;
  document.getElementById('info-modal-title').textContent = item.title;
  document.getElementById('info-modal-content').innerHTML = item.html;
  openModal('modal-info');
}
