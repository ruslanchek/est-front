import MediaQuery from 'react-responsive';
import * as React from 'react';
import { mq } from '../../lib/CSSUtils';

export class IsPhoneOrTablet extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query={mq.phoneOrTablet}>
				{this.props.children}
			</MediaQuery>
		);
	}
}
