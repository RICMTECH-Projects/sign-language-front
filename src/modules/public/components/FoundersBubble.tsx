"use client";

import Image from "next/image";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FoundersBubble() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const floatAnim = gsap.to(container.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });

    ScrollTrigger.create({
      trigger: "footer", 
      start: "top 95%", 
      onEnter: () => {
        floatAnim.pause();
        gsap.to(container.current, { opacity: 0, scale: 0.8, pointerEvents: "none", duration: 0.3, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(container.current, { opacity: 1, scale: 1, pointerEvents: "auto", duration: 0.3, ease: "power2.out", onComplete: () => { floatAnim.play(); } });
      }
    });
  });

  return (
    <div ref={container} className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-full right-0 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <div className="bg-zinc-900 border border-zinc-800 text-white text-xs font-medium py-2 px-3 rounded-xl shadow-xl whitespace-nowrap text-center leading-relaxed">
          <span className="font-bold">Justin Huertas</span> & <span className="font-bold">Roger Cabrera</span>
        </div>
      </div>

      <Link 
        href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 pr-4 rounded-full shadow-2xl ring-1 ring-black/10 dark:ring-white/10 hover:ring-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="flex -space-x-4">
          <div className="relative w-10 h-10 rounded-full border-2 border-white dark:border-black overflow-hidden bg-zinc-200">
             <Image 
               src="https://loremflickr.com/100/100/person,portrait,professional" 
               alt="Founder 1" 
               fill 
               className="object-cover" 
             />
          </div>
          <div className="relative w-10 h-10 rounded-full border-2 border-white dark:border-black overflow-hidden bg-zinc-300">
             <Image 
               src="https://loremflickr.com/100/100/person,portrait,business" 
               alt="Founder 2" 
               fill 
               className="object-cover" 
             />
          </div>
        </div>
        <div className="flex flex-col items-start pr-2">
          <span className="text-xs font-semibold text-foreground/80 leading-none">Conoce a</span>
          <span className="text-sm font-bold text-primary flex items-center gap-1">los creadores <UserPlus size={14} /></span>
        </div>
      </Link>
    </div>
  );
}
