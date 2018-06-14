import Color = require('color');

export const COLORS = {
	GREEN: Color('#00B383'),
	GREEN_LIGHT: Color('#00D66B'),
	GREEN_ULTRA_LIGHT: Color('#B8FFC7'),
	GREEN_DARK: Color('#008273'),
	GREEN_ULTRA_DARK: Color('#184314'),
	CYAN_DARK: Color('#00758C'),
	GRAY: Color('#F8F7FF'),
	GRAY_LIGHT: Color('#FAFCFF'),
	GRAY_DARK: Color('#D5DCE6'),
	VIOLET_DARK: Color('#332966'),
	VIOLET_LIGHT: Color('#766F9F'),
	PINK_DARK: Color('#D91657'),
	WHITE: Color('#FFFFFF'),
	BLACK: Color('#000000'),
};

export const THEME = {
	FONT: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	HEADER_HEIGHT: 110,
	NAV_HEIGHT: 0,
	CURRENCY_ICON_SIZE: 36,
	SECTION_PADDING: 15,
	FONT_SIZE_H1: 22,
	FONT_SIZE_REGULAR: 16,
	FONT_SIZE_BIG: 18,
	FONT_SIZE_SMALL: 12,
	BOX_SHADOW_ELEVATION_1: `0 3px 6px 0 ${COLORS.BLACK.alpha(0.065).toString()}`,
	BOX_SHADOW_ELEVATION_2: `0 6px 12px 0 ${COLORS.BLACK.alpha(0.085).toString()}`,
};