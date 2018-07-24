import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';
import { ModalHeaderFilter } from '../ui/ModalHeaderFilter';

interface IProps {
	title: string;
}

export class AuthForm extends React.Component<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.inner)}>
					<ModalHeaderFilter color={COLORS.BLUE} title={this.props.title} icon="md-person"/>
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
		borderRadius: 10,
		overflow: 'hidden',
		position: 'relative',
	}
});
