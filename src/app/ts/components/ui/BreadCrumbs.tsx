import * as React from 'react';
import { COLORS, THEME } from '../../theme';
import styled from 'react-emotion';

interface IProps {

}

export class BreadCrumbs extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Container>
				<Subtitle>
					Italy
					&nbsp;&bull;&nbsp;
					Rome
					&nbsp;&bull;&nbsp;
					Buy house
				</Subtitle>

				<H1>
					Buy 4-bedroom House in Rome, Italy
				</H1>
			</Container>
		);
	}
}

const Container = styled('div')`
	margin-bottom: ${THEME.PAGE_SIDE_PADDING_DESKTOP}px;
`;

const Subtitle = styled('div')`
  font-size: ${THEME.FONT_SIZE_SMALL};
	color: ${COLORS.BLACK_LIGHT.toString()};
	text-transform: uppercase;
	font-weight: 600;
	margin-bottom: ${THEME.SECTION_PADDING_V / 2}px;
`;

const H1 = styled('h1')`
  font-size: ${THEME.FONT_SIZE_H1};
	font-weight: 800;
	margin: 0;
`;
