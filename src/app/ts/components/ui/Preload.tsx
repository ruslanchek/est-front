import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS } from '../../theme';
import Color = require('color');

interface IProps {
	isVisible: boolean;
	outerStyles: StyleDeclaration;
	size: number;
	color: Color;
}

const ANIMATION_TIME: number = 600;

export class Preload extends React.PureComponent<IProps, {}> {
	public render() {
		const { size, isVisible, outerStyles, color } = this.props;

		if(isVisible) {
			return (
				<i
					className={css(styles.preLoader, outerStyles)}
					style={{
						borderColor: color.toString(),
						width: size,
						height: size,
						margin: `-${size / 2}px 0 0 -${size / 2}px`,
					}}
				/>
			);
		} else {
			return null;
		}
	}
}

const translateKeyframes = {
	'0%': {
		transform: 'scale(0)',
		backgroundColor: COLORS.WHITE.alpha(.5).toString(),
		opacity: 1
	},

	'100%': {
		transform: 'scale(2)',
		backgroundColor: COLORS.WHITE.alpha(.1).toString(),
		opacity: 0
	}
};

const styles = StyleSheet.create({
	preLoader: {
		border: `2px solid`,
		display: 'block',
		borderRadius: '100%',
		boxSizing: 'border-box',
		position: 'absolute',
		zIndex: 2,
		top: '50%',
		left: '50%',
		animationName: [translateKeyframes],
		animationDuration: `${ANIMATION_TIME}ms`,
		animationIterationCount: 'infinite',
		animationDelay: 100
	}
});
