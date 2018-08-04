import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { EFormValidateOn, Form, IFormModelOutput } from '../forms/Form';
import { ValidatorIsEmail } from '../forms/Validators/ValidatorIsEmail';
import { Input } from '../forms/Input';
import { managers } from '../../managers';
import { COMMON_STYLES, THEME } from '../../theme';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { Button } from '../ui/Button';
import { ModalHeaderBig } from '../modals/ModalHeaderBig';
import { FormRows } from '../forms/ui/FormRows';
import { FormRow } from '../forms/ui/FormRow';
import { ValidatorIsRequired } from '../forms/Validators/ValidatorIsRequired';
import { FormButtonsBlock } from '../forms/ui/FormButtonsBlock';
import { FormLinks } from '../forms/ui/FormLinks';
import { FormDivider } from '../forms/ui/FormDivider';
import { FormButtonSocial } from '../forms/ui/FormButtonSocial';

interface IProps {

}

interface IState {
	loading: boolean;
}

export class LogIn extends React.PureComponent<IProps, IState> {
	public state: IState = {
		loading: false
	};

	public render() {
		return (
			<React.Fragment>
				<ModalHeaderBig title="Log in"/>

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
							Log in
						</Button>
					</FormButtonsBlock>

					<FormDivider text="or"/>

					<FormButtonsBlock>
						<FormButtonSocial loading={false}/>
					</FormButtonsBlock>

					<FormLinks>
						<NavLink className={css(COMMON_STYLES.LINK, COMMON_STYLES.SMALL_TEXT, styles.link)} to={PATHS.AUTH_SIGN_UP}>
							Sign up
						</NavLink>

						<NavLink className={css(COMMON_STYLES.LINK, COMMON_STYLES.SMALL_TEXT, styles.link)} to={PATHS.AUTH_PASSWORD_RESET}>
							Remember password
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

			const result = await managers.auth.login(output.values.email, output.values.password);

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
	rows: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
	},

	row: {
		paddingTop: THEME.SECTION_PADDING_V,
	},

	links: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
		display: 'flex',
		justifyContent: 'center',
	},

	link: {
		margin: `0 ${THEME.SECTION_PADDING_H / 2}px`,
	},

	buttons: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
	},
});
