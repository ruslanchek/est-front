import * as React from 'react';
import * as Ionicon from 'react-ionicons';

import { Button, EButtonTheme } from '../../ui/Button';
import { COLORS } from '../../../theme';
import { css } from 'emotion';

interface IProps {
	loading: boolean;
}

export class FormButtonSocial extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Button
				type="button"
				loading={this.props.loading}
				themes={[EButtonTheme.Facebook, EButtonTheme.Full]}
			>
				<Ionicon
					className={icon}
					icon="logo-facebook"
					fontSize="22px"
					color={COLORS.FACEBOOK.toString()}
				/>

				Continue with Facebook
			</Button>
		);
	}
}

const icon = css`
  margin-right: 5px;
`;
