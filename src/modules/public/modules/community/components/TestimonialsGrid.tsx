"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsGrid() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-card",
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  const testimonials = [
    {
      name: "Ana García",
      role: "Estudiante Avanzada",
      text: "Entrar en la comunidad de Signly cambió mi forma de ver el mundo. Poder practicar con personas reales cada semana me dio la confianza que necesitaba.",
      size: "large",
      img: "/img/members/ana.webp"
    },
    {
      name: "Carlos Ruiz",
      role: "Padre de familia",
      text: "Aprendí lengua de señas para conectarme mejor con mi hijo. Los consejos del grupo de WhatsApp para padres fueron clave.",
      size: "small",
      img: "/img/members/carlos.webp"
    },
    {
      name: "Elena M.",
      role: "Profesora",
      text: "Un espacio seguro para equivocarse y crecer. ¡Altamente recomendado!",
      size: "small",
      img: "/img/members/elena.webp"
    },
    {
      name: "Santi López",
      role: "Desarrollador",
      text: "La accesibilidad importa, y en este grupo entendí por qué. Signly no solo es un curso, es un movimiento de inclusión real.",
      size: "medium",
      img: "/img/members/santi.webp"
    }
  ];

  return (
    <section ref={container} className="w-full py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#a83f2a] uppercase mb-4">
            Voces de Signly
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
            Lo que dice nuestra <br /><span className="italic text-primary">comunidad</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`testimonial-card relative group p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex flex-col justify-between overflow-hidden
                ${t.size === "large" ? "md:row-span-2 lg:col-span-1" : ""}
                ${t.size === "medium" ? "lg:col-span-2" : ""}
              `}
            >
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className={`text-foreground/80 leading-relaxed italic ${t.size === "large" ? "text-xl" : "text-base"}`}>
                  "{t.text}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-200">
                  <div className="absolute inset-0 bg-primary opacity-20 flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
