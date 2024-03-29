import * as React from 'react';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { LogIn } from '../auth/LogIn';

interface IProps {

}

interface IState {

}

export class AuthLoginPage extends React.Component<IProps, IState> {
	public state: IState = {
		
	};

	public render() {
		return (
			<React.Fragment>
				<Layout topPadding={true} bottomPadding={true}>
					<AuthForm>
						<LogIn/>
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}
