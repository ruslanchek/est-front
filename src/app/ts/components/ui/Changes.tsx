import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import Color = require('color');
import { mergeStyles } from 'eo-utils';

interface IProps {
	value: number;
	justText: boolean;
}

interface IState {

}

export class Changes extends React.PureComponent<IProps, IState> {
	public render() {
		let bgColor: Color;
		let color: Color;
		let symbol: string = '%';
		let prefix: string = '';
		let value: string = '';
		const style = this.props.justText ? styles.text : styles.badge;

		if (this.props.value > 0) {
			bgColor = COLORS.GREEN;
			color = COLORS.GREEN;
			prefix = '+';
			value = this.props.value.toFixed(2);
		} else if (this.props.value < 0) {
			bgColor = COLORS.PINK_DARK;
			color = COLORS.PINK_DARK;
			value = (this.props.value * -1).toFixed(2);
			prefix = '–';
		} else {
			bgColor = COLORS.GRAY_DARK.darken(0.5);
			color = COLORS.GRAY_DARK.darken(.2);
			symbol = '';
			value = '0';
		}

		const styleObj = this.props.justText ? {
			color: color.toString()
		} : {
			backgroundColor: bgColor.alpha(0.12).toString(),
			color: color.toString()
		};

		return (
			<div className={css(style)} style={styleObj}>
				{prefix}{value}{symbol}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		fontSize: THEME.FONT_SIZE_SMALL,
		display: 'inline-block'
	},

	badge: {
		borderWidth: 0,
		borderStyle: 'solid',
		borderRadius: 4,
		paddingLeft: 6,
		paddingRight: 6,
		paddingTop: 2,
		paddingBottom: 3,
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600,
		display: 'inline-block'
	}
});
