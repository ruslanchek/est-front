import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { Input } from '../forms/Input';
import { Form } from '../forms/Form';
import { type } from 'os';
import { ValidatorEmail } from '../forms/Validators/ValidatorEmail';

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
						<Form>
							<Input validators={[new ValidatorEmail()]} name="email" autoFocus={false} value="rshashkov+24@icloud.com"/>
							<Input name="password" autoFocus={false} value="sadasdasd" type="password"/>

							<button type="submit">
								Login
							</button>
						</Form>
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
