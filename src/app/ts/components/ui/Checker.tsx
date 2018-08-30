import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COLORS } from '../../theme';

interface IProps {
	checked: boolean;
}

export class Checker extends React.PureComponent<IProps, {}> {
	public render() {
		const { checked } = this.props;

		return (
			<span className={css(styles.check, checked && styles.checked)}/>
		);
	}
}

const styles = StyleSheet.create({
	check: {
		display: 'block',
		boxSizing: 'border-box',
		width: 18,
		height: 18,
		borderRadius: 10,
		transition: 'border-color .25s',
		border: `2px solid ${COLORS.BLACK_EXTRA_LIGHT}`,

		':before': {
			content: '""',
			position: 'relative',
			display: 'block',
			top: 3,
			left: 3,
			width: 8,
			height: 8,
			borderRadius: '100%',
			backgroundColor: COLORS.BLUE.toString(),
			opacity: 0,
			transform: 'scale(0)',
			transition: 'opacity .25s, transform .25s',
			transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
		},
	},

	checked: {
		borderColor: COLORS.BLUE.toString(),

		':before': {
			opacity: 1,
			transform: 'scale(1)'
		},
	}
});
