import { HomeContainer } from '@/modules/public/modules/home/components/HomeContainer';
import { Suspense } from 'react';

export default function HomePage() {
	return (
		<Suspense>
			<HomeContainer />
		</Suspense>
	);
}
