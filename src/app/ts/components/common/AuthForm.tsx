import * as React from 'react';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';
import { css, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';

interface IProps {

}

@followStore(AuthStore.store)
export class AuthForm extends React.Component<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.inner)}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
	},

	inner: {
		width: 400,
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1,
		borderRadius: 6,
		overflow: 'hidden',
		position: 'relative',
	}
});
