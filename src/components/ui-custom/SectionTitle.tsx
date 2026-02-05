import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {subtitle && (
        <span className={cn(
          'inline-block text-sm font-medium mb-3 px-4 py-1.5 rounded-full',
          light 
            ? 'bg-amber-500/20 text-amber-600' 
            : 'bg-amber-500/10 text-amber-400'
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        'text-2xl md:text-3xl lg:text-4xl font-bold',
        light ? 'text-slate-900' : 'text-white'
      )}>
        {title}
      </h2>
      <div className={cn(
        'h-1 w-20 rounded-full mt-4',
        centered && 'mx-auto',
        'bg-gradient-to-r from-amber-500 to-orange-600'
      )} />
    </div>
  );
}
