import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import GoogleMapReact from 'google-map-react';
import { CONFIG } from '../../config';

interface IProps {
	width: string;
	height: string;
	zoom: number;
	lat: number;
	lng: number;
}

interface IState {

}

export class Gis extends React.PureComponent<IProps, IState> {
	public state: IState = {

	};

	public componentDidMount() {

	}

	public render() {
		const {width, height, zoom, lat, lng} = this.props;

		return (
			<div style={{ width, height }} className={css(styles.container)}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: CONFIG.GOOGLE_MAPS_KEY
					}}
					defaultCenter={{lat, lng}}
					defaultZoom={zoom}
				>
					{this.props.children}
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
