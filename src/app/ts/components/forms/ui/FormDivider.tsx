import * as React from 'react';
import { COLORS, THEME } from '../../../theme';
import styled from 'react-emotion';

interface IProps {
	text?: string;
}

export class FormDivider extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Social>
				{this.props.text && (
					<Or>
						{this.props.text}
					</Or>
				)}
			</Social>
		);
	}
}

const Social = styled('div')`
  position: relative;
	text-align: center;
	height: ${THEME.FONT_SIZE_SMALL}px;
	line-height: ${THEME.FONT_SIZE_SMALL}px;
	margin-bottom: ${THEME.SECTION_PADDING_V}px;

	&:after {
		position: relative;
		height: 1px;
		top: 50%;
		transform: translate(0, -50%);
		background-color: ${COLORS.GRAY_DARK.toString()};
		display: block;
		content: '';
		z-index: 1;
	}
`;

const Or = styled('i')`
  color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
	position: absolute;
	font-size: ${THEME.FONT_SIZE_SMALL}px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${COLORS.WHITE.toString()};
	padding: 0 ${THEME.SECTION_PADDING_H / 2}px;
	z-index: 2;
`;
