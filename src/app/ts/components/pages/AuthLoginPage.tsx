import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';
import { Input } from '../forms/Input';
import { Form, EFormValidateOn } from '../forms/Form';
import { ValidatorIsEmail } from '../forms/Validators/ValidatorIsEmail';
import { AuthStore } from '../../stores/AuthStore';
import { ValidatorMinLength } from '../forms/Validators/ValidatorMinLength';
import { ValidatorMaxLength } from '../forms/Validators/ValidatorMaxLength';
import { ValidatorRegExp } from '../forms/Validators/ValidatorRegExp';
import { ValidatorIsNotNumeric } from '../forms/Validators/ValidatorIsNotNumeric';
import { ValidatorIsNumeric } from '../forms/Validators/ValidatorIsNumeric';
import { ValidatorIsRequired } from '../forms/Validators/ValidatorIsRequired';
import { ValidatorIsEqualModel } from '../forms/Validators/ValidatorIsEqualModel';
import { Button, EButtonTheme } from '../ui/Button';

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
				<Layout verticalPadding={true}>
					<BreadCrumbs/>

					<AuthForm>
						<Form onSubmit={(result) => {console.log(result)}} validateOn={EFormValidateOn.SUBMIT}>
							<Input validators={[new ValidatorIsEmail(), new ValidatorIsEmail()]} name="email" autoFocus={false} value="rshashkov+24@icloud.com"/>
							<Input name="password" autoFocus={false} value="sadasdasd" type="text"/>

							<Button type="submit" themes={[EButtonTheme.Small, EButtonTheme.Common]}>
								Login
							</Button>
						</Form>
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
