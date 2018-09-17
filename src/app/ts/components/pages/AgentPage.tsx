import * as React from 'react';
import { followStore } from 'react-stores';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';

interface IProps {

}

interface IState {

}

@followStore(AdvertsStore.store)
export class AgentPage extends React.Component<IProps, IState> {
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
