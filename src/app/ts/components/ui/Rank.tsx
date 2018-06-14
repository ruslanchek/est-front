import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import Color = require('color');

interface IProps {
	value: number
}

interface IState {

}

const GOLD: Color = Color('#E8C159');
const SILVER: Color = Color('#B4B4B4');
const BRONZE: Color = Color('#D08F6E');

export class Rank extends React.PureComponent<IProps, IState> {
	public render() {
		let style;

		switch(true) {
			case this.props.value === 1 : {
				style = styles.gold;
				break;
			}

			case this.props.value === 2 : {
				style = styles.silver;
				break;
			}

			case this.props.value === 3 : {
				style = styles.bronze;
				break;
			}

			default : {
				style = styles.gray;
				break;
			}
		}

		return (
			<div className={css(styles.rank, style)}>
				Rate {this.props.value}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	rank: {
		borderRadius: 10,
		fontSize: THEME.FONT_SIZE_SMALL,
		textTransform: 'uppercase',
		padding: '2px 8px',
		backgroundColor: 'red',
		color: 'white',
		display: 'inline-block',
		marginRight: 10,
		fontWeight: 600
	},

	gold: {
		backgroundColor: GOLD.toString(),
		color: '#fff'
	},

	bronze: {
		backgroundColor: BRONZE.toString(),
		color: '#fff'
	},

	silver: {
		backgroundColor: SILVER.toString(),
		color: '#fff'
	},

	gray: {
		backgroundColor: COLORS.GRAY_DARK.toString(),
		color: COLORS.GRAY_DARK.darken(.5).toString()
	}
});
