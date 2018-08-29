import * as React from 'react';
import styled from 'react-emotion';
import Color = require('color');
import * as Ionicon from 'react-ionicons';
import { COLORS, THEME } from '../../theme';

interface IProps {
	title: string;
	color: Color;
	icon: string;
}

export class ModalHeaderFilter extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Header>
				<Title>
					<Icon backgroundColor={this.props.color.toString()}>
						<Ionicon
							icon={this.props.icon}
							fontSize="16px"
							color={COLORS.WHITE.toString()}
						/>
					</Icon>

					{this.props.title}
				</Title>
			</Header>
		);
	}
}

interface IIconProps {
	backgroundColor: string;
}

const Header = styled('div')`
  padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled('h2')`
  margin: 0;
	font-size: ${THEME.FONT_SIZE_SMALL}px;
	text-transform: uppercase;
	color: COLORS.BLACK.toString();
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: 800;
`;

const Icon = styled('i')<IIconProps>`
  width: 22px;
	height: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	margin-right: ${THEME.SECTION_PADDING_H / 2}px;
	background-color: ${(props: IIconProps) => props.backgroundColor};
`;
