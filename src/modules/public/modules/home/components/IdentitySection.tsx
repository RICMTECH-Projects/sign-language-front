"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function IdentitySection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".identity-element",
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      ".identity-svg-path",
      { strokeDasharray: 800, strokeDashoffset: 800 },
      { 
        strokeDashoffset: 0, 
        duration: 2, 
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center text-center bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-4xl w-full flex flex-col items-center gap-6">
        <span className="identity-element text-xs md:text-sm font-semibold tracking-widest text-[#a83f2a] uppercase">
          Expresión sin límites
        </span>
        
        <div className="relative w-full max-w-3xl flex justify-center px-4">
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[150%] z-0 opacity-40 pointer-events-none" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="identity-svg-path" d="M -50,100 C 150,-100 350,300 550,100" stroke="var(--color-primary, #D65E45)" strokeWidth="6" strokeLinecap="round" />
            <path className="identity-svg-path" d="M -20,130 Q 250,320 520,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8" />
          </svg>

          <h2 className="identity-element relative z-10 text-4xl md:text-5xl lg:text-5xl font-serif text-foreground leading-[1.2] max-w-3xl">
            Comunicarse es más que hablar. Es <span className="italic text-primary relative">sentir</span> con cada movimiento.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12 text-left">
          <p className="identity-element text-foreground/70 leading-relaxed text-sm md:text-base">
            Cada gesto cuenta una historia. No solo traducimos palabras, sino que usamos las manos, el rostro y el cuerpo para transmitir emociones reales y directas.
          </p>
          <p className="identity-element text-foreground/70 leading-relaxed text-sm md:text-base">
            Nuestro enfoque es claro y respetuoso. Cada lección está diseñada con cuidado para honrar a la cultura sorda y ayudar a construir un puente de empatía para todos.
          </p>
        </div>
      </div>
    </section>
  );
}
