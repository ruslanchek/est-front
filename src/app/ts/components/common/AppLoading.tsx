import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';

export class AppLoading extends React.Component<{}, {}> {
	public render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.spinner)}>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
					<div className={css(styles.spinnerDiv)}/>
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
	}
};

const translateKeyframes = {
	'0%': {
		transform: 'scale(0)'
	},

	'35%': {
		transform: 'scale(1.1)'
	},

	'100%': {
		transform: 'scale(1)'
	}
};

const styles = StyleSheet.create({
	spinner: {
		color: COLORS.BLACK.toString(),
		display: 'block',
		position: 'relative',
		width: 64,
		height: 64,
		animationName: [translateKeyframes],
		animationDuration: '.5s',
		animationIterationCount: 1,
	},

	spinnerDiv: {
		transformOrigin: '32px 32px',
		animationName: [translateKeyframesItem],
		animationDuration: '1.2s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'linear',

		':after': {
			content: '" "',
			display: 'block',
			position: 'absolute',
			top: 3,
			left: 29,
			width: 5,
			height: 14,
			borderRadius: '20%',
			background: COLORS.BLACK.toString()
		},

		':nth-child(1)': {
			transform: 'rotate(0deg)',
			animationDelay: '-1.1s'
		},

		':nth-child(2)': {
			transform: 'rotate(30deg)',
			animationDelay: '-1s'
		},

		':nth-child(3)': {
			transform: 'rotate(60deg)',
			animationDelay: '-.9s'
		},

		':nth-child(4)': {
			transform: 'rotate(90deg)',
			animationDelay: '-.8s'
		},

		':nth-child(5)': {
			transform: 'rotate(120deg)',
			animationDelay: '-.7s'
		},

		':nth-child(6)': {
			transform: 'rotate(150deg)',
			animationDelay: '-.6s'
		},

		':nth-child(7)': {
			transform: 'rotate(180deg)',
			animationDelay: '-.5s'
		},

		':nth-child(8)': {
			transform: 'rotate(210deg)',
			animationDelay: '-.4s'
		},

		':nth-child(9)': {
			transform: 'rotate(240deg)',
			animationDelay: '-.3s'
		},

		':nth-child(10)': {
			transform: 'rotate(270deg)',
			animationDelay: '-.2s'
		},

		':nth-child(11)': {
			transform: 'rotate(300deg)',
			animationDelay: '-.1s'
		},

		':nth-child(12)': {
			transform: 'rotate(330deg)',
			animationDelay: '0'
		},
	},

	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '100%',
		fontFamily: THEME.FONT
	}
});
