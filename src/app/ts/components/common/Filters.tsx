import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { managers } from '../../managers';
import { IFilter, IFilterGroup } from '../../managers/FiltersManager';
import { FilterRangePredefined } from '../ui/FilterRangePredefined';
import { COLORS, THEME } from '../../theme';

interface IProps {

}

export class Filters extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.filters)}>
				{managers.filters.getFilters().map((group: IFilterGroup) => {
					return (
						<div className={css(styles.group)}>
							<div className={css(styles.title)}>{group.title}</div>

							<div className={css(styles.groupContainer)}>
								{group.filters.map((filter: IFilter) => {
									return (
										<FilterRangePredefined groupName={group.title} filter={filter}/>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	filters: {
		marginBottom: THEME.SECTION_PADDING_V
	},

	title: {
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.BLACK_LIGHT.toString(),
		textTransform: 'uppercase',
		fontWeight: 600,
		marginBottom: 5
	},

	group: {

	},

	groupContainer: {
		display: 'flex'
	}
});
