import * as React from 'react';
import { THEME } from '../../../theme';
import styled from 'react-emotion';

export class FormButtonsBlock extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<Buttons>
				{this.props.children}
			</Buttons>
		);
	}
}

const Buttons = styled('div')`
  padding: 0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px;
`;
