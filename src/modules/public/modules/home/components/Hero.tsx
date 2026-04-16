'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartHandshakeIcon, SearchIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.fromTo(
				'.hero-text',
				{ y: -30, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.2,
					ease: 'power3.out',
					delay: 0.2,
				},
			);
			tl.fromTo(
				'.hero-image',
				{ scale: 0.95, y: -20, opacity: 0 },
				{ scale: 1, y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
				'-=0.6',
			);
			tl.fromTo(
				'.hero-stat',
				{ y: -20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' },
				'-=0.4',
			);

			tl.fromTo(
				'.hero-svg-path',
				{ strokeDasharray: 1000, strokeDashoffset: 1000 },
				{ strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' },
				'-=1.5',
			);
		},
		{ scope: container },
	);

	return (
		<header
			ref={container}
			className='relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden'>
			<div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
				<div className='relative flex flex-col gap-6 md:pr-12 z-10'>
					<svg
						className='absolute -top-16 -left-12 w-[150%] h-[150%] -z-10 opacity-20 pointer-events-none'
						viewBox='0 0 400 400'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							className='hero-svg-path'
							d='M10,200 Q150,50 300,100 T390,300'
							stroke='currentColor'
							strokeWidth='6'
							strokeLinecap='round'
						/>
						<path
							className='hero-svg-path'
							d='M50,250 C100,500 250,50 350,280'
							stroke='var(--color-primary, #D65E45)'
							strokeWidth='3'
							strokeLinecap='round'
						/>
					</svg>

					<div className='hero-text inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 rounded-full border border-primary/20'>
						<span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
						<span className='text-sm font-medium text-primary'>
							Iniciativa de RICM Tech
						</span>
					</div>

					<h1 className='hero-text text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] tracking-tight'>
						Aprende a hablar <br className='hidden sm:block' />
						con las <span className='italic text-primary'>manos</span>{' '}
						<br className='hidden sm:block' />y el corazón.
					</h1>

					<p className='hero-text text-lg md:text-xl text-foreground/80 max-w-prose leading-relaxed'>
						Domina la Lengua de Señas de forma fácil y efectiva con Signly,
						desarrollado por RICM Tech. Un curso diseñado para todos, sin
						importar tu experiencia previa, para fomentar una comunicación sin
						barreras.
					</p>

					<div className='hero-text flex flex-col sm:flex-row items-center gap-4 mt-4'>
						<Link
							href='/explorar'
							className='inline-flex gap-2 items-center justify-center w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
							Explorar señas <SearchIcon className='size-4' />
						</Link>
						<Link
							href='/nosotros'
							className='inline-flex gap-2 items-center justify-center w-full sm:w-auto h-12 px-8 rounded-full bg-primary/10 border-primary border-2 text-primary font-medium hover:bg-primary/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
							Conócenos <HeartHandshakeIcon className='size-5' />
						</Link>
					</div>
				</div>

				<div className='relative w-full h-125 sm:h-150 lg:h-175 flex justify-center lg:justify-end'>
					<div className='hero-image relative w-full max-w-120 h-full rounded-4xl overflow-hidden shadow-2xl'>
						<Image
							src='/img/hands-3.webp'
							alt='Manos comunicando'
							fill
							priority
							className='object-cover'
							sizes='(max-width: 768px) 100vw, 480px'
						/>
						<div className='absolute inset-0 bg-black/10 z-10' />
					</div>

					<div className='hero-stat absolute bottom-12 left-0 sm:-left-8 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md p-6 rounded-2xl shadow-xl w-64 ring-1 ring-black/5 dark:ring-white/10 z-20'>
						<h3 className='text-3xl font-bold text-primary mb-2'>
							Una Habilidad
						</h3>
						<p className='text-sm text-foreground/80 leading-snug'>
							Esencial en el mundo moderno. Mejora tus oportunidades y vuélvete
							más inclusivo.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
