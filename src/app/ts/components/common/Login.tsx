import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { EFormValidateOn, Form, IFormModelOutput } from '../forms/Form';
import { ValidatorIsEmail } from '../forms/Validators/ValidatorIsEmail';
import { Input } from '../forms/Input';
import { managers } from '../../managers';
import { ModalSubmit } from '../ui/ModalSubmit';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../config';

interface IProps {

}

export class Login extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div>
				<Form onSubmit={this.handleForm} validateOn={EFormValidateOn.SUBMIT}>
					<div className={css(styles.rows)}>
						<div className={css(styles.row)}>
							<Input validators={[new ValidatorIsEmail()]} name="email" autoFocus={false}/>
						</div>

						<div className={css(styles.row)}>
							<Input name="password" autoFocus={false} type="password"/>
						</div>
					</div>

					<div className={css(styles.links)}>
						<NavLink className={css(COMMON_STYLES.LINK, COMMON_STYLES.SMALL_TEXT, styles.link)} to={PATHS.AUTH_SIGN_UP}>
							Sign up
						</NavLink>

						<NavLink className={css(COMMON_STYLES.LINK, COMMON_STYLES.SMALL_TEXT, styles.link)} to={PATHS.AUTH_PASSWORD_RESET}>
							Remember password
						</NavLink>
					</div>

					<ModalSubmit isEnabled={true} text="Login"/>
				</Form>
			</div>
		);
	}

	private handleForm = async (output: IFormModelOutput) => {
		try {
			const result = await managers.auth.login(output.values.email, output.values.password);
			console.log(result);
			managers.route.go(PATHS.PERSONAL);
		} catch (e) {
			console.log(e);
		}
	};
}

const styles = StyleSheet.create({
	rows: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
		backgroundColor: COLORS.GRAY_DARK.toString(),
	},

	row: {
		paddingTop: THEME.SECTION_PADDING_V,
	},

	links: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		display: 'flex',
		justifyContent: 'center',
	},

	link: {
		margin: `0 ${THEME.SECTION_PADDING_H / 2}px`,
	}
});
