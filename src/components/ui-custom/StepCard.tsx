import { GlassCard } from './GlassCard';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative">
      {/* Connector line */}
      <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent -z-10" />
      
      <GlassCard className="relative">
        {/* Number badge */}
        <div className="absolute -top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold">{number}</span>
        </div>
        
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
