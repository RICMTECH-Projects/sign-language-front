'use client';

import { ArrowDown, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn.util';

interface LoadMoreButtonProps {
	onClick?: () => void;
	label?: string;
	loading?: boolean;
	className?: string;
}

export function LoadMoreButton({
	onClick,
	label = 'Cargar más',
	loading = false,
	className,
}: LoadMoreButtonProps) {
	return (
		<div className={cn('w-full flex justify-center mt-16', className)}>
			<button
				onClick={onClick}
				disabled={loading}
				className='group flex flex-col items-center gap-4 cursor-pointer outline-none border-none bg-transparent disabled:opacity-60 disabled:cursor-not-allowed'>
				<span className='text-sm sm:text-xs font-bold tracking-[0.3em] text-foreground/40 group-hover:text-primary uppercase transition-all duration-500'>
					{label}
				</span>

				<div className='relative w-12 h-12 flex items-center justify-center'>
					<div className='absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-800 scale-100 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500'></div>

					{loading ? (
						<Loader2 className='size-5 text-primary animate-spin' />
					) : (
						<ArrowDown className='load-more-arrow size-5 text-primary' />
					)}
				</div>
			</button>
		</div>
	);
}
