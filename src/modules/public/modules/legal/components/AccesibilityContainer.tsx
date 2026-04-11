import { LegalLayout } from '@/modules/public/modules/legal/components/LegalLayout';
import { LegalContent } from '@/modules/public/modules/legal/components/LegalContent';
import { LegalSection } from '@/modules/public/modules/legal/components/LegalSection';
import { LegalList } from '@/modules/public/modules/legal/components/LegalList';
import { SUPPORT_EMAIL } from '../constants/legal.const';

export default function AccesibilityContainer() {
	return (
		<LegalLayout
			title='Declaración de Accesibilidad'
			subtitle='Trabajamos para que el aprendizaje no tenga barreras.'>
			<LegalContent>
				<LegalSection title='Nuestro Compromiso'>
					<p>La accesibilidad no es una opción, es la base del producto...</p>
				</LegalSection>

				<LegalSection title='Estándares de Diseño'>
					<p>Seguimos WCAG 2.1 nivel AA:</p>
					<LegalList>
						<li>Contraste adecuado.</li>
						<li>Navegación por teclado.</li>
						<li>HTML semántico.</li>
						<li>Diseño responsivo.</li>
					</LegalList>
				</LegalSection>

				<LegalSection title='Estado de Conformidad'>
					<p>Estamos en mejora continua...</p>
				</LegalSection>

				<LegalSection title='Tecnologías de Apoyo'>
					<p>
						Compatible con lectores de pantalla como NVDA, JAWS y VoiceOver.
					</p>
				</LegalSection>

				<LegalSection title='Contacto'>
					<p>
						Contáctanos: <br />
						<span className='text-primary font-medium'>{SUPPORT_EMAIL}</span>
					</p>
				</LegalSection>
			</LegalContent>
		</LegalLayout>
	);
}
