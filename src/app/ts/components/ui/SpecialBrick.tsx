import * as React from 'react';
import Color = require('color');
import { Link, LinkProps } from 'react-router-dom';
import { PATHS } from '../../config';
import { CSSUtils } from '../../lib/CSSUtils';
import { COLORS, THEME } from '../../theme';
import styled, { css } from 'react-emotion';

interface IProps {
	color1: string;
	color2: string;
	title: string;
	subtitle: string;
	className?: string;
	pattern?: ESpecialBrickPattern;
}

export enum ESpecialBrickPattern {
	Circles = 'circles',
	Stripes = 'stripes',
	Pluses = 'pluses',
	Waves = 'waves',
}

export class SpecialBrick extends React.PureComponent<IProps, {}> {
	public render() {
		const {
			color1,
			color2,
			title,
			subtitle,
			className,
			pattern,
		} = this.props;

		return (
			<div className={className}>
				<Link
					to={PATHS.HOME}
					className={container}
				>
					<Inner
						color1={Color(color1)}
						color2={Color(color2)}
						pattern={pattern}
					>
						<Title>
							{title}
						</Title>

						<Subtitle>
							{subtitle}
						</Subtitle>
					</Inner>
				</Link>
			</div>
		);
	}
}

interface IInnerProps {
	color1: Color;
	color2: Color;
	pattern: ESpecialBrickPattern;
}

const container = css`
  display: block;
	border-radius: 6px;
	overflow: hidden;
	color: ${COLORS.WHITE.toString()};
	text-decoration: none;
	padding-top: 40%;
	position: relative;
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_1};
`;

const Inner = styled('span')<IInnerProps>`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	box-sizing: border-box;
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	text-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	background-color: ${props => props.color1.toString()};
	background-position: 0, 0;
	background-size: 0, 100%;
	
	${(props: IInnerProps) => {
		return css`
			background-image: 
				${CSSUtils.linearGradient(10, props.color1, props.color2, 10, 100)},
				url(${require(`../../../img/special-patterns/${props.pattern}.svg`)});
		`;	
	}}
`;

const Title = styled('span')`
  font-size: ${THEME.FONT_SIZE_BIG}px;
	text-transform: uppercase;
	font-weight: 800;
	margin-bottom: .25em;
`;

const Subtitle = styled('span')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	text-transform: uppercase;
	opacity: .75;
`;
