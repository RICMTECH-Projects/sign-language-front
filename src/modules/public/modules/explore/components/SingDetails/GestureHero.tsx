"use client";

import Image from "next/image";
import { Play, Settings, Maximize } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface GestureHeroProps {
  imageUrl: string;
  title: string;
}

export function GestureHero({ imageUrl, title }: GestureHeroProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-ui",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full aspect-video rounded-4xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-2xl">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="hero-ui w-20 h-20 md:w-24 md:h-24 bg-[#A83F2A] hover:bg-[#A83F2A]/90 transition-transform hover:scale-110 text-white rounded-full flex items-center justify-center shadow-2xl">
          <Play size={40} fill="currentColor" className="ml-2" />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        <button className="hero-ui p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
          <Settings size={20} />
        </button>
        <button className="hero-ui p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
          <Maximize size={20} />
        </button>
      </div>
    </div>
  );
}
