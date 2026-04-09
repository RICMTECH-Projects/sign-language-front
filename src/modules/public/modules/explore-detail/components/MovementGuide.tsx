"use client";

import { Circle, Square, Activity } from "lucide-react";

interface Step {
  icon: "circle" | "squiggle" | "square";
  text: string;
}

interface MovementGuideProps {
  steps: Step[];
}

export function MovementGuide({ steps }: MovementGuideProps) {
  const getIcon = (type: Step["icon"]) => {
    switch (type) {
      case "circle": return <Circle size={20} />;
      case "squiggle": return <Activity size={20} />;
      case "square": return <Square size={20} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-[#f5f0ff] dark:bg-indigo-950/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/30">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-widest text-indigo-500 uppercase">INSTRUCCIONES</span>
        <h3 className="text-xl font-serif text-foreground">Guía de Movimiento</h3>
      </div>
      
      <div className="flex flex-col gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 items-start group">
            <div className="mt-1 w-10 h-10 shrink-0 bg-white dark:bg-zinc-900 rounded-xl shadow-sm flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
              {getIcon(step.icon)}
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed pt-1">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
