'use client';

import { cn } from '@/modules/shared/utils/cn.util';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
	title: string;
	description?: string;
	className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
	return (
		<div
			className={cn(
				"explore-element w-full py-24 flex flex-col items-center justify-center text-center gap-5 bg-white/40 dark:bg-zinc-900/20 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-4xl backdrop-blur-sm",
				className,
			)}>
			<div className='w-20 h-20 flex items-center justify-center rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 shadow-sm'>
				<SearchX
					size={36}
					strokeWidth={1.5}
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-2xl font-serif text-foreground'>{title}</h3>

				{description && (
					<p className='text-foreground/50 text-sm max-w-sm mx-auto leading-relaxed'>
						{description}
					</p>
				)}
			</div>
		</div>
	);
}
