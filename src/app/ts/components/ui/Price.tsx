import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import { EOLocaleNumber } from 'eo-locale/dist/components/number';

interface IProps {
	value: number
}

interface IState {

}

export class Price extends React.PureComponent<IProps, IState> {
	public render() {
		return (
			<div className={css(styles.price)}>
				$<EOLocaleNumber value={this.props.value} minimumFractionDigits={0} maximumFractionDigits={4}/>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	price: {

	},
});
