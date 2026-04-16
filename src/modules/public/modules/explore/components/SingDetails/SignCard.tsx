'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
	getCardClasses,
	getImageClasses,
	getImageHoverClasses,
	getTitleClasses,
	getDescriptionClasses,
} from '../../utils/card-styles.util';

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
		<div className={getCardClasses(className)}>
			<div className={getImageClasses()}>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className={getImageHoverClasses()}
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
					<h3 className={getTitleClasses()}>{title}</h3>
				</div>

				<p className={getDescriptionClasses()}>{description}</p>
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
