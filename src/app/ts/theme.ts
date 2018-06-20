import Color = require('color');
import { StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from './lib/CSSUtils';

export const COLORS = {
	GRAY_LIGHT: Color('#F3F5F7'),
	GRAY_DARK: Color('#F7F8F9'),
	GRAY_EXTRA_DARK: Color('#F7F8F9').darken(.1),
	WHITE: Color('#FFFFFF'),
	BLACK: Color('#222E3F'),
	BLACK_LIGHT: Color('#5A636F'),
	BLACK_EXTRA_LIGHT: Color('#5A636F').lighten(.5),
	RED: Color('#DA1D58'),
	BLUE: Color('#017AD5'),
	GREEN: Color('#00914D')
};

export const THEME = {
	FONT: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	HEADER_HEIGHT: 54,
	HEADER_HEIGHT_FLOATING: 42,
	NAV_HEIGHT: 0,
	CURRENCY_ICON_SIZE: 36,
	SECTION_PADDING_H: 20,
	SECTION_PADDING_V: 15,
	FONT_SIZE_H1: 28,
	FONT_SIZE_REGULAR: 16,
	FONT_SIZE_BIG: 22,
	FONT_SIZE_SMALL: 12,
	FONT_SIZE_TINY: 10,
	BOX_SHADOW_ELEVATION_1: `0 4px 12px 0 ${COLORS.BLACK.alpha(0.065).toString()}`,
	BOX_SHADOW_ELEVATION_2: `0 5px 15px 0 ${COLORS.BLACK.alpha(0.09).toString()}`,
	PAGE_SIDE_PADDING_DESKTOP: 40,
	PAGE_SIDE_PADDING_PHONE: 20,
	PAGE_MAX_WIDTH: 1200
};

export const COMMON_STYLES = StyleSheet.create({
	LINK: {
		color: COLORS.BLACK.toString(),
		textDecoration: 'none',

		':link': {
			color: COLORS.BLACK.toString(),
		},

		':visited': {
			color: COLORS.BLACK.toString(),
		},

		':hover': {
			color: COLORS.BLACK.lighten(1.25).toString(),
		},

		':active': {
			color: COLORS.BLACK.lighten(1).toString(),
		}
	},

	LAYOUT_DESKTOP: {
		padding: `0 ${THEME.PAGE_SIDE_PADDING_DESKTOP}px`
	},

	LAYOUT_PHONE: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		padding: `0 ${THEME.PAGE_SIDE_PADDING_PHONE}px`
	}),
});