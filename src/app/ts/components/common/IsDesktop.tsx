import MediaQuery from 'react-responsive';
import * as React from 'react';

export class IsDesktop extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query="(min-width: 1024px)">
				{this.props.children}
			</MediaQuery>
		);
	}
}
