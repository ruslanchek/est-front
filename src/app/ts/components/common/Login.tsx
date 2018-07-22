import * as React from 'react';
import { StyleSheet } from 'aphrodite/no-important';
import { Button, EButtonTheme } from '../ui/Button';
import { EFormValidateOn, Form, IFormModelOutput } from '../forms/Form';
import { ValidatorIsEmail } from '../forms/Validators/ValidatorIsEmail';
import { Input } from '../forms/Input';
import { managers } from '../../managers';

interface IProps {

}

export class Login extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div>
				<Form onSubmit={this.handleForm} validateOn={EFormValidateOn.SUBMIT}>
					<Input validators={[new ValidatorIsEmail()]} name="email" autoFocus={false}/>
					<Input name="password" autoFocus={false} type="password"/>

					<Button type="submit" themes={[
						EButtonTheme.Agree,
						EButtonTheme.Full,
					]}>
						Login
					</Button>
				</Form>
			</div>
		);
	}

	private handleForm = async (output: IFormModelOutput) => {
		const result = await managers.auth.login(output.values.email, output.values.password);

		console.log(result);
	};
}

const styles = StyleSheet.create({

});
