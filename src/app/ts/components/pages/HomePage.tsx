import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';

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
					objects={ObjectsStore.store.state.objects}
				/>
				<List objects={ObjectsStore.store.state.objects}/>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
