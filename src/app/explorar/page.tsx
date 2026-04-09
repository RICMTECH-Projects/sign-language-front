import { Navbar } from "@/modules/public/components/Navbar";
import { ExploreSection } from "@/modules/public/modules/explore/components/ExploreSection";
import { Footer } from "@/modules/public/components/Footer";
import { FoundersBubble } from "@/modules/public/components/FoundersBubble";

export default function ExplorarPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20">
        <ExploreSection />
      </main>
      <Footer />
      <FoundersBubble />
    </>
  );
}
