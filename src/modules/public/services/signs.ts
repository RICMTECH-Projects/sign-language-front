export interface SignCard {
  id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  imageUrl: string;
  concept?: string;
  steps?: { icon: "circle" | "squiggle" | "square"; text: string }[];
  perspectives?: string[];
  examples?: { type: "social" | "public"; text: string; context: string }[];
}

export const CARDS: SignCard[] = [
  {
    id: 1,
    title: "Hola",
    description: "Un saludo universal realizado con un ligero movimiento de mano o gesto desde la frente.",
    level: "PRINCIPIANTE",
    category: "Saludos",
    imageUrl: "https://loremflickr.com/600/400/hands,hello?random=1",
    concept: "Un signo fundamental de gratitud. Expresa aprecio y suele ir acompañado de un ligero asentimiento y una sonrisa para transmitir sinceridad.",
    steps: [
      { icon: "circle", text: "Comience con los dedos tocando su barbilla o labios." },
      { icon: "squiggle", text: "Mueva la mano hacia adelante y ligeramente hacia abajo." },
      { icon: "square", text: "La palma debe mirar hacia usted al principio y hacia arriba al final." }
    ],
    perspectives: [
      "https://loremflickr.com/400/400/hands,front?random=11",
      "https://loremflickr.com/400/400/hands,side?random=12",
      "https://loremflickr.com/400/400/hands,back?random=13"
    ],
    examples: [
      { type: "social", text: "Gracias por la ayuda de hoy.", context: "En este contexto, el signo es rápido y directo, generalmente seguido de contacto visual y una ligera inclinación de cabeza." },
      { type: "public", text: "Gracias por la comida.", context: "Dirigido habitualmente a un camarero o anfitrión. Puede combinarse con el signo de 'bueno' para enfatizar la satisfacción." }
    ]
  },
  {
    id: 2,
    title: "Gracias",
    description: "Los dedos tocan la barbilla y luego se mueven hacia adelante y hacia abajo hacia la persona que agradeces.",
    level: "PRINCIPIANTE",
    category: "Saludos",
    imageUrl: "https://loremflickr.com/600/400/hands,thankyou?random=2",
    concept: "Un signo fundamental de gratitud. Expresa aprecio y suele ir acompañado de un ligero asentimiento y una sonrisa para transmitir sinceridad.",
    steps: [
      { icon: "circle", text: "Comience con los dedos tocando su barbilla o labios." },
      { icon: "squiggle", text: "Mueva la mano hacia adelante y ligeramente hacia abajo." },
      { icon: "square", text: "La palma debe mirar hacia usted al principio y hacia arriba al final." }
    ],
    perspectives: [
      "https://loremflickr.com/400/400/hands,front?random=21",
      "https://loremflickr.com/400/400/hands,side?random=22",
      "https://loremflickr.com/400/400/hands,back?random=23"
    ],
    examples: [
      { type: "social", text: "Gracias por la ayuda de hoy.", context: "En este contexto, el signo es rápido y directo, generalmente seguido de contacto visual y una ligera inclinación de cabeza." },
      { type: "public", text: "Gracias por la comida.", context: "Dirigido habitualmente a un camarero o anfitrión. Puede combinarse con el signo de 'bueno' para enfatizar la satisfacción." }
    ]
  },
  {
    id: 3,
    title: "Amigo",
    description: "Un gancho rítmico de los dedos índices, simbolizando un vínculo inquebrantable de confianza.",
    level: "INTERMEDIO",
    category: "Esenciales Diarios",
    imageUrl: "https://loremflickr.com/600/400/hands,friend?random=3",
    concept: "Simboliza el vínculo estrecho entre dos personas. Los dedos entrelazados representan la interconexión y la lealtad.",
    steps: [
      { icon: "circle", text: "Entrelaza tus dedos índices en forma de gancho." },
      { icon: "squiggle", text: "Realiza un pequeño movimiento oscilante." },
      { icon: "square", text: "Mantén una expresión facial amigable para reforzar el significado." }
    ],
    perspectives: [
      "https://loremflickr.com/400/400/hands,front?random=31",
      "https://loremflickr.com/400/400/hands,side?random=32",
      "https://loremflickr.com/400/400/hands,back?random=33"
    ],
    examples: [
      { type: "social", text: "Él es mi mejor amigo.", context: "Se usa en conversaciones informales para presentar a alguien cercano." },
      { type: "public", text: "Seamos todos amigos.", context: "Usado en contextos educativos o de resolución de conflictos para promover la paz." }
    ]
  },
  {
    id: 4,
    title: "Familia",
    description: "Haciendo un círculo con las manos para abarcar a un grupo, reflejando la unidad de un hogar.",
    level: "INTERMEDIO",
    category: "Esenciales Diarios",
    imageUrl: "https://loremflickr.com/600/400/hands,family?random=4",
    concept: "Representa el núcleo familiar y la unidad. El movimiento circular abarca a todos los miembros bajo un mismo techo.",
    steps: [
      { icon: "circle", text: "Forma la letra 'F' con ambas manos." },
      { icon: "squiggle", text: "Mueve las manos en un círculo horizontal frente a ti." },
      { icon: "square", text: "Termina con los dedos meñiques tocándose." }
    ],
    perspectives: [
      "https://loremflickr.com/400/400/hands,front?random=41",
      "https://loremflickr.com/400/400/hands,side?random=42",
      "https://loremflickr.com/400/400/hands,back?random=43"
    ],
    examples: [
      { type: "social", text: "Amo a mi familia.", context: "Expresión común de afecto hacia los parientes directos." },
      { type: "public", text: "La familia es lo primero.", context: "Frase motivacional o de valores personales." }
    ]
  },
  {
    id: 5,
    title: "Amor",
    description: "Cruzando ambos brazos sobre el pecho en un abrazo suave, señalando afecto profundo.",
    level: "PRINCIPIANTE",
    category: "Emociones",
    imageUrl: "https://loremflickr.com/600/400/hands,love?random=5",
    concept: "Un gesto universal de afecto y protección. Los brazos cruzados imitan el acto de abrazar a alguien querido.",
    steps: [
      { icon: "circle", text: "Cruza tus brazos sobre el pecho con las manos cerradas." },
      { icon: "squiggle", text: "Aprieta ligeramente los brazos contra el torso." },
      { icon: "square", text: "Cierra los ojos o sonríe suavemente para mayor énfasis emocional." }
    ],
    perspectives: [
      "https://loremflickr.com/400/400/hands,front?random=51",
      "https://loremflickr.com/400/400/hands,side?random=52",
      "https://loremflickr.com/400/400/hands,back?random=53"
    ],
    examples: [
      { type: "social", text: "Te amo mucho.", context: "Usado entre parejas o familiares cercanos." },
      { type: "public", text: "Paz y amor para el mundo.", context: "Slogan común de unidad global." }
    ]
  },
  {
    id: 6,
    title: "Ayuda",
    description: "Un gesto de apoyo donde una mano impulsa físicamente a la otra hacia arriba.",
    level: "PRINCIPIANTE",
    category: "Esenciales Diarios",
    imageUrl: "https://loremflickr.com/600/400/hands,help?random=6",
    concept: "Representa el acto de dar soporte. Una mano plana (base) sostiene a otra (petición/oferta) y la eleva.",
    steps: [
      { icon: "circle", text: "Coloca una mano plana frente a ti." },
      { icon: "squiggle", text: "Coloca el puño de la otra mano sobre la palma plana." },
      { icon: "square", text: "Eleva ambas manos juntas un par de centímetros." }
    ],
    perspectives: [
      "https://loremflickr.com/400/400/hands,front?random=61",
      "https://loremflickr.com/400/400/hands,side?random=62",
      "https://loremflickr.com/400/400/hands,back?random=63"
    ],
    examples: [
      { type: "social", text: "¿Puedes ayudarme?", context: "Hecho con expresión facial de interrogación." },
      { type: "public", text: "Ofrecemos ayuda a los necesitados.", context: "Lenguaje formal usado por organizaciones." }
    ]
  }
];
