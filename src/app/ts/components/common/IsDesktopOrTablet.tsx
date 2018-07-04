import MediaQuery from 'react-responsive';
import * as React from 'react';

export class IsDesktopOrTablet extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query="(min-width: 720px)">
				{this.props.children}
			</MediaQuery>
		);
	}
}
