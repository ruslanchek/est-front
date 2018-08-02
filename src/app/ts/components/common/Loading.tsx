import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';

import { COLORS } from '../../theme';
import Color = require('color');
import { CSSUtils } from '../../lib/CSSUtils';

interface IProps {
	className?: string;
	color?: Color;
	size?: number;
}

export class Loading extends React.Component<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		size: 26,
		color: COLORS.GRAY_DARK,
	};

	public render() {
		const spinnerStyle = {
			width: this.props.size,
			height: this.props.size,
		};

		const spinnerDivStyle = {
			transformOrigin: `${this.props.size / 2}px ${this.props.size / 2}px`,
		};

		const innerStyle = {
			top: this.props.size / 21.3333333333,
			left: this.props.size / 2.20689655172,
			width: this.props.size / 14,
			height: this.props.size / 4.5,
			backgroundColor: this.props.color.toString()
		};

		return (
			<div {...CSSUtils.mergeStyles(css(styles.container), this.props.className)}>
				<div className={css(styles.spinner)} style={spinnerStyle}>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
					<div className={css(styles.spinnerDiv)} style={spinnerDivStyle}>
						<i className={css(styles.inner)} style={innerStyle} />
					</div>
				</div>
			</div>
		);
	}
}

const translateKeyframesItem = {
	from: {
		opacity: 1,
	},

	to: {
		opacity: 0,
	},
};

const translateKeyframes = {
	'0%': {
		transform: 'scale(0)',
	},

	'35%': {
		transform: 'scale(1.1)',
	},

	'100%': {
		transform: 'scale(1)',
	},
};

const styles = StyleSheet.create({
	spinner: {
		display: 'block',
		position: 'relative',
		animationName: [translateKeyframes],
		animationDuration: '.5s',
		animationIterationCount: 1
	},

	inner: {
		content: '" "',
		display: 'block',
		position: 'absolute',
		borderRadius: '20%'
	},

	spinnerDiv: {
		animationName: [translateKeyframesItem],
		animationDuration: '1.2s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'linear',

		':nth-child(1)': {
			transform: 'rotate(0.1deg)',
			animationDelay: '-1.1s',
		},

		':nth-child(2)': {
			transform: 'rotate(30deg)',
			animationDelay: '-1s',
		},

		':nth-child(3)': {
			transform: 'rotate(60deg)',
			animationDelay: '-.9s',
		},

		':nth-child(4)': {
			transform: 'rotate(90deg)',
			animationDelay: '-.8s',
		},

		':nth-child(5)': {
			transform: 'rotate(120deg)',
			animationDelay: '-.7s',
		},

		':nth-child(6)': {
			transform: 'rotate(150deg)',
			animationDelay: '-.6s',
		},

		':nth-child(7)': {
			transform: 'rotate(180deg)',
			animationDelay: '-.5s',
		},

		':nth-child(8)': {
			transform: 'rotate(210deg)',
			animationDelay: '-.4s',
		},

		':nth-child(9)': {
			transform: 'rotate(240deg)',
			animationDelay: '-.3s',
		},

		':nth-child(10)': {
			transform: 'rotate(270deg)',
			animationDelay: '-.2s',
		},

		':nth-child(11)': {
			transform: 'rotate(300deg)',
			animationDelay: '-.1s',
		},

		':nth-child(12)': {
			transform: 'rotate(330deg)',
			animationDelay: '0',
		},
	},

	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '100%',
	},
});
