import Link from 'next/link';
import { NAV_LINKS } from './constants/navbar.const';

interface DesktopMenuProps {
	isActive: (path: string) => boolean;
}

export function DesktopMenu({ isActive }: DesktopMenuProps) {
	return (
		<div className='hidden md:flex items-center gap-8 text-sm font-medium'>
			{NAV_LINKS.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className={`relative group transition-colors pb-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
						isActive(link.href)
							? 'text-primary font-bold'
							: 'text-foreground hover:text-primary'
					}`}>
					{link.name}
					<span
						className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform origin-left duration-300 ${
							isActive(link.href)
								? 'scale-x-100'
								: 'scale-x-0 group-hover:scale-x-100'
						}`}
					/>
				</Link>
			))}
		</div>
	);
}
