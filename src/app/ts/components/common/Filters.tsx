import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';

interface IProps {

}

export class Filters extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.filters)}>
				<div className={css(styles.title)}>
					Showing <strong className={css(styles.accent)}>2,436</strong> objects
				</div>

				<div className={css(styles.brick)}>
					from <strong className={css(styles.accent)}>€100,000</strong>
					{' '}
					to <strong className={css(styles.accent)}>€2,000,000</strong>
				</div>

				<div className={css(styles.brick)}>
					<strong className={css(styles.accent)}>Flats</strong>{', '}
					<strong className={css(styles.accent)}>Houses</strong>{' and '}
					<strong className={css(styles.accent)}>Studios</strong>
				</div>

				<div className={css(styles.brick)}>
					<strong className={css(styles.accent)}>2</strong>&ndash;<strong className={css(styles.accent)}>4</strong> bedrooms
				</div>

				<div className={css(styles.brick)}>
					<strong className={css(styles.accent)}>1</strong>&ndash;<strong className={css(styles.accent)}>2</strong> bathrooms
				</div>

				<div className={css(styles.brick, styles.add)}>
					+ Add new filter
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	filters: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
		whiteSpace: 'nowrap',
	},

	title: {
		marginRight: THEME.SECTION_PADDING_H,
	},

	brick: {
		height: 24,
		lineHeight: '24px',
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		backgroundColor: COLORS.GRAY_DARK.toString(),
		borderRadius: 16,
		marginRight: THEME.SECTION_PADDING_H / 2,
		cursor: 'pointer',
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.darken(0.1).toString(),
		}
	},

	add: {
		color: COLORS.BLUE.toString(),
		fontWeight: 600
	},

	accent: {
		color: COLORS.BLACK.toString(),
		fontWeight: 600
	}
});
