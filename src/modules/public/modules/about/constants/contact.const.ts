import { Mail, MapPin } from "lucide-react";

export const CONTACT_INFO = {
	email: "gestionclientes@ricmtech.dev",
	location: "Lima, Perú",
	newsletter: {
		title: "Suscríbete al boletín",
		description: "Recibe novedades sobre nuevos cursos y la comunidad Signly cada mes.",
		placeholder: "Tu email...",
		buttonText: "Enviar",
	},
} as const;

export const SOCIAL_LINKS = [
	{ id: "instagram", label: "Instagram", href: "https://instagram.com" },
	{ id: "twitter", label: "Twitter", href: "https://twitter.com" },
	{ id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
] as const;

export const CONTACT_ICON_MAP = {
	Mail,
	MapPin,
} as const;
