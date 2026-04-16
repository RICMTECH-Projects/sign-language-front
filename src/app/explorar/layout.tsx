import { Navbar } from '@/modules/public/components/Navbar';
import { FoundersBubble } from '@/modules/public/components/FoundersBubble';
import { Footer } from '@/modules/public/components/Footer';

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
			<FoundersBubble />
		</>
	);
};

export default ExploreLayout;
