import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ModalReset } from './ModalReset';
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
				<div className={css(styles.button)}>
					<ModalReset
						text={this.props.resetText}
						onClick={this.props.onResetClick}
						isEnabled={this.props.isResetEnabled}
					/>
				</div>
				<div className={css(styles.button)}>
					<ModalSubmit
						text={this.props.submitText}
						onClick={this.props.onSubmitClick}
						isEnabled={this.props.isSubmitEnabled}
					/>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		padding: THEME.SECTION_PADDING_H,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
	},

	button: {
		width: '50%',

		':first-of-type': {
			marginRight: THEME.SECTION_PADDING_H,
		},
	}
});
