import * as React from 'react';
import { THEME } from '../../../theme';
import { css, StyleSheet } from 'aphrodite';

export class FormButtonsBlock extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<div className={css(styles.buttons)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	buttons: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
	},
});
