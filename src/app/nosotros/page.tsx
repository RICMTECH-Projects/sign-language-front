import { AboutContainer } from '@/modules/public/modules/about/components/AboutContainer';
import { Suspense } from 'react';

export const metadata = {
	title: 'Nosotros | Signly',
	description:
		'Conoce nuestra misión, visión y el equipo detrás de Signly. Construyendo puentes de comunicación a través de la lengua de señas.',
};

export default function AboutUsPage() {
	return (
		<Suspense>
			<AboutContainer />
		</Suspense>
	);
}
