import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

interface IProps {
	text: string;
}

interface IState {

}

export class NoItemsSearch extends React.PureComponent<IProps, IState> {
	public render() {
		return (
			<div className={css(styles.noItems)}>
				<div className={css(styles.text)}>
					{this.props.text}
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	noItems: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		padding: THEME.SECTION_PADDING,
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.VIOLET_LIGHT.toString()
	}
});
