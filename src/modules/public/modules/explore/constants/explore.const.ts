export const LEVEL_OPTIONS = [
	{ label: 'Todos los niveles', value: 'all' },
	{ label: 'Principiante', value: 'beginner' },
	{ label: 'Intermedio', value: 'intermediate' },
	{ label: 'Avanzado', value: 'advanced' },
];

export const CATEGORY_OPTIONS = [
	{ label: 'Todas', value: 'all' },
	{ label: 'Esenciales Diarios', value: 'daily' },
	{ label: 'Emociones', value: 'emotions' },
	{ label: 'Saludos', value: 'greetings' },
	{ label: 'Alfabeto', value: 'alphabet' },
];

export const EXPLORE_COLORS = {
	primaryButton: '#A83F2A',
	primaryButtonHover: '#A83F2A',
	movementGuideBackground: '#f5f0ff',
	movementGuideBorder: '#e0d4ff',
};

export const CARD_STYLES = {
	base: 'group flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300',
	image: 'relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800',
	imageHover: 'object-cover group-hover:scale-105 transition-transform duration-700 ease-out',
	title: 'font-serif text-2xl text-foreground group-hover:text-primary transition-colors',
	description: 'text-sm text-foreground/70 leading-relaxed pr-4',
};

export const ICON_TYPES = {
	circle: 'circle',
	squiggle: 'squiggle',
	square: 'square',
};

export type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];