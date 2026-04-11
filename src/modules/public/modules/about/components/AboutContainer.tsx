import { Navbar } from '@/modules/public/components/Navbar';
import { AboutHero } from './AboutHero';
import { MissionVision } from './MissionVision';
import { ContactSection } from './ContactSection';
import { CtaSection } from '../../home/components/CtaSection';
import { FoundersBubble } from '@/modules/public/components/FoundersBubble';
import { Footer } from '@/modules/public/components/Footer';

export const AboutContainer = () => {
	return (
		<>
			<Navbar />
			<main className='flex flex-col w-full'>
				<AboutHero />
				<MissionVision />
				<ContactSection />
				<CtaSection />
				<FoundersBubble />
			</main>
			<Footer />
		</>
	);
};
