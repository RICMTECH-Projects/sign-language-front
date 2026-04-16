'use client';

import { SendHorizonalIcon } from 'lucide-react';
import { useContactSectionAnimation } from '../hooks/useContactSectionAnimation';
import {
	CONTACT_INFO,
	SOCIAL_LINKS,
	CONTACT_ICON_MAP,
} from '../constants/contact.const';

export function ContactSection() {
	const container = useContactSectionAnimation();

	return (
		<section
			ref={container}
			id='contacto'
			className='w-full py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32'>
				<div className='flex flex-col gap-10'>
					<div className='space-y-4'>
						<span className='contact-element inline-block text-xs font-semibold tracking-widest text-primary uppercase'>
							Hablemos
						</span>
						<h2 className='contact-element text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight'>
							¿Tienes dudas? <br />
							Estamos a un <span className='italic text-primary'>gesto</span> de
							distancia.
						</h2>
					</div>

					<div className='flex flex-col gap-8 mt-4'>
						<div className='contact-element flex items-center gap-4 sm:gap-6 group cursor-pointer'>
							<div className='w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300'>
								<CONTACT_ICON_MAP.Mail
									size={20}
									className='sm:w-6 sm:h-6'
								/>
							</div>
							<div className='min-w-0'>
								<p className='text-[10px] sm:text-xs text-foreground/50 uppercase font-bold tracking-wider mb-1'>
									Email
								</p>
								<p className='text-lg sm:text-xl font-medium break-all sm:break-normal'>
									{CONTACT_INFO.email}
								</p>
							</div>
						</div>

						<div className='contact-element flex items-center gap-4 sm:gap-6 group cursor-pointer'>
							<div className='w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300'>
								<CONTACT_ICON_MAP.MapPin
									size={20}
									className='sm:w-6 sm:h-6'
								/>
							</div>
							<div>
								<p className='text-[10px] sm:text-xs text-foreground/50 uppercase font-bold tracking-wider mb-1'>
									Ubicación
								</p>
								<p className='text-lg sm:text-xl font-medium'>
									{CONTACT_INFO.location}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-12'>
					<div className='space-y-6'>
						<h4 className='contact-element text-xl font-bold'>
							Nuestras redes
						</h4>
						<div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
							{SOCIAL_LINKS.map((social) => (
								<a
									key={social.id}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className='contact-element flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 hover:bg-[#c2eef5] dark:hover:bg-[#1c3b40] group transition-all duration-500'>
									<div className='text-foreground group-hover:text-primary transition-colors'>
										{/* Icon placeholder */}
									</div>
									<span className='text-xs font-bold uppercase tracking-widest'>
										{social.label}
									</span>
								</a>
							))}
						</div>
					</div>

					<div className='contact-element p-6 sm:p-10 rounded-4xl sm:rounded-[2.5rem] bg-linear-to-br from-[#f9e9e6] to-[#f4f2ff] dark:from-[#31201d] dark:to-[#2a243d] flex flex-col gap-6'>
						<h4 className='text-2xl font-serif'>
							{CONTACT_INFO.newsletter.title}
						</h4>
						<p className='text-foreground/70 text-sm'>
							{CONTACT_INFO.newsletter.description}
						</p>
						<div className='flex flex-col md:flex-row gap-4'>
							<input
								type='email'
								placeholder={CONTACT_INFO.newsletter.placeholder}
								className='flex-1 h-12 px-6 py-4 rounded-full bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary/50 transition-all'
							/>
							<button className='w-full h-12  md:size-12 rounded-full bg-primary text-white inline-flex items-center justify-center gap-4 cursor-pointer hover:bg-primary-hover transition-colors'>
								<span className='block md:hidden'>
									{CONTACT_INFO.newsletter.buttonText}
								</span>{' '}
								<SendHorizonalIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
