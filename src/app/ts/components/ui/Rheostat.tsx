import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';

interface IProps {

}

export class Rheostat extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.bar)}>
					<i className={css(styles.line)} style={{left: '30%', right: '10%'}}/>
					<i className={css(styles.handle)} style={{left: '30%'}}/>
					<i className={css(styles.handle)} style={{left: '90%'}}/>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 40
	},

	bar: {
		height: 5,
		position: 'relative',
		borderRadius: 5,
		backgroundColor: COLORS.GRAY_DARK.toString(),
		boxShadow: `inset 0 1px 1px ${COLORS.BLACK.alpha(.1).toString()}`
	},

	line: {
		height: 5,
		backgroundColor: COLORS.BLUE.toString(),
		borderRadius: 5,
		display: 'block',
		position: 'absolute'
	},

	handle: {
		height: 20,
		width: 20,
		borderRadius: 20,
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: COLORS.GRAY_LIGHT.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1,
		cursor: 'pointer',
		transition: 'all .2s',
		border: `2px solid ${COLORS.WHITE.toString()}`,

		':hover': {
			backgroundColor: COLORS.BLUE.lighten(1.2).toString(),
			transform: 'translate(-50%, -50%) scale(1.1)',
		}
	}
});
