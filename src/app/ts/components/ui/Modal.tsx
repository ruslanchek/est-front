import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { COLORS, THEME } from '../../theme';
import { Portal } from './Portal';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';

interface IProps {
	isVisible: boolean;
	width?: number;
	containerClassName?: string;
	contentClassName?: string;
	onClose?(): void;
}

interface IState {
	isContentVisible: boolean;
}

const ANIMATION_TIME: number = 350;
const DEFAULT_WIDTH: number = 400;

export class Modal extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isContentVisible: false
	};

	private animationDelay = null;

	public componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	public componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);

		clearTimeout(this.animationDelay);
	}

	public componentWillReceiveProps(nextProps: IProps) {
		if (nextProps) {
			this.animationDelay = setTimeout(() => {
				this.setState({
					isContentVisible: nextProps.isVisible
				});
			}, 10);
		}

		if(nextProps.isVisible) {
			document.body.classList.add('hidden');
		} else {
			document.body.classList.remove('hidden');
		}
	}

	public render() {
		return (
			<CSSTransition
				in={this.props.isVisible}
				unmountOnExit
				timeout={ANIMATION_TIME}
				classNames={{
					enter: css(styles.enterContainer),
					enterActive: css(styles.enterActiveContainer),
					exit: css(styles.exitContainer),
					exitActive: css(styles.exitActiveContainer)
				}}
			>
				<Portal>
					<div
						className={css(styles.container, styles.containerPhone)}
						onClick={this.handleClickOnOverlay}
					>
						<CSSTransition
							in={this.state.isContentVisible}
							unmountOnExit
							timeout={ANIMATION_TIME}
							classNames={{
								enter: css(styles.enterContent),
								enterActive: css(styles.enterActiveContent),
								exit: css(styles.exitContent),
								exitActive: css(styles.exitActiveContent)
							}}
						>
							<div
								style={{
									width: this.props.width || DEFAULT_WIDTH
								}}
								className={css(styles.content, styles.contentPhone)}
								onClick={this.handleClickOnContent}
							>
								{this.props.children}
							</div>
						</CSSTransition>
					</div>
				</Portal>
			</CSSTransition>
		);
	}

	private handleKeyDown = (e: KeyboardEvent) => {
		if (e.key.toLowerCase() === 'escape') {
			this.close();
		}
	};

	private handleClickOnOverlay = () => {
		this.close();
	};

	private close() {
		const { onClose } = this.props;

		if (onClose) {
			onClose();
		}
	}

	private handleClickOnContent = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
	};
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: COLORS.BLACK_LIGHT.alpha(0.8).toString(),
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		left: 0,
		padding: 15,
		position: 'fixed',
		right: 0,
		overflow: 'auto',
		top: 0,
		zIndex: 1000,
		boxSizing: 'border-box'
	},

	containerPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: '100vw',
		height: '100vh'
	}),

	content: {
		backgroundColor: COLORS.WHITE.toString(),
		borderRadius: 6,
		overflow: 'hidden',
		position: 'relative',
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		margin: 'auto',
		fontSize: THEME.FONT_SIZE_SMALL,
	},

	contentPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: '100% !important',
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch'
	}),

	enterContainer: {
		opacity: 0.01
	},

	enterActiveContainer: {
		opacity: 1,
		transition: `opacity ${ANIMATION_TIME}ms`
	},

	exitContainer: {
		opacity: 1
	},

	exitActiveContainer: {
		opacity: 0.01,
		transition: `opacity ${ANIMATION_TIME}ms`
	},

	enterContent: {
		transform: 'scale(0.9)'
	},

	enterActiveContent: {
		transform: 'scale(1)',
		transition: `transform ${ANIMATION_TIME}ms`,
		transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.390, 1.100)'
	},

	exitContent: {
		transform: 'scale(1)'
	},

	exitActiveContent: {
		transform: 'scale(0.9)',
		transition: `transform ${ANIMATION_TIME}ms`,
		transitionTimingFunction: 'cubic-bezier(0.045, 0.175, 0.435, 1.040)'
	}
});
