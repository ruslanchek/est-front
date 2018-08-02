import * as React from 'react';
import { COLORS, THEME } from '../../../theme';
import { css, StyleSheet } from 'aphrodite';

interface IProps {
	text?: string;
}

export class FormDivider extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.social)}>
				{this.props.text && (
					<i className={css(styles.socialOr)}>
						{this.props.text}
					</i>
				)}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	social: {
		position: 'relative',
		textAlign: 'center',
		height: THEME.FONT_SIZE_SMALL,
		lineHeight: `${THEME.FONT_SIZE_SMALL}px`,
		marginBottom: THEME.SECTION_PADDING_V,

		':after': {
			position: 'relative',
			height: 1,
			top: '50%',
			transform: 'translate(0, -50%)',
			backgroundColor: COLORS.GRAY_DARK.toString(),
			display: 'block',
			content: '""',
			zIndex: 1,
		},
	},

	socialOr: {
		color: COLORS.BLACK_EXTRA_LIGHT.toString(),
		position: 'absolute',
		fontSize: THEME.FONT_SIZE_SMALL,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: COLORS.WHITE.toString(),
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		zIndex: 2,
	},
});
