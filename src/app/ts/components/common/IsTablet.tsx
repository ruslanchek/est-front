import MediaQuery from 'react-responsive';
import * as React from 'react';

export class IsTablet extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query="(min-width: 720px) and (max-width: 1024px)">
				{this.props.children}
			</MediaQuery>
		);
	}
}
