"use client";

import { Target, Eye, Users } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MissionVision() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".mv-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  const points = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Misión",
      description: "Empoderar a través del lenguaje visual, rompiendo barreras de comunicación para construir un mundo más inclusivo, accesible y empático para todos."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Visión",
      description: "Ser la plataforma líder global en el aprendizaje de lengua de señas, donde cada gesto cuente y cada persona tenga la oportunidad de ser escuchada sin palabras."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Valores",
      description: "Inclusión, respeto cultural, innovación constante y compromiso con la comunidad sorda son el corazón de todo lo que hacemos en Signly."
    }
  ];

  return (
    <section ref={container} className="w-full py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point, idx) => (
            <div key={idx} className="mv-card p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex flex-col gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                {point.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
