import Color = require('color');

export const COLORS = {
	GRAY_LIGHT: Color('#F3F5F7'),
	GRAY_DARK: Color('#F7F8F9'),
	GRAY_EXTRA_DARK: Color('#F7F8F9').darken(.1),
	WHITE: Color('#FFFFFF'),
	BLACK: Color('#222E3F'),
	BLACK_LIGHT: Color('#5A636F'),
	BLACK_EXTRA_LIGHT: Color('#5A636F').lighten(.5),
	RED: Color('#DA1D58')
};

export const THEME = {
	FONT: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	HEADER_HEIGHT: 60,
	NAV_HEIGHT: 0,
	CURRENCY_ICON_SIZE: 36,
	SECTION_PADDING_H: 20,
	SECTION_PADDING_V: 15,
	FONT_SIZE_H1: 26,
	FONT_SIZE_REGULAR: 16,
	FONT_SIZE_BIG: 22,
	FONT_SIZE_SMALL: 12,
	FONT_SIZE_TINY: 10,
	BOX_SHADOW_ELEVATION_1: `0 5px 15px 0 ${COLORS.BLACK.alpha(0.065).toString()}`,
	BOX_SHADOW_ELEVATION_2: `0 5px 15px 0 ${COLORS.BLACK.alpha(0.09).toString()}`,
	PAGE_SIDE_PADDING_DESKTOP: 40,
	PAGE_SIDE_PADDING_PHONE: 20,
	PAGE_MAX_WIDTH: 1200
};