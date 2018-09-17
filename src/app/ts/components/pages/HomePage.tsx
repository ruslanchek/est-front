import * as React from 'react';
import { followStore } from 'react-stores';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Layout } from '../common/Layout';

interface IProps {

}

interface IState {

}

@followStore(AdvertsStore.store)
export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {};

	public render() {
		return (
			<Layout topPadding={true}>
				<BreadCrumbs/>
				<List adverts={AdvertsStore.store.state.adverts}/>
			</Layout>
		);
	}
}
