import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useGestureHeroAnimation() {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				".hero-ui",
				{ opacity: 0, scale: 0.9 },
				{
					opacity: 1,
					scale: 1,
					duration: 1,
					ease: "power3.out",
					stagger: 0.2,
				}
			);
		},
		{ scope: container }
	);

	return container;
}
