import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { FilterFromTo } from '../ui/FilterFromTo';
import { FilterAnd } from '../ui/FilterAnd';
import { FilterRangeEntities } from '../ui/FilterRangeEntities';
import { Money } from '../ui/Money';

interface IProps {

}

export class Filters extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.filters)}>
				<div className={css(styles.title)}>
					Showing <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>2,436</strong> objects
				</div>

				<FilterFromTo
					from={<Money value={200000}/>}
					to={<Money value={4000000}/>}
				/>

				<FilterAnd
					filterName="Property type"
					entities={[
						'Flats',
						'Houses',
						'Studios',
					]}
				/>

				<FilterRangeEntities
					from={2}
					to={4}
					what="bedrooms"
				/>

				<FilterRangeEntities
					from={1}
					to={2}
					what="bathrooms"
				/>

				<FilterRangeEntities
					from={1}
					to={1}
					what="garage"
				/>

				<div className={css(COMMON_STYLES.FILTER_BRICK, styles.add)}>
					+ Add new filter
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	filters: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
		whiteSpace: 'nowrap',
	},

	title: {
		marginRight: THEME.SECTION_PADDING_H,
	},

	add: {
		backgroundColor: COLORS.BLUE.alpha(0.1).toString(),
		color: COLORS.BLUE.toString(),
		fontWeight: 600,

		':hover': {
			backgroundColor: COLORS.BLUE.alpha(0.2).toString(),
		},
	},
});
