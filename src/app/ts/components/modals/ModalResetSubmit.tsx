import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { ModalSubmit } from './ModalSubmit';
import { COLORS, THEME } from '../../theme';

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
			<div className={css(styles.container)}>
					<ModalSubmit
						text={this.props.submitText}
						onClick={this.props.onSubmitClick}
						isEnabled={this.props.isSubmitEnabled}
					/>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
	},

	button: {
		width: '50%',

		':first-of-type': {
			marginRight: THEME.SECTION_PADDING_H,
		},
	}
});
