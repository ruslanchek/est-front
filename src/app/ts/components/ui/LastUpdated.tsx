import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import * as moment from 'moment';

interface IProps {
	value: Date
}

interface IState {

}

export class LastUpdated extends React.PureComponent<IProps, IState> {
	public render() {
		return (
			<div className={css(styles.price)}>
				{moment(this.props.value).fromNow()}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	price: {
		color: COLORS.GRAY_DARK.darken(0.2).toString(),
		fontSize: THEME.FONT_SIZE_SMALL
	},
});
