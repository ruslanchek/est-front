import Color = require('color');
import { StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from './lib/CSSUtils';

export const COLORS = {
	GRAY_LIGHT: Color('#F3F5F7'),
	GRAY_DARK: Color('#F7F8F9').darken(.025),
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
	NAV_HEIGHT: 0,
	CURRENCY_ICON_SIZE: 36,
	SECTION_PADDING_H: 20,
	SECTION_PADDING_V: 15,
	FONT_SIZE_H1: 28,
	FONT_SIZE_REGULAR: 16,
	FONT_SIZE_BIG: 22,
	FONT_SIZE_SMALL: 12,
	FONT_SIZE_TINY: 10,
	BOX_SHADOW_ELEVATION_MINIMAL: `0 1px 2px 0 ${COLORS.BLACK.alpha(0.07).toString()}`,
	BOX_SHADOW_ELEVATION_MINIMAL_INVERTED: `0 -1px 2px 0 ${COLORS.BLACK.alpha(0.07).toString()}`,
	BOX_SHADOW_ELEVATION_1: `0 3px 9px 0 ${COLORS.BLACK.alpha(0.12).toString()}`,
	BOX_SHADOW_ELEVATION_2: `0 5px 15px 0 ${COLORS.BLACK.alpha(0.09).toString()}`,
	PAGE_SIDE_PADDING_DESKTOP: 40,
	PAGE_SIDE_PADDING_PHONE: 20,
	PAGE_MAX_WIDTH: 1600
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
		position: 'relative',
		maxWidth: THEME.PAGE_MAX_WIDTH,
		width: '100%',
		margin: '0 auto',
		boxSizing: 'border-box',
		paddingLeft: THEME.PAGE_SIDE_PADDING_DESKTOP,
		paddingRight: THEME.PAGE_SIDE_PADDING_DESKTOP
	},

	LAYOUT_PHONE_OR_TABLET: CSSUtils.mediaSize(ECSSMediaKind.PhoneOrTablet, {
		paddingLeft: THEME.PAGE_SIDE_PADDING_PHONE,
		paddingRight: THEME.PAGE_SIDE_PADDING_PHONE
	}),

	FILTER_BRICK: {
		height: 27,
		display: 'flex',
		alignItems: 'center',
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		backgroundColor: COLORS.GRAY_DARK.toString(),
		borderRadius: 16,
		marginRight: THEME.SECTION_PADDING_H / 2,
		cursor: 'pointer',
		transition: 'background-color .2s',
		marginTop: 10,

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.darken(0.075).toString(),
		}
	},

	FILTER_SELECTED: {
		backgroundColor: COLORS.GRAY_DARK.darken(0.1).toString(),
	},

	FILTER_ACCENT: {
		color: COLORS.BLACK.toString(),
		fontWeight: 600
	}
});