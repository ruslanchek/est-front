import { StyleDeclaration } from 'aphrodite';

export enum ECSSMediaKind {
	Phone,
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
			case ECSSMediaKind.Tablet : return this.media(720, 1024, styles);
			case ECSSMediaKind.Desktop : return this.media(1024, 1440, styles);
			case ECSSMediaKind.Wide : return this.media(1440, 6000, styles);
		}
	}
}