import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ModalReset } from './ModalReset';
import { ModalSubmit } from './ModalSubmit';

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
				<ModalReset
					text={this.props.resetText}
					onClick={this.props.onResetClick}
					isEnabled={this.props.isResetEnabled}
				/>
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
		display: 'flex'
	}
});
