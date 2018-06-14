import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CoinStore } from '../../stores/CoinStore';
import ICoin = CoinStore.ICoin;
import { Changes } from './Changes';
import { SurfaceRow } from './SurfaceRow';
import { COLORS, THEME } from '../../theme';
import { EOLocaleNumber } from 'eo-locale/dist/components/number';

type TRowType = 'change' | 'price' | 'number';

interface IRowItem {
	title: string,
	value: any,
	type: TRowType
}

interface IProps {
	coin: ICoin;
	type: TRowType;
}

interface IState {

}

export class Params extends React.PureComponent<IProps, IState> {
	public render() {
		const item: ICoin = this.props.coin;
		const allRows: IRowItem[] = [
			{title: 'Last hour', type: 'change', value: item.percentChangeHour},
			{title: 'Last day', type: 'change', value: item.percentChangeDay},
			{title: 'Last week', type: 'change', value: item.percentChangeWeek},
			{title: 'Price, USD', type: 'price', value: item.priceUsd},
			{title: 'Price, BTC', type: 'number', value: item.priceBtc},
			{title: 'Total supply', type: 'price', value: item.totalSupply},
			{title: 'Day volume, USD', type: 'price', value: item.volumeDayUsd},
			{title: 'Available supply', type: 'price', value: item.availableSupply},
			{title: 'Market cap, USD', type: 'price', value: item.marketCapUsd},
			{title: 'Max supply', type: 'price', value: item.maxSupply}
		];

		const rows: IRowItem[] = allRows.filter((row: IRowItem) => {
			if(this.props.type === 'change') {
				return row.type === 'change';
			} else {
				return row.type === 'number' || row.type === 'price';
			}
		});

		return (
			<div>
				{rows.map((row: IRowItem, i: number) => {
					let value = null;

					switch (row.type) {
						case 'change' : {
							value = (
								<div className={css(styles.rowValue)}>
									<Changes
										justText={true}
										value={row.value}
									/>
								</div>
							);

							break;
						}

						case 'price' : {
							value = (
								<div
									className={css(styles.rowValue)}
								>
									<EOLocaleNumber value={row.value} minimumFractionDigits={0} maximumFractionDigits={10}/>
								</div>
							);

							break;
						}

						case 'number' : {
							value = (
								<div
									className={css(styles.rowValue)}
								>
									<EOLocaleNumber value={row.value} minimumFractionDigits={0} maximumFractionDigits={10}/>
								</div>
							);

							break;
						}
					}

					return (
						<div className={css(styles.item)} key={i}>
							<div className={css(styles.rowTitle)}>
								{row.title}
							</div>

							{value}
						</div>
					);
				})}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		fontSize: THEME.FONT_SIZE_SMALL,
		justifyContent: 'space-between',
		marginTop: 12,
	},

	rowLast: {
	},

	rowTitle: {
		color: COLORS.VIOLET_LIGHT.toString()
	},

	rowValue: {

	}
});
