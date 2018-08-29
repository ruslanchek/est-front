import * as React from 'react';
import { Layout } from '../common/Layout';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Button } from '../ui/Button';
import { managers } from '../../managers';
import { CONFIG } from '../../config';

interface IProps {

}

interface IState {

}

@followStore(AuthStore.store)
export class PersonalPage extends React.Component<IProps, IState> {
	public state: IState = {
		
	};

	public render() {
		return (
			<React.Fragment>
				<Layout topPadding={true} bottomPadding={true}>
					<BreadCrumbs/>

					{JSON.stringify(AuthStore.store.state.profile)}

					<p>
						<img src={`${CONFIG.CONTENT_PATH}/${AuthStore.store.state.profile.avatar}.webp`}/>
					</p>

					<h2>
						{AuthStore.store.state.profile.name}
					</h2>

					<h3>
						{AuthStore.store.state.profile.email}
					</h3>

					<ul>
						<li>
							ID: {AuthStore.store.state.profile.id}
						</li>
					</ul>

					<p>
						<Button onClick={() => {
							managers.auth.logOut();
						}}>
							Log out
						</Button>
					</p>
				</Layout>
			</React.Fragment>
		);
	}
}
