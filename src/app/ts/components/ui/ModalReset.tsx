import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { COLORS, THEME } from '../../theme';

interface IProps {
	isEnabled: boolean;
	text: string;
	onClick?: () => void;
}

export class ModalReset extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<button
				onClick={() => {
					if(this.props.onClick) {
						this.props.onClick();
					}
				}}
				disabled={!this.props.isEnabled}
				className={css(styles.submit)}
				type="button"
			>
				{this.props.text}
			</button>
		);
	}
}

const styles = StyleSheet.create({
	submit: {
		display: 'block',
		width: '100%',
		fontSize: THEME.FONT_SIZE_REGULAR,
		fontWeight: 600,
		height: 48,
		border: 'none',
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		outline: 'none',
		textAlign: 'center',
		color: COLORS.RED.toString(),
		transition: 'background-color .2s',
		cursor: 'pointer',
		backgroundColor: 'transparent',

		':disabled': {
			opacity: 0.5,
		},

		':hover': {
			backgroundColor: COLORS.RED_LIGHT.toString()
		}
	},
});
