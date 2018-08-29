import * as React from 'react';
import { Button, EButtonTheme } from '../ui/Button';
import { css } from 'emotion';

interface IProps {
	isEnabled: boolean;
	text: string;
	onClick?: () => void;
}

export class ModalSubmit extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Button
				themes={[EButtonTheme.AgreeBright]}
				onClick={() => {
					if(this.props.onClick) {
						this.props.onClick();
					}
				}}
				disabled={!this.props.isEnabled}
				className={button}
				type="submit"
			>
				{this.props.text}
			</Button>
		);
	}
}

const button = css`
  display: block;
	width: 100%;
`;
