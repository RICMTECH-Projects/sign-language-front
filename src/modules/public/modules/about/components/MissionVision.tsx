'use client';

import { useMissionVisionAnimation } from '../hooks/useMissionVisionAnimation';
import {
	MISSION_VISION_DATA,
	ICON_MAP,
} from '../constants/mission-vision.const';

export function MissionVision() {
	const container = useMissionVisionAnimation();

	return (
		<section
			ref={container}
			className='w-full py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950/50'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
					{MISSION_VISION_DATA.map((point) => {
						const IconComponent = ICON_MAP[point.icon as keyof typeof ICON_MAP];
						return (
							<div
								key={point.id}
								className='mv-card p-10 rounded-4xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex flex-col gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500'>
								<div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center'>
									<IconComponent className='w-8 h-8 text-primary' />
								</div>
								<h3 className='text-2xl font-serif font-bold text-foreground'>
									{point.title}
								</h3>
								<p className='text-foreground/70 leading-relaxed'>
									{point.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
