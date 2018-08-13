import MediaQuery from 'react-responsive';
import * as React from 'react';
import { mq } from '../../lib/CSSUtils';

export class IsTablet extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<MediaQuery query={mq.tablet}>
				{this.props.children}
			</MediaQuery>
		);
	}
}
