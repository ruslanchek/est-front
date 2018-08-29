import * as React from 'react';
import { Button, EButtonTheme } from '../ui/Button';
import { css } from 'emotion';

interface IProps {
	isEnabled: boolean;
	text: string;
	onClick?: () => void;
}

export class ModalReset extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Button
				themes={[EButtonTheme.Reject]}
				onClick={() => {
					if(this.props.onClick) {
						this.props.onClick();
					}
				}}
				disabled={!this.props.isEnabled}
				className={button}
				type="button"
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
