import * as React from 'react';
import { COMMON_STYLES } from '../../theme';
import { NumberFormat } from '../ui/NumberFormat';
import { EFilterBrickType, FilterBrick } from './FilterBrick';

interface IProps {
	from: number;
	to: number;
	what: string;
	brickType: EFilterBrickType;
}

export class FilterRangeEntities extends React.PureComponent<IProps, {}> {
	public render() {
		const { from, to, what } = this.props;

		if (from === to) {
			return (
				<FilterBrick type={this.props.brickType}>
					<strong className={COMMON_STYLES.FILTER_ACCENT}>
						<NumberFormat value={from}/>
					</strong>&nbsp;{what}
				</FilterBrick>
			);
		} else {
			return (
				<FilterBrick type={this.props.brickType}>
					<strong className={COMMON_STYLES.FILTER_ACCENT}>
						<NumberFormat value={from}/>
					</strong>&ndash;

					<strong className={COMMON_STYLES.FILTER_ACCENT}>
						<NumberFormat value={to}/>
					</strong>&nbsp;{what}
				</FilterBrick>
			);
		}
	}
}
