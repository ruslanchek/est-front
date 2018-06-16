import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { COLORS, THEME } from '../../theme';
import { Portal } from './Portal';

interface IProps {
	containerClassName?: string;
	contentClassName?: string;
	isVisible: boolean;

	onClose?(): void;
}

interface IState {
	isContentVisible: boolean;
}

const ANIMATION_TIME: number = 350;

export class Modal extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isContentVisible: false
	};

	private animationDelay = null;

	public componentDidMount() {
		document.body.classList.add('hidden');
		document.addEventListener('keydown', this.handleKeyDown);
	}

	public componentWillUnmount() {
		document.body.classList.remove('hidden');
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
						className={css(styles.container)}
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
								className={css(styles.content)}
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
		backgroundColor: COLORS.WHITE.alpha(0.5).toString(),
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		left: 0,
		padding: 15,
		position: 'fixed',
		right: 0,
		overflow: 'auto',
		top: 0,
		zIndex: 9999
	},

	content: {
		backgroundColor: COLORS.WHITE.alpha(0.85).toString(),
		borderRadius: 20,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		margin: 'auto',
		width: 400
	},

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
