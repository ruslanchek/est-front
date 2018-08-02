import * as React from 'react';
import { COLORS, THEME } from '../../../theme';
import { css, StyleSheet } from 'aphrodite';

interface IProps {
	text?: string;
}

export class FormRows extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.rows)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	rows: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
	},
});
