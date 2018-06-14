import * as React from 'react';
import { CONFIG } from '../../config';
import { css, StyleSheet } from 'aphrodite';
import { NavButton } from './NavButton';
import { IconName } from '../ui/Icon';

export class Nav extends React.Component<{}, {}> {
	public render() {
		return (
			<nav className={css(styles.nav)}>
				<NavButton name={'Favorites'} path={CONFIG.PATHS.FAVORITES} iconName={IconName.Love} size={20}/>
				<NavButton name={`Top ${CONFIG.TOP_COUNT}`} path={CONFIG.PATHS.HOME} iconName={IconName.Top50} size={20}/>
				<NavButton name={'Search'} path={CONFIG.PATHS.SEARCH} iconName={IconName.Search} size={20}/>
			</nav>
		);
	}
}

const styles = StyleSheet.create({
	nav: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
	}
});
