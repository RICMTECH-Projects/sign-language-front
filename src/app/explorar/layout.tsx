import { Footer } from '@/modules/public/components/Footer';
import { FoundersBubble } from '@/modules/public/components/FoundersBubble';
import { Navbar } from '@/modules/public/components/Navbar';
import React from 'react';

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
