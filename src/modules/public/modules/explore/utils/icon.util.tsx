import { Circle, Square, Activity } from 'lucide-react';
import { IconType } from '../constants/explore.const';

export function getMovementGuideIcon(type: IconType) {
	switch (type) {
		case 'circle':
			return <Circle size={20} />;
		case 'squiggle':
			return <Activity size={20} />;
		case 'square':
			return <Square size={20} />;
		default:
			return null;
	}
}
