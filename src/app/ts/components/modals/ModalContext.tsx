import * as React from 'react';
import { IsDesktop } from '../common/IsDesktop';
import { Modal } from './Modal';
import { COLORS, THEME } from '../../theme';
import { CSSTransition } from 'react-transition-group';
import { IsPhoneOrTablet } from '../common/IsPhoneOrTablet';
import { css } from 'emotion';
import styled from 'react-emotion';

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
							enter: content.enter,
							enterActive: content.enterActive,
							exit: content.exit,
							exitActive: content.exitActive,
						}}
					>
						<Context innerRef={(ref) => this.wrapperRef = ref}>
							<Content width={this.props.width || DEFAULT_WIDTH}>
								{this.props.children}
							</Content>
						</Context>
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

interface IContentProps {
	width: number;
}

const Context = styled('div')`
  position: absolute;
	top: 100%;
	left: 50%;
	transform: translate(-50%, 20px);
	transition: transform ${ANIMATION_TIME}ms, opacity ${ANIMATION_TIME}ms;
	transition-timing-function: cubic-bezier(0.175, 0.885, 0.390, 1.100);
	z-index: 5;
	cursor: default;

	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 50%;
		background-color: ${COLORS.WHITE.toString()};
		width: 24px;
		z-index: 1;
		height: 24px;
		margin: -10px 0 0 -13px;
		transform: rotateZ(45deg);
		box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL_INVERTED};
	}
`;

const Content = styled('div')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	width: ${(props: IContentProps) => props.width}px;
	border-radius: 6px;
	overflow: hidden;
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_2};
	background-color: ${COLORS.WHITE.toString()};
	z-index: 2;
	position: relative;
`;

const content = {
	enter: css`
		transform: translate(-50%, 20px) scale(.98);
		opacity: 0;
	`,

	enterActive: css`
		opacity: 1;
		transform: translate(-50%, 20px) scale(1);
	`,

	exit: css`
		opacity: 1;
		transform: translate(-50%, 20px) scale(1);
	`,

	exitActive: css`
		opacity: 0;
		transform: translate(-50%, 20px) scale(.98);
	`,
};
