import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import GoogleMapReact from 'google-map-react';
import { CONFIG } from '../../config';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { EGisMarkerType, GisMarker } from './GisMarker';
import { COLORS } from '../../theme';

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
			<div
				style={{
					width,
					height
				}}
				className={css(styles.container)}
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
								lat={object.lat}
								lng={object.lng}
								object={object}
								onCLick={(obj: IObject) => {
									this.setState({
										lat: obj.lat,
										lng: obj.lng,
										markerOpenedId: obj.id
									});
								}}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		marginBottom: 40,
		overflow: 'hidden',
		position: 'relative'
	}
});
