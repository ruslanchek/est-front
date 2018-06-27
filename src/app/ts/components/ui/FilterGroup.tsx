import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { FilterAnd } from './FilterAnd';

interface IProps {
	styles?: StyleDeclaration;
}

export class FilterGroup extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.block, this.props.styles)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	block: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
	},
});
