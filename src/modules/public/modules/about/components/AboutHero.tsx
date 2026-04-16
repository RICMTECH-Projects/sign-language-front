'use client';

import { useAboutHeroAnimation } from '../hooks/useAboutHeroAnimation';

export function AboutHero() {
	const container = useAboutHeroAnimation();

	return (
		<section
			ref={container}
			className='relative w-full pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden bg-white dark:bg-black'>
			<div className='max-w-4xl w-full'>
				<span className='about-subtitle inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-6'>
					Más que una plataforma
				</span>
				<h1 className='about-title text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight tracking-tight mb-8'>
					Nuestra historia, <br />
					tu <span className='italic text-primary'>voz</span>.
				</h1>
				<p className='about-subtitle text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed'>
					En Signly, creemos que la comunicación es un derecho humano
					fundamental. No solo enseñamos señas, construimos puentes de empatía y
					entendimiento mutuo.
				</p>
			</div>

			{/* Abstract background elements */}
			<div className='absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20 dark:opacity-10'>
				<svg
					className='w-full h-full'
					viewBox='0 0 1000 1000'
					preserveAspectRatio='none'>
					<circle
						cx='10%'
						cy='10%'
						r='300'
						fill='var(--color-primary, #D65E45)'
						filter='blur(150px)'
					/>
					<circle
						cx='90%'
						cy='90%'
						r='300'
						fill='#c2eef5'
						filter='blur(150px)'
					/>
				</svg>
			</div>
		</section>
	);
}
