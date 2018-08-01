import * as React from 'react';
import { css, StyleSheet, StyleDeclaration } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

export enum EButtonTheme {
	Agree = 'agree',
	AgreeBright = 'agreeBright',
	Reject = 'reject',
	RejectBright = 'rejectBright',
	Full = 'full',
}

interface IProps {
	themes?: EButtonTheme[];
	type?: 'submit' | 'button';
	disabled?: boolean;
	onClick?: () => void;
	styles?: StyleDeclaration;
}

export class Button extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		themes: [EButtonTheme.AgreeBright],
		type: 'submit',
		disabled: false,
		onClick: () => {},
		styles: null,
	};

	public render() {
		const { themes, type, children } = this.props;

		const style = [
			styles.button,
			this.props.styles,
		];

		themes.forEach((theme) => {
			style.push(styles[theme]);
		});

		return (
			<button
				className={css(style)}
				type={type}
				onClick={() => this.props.onClick()}
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
		height: 36,
		fontSize: THEME.FONT_SIZE_REGULAR,
		borderRadius: 5,
		textAlign: 'center',
		outline: 'none',
		transition: 'background-color .2s',
		cursor: 'pointer',

		':disabled': {
			opacity: .5,
		},
	},

	agree: {
		backgroundColor: COLORS.BLUE_LIGHT.toString(),
		color: COLORS.BLUE.toString(),

		':hover': {
			backgroundColor: COLORS.BLUE_LIGHT_ACTIVE.toString(),
		},
	},

	agreeBright: {
		backgroundColor: COLORS.BLUE.toString(),
		color: COLORS.WHITE.toString(),

		':hover': {
			backgroundColor: COLORS.BLUE.lighten(.1).toString(),
		},
	},

	reject: {
		backgroundColor: COLORS.RED_LIGHT.toString(),
		color: COLORS.RED.toString(),

		':hover': {
			backgroundColor: COLORS.RED_LIGHT_ACTIVE.toString(),
		},
	},

	rejectBright: {
		backgroundColor: COLORS.RED.toString(),
		color: COLORS.WHITE.toString(),

		':hover': {
			backgroundColor: COLORS.RED.lighten(.1).toString(),
		},
	},

	full: {
		width: '100%',
	},
});
