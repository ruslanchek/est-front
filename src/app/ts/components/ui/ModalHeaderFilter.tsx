import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	title: string;
}

export class ModalHeaderFilter extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.header)}>
				<h2 className={css(styles.title)}>
					Adding filter
				</h2>

				<div className={css(styles.add)}>
					{this.props.title}
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	title: {
		margin: 0
	},

	add: {
		backgroundColor: COLORS.BLUE.alpha(0.1).toString(),
		color: COLORS.BLUE.toString(),
		fontWeight: 600,
		height: 26,
		marginTop: 2,
		lineHeight: '26px',
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		borderRadius: 20,
		fontSize: THEME.FONT_SIZE_SMALL
	},
});
