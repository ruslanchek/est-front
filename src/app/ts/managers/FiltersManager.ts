import { Manager } from './Manager';

export interface IFilter {
	name: string;
	title: string;
	value: string;
	format: EFilterFormat;
	type: EFilterType;
	predefined: string[];
}

export interface IFilterGroup {
	title: string;
	filters: IFilter[];
}

export enum EFilterType {
	RangePredefined,
	RangeSimple,
}

export enum EFilterFormat {
	Price,
}

export class FiltersManager extends Manager {
	public reset(): void {
	}

	public init(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			resolve();
		});
	}

	public getFilters(): IFilterGroup[] {
		return FILTERS_HOUSES;
	}
}

const FILTERS_HOUSES: IFilterGroup[] = [
	{
		title: 'Price €',
		filters: [
			{
				title: 'From',
				name: 'priceFrom',
				value: '0',
				type: EFilterType.RangePredefined,
				predefined: [
					'0',
					'10000',
					'20000',
					'30000'
				],
				format: EFilterFormat.Price
			},

			{
				title: 'To',
				name: 'priceTo',
				value: '100000',
				type: EFilterType.RangePredefined,
				predefined: [
					'0',
					'10000',
					'20000',
					'30000'
				],
				format: EFilterFormat.Price
			}
		]
	}
];