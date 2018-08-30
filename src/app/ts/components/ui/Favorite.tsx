import * as React from 'react';
import { EIcon, EIconType, Icon } from '../common/Icon';
import { COLORS } from '../../theme';
import styled, { css, keyframes } from 'react-emotion';

interface IProps {
	id: number;
	title: string;
	isFavorite: boolean;
}

interface IState {
	animated: boolean;
}

const ANIMATION_TIME: number = 350;
const SIZE: number = 20;

export class Favorite extends React.PureComponent<IProps, IState> {
	public state: IState = {
		animated: false,
	};

	private animationTimeout = null;

	public render() {
		return (
			<Container
				isAnimated={this.state.animated}
				onClick={this.click.bind(this)}
			>
				{this.props.isFavorite ?
					<Icon icon={EIcon.Favorite} type={EIconType.Default} size={SIZE} color={COLORS.WHITE}/> :
					<Icon icon={EIcon.Favorite} type={EIconType.TwoTone} size={SIZE} color={COLORS.RED}/>
				}
			</Container>
		);
	}

	public componentWillUnmount() {
		clearTimeout(this.animationTimeout);
	}

	private click(event): void {
		event.preventDefault();
		event.stopPropagation();

		this.setState({
			animated: true,
		}, () => {
			this.animationTimeout = setTimeout(() => {
				this.setState({
					animated: false,
				});
			}, ANIMATION_TIME);
		});
	}
}

interface IRootProps {
	isAnimated: boolean;
}

const translateKeyframes = keyframes`
	0% {
		transform: scale(1);
	}

	33% {
		transform: scale(.9);
	}

	66% {
		transform: scale(1.2);
	}

	100% {
		transform: scale(1);
	}
`;

const Container = styled('div')<IRootProps>`
  width: ${SIZE}px;
	height: ${SIZE}px;
	cursor: pointer;
	transition: opacity .2s;
	user-select: none;

	&:hover {
		opacity: .75;
	}
	
	${(props: IRootProps) => {
		if (props.isAnimated) {
			return css`
				animation-name: ${translateKeyframes};
				animation-duration: ${ANIMATION_TIME}ms;
				animation-iteration-count: 1;
			`;
		}
	}}
`;
