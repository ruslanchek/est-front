import * as React from 'react';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';

interface IProps {

}

@followStore(AuthStore.store)
export class AuthForm extends React.PureComponent<IProps, {}> {
	public render() {
		console.log(AuthStore.store.state.profile);

		return (
			<div>
				{this.props.children}

				{AuthStore.store.state.profile && (
					<div>
						{AuthStore.store.state.profile.id}<br/>
						{AuthStore.store.state.profile.email}<br/>
						{AuthStore.store.state.profile.name}<br/>
						{AuthStore.store.state.profile.phone}<br/>
						{AuthStore.store.state.profile.type}<br/>
						{AuthStore.store.state.profile.emailVerified}<br/>
					</div>
				)}
			</div>
		);
	}
}
