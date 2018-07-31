import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { COLORS, THEME } from '../../theme';
import { Button, EButtonTheme } from './Button';

interface IProps {
	isEnabled: boolean;
	text: string;
	onClick?: () => void;
}

export class ModalSubmit extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Button
				themes={[EButtonTheme.AgreeBright]}
				onClick={() => {
					if(this.props.onClick) {
						this.props.onClick();
					}
				}}
				disabled={!this.props.isEnabled}
				styles={styles.submit}
				type="submit"
			>
				{this.props.text}
			</Button>
		);
	}
}

const styles = StyleSheet.create({
	submit: {
		display: 'block',
		width: '100%',
	},
});
