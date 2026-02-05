import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, Calendar, Building, Heart, Award, Palette, CheckCircle, Smartphone, TrendingUp, Headphones, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard, SEO, SectionTitle, StatCard, FeatureCard, StepCard } from '@/components/ui-custom';
import { companyStats, whyChooseUs, workMethodology, partners, WHATSAPP_LINK, PHONE_DISPLAY } from '@/data/company';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Building,
  Heart,
  Award,
  Palette,
  CheckCircle,
  Smartphone,
  TrendingUp,
  Headphones,
  Shield,
};

export function About() {
  return (
    <>
      <SEO
        title="من نحن | سمارتس هومز - خبراء المنازل الذكية"
        description="تعرف على سمارتس هومز، شريكك الموثوق في تركيب وبرمجة أنظمة المنازل الذكية في الرياض. 10+ سنوات خبرة، 250+ مشروع منفذ."
        pathname="/about"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <GlassCard padding="lg" className="text-center">
              <span className="inline-block text-sm font-medium text-amber-400 mb-4 px-4 py-1.5 rounded-full bg-amber-500/10">
                من نحن
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                سمارتس هومز — حلول منزل ذكي
                <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  تُصمّم لحياتك
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                نحوّل الفلل والشقق والمنشآت إلى مساحات ذكية: راحة، أمان، توفير طاقة، وتحكم كامل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0"
                  >
                    اطلب استشارة
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    استكشف الحلول
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {companyStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || Building;
              return (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="لماذا سمارتس هومز؟"
            title="نختلف لأننا نهتم بالتفاصيل"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="منهجية العمل"
            title="كيف ننفذ مشروعك؟"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {workMethodology.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="الاعتمادات والشراكات"
            title="نستخدم أفضل التقنيات العالمية"
            className="mb-12"
          />

          <GlassCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                      <span className="text-amber-400 font-bold text-lg">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-slate-400 text-sm">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              * akubela من ضمن المنظومة التي نستخدمها
            </p>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              جاهز ترتّب بيتك الذكي؟
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              تواصل معنا الآن واحصل على استشارة مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل عبر واتساب
                </Button>
              </a>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
