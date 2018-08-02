import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { LogIn } from '../auth/Login';
import { SignUp } from '../auth/SignUp';

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
					<AuthForm>
						<SignUp/>
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
