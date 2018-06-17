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
export class ObjectPage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<BreadCrumbs/>

				zxz
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
