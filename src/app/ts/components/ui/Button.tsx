import * as React from 'react';
import { css, StyleSheet, StyleDeclaration } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import { Loading } from '../common/Loading';

export enum EButtonTheme {
	Agree = 'agree',
	AgreeBright = 'agreeBright',
	Reject = 'reject',
	RejectBright = 'rejectBright',
	Full = 'full',
	Facebook = 'facebook',
}

interface IProps {
	themes?: EButtonTheme[];
	type?: 'submit' | 'button';
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	styles?: StyleDeclaration;
}

export class Button extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		themes: [EButtonTheme.AgreeBright],
		type: 'submit',
		disabled: false,
		loading: false,
		onClick: () => {},
		styles: null,
	};

	public render() {
		const { themes, type, children, loading, disabled } = this.props;

		const style = [
			styles.button,
			this.props.styles,
		];

		themes.forEach((theme) => {
			style.push(styles[theme]);
		});

		return (
			<button
				disabled={disabled || loading}
				className={css(style)}
				type={type}
				onClick={() => this.props.onClick()}
			>
				{loading ? (
					<Loading
						className={css(styles.loading)}
						size={24}
						color={COLORS.WHITE}
					/>
				) : children}
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		width: '100%',
		border: 'none',
		background: 'none',
		fontFamily: THEME.FONT,
		fontWeight: 400,
		height: 34,
		fontSize: THEME.FONT_SIZE_REGULAR,
		borderRadius: 4,
		textAlign: 'center',
		outline: 'none',
		transition: 'background-color .2s, opacity .2s',
		cursor: 'pointer',

		':disabled': {
			opacity: .65,
			pointerEvents: 'none',
		},
	},

	loading: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
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

	facebook: {
		backgroundColor: COLORS.FACEBOOK.alpha(.1).toString(),
		color: COLORS.FACEBOOK.toString(),

		':hover': {
			backgroundColor: COLORS.FACEBOOK.alpha(.2).toString(),
		},
	},

	full: {
		width: '100%',
	},
});
