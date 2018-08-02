import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { LogIn } from '../auth/LogIn';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Button } from '../ui/Button';
import { managers } from '../../managers';

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

const styles = StyleSheet.create({

});
