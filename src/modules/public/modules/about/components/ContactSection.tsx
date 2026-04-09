"use client";

import { Mail, MapPin, Phone, Music } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });

    tl.fromTo(
      ".contact-element",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: container });

  const socialLinks = [
    { icon: <div />, label: "Instagram", href: "https://instagram.com" },
    { icon: <div />, label: "Twitter", href: "https://twitter.com" },
    { icon: <div />, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <section ref={container} id="contacto" className="w-full py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="contact-element inline-block text-xs font-semibold tracking-widest text-primary uppercase">
              Hablemos
            </span>
            <h2 className="contact-element text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              ¿Tienes dudas? <br />
              Estamos a un <span className="italic text-primary">gesto</span> de distancia.
            </h2>
          </div>

          <div className="flex flex-col gap-8 mt-4">
            <div className="contact-element flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase font-bold tracking-wider mb-1">Email</p>
                <p className="text-xl font-medium">gestionclientes@ricmtech.dev</p>
              </div>
            </div>

            <div className="contact-element flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase font-bold tracking-wider mb-1">Ubicación</p>
                <p className="text-xl font-medium">Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <h4 className="contact-element text-xl font-bold">Nuestras redes</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-element flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 hover:bg-[#c2eef5] dark:hover:bg-[#1c3b40] group transition-all duration-500"
                >
                  <div className="text-foreground group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-element p-10 rounded-[2.5rem] bg-linear-to-br from-[#f9e9e6] to-[#f4f2ff] dark:from-[#31201d] dark:to-[#2a243d] flex flex-col gap-6">
            <h4 className="text-2xl font-serif">Suscríbete al boletín</h4>
            <p className="text-foreground/70 text-sm">Recibe novedades sobre nuevos cursos y la comunidad Signly cada mes.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="flex-1 h-12 px-6 rounded-full bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
