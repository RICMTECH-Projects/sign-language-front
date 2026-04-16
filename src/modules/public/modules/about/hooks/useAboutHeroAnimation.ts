import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useAboutHeroAnimation() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.fromTo(
				".about-title",
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1, ease: "power4.out" }
			);
			tl.fromTo(
				".about-subtitle",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
				"-=0.6"
			);
		},
		{ scope: container }
	);

	return container;
}
