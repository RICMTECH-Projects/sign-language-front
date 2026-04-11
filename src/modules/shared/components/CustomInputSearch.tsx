'use client';

import { Search, X } from 'lucide-react';
import { cn } from '../utils/cn.util';

interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	inputClassName?: string;
}

export function CustomInputSearch({
	value,
	onChange,
	placeholder = 'Buscar...',
	className,
	inputClassName,
}: SearchInputProps) {
	const hasValue = value.length > 0;

	return (
		<div className={cn('relative flex items-center', className)}>
			{/* icono search */}
			<div className='absolute left-3 flex items-center pointer-events-none'>
				<Search
					size={16}
					className='text-zinc-400'
				/>
			</div>

			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className={cn(
					'w-full pl-10 pr-10 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm outline-none transition-all placeholder:text-zinc-500 focus:ring-2 focus:ring-primary',
					inputClassName,
				)}
			/>

			{hasValue && (
				<button
					onClick={() => onChange('')}
					className='absolute right-2 flex items-center justify-center w-7 h-7 text-zinc-500 hover:text-foreground rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60 transition-all'
					aria-label='Limpiar búsqueda'>
					<X size={14} />
				</button>
			)}
		</div>
	);
}
