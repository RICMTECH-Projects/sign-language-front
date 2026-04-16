import { CARD_STYLES } from "../constants/explore.const";
import { cn } from "@/modules/shared/utils/cn.util";

export function getCardClasses(className?: string): string {
	return cn(CARD_STYLES.base, className);
}

export function getImageClasses(): string {
	return CARD_STYLES.image;
}

export function getImageHoverClasses(): string {
	return CARD_STYLES.imageHover;
}

export function getTitleClasses(): string {
	return CARD_STYLES.title;
}

export function getDescriptionClasses(): string {
	return CARD_STYLES.description;
}
