"use client";

import { CustomButtonBack } from "@/modules/shared/components/CustomButtonBack";
import { cn } from "@/modules/shared/utils/cn.util";

interface SectionHeaderProps {
	eyebrow?: string;
	title: React.ReactNode;
	description?: string;
	className?: string;
	hrefBtnBack?: string;
	labelBtnBack?: string;
}

export function SectionHeader({
	eyebrow,
	title,
	description,
	className,
	hrefBtnBack,
	labelBtnBack,
}: SectionHeaderProps) {
	return (
		<div className="flex flex-col-reverse gap-9 lg:gap-0 lg:flex-row items-start justify-between">
			<div className={cn("flex flex-col gap-6 max-w-3xl", className)}>
				{eyebrow && (
					<span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase">
						{eyebrow}
					</span>
				)}

				<h2 className="text-4xl md:text-6xl font-serif text-foreground leading-[1.1] tracking-tight">
					{title}
				</h2>

				{description && (
					<p className="text-foreground/70 leading-relaxed text-sm md:text-base max-w-2xl">
						{description}
					</p>
				)}
			</div>

			{hrefBtnBack && labelBtnBack && (
				<CustomButtonBack href={hrefBtnBack} label={labelBtnBack} />
			)}
		</div>
	);
}
