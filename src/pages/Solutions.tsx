import { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Home, 
  Network, 
  Building2, 
  Hotel,
  Sunrise,
  LogOut,
  Users,
  Moon,
  Film,
  AlertTriangle,
  LayoutGrid,
  Building,
  Zap,
  Link as LinkIcon,
  Code,
  Wrench,
  PartyPopper,
  Shield,
  TreePine,
  Waves,
  ShieldCheck,
  Settings,
  Key,
  DoorOpen,
  VolumeX,
  Leaf,
  Check,
  ChevronLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GlassCard, SEO, SectionTitle } from '@/components/ui-custom';
import { solutions, comparisonTable, solutionFAQs } from '@/data/solutions';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '@/data/company';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Network,
  Building2,
  Hotel,
  Sunrise,
  LogOut,
  Users,
  Moon,
  Film,
  AlertTriangle,
  LayoutGrid,
  Building,
  Zap,
  Link: LinkIcon,
  Code,
  Wrench,
  PartyPopper,
  Shield,
  TreePine,
  Waves,
  ShieldCheck,
  Settings,
  Key,
  DoorOpen,
  VolumeX,
  Leaf,
};

export function Solutions() {
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="الحلول | سمارتس هومز - حلول المنزل الذكي المتكاملة"
        description="اكتشف حلولنا المتكاملة: المنزل الذكي، KNX، الفلل الفاخرة، وفنادق GRMS. نصمم لك منظومة متكاملة تناسب احتياجاتك."
        pathname="/solutions"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-amber-400 mb-4 px-4 py-1.5 rounded-full bg-amber-500/10">
              حلولنا
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ lineHeight: 1.4 }}>
              حلول تُبنى كنظام واحد
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                مو كأجهزة متفرقة
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8" style={{ lineHeight: 1.8 }}>
              نصمّم لك منظومة متكاملة: إنارة، مناخ، أمان، دخول، ستائر، ترفيه، وتوفير طاقة.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const IconComponent = iconMap[solution.id === 'smart-home' ? 'Home' : 
                                          solution.id === 'knx' ? 'Network' : 
                                          solution.id === 'villa' ? 'Building2' : 'Hotel'] || Home;
              return (
                <GlassCard
                  key={solution.id}
                  hover
                  className={`cursor-pointer transition-all ${
                    activeSolution === solution.id ? 'ring-2 ring-amber-500' : ''
                  }`}
                  onClick={() => setActiveSolution(activeSolution === solution.id ? null : solution.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                        <Badge variant="secondary" className="bg-slate-800 text-slate-400">
                          {solution.subtitle}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-4" style={{ lineHeight: 1.7 }}>
                        {solution.description}
                      </p>
                      <div className="flex items-center text-amber-400 text-sm">
                        <span>التفاصيل</span>
                        <ChevronLeft className={`w-4 h-4 transition-transform ${
                          activeSolution === solution.id ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Details */}
      {activeSolution && (
        <section className="py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {solutions.filter(s => s.id === activeSolution).map((solution) => (
              <div key={solution.id}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    تفاصيل الحل: {solution.title}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveSolution(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    إغلاق
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Features */}
                  <div className="lg:col-span-2 space-y-6">
                    <GlassCard>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        يشمل عادةً
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-400" style={{ lineHeight: 1.7 }}>
                            <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>

                    <GlassCard>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        سيناريوهات جاهزة
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {solution.scenarios.map((scenario, index) => {
                          const IconComponent = iconMap[scenario.icon] || Home;
                          return (
                            <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <IconComponent className="w-5 h-5 text-amber-400" />
                                <h4 className="text-white font-medium">{scenario.title}</h4>
                              </div>
                              <p className="text-slate-400 text-sm" style={{ lineHeight: 1.6 }}>{scenario.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </GlassCard>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <GlassCard>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        لمن تناسب؟
                      </h3>
                      <ul className="space-y-2">
                        {solution.personas.map((persona, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-400">
                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                            <span>{persona}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>

                    <GlassCard>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        المخرجات عند التسليم
                      </h3>
                      <ul className="space-y-2">
                        {solution.deliverables.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-400">
                            <Check className="w-4 h-4 text-amber-400" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>

                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 min-h-[44px]">
                        <MessageCircle className="w-5 h-5 ml-2" />
                        استفسر عن هذا الحل
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Comparison Table - Mobile Cards */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="مقارنة الحلول"
            title="لاسلكي vs سلكي KNX"
            className="mb-12"
          />

          {/* Desktop Table */}
          <div className="hidden md:block">
            <GlassCard className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      {comparisonTable.headers.map((header, index) => (
                        <th
                          key={index}
                          className={`py-4 px-4 text-right font-semibold ${
                            index === 0 ? 'text-white' : 'text-amber-400'
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-slate-700/50 last:border-0">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`py-4 px-4 ${
                              cellIndex === 0 ? 'text-slate-300' : 'text-slate-400'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonTable.rows.map((row, rowIndex) => (
              <GlassCard key={rowIndex}>
                <h4 className="text-white font-semibold mb-3">{row[0]}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-amber-400 text-sm block mb-1">اللاسلكي</span>
                    <span className="text-slate-400">{row[1]}</span>
                  </div>
                  <div>
                    <span className="text-amber-400 text-sm block mb-1">السلكي KNX</span>
                    <span className="text-slate-400">{row[2]}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="قصص نجاح"
            title="نماذج من مشاريعنا"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'فيلا شمال الرياض',
                description: 'منزل ذكي متكامل لفيلا مساحة 800 م² مع KNX',
                tags: ['KNX', 'فيلا', 'متكامل'],
              },
              {
                title: 'شقة استثمارية',
                description: 'حل لاسلكي سريع لشقة 3 غرف مع تحكم كامل',
                tags: ['لاسلكي', 'شقة', 'سريع'],
              },
              {
                title: 'مشروع ضيافة',
                description: 'نظام GRMS لفندق 50 غرفة في الرياض',
                tags: ['GRMS', 'فندق', 'ضيافة'],
              },
            ].map((caseStudy, index) => (
              <GlassCard key={index} hover>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-4">
                  <Building className="w-12 h-12 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4" style={{ lineHeight: 1.6 }}>
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-800 text-slate-400 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="الأسئلة الشائعة"
            title="أسئلة عن الحلول"
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <Accordion type="single" collapsible className="w-full">
                {solutionFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b border-slate-700 last:border-0"
                  >
                    <AccordionTrigger className="text-white hover:text-amber-400 text-right py-4 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 text-right pb-4 leading-relaxed" style={{ lineHeight: 1.8 }}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GlassCard className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              خذ استشارة 15 دقيقة
            </h3>
            <p className="text-slate-400 mb-6" style={{ lineHeight: 1.7 }}>
              نساعدك في اختيار الحل المناسب لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 min-h-[44px]"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </Button>
              </a>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white min-h-[44px]"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
