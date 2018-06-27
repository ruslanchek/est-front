import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { FilterAnd } from './FilterAnd';

interface IProps {
	filters: JSX.Element[];
}

export class FilterGroup extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.block)}>
				{this.props.filters.map((element, i) => {
					return (
						<div className={css(styles.section)} key={i}>
							{element}
						</div>
					);
				})}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		marginRight: THEME.SECTION_PADDING_H / 3,
		display: 'block',
		borderRadius: 2,
	},

	block: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
	},

	section: {

	},
});
