import * as React from 'react';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Layout } from '../common/Layout';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {};

	public render() {
		return (
			<Layout topPadding={true}>
				<BreadCrumbs/>
				<List objects={ObjectsStore.store.state.objects}/>
			</Layout>
		);
	}
}
