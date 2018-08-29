import * as React from 'react';
import { ModalSubmit } from './ModalSubmit';
import { COLORS, THEME } from '../../theme';
import styled from 'react-emotion';

interface IProps {
	isResetEnabled: boolean;
	isSubmitEnabled: boolean;
	resetText: string;
	submitText: string;
	onResetClick: () => void;
	onSubmitClick: () => void;
}

export class ModalResetSubmit extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Container>
				<ModalSubmit
					text={this.props.submitText}
					onClick={this.props.onSubmitClick}
					isEnabled={this.props.isSubmitEnabled}
				/>
			</Container>
		);
	}
}

const Container = styled('div')`
  display: flex;
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
`;

