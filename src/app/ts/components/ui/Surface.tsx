import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';

interface IProps {
	styles?: StyleDeclaration
}

interface IState {

}

export class Surface extends React.Component<IProps, IState> {
	public render() {
		return (
			<div className={css(styles.surface, this.props.styles)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	surface: {
		background: COLORS.GRAY_LIGHT.toString(),
		borderRadius: 8,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1
	}
});
