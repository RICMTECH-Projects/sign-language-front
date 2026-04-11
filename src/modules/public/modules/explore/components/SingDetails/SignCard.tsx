'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/modules/shared/utils/cn.util';

interface SignCardProps {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	level: string;
	category: string;
	href?: string;
	className?: string;
	onFavorite?: () => void;
}

export function SignCard({
	title,
	description,
	imageUrl,
	level,
	category,
	href,
	className,
}: SignCardProps) {
	const content = (
		<div
			className={cn(
				'group flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300',
				className,
			)}>
			<div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
				/>

				<div className='absolute top-4 left-4 z-10 flex flex-wrap gap-2 pr-4'>
					<div className='bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-[10px] font-bold tracking-widest text-foreground uppercase'>
						{level}
					</div>
					<div className='bg-black/70 dark:bg-white/80 text-white dark:text-black backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-[10px] font-bold tracking-widest uppercase'>
						{category}
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-2'>
				<div className='flex items-center justify-between'>
					<h3 className='font-serif text-2xl text-foreground group-hover:text-primary transition-colors'>
						{title}
					</h3>

					{/*
						<button
						onClick={(e) => {
							e.preventDefault(); 
							onFavorite?.();
						}}
						className='text-zinc-400 hover:text-red-500 transition-colors'
						aria-label='Favorite'>
						<Heart
							size={20}
							fill='currentColor'
						/>
					</button>
						*/}
				</div>

				<p className='text-sm text-foreground/70 leading-relaxed pr-4'>
					{description}
				</p>
			</div>
		</div>
	);

	if (href) {
		return (
			<Link
				href={href}
				className='explore-element cursor-pointer'>
				{content}
			</Link>
		);
	}

	return content;
}
