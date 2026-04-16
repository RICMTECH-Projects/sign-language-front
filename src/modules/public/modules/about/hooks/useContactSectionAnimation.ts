import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useContactSectionAnimation() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top 70%",
				},
			});

			tl.fromTo(
				".contact-element",
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
			);
		},
		{ scope: container }
	);

	return container;
}
