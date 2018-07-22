import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class AuthSignUpPage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<Layout topPadding={true}>
					<BreadCrumbs/>

					<AuthForm>
						sdsad
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
