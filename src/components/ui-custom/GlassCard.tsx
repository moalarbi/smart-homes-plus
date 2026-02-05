import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = false,
  padding = 'md',
  onClick,
}: GlassCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-5 md:p-6',
    lg: 'p-6 md:p-8',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative rounded-2xl overflow-hidden',
        'bg-slate-800/40 backdrop-blur-md',
        'border border-slate-700/50',
        'shadow-xl shadow-slate-950/20',
        paddingClasses[padding],
        hover && 'transition-all duration-300 hover:bg-slate-800/60 hover:border-amber-500/30 hover:shadow-amber-500/10 hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
