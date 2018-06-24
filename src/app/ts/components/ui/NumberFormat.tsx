import * as React from 'react';
import { CONFIG } from '../../config';

interface IProps {
	value: number;
	minPrecision?: number;
	maxPrecision?: number;
}

export class NumberFormat extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		value: 0,
		minPrecision: 0,
		maxPrecision: 0
	};

	public render() {
		const { value, minPrecision, maxPrecision } = this.props;

		return (
			<React.Fragment>
				{value.toLocaleString(CONFIG.DEFAULT_LOCALE, {
					minimumFractionDigits: minPrecision,
					maximumFractionDigits: maxPrecision
				})}
			</React.Fragment>
		);
	}
}
