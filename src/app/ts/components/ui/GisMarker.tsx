import * as React from 'react';
import { COLORS, THEME } from '../../theme';
import Color = require('color');
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import styled, { css } from 'react-emotion';

interface IProps {
	opened: boolean;
	object: IObject;
	lat: number;
	lng: number;
	type: EGisMarkerType;
	color: Color;
	onCLick: (object: IObject) => void;
}

export enum EGisMarkerType {
	Small,
	Big,
}

export class GisMarker extends React.PureComponent<IProps, {}> {
	public render() {
		const { object, type, color, onCLick } = this.props;

		return (
			<Container
				type={type}
				title={object.title}
				onClick={() => {
					onCLick(object);
				}}
				style={{
					background: `${color.toString()}`,
				}}
			>
				{this.props.opened ? (
					<Popup>xxx</Popup>
				) : null}
			</Container>
		);
	}
}

interface IContainerProps {
	type: EGisMarkerType;
}

const Container = styled('div')<IContainerProps>`
  width: 20px;
	height: 20px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
	border: 2px solid #fff;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translate(-50%, -50%);
	position: absolute;
	top: 50%;
	left: 50%;
	opacity: .85;
	transition: opacity .2s, transform .2s;
	cursor: pointer;

	&:before {
		content: '';
		position: relative;
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 100%;
		background-color: ${COLORS.WHITE.toString()};
	}

	&:hover {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1.1);
	}
	
	${(props: IContainerProps) => {
		switch (props.type) {
			case EGisMarkerType.Small : {
				return css`
					width: 10px;
					height: 10px;
			
					&:before {
						display: none;
					}
				`;
			}
		}
	}}
`;

const Popup = styled('div')`
  background: ${COLORS.WHITE.alpha(.9).toString()};
	position: absolute;
	border-radius: 10px;
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_2};
	padding: 20px;
	top: 0;
	left: 40px;
`;
