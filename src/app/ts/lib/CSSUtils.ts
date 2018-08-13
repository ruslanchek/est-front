import { StyleDeclaration } from 'aphrodite';
import Color = require('color');

export type TStyle = string | object | null | undefined | boolean;

export interface IReactComponentStyles {
	className?: string;
	styles?: object;
}

// TODO: Deprecated
export enum EMQ {
	Phone,
	PhoneOrTablet,
	Tablet,
	Desktop,
	Wide,
}

export const mq = {
	phone: '@media (max-width: 720px) and (min-width: 0px)',
	phoneOrTablet: '@media (max-width: 1024px) and (min-width: 0px)',
	tablet: '@media (max-width: 1024px) and (min-width: 720px)',
	tabletOrDesktop: '@media (max-width: 1440px) and (min-width: 720px)',
	desktop: '@media (max-width: 1440px) and (min-width: 1024px)',
	wide: '@media (max-width: 6000px) and (min-width: 1440px)',
};

export class CSSUtils {
	// TODO: Deprecated
	public static image(require: string): string {
		return `url(${require})`;
	}

	// TODO: Deprecated
	public static media(min: number, max: number, styles: StyleDeclaration): StyleDeclaration {
		const key: string = `@media screen and (max-width: ${max}px) and (min-width: ${min}px)`;
		const result = {};

		result[key] = styles;

		return result;
	}

	// TODO: Deprecated
	public static mediaSize(size: EMQ, styles: StyleDeclaration): StyleDeclaration {
		switch (size) {
			case EMQ.Phone : {
				return this.media(0, 720, styles);
			}
			case EMQ.PhoneOrTablet : {
				return this.media(0, 1024, styles);
			}
			case EMQ.Tablet : {
				return this.media(720, 1024, styles);
			}
			case EMQ.Desktop : {
				return this.media(1024, 1440, styles);
			}
			case EMQ.Wide : {
				return this.media(1440, 6000, styles);
			}
		}
	}

	public static mergeStyles(...styles: TStyle[]): IReactComponentStyles {
		const result: IReactComponentStyles = {};

		styles.forEach(item => {
			if (typeof item === 'string') {
				if (typeof result.className === 'string') {
					result.className += ` ${item}`;
				} else {
					result.className = item;
				}
			}

			if (typeof item === 'object' && item !== null) {
				if (typeof result.styles === 'object') {
					result.styles = {
						...result.styles,
						...item,
					};
				} else {
					result.styles = item;
				}
			}
		});

		return result;
	}

	public static linearGradient(angle: number, fromColor: Color, toColor: Color, from: number, to: number): string {
		return `linear-gradient(${angle.toString()}deg, ${fromColor.toString()} ${from}%, ${toColor.toString()} ${to}%)`;
	}
}
