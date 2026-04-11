'use client';

import { cn } from '@/modules/shared/utils/cn.util';
import Image from 'next/image';
import Link from 'next/link';

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
		<div
			className={cn(
				'group flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300',
				className,
			)}>
			<div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800'>
				<Image
					src={imageUrl}
					alt={name}
					fill
					className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='font-serif text-2xl text-foreground group-hover:text-primary transition-colors'>
					{name}
				</h3>

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
				className='cursor-pointer'>
				{content}
			</Link>
		);
	}

	return content;
}
