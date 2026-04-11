'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function useExploreAnimation() {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				'.explore-element',
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.15,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: container.current,
						start: 'top 80%',
					},
				},
			);

			gsap.to('.load-more-arrow', {
				y: 8,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
			});
		},
		{ scope: container },
	);

	return { container };
}