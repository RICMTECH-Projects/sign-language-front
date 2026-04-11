import { Suspense } from 'react';
import { CommunityContainer } from '@/modules/public/modules/community/components/CommunityContainer';

export const metadata = {
	title: 'Comunidad | Signly',
	description:
		'Únete a la mayor comunidad de aprendizaje de lengua de señas. Conecta con otros estudiantes y expertos.',
};

export default function CommunityPage() {
	return (
		<Suspense>
			<CommunityContainer />
		</Suspense>
	);
}
