import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard, SEO, SectionTitle } from '@/components/ui-custom';

export function Contact() {
  return (
    <>
      <SEO 
        title="تواصل معنا | سمارتس هومز - خبراء المنازل الذكية"
        description="تواصل مع فريق سمارتس هومز للحصول على استشارة مجانية حول حلول المنزل الذكي في الرياض."
        pathname="/contact"
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="تواصل معنا" 
            subtitle="نحن هنا للإجابة على استفساراتك ومساعدتك في بناء منزل أحلامك الذكي."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard className="p-6 flex items-start gap-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">اتصل بنا</h3>
                  <p className="text-slate-400">+966 50 000 0000</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">البريد الإلكتروني</h3>
                  <p className="text-slate-400">info@smarthomes-plus.com</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">موقعنا</h3>
                  <p className="text-slate-400">الرياض، المملكة العربية السعودية</p>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form Placeholder */}
            <GlassCard className="p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-white mb-2">الاسم</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 outline-none" placeholder="اسمك الكريم" />
                </div>
                <div>
                  <label className="block text-white mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-white mb-2">الرسالة</label>
                  <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 outline-none h-32" placeholder="كيف يمكننا مساعدتك؟"></textarea>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6">
                  إرسال الرسالة <Send className="mr-2 w-4 h-4" />
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
