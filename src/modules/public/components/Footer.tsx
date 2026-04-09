import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white dark:bg-black py-8 px-6 md:px-12 text-sm text-foreground/70">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-serif italic font-medium text-base text-foreground">
            Signly
          </span>
          <span className="text-xs uppercase tracking-widest text-[#a83f2a] mt-2 block">
            Una iniciativa de ricm tech
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-xs uppercase tracking-widest font-medium flex-wrap justify-center md:justify-end">
          <Link href="/accesibilidad" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline">
            Accesibilidad
          </Link>
          <Link href="/privacidad" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline">
            Privacidad
          </Link>
          <Link href="#recursos" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline">
            Recursos
          </Link>
          <Link href="/nosotros#contacto" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline">
            Contacto
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
