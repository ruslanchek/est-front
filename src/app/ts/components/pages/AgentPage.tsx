import * as React from 'react';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
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
