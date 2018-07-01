import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { FilterFromTo } from '../ui/FilterFromTo';
import { FilterAnd } from '../ui/FilterAnd';
import { FilterRangeEntities } from '../ui/FilterRangeEntities';
import { Money } from '../ui/Money';
import { FilterGroup } from '../ui/FilterGroup';
import { FilterCountry } from '../ui/FilterCountry';
import { ObjectsStore } from '../../stores/ObjectsStore';
import ICountry = ObjectsStore.ICountry;
import { managers } from '../../managers';
import ICity = ObjectsStore.ICity;
import { FilterSearch, ISearchFilterEntity } from '../ui/FilterSearch';
import { FilterContractType } from '../ui/FilterContractType';

interface IProps {

}

interface IState {
	currentCityId: string | number;
	cityEntities: ISearchFilterEntity[];
}

export class Filters extends React.PureComponent<IProps, IState> {
	public state: IState = {
		currentCityId: null,
		cityEntities: []
	};

	public componentDidMount() {
		let entities: ISearchFilterEntity[] = [];
		let currentCity: ICity = null;

		for(let i = 0; i < 200; i++) {
			const city: ICity = managers.faker.generateCity(1);

			currentCity = city;

			entities.push({
				title: city.title,
				id: city.id
			});
		}

		entities = entities.sort((a, b) => {
			return a.title.localeCompare(b.title);
		});

		this.setState({
			cityEntities: entities,
			currentCityId: entities[0].id
		});
	}

	public render() {
		const country: ICountry = managers.faker.generateCountry();
		const {cityEntities} = this.state;
		let firstEntity: ISearchFilterEntity = null;

		if(cityEntities) {
			firstEntity = cityEntities[0];
		}

		return (
			<div className={css(styles.filters)}>
				<div className={css(styles.title)}>
					Showing <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>2,436</strong> objects
				</div>

				<FilterGroup styles={styles.group}>
					<FilterCountry
						styles={styles.brickRoundedLeft}
						title={country.title}
						isoCode={country.isoCode}
					/>

					{firstEntity && (
						<FilterSearch
							filterTitle={"Select city"}
							entities={this.state.cityEntities}
							currentId={this.state.currentCityId}
							styles={styles.brickMiddle}
							title={firstEntity.title}
							onSelect={(id) => {
								this.setState({
									currentCityId: id
								});
							}}
						/>
					)}

					<FilterAnd
						styles={styles.brickMiddle}
						filterName="Property type"
						entities={[
							'Flats',
							'Houses',
							'Studios',
						]}
					/>

					<FilterContractType
						styles={styles.brickRoundedRight}
						type={ObjectsStore.EObjectContractType.Rent}
					/>
				</FilterGroup>

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
		borderRadius: 10
	},

	brickMiddle: {
		borderRight: `1px solid ${COLORS.GRAY_EXTRA_DARK}`
	},

	brickRoundedLeft: {
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		borderRight: `1px solid ${COLORS.GRAY_EXTRA_DARK}`
	},

	brickRoundedRight: {
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
});
