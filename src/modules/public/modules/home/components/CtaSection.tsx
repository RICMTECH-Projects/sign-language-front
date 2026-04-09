"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCapIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".cta-element",
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-24 md:py-32 px-6 bg-zinc-50 dark:bg-black">
      <div className="max-w-4xl mx-auto w-full relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#f9e9e6] via-[#f4f2ff] to-[#e4f6fc] dark:from-[#31201d] dark:via-[#2a243d] dark:to-[#173138] p-12 md:p-24 text-center">
        <h2 className="cta-element text-3xl md:text-5xl font-serif text-foreground leading-[1.2] mb-10 max-w-2xl mx-auto">
          Habla con tus manos, conecta con el corazón. Empieza hoy.
        </h2>
        
        <div className="cta-element flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/explorar"
            className="inline-flex gap-2 items-center justify-center w-fit h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 "
          >
            Empezar a Aprender <GraduationCapIcon className="hidden sm:block"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
