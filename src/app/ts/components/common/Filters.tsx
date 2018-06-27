import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { FilterFromTo } from '../ui/FilterFromTo';
import { FilterAnd } from '../ui/FilterAnd';
import { FilterRangeEntities } from '../ui/FilterRangeEntities';
import { Money } from '../ui/Money';
import { FilterGroup } from '../ui/FilterGroup';

interface IProps {

}

export class Filters extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.filters)}>
				<div className={css(styles.title)}>
					Showing <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>2,436</strong> objects
				</div>

				<FilterGroup
					styles={styles.group}
					filters={[
						<FilterFromTo
							styles={styles.brickRoundedLeft}
							from={0}
							to={1000000}
							filterName="Price range"
							renderValue={(value: number) => {
								return (
									<Money value={value}/>
								);
							}}
						/>,

						<FilterFromTo
							from={0}
							to={1000000}
							filterName="Price range"
							renderValue={(value: number) => {
								return (
									<Money value={value}/>
								);
							}}
						/>,

						<FilterFromTo
							styles={styles.brickRoundedRight}
							from={0}
							to={1000000}
							filterName="Price range"
							renderValue={(value: number) => {
								return (
									<Money value={value}/>
								);
							}}
						/>,
					]}
				/>

				<FilterFromTo
					styles={styles.brick}
					from={0}
					to={1000000}
					filterName="Price range"
					renderValue={(value: number) => {
						return (
							<Money value={value}/>
						);
					}}
				/>

				<FilterAnd
					styles={styles.brick}
					filterName="Property type"
					entities={[
						'Flats',
						'Houses',
						'Studios',
					]}
				/>

				<FilterRangeEntities
					styles={styles.brick}
					from={2}
					to={4}
					what="bedrooms"
				/>

				<FilterRangeEntities
					styles={styles.brick}
					from={1}
					to={2}
					what="bathrooms"
				/>

				<FilterRangeEntities
					styles={styles.brick}
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
		whiteSpace: 'nowrap',
		flexWrap: 'wrap',
		paddingBottom: 14,
		paddingTop: 4,
		width: '100%',
	},

	title: {
		marginRight: THEME.SECTION_PADDING_H,
		padding: 0,
		backgroundColor: 'transparent',
		height: 26,
		lineHeight: '26px',
		marginTop: 10,
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
	},

	add: {
		backgroundColor: COLORS.BLUE.alpha(0.1).toString(),
		color: COLORS.BLUE.toString(),
		fontWeight: 600,
		borderRadius: 10,

		':hover': {
			backgroundColor: COLORS.BLUE.alpha(0.2).toString(),
		},
	},

	group: {
		marginRight: THEME.SECTION_PADDING_H / 2,
	},

	brick: {
		marginRight: THEME.SECTION_PADDING_H / 2,
		borderRadius: 10,
	},

	brickRoundedLeft: {
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
	},

	brickRoundedRight: {
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
});
