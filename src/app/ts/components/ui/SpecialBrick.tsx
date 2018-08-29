import * as React from 'react';
import Color = require('color');
import { Link, LinkProps } from 'react-router-dom';
import { PATHS } from '../../config';
import { CSSUtils } from '../../lib/CSSUtils';
import { COLORS, THEME } from '../../theme';
import styled, { css } from 'react-emotion';

interface IProps {
	color1: Color;
	color2: Color;
	title: string;
	subtitle: string;
	className?: string;
}

export class SpecialBrick extends React.PureComponent<IProps, {}> {
	public render() {
		const {
			color1,
			color2,
			title,
			subtitle,
			className,
		} = this.props;

		return (
			<div className={className}>
				<Link
					to={PATHS.HOME}
					className={container}
					style={{
						backgroundColor: color1.toString(),
						backgroundImage: CSSUtils.linearGradient(10, color1, color2, 10, 100),
					}}>
					<Inner>
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

const Inner = styled('span')`
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
