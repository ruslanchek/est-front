import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

export enum EButtonTheme {
	Regular,
	Small,
	Big,
	Common,
	Agree,
	Reject,
}

interface IProps {
	type: 'submit' | 'button';
	themes: EButtonTheme[];
}

export class Button extends React.PureComponent<IProps, {}> {
	public render() {
		const { themes, type, children } = this.props;

		return (
			<button className={css(styles.button, styles.common, styles.small)} type={type}>
				{children}
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		display: 'inline-block',
		border: 'none',
		background: 'none',
		fontFamily: THEME.FONT,
		fontWeight: 600,
	},

	small: {
		height: THEME.INPUT_HEIGHT,
		borderRadius: 8,
		minWidth: 150,
		fontSize: THEME.FONT_SIZE_SMALL,
	},

	common: {
		backgroundColor: COLORS.BLUE.toString(),
		color: COLORS.WHITE.toString(),
		textTransform: 'uppercase',
	},
});
