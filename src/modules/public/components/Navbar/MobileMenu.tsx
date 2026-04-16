import Link from 'next/link';
import { CONTACT_LINK, NAV_LINKS } from './constants/navbar.const';

interface MobileMenuProps {
	isOpen: boolean;
	pathname: string;
	isActive: (path: string) => boolean;
	isExploreActive: () => boolean;
	closeMenu: () => void;
}

export function MobileMenu({
	isOpen,
	pathname,
	isActive,
	isExploreActive,
	closeMenu,
}: MobileMenuProps) {
	return (
		<div
			className={`fixed inset-0 bg-white dark:bg-zinc-950 z-40 md:hidden flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
				isOpen
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-full pointer-events-none'
			}`}>
			{NAV_LINKS.map((link, idx) => {
				const isLinkActive =
					isActive(link.href) ||
					(link.href === '/explorar' && isExploreActive());

				return (
					<Link
						key={link.href}
						href={link.href}
						onClick={closeMenu}
						className={`relative text-2xl font-serif transition-all duration-300 flex items-center justify-center gap-3 ${
							isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
						} ${
							isLinkActive
								? 'text-primary font-bold'
								: 'text-foreground/60 hover:text-primary'
						}`}
						style={{ transitionDelay: `${isOpen ? idx * 100 : 0}ms` }}>
						{link.name}
						{isLinkActive && (
							<span className='w-1.5 h-1.5 bg-primary rounded-full' />
						)}
					</Link>
				);
			})}

			<Link
				href={CONTACT_LINK.href}
				onClick={closeMenu}
				className={`mt-6 inline-flex gap-2 items-center justify-center bg-primary text-white border-2 border-primary px-12 h-16 rounded-full font-medium hover:bg-transparent hover:text-primary shadow-xl shadow-primary/20 transition-all duration-500 ${
					isOpen
						? 'opacity-100 translate-y-0 scale-100'
						: 'opacity-0 translate-y-10 scale-90'
				}`}
				style={{ transitionDelay: `${isOpen ? 400 : 0}ms` }}>
				{CONTACT_LINK.name}
			</Link>
		</div>
	);
}
