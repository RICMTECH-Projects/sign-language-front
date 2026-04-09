"use client";

import Link from "next/link";
import { Menu, UserIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-6 absolute top-0 left-0 z-50">
      <Link
        href="/"
        className="font-serif italic text-2xl font-medium tracking-tight text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        aria-label="Home - Signly"
      >
        Signly
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link
          href="/"
          className={`relative group transition-colors pb-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
            isActive("/") ? "text-primary font-bold" : "text-foreground hover:text-primary"
          }`}
        >
          Inicio
          <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${
            isActive("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`} />
        </Link>
        <Link
          href="/explorar"
          className={`relative group transition-colors pb-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
            isActive("/explorar") || pathname.startsWith("/explorar/") ? "text-primary font-bold" : "text-foreground hover:text-primary"
          }`}
        >
          Explorar
          <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${
            isActive("/explorar") || pathname.startsWith("/explorar/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`} />
        </Link>

        <Link
          href="/comunidad"
          className={`relative group transition-colors pb-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
            isActive("/comunidad") ? "text-primary font-bold" : "text-foreground hover:text-primary"
          }`}
        >
          Comunidad
          <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${
            isActive("/comunidad") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`} />
        </Link>
        <Link
          href="/nosotros"
          className={`relative group transition-colors pb-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
            isActive("/nosotros") ? "text-primary font-bold" : "text-foreground hover:text-primary"
          }`}
        >
          Acerca de
          <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${
            isActive("/nosotros") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`} />
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="#login"
          className="hidden sm:inline-flex gap-2 items-center justify-center bg-primary text-[#fdfbf7] dark:text-white px-6 h-11 rounded-full font-medium hover:bg-primary-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <UserIcon className="size-5"/> Mi Signly
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full z-60 ml-2"
          aria-label="Alternar menú"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>

    <div 
      className={`fixed inset-0 bg-white dark:bg-zinc-950 z-100 md:hidden flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-8 right-8 p-2 text-foreground hover:text-primary transition-colors rounded-full"
        aria-label="Cerrar menú"
      >
        <X size={32} />
      </button>
      {[
        { name: "Inicio", href: "/" },
        { name: "Explorar", href: "/explorar" },
        { name: "Comunidad", href: "/comunidad" },
        { name: "Acerca de", href: "/nosotros" }
      ].map((link, idx) => (
        <Link 
          key={link.href}
          href={link.href} 
          onClick={() => setIsOpen(false)} 
          className={`relative text-2xl font-serif transition-all duration-300 flex items-center justify-center gap-3 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${
            isActive(link.href) || (link.href === "/explorar" && pathname.startsWith("/explorar/"))
            ? "text-primary font-bold" 
            : "text-foreground/60 hover:text-primary"
          }`}
          style={{ transitionDelay: `${isOpen ? idx * 100 : 0}ms` }}
        >
          {link.name}
          {(isActive(link.href) || (link.href === "/explorar" && pathname.startsWith("/explorar/"))) && (
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          )}
        </Link>
      ))}
      
      <Link
        href="#login"
        onClick={() => setIsOpen(false)}
        className={`mt-6 inline-flex gap-2 items-center justify-center bg-primary text-white border-2 border-primary px-12 h-16 rounded-full font-medium hover:bg-transparent hover:text-primary shadow-xl shadow-primary/20 transition-all duration-500 ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
        }`}
        style={{ transitionDelay: `${isOpen ? 400 : 0}ms` }}
      >
        <UserIcon className="size-5"/> Mi Signly
      </Link>
    </div>
    </>
  );
}
