import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTestimonialsAnimation() {
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				".testimonial-card",
				{ scale: 0.9, opacity: 0 },
				{
					scale: 1,
					opacity: 1,
					duration: 0.8,
					stagger: 0.1,
					ease: "back.out(1.2)",
					scrollTrigger: {
						trigger: container.current,
						start: "top 70%",
					},
				}
			);
		},
		{ scope: container }
	);

	return container;
}
