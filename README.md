# Signly 🖐️✨

**Signly** es una plataforma educativa dedicada al aprendizaje de la Lengua de Señas. Diseñada con un enfoque estético moderno e inclusivo, busca eliminar las barreras de comunicación a través de una experiencia visual e interactiva superior.

## 🚀 Características Principales

- **Arquitectura Modular**: Organizado bajo una estructura de `src/modules` para escalabilidad y mantenibilidad.
- **Diseño**: Interfaz fluida con una estética cálida, tipografía cuidada (Inter & Playfair Display) y animaciones de alto nivel.
- **Biblioteca Visual (Explorar)**: Diccionario interactivo de señas con búsqueda en tiempo real y filtrado por categorías (Esenciales, Saludos, Alfabeto, etc.).
- **Experiencia Mobile-First**: Menú móvil a pantalla completa con animaciones escalonadas y optimización para dispositivos táctiles.
- **Animaciones Avanzadas**: Integración de GSAP para efectos de scroll-reveal y transiciones suaves de componentes.
- **Dark Mode Nativo**: Soporte completo para modo oscuro con una paleta de colores optimizada.

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/)
- **Iconos**: [Lucide React](https://lucide.dev/)

## 📂 Estructura del Proyecto

```bash
src/
├── app/                  # Rutas y configuración de Next.js
├── modules/
│   └── public/           # Contenido orientado al usuario final
│       ├── components/    # Componentes compartidos (Navbar, Footer)
│       ├── modules/       # Lógica por página (home, explore, detail)
│       └── services/      # Lógica de datos y filtrado
```

## 📦 Instalación y Desarrollo

1. Clona el repositorio:
```bash
git clone https://github.com/RICMTECH-Projects/sign-language-front.git
```

2. Instala las dependencias:
```bash
pnpm install
# o
npm install
```

3. Inicia el servidor de desarrollo:
```bash
pnpm dev
# o
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ✨ Créditos

Una iniciativa de **RICM TECH**. Desarrollado con ❤️ para fomentar la inclusión.
