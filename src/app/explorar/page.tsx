import { CategoriesContainer } from '@/modules/public/modules/explore/components/Category/CategoriesContainer';
import { Suspense } from 'react';

export default function ExplorePage() {
	return (
		<Suspense>
			<CategoriesContainer />
		</Suspense>
	);
}
