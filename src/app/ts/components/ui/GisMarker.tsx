import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import Color = require('color');

interface IProps {
	id: number;
	lat: number;
	lng: number;
	title: string;
	type: EGisMarkerType;
	color: Color;
}

export enum EGisMarkerType {
	Small,
	Big
}

export class GisMarker extends React.PureComponent<IProps, {}> {
	public render() {
		const { id, title, type, color } = this.props;
		const markerRules = [
			styles.marker
		];

		switch (type) {
			case EGisMarkerType.Small : {
				markerRules.push(styles.small);
				break;
			}
		}

		return (
			<div
				title={title}
				className={css(markerRules)}
			 	onClick={() => {
					alert(title);
				}}
				style={{
					background: `${color.toString()} linear-gradient(to bottom, ${color.lighten(0.4).toString()}, ${color.alpha(0).toString()})`,
				}}
			>
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
			transform: 'translate(-50%, -50%) scale(1.1)'
		}
	},

	small: {
		width: 10,
		height: 10
	}
});
