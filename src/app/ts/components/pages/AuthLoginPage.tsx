import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { Input } from '../ui/Input';
import { managers } from '../../managers';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class AuthLoginPage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<Layout verticalPadding={true}>
					<BreadCrumbs/>

					<AuthForm>
						<form onSubmit={this.handleSubmit}>
							<Input autoFocus={true} value="rshashkov+24@icloud.com"/>
							<Input autoFocus={true} type="password" value="rshashkov+24@icloud.com"/>

							<button type="submit">
								Login
							</button>
						</form>
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}

	private handleSubmit = async (e) => {
		e.preventDefault();

		const result = await managers.auth.login('rshashkov+24@icloud.com', '222222');
		
		console.log(result);
	};
}

const styles = StyleSheet.create({

});
