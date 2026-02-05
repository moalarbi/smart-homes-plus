import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_DISPLAY, EMAIL, WHATSAPP_LINK, COMPANY_NAME } from '@/data/company';

const quickLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '/about' },
  { label: 'المنتجات', href: '/products' },
  { label: 'الحلول', href: '/solutions' },
  { label: 'تواصل معنا', href: '/contact' },
];

const services = [
  { label: 'المنزل الذكي', href: '/solutions#smart-home' },
  { label: 'حلول KNX', href: '/solutions#knx' },
  { label: 'فلل فاخرة', href: '/solutions#villa' },
  { label: 'فنادق GRMS', href: '/solutions#grms' },
  { label: 'الأفلام الذكية', href: '/products#films' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            جاهز ترتّب بيتك الذكي؟
          </h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 w-full sm:w-auto"
              >
                تواصل عبر واتساب
              </Button>
            </a>
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 ml-2" />
                {PHONE_DISPLAY}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-lg">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              نحوّل الفلل والشقق والمنشآت إلى مساحات ذكية: راحة، أمان، توفير طاقة، وتحكم كامل.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>الرياض - المملكة العربية السعودية<br />نخدم جميع أحياء الرياض</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} {COMPANY_NAME}. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="#" className="text-slate-500 hover:text-slate-400 transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="#" className="text-slate-500 hover:text-slate-400 transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
