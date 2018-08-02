import * as React from 'react';
import { COLORS, THEME } from '../../../theme';
import { css, StyleSheet } from 'aphrodite';

interface IProps {
	text?: string;
}

export class FormRow extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.row)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		paddingTop: THEME.SECTION_PADDING_V,
	},
});
