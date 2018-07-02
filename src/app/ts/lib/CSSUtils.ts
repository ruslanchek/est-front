import { StyleDeclaration } from 'aphrodite';
import Color = require('color');

export type TStyle = string | object | null | undefined | boolean;

export interface IReactComponentStyles {
	className?: string;
	styles?: object;
}

export enum ECSSMediaKind {
	Phone,
	PhoneOrTablet,
	Tablet,
	Desktop,
	Wide
}

export class CSSUtils {
	public static image(require: string): string {
		return `url(${require})`;
	}

	public static media(min: number, max: number, styles: StyleDeclaration): StyleDeclaration {
		const key: string = `@media screen and (max-width: ${max}px) and (min-width: ${min}px)`;
		const result = {};

		result[key] = styles;

		return result;
	}

	public static mediaSize(size: ECSSMediaKind, styles: StyleDeclaration): StyleDeclaration {
		switch (size) {
			case ECSSMediaKind.Phone : return this.media(0, 720, styles);
			case ECSSMediaKind.PhoneOrTablet : return this.media(0, 1024, styles);
			case ECSSMediaKind.Tablet : return this.media(720, 1024, styles);
			case ECSSMediaKind.Desktop : return this.media(1024, 1440, styles);
			case ECSSMediaKind.Wide : return this.media(1440, 6000, styles);
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
						...item
					};
				} else {
					result.styles = item;
				}
			}
		});

		return result;
	}

	public static linearGradient(angle: number, fromColor: Color, toColor: Color, from: number, to: number): string {
		return `linear-gradient(${angle.toString()}deg, ${fromColor.toString()} ${from}%, ${toColor.toString()} ${to}%)`
	}
}