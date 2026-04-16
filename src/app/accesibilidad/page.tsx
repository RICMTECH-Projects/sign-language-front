import type { Metadata } from 'next';
import AccesibilityContainer from '@/modules/public/modules/legal/components/AccesibilityContainer';

export const metadata: Metadata = {
	title: 'Accesibilidad | Signly',
	description: 'Nuestra compromiso con una web accesible para todos.',
};

export default function AccesibilityPage() {
	return <AccesibilityContainer />;
}
