'use client';

import { Heart, Brain } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WhyItMatters() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: 'top 60%',
				},
			});

			tl.fromTo(
				'.matter-text',
				{ y: -30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
			);
			tl.fromTo(
				'.matter-img',
				{ scale: 0.8, opacity: 0 },
				{
					scale: 1,
					opacity: 1,
					duration: 1,
					stagger: 0.1,
					ease: 'back.out(1.2)',
				},
				'-=0.6',
			);
		},
		{ scope: container },
	);

	return (
		<section
			ref={container}
			className='w-full bg-[#313131] py-24 md:py-32 px-6 md:px-12 text-fix-background'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
				<div className='flex flex-col gap-12'>
					<h2 className='matter-text text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] max-w-lg'>
						Hacer
						<br /> comunidad{' '}
						<span className='italic text-[#ffbba6]'>importa</span>.
					</h2>

					<div className='flex flex-col gap-8'>
						<div className='matter-text flex gap-4'>
							<div className='shrink-0 text-[#ffbba6] mt-1'>
								<Heart size={24} />
							</div>
							<div className='flex flex-col'>
								<h4 className='text-xl font-bold mb-2'>Construye Puentes</h4>
								<p className='text-white/70 leading-relaxed max-w-sm'>
									Al aprender, eliminas barreras y formas conexiones con
									personas que de otra manera no podrías.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='shrink-0 text-[#ffbba6] mt-1'>
								<Brain size={24} />
							</div>
							<div className='flex flex-col'>
								<h4 className='text-xl font-bold mb-2'>Desarrolla tu Mente</h4>
								<p className='text-white/70 leading-relaxed max-w-sm'>
									Aprender este idioma visual estimula partes del cerebro
									diferentes a las de los idiomas hablados.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full flex justify-center lg:justify-end gap-6 h-full relative mt-12 lg:mt-0'>
					<div className='matter-img relative w-48 sm:w-64 h-70 sm:h-95 mt-12 bg-black rounded-4xl overflow-hidden shadow-2xl'>
						<Image
							src='/img/hands-1.webp'
							alt='Manos comunicando'
							fill
							sizes='(max-width: 768px) 50vw, 250px'
							className='object-cover'
						/>
						<div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10'></div>
					</div>

					<div className='matter-img relative w-48 sm:w-64 h-70 sm:h-95 -mt-4 bg-black rounded-4xl overflow-hidden shadow-2xl'>
						<Image
							src='/img/hands-2.webp'
							alt='Manos comunicando'
							fill
							sizes='(max-width: 768px) 50vw, 250px'
							className='object-cover'
						/>
						<div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10'></div>
					</div>
				</div>
			</div>
		</section>
	);
}
