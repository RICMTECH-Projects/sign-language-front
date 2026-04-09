import { Navbar } from "@/modules/public/components/Navbar";
import { Footer } from "@/modules/public/components/Footer";
import { FoundersBubble } from "@/modules/public/components/FoundersBubble";
import { CommunityHero } from "@/modules/public/modules/community/components/CommunityHero";
import { SocialHubs } from "@/modules/public/modules/community/components/SocialHubs";
import { TestimonialsGrid } from "@/modules/public/modules/community/components/TestimonialsGrid";
import { CtaSection } from "@/modules/public/modules/home/components/CtaSection";

export const metadata = {
  title: "Comunidad | Signly",
  description: "Únete a la mayor comunidad de aprendizaje de lengua de señas. Conecta con otros estudiantes y expertos.",
};

export default function ComunidadPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <CommunityHero />
        <SocialHubs />
        <TestimonialsGrid />
        <CtaSection />
        <FoundersBubble />
      </main>
      <Footer />
    </>
  );
}
