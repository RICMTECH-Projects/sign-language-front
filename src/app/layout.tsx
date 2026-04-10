import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { TanStackProvider } from "@/modules/shared/providers/tanstackProvider/TanStackProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aprende Lengua de Señas | Signly",
  description:
    "Descubre el poder de la Lengua de Señas. Una plataforma interactiva para aprender, practicar y conectar mediante la comunicación táctil.",
  keywords: [
    "lengua de señas",
    "aprender lenguaje de señas",
    "inclusión",
    "cursos de señas",
    "comunicación no verbal",
  ],
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", inter.variable, playfair.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
