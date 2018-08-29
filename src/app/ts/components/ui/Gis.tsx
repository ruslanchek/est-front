import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { CONFIG } from '../../config';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { EGisMarkerType, GisMarker } from './GisMarker';
import { COLORS } from '../../theme';
import styled from 'react-emotion';

interface IProps {
	width: string;
	height: string;
	zoom: number;
	lat: number;
	lng: number;
	objects: IObject[];
}

interface IState {
	lat: number;
	lng: number;
	markerOpenedId: number;
}

export class Gis extends React.PureComponent<IProps, IState> {
	public state: IState = {
		lat: 0,
		lng: 0,
		markerOpenedId: null
	};

	public componentDidMount() {
		this.setState({
			lat: this.props.lat,
			lng: this.props.lng
		});
	}

	public render() {
		const {width, height, zoom, objects} = this.props;

		return (
			<Container
				width={width}
				height={height}
			>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: CONFIG.GOOGLE_MAPS_KEY
					}}
					center={{
						lat: this.state.lat,
						lng: this.state.lng
					}}
					zoom={zoom}
				>
					{objects.map((object, i) => {
						return (
							<GisMarker
								opened={this.state.markerOpenedId === object.id}
								key={i}
								color={COLORS.RED}
								type={EGisMarkerType.Small}
								lat={object.address.geoPoint.lat}
								lng={object.address.geoPoint.lng}
								object={object}
								onCLick={(obj: IObject) => {
									this.setState({
										lat: obj.address.geoPoint.lat,
										lng: obj.address.geoPoint.lng,
										markerOpenedId: obj.id
									});
								}}
							/>
						);
					})}
				</GoogleMapReact>
			</Container>
		);
	}
}

interface IContainerProps {
	width: string;
	height: string;
}

const Container = styled('div')`
	border-radius: 10px;
	margin-bottom: 40px;
	overflow: hidden;
	position: relative;
	width: ${(props: IContainerProps) => props.width};
	height: ${(props: IContainerProps) => props.height};
`;
