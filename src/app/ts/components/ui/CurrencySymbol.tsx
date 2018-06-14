import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

interface IProps {
	value: string
}

interface IState {

}

export class CurrencySymbol extends React.PureComponent<IProps, IState> {
	public render() {
		return (
			<div className={css(styles.symbol)}>
				{this.props.value}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	symbol: {
		fontWeight: 200,
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.VIOLET_LIGHT.toString()
	},
});
