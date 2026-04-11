import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
	label: string;
	href: string;
}

export const CustomButtonBack = ({ label, href }: Props) => {
	return (
		<Link
			href={href}
			className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors group mb-2"
		>
			<ArrowRight
				size={18}
				className="rotate-180 group-hover:-translate-x-1 transition-transform"
			/>
			{label}
		</Link>
	);
};
