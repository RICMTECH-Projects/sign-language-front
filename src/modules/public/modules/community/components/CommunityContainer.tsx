import { Navbar } from '@/modules/public/components/Navbar';
import { CommunityHero } from './CommunityHero';
import { SocialHubs } from './SocialHubs';
import { TestimonialsGrid } from './TestimonialsGrid';
import { CtaSection } from '../../home/components/CtaSection';
import { FoundersBubble } from '@/modules/public/components/FoundersBubble';
import { Footer } from '@/modules/public/components/Footer';

export const CommunityContainer = () => {
	return (
		<>
			<Navbar />
			<main className='flex flex-col w-full'>
				<CommunityHero />
				<SocialHubs />
				<TestimonialsGrid />
				<CtaSection />
				<FoundersBubble />
			</main>
			<Footer />
		</>
	);
};
