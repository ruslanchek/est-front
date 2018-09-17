import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { CONFIG } from '../../config';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { EGisMarkerType, GisMarker } from './GisMarker';
import { COLORS } from '../../theme';
import styled from 'react-emotion';
import IAdvert = AdvertsStore.IAdvert;

interface IProps {
	width: string;
	height: string;
	zoom: number;
	lat: number;
	lng: number;
	adverts: IAdvert[];
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
		const {width, height, zoom, adverts} = this.props;

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
					{adverts.map((advert, i) => {
						return (
							<GisMarker
								opened={this.state.markerOpenedId === advert.id}
								key={i}
								color={COLORS.RED}
								type={EGisMarkerType.Small}
								lat={advert.address.geoPoint.lat}
								lng={advert.address.geoPoint.lng}
								advert={advert}
								onCLick={(obj: IAdvert) => {
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
