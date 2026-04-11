import { cn } from "../utils/cn.util";

export interface TabOption {
	label: string;
	value: string;
}

interface TabsProps {
	options: TabOption[];
	value: string;
	onChange: (value: string) => void;
	className?: string;
	tabClassName?: string;
	activeClassName?: string;
}

export function CustomTabs({
	options,
	value,
	onChange,
	className,
	tabClassName,
	activeClassName,
}: TabsProps) {
	return (
		<div
			className={cn(
				'flex flex-wrap items-center gap-3 w-full lg:w-auto',
				className,
			)}>
			{options.map((opt) => {
				const isActive = opt.value === value;

				return (
					<button
						key={opt.value}
						onClick={() => onChange(opt.value)}
						className={cn(
							'text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer',
							isActive
								? 'bg-[#A83F2A] text-white hover:bg-[#A83F2A]/90'
								: 'bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground',
							tabClassName,
							isActive && activeClassName,
						)}>
						{opt.label}
					</button>
				);
			})}
		</div>
	);
}
