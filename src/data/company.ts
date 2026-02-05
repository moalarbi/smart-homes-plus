import type { CompanyStat, Feature, Step, FAQ } from '@/types';

export const companyStats: CompanyStat[] = [
  {
    value: '10+',
    label: 'سنوات خبرة',
    icon: 'Calendar'
  },
  {
    value: '250+',
    label: 'مشروع منفذ',
    icon: 'Building'
  },
  {
    value: '97%',
    label: 'معدل رضا العملاء',
    icon: 'Heart'
  },
  {
    value: '15+',
    label: 'علامة تجارية',
    icon: 'Award'
  }
];

export const whyChooseUs: Feature[] = [
  {
    title: 'تصميم حل حسب نمط حياتك',
    description: 'نصمم سيناريوهات مخصصة تناسب روتينك اليومي وتفضيلاتك الشخصية، ليس حلولاً جاهزة.',
    icon: 'Palette'
  },
  {
    title: 'تنفيذ احترافي + تسليم موثق',
    description: 'فريق فني معتمد ومدرب على أحدث التقنيات، مع توثيق كامل للنظام عند التسليم.',
    icon: 'CheckCircle'
  },
  {
    title: 'تطبيق موحد للتحكم + لوحات تحكم',
    description: 'تحكم سلس من تطبيق واحد أو من لوحات التحكم الموزعة في جميع الغرف.',
    icon: 'Smartphone'
  },
  {
    title: 'توسعة مستقبلية (Future-proof)',
    description: 'أنظمتنا قابلة للتوسع والتحديث لسنوات قادمة دون الحاجة لإعادة البناء.',
    icon: 'TrendingUp'
  },
  {
    title: 'دعم وصيانة (SLA)',
    description: 'عقود صيانة دورية مع استجابة سريعة ودعم فني على مدار السنة.',
    icon: 'Headphones'
  },
  {
    title: 'أمان وخصوصية',
    description: 'شبكات منفصلة، تشفير البيانات، وصلاحيات محددة لكل مستخدم.',
    icon: 'Shield'
  }
];

export const workMethodology: Step[] = [
  {
    number: 1,
    title: 'زيارة وتحليل الاحتياج',
    description: 'نزور موقعك، نستمع لاحتياجاتك، نحلل المساحة، ونقدم توصياتنا الأولية.'
  },
  {
    number: 2,
    title: 'تصميم الحل + المخططات',
    description: 'نصمم الحل التقني الكامل مع مخططات التمديدات والشبكة والأجهزة.'
  },
  {
    number: 3,
    title: 'توريد وتركيب',
    description: 'نتولى توريد جميع الأجهزة والتركيب بأيدي فنيين معتمدين.'
  },
  {
    number: 4,
    title: 'برمجة السيناريوهات + التدريب',
    description: 'نبرمج السيناريوهات حسب طلبك وندربك على استخدام النظام.'
  },
  {
    number: 5,
    title: 'دعم وصيانة + تحسينات',
    description: 'نقدم الدعم المستمر والصيانة الدورية والتحسينات حسب الحاجة.'
  }
];

export const partners = [
  { name: 'akubela', logo: '/images/partners/akubela.png' },
  { name: 'Akuvox', logo: '/images/partners/akuvox.png' },
  { name: 'Yale', logo: '/images/partners/yale.png' },
  { name: 'KNX', logo: '/images/partners/knx.png' },
  { name: 'ZigBee', logo: '/images/partners/zigbee.png' },
  { name: 'Amazon Alexa', logo: '/images/partners/alexa.png' },
  { name: 'Google Home', logo: '/images/partners/google.png' },
  { name: 'Apple HomeKit', logo: '/images/partners/homekit.png' }
];

export const contactFAQs: FAQ[] = [
  {
    question: 'كم تكلفة تركيب منزل ذكي؟',
    answer: 'تتراوح التكلفة بين 15,000 - 50,000 ريال للشقق و50,000 - 200,000 ريال للفلل حسب المساحة وعدد الأنظمة المطلوبة.'
  },
  {
    question: 'هل تقدمون زيارة مجانية للتقييم؟',
    answer: 'نعم، نقدم زيارة مجانية في الرياض لتقييم الموقع وتقديم عرض تقني ومالي مفصل.'
  },
  {
    question: 'ما هي مناطق خدمتكم؟',
    answer: 'نخدم جميع أحياء الرياض حالياً، مع إمكانية السفر لمدن أخرى للمشاريع الكبيرة.'
  },
  {
    question: 'هل يمكن تركيب النظام في منزل قديم؟',
    answer: 'نعم، معظم الأنظمة اللاسلكية لا تتطلب تكسير أو تعديلات كبيرة. نحدد ذلك بعد الزيارة.'
  }
];

export const productGuide = [
  {
    title: 'مساحة المنزل',
    description: 'يحدد عدد الأجهزة والبوابات المطلوبة'
  },
  {
    title: 'نوع التكييف',
    description: 'مكيفات سبليت أم مركزية أم Fan Coil'
  },
  {
    title: 'عدد دوائر الإضاءة',
    description: 'يحدد عدد المفاتيح الذكية المطلوبة'
  },
  {
    title: 'نوع الشبكة',
    description: 'لاسلكي ZigBee أم سلكي KNX'
  },
  {
    title: 'مستوى الأمان',
    description: 'عدد الكاميرات والحساسات والأقفال'
  },
  {
    title: 'قابلية التوسع',
    description: 'احتياجاتك المستقبلية للتوسع'
  }
];

export const PHONE_NUMBER = '966537311886';
export const PHONE_DISPLAY = '+966 53 731 1886';
export const WHATSAPP_LINK = 'https://wa.me/966537311886';
export const EMAIL = 'info@smartshomes.sa';
export const COMPANY_NAME = 'سمارتس هومز';
export const COMPANY_TAGLINE = 'حلول منزل ذكي تُصمّم لحياتك';
