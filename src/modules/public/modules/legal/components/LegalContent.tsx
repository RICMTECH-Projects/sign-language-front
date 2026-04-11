export function LegalContent({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col gap-12 text-foreground/80 leading-relaxed'>
			{children}
		</div>
	);
}
