import * as React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';
import { GisMarker } from '../ui/GisMarker';

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
					zoom={1}
					lat={40.730610}
					lng={-73.935242}
				>
					{ObjectsStore.store.state.objects.map((object, i) => {
						return (
							<GisMarker
								id={object.id}
								key={i}
								lat={object.lat}
								lng={object.lng}
								title={object.title}
							/>
						);
					})}
				</Gis>
				<List objects={ObjectsStore.store.state.objects}/>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
