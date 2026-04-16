import { Target, Eye, Users } from "lucide-react";

export const MISSION_VISION_DATA = [
	{
		id: "mission",
		icon: "Target",
		title: "Misión",
		description:
			"Empoderar a través del lenguaje visual, rompiendo barreras de comunicación para construir un mundo más inclusivo, accesible y empático para todos.",
	},
	{
		id: "vision",
		icon: "Eye",
		title: "Visión",
		description:
			"Ser la plataforma líder global en el aprendizaje de lengua de señas, donde cada gesto cuente y cada persona tenga la oportunidad de ser escuchada sin palabras.",
	},
	{
		id: "values",
		icon: "Users",
		title: "Valores",
		description:
			"Inclusión, respeto cultural, innovación constante y compromiso con la comunidad sorda son el corazón de todo lo que hacemos en Signly.",
	},
] as const;

export const ICON_MAP = {
	Target,
	Eye,
	Users,
} as const;
