import { LegalLayout } from '@/modules/public/modules/legal/components/LegalLayout';
import { LegalContent } from '@/modules/public/modules/legal/components/LegalContent';
import { LegalSection } from '@/modules/public/modules/legal/components/LegalSection';
import { LegalList } from './LegalList';
import { SUPPORT_EMAIL } from '../constants/legal.const';

export const metadata = {
	title: 'Política de Privacidad | Signly',
	description: 'Conoce cómo protegemos y manejamos tus datos en Signly.',
};

export default function PrivacityContainer() {
	return (
		<LegalLayout
			title='Política de Privacidad'
			subtitle='Última actualización: 9 de abril de 2026'>
			<LegalContent>
				<LegalSection title='1. Introducción'>
					<p>
						En Signly, valoramos tu privacidad y nos comprometemos a proteger
						tus datos personales...
					</p>
				</LegalSection>

				<LegalSection title='2. Información que Recopilamos'>
					<p>Recopilamos información básica para mejorar tu experiencia:</p>
					<LegalList>
						<li>
							<strong>Datos de registro:</strong> Nombre, correo electrónico y
							preferencias.
						</li>
						<li>
							<strong>Progreso:</strong> Cursos y señas exploradas.
						</li>
						<li>
							<strong>Información técnica:</strong> IP, navegador y cookies.
						</li>
					</LegalList>
				</LegalSection>

				<LegalSection title='3. Uso de la Información'>
					<LegalList>
						<li>Personalizar aprendizaje.</li>
						<li>Enviar actualizaciones.</li>
						<li>Optimizar rendimiento.</li>
					</LegalList>
				</LegalSection>

				<LegalSection title='4. Seguridad'>
					<p>Aplicamos medidas de seguridad de grado industrial...</p>
				</LegalSection>

				<LegalSection title='5. Tus Derechos'>
					<p>
						Puedes acceder, rectificar o eliminar tus datos en cualquier
						momento.
					</p>
				</LegalSection>

				<LegalSection title='6. Contacto'>
					<p>
						Escríbenos a: <br />
						<span className='text-primary font-medium'>{SUPPORT_EMAIL}</span>
					</p>
				</LegalSection>
			</LegalContent>
		</LegalLayout>
	);
}
