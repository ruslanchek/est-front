import * as React from 'react';
import { THEME } from '../../../theme';
import styled from 'react-emotion';

interface IProps {
	text?: string;
}

export class FormLinks extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

const Container = styled('div')`
  padding: 0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px;
	display: flex;
	justify-content: center;
`;
