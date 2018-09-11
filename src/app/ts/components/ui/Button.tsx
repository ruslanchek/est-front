import * as React from 'react';
import { COLORS, THEME } from '../../theme';
import { Loading } from '../common/Loading';
import styled, { css, cx } from 'react-emotion';

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
	className?: string;
}

export class Button extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		themes: [EButtonTheme.AgreeBright],
		type: 'submit',
		disabled: false,
		loading: false,
		onClick: () => {
		},
		className: '',
	};

	public render() {
		const {
			themes,
			type,
			children,
			loading,
			disabled,
			className,
		} = this.props;

		const classNames = [
			className,
		];

		themes.forEach((theme) => {
			classNames.push(buttonStyles[theme]);
		});

		let loadingColor = COLORS.WHITE;

		if(themes.indexOf(EButtonTheme.Agree) >= 0) {
			loadingColor = COLORS.BLUE;
		}

		if(themes.indexOf(EButtonTheme.Reject) >= 0) {
			loadingColor = COLORS.RED;
		}

		if(themes.indexOf(EButtonTheme.Facebook) >= 0) {
			loadingColor = COLORS.FACEBOOK;
		}
		
		console.log(loadingColor, themes);
		
		return (
			<Btn
				disabled={disabled || loading}
				className={cx(classNames)}
				type={type}
				onClick={() => this.props.onClick()}
			>
				{loading ? (
					<Loading
						className={loadingStyle}
						size={24}
						color={loadingColor}
					/>
				) : children}
			</Btn>
		);
	}
}

const Btn = styled('button')`
  display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border: none;
	background: none;
	font-family: ${THEME.FONT};
	font-weight: 400;
	height: 34px;
	padding: 0 20px;
	font-size: ${THEME.FONT_SIZE_REGULAR}px;
	border-radius: 4px;
	text-align: center;
	outline: none;
	transition: background-color .2s, opacity .2s;
	cursor: pointer;

	&:disabled {
		opacity: .65;
		pointer-events: none;
	}
`;

const loadingStyle = css`
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const buttonStyles = {
	agree: css`
		background-color: ${COLORS.BLUE_LIGHT.toString()};
		color: ${COLORS.BLUE.toString()};

		&:hover {
			background-color: ${COLORS.BLUE_LIGHT_ACTIVE.toString()};
		}
	`,

	agreeBright: css`
		background-color: ${COLORS.BLUE.toString()};
		color: ${COLORS.WHITE.toString()};

		&:hover {
			background-color: ${COLORS.BLUE.lighten(.1).toString()};
		}
	`,

	reject: css`
		background-color: ${COLORS.RED_LIGHT.toString()};
		color: ${COLORS.RED.toString()};

		&:hover {
			background-color: ${COLORS.RED_LIGHT_ACTIVE.toString()};
		}
	`,

	rejectBright: css`
		background-color: ${COLORS.RED.toString()};
		color: ${COLORS.WHITE.toString()};

		&:hover {
			background-color: ${COLORS.RED.lighten(.1).toString()};
		}
	`,

	facebook: css`
		background-color: ${COLORS.FACEBOOK.alpha(.1).toString()};
		color: ${COLORS.FACEBOOK.toString()};

		&:hover {
			background-color: ${COLORS.FACEBOOK.alpha(.2).toString()};
		},
	`,

	full: css`
		width: 100%;
	`,
};
