'use client';

import { X } from 'lucide-react';
import { cn } from '../utils/cn.util';

interface ClearFiltersButtonProps {
	onClear: () => void;
	label?: string;
	className?: string;
}

export function ClearButton({
	onClear,
	label = 'Limpiar filtros',
	className,
}: ClearFiltersButtonProps) {
	return (
		<button
			onClick={onClear}
			className={cn(
				'flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-md shadow-sm',
				'text-red-600 dark:text-red-400 bg-red-50/80 dark:bg-red-500/10 border border-red-200/80 dark:border-red-500/20',
				'hover:bg-red-100 dark:hover:bg-red-500/20',
				className,
			)}
			title={label}>
			<X size={14} />
			<span className='whitespace-nowrap'>{label}</span>
		</button>
	);
}
