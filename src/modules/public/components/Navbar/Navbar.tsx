'use client';

import { Menu, UserIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useNavbar } from './hooks/useNavbar';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { CONTACT_LINK } from './constants/navbar.const';

export function Navbar() {
	const { isOpen, toggleMenu, closeMenu, pathname, isActive, isExploreActive } =
		useNavbar();

	return (
		<>
			<nav className='max-w-7xl w-full flex items-center justify-between px-6 md:px-12 py-6 absolute top-8 left-1/2 -translate-1/2 z-50'>
				<Link
					href='/'
					className='font-serif italic text-2xl font-medium tracking-tight text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded'
					aria-label='Home - Signly'>
					Signly
				</Link>

				<DesktopMenu isActive={isActive} />

				<div className='flex items-center gap-2 sm:gap-4'>
					<Link
						href={CONTACT_LINK.href}
						className='hidden md:inline-flex gap-2 items-center justify-center bg-primary text-background dark:text-white px-6 h-11 rounded-full font-medium hover:bg-primary-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
						<UserIcon className='size-5' /> {CONTACT_LINK.name}
					</Link>

					<button
						onClick={toggleMenu}
						className='md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full z-50 ml-2'
						aria-label='Alternar menú'
						aria-expanded={isOpen}>
						{isOpen ? <X size={26} /> : <Menu size={26} />}
					</button>
				</div>
			</nav>

			<MobileMenu
				isOpen={isOpen}
				pathname={pathname}
				isActive={isActive}
				isExploreActive={isExploreActive}
				closeMenu={closeMenu}
			/>
		</>
	);
}
