"use client";

import Image from "next/image";
import {
  Play,
  Heart,
  ListFilter,
  Search,
  Check,
  ChevronDown,
  ArrowDown,
} from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CARDS } from "../../../services/signs";
import Link from "next/link";
import { useGetListCategories } from "@/modules/public/hooks/useGetListCategories";

export function ExploreSection() {
  const container = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las Categorías",
  );

  const filteredCards = CARDS.filter((card) => {
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todas las Categorías" ||
      card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const { categoriesList, isFetchingCategories } = useGetListCategories();

  useGSAP(
    () => {
      gsap.fromTo(
        ".explore-element",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        },
      );

      // Arrow animation for the Load More button
      gsap.to(".load-more-arrow", {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="explorar"
      className="w-full py-24 md:py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full flex flex-col gap-16">
        <div className="flex flex-col gap-6 max-w-3xl">
          <span className="explore-element text-xs md:text-sm font-semibold tracking-widest text-primary uppercase">
            BIBLIOTECA VISUAL
          </span>
          <h2 className="explore-element text-4xl md:text-6xl font-serif text-foreground leading-[1.1] tracking-tight">
            Explora el{" "}
            <span className="italic text-primary">Lenguaje de las Manos</span>
          </h2>
          <p className="explore-element text-foreground/70 leading-relaxed text-sm md:text-base max-w-2xl">
            Una colección selecta de gestos visuales, expresiones y señas.
            Domina el arte de la conexión a través del movimiento y la narrativa
            táctil.
          </p>
        </div>

        <div className="explore-element relative z-40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button className="bg-[#A83F2A] hover:bg-[#A83F2A]/90 transition-colors text-white text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer">
              Todos los niveles
            </button>
            <button className="bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors text-foreground text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer">
              Principiante
            </button>
            <button className="bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors text-foreground text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer">
              Intermedio
            </button>
            <button className="bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors text-foreground text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer">
              Avanzado
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <div className="relative grow sm:grow-0 sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar señas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 border-none rounded-full text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-zinc-500"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                <ListFilter size={18} className="mr-1" /> {selectedCategory}{" "}
                <span className="text-[10px] ml-1">▼</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-52 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden z-30 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {categoriesList.map(({id,name}) => (
                    <button
                      key={id}
                      onClick={() => {
                        setSelectedCategory(name);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-sm text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-primary transition-colors flex items-center justify-between"
                    >
                      {name}
                      {selectedCategory === name && (
                        <Check size={16} className="text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {filteredCards.length === 0 && (
          <div className="w-full py-16 flex flex-col items-center justify-center text-center gap-2">
            <span className="text-4xl">🔍</span>
            <h3 className="text-xl font-medium text-foreground mt-2">
              No se encontraron señas
            </h3>
            <p className="text-foreground/60 text-sm">
              Prueba buscar con otras palabras.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <Link
              key={card.id}
              href={`/explorar/${card.id}`}
              className="explore-element group flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2 pr-4">
                  <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-[10px] font-bold tracking-widest text-foreground uppercase">
                    {card.level}
                  </div>
                  <div className="bg-black/70 dark:bg-white/80 text-white dark:text-black backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-[10px] font-bold tracking-widest uppercase">
                    {card.category}
                  </div>
                </div>

                <button
                  className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-[#A83F2A]/90 hover:bg-[#A83F2A] backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
                  aria-label={`Play ${card.title}`}
                >
                  <Play size={16} fill="currentColor" className="ml-1" />
                </button>
              </div>

              <div className="flex flex-col gap-2 relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <button
                    className="text-zinc-400 hover:text-red-500 transition-colors"
                    aria-label="Favorite"
                  >
                    <Heart size={20} fill="currentColor" />
                  </button>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed pr-4">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="explore-element w-full flex justify-center mt-16">
          <button className="group flex flex-col items-center gap-4 cursor-pointer outline-none border-none bg-transparent">
            <span className="text-sm sm:text-xs font-bold tracking-[0.3em] text-foreground/40 group-hover:text-primary uppercase transition-all duration-500">
              CARGA MÁS SEÑAS
            </span>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-800 scale-100 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500"></div>
              <ArrowDown className="load-more-arrow size-5 text-primary" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
