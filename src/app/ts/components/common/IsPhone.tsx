import MediaQuery from 'react-responsive';
import * as React from 'react';

export class IsPhone extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query="(max-width: 720px)">
				{this.props.children}
			</MediaQuery>
		);
	}
}
