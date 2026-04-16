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

interface CategoryCardProps {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	href?: string;
	className?: string;
}

export function CategoryCard({
	name,
	description,
	imageUrl,
	href,
	className,
}: CategoryCardProps) {
	const content = (
		<div className={getCardClasses(className)}>
			<div className={getImageClasses()}>
				<Image
					src={imageUrl}
					alt={name}
					fill
					className={getImageHoverClasses()}
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className={getTitleClasses()}>{name}</h3>

				<p className={getDescriptionClasses()}>{description}</p>
			</div>
		</div>
	);

	if (href) {
		return (
			<Link
				href={href}
				className='cursor-pointer'>
				{content}
			</Link>
		);
	}

	return content;
}
