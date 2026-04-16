'use client';

import { Sparkles, Activity, Users } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FeatureGrid() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				'.feature-card',
				{ y: -60, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.15,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: container.current,
						start: 'top 75%',
					},
				},
			);
		},
		{ scope: container },
	);

	return (
		<section
			ref={container}
			className='w-full py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-[#111111]'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
				<div className='feature-card relative group bg-card-purple p-8 md:p-10 rounded-3xl overflow-hidden min-h-75 flex flex-col justify-end transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 sm:col-span-1 md:col-span-2 lg:col-span-2'>
					<div className='absolute top-8 left-8 text-foreground/80'>
						<Sparkles size={28} />
					</div>

					<div className='absolute top-1/2 -translate-y-1/2 right-4 md:right-12 text-black/5 dark:text-white/5 font-serif text-[120px] md:text-[180px] italic leading-none pointer-events-none select-none'>
						01
					</div>

					<div className='relative z-10 w-full md:max-w-md'>
						<h3 className='text-2xl font-serif font-medium text-foreground mb-3'>
							Descubre
						</h3>
						<p className='text-sm md:text-base text-foreground/70 leading-relaxed'>
							Accede a nuestra biblioteca de gestos. Conceptos básicos curados
							paso a paso para un aprendizaje sin frustraciones.
						</p>
					</div>
				</div>

				<div className='feature-card relative group bg-card-blue p-8 md:p-10 rounded-3xl overflow-hidden min-h-75 flex flex-col justify-end transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/10 sm:col-span-1 md:col-span-1 lg:col-span-1'>
					<div className='absolute top-8 left-8 text-foreground/80'>
						<Activity size={28} />
					</div>

					<div className='absolute top-8 right-8 text-black/5 dark:text-white/5 font-serif text-[100px] italic leading-none pointer-events-none select-none'>
						02
					</div>

					<div className='relative z-10'>
						<h3 className='text-2xl font-serif font-medium text-foreground mb-3'>
							Practica
						</h3>
						<p className='text-sm md:text-base text-foreground/70 leading-relaxed'>
							Mejora tu fluidez cada día con ejercicios cortos e interactivos
							fáciles de seguir.
						</p>
					</div>
				</div>

				<div className='feature-card relative bg-[#2a2725] p-8 rounded-3xl overflow-hidden min-h-75 flex items-center justify-center sm:col-span-1 md:col-span-1 lg:col-span-1'>
					<div className='w-32 h-32 bg-[#A83F2A] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md transform rotate-12 opacity-90 shadow-2xl'></div>
				</div>

				<div className='feature-card relative group bg-card-orange p-8 md:p-10 rounded-3xl overflow-hidden min-h-75 flex flex-col justify-end transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 sm:col-span-1 md:col-span-2 lg:col-span-2'>
					<div className='absolute top-8 left-8 text-foreground/80'>
						<Users size={28} />
					</div>

					<div className='absolute bottom-4 right-8 text-black/5 dark:text-white/5 font-serif text-[120px] md:text-[180px] italic leading-none pointer-events-none select-none'>
						03
					</div>

					<div className='relative z-10 w-full md:max-w-md'>
						<h3 className='text-2xl font-serif font-medium text-foreground mb-3'>
							Conecta
						</h3>
						<p className='text-sm md:text-base text-foreground/70 leading-relaxed'>
							Comunícate libremente y forma parte de una comunidad donde todos
							nos entendemos, sin límites.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
