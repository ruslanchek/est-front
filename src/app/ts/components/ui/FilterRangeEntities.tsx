import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { NumberFormat } from './NumberFormat';

interface IProps {
	from: number;
	to: number;
	what: string;
	styles?: StyleDeclaration;
}

export class FilterRangeEntities extends React.PureComponent<IProps, {}> {
	public render() {
		const {from, to, what} = this.props;

		if(from === to) {
			return (
				<div className={css(COMMON_STYLES.FILTER_BRICK, this.props.styles)}>
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						<NumberFormat value={from}/>
					</strong>&nbsp;{what}
				</div>
			);
		} else {
			return (
				<div className={css(COMMON_STYLES.FILTER_BRICK, this.props.styles)}>
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						<NumberFormat value={from}/>
					</strong>&ndash;
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						<NumberFormat value={to}/>
					</strong>&nbsp;{what}
				</div>
			);
		}
	}
}

const styles = StyleSheet.create({

});
