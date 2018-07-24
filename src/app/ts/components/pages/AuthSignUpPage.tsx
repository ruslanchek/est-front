import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { Login } from '../common/Login';
import { SignUp } from '../common/SignUp';

interface IProps {

}

interface IState {

}

export class AuthSignUpPage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<Layout topPadding={true} bottomPadding={true}>
					<AuthForm title="Sign up">
						<SignUp/>
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
