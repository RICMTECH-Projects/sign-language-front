import { LegalLayout } from "@/modules/public/modules/legal/components/LegalLayout";

export const metadata = {
  title: "Política de Privacidad | Signly",
  description: "Conoce cómo protegemos y manejamos tus datos en Signly.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout 
      title="Política de Privacidad" 
      subtitle="Última actualización: 9 de abril de 2026"
    >
      <div className="flex flex-col gap-12 text-foreground/80 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">1. Introducción</h2>
          <p>
            En Signly, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política detalla cómo recopilamos, usamos y resguardamos la información que compartes con nosotros al utilizar nuestra plataforma de aprendizaje de lengua de señas.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">2. Información que Recopilamos</h2>
          <p>
            Recopilamos información básica para mejorar tu experiencia de usuario, que incluye:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos de registro:</strong> Nombre, correo electrónico y preferencias de idioma.</li>
            <li><strong>Progreso de aprendizaje:</strong> Datos sobre los cursos y señas que has explorado.</li>
            <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador y datos de uso a través de cookies esenciales.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">3. Uso de la Información</h2>
          <p>
            Utilizamos tus datos exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personalizar tu ruta de aprendizaje.</li>
            <li>Enviarte actualizaciones importantes sobre la plataforma (con tu consentimiento).</li>
            <li>Analizar el rendimiento técnico para asegurar una navegación fluida.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">4. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad de grado industrial para proteger tus datos contra accesos no autorizados, alteraciones o divulgación. Tu información se almacena en servidores seguros y solo es accesible por personal autorizado.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">5. Tus Derechos</h2>
          <p>
            Tienes derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. Si deseas ejercer estos derechos, puedes contactarnos directamente a través de nuestro correo de soporte.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-foreground">6. Contacto</h2>
          <p>
            Si tienes dudas sobre esta política, escríbenos a: <br />
            <span className="text-primary font-medium">gestionclientes@ricmtech.dev</span>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
