import * as React from 'react';
import * as Ionicon from 'react-ionicons';

import { Button, EButtonTheme } from '../../ui/Button';
import { COLORS } from '../../../theme';
import { css, StyleSheet } from 'aphrodite';

interface IProps {
	loading: boolean;
}

export class FormButtonSocial extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Button
				type="button"
				styles={styles.facebookButton}
				loading={this.props.loading}
				themes={[EButtonTheme.Agree, EButtonTheme.Facebook]}
			>
				<Ionicon
					className={css(styles.icon)}
					icon="logo-facebook"
					fontSize="22px"
					color={COLORS.FACEBOOK.toString()}
				/>

				Continue with Facebook
			</Button>
		);
	}
}

const styles = StyleSheet.create({
	facebookButton: {
		color: COLORS.FACEBOOK.toString(),
	},

	icon: {
		marginRight: 5,
	},
});
