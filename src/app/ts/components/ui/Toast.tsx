import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { THEME } from '../../theme';
import { ToastContainer } from 'react-toastify';
import Transition from 'react-transition-group/Transition';

interface IProps {

}

interface IState {

}

const ANIMATION_DURATION: number = 300;

const ZoomInAndOut = ({ children, position, ...props }) => (
	<Transition
		{...props}
		timeout={ANIMATION_DURATION}
		onEnter={ node => node.classList.add(css(styles.in))}
		onExit={node => {
			node.classList.remove(css(styles.in));
			node.classList.add(css(styles.out));
		}}
	>
		{children}
	</Transition>
);

export class Toast extends React.PureComponent<IProps, IState> {
	public render() {
		return (
			<ToastContainer
				transition={ZoomInAndOut}
				className={css(styles.container)}
				closeOnClick={true}
				closeButton={<span/>}
			/>
		);
	}
}

const translateKeyframesIn = {
	from: {
		opacity: 0,
	},

	to: {
		opacity: 1,
	}
};

const translateKeyframesOut = {
	from: {
		opacity: 1,
	},

	to: {
		opacity: 0,
	}
};

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		bottom: THEME.NAV_HEIGHT + THEME.SECTION_PADDING_V,
		left: 0,
		zIndex: 1000,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		boxSizing: 'border-box',
		flexDirection: 'column',
		alignItems: 'center'
	},

	in: {
		animationName: [translateKeyframesIn],
		animationDuration: `${ANIMATION_DURATION}ms`,
		animationIterationCount: 1,
		animationFillMode: 'bacwards',
		opacity: 1
	},

	out: {
		animationName: [translateKeyframesOut],
		animationDuration: `${ANIMATION_DURATION}ms`,
		animationIterationCount: 1,
		animationFillMode: 'bacwards',
		opacity: 0
	}
});

