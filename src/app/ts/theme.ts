import Color = require('color');

export const COLORS = {
	GRAY_LIGHT: Color('#F3F5F7'),
	WHITE: Color('#FFFFFF'),
	BLACK: Color('#000000'),
};

export const THEME = {
	FONT: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	HEADER_HEIGHT: 60,
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