import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';

interface IProps {

}

export class Search extends React.PureComponent<IProps, {}> {
	private input = null;

	public render() {
		return (
			<div className={css(styles.container)}>
				<input
					type="text"
					ref={(ref) => this.input = ref}
					className={css(styles.input)}
				/>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: `${THEME.SECTION_PADDING_V / 2}px 0 4px`
	},

	input: {
		width: '100%',
		backgroundColor: COLORS.GRAY_DARK.toString(),
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		outline: 'none',
		borderRadius: 5,
		height: 30,
		lineHeight: '30px',
		fontSize: THEME.FONT_SIZE_REGULAR,
		border: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		fontWeight: 600,
		color: COLORS.BLACK.toString(),
		transition: 'border-color .2s',
		boxSizing: 'border-box',

		':hover': {
			borderColor: COLORS.GRAY_DARK.darken(.1).toString()
		},

		':focus': {
			borderColor: COLORS.GRAY_DARK.darken(.2).toString()
		}
	}
});
