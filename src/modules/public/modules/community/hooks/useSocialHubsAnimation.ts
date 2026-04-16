import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSocialHubsAnimation() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				".hub-card",
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: container.current,
						start: "top 75%",
					},
				}
			);
		},
		{ scope: container }
	);

	return container;
}
