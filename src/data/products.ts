import type { Product } from '@/types';

export const products: Product[] = [
  // لوحات التحكم الذكية (Panels)
  {
    id: 'hypanel-ps51',
    name: 'HyPanel PS51',
    category: 'panels',
    shortDesc: 'لوحة تحكم مركزية 4 بوصة متعددة الوظائف',
    keyFeatures: [
      'شاشة لمس متعددة 4 بوصة',
      'نظام Android 10',
      'بوابة ZigBee مدمجة',
      'إنتركم ذكي',
      'مستشعرات مدمجة (قرب، إضاءة، رطوبة)',
      'مفتاح مزدوج مدمج'
    ],
    specs: {
      'حجم الشاشة': '4 بوصة',
      'الدقة': '800×480',
      'نظام التشغيل': 'Android 10',
      'الاتصال': 'WiFi, ZigBee 3.0, Bluetooth',
      'الجهد': '180-260V AC',
      'المعيار': 'EU/CH/US/UK'
    },
    tags: ['لوحة تحكم', 'إنتركم', 'بوابة', 'ZigBee'],
    image: '/images/products/hypanel-ps51.jpg',
    recommendedFor: ['فلل', 'شقق', 'مكاتب']
  },
  {
    id: 'hypanel-pro',
    name: 'HyPanel Pro PG71',
    category: 'panels',
    shortDesc: 'لوحة تحكم احترافية 8 بوصة للمنازل الذكية',
    keyFeatures: [
      'شاشة لمس 8 بوصة عالية الدقة',
      'كاميرا HD مدمجة',
      'تحكم كامل بالمنزل',
      'توافق KNX',
      'وضع توفير الطاقة',
      'تنبيهات ذكية'
    ],
    specs: {
      'حجم الشاشة': '8 بوصة',
      'الدقة': '1280×800',
      'الكاميرا': 'HD 2MP',
      'الاتصال': 'WiFi, ZigBee, KNX',
      'التخزين': '16GB',
      'الذاكرة': '2GB RAM'
    },
    tags: ['لوحة تحكم', 'KNX', 'كاميرا', 'احترافي'],
    image: '/images/products/hypanel-pro.jpg',
    recommendedFor: ['فلل فاخرة', 'قصور', 'مشاريع كبيرة']
  },
  {
    id: 'hypanel-ultra',
    name: 'HyPanel Ultra PH81',
    category: 'panels',
    shortDesc: 'لوحة تحكم فاخرة 10 بوصة بتصميم عصري',
    keyFeatures: [
      'شاشة 10 بوصة بدقة 2K',
      'تصميم نحيف وحواف ضيقة',
      'سطوع 350 شمعة',
      'أداء رسومي متفوق',
      'لوحة عائلية رقمية',
      'تحكم صوتي متقدم'
    ],
    specs: {
      'حجم الشاشة': '10 بوصة',
      'الدقة': '2000×1200',
      'السطوع': '350 nits',
      'المعالج': '4 أنوية',
      'الاتصال': 'WiFi 6, ZigBee 3.0',
      'التخزين': '32GB'
    },
    tags: ['لوحة تحكم', 'فاخر', '2K', 'كبير'],
    image: '/images/products/hypanel-ultra.jpg',
    recommendedFor: ['قصور', 'فلل فاخرة', 'بنتهاوس']
  },
  {
    id: 'hypanel-supreme',
    name: 'HyPanel Supreme PHX1',
    category: 'panels',
    shortDesc: 'لوحة تحكم عليا 12.36 بوصة مع تقنية Air Touch',
    keyFeatures: [
      'شاشة 12.36 بوصة بدقة 2.5K',
      'تقنية Air Touch بالإيماءات',
      'سطوع 400 شمعة',
      'تعرف على الوجه',
      'مساعد صوتي ذكي',
      'مركز تحكم كامل'
    ],
    specs: {
      'حجم الشاشة': '12.36 بوصة',
      'الدقة': '2560×1600',
      'السطوع': '400 nits',
      'المعالج': '8 أنوية',
      'الاتصال': 'WiFi 6, ZigBee, Bluetooth 5',
      'التخزين': '64GB'
    },
    tags: ['لوحة تحكم', 'عليا', 'Air Touch', 'فاخر'],
    image: '/images/products/hypanel-supreme.jpg',
    recommendedFor: ['قصور فاخرة', 'فلل عليا', 'مشاريع VIP']
  },
  
  // المفاتيح الذكية
  {
    id: 'touch-switch-1g',
    name: 'مفتاح لمس 1 مفتاح',
    category: 'switches',
    shortDesc: 'مفتاح لمس زجاجي أنيق بتقنية ZigBee',
    keyFeatures: [
      'لوحة زجاجية عالية الجودة',
      'إطار معدني أنيق',
      'تقنية لمس متقدمة',
      'توافق ZigBee 3.0',
      'تحكم عن بعد',
      'سيناريوهات ذكية'
    ],
    specs: {
      'القنوات': '1',
      'البروتوكول': 'ZigBee 3.0',
      'الجهد': '100-250V AC',
      'الحمل': '10A',
      'الحماية': 'IP20',
      'اللون': 'أبيض/أسود/ذهبي'
    },
    tags: ['مفتاح', 'لمس', 'ZigBee', 'إضاءة'],
    image: '/images/products/touch-switch-1g.jpg',
    recommendedFor: ['شقق', 'فلل', 'مكاتب']
  },
  {
    id: 'touch-switch-2g',
    name: 'مفتاح لمس 2 مفتاح',
    category: 'switches',
    shortDesc: 'مفتاح لمس مزدوج بتصميم عصري',
    keyFeatures: [
      'قناتان منفصلتان',
      'تحكم مستقل لكل قناة',
      'إمكانية التعتيم',
      'جدولة زمنية',
      'تكامل مع المساعد الصوتي',
      'تقنية لمس حساسة'
    ],
    specs: {
      'القنوات': '2',
      'البروتوكول': 'ZigBee 3.0',
      'الجهد': '100-250V AC',
      'الحمل': '10A لكل قناة',
      'الحماية': 'IP20',
      'المقاسات': '86×86mm'
    },
    tags: ['مفتاح', 'لمس', 'مزدوج', 'ZigBee'],
    image: '/images/products/touch-switch-2g.jpg',
    recommendedFor: ['غرف نوم', 'صالات', 'مكاتب']
  },
  {
    id: 'dimmer-module',
    name: 'موديول تعتيم 4 قنوات',
    category: 'switches',
    shortDesc: 'موديول تعتيم احترافي 0-10V',
    keyFeatures: [
      '4 قنوات تعتيم مستقلة',
      'بروتوكول 0-10V',
      'تحكم سلس في الإضاءة',
      'سيناريوهات إضاءة',
      'حماية من الحمل الزائد',
      'تثبيت سهل'
    ],
    specs: {
      'القنوات': '4',
      'البروتوكول': '0-10V',
      'الجهد': '12-24V DC',
      'الحمل': '5A لكل قناة',
      'الاتصال': 'ZigBee 3.0',
      'الحماية': 'IP20'
    },
    tags: ['تعتيم', 'إضاءة', 'موديول', 'احترافي'],
    image: '/images/products/dimmer-module.jpg',
    recommendedFor: ['فلل', 'مطاعم', 'متاجر']
  },
  
  // الأقفال الذكية
  {
    id: 'smart-lock-yale',
    name: 'قفل ذكي Yale',
    category: 'locks',
    shortDesc: 'قفل باب ذكي ببصمة الإصبع وكلمة المرور',
    keyFeatures: [
      'بصمة إصبع سريعة',
      'لوحة مفاتيح رقمية',
      'بطاقات RFID',
      'مفتاح ميكانيكي احتياطي',
      'فتح عن بعد',
      'سجل الدخول'
    ],
    specs: {
      'طريقة الفتح': 'بصمة/رقم/بطاقة/مفتاح',
      'سعة البصمات': '100',
      'سعة الأرقام': '50',
      'البطارية': '4×AA',
      'العمر': '100,000 فتحة',
      'الحماية': 'IP65'
    },
    tags: ['قفل', 'بصمة', 'أمان', 'ذكي'],
    image: '/images/products/smart-lock-yale.jpg',
    recommendedFor: ['فلل', 'شقق', 'مكاتب']
  },
  {
    id: 'smart-lock-august',
    name: 'قفل ذكي August',
    category: 'locks',
    shortDesc: 'قفل باب ذكي يعمل مع الأقفال الموجودة',
    keyFeatures: [
      'تركيب سهل بدون تعديل',
      'فتح تلقائي عند الاقتراب',
      'مشاركة الوصول',
      'تكامل مع المنصات',
      'بطارية طويلة العمر',
      'تنبيهات الأمان'
    ],
    specs: {
      'التوافق': 'معظم الأقفال',
      'الاتصال': 'WiFi, Bluetooth',
      'البطارية': '3×AA',
      'عمر البطارية': '6 أشهر',
      'التطبيق': 'August App',
      'الحماية': 'AES-128'
    },
    tags: ['قفل', 'WiFi', 'بلوتوث', 'سهل'],
    image: '/images/products/smart-lock-august.jpg',
    recommendedFor: ['شقق', 'فلل', 'تأجير']
  },
  {
    id: 'door-phone-e12',
    name: 'هاتف الباب E12',
    category: 'locks',
    shortDesc: 'هاتف باب فيديو ذكي بتصميم نحيف',
    keyFeatures: [
      'كاميرا عريضة الزاوية',
      'رؤية ليلية',
      'كشف الحركة',
      'اتصال ثنائي الاتجاه',
      'فتح عن بعد',
      'مقاوم للعوامل الجوية'
    ],
    specs: {
      'الكاميرا': '2MP',
      'زاوية الرؤية': '110°',
      'الرؤية الليلية': 'IR LED',
      'الاتصال': 'WiFi, Bluetooth',
      'الحماية': 'IP65',
      'التغذية': 'PoE/محول'
    },
    tags: ['هاتف باب', 'فيديو', 'إنتركم', 'أمان'],
    image: '/images/products/door-phone-e12.jpg',
    recommendedFor: ['فلل', 'شقق', 'مباني']
  },
  
  // الحساسات
  {
    id: 'motion-sensor',
    name: 'حساس الحركة',
    category: 'sensors',
    shortDesc: 'حساس حركة ذكي بزاوية واسعة',
    keyFeatures: [
      'زاوية رؤية 120°',
      'مدى 12 متر',
      'كشف دقيق',
      'بطارية طويلة العمر',
      'تنبيهات فورية',
      'سيناريوهات تلقائية'
    ],
    specs: {
      'زاوية الرؤية': '120°',
      'المدى': '12 متر',
      'البروتوكول': 'ZigBee 3.0',
      'البطارية': 'CR123A',
      'عمر البطارية': '2 سنة',
      'الحماية': 'IP20'
    },
    tags: ['حساس', 'حركة', 'أمان', 'ZigBee'],
    image: '/images/products/motion-sensor.jpg',
    recommendedFor: ['جميع المساحات']
  },
  {
    id: 'door-sensor',
    name: 'حساس الباب/النافذة',
    category: 'sensors',
    shortDesc: 'حساس لاسلكي للأبواب والنوافذ',
    keyFeatures: [
      'كشف الفتح/الإغلاق',
      'تنبيهات فورية',
      'تصميم صغير',
      'تركيب سهل',
      'بطارية طويلة',
      'تكامل مع السيناريوهات'
    ],
    specs: {
      'النوع': 'مغناطيسي',
      'البروتوكول': 'ZigBee 3.0',
      'البطارية': 'CR2032',
      'عمر البطارية': '2 سنة',
      'المسافة': '20mm',
      'الحماية': 'IP20'
    },
    tags: ['حساس', 'باب', 'نافذة', 'أمان'],
    image: '/images/products/door-sensor.jpg',
    recommendedFor: ['أبواب', 'نوافذ', 'خزائن']
  },
  {
    id: 'smoke-sensor',
    name: 'حساس الدخان',
    category: 'sensors',
    shortDesc: 'كاشف دخان ذكي مع تنبيهات',
    keyFeatures: [
      'كشف سريع للدخان',
      'إنذار صوتي عالٍ',
      'تنبيهات للهاتف',
      'اختبار ذاتي',
      'بطارية احتياطية',
      'موافقة الدفاع المدني'
    ],
    specs: {
      'نوع الكشف': 'ضوئي',
      'مستوى الإنذار': '85dB',
      'البروتوكول': 'ZigBee 3.0',
      'البطارية': '9V',
      'عمر البطارية': '1 سنة',
      'الموافقة': 'SASO'
    },
    tags: ['حساس', 'دخان', 'سلامة', 'إنذار'],
    image: '/images/products/smoke-sensor.jpg',
    recommendedFor: ['جميع الغرف', 'مطابخ', 'ممرات']
  },
  {
    id: 'flood-sensor',
    name: 'حساس تسرب المياه',
    category: 'sensors',
    shortDesc: 'كاشف تسرب مياه مع تنبيهات فورية',
    keyFeatures: [
      'كشف فوري للتسرب',
      'تنبيهات للهاتف',
      'مؤشر LED',
      'بطارية طويلة',
      'تكامل مع صمامات',
      'تركيب سهل'
    ],
    specs: {
      'نوع الكشف': 'مائي',
      'البروتوكول': 'ZigBee 3.0',
      'البطارية': 'CR2',
      'عمر البطارية': '2 سنة',
      'الحماية': 'IP67',
      'المسافة': 'سطحي'
    },
    tags: ['حساس', 'مياه', 'تسرب', 'حماية'],
    image: '/images/products/flood-sensor.jpg',
    recommendedFor: ['مطابخ', 'حمامات', 'قبو']
  },
  {
    id: 'gas-sensor',
    name: 'حساس الغاز',
    category: 'sensors',
    shortDesc: 'كاشف غاز طبيعي وغاز أول أكسيد الكربون',
    keyFeatures: [
      'كشف غاز طبيعي',
      'كشف CO',
      'إنذار صوتي',
      'تنبيهات للهاتف',
      'موافقة معايير',
      'تكامل مع السيناريوهات'
    ],
    specs: {
      'الغازات': 'طبيعي، CO',
      'مستوى الإنذار': '85dB',
      'البروتوكول': 'ZigBee 3.0',
      'التغذية': '220V AC',
      'الحماية': 'IP20',
      'الموافقة': 'SASO'
    },
    tags: ['حساس', 'غاز', 'سلامة', 'CO'],
    image: '/images/products/gas-sensor.jpg',
    recommendedFor: ['مطابخ', 'مواقف سيارات']
  },
  {
    id: 'air-quality-sensor',
    name: 'حساس جودة الهواء',
    category: 'sensors',
    shortDesc: 'مراقب جودة الهواء متعدد المعلمات',
    keyFeatures: [
      'قياس PM2.5/PM10',
      'قياس CO2',
      'قياس الرطوبة',
      'قياس درجة الحرارة',
      'شاشة عرض',
      'تنبيهات ذكية'
    ],
    specs: {
      'PM2.5': '0-999 μg/m³',
      'CO2': '400-5000 ppm',
      'الرطوبة': '0-100%',
      'الحرارة': '-10°C to 50°C',
      'البروتوكول': 'ZigBee 3.0',
      'التغذية': 'USB-C'
    },
    tags: ['حساس', 'هواء', 'جودة', 'صحة'],
    image: '/images/products/air-quality-sensor.jpg',
    recommendedFor: ['غرف نوم', 'مكاتب', 'صالات']
  },
  
  // HVAC - التكييف والمناخ
  {
    id: 'thermostat-fancoil',
    name: 'ثرموستات Fan Coil',
    category: 'hvac',
    shortDesc: 'جهاز تحكم ذكي لمكيفات Fan Coil',
    keyFeatures: [
      'تحكم دقيق في الحرارة',
      '4 سرعات مروحة',
      'جدولة زمنية',
      'تحكم عن بعد',
      'توفير الطاقة',
      'تكامل مع المنظومة'
    ],
    specs: {
      'النوع': 'Fan Coil',
      'الجهد': '220V AC',
      'السرعات': '4',
      'البروتوكول': 'ZigBee 3.0',
      'الدقة': '±0.5°C',
      'الحماية': 'IP20'
    },
    tags: ['ثرموستات', 'تكييف', 'Fan Coil', 'مناخ'],
    image: '/images/products/thermostat-fancoil.jpg',
    recommendedFor: ['فلل', 'شقق', 'مكاتب']
  },
  {
    id: 'thermostat-heating',
    name: 'ثرموستات التدفئة',
    category: 'hvac',
    shortDesc: 'جهاز تحكم ذكي لأنظمة التدفئة',
    keyFeatures: [
      'تحكم في التدفئة الأرضية',
      'تحكم في المشعات',
      'جدولة يومية/أسبوعية',
      'وضع عدم الوجود',
      'تقارير استهلاك',
      'تحكم متعدد المناطق'
    ],
    specs: {
      'النوع': 'تدفئة',
      'الجهد': '220V AC',
      'الحمل': '16A',
      'البروتوكول': 'ZigBee 3.0',
      'الدقة': '±0.5°C',
      'الحماية': 'IP20'
    },
    tags: ['ثرموستات', 'تدفئة', 'أرضية', 'مناخ'],
    image: '/images/products/thermostat-heating.jpg',
    recommendedFor: ['فلل', 'شقق', 'مناطق باردة']
  },
  {
    id: 'central-ac-controller',
    name: 'جهاز تحكم التكييف المركزي',
    category: 'hvac',
    shortDesc: 'تحكم مركزي لمكيفات التكييف المركزي',
    keyFeatures: [
      'تحكم في وحدات داخلية/خارجية',
      'توافق مع معظم الماركات',
      'تحكم متعدد المناطق',
      'جدولة ذكية',
      'تقارير الطاقة',
      'صيانة وقائية'
    ],
    specs: {
      'النوع': 'مركزي',
      'التوافق': 'معظم الماركات',
      'المناطق': 'حتى 16',
      'البروتوكول': 'RS485, ZigBee',
      'الاتصال': 'WiFi',
      'الحماية': 'IP20'
    },
    tags: ['تكييف', 'مركزي', 'تحكم', 'KNX'],
    image: '/images/products/central-ac-controller.jpg',
    recommendedFor: ['فلل كبيرة', 'مباني', 'مشاريع']
  },
  
  // الستائر والمحركات
  {
    id: 'curtain-motor',
    name: 'محرك ستارة كهربائي',
    category: 'curtains',
    shortDesc: 'محرك ستارة ذكي بتحكم سلس',
    keyFeatures: [
      'حركة سلسة وهادئة',
      'تحكم في النسبة المئوية',
      'سيناريوهات تلقائية',
      'تحكم يدوي احتياطي',
      'توقف عند العائق',
      'تركيب سهل'
    ],
    specs: {
      'القوة': '45W',
      'السرعة': '14 سم/ث',
      'الحمل': '50 كجم',
      'البروتوكول': 'ZigBee 3.0',
      'الضوضاء': '<35dB',
      'الحماية': 'IP20'
    },
    tags: ['ستارة', 'محرك', 'كهربائي', 'تحكم'],
    image: '/images/products/curtain-motor.jpg',
    recommendedFor: ['فلل', 'شقق', 'مكاتب']
  },
  {
    id: 'curtain-module-4g',
    name: 'موديول تحكم ستائر 4 قنوات',
    category: 'curtains',
    shortDesc: 'موديول تحكم في 4 ستائر مستقلة',
    keyFeatures: [
      '4 قنوات مستقلة',
      'تحكم في الاتجاه',
      'توقف دقيق',
      'حماية من الحمل الزائد',
      'تكامل مع السيناريوهات',
      'تركيب في لوحة التوزيع'
    ],
    specs: {
      'القنوات': '4',
      'الجهد': '220V AC',
      'الحمل': '3A لكل قناة',
      'البروتوكول': 'ZigBee 3.0',
      'الحماية': 'IP20',
      'المقاسات': '4 وحدة DIN'
    },
    tags: ['ستارة', 'موديول', '4 قنوات', 'تحكم'],
    image: '/images/products/curtain-module-4g.jpg',
    recommendedFor: ['فلل', 'مشاريع', 'مباني']
  },
  
  // الأفلام الذكية
  {
    id: 'smart-film-clear',
    name: 'فيلم ذكي شفاف',
    category: 'films',
    shortDesc: 'فيلم ذكي يتحول من شفاف إلى معتم',
    keyFeatures: [
      'تحول فوري',
      'تحكم كهربائي',
      'خصوصية فورية',
      'حجب UV',
      'توفير طاقة',
      'سيناريوهات ذكية'
    ],
    specs: {
      'الشفافية': 'عالية/منخفضة',
      'الجهد': '60V AC',
      'الاستهلاك': '<5W/m²',
      'حجب UV': '99%',
      'العمر': '10+ سنوات',
      'الضمان': '5 سنوات'
    },
    tags: ['فيلم', 'ذكي', 'شفاف', 'خصوصية'],
    image: '/images/products/smart-film-clear.jpg',
    recommendedFor: ['فلل فاخرة', 'مكاتب', 'غرف اجتماعات']
  },
  {
    id: 'smart-film-tinted',
    name: 'فيلم ذكي ملون',
    category: 'films',
    shortDesc: 'فيلم ذكي بألوان متعددة',
    keyFeatures: [
      'ألوان متعددة',
      'تحكم في الشفافية',
      'تصميم عصري',
      'حجب أشعة الشمس',
      'توفير تكييف',
      'تخصيص حسب الطلب'
    ],
    specs: {
      'الألوان': 'أزرق/رمادي/برونزي',
      'الجهد': '60V AC',
      'الاستهلاك': '<5W/m²',
      'حجب IR': '85%',
      'العمر': '10+ سنوات',
      'الضمان': '5 سنوات'
    },
    tags: ['فيلم', 'ذكي', 'ملون', 'تصميم'],
    image: '/images/products/smart-film-tinted.jpg',
    recommendedFor: ['واجهات', 'فلل', 'مشاريع فاخرة']
  },
  
  // الشبكة والبوابات
  {
    id: 'gateway-zigbee',
    name: 'بوابة ZigBee',
    category: 'network',
    shortDesc: 'بوابة ZigBee 3.0 للمنزل الذكي',
    keyFeatures: [
      'بروتوكول ZigBee 3.0',
      'سعة 80+ جهاز',
      'نطاق واسع',
      'تحديثات OTA',
      'نسخ احتياطي',
      'تكامل مع المنصات'
    ],
    specs: {
      'البروتوكول': 'ZigBee 3.0',
      'السعة': '80 جهاز',
      'النطاق': '100 متر',
      'الاتصال': 'Ethernet, WiFi',
      'التغذية': 'USB-C',
      'الحماية': 'AES-128'
    },
    tags: ['بوابة', 'ZigBee', 'شبكة', 'مركزي'],
    image: '/images/products/gateway-zigbee.jpg',
    recommendedFor: ['جميع المشاريع']
  },
  {
    id: 'ir-controller',
    name: 'جهاز تحكم IR',
    category: 'network',
    shortDesc: 'جهاز تحكم بالأشعة تحت الحمراء للأجهزة',
    keyFeatures: [
      'قاعدة بيانات ضخمة',
      'تعلم الأوامر',
      'تحكم في التلفاز',
      'تحكم في المكيف',
      'سيناريوهات',
      'صوتي'
    ],
    specs: {
      'النطاق': '360°',
      'المسافة': '10 متر',
      'البروتوكول': 'WiFi, IR',
      'التغذية': 'USB',
      'الحماية': 'IP20',
      'التوافق': '50000+ جهاز'
    },
    tags: ['IR', 'تحكم', 'أجهزة', 'عالمي'],
    image: '/images/products/ir-controller.jpg',
    recommendedFor: ['صالات', 'غرف نوم', 'مكاتب']
  },
  
  // التطبيق والبرمجيات
  {
    id: 'belahome-app',
    name: 'تطبيق BelaHome',
    category: 'software',
    shortDesc: 'تطبيق التحكم بالمنزل الذكي',
    keyFeatures: [
      'واجهة سهلة',
      'تحكم عن بعد',
      'سيناريوهات مخصصة',
      'إشعارات ذكية',
      'مشاركة العائلة',
      'تقارير الطاقة'
    ],
    specs: {
      'المنصات': 'iOS, Android',
      'اللغات': 'عربي، إنجليزي',
      'الأجهزة': 'غير محدود',
      'السحابة': 'آمنة',
      'التحديثات': 'مجانية',
      'الدعم': '24/7'
    },
    tags: ['تطبيق', 'برمجيات', 'تحكم', 'سحابة'],
    image: '/images/products/belahome-app.jpg',
    recommendedFor: ['جميع المستخدمين']
  },
  {
    id: 'knx-software',
    name: 'برمجة KNX',
    category: 'software',
    shortDesc: 'برمجة أنظمة KNX الاحترافية',
    keyFeatures: [
      'تصميم النظام',
      'برمجة ETS',
      'اختبار شامل',
      'توثيق كامل',
      'تدريب المستخدم',
      'دعم فني'
    ],
    specs: {
      'البرنامج': 'ETS6',
      'التوافق': 'KNX',
      'التقرير': 'PDF',
      'الرسم': 'CAD',
      'التدريب': 'شامل',
      'الدعم': 'سنة'
    },
    tags: ['KNX', 'برمجة', 'احترافي', 'ETS'],
    image: '/images/products/knx-software.jpg',
    recommendedFor: ['مشاريع KNX', 'فلل', 'مباني']
  }
];

export const productCategories = [
  { id: 'panels', label: 'لوحات التحكم', icon: 'PanelTop' },
  { id: 'switches', label: 'مفاتيح وديمنغ', icon: 'ToggleRight' },
  { id: 'locks', label: 'أقفال ودخول', icon: 'Lock' },
  { id: 'sensors', label: 'حساسات وأمان', icon: 'Activity' },
  { id: 'hvac', label: 'تكييف ومناخ', icon: 'Thermometer' },
  { id: 'curtains', label: 'ستائر ومحركات', icon: 'Blinds' },
  { id: 'films', label: 'تظليل وأفلام', icon: 'Film' },
  { id: 'network', label: 'شبكة وبوابات', icon: 'Wifi' },
  { id: 'software', label: 'تطبيق وبرمجيات', icon: 'Smartphone' }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => ['hypanel-ps51', 'hypanel-pro', 'smart-lock-yale', 'motion-sensor'].includes(p.id));
};

export const productFAQs = [
  {
    question: 'هل تعمل الأجهزة بدون إنترنت؟',
    answer: 'نعم، الأجهزة تعمل محلياً داخل المنزل عبر شبكة ZigBee. الاتصال بالإنترنت مطلوب فقط للتحكم عن بعد من خارج المنزل.'
  },
  {
    question: 'هل تدعم الأجهزة المساعدين الصوتيين؟',
    answer: 'نعم، معظم أجهزتنا متوافقة مع Alexa و Google Assistant و Siri للتحكم بالأوامر الصوتية.'
  },
  {
    question: 'هل تناسب الأجهزة الفلل أم الشقق فقط؟',
    answer: 'لدينا أجهزة تناسب جميع المساحات: الشقق، الفلل، القصور، والمكاتب. نساعدك في اختيار ما يناسبك.'
  },
  {
    question: 'هل يمكن الدمج مع أنظمة KNX الموجودة؟',
    answer: 'نعم، العديد من أجهزتنا تدعم التكامل مع أنظمة KNX عبر بوابات خاصة.'
  },
  {
    question: 'ما هي مدة التركيب؟',
    answer: 'تتراوح مدة التركيب بين 1-3 أيام للشقق و3-7 أيام للفلل حسب عدد الأجهزة.'
  },
  {
    question: 'ما هي مدة الضمان؟',
    answer: 'نقدم ضمان عامين على جميع الأجهزة مع عقود صيانة اختيارية.'
  },
  {
    question: 'هل تحتاج الأجهزة لتمديدات كهربائية؟',
    answer: 'معظم الأجهزة اللاسلكية لا تحتاج لتمديدات. بعض الأجهزة قد تحتاج لمصدر طاقة بسيط.'
  },
  {
    question: 'هل يوجد صيانة دورية؟',
    answer: 'نعم، نقدم عقود صيانة دورية تشمل التحديثات والفحص الوقائي.'
  }
];
