import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { IsPhone } from '../common/IsPhone';
import { IsDesktop } from '../common/IsDesktop';
import { Modal } from './Modal';
import { COLORS, THEME } from '../../theme';
import { CSSTransition } from 'react-transition-group';

interface IProps {
	isVisible: boolean;
	onClose: () => void;
}

const ANIMATION_TIME: number = 350;

export class ModalContext extends React.PureComponent<IProps, {}> {
	private wrapperRef = null;

	public componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	public render() {
		return (
			<React.Fragment>
				<IsPhone>
					<Modal isVisible={this.props.isVisible} onClose={this.props.onClose.bind(this)}>
						{this.props.children}
					</Modal>
				</IsPhone>

				<IsDesktop>
					<CSSTransition
						in={this.props.isVisible}
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
							className={css(styles.context)}
							ref={(ref) => this.wrapperRef = ref}
						>
							{this.props.children}
						</div>
					</CSSTransition>
				</IsDesktop>
			</React.Fragment>
		);
	}

	private handleClickOutside = (e) => {
		if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
			this.props.onClose();
		}
	}
}

const styles = StyleSheet.create({
	context: {
		position: 'absolute',
		backgroundColor: COLORS.WHITE.toString(),
		top: '100%',
		left: '50%',
		transform: 'translate(-50%, 20px)',
		transition: `transform ${ANIMATION_TIME}ms, opacity ${ANIMATION_TIME}ms`,
		transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.390, 1.100)',
		width: 400,
		zIndex: 1000,
		borderRadius: 15,
		overflow: 'hidden',
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
	},

	enterContent: {
		transform: 'translate(-50%, 20px) scale(0.9) !important',
		opacity: 0
	},

	enterActiveContent: {
		opacity: 1,
		transform: 'translate(-50%, 20px) scale(1) !important',
	},

	exitContent: {
		opacity: 1,
		transform: 'translate(-50%, 20px) scale(1) !important'
	},

	exitActiveContent: {
		opacity: 0,
		transform: 'translate(-50%, 20px) scale(0.9) !important',
	}
});
