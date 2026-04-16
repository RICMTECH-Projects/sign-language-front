'use client';

import { useCommunityHeroAnimation } from '../hooks/useCommunityHeroAnimation';

export function CommunityHero() {
	const container = useCommunityHeroAnimation();

	return (
		<section
			ref={container}
			className='relative w-full pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden bg-white dark:bg-black'>
			<div className='max-w-4xl w-full'>
				<span className='comm-subtitle inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-6'>
					Aprender es mejor juntos
				</span>
				<h1 className='comm-title text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] tracking-tight mb-8'>
					Una comunidad que <br />
					habla con las <span className='italic text-primary'>manos</span>.
				</h1>
				<p className='comm-subtitle text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed'>
					Únete a miles de personas que, como tú, están rompiendo barreras.
					Comparte tu progreso, resuelve dudas y conecta con la cultura sorda de
					forma real.
				</p>
			</div>

			{/* Dynamic background element */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none'>
				<svg
					className='w-full h-full opacity-5 dark:opacity-10'
					viewBox='0 0 1000 1000'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle
						cx='500'
						cy='500'
						r='400'
						stroke='currentColor'
						strokeWidth='1'
						strokeDasharray='10 10'
					/>
					<circle
						cx='500'
						cy='500'
						r='300'
						stroke='var(--color-primary, #D65E45)'
						strokeWidth='0.5'
					/>
				</svg>
			</div>
		</section>
	);
}
