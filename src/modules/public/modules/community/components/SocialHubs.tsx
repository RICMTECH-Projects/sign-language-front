"use client";

import { MessageSquare, Phone, Send, Hexagon } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SocialHubs() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hub-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  const hubs = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discord",
      description: "Nuestra sede principal. Canales de práctica en vivo, recursos compartidos y chat 24/7.",
      color: "bg-[#5865F2]",
      link: "#"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Grupos de estudio por niveles. Recibe una seña diaria directamente en tu móvil.",
      color: "bg-[#25D366]",
      link: "#"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Telegram",
      description: "Canal de anuncios y de soporte rápido para resolver dudas gramaticales.",
      color: "bg-[#26A5E4]",
      link: "#"
    }
  ];

  return (
    <section ref={container} className="w-full py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Escoge donde conectar</h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-lg leading-relaxed">
            Diferentes espacios para diferentes necesidades. Únete al que mejor se adapte a tu ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hubs.map((hub, idx) => (
            <a 
              key={idx} 
              href={hub.link}
              className="hub-card group relative p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex flex-col gap-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-16 h-16 rounded-2xl ${hub.color} text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {hub.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{hub.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{hub.description}</p>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                Unirse ahora <Hexagon className="w-4 h-4" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                {hub.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
