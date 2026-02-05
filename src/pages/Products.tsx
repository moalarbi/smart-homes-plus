import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Phone, 
  MessageCircle, 
  PanelTop, 
  ToggleRight, 
  Lock, 
  Activity, 
  Thermometer, 
  Blinds, 
  Film, 
  Wifi, 
  Smartphone,
  ChevronLeft,
  Check,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GlassCard, SEO, SectionTitle } from '@/components/ui-custom';
import { products, productCategories, getFeaturedProducts, productFAQs } from '@/data/products';
import { productGuide, WHATSAPP_LINK, PHONE_DISPLAY } from '@/data/company';
import type { Product } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  PanelTop,
  ToggleRight,
  Lock,
  Activity,
  Thermometer,
  Blinds,
  Film,
  Wifi,
  Smartphone,
};

export function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // Enhanced search - includes name, tags, and shortDesc
  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.shortDesc.toLowerCase().includes(searchLower) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const featuredProducts = getFeaturedProducts();

  // Handle scroll fade indicators
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftFade(scrollLeft > 10);
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEO
        title="المنتجات | سمارتس هومز - كاتالوج المنتجات الذكية"
        description="اكتشف مجموعتنا الشاملة من منتجات المنزل الذكي: لوحات تحكم، مفاتيح ذكية، أقفال، حساسات، وأكثر. أفضل الماركات العالمية في الرياض."
        pathname="/products"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-amber-400 mb-4 px-4 py-1.5 rounded-full bg-amber-500/10">
              منتجاتنا
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              كاتالوج المنتجات الذكية
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              مجموعة شاملة من أحدث منتجات المنزل الذكي من أفضل الماركات العالمية
            </p>

            {/* Search - Instant filter */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="ابحث عن منتج بالاسم أو التصنيف..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 py-6 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters - Horizontal Scroll with Fade */}
      <section className="py-6 sticky top-16 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Left Fade */}
            {showLeftFade && (
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            )}
            
            {/* Right Fade */}
            {showRightFade && (
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            )}

            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-opacity ${
                showLeftFade ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-opacity ${
                showRightFade ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            {/* Scrollable Categories */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth px-2"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 scroll-snap-align-start ${
                  selectedCategory === null
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                الكل
              </button>
              {productCategories.map((category) => {
                const IconComponent = iconMap[category.icon] || PanelTop;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 scroll-snap-align-start ${
                      selectedCategory === category.id
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {!selectedCategory && !searchQuery && (
        <section className="py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle
              subtitle="منتجات مميزة"
              title="لوحات التحكم الذكية"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory 
                ? productCategories.find(c => c.id === selectedCategory)?.label 
                : searchQuery 
                  ? 'نتائج البحث'
                  : 'جميع المنتجات'}
            </h2>
            <span className="text-slate-400 text-sm">
              {filteredProducts.length} منتج
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                لا توجد منتجات
              </h3>
              <p className="text-slate-400">
                جرب البحث بكلمات مختلفة أو اختر تصنيف آخر
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Buyer Guide */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="دليل الشراء"
            title="كيف تختار المنتج المناسب؟"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGuide.map((item, index) => (
              <GlassCard key={index} hover>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Single open on mobile */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="الأسئلة الشائعة"
            title="أسئلة متكررة عن المنتجات"
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <Accordion type="single" collapsible className="w-full">
                {productFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b border-slate-700 last:border-0"
                  >
                    <AccordionTrigger className="text-white hover:text-amber-400 text-right py-4 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 text-right pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA - Updated with new copy */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GlassCard className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              أرسل مخطط بيتك الآن واحصل على استشارة مجانية
            </h3>
            <p className="text-slate-400 mb-6">
              نساعدك في اختيار المنتجات المناسبة لمشروعك مع عرض سعر مفصل
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 min-h-[44px]"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل عبر واتساب
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

// Product Card Component - Fixed interactions
function ProductCard({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="cursor-pointer group"
          style={{ pointerEvents: 'auto' }}
        >
          <GlassCard hover className="h-full flex flex-col relative">
            {/* Product Image Placeholder */}
            <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-4 overflow-hidden group-hover:from-slate-600 group-hover:to-slate-700 transition-colors">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                  <PanelTop className="w-8 h-8 text-amber-400" />
                </div>
                <span className="text-slate-500 text-sm">{product.category}</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {product.shortDesc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.slice(0, 3).map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-800 text-slate-300 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Button - Fixed z-index and pointer-events */}
            <div className="pt-4 border-t border-slate-700/50">
              <span 
                className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:text-amber-300 transition-colors"
                style={{ pointerEvents: 'none' }}
              >
                التفاصيل
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </span>
            </div>
          </GlassCard>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-right">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          {/* Image */}
          <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center">
                <PanelTop className="w-10 h-10 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">الوصف</h4>
            <p className="text-slate-400">{product.shortDesc}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">المميزات الرئيسية</h4>
            <ul className="space-y-2">
              {product.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-400">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">المواصفات</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                  <span className="text-slate-500 text-sm block mb-1">{key}</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended For */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">مناسب لـ</h4>
            <div className="flex flex-wrap gap-2">
              {product.recommendedFor.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-amber-500/20 text-amber-400 border-0"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-4 border-t border-slate-700">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 min-h-[44px]">
                <MessageCircle className="w-5 h-5 ml-2" />
                استفسار
              </Button>
            </a>
            <Link to="/contact" className="flex-1">
              <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white min-h-[44px]">
                طلب عرض سعر
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
