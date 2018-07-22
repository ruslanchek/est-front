import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

export enum EButtonTheme {
	Agree = 'agree',
	Reject = 'reject',
	Full = 'full',
}

interface IProps {
	type: 'submit' | 'button';
	themes: EButtonTheme[];
}

export class Button extends React.PureComponent<IProps, {}> {
	public render() {
		const { themes, type, children } = this.props;

		const style = [
			styles.button,
		];

		themes.forEach((theme) => {
			style.push(styles[theme]);
		});

		return (
			<button
				className={css(style)}
				type={type}
			>
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
		height: 48,
		fontSize: THEME.FONT_SIZE_REGULAR,
		borderRadius: 5,
		transition: 'background-color .2s',
	},

	agree: {
		backgroundColor: COLORS.BLUE_LIGHT.toString(),
		color: COLORS.BLUE.toString(),

		':hover': {
			backgroundColor: COLORS.BLUE_LIGHT_ACTIVE.toString(),
		}
	},

	reject: {

	},

	full: {
		width: '100%'
	}
});
