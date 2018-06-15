import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { CONFIG } from '../../config';

interface IProps {
	value: number;
}

interface IState {
	symbolAfter: boolean;
	symbol: string;
}

export class Price extends React.PureComponent<IProps, IState> {
	public state: IState = {
		symbolAfter: false,
		symbol: '€'
	};

	public render() {
		return (
			<div className={css(styles.price)}>
				{!this.state.symbolAfter ? this.state.symbol : null}

				{this.props.value.toLocaleString(CONFIG.DEFAULT_LOCALE, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 2
				})}

				{this.state.symbolAfter === true ? ` ${this.state.symbol}` : null}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	price: {

	},
});
