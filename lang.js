/* AB Tech - language system: English / Italiano / العربية (Egyptian, respectful)
   - loaded automatically by shared.js on every page
   - translates every text node + placeholders / aria-labels / titles
   - Arabic: Cairo font + RTL text only (layout is not mirrored)
   - choice is saved in localStorage ("ab_lang") and shared by all pages
   To translate a new page: add its English sentences to DICT below ([English, Italiano, العربية]).
   Open the browser console and run  ABL.missing()  to list every text that is still untranslated. */
(function () {
  if (window.ABL) return;

  var LS; try { LS = localStorage } catch (e) { LS = null }
  var LANGS = [
    { c: 'en', n: 'English', s: 'EN' },
    { c: 'it', n: 'Italiano', s: 'IT' },
    { c: 'ar', n: 'العربية', s: 'AR' }
  ];
  var IDX = { en: -1, it: 0, ar: 1 };

  /* ======================= DICTIONARY: [English, Italiano, العربية] ======================= */
  var DICT = [
    /* ---- header / drawer (shared.js) ---- */
    ['Home', 'Home', 'الرئيسية'],
    ['Why AB?', 'Perché AB?', 'ليه AB؟'],
    ['Services', 'Servizi', 'خدماتنا'],
    ['Contact', 'Contatti', 'تواصل معنا'],
    ['Login', 'Accedi', 'تسجيل الدخول'],
    ['Dashboard', 'Dashboard', 'لوحة التحكم'],
    ['Logout', 'Esci', 'تسجيل الخروج'],
    ['Install app', 'Installa l’app', 'ثبّت التطبيق'],
    ['Theme color', 'Colore del tema', 'لون الموقع'],
    ['Language', 'Lingua', 'اللغة'],
    ['Main', 'Principale', 'التنقل الرئيسي'],
    ['Menu', 'Menu', 'القائمة'],
    ['Color', 'Colore', 'اللون'],
    ['Close', 'Chiudi', 'إغلاق'],
    ['To install: tap the Share button in Safari, then "Add to Home Screen".',
      'Per installare: tocca il pulsante Condividi in Safari, poi “Aggiungi alla schermata Home”.',
      'للتثبيت: دوس على زر المشاركة في Safari، وبعدين اختار "إضافة إلى الشاشة الرئيسية".'],

    /* ---- numbers strip ---- */
    ['Years of experience', 'Anni di esperienza', 'سنين خبرة'],
    ['Projects built', 'Progetti realizzati', 'مشاريع اتنفذت'],
    ['Usual reply time', 'Tempo medio di risposta', 'مدة الرد المعتادة'],
    ['Languages', 'Lingue', 'لغات'],

    /* ---- page title ---- */
    ['AB Tech — Websites & Apps', 'AB Tech — Siti web e app', 'AB Tech — مواقع وتطبيقات'],

    /* ---- hero ---- */
    ['We build websites & apps.', 'Realizziamo siti web e app.', 'بنبني مواقع وتطبيقات.'],
    ['AB Tech designs and develops fast, modern websites, web apps and mobile applications for businesses that want to grow online.',
      'AB Tech progetta e sviluppa siti web, web app e applicazioni mobile veloci e moderne per le aziende che vogliono crescere online.',
      'AB Tech بتصمّم وبتطوّر مواقع وتطبيقات ويب وتطبيقات موبايل سريعة وعصرية للشركات اللي عايزة تكبر أونلاين.'],
    ['Request a project ↗', 'Richiedi un progetto ↗', 'اطلب مشروعك ↗'],
    ['Why AB Tech', 'Perché AB Tech', 'ليه AB Tech'],
    ['Scroll down', 'Scorri verso il basso', 'انزل لتحت'],
    ['We build', 'Realizziamo', 'بنبني'],
    ['websites &', 'siti web e', 'مواقع و'],
    ['apps.', 'app.', 'تطبيقات.'],
    ['AB Tech designs and develops fast, modern websites, web apps and',
      'AB Tech progetta e sviluppa siti web, web app e',
      'AB Tech بتصمّم وبتطوّر مواقع وتطبيقات ويب سريعة'],
    ['mobile applications for businesses that want to grow online.',
      'app mobile veloci e moderne per le aziende che vogliono crescere online.',
      'وتطبيقات موبايل عصرية للشركات اللي عايزة تكبر أونلاين.'],

    /* ---- video ---- */
    ['How we work', 'Come lavoriamo', 'بنشتغل إزاي'],
    ['From the first message to launch day.', 'Dal primo messaggio al giorno del lancio.', 'من أول رسالة لحد يوم الإطلاق.'],
    ['Watch how an idea becomes a live website or app, step by step.',
      'Guarda come un’idea diventa un sito o un’app online, passo dopo passo.',
      'شوف إزاي الفكرة بتتحوّل لموقع أو تطبيق شغّال، خطوة بخطوة.'],
    ['Skip video ↓', 'Salta il video ↓', 'تخطّي الفيديو ↓'],
    ['AB Tech promo video', 'Video promozionale di AB Tech', 'فيديو AB Tech الترويجي'],

    /* ---- why ---- */
    ['Why AB Tech', 'Perché AB Tech', 'ليه AB Tech'],
    ['Built clean. Delivered premium.', 'Costruito pulito. Consegnato premium.', 'شغل نضيف، وتسليم بأعلى جودة.'],
    ['We care about the details you see and the ones you don’t: the look, the code behind it, and the way we work with you from the first message to long after launch.',
      'Ci prendiamo cura dei dettagli che vedi e di quelli che non vedi: l’aspetto, il codice che sta dietro e il modo in cui lavoriamo con te, dal primo messaggio fino a molto dopo il lancio.',
      'بنهتم بالتفاصيل اللي بتشوفها واللي مش بتشوفها: الشكل، والكود اللي وراه، وطريقة شغلنا معاك من أول رسالة لحد بعد الإطلاق بوقت طويل.'],
    ['Clean code', 'Codice pulito', 'كود نضيف'],
    ['Code layers', 'Livelli di codice', 'طبقات الكود'],
    ['Logic that stays out of your way', 'Una logica che non ti intralcia', 'منطق برمجي مش بيعطّلك'],
    ['Small, well-named functions and clear modules. Pages respond instantly, bugs have nowhere to hide, and the next developer can pick it up on day one.',
      'Funzioni piccole con nomi chiari e moduli ordinati. Le pagine rispondono all’istante, i bug non hanno dove nascondersi e il prossimo sviluppatore può partire dal primo giorno.',
      'دوال صغيرة بأسماء واضحة وموديولات منظمة. الصفحات بتستجيب فورًا، والأخطاء مفيهاش مكان تستخبّى فيه، وأي مطوّر جاي بعدك يقدر يكمّل من أول يوم.'],
    ['Markup that means something', 'Markup che ha un significato', 'هيكل HTML ليه معنى'],
    ['Semantic structure gives every page a solid outline: stronger SEO, full accessibility, and content that works before a single script loads.',
      'La struttura semantica dà a ogni pagina uno scheletro solido: SEO più forte, piena accessibilità e contenuti che funzionano prima ancora che si carichi uno script.',
      'البنية الدلالية بتدّي كل صفحة هيكل واضح: سيو أقوى، وإتاحة كاملة لكل المستخدمين، ومحتوى شغّال حتى قبل ما أي سكريبت يتحمّل.'],
    ['Styling that scales with you', 'Uno stile che cresce con te', 'تصميم بيكبر معاك'],
    ['One consistent design system built on reusable tokens. Change a value once and the whole site follows, from a phone to a widescreen.',
      'Un unico design system coerente, basato su token riutilizzabili. Cambi un valore una volta e tutto il sito si aggiorna, dallo smartphone allo schermo ultra-wide.',
      'نظام تصميم واحد متّسق مبني على متغيّرات قابلة لإعادة الاستخدام. بتغيّر قيمة مرة واحدة والموقع كله يتغيّر، من التليفون لحد الشاشات العريضة.'],
    ['Details', 'Dettagli', 'التفاصيل'],

    /* ---- feature cards ---- */
    ['Clean design', 'Design pulito', 'تصميم نضيف'],
    ['Minimal, modern interfaces with a consistent identity. Every element has a purpose, and it looks right on every screen.',
      'Interfacce minimali e moderne con un’identità coerente. Ogni elemento ha uno scopo e sta bene su qualsiasi schermo.',
      'واجهات بسيطة وعصرية بهوية موحّدة. كل عنصر ليه غرض، وشكلها حلو على أي شاشة.'],
    ['Fast & secure', 'Veloce e sicuro', 'سريع وآمن'],
    ['Optimized assets, HTTPS everywhere and safe-by-default code, so pages load in a blink and your customers’ data stays protected.',
      'Risorse ottimizzate, HTTPS ovunque e codice sicuro per impostazione predefinita: le pagine si caricano in un lampo e i dati dei tuoi clienti restano protetti.',
      'ملفات محسّنة، وHTTPS في كل حتة، وكود آمن بشكل افتراضي، فالصفحات بتفتح في لحظة وبيانات عملائك محمية.'],
    ['Load time', 'Tempo di caricamento', 'وقت التحميل'],
    ['0.9 s', '0,9 s', '0.9 ث'],
    ['Active', 'Attivo', 'مفعّل'],
    ['Ready', 'Pronto', 'جاهز'],
    ['Distinctive service', 'Servizio distintivo', 'خدمة مميزة'],
    ['A clear process from idea to launch: honest timelines, regular updates and a team that answers when you need it.',
      'Un processo chiaro dall’idea al lancio: tempi onesti, aggiornamenti regolari e un team che risponde quando serve.',
      'خطوات واضحة من الفكرة لحد الإطلاق: مواعيد صريحة، وتحديثات منتظمة، وفريق بيرد عليك وقت ما تحتاجه.'],
    ['Discovery', 'Analisi', 'الاستكشاف'],
    ['Week 1 · Done', 'Settimana 1 · Fatto', 'الأسبوع 1 · تم'],
    ['Design', 'Design', 'التصميم'],
    ['Week 2 · Done', 'Settimana 2 · Fatto', 'الأسبوع 2 · تم'],
    ['Development', 'Sviluppo', 'التطوير'],
    ['Week 3–5 · 68%', 'Settimana 3–5 · 68%', 'الأسبوع 3–5 · ٦٨٪'],
    ['Launch', 'Lancio', 'الإطلاق'],
    ['Week 6', 'Settimana 6', 'الأسبوع 6'],
    ['VIP care', 'Assistenza VIP', 'رعاية VIP'],
    ['Priority support, fast response and dedicated attention for our premium clients, before and after launch.',
      'Supporto prioritario, risposte rapide e attenzione dedicata ai nostri clienti premium, prima e dopo il lancio.',
      'دعم أولوية، وسرعة في الرد، واهتمام مخصّص لعملائنا المميزين، قبل الإطلاق وبعده.'],
    ['Priority support', 'Supporto prioritario', 'دعم أولوية'],
    ['online', 'online', 'متصل'],
    ['Launch is tomorrow, we need a quick fix', 'Il lancio è domani, ci serve una correzione rapida', 'الإطلاق بكره، محتاجين إصلاح سريع'],
    ['On it! Fixed and deployed', 'Ci pensiamo! Risolto e pubblicato', 'شغّالين عليه! اتصلّح واتنشر'],
    ['Avg. response', 'Risposta media', 'متوسط الرد'],
    ['< 15 min', '< 15 min', '< 15 دقيقة'],
    ['One team, one mind', 'Un team, una mente', 'فريق واحد، عقل واحد'],
    ['Design, code and support sit around the same table. You talk to one team with one plan, so decisions are fast, nothing gets lost between hands, and the result feels built by a single person.',
      'Design, codice e supporto lavorano attorno allo stesso tavolo. Parli con un solo team con un solo piano: le decisioni sono rapide, nulla si perde nei passaggi e il risultato sembra costruito da una sola persona.',
      'التصميم والكود والدعم بيشتغلوا حوالين نفس الترابيزة. بتكلّم فريق واحد بخطة واحدة، فالقرارات سريعة، ومفيش حاجة بتضيع بين الإيدين، والنتيجة بتحسّها متعملة بإيد شخص واحد.'],
    ['in sync', 'sincronizzato', 'متزامن'],
    ['Code', 'Codice', 'كود'],
    ['Design and code move at the same time.', 'Design e codice avanzano insieme, nello stesso momento.', 'التصميم والكود بيمشوا مع بعض في نفس الوقت.'],
    ['Responsive on every device', 'Responsive su ogni dispositivo', 'متجاوب مع كل الأجهزة'],
    ['Arabic & English (RTL)', 'Arabo e inglese (RTL)', 'عربي وإنجليزي (RTL)'],
    ['Fast loading', 'Caricamento veloce', 'تحميل سريع'],
    ['SEO-ready', 'Pronto per la SEO', 'جاهز لمحركات البحث'],
    ['Secure by design', 'Sicuro per progettazione', 'آمن من التصميم'],
    ['Post-launch support', 'Supporto post-lancio', 'دعم بعد الإطلاق'],
    ['Secure', 'Sicuro', 'آمن'],
    ['Service', 'Servizio', 'الخدمة'],
    ['VIP', 'VIP', 'VIP'],
    ['Team', 'Team', 'الفريق'],

    /* ---- services ---- */
    ['What we do', 'Cosa facciamo', 'بنعمل إيه'],
    ['From a first landing page to a custom platform. Choose what your business needs.',
      'Dalla prima landing page a una piattaforma su misura. Scegli ciò di cui ha bisogno la tua attività.',
      'من أول صفحة هبوط لحد منصة مخصّصة. اختار اللي شغلك محتاجه.'],
    ['Websites', 'Siti web', 'مواقع إلكترونية'],
    ['Business sites and landing pages that load fast and turn visitors into clients.',
      'Siti aziendali e landing page che si caricano in fretta e trasformano i visitatori in clienti.',
      'مواقع للشركات وصفحات هبوط بتتحمّل بسرعة وبتحوّل الزوّار لعملاء.'],
    ['Request a project', 'Richiedi un progetto', 'اطلب مشروعك'],
    ["Tell us what you need and we'll get back to you.", 'Dicci di cosa hai bisogno e ti risponderemo.', 'قولنا محتاج إيه وهنرد عليك.'],
    ['Web apps & dashboards', 'Web app e dashboard', 'تطبيقات ويب ولوحات تحكم'],
    ['Login systems, admin panels and custom tools to run your work online.',
      'Sistemi di login, pannelli di amministrazione e strumenti su misura per gestire il tuo lavoro online.',
      'أنظمة تسجيل دخول ولوحات إدارة وأدوات مخصّصة تدير بيها شغلك أونلاين.'],
    ['Web apps', 'Web app', 'تطبيقات ويب'],
    ['Overview', 'Panoramica', 'نظرة عامة'],
    ['Users', 'Utenti', 'المستخدمين'],
    ['Orders', 'Ordini', 'الطلبات'],
    ['Revenue', 'Ricavi', 'الإيرادات'],
    ['Paid', 'Pagato', 'مدفوع'],
    ['Pending', 'In attesa', 'قيد الانتظار'],
    ['Mobile apps', 'App mobile', 'تطبيقات موبايل'],
    ['Cross-platform apps with clean UI, notifications and a scalable backend.',
      'App multipiattaforma con interfaccia pulita, notifiche e un backend scalabile.',
      'تطبيقات متعددة المنصات بواجهة نضيفة وإشعارات وباك إند قابل للتوسّع.'],
    ['Good morning', 'Buongiorno', 'صباح الخير'],
    ['Your orders', 'I tuoi ordini', 'طلباتك'],
    ['Today', 'Oggi', 'النهارده'],
    ['new orders', 'nuovi ordini', 'طلبات جديدة'],
    ['New order #204', 'Nuovo ordine #204', 'طلب جديد #204'],
    ['Just now', 'Adesso', 'دلوقتي'],
    ['Scroll', 'Scorri', 'مرّر'],
    ['Get started', 'Inizia', 'ابدأ دلوقتي'],

    /* ---- approach ---- */
    ['Our approach', 'Il nostro approccio', 'أسلوبنا'],
    ['We don’t just build websites. We build projects that matter.',
      'Non costruiamo solo siti web. Costruiamo progetti che contano.',
      'إحنا مبنبنيش مواقع وبس. إحنا بنبني مشاريع ليها قيمة.'],
    ['Every project gets our full sincerity, dedication and care. We sweat the details, stay with it until it’s right, and measure ourselves by one thing: a world-class result. A complete, professional website where every detail is in place.',
      'Ogni progetto riceve tutta la nostra sincerità, dedizione e cura. Curiamo ogni dettaglio, restiamo sul lavoro finché non è perfetto e ci misuriamo con un solo criterio: un risultato di livello mondiale. Un sito completo e professionale, dove ogni dettaglio è al suo posto.',
      'كل مشروع بياخد منّا كامل الصدق والتفاني والاهتمام. بنهتم بأدق التفاصيل، وبنفضل ماسكين فيه لحد ما يبقى تمام، وبنقيس نفسنا بحاجة واحدة: نتيجة بمستوى عالمي. موقع كامل واحترافي وكل تفصيلة فيه في مكانها.'],
    ['Sincerity', 'Sincerità', 'الصدق'],
    ['Dedication', 'Dedizione', 'التفاني'],
    ['Care', 'Cura', 'الاهتمام'],

    /* ---- projects ---- */
    ['Our projects', 'I nostri progetti', 'مشاريعنا'],
    ['Real platforms we designed and built for real clients. Open any of them right here.',
      'Piattaforme reali che abbiamo progettato e costruito per clienti reali. Aprile direttamente qui.',
      'منصات حقيقية صمّمناها وبنيناها لعملاء حقيقيين. افتح أي واحدة منهم من هنا.'],
    ['Project 01 · Education', 'Progetto 01 · Istruzione', 'المشروع 01 · التعليم'],
    ['English courses · Arabic & English', 'Corsi di inglese · arabo e inglese', 'كورسات إنجليزي · عربي وإنجليزي'],
    ["A complete learning platform for Mr. Shady Nasr's English courses. Every student gets a personal dashboard with lessons, videos and PDFs for their grade, takes exams online, tracks their progress and sees where they rank, while the teacher runs students, grades and exams from one admin panel.",
      'Una piattaforma di apprendimento completa per i corsi di inglese del Prof. Shady Nasr. Ogni studente ha una dashboard personale con lezioni, video e PDF per il proprio livello, sostiene gli esami online, segue i propri progressi e vede la propria posizione in classifica, mentre l’insegnante gestisce studenti, voti ed esami da un unico pannello di amministrazione.',
      'منصة تعليمية متكاملة لكورسات اللغة الإنجليزية للأستاذ شادي نصر. كل طالب بياخد لوحة تحكم شخصية فيها الدروس والفيديوهات وملفات PDF الخاصة بصفّه، وبيمتحن أونلاين، ويتابع تقدّمه ويعرف ترتيبه، والمدرّس بيدير الطلبة والدرجات والامتحانات من لوحة إدارة واحدة.'],
    ['Student dashboard', 'Dashboard dello studente', 'لوحة الطالب'],
    ['Lessons, videos & PDFs', 'Lezioni, video e PDF', 'دروس وفيديوهات وملفات PDF'],
    ['Online exams', 'Esami online', 'امتحانات أونلاين'],
    ['Progress & rankings', 'Progressi e classifiche', 'التقدّم والترتيب'],
    ['Admin panel', 'Pannello di amministrazione', 'لوحة الإدارة'],
    ['QR login', 'Accesso con QR', 'دخول بـ QR'],
    ['Light / dark theme', 'Tema chiaro / scuro', 'وضع فاتح / داكن'],
    ['View project', 'Vedi il progetto', 'شوف المشروع'],
    ['Open project', 'Apri il progetto', 'افتح المشروع'],
    ['Open the English Platform project', 'Apri il progetto English Platform', 'افتح مشروع English Platform'],
    ['Project 02 · Education', 'Progetto 02 · Istruzione', 'المشروع 02 · التعليم'],
    ['Educational platform · Arabic', 'Piattaforma educativa · arabo', 'منصة تعليمية · عربي'],
    ['An educational platform built for students and teachers, with an Arabic-first interface. Students get their own accounts to follow lessons and learning materials, while the team manages content, students and progress from one admin panel.',
      'Una piattaforma educativa pensata per studenti e insegnanti, con un’interfaccia in arabo prima di tutto. Gli studenti hanno il proprio account per seguire lezioni e materiali didattici, mentre il team gestisce contenuti, studenti e progressi da un unico pannello di amministrazione.',
      'منصة تعليمية متعملة للطلبة والمدرّسين، بواجهة عربية أولًا. كل طالب بياخد حسابه الخاص عشان يتابع الدروس والمواد التعليمية، والفريق بيدير المحتوى والطلبة والتقدّم من لوحة إدارة واحدة.'],
    ['Student accounts', 'Account degli studenti', 'حسابات الطلبة'],
    ['Lessons & materials', 'Lezioni e materiali', 'دروس ومواد'],
    ['Arabic interface', 'Interfaccia in arabo', 'واجهة عربية'],
    ['Private project · not open to the public', 'Progetto privato · non aperto al pubblico', 'مشروع خاص · غير متاح للعامة'],
    ['Private project', 'Progetto privato', 'مشروع خاص'],
    ['Project viewer', 'Visualizzatore del progetto', 'عارض المشروع'],
    ['Open in new tab', 'Apri in una nuova scheda', 'افتح في تبويب جديد'],

    /* ---- contact ---- */
    ['Let’s talk', 'Parliamone', 'خلّينا نتكلم'],
    ['Your name', 'Il tuo nome', 'اسمك'],
    ['Your email', 'La tua email', 'بريدك الإلكتروني'],
    ['Tell us about your project', 'Raccontaci il tuo progetto', 'احكيلنا عن مشروعك'],
    ['Send message ↗', 'Invia messaggio ↗', 'ابعت الرسالة ↗'],
    ['Or reach us directly', 'Oppure contattaci direttamente', 'أو كلّمنا مباشرة'],
    ['Pick the channel that suits you', 'Scegli il canale che preferisci', 'اختار القناة اللي تريّحك'],
    ['We read every message and reply fast. Reach us wherever you feel most comfortable.',
      'Leggiamo ogni messaggio e rispondiamo in fretta. Scrivici dove ti senti più a tuo agio.',
      'بنقرا كل رسالة وبنرد بسرعة. كلّمنا في المكان اللي تحس فيه براحتك.'],
    ['Email', 'Email', 'الإيميل'],
    ['Instagram', 'Instagram', 'انستجرام'],
    ['Facebook', 'Facebook', 'فيسبوك'],
    ['TikTok', 'TikTok', 'تيك توك'],
    ['Visit our profile', 'Visita il nostro profilo', 'زور صفحتنا'],
    ['Copy', 'Copia', 'نسخ'],
    ['Copied ✓', 'Copiato ✓', 'اتنسخ ✓'],

    /* ---- login page (login.html) ---- */
    ['Login — AB Tech', 'Accedi — AB Tech', 'تسجيل الدخول — AB Tech'],
    ['Sign up — AB Tech', 'Registrati — AB Tech', 'حساب جديد — AB Tech'],
    ['Reset password — AB Tech', 'Reimposta password — AB Tech', 'تغيير الباسورد — AB Tech'],
    ['Welcome back', 'Bentornato', 'أهلاً بيك تاني'],
    ['Log in to continue to your account.', 'Accedi per continuare con il tuo account.', 'سجّل دخولك عشان تكمّل على حسابك.'],
    ['Create your account', 'Crea il tuo account', 'اعمل حسابك'],
    ['It takes a few seconds. Use your email and a password of at least 6 characters.', 'Ci vogliono pochi secondi. Usa la tua email e una password di almeno 6 caratteri.', 'مش هتاخد غير ثواني. استخدم إيميلك وباسورد من 6 حروف على الأقل.'],
    ['Reset your password', 'Reimposta la tua password', 'غيّر الباسورد بتاعك'],
    ['Enter the email you signed up with and choose a new password.', 'Inserisci l’email con cui ti sei registrato e scegli una nuova password.', 'اكتب الإيميل اللي سجّلت بيه واختار باسورد جديد.'],
    ['Choose login or sign up', 'Scegli accesso o registrazione', 'اختار تسجيل الدخول أو حساب جديد'],
    ['Sign up', 'Registrati', 'حساب جديد'],
    ['Create account', 'Crea account', 'إنشاء الحساب'],
    ['Full name', 'Nome completo', 'الاسم بالكامل'],
    ['you@example.com', 'you@example.com', 'you@example.com'],
    ['Password', 'Password', 'الباسورد'],
    ['New password', 'Nuova password', 'الباسورد الجديد'],
    ['At least 6 characters', 'Almeno 6 caratteri', '6 حروف على الأقل'],
    ['Show', 'Mostra', 'إظهار'],
    ['Hide', 'Nascondi', 'إخفاء'],
    ['Show password', 'Mostra password', 'إظهار الباسورد'],
    ['Hide password', 'Nascondi password', 'إخفاء الباسورد'],
    ['Forgot password?', 'Password dimenticata?', 'نسيت الباسورد؟'],
    ['Reset password', 'Reimposta password', 'غيّر الباسورد'],
    ['Back to login', 'Torna all’accesso', 'رجوع لتسجيل الدخول'],
    ['Caps Lock is on.', 'Il blocco maiuscole è attivo.', 'زر Caps Lock شغّال.'],
    ['Logging in…', 'Accesso in corso…', 'جاري تسجيل الدخول…'],
    ['Creating account…', 'Creazione account…', 'جاري إنشاء الحساب…'],
    ['Enter your full name.', 'Inserisci il tuo nome completo.', 'اكتب اسمك بالكامل.'],
    ['Enter a valid email address.', 'Inserisci un indirizzo email valido.', 'اكتب إيميل صحيح.'],
    ['Your password needs at least 6 characters.', 'La password deve avere almeno 6 caratteri.', 'الباسورد لازم يكون 6 حروف على الأقل.'],
    ['This email is already registered. Switch to Login to continue.', 'Questa email è già registrata. Passa ad Accedi per continuare.', 'الإيميل ده متسجّل قبل كده. روح على تسجيل الدخول وكمّل.'],
    ['Wrong email or password. Check both and try again.', 'Email o password errati. Controlla entrambi e riprova.', 'الإيميل أو الباسورد غلط. راجعهم وجرّب تاني.'],
    ['We can’t find an account with this email.', 'Non troviamo nessun account con questa email.', 'مفيش حساب بالإيميل ده.'],
    ['This account can’t be reset here. Contact the site owner.', 'Questo account non può essere reimpostato qui. Contatta il proprietario del sito.', 'الحساب ده مينفعش يتغيّر الباسورد بتاعه من هنا. كلّم صاحب الموقع.'],
    ['Password updated. Log in with your new password.', 'Password aggiornata. Accedi con la nuova password.', 'الباسورد اتغيّر. سجّل دخولك بالباسورد الجديد.']
  ];

  /* ======================= ENGINE ======================= */
  function norm(s) { return String(s).replace(/[\s\u00a0]+/g, ' ').trim().replace(/[\u2018\u2019]/g, "'") }
  var K = {}, REV = {}, DISP = {};
  DICT.forEach(function (r) {
    var k = norm(r[0]); K[k] = [r[1], r[2]]; DISP[k] = r[0];
    REV[norm(r[1])] = REV[norm(r[1])] || k; REV[norm(r[2])] = REV[norm(r[2])] || k
  });
  var kcache = {}, HAS = /[A-Za-z\u0600-\u06FF]/;
  function keyOf(s) {
    if (!HAS.test(s)) return null;
    var n = norm(s); if (n in kcache) return kcache[n];
    return kcache[n] = (K[n] ? n : (REV[n] || null))
  }
  var lang = 'en', missing = {}, busy = false;
  function pick(k) { return lang === 'en' ? DISP[k] : K[k][IDX[lang]] }
  function t(en) { var k = keyOf(en); return k ? pick(k) : en }

  var SKIP = 'script,style,noscript,textarea,.cst,.code,[data-nt]';
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var store = new WeakMap();

  /* Arabic: only the text itself is RTL (parent of an Arabic text node gets .ar-t); page layout stays exactly like English */
  var AR = /[\u0600-\u06FF]/;
  function mark(n) { var p = n.parentNode; if (p && p.nodeType === 1 && AR.test(n.nodeValue)) p.classList.add('ar-t') }
  function tNode(n) { tNode0(n); if (lang === 'ar') mark(n) }
  function tNode0(n) {
    var v = n.nodeValue, rec = store.get(n);
    if (!rec || rec.last !== v) { rec = { k: keyOf(v), last: v }; store.set(n, rec); if (!rec.k && HAS.test(v) && lang !== 'en') missing[norm(v)] = 1 }
    if (!rec.k) return;
    var out = pick(rec.k); if (norm(v) === norm(out)) return;
    var m = /^(\s*)[\s\S]*?(\s*)$/.exec(v);
    n.nodeValue = rec.last = m[1] + out + m[2]
  }
  function tAttrs(el) {
    var rec = el.__abl || (el.__abl = {});
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i]; if (!el.hasAttribute(a)) continue;
      var v = el.getAttribute(a), r = rec[a];
      if (!r || r.last !== v) { r = rec[a] = { k: keyOf(v), last: v }; if (!r.k && HAS.test(v) && lang !== 'en') missing[norm(v)] = 1 }
      if (!r.k) continue;
      var out = pick(r.k); if (norm(v) === norm(out)) continue;
      el.setAttribute(a, out); r.last = out
    }
  }
  function skipEl(el) { return !!(el && el.closest && el.closest(SKIP)) }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { if (!skipEl(root.parentNode)) tNode(root); return }
    if (root.nodeType !== 1 || skipEl(root)) return;
    tAttrs(root);
    var w = document.createTreeWalker(root, 5, {
      acceptNode: function (n) {
        if (n.nodeType === 3) return 1;
        if (n.matches(SKIP)) { if (n.tagName === 'TEXTAREA') tAttrs(n); return 2 }
        tAttrs(n); return 3
      }
    });
    var n; while ((n = w.nextNode())) if (n.nodeType === 3) tNode(n)
  }

  /* ---- switcher UI ---- */
  var ICON_G = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.4 5.7 12 3z"/></svg>';
  var ICON_C = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var ICON_K = '<svg class="ck" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function switcher(kind) {
    var cur = LANGS.filter(function (l) { return l.c === lang })[0] || LANGS[0];
    return '<div class="abl ' + (kind === 'm' ? 'abl-dr' : 'abl-hd') + '" data-abl>' +
      '<button class="pill ghost abl-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Language">' + ICON_G + '<span class="abl-cur" data-nt>' + cur.s + '</span>' + ICON_C + '</button>' +
      '<ul class="abl-menu" role="listbox" aria-label="Language" data-nt>' +
      LANGS.map(function (l) {
        return '<li role="presentation"><button type="button" role="option" data-lang="' + l.c + '" lang="' + l.c + '" aria-selected="' + (l.c === lang) + '"><span>' + l.n + '</span><small>' + l.s + '</small>' + ICON_K + '</button></li>'
      }).join('') + '</ul></div>'
  }
  function syncUI() {
    var cur = LANGS.filter(function (l) { return l.c === lang })[0];
    [].forEach.call(document.querySelectorAll('.abl'), function (b) {
      var c = b.querySelector('.abl-cur'); if (c) c.textContent = cur.s;
      [].forEach.call(b.querySelectorAll('[data-lang]'), function (o) { o.setAttribute('aria-selected', o.getAttribute('data-lang') === lang ? 'true' : 'false') })
    })
  }
  function closeAll(except) {
    [].forEach.call(document.querySelectorAll('.abl.open'), function (b) {
      if (b === except) return; b.classList.remove('open'); b.querySelector('.abl-btn').setAttribute('aria-expanded', 'false')
    })
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.abl-btn');
    if (btn) {
      var box = btn.closest('.abl'), o = !box.classList.contains('open');
      closeAll(box); box.classList.toggle('open', o); btn.setAttribute('aria-expanded', o ? 'true' : 'false'); return
    }
    var opt = e.target.closest && e.target.closest('.abl [data-lang]');
    if (opt) { set(opt.getAttribute('data-lang')); closeAll(); return }
    if (!(e.target.closest && e.target.closest('.abl'))) closeAll()
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll() });

  /* ---- styles (self-contained: no change to shared.css needed) ---- */
  function css() {
    var s = document.createElement('style'); s.id = 'abl-css';
    s.textContent =
      '.abl{position:relative;display:inline-block}' +
      '.abl-btn{display:inline-flex;align-items:center;gap:7px;cursor:pointer}' +
      '.abl-btn svg{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}' +
      '.abl-btn .chev{width:12px;height:12px;transition:transform .25s}' +
      '.abl.open .abl-btn .chev{transform:rotate(180deg)}' +
      '.abl-cur{font-weight:700;letter-spacing:.04em}' +
      '.abl-menu{position:absolute;top:calc(100% + 10px);inset-inline-end:0;min-width:178px;margin:0;padding:6px;list-style:none;background:#121214;color:#fff;border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 24px 60px -20px rgba(0,0,0,.85);opacity:0;visibility:hidden;transform:translateY(-6px) scale(.98);transform-origin:top;transition:opacity .2s,transform .25s cubic-bezier(.2,.8,.2,1),visibility 0s .25s;z-index:80}' +
      '.abl.open .abl-menu{opacity:1;visibility:visible;transform:none;transition-delay:0s}' +
      '.abl-menu li{margin:0;padding:0;list-style:none}' +
      '.abl-menu button{width:100%;display:flex;align-items:center;gap:10px;padding:11px 12px;border:0;border-radius:10px;background:transparent;color:#fff;font:600 14.5px/1.1 system-ui,-apple-system,"Segoe UI",sans-serif;text-align:start;cursor:pointer;letter-spacing:0}' +
      '.abl-menu button span{flex:1}' +
      '.abl-menu button small{opacity:.5;font-weight:700;font-size:11px;letter-spacing:.06em}' +
      '.abl-menu button:hover,.abl-menu button:focus-visible{background:rgba(255,255,255,.1);outline:0}' +
      '.abl-menu button[aria-selected=true]{background:rgba(255,255,255,.14)}' +
      '.abl-menu .ck{width:16px;height:16px;flex:none;fill:none;stroke:#fff;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;opacity:0}' +
      '.abl-menu button[aria-selected=true] .ck{opacity:1}' +
      /* inside the mobile drawer: the list opens inline */
      '.abl-dr{display:block;margin:2px 0 6px}' +
      '.abl-dr .abl-btn{width:100%;justify-content:flex-start}' +
      '.abl-dr .abl-cur{flex:1;text-align:start}' +
      '.abl-dr .abl-menu{position:static;inset:auto;min-width:0;max-height:0;padding:0 6px;margin:0;border-width:0;opacity:1;visibility:visible;transform:none;overflow:hidden;box-shadow:none;transition:max-height .35s cubic-bezier(.2,.8,.2,1),padding .35s,margin .35s,border-width .35s}' +
      '.abl-dr.open .abl-menu{max-height:220px;padding:6px;margin-top:8px;border-width:1px}' +
      /* Arabic: Cairo font, text runs right-to-left, but the page LAYOUT (columns, cards, animations, header) is NOT mirrored */
      'html[lang=ar] *{letter-spacing:0!important;font-family:\"Cairo\",\"Segoe UI\",\"Noto Sans Arabic\",Tahoma,Arial,system-ui,sans-serif!important}' +
      'html[lang=ar] .cst *,html[lang=ar] .code *{font-family:ui-monospace,Consolas,\"SF Mono\",monospace!important}' +
      /* text goes to the right side of the page; cards, work slider and mock-ups keep the English (LTR) layout; the header and the contact form are mirrored */
      'html[lang=ar] .ar-t{direction:rtl;unicode-bidi:embed;-webkit-text-stroke:.3px currentColor}' +
      'html[lang=ar] h1.ar-t,html[lang=ar] h2.ar-t{-webkit-text-stroke:.7px currentColor}' +
      'html[lang=ar] .cst .ar-t,html[lang=ar] .code .ar-t{-webkit-text-stroke:0}' +
      'html[lang=ar] .feat,html[lang=ar] .pjx-track,html[lang=ar] .pjx-view,html[lang=ar] .pi-text,html[lang=ar] .fc .art,html[lang=ar] .cst,html[lang=ar] .code,html[lang=ar] .pi-shot,html[lang=ar] .pj-br,html[lang=ar] .vx-box,html[lang=ar] .pj-scr{direction:ltr}' +
      'html[lang=ar] .fc,html[lang=ar] .pj{direction:rtl}' +
      /* header mirrored for Arabic: logo on the right, menu order right-to-left, login/language on the left */
      'html[lang=ar] #hdr{direction:rtl}' +
      'html[lang=ar] #hdr :is(.lg,.logo,.brand){direction:ltr}' +
      'html[lang=ar] .ar-t{direction:rtl}' +
      'html[lang=ar] :is(.fc .art,.cst,.code,.pj-br,.vx-box,.pj-scr) .ar-t{direction:ltr}' +
      /* the site picture before the projects: mirrored for Arabic (logo/heading/buttons on the right, orbs on the left) */
      'html[lang=ar] .pg-orb{right:auto;left:-10px}' +
      'html[lang=ar] .pg-orb2{right:auto;left:330px}' +
      'html[lang=ar] .pg-lg{left:auto;right:36px}' +
      'html[lang=ar] .pg-pill{direction:rtl}' +
      'html[lang=ar] .pg-dots{right:auto;left:132px}' +
      'html[lang=ar] .pg-login{right:auto;left:36px}' +
      'html[lang=ar] .pg-h{left:auto;right:64px;text-align:right}' +
      'html[lang=ar] .pg-p{left:auto;right:64px;text-align:right}' +
      'html[lang=ar] .pg-btns{left:auto;right:64px;direction:rtl}' +
      'html[lang=ar] .pg-mouse{left:auto;right:64px}' +
      'html[lang=ar] .pg-row{direction:rtl}' +
      'html[lang=ar] .pg-row div+div{border-left:0;padding-left:4px;border-right:1px solid #e2e2e2;padding-right:24px}' +
      'html[lang=ar] .pm-orb{right:auto;left:-70px}' +
      'html[lang=ar] .pm-orb2{left:auto;right:36px}' +
      'html[lang=ar] .pm-lg{left:auto;right:32px}' +
      'html[lang=ar] .pm-menu{right:auto;left:30px}' +
      'html[lang=ar] .pm-h{left:auto;right:36px;text-align:right}' +
      'html[lang=ar] .pm-p{text-align:right}' +
      'html[lang=ar] .pm-btns{left:auto;right:36px;direction:rtl}' +
      'html[lang=ar] .pm-mouse{left:auto;right:38px}' +
      'html[lang=ar] .pi-text{text-align:right}' +
      'html[lang=ar] .pi-vals{direction:rtl}' +
      'html[lang=ar] .svc-count,html[lang=ar] .wb,html[lang=ar] .is-wb,html[lang=ar] .pjx-count,html[lang=ar] .pjx-bar{direction:ltr}' +
      'html[dir=rtl] .fc:not(.big) .art{right:auto;left:26px}' +
      'html[dir=rtl] .feat,html[dir=rtl] .stage,html[dir=rtl] .wide{left:auto;right:50%;transform:translateX(50%)}' +
      'html[dir=rtl] .abl-menu{transform-origin:top}';
    document.head.appendChild(s);
    if (!document.getElementById('abl-font')) {
      var f = document.createElement('link'); f.id = 'abl-font'; f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300..900&display=swap'; document.head.appendChild(f)
    }
  }

  /* ---- apply ---- */
  function frames(l) {
    [].forEach.call(document.querySelectorAll('iframe'), function (f) { try { f.contentWindow.postMessage({ abLang: l }, '*') } catch (e) { } })
  }
  function set(l, init) {
    if (!(l in IDX)) l = 'en';
    var changed = l !== lang; lang = l;
    try { if (LS) LS.setItem('ab_lang', l) } catch (e) { }
    var de = document.documentElement;
    de.setAttribute('lang', l); de.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    busy = true; walk(de); if (obs) obs.takeRecords(); busy = false;
    syncUI(); frames(l);
    if (changed || init) {
      try { window.dispatchEvent(new CustomEvent('ablang', { detail: l })) } catch (e) { }
      /* let scroll scenes / header indicator re-measure after the text changed */
      [0, 120, 500].forEach(function (d) { setTimeout(function () { window.dispatchEvent(new Event('resize')) }, d) })
    }
  }

  var obs = null;
  function onMut(list) {
    if (busy) return;
    busy = true;
    list.forEach(function (m) {
      if (m.type === 'characterData') { if (!skipEl(m.target.parentNode)) tNode(m.target) }
      else [].forEach.call(m.addedNodes, walk)
    });
    if (obs) obs.takeRecords(); busy = false
  }

  var saved = null;
  try { saved = (new URLSearchParams(location.search)).get('lang') || (LS && LS.getItem('ab_lang')) } catch (e) { }
  if (!(saved in IDX)) saved = 'en';
  lang = saved;

  css();
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  if (lang !== 'en') { busy = true; walk(document.documentElement); busy = false }
  obs = new MutationObserver(onMut);
  obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  addEventListener('message', function (e) { if (e.data && e.data.abLang && e.data.abLang in IDX && e.data.abLang !== lang) set(e.data.abLang) });
  addEventListener('storage', function (e) { if (e.key === 'ab_lang' && e.newValue in IDX && e.newValue !== lang) set(e.newValue) });

  window.ABL = {
    lang: function () { return lang }, set: set, t: t, switcher: switcher, langs: LANGS,
    missing: function () { var a = Object.keys(missing); console.log(a.length + ' untranslated text(s):'); a.forEach(function (x) { console.log(x) }); return a }
  };
})();
