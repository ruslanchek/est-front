import { css, StyleSheet } from 'aphrodite/no-important';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';

import { COLORS } from '../../theme';

interface IProps {
	disabled?: boolean;
	isActive?: boolean;

	onChange?(isActive: boolean): void;
}

interface IState {
	isActive: boolean;
}

export class Checkbox extends React.PureComponent<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			isActive: Boolean(props.isActive)
		};
	}

	public render() {
		let clickHandler;

		if (!this.props.disabled) {
			clickHandler = this.handleClick;
		}

		return (
			<div
				onClick={clickHandler}
				{...mergeStyles(
					css(styles.container),
					this.state.isActive && css(styles.activeContainer),
					this.props.disabled && css(styles.disabled)
				)}
			>
				<span
					{...mergeStyles(
						css(styles.oval),
						this.state.isActive && css(styles.active)
					)}
				/>
			</div>
		);
	}

	private handleClick = () => {
		const isActive = !this.state.isActive;

		this.setState({
			isActive
		});

		if (this.props.onChange) {
			this.props.onChange(isActive);
		}
	};
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: COLORS.GRAY.toString(),
		borderRadius: 14,
		boxSizing: 'border-box',
		display: 'flex',
		height: 24,
		transition: 'background 0.2s',
		width: 48
	},

	activeContainer: {
		backgroundColor: COLORS.GREEN_DARK.toString()
	},

	disabled: {
		opacity: 0.5
	},

	oval: {
		backgroundColor: COLORS.WHITE.toString(),
		borderRadius: '50%',
		boxShadow: '0 2px 6px 0 rgba(0,0,0,0.34)',
		display: 'block',
		height: 18,
		transform: 'translate(3px, 0)',
		transition: 'transform 0.2s',
		width: 18
	},

	active: {
		transform: 'translate(27px, 0)'
	}
});
