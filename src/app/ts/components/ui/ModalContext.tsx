import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { IsDesktop } from '../common/IsDesktop';
import { Modal } from './Modal';
import { COLORS, THEME } from '../../theme';
import { CSSTransition } from 'react-transition-group';
import { IsPhoneOrTablet } from '../common/IsPhoneOrTablet';

interface IProps {
	isVisible: boolean;
	onClose: () => void;
	width?: number;
}

const ANIMATION_TIME: number = 350;
const DEFAULT_WIDTH: number = 300;

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
				<IsPhoneOrTablet>
					<Modal
						isVisible={this.props.isVisible}
						onClose={this.props.onClose.bind(this)}
						width={this.props.width}
					>
						{this.props.children}
					</Modal>
				</IsPhoneOrTablet>

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
							<div
								style={{
									width: this.props.width || DEFAULT_WIDTH
								}}
								className={css(styles.content)}>
								{this.props.children}
							</div>
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
		top: '100%',
		left: '50%',
		transform: 'translate(-50%, 20px)',
		transition: `transform ${ANIMATION_TIME}ms, opacity ${ANIMATION_TIME}ms`,
		transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.390, 1.100)',
		zIndex: 900,

		':before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			left: '50%',
			backgroundColor: COLORS.WHITE.toString(),
			width: 24,
			zIndex: 1,
			height: 24,
			margin: '-10px 0 0 -16px',
			transform: 'rotateZ(45deg)',
			boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL_INVERTED
		}
	},

	content: {
		fontSize: THEME.FONT_SIZE_SMALL,
		width: 400,
		borderRadius: 10,
		overflow: 'hidden',
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		backgroundColor: COLORS.WHITE.toString(),
		zIndex: 2,
		position: 'relative'
	},

	enterContent: {
		transform: 'translate(-50%, 20px) scale(0.95) !important',
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
		transform: 'translate(-50%, 20px) scale(0.95) !important',
	}
});
