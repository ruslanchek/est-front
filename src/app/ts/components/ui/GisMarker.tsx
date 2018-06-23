import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import Color = require('color');
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;

interface IProps {
	opened: boolean;
	object: IObject;
	lat: string;
	lng: string;
	type: EGisMarkerType;
	color: Color;
	onCLick: (object: IObject) => void;
}

export enum EGisMarkerType {
	Small,
	Big
}

export class GisMarker extends React.PureComponent<IProps, {}> {
	public render() {
		const { object, type, color, onCLick } = this.props;
		const markerRules = [
			styles.marker,
		];

		switch (type) {
			case EGisMarkerType.Small : {
				markerRules.push(styles.small);
				break;
			}
		}

		return (
			<div
				title={object.title}
				className={css(markerRules)}
				onClick={() => {
					onCLick(object);
				}}
				style={{
					background: `${color.toString()} linear-gradient(to bottom, ${color.lighten(0.4).toString()}, ${color.alpha(0).toString()})`,
				}}
			>
				{this.props.opened ? <div className={css(styles.popup)}>xxx</div> : null}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	marker: {
		width: 20,
		height: 20,
		boxShadow: `0 1px 3px rgba(0, 0, 0, .4)`,
		border: '2px solid #fff',
		borderRadius: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		top: '50%',
		left: '50%',
		opacity: .85,
		transition: 'opacity .2s, transform .2s',
		cursor: 'pointer',

		':hover': {
			opacity: 1,
			transform: 'translate(-50%, -50%) scale(1.1)',
		},
	},

	small: {
		width: 10,
		height: 10,
	},

	popup: {
		background: COLORS.WHITE.alpha(.9).toString(),
		position: 'absolute',
		borderRadius: 10,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		padding: 20,
		top: 0,
		left: 40
	}
});
