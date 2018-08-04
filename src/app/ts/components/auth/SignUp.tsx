import * as React from 'react';

import { css, StyleSheet } from 'aphrodite/no-important';
import { EFormValidateOn, Form, IFormModelOutput } from '../forms/Form';
import { ValidatorIsEmail } from '../forms/Validators/ValidatorIsEmail';
import { Input } from '../forms/Input';
import { managers } from '../../managers';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { Button } from '../ui/Button';
import { ModalHeaderBig } from '../modals/ModalHeaderBig';
import { FormButtonSocial } from '../forms/ui/FormButtonSocial';
import { FormButtonsBlock } from '../forms/ui/FormButtonsBlock';
import { FormDivider } from '../forms/ui/FormDivider';
import { FormLinks } from '../forms/ui/FormLinks';
import { FormRow } from '../forms/ui/FormRow';
import { FormRows } from '../forms/ui/FormRows';
import { ValidatorIsRequired } from '../forms/Validators/ValidatorIsRequired';

interface IProps {

}

interface IState {
	loading: boolean;
}

export class SignUp extends React.PureComponent<IProps, IState> {
	public state: IState = {
		loading: false,
	};

	public render() {
		return (
			<React.Fragment>
				<ModalHeaderBig title="Sign up"/>

				<Form onSubmit={this.handleForm} validateOn={EFormValidateOn.SUBMIT}>
					<FormRows>
						<FormRow>
							<Input validators={[new ValidatorIsEmail()]} name="email" autoFocus={false}/>
						</FormRow>

						<FormRow>
							<Input validators={[new ValidatorIsRequired()]} name="password" autoFocus={false} type="password"/>
						</FormRow>
					</FormRows>

					<FormButtonsBlock>
						<Button loading={this.state.loading}>
							Sign up
						</Button>
					</FormButtonsBlock>

					<FormDivider text="or"/>

					<FormButtonsBlock>
						<FormButtonSocial loading={false}/>
					</FormButtonsBlock>

					<FormLinks>
						<NavLink
							className={css(COMMON_STYLES.LINK, COMMON_STYLES.SMALL_TEXT, styles.link)}
							to={PATHS.AUTH_LOG_IN}
						>
							Log in
						</NavLink>
					</FormLinks>
				</Form>
			</React.Fragment>
		);
	}

	private handleForm = async (output: IFormModelOutput) => {
		if (output.isValid) {
			this.setState({
				loading: true,
			});

			const result = await managers.auth.signUp(output.values.email, output.values.password);

			this.setState({
				loading: false,
			}, () => {
				if(!result.error) {
					managers.route.go(PATHS.PERSONAL);
				}
			});
		}
	};
}

const styles = StyleSheet.create({
	link: {
		margin: `0 ${THEME.SECTION_PADDING_H / 2}px`,
	},

	facebookButton: {
		color: '#3B5998',
	},
});

