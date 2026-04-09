import { Navbar } from "@/modules/public/components/Navbar";
import { Hero } from "@/modules/public/modules/home/components/Hero";
import { IdentitySection } from "@/modules/public/modules/home/components/IdentitySection";
import { FeatureGrid } from "@/modules/public/modules/home/components/FeatureGrid";
import { WhyItMatters } from "@/modules/public/modules/home/components/WhyItMatters";
import { CtaSection } from "@/modules/public/modules/home/components/CtaSection";
import { Footer } from "@/modules/public/components/Footer";
import { FoundersBubble } from "@/modules/public/components/FoundersBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <IdentitySection />
        <FeatureGrid />
        <WhyItMatters />
        <CtaSection />
        <FoundersBubble />
      </main>
      <Footer />
    </>
  );
}
