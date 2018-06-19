import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

interface IProps {

}

export class BreadCrumbs extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.subtitle)}>
					Italy
					&nbsp;&bull;&nbsp;
					Rome
					&nbsp;&bull;&nbsp;
					Buy house
				</div>

				<h1 className={css(styles.h1)}>
					Buy 4-bedroom House in Rome, Italy
				</h1>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	h1: {
		fontSize: THEME.FONT_SIZE_H1,
		fontWeight: 800,
		margin: 0
	},

	subtitle: {
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.BLACK_LIGHT.toString(),
		textTransform: 'uppercase',
		fontWeight: 600,
		marginBottom: THEME.SECTION_PADDING_V / 2
	},

	container: {
		marginBottom: THEME.PAGE_SIDE_PADDING_DESKTOP
	}
});
