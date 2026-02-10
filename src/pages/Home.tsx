import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Zap, Home as HomeIcon, Smartphone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard, SEO, SectionTitle } from '@/components/ui-custom';

export function Home() {
  return (
    <>
      <SEO 
        title="الرئيسية | سمارتس هومز - خبراء المنازل الذكية"
        description="سمارتس هومز هي شريكك الموثوق في تحويل منزلك إلى منزل ذكي متكامل في الرياض."
        pathname="/"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            اجعل منزلك <span className="text-amber-400">ذكياً</span> اليوم
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            نقدم أحدث حلول الأتمتة المنزلية والأنظمة الذكية لتوفير الراحة والأمان في منزلك.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/solutions">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                استكشف حلولنا
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="لماذا تختار سمارتس هومز؟" 
            subtitle="نحن نجمع بين التكنولوجيا المتقدمة والخبرة العميقة لنقدم لك أفضل تجربة منزل ذكي."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <GlassCard className="p-6 text-center">
              <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">أمان متكامل</h3>
              <p className="text-slate-400">أنظمة حماية متطورة تراقب منزلك على مدار الساعة.</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <Zap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">كفاءة الطاقة</h3>
              <p className="text-slate-400">تحكم ذكي في الإضاءة والتكييف لتقليل استهلاك الكهرباء.</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <Smartphone className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">تحكم سهل</h3>
              <p className="text-slate-400">تحكم في كل تفاصيل منزلك من خلال تطبيق واحد بسيط.</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
