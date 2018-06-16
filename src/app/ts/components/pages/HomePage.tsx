import * as React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';

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
			<List objects={ObjectsStore.store.state.objects}/>
		);
	}
}

const styles = StyleSheet.create({

});
