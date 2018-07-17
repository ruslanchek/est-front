import * as React from 'react';

interface IProps {

}

export class AuthForm extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
