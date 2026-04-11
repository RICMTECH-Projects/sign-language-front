interface LegalSectionProps {
	title: string;
	children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
	return (
		<section className='space-y-4'>
			<h2 className='text-3xl font-serif text-foreground'>{title}</h2>
			{children}
		</section>
	);
}
