import * as React from 'react';
import { CONFIG } from '../../config';

interface IProps {
	value: number;
	symbol?: string;
	symbolAfter?: boolean;
	minPrecision?: number;
	maxPrecision?: number;
}

export class Money extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		value: 0,
		symbol: '€',
		symbolAfter: false,
		minPrecision: 0,
		maxPrecision: 0
	};

	public render() {
		const { value, symbol, symbolAfter, minPrecision, maxPrecision } = this.props;

		return (
			<React.Fragment>
				{!symbolAfter && (
					<React.Fragment>
						{symbol}
					</React.Fragment>
				)}

				{value.toLocaleString(CONFIG.DEFAULT_LOCALE, {
					minimumFractionDigits: minPrecision,
					maximumFractionDigits: maxPrecision
				})}

				{symbolAfter && (
					<React.Fragment>
						{' '}{symbol}
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}
