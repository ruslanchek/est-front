import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { COLORS } from '../../theme';
import Color = require('color');

interface IProps {
	isVisible: boolean;
	className: string;
	size: number;
	color: Color;
}

const ANIMATION_TIME: number = 600;

export class Preload extends React.PureComponent<IProps, {}> {
	public render() {
		const { size, isVisible, className, color } = this.props;

		if (isVisible) {
			return (
				<Container
					className={className}
					color={color.toString()}
					size={size}
				/>
			);
		} else {
			return null;
		}
	}
}

interface IContainerProps {
	size: number;
	color: string;
}

const translateKeyframes = keyframes`
	0% {
		transform: scale(0);
		background-color: ${COLORS.WHITE.alpha(.5).toString()};
		opacity: 1;
	}

	100% {
		transform: scale(2);
		background-color: ${COLORS.WHITE.alpha(.1).toString()};
		opacity: 0;
	}
`;

const Container = styled('i')`
	width: ${(props: IContainerProps) => props.size}px;
	height: ${(props: IContainerProps) => props.size}px;
	margin: ${(props: IContainerProps) => `-${props.size / 2}px 0 0 -${props.size / 2}px`};
	border: 2px solid ${(props: IContainerProps) => props.color};
	
	display: block;
	border-radius: 100%;
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	animation-name: ${translateKeyframes};
	animation-duration: ${ANIMATION_TIME}ms;
	animation-iteration-count: infinite;
	animation-delay: .1s;
`;
