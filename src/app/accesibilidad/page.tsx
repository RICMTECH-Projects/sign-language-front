import { LegalLayout } from "@/modules/public/modules/legal/components/LegalLayout";

export const metadata = {
  title: "Accesibilidad | Signly",
  description: "Nuestra compromiso con una web accesible para todos.",
};

export default function AccesibilidadPage() {
  return (
    <LegalLayout 
      title="Declaración de Accesibilidad" 
      subtitle="Trabajamos para que el aprendizaje no tenga barreras."
    >
      <div className="flex flex-col gap-12 text-foreground/80 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">Nuestro Compromiso</h2>
          <p>
            En Signly, la accesibilidad no es solo una característica, es nuestra misión. Nos esforzamos por garantizar que nuestra plataforma sea utilizable por la mayor cantidad posible de personas, independientemente de sus capacidades técnicas o físicas.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">Estándares de Diseño</h2>
          <p>
            Nuestra web ha sido diseñada siguiendo las pautas de accesibilidad para el contenido web (**WCAG 2.1**) en su nivel AA. Algunas de las medidas que implementamos incluyen:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contraste de colores:</strong> Aseguramos que el texto sea legible contra sus fondos.</li>
            <li><strong>Navegación por teclado:</strong> Todos los elementos interactivos son accesibles sin necesidad de usar un mouse.</li>
            <li><strong>Etiquetas semánticas:</strong> Utilizamos HTML5 semántico para mejorar la experiencia con lectores de pantalla.</li>
            <li><strong>Diseño responsivo:</strong> La interfaz se adapta a diferentes tamaños de pantalla y niveles de zoom sin perder funcionalidad.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">Estado de Conformidad</h2>
          <p>
            Estamos en un proceso de mejora continua. Si encuentras alguna dificultad al navegar por Signly o tienes sugerencias para mejorar nuestra accesibilidad, queremos escucharte.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">Tecnologías de Apoyo</h2>
          <p>
            Signly es compatible con los lectores de pantalla más comunes (como NVDA, JAWS y VoiceOver) y con herramientas de magnificación de pantalla.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">Contacto</h2>
          <p>
            Si necesitas asistencia técnica o quieres reportar un problema de accesibilidad, contáctanos en: <br />
            <span className="text-primary font-medium">gestionclientes@ricmtech.dev</span>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
