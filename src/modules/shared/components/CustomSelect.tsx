'use client';

import { useState, useRef, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn.util';

interface Option {
	label: string;
	value: string;
}

interface CustomSelectProps {
	options: Option[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	triggerClassName?: string;
	contentClassName?: string;
	loading?: boolean;
}

export function CustomSelect({
	options,
	value,
	onChange,
	placeholder = 'Seleccionar',
	className,
	contentClassName,
	triggerClassName,
	loading = false,
}: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const selected = options.find((opt) => opt.value === value);

	// cerrar al hacer click fuera
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div
			ref={ref}
			className={cn('relative inline-block', className)}>
			<button
				onClick={() => !loading && setIsOpen(!isOpen)}
				disabled={loading}
				className={cn(
					'flex items-center gap-2 text-sm font-semibold transition-colors whitespace-nowrap',
					loading
						? 'text-foreground/60 cursor-not-allowed'
						: 'text-foreground/80 hover:text-primary',
					triggerClassName,
				)}>
				{selected?.label || placeholder}

				{loading ? (
					<Loader2
						className='animate-spin ml-1'
						size={14}
					/>
				) : (
					<span className='text-[10px] ml-1'>▼</span>
				)}
			</button>

			{isOpen && !loading && (
				<div
					className={cn(
						`
						absolute z-30 mt-3
						left-1/2 -translate-x-1/2
						sm:left-auto sm:right-0 sm:translate-x-0
						
						min-w-50 w-max max-w-[90vw]
						bg-white dark:bg-zinc-900
						border border-zinc-100 dark:border-zinc-800
						rounded-2xl shadow-xl
						overflow-hidden py-2
						
						animate-in fade-in slide-in-from-top-2 duration-200
						`,
						contentClassName,
					)}>
					{options.map((opt) => {
						const isActive = opt.value === value;

						return (
							<button
								key={opt.value}
								onClick={() => {
									onChange(opt.value);
									setIsOpen(false);
								}}
								className={cn(
									'w-full text-left px-5 py-2.5 text-sm flex items-center justify-between transition-colors',
									'text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-primary',
								)}>
								{opt.label}
								{isActive && (
									<Check
										size={16}
										className='text-primary'
									/>
								)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
