'use client';

import { Quote } from 'lucide-react';
import { useTestimonialsAnimation } from '../hooks/useTestimonialsAnimation';
import { TESTIMONIALS_DATA } from '../constants/testimonials.const';

export function TestimonialsGrid() {
	const container = useTestimonialsAnimation();

	return (
		<section
			ref={container}
			className='w-full py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black overflow-hidden'>
			<div className='max-w-7xl mx-auto'>
				<div className='mb-16'>
					<span className='inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4'>
						Voces de Signly
					</span>
					<h2 className='text-4xl md:text-6xl font-serif text-foreground leading-tight'>
						Lo que dice nuestra <br />
						<span className='italic text-primary'>comunidad</span>.
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto'>
					{TESTIMONIALS_DATA.map((t) => (
						<div
							key={t.id}
							className={`testimonial-card relative group p-8 rounded-4xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex flex-col justify-between overflow-hidden
								${t.size === 'large' ? 'md:row-span-2 lg:col-span-1' : ''}
								${t.size === 'medium' ? 'lg:col-span-2' : ''}
							`}>
							<div className='relative z-10'>
								<Quote className='w-8 h-8 text-primary/20 mb-4' />
								<p
									className={`text-foreground/80 leading-relaxed italic ${t.size === 'large' ? 'text-xl' : 'text-base'}`}>
									&quot;{t.text}&quot;
								</p>
							</div>

							<div className='relative z-10 flex items-center gap-4 mt-6'>
								<div className='relative w-12 h-12 rounded-full overflow-hidden bg-zinc-200'>
									<div className='absolute inset-0 bg-primary opacity-20 flex items-center justify-center font-bold text-primary'>
										{t.name.charAt(0)}
									</div>
								</div>
								<div>
									<h4 className='font-bold text-sm'>{t.name}</h4>
									<p className='text-xs text-foreground/50'>{t.role}</p>
								</div>
							</div>

							{/* Decorative background */}
							<div className='absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity'>
								<Quote className='w-16 h-16' />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
