import * as React from 'react';
import { THEME } from '../../theme';
import styled from 'react-emotion';

interface IProps {
	title: string;
}

export class ModalHeaderBig extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Header>
				<Title>
					{this.props.title}
				</Title>
			</Header>
		);
	}
}

const Header = styled('div')`
  padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
`;

const Title = styled('h2')`
  font-size: ${THEME.FONT_SIZE_H1}px;
	text-transform: uppercase;
	margin: 0;
	font-weight: 800;
`;