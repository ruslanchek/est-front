import * as React from 'react';
import { COMMON_STYLES_EMOTION } from '../../theme';
import { NumberFormat } from '../ui/NumberFormat';
import { EBrickType, FilterBrick } from './FilterBrick';

interface IProps {
	from: number;
	to: number;
	what: string;
	brickType: EBrickType;
}

export class FilterRangeEntities extends React.PureComponent<IProps, {}> {
	public render() {
		const { from, to, what } = this.props;

		if (from === to) {
			return (
				<FilterBrick type={this.props.brickType}>
					<strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>
						<NumberFormat value={from}/>
					</strong>&nbsp;{what}
				</FilterBrick>
			);
		} else {
			return (
				<FilterBrick type={this.props.brickType}>
					<strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>
						<NumberFormat value={from}/>
					</strong>&ndash;

					<strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>
						<NumberFormat value={to}/>
					</strong>&nbsp;{what}
				</FilterBrick>
			);
		}
	}
}
