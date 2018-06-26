import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';

interface IProps {

}

export class FilterPlace extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.block)}>
				<div className={css(styles.section)}>
					<img
						src="https://static.expertoption.com/flags/2.0/svg/it.svg"
						width={20}
						className={css(styles.icon)}
					/>

					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						Italy
					</strong>
				</div>

				<div className={css(styles.section)}>
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						Rome
					</strong>
				</div>

				<div className={css(styles.section)}>
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						Houses
					</strong>
				</div>

				<div className={css(styles.section)}>
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						Buy
					</strong>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		marginRight: THEME.SECTION_PADDING_H / 3,
		display: 'block',
		borderRadius: 2
	},

	block: {
		height: 27,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: COLORS.GRAY_DARK.toString(),
		borderRadius: 16,
		marginRight: THEME.SECTION_PADDING_H / 2,
		cursor: 'pointer',
		transition: 'background-color .2s',
		marginTop: 10,
		overflow: 'hidden'
	},

	section: {
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		height: 27,
		display: 'flex',
		alignItems: 'center',
		borderRight: `1px solid ${COLORS.GRAY_EXTRA_DARK}`,
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.darken(0.075).toString(),
		},

		':last-of-type': {
			border: 'none'
		}
	}
});
