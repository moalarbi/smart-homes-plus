import { GlassCard } from './GlassCard';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <GlassCard hover className="text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
        <Icon className="w-7 h-7 text-amber-400" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-slate-400 text-sm">
        {label}
      </div>
    </GlassCard>
  );
}
