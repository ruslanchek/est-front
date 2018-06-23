import MediaQuery from 'react-responsive';
import * as React from 'react';

export class IsPhoneOrTablet extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query="(max-width: 1024px)">
				{this.props.children}
			</MediaQuery>
		);
	}
}
