import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { COLORS, THEME } from '../../theme';
import { Portal } from './Portal';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';

interface IProps {
	containerClassName?: string;
	contentClassName?: string;
	isVisible: boolean;
	title: string;

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
								className={css(styles.content, styles.contentPhone)}
								onClick={this.handleClickOnContent}
							>
								<div className={css(styles.header)}>
									<h2 className={css(styles.title)}>
										{this.props.title}
									</h2>
								</div>

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
		zIndex: 9999,
		boxSizing: 'border-box'
	},

	containerPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: '100vw',
		height: '100vh'
	}),

	content: {
		backgroundColor: COLORS.WHITE.toString(),
		borderRadius: 15,
		overflow: 'hidden',
		position: 'relative',
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		margin: 'auto',
		width: 400
	},

	contentPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: '100%',
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch'
	}),

	header: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`
	},

	title: {
		margin: 0
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
