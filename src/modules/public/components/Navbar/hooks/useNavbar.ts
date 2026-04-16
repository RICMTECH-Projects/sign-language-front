import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	const isExploreActive = () =>
		isActive("/explorar") || pathname.startsWith("/explorar/");

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return {
		isOpen,
		toggleMenu,
		closeMenu,
		pathname,
		isActive,
		isExploreActive,
	};
}
