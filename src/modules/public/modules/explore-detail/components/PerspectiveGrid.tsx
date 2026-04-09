"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PerspectiveGridProps {
  images: string[];
}

export function PerspectiveGrid({ images }: PerspectiveGridProps) {
  const labels = ["VISTA FRONTAL", "ÁNGULO PERFIL", "POSICIÓN FINAL"];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900/50 p-6 md:p-8 rounded-4xl flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold tracking-widest text-foreground/50 uppercase">FORMA DE MANO Y PERSPECTIVAS</h3>
        <div className="flex gap-2">
          <button className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer group">
              <Image
                src={img}
                alt={labels[idx]}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-[10px] text-center font-bold tracking-widest text-foreground/40 uppercase">
              {labels[idx]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
