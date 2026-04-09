"use client";

import { use } from "react";
import { Navbar } from "@/modules/public/components/Navbar";
import { Footer } from "@/modules/public/components/Footer";
import { GestureHero } from "@/modules/public/modules/explore-detail/components/GestureHero";
import { MovementGuide } from "@/modules/public/modules/explore-detail/components/MovementGuide";
import { PerspectiveGrid } from "@/modules/public/modules/explore-detail/components/PerspectiveGrid";
import { FoundersBubble } from "@/modules/public/components/FoundersBubble";
import { CARDS, SignCard } from "@/modules/public/services/signs";
import { ArrowLeft, MessageSquare, Utensils } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const sign = CARDS.find((c: SignCard) => c.id === parseInt(resolvedParams.id));

  if (!sign) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#fdfbf7] dark:bg-zinc-950 pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                  NIVEL: {sign.level}
                </span>
                <span className="bg-zinc-100 dark:bg-zinc-800 text-foreground/60 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                  {sign.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground">
                {sign.title} <span className="italic text-primary">({sign.title === "Hola" ? "Hello" : sign.title === "Gracias" ? "Thank You" : sign.title})</span>
              </h1>
            </div>
            
            <Link 
              href="/explorar" 
              className="flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors group mb-2"
            >
              Volver al Diccionario <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <GestureHero imageUrl={sign.imageUrl} title={sign.title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-1 flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">EL CONCEPTO</span>
                <p className="text-foreground/70 leading-relaxed">
                  {sign.concept || sign.description}
                </p>
              </div>

              {sign.steps && <MovementGuide steps={sign.steps} />}
            </div>

            <div className="lg:col-span-2">
              {sign.perspectives && <PerspectiveGrid images={sign.perspectives} />}
            </div>
          </div>

          <div className="flex flex-col gap-12 mt-12 py-12 border-t border-zinc-100 dark:border-zinc-900">
            <h2 className="text-3xl font-serif text-foreground">Ejemplos de Uso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sign.examples?.map((ex, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col gap-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    {ex.type === "social" ? <MessageSquare size={24} /> : <Utensils size={24} />}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-serif text-foreground">"{ex.text}"</h4>
                    <p className="text-sm text-foreground/60 italic leading-relaxed">
                      {ex.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <FoundersBubble />
    </>
  );
}
