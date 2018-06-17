import * as React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';
import { EGisMarkerType, GisMarker } from '../ui/GisMarker';
import { COLORS } from '../../theme';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<BreadCrumbs/>
				<Gis
					width="100%"
					height="400px"
					zoom={10}
					lat={34.679291}
					lng={33.034049}
				>
					<GisMarker
						color={COLORS.GREEN}
						type={EGisMarkerType.Small}
						id={1}
						lat={34.679291}
						lng={33.034049}
						title={'YS'}
					/>

					<GisMarker
						color={COLORS.RED}
						type={EGisMarkerType.Big}
						id={1}
						lat={34.879291}
						lng={33.034049}
						title={'YS'}
					/>

					{ObjectsStore.store.state.objects.map((object, i) => {
						return null
					})}
				</Gis>
				<List objects={ObjectsStore.store.state.objects}/>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
