import { css, StyleSheet } from 'aphrodite/no-important';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';

import { TInputValidator } from '../../lib/Validators';
import { Omit } from '../../utils';
import { COLORS, THEME } from '../../theme';

type TDefaultInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export interface IInputProps
	extends Omit<TDefaultInputProps, 'onChange' | 'value' | 'name'> {
	name: string;

	isFocused?: boolean;
	isInvalid?: boolean;
	label?: React.ReactNode;
	validators?: TInputValidator[];
	value?: string;

	onChange?(newValue: string): void;
}

interface IState {
	isFocused: boolean;
	isInvalid: boolean;
}

export class Input extends React.PureComponent<IInputProps, IState> {
	public static getDerivedStateFromProps(
		nextProps: IInputProps,
		prevState: IState
	): Partial<IState> | null {
		if (nextProps.isInvalid) {
			return {
				isInvalid: true
			};
		}

		return null;
	}

	public constructor(props: IInputProps) {
		super(props);

		this.state = {
			isFocused: Boolean(props.isFocused),
			isInvalid: Boolean(props.isInvalid)
		};
	}

	public render() {
		const {
			children,
			className,
			isInvalid,
			maxLength,
			minLength,
			onChange,
			required,
			style,
			label,
			...sharedProps
		} = this.props;
		const { isFocused } = this.state;

		return (
			<label className={css(styles.container)}>
				{Boolean(label) && (
					<span
						{...mergeStyles(
							css(styles.title),
							this.state.isInvalid && css(styles.error),
							!this.state.isInvalid && isFocused && css(styles.focus)
						)}
					>
						{label}
					</span>
				)}
				<input
					{...mergeStyles(css(styles.input), className, style)}
					{...sharedProps}
					onChange={this.handleChange}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
				/>
				<span
					{...mergeStyles(
						css(styles.footer),
						this.state.isInvalid && css(styles.error),
						!this.state.isInvalid && isFocused && css(styles.focus)
					)}
				/>
			</label>
		);
	}

	private handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { onChange } = this.props;

		this.setState({
			isInvalid: false
		});

		if (onChange) {
			onChange(e.target.value);
		}
	};

	private handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
		const { onFocus } = this.props;

		this.setState({
			isFocused: true
		});

		if (onFocus) {
			onFocus(e);
		}
	};

	private handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
		const { onBlur } = this.props;

		this.setState({
			isFocused: false
		});

		if (onBlur) {
			onBlur(e);
		}
	};
}

const styles = StyleSheet.create({
	container: {
		display: 'block',
		height: 58,
		position: 'relative'
	},
	title: {
		display: 'block',
		marginBottom: 5,
		fontSize: 12,
		transition: 'color 0.3s linear 0s',
		color: COLORS.VIOLET_LIGHT.toString(),
	},
	input: {
		display: 'block',
		boxSizing: 'border-box',
		width: '100%',
		fontSize: 16,
		padding: 0,
		height: 38,
		lineHeight: 50,
		backgroundColor: 'transparent',
		border: 'none',
		outline: 'none',
		color: COLORS.VIOLET_LIGHT.toString(),
	},
	error: {
		color: 'red',

		':before': {
			transform: 'translate(0, 0)',
			backgroundColor: 'red'
		}
	},
	focus: {
		color: COLORS.VIOLET_LIGHT.toString(),

		':after': {
			transform: 'translate(0, 0)',
			backgroundColor: COLORS.VIOLET_DARK.lighten(0.4).toString()
		}
	},
	footer: {
		position: 'absolute',
		display: 'block',
		bottom: 0,
		height: 1,
		width: '100%',
		backgroundColor: COLORS.GRAY_DARK.toString(),
		overflow: 'hidden',

		':before': {
			content: '""',
			position: 'absolute',
			height: '100%',
			width: '100%',
			transition: 'transform 0.3s',
			transform: 'translate(-100%, 0)'
		},

		':after': {
			content: '""',
			position: 'absolute',
			height: '100%',
			width: '100%',
			transition: 'transform 0.3s',
			transform: 'translate(-100%, 0)'
		}
	}
});
