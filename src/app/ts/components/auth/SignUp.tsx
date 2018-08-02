import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { EFormValidateOn, Form, IFormModelOutput } from '../forms/Form';
import { ValidatorIsEmail } from '../forms/Validators/ValidatorIsEmail';
import { Input } from '../forms/Input';
import { managers } from '../../managers';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { ModalHeader } from '../ui/ModalHeader';
import { Button, EButtonTheme } from '../ui/Button';

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
			<div>
				<ModalHeader title="Sign up"/>

				<Form onSubmit={this.handleForm} validateOn={EFormValidateOn.SUBMIT}>
					<div className={css(styles.rows)}>
						<div className={css(styles.row)}>
							<Input validators={[new ValidatorIsEmail()]} name="email" autoFocus={false}/>
						</div>

						<div className={css(styles.row)}>
							<Input name="password" autoFocus={false} type="password"/>
						</div>
					</div>

					<div className={css(styles.buttons)}>
						<Button loading={this.state.loading}>
							Sign up
						</Button>
					</div>

					<div className={css(styles.social)}>
						<i className={css(styles.socialOr)}>or</i>
					</div>

					<div className={css(styles.buttons)}>
						<Button type="button" loading={this.state.loading} themes={[EButtonTheme.Agree]}>
							Continue with Facebook
						</Button>
					</div>

					<div className={css(styles.links)}>
						<NavLink className={css(COMMON_STYLES.LINK, COMMON_STYLES.SMALL_TEXT, styles.link)} to={PATHS.AUTH_LOG_IN}>
							Log in
						</NavLink>
					</div>
				</Form>
			</div>
		);
	}

	private handleForm = async (output: IFormModelOutput) => {
		if (output.isValid) {
			try {
				const result = await managers.auth.signUp(output.values.email, output.values.password);
				console.log(result);
				managers.route.go(PATHS.PERSONAL);
			} catch (e) {
				console.log(e);
			}
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

	social: {
		position: 'relative',
		textAlign: 'center',
		height: THEME.FONT_SIZE_SMALL,
		lineHeight: `${THEME.FONT_SIZE_SMALL}px`,
		marginBottom: THEME.SECTION_PADDING_V,

		':after': {
			position: 'relative',
			height: 1,
			top: '50%',
			transform: 'translate(0, -50%)',
			backgroundColor: COLORS.GRAY_DARK.toString(),
			display: 'block',
			content: '""',
			zIndex: 1,
		},
	},

	socialOr: {
		color: COLORS.BLACK_EXTRA_LIGHT.toString(),
		position: 'absolute',
		fontSize: THEME.FONT_SIZE_SMALL,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: COLORS.WHITE.toString(),
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		zIndex: 2,
	},
});

