import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { EOLocaleNumber } from 'eo-locale/dist/components/number';

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

	public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
		if(nextProps.value !== this.props.value) {
			return true;
		}

		if(nextState.symbolAfter !== this.state.symbolAfter) {
			return true;
		}

		if(nextState.symbol !== this.state.symbol) {
			return true;
		}

		return false;
	}

	public render() {
		return (
			<div className={css(styles.price)}>
				{!this.state.symbolAfter ? this.state.symbol : null}

				<EOLocaleNumber
					value={this.props.value}
					minimumFractionDigits={0}
					maximumFractionDigits={2}
				/>

				{this.state.symbolAfter === true ? ` ${this.state.symbol}` : null}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	price: {

	},
});
