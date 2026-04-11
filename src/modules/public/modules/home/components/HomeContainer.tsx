import { Navbar } from '@/modules/public/components/Navbar';
import { Hero } from './Hero';
import { IdentitySection } from './IdentitySection';
import { FeatureGrid } from './FeatureGrid';
import { WhyItMatters } from './WhyItMatters';
import { CtaSection } from './CtaSection';
import { FoundersBubble } from '@/modules/public/components/FoundersBubble';
import { Footer } from '@/modules/public/components/Footer';

export const HomeContainer = () => {
	return (
		<>
			<Navbar />
			<main className='flex flex-col w-full'>
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
};
