import { Navbar } from "@/modules/public/components/Navbar";
import { Footer } from "@/modules/public/components/Footer";
import { FoundersBubble } from "@/modules/public/components/FoundersBubble";
import { AboutHero } from "@/modules/public/modules/about/components/AboutHero";
import { MissionVision } from "@/modules/public/modules/about/components/MissionVision";
import { ContactSection } from "@/modules/public/modules/about/components/ContactSection";
import { CtaSection } from "@/modules/public/modules/home/components/CtaSection";

export const metadata = {
  title: "Nosotros | Signly",
  description: "Conoce nuestra misión, visión y el equipo detrás de Signly. Construyendo puentes de comunicación a través de la lengua de señas.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <AboutHero />
        <MissionVision />
        <ContactSection />
        <CtaSection />
        <FoundersBubble />
      </main>
      <Footer />
    </>
  );
}
