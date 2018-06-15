import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';

@followStore(StateStore.store)
export class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<header className={css(styles.header)}>
				xxx
			</header>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: 60,
		padding: `0 ${THEME.SECTION_PADDING}px`,
	},

	nav: {
		height: 60,
	},

	header: {
		height: THEME.HEADER_HEIGHT,
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: `0 1px 2px 0 ${COLORS.BLACK.alpha(0.07).toString()}`,
		zIndex: 10
	},

	title: {
		fontSize: THEME.FONT_SIZE_H1,
		fontWeight: 400,
		flexGrow: 1
	},

	back: {
		marginRight: THEME.SECTION_PADDING,
		flexGrow: 0
	},

	initial: {
		fontSize: 8,
		display: 'block',
		fontStyle: 'normal',
		marginTop: 3
	}
});
