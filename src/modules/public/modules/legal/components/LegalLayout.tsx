"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/modules/public/components/Navbar";
import { Footer } from "@/modules/public/components/Footer";
import { FoundersBubble } from "@/modules/public/components/FoundersBubble";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".legal-header",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
    tl.fromTo(
      ".legal-content",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <>
      <Navbar />
      <main ref={container} className="flex flex-col w-full bg-[#fdfbf7] dark:bg-black min-h-screen">
        {/* Header Hero */}
        <section className="relative w-full pt-40 pb-20 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden border-b border-black/5 dark:border-white/5">
          <div className="max-w-4xl w-full z-10">
            <span className="legal-header inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Información Legal
            </span>
            <h1 className="legal-header text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight mb-6">
              {title}
            </h1>
            <p className="legal-header text-lg text-foreground/60 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 dark:opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto legal-content prose prose-zinc dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-p:text-foreground/80 prose-p:leading-relaxed">
            {children}
          </div>
        </section>
        
        <FoundersBubble />
      </main>
      <Footer />
    </>
  );
}
