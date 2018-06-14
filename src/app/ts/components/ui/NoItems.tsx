import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { Button, EButtonTheme } from './Button';
import { COLORS, THEME } from '../../theme';
import { managers } from '../../managers';
import { CONFIG } from '../../config';

interface IProps {

}

interface IState {

}

export class NoItems extends React.PureComponent<IProps, IState> {
	public render() {
		return (
			<div className={css(styles.noItems)}>
				<div className={css(styles.text)}>
					No items in favorites.
				</div>

				<Button
					onClick={() => {
						managers.route.go(CONFIG.PATHS.SEARCH);
					}}
					className={css(styles.buttonInner)}
					block={false}
					theme={[EButtonTheme.Secondary, EButtonTheme.Small]}
				>
					Find
				</Button>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	noItems: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: `calc(100vh - ${THEME.NAV_HEIGHT + THEME.HEADER_HEIGHT}px)`
	},

	text: {
		padding: THEME.SECTION_PADDING,
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.VIOLET_LIGHT.toString()
	},

	buttonInner: {
		width: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},

	buttonIcon: {
		fontSize: 35,
		lineHeight: '35px',
		color: COLORS.GRAY_DARK.toString(),
		fontStyle: 'normal',
		fontWeight: 600,
		position: 'relative',
		top: 0
		,
		marginRight: 5
	},
});
