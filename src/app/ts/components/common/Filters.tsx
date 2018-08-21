import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COLORS, COMMON_STYLES_EMOTION, THEME } from '../../theme';
import { FilterFromTo } from '../filters/FilterFromTo';
import { FilterAnd } from '../filters/FilterAnd';
import { FilterRangeEntities } from '../filters/FilterRangeEntities';
import { Money } from '../ui/Money';
import { ObjectsStore } from '../../stores/ObjectsStore';
import ICountry = ObjectsStore.ICountry;
import { managers } from '../../managers';
import ICity = ObjectsStore.ICity;
import { FilterSearch, ISearchFilterEntity } from '../filters/FilterSearch';
import { FilterContractType } from '../filters/FilterContractType';
import { FilterAdd } from '../filters/FilterAdd';

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

		for(let i = 0; i < 1200; i++) {
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
			<Container>
				<Title>
					Showing <strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>2,436</strong> objects
				</Title>

				<FilterGroup>
					{firstEntity && (
						<FilterSearch
							filterTitle="Select city"
							entities={this.state.cityEntities}
							currentId={this.state.currentCityId}
							styles={styles.brickRoundedLeft}
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

				<FilterAdd/>
			</Container>
		);
	}
}

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  flex-wrap: wrap;
  padding-bottom: 14px;
  padding-top: 4px;
  width: 100%;
`;

const Title = styled('div')`
  margin-right: ${THEME.SECTION_PADDING_H}px;
  padding: 0;
  background-color: transparent;
  height: 26px;
  line-height: 26px;
  margin-top: 10px;
  color: ${COLORS.BLACK_LIGHT.toString()};
  font-size: ${THEME.FONT_SIZE_SMALL}px;
`;

const FilterGroup = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: ${THEME.SECTION_PADDING_H / 2}px;
`;

const styles = StyleSheet.create({
	brick: {
		marginRight: THEME.SECTION_PADDING_H / 2,
		borderRadius: 4
	},

	brickMiddle: {
		borderRight: `1px solid ${COLORS.GRAY_EXTRA_DARK}`
	},

	brickRoundedLeft: {
		borderBottomLeftRadius: 4,
		borderTopLeftRadius: 4,
		borderRight: `1px solid ${COLORS.GRAY_EXTRA_DARK}`
	},

	brickRoundedRight: {
		borderBottomRightRadius: 4,
		borderTopRightRadius: 4,
	},
});
