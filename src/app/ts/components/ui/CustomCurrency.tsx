import { EOLocale } from 'eo-locale';
import * as React from 'react';

interface IProps {
	value: number;
	prefix?: React.ReactNode;
	postfix?: React.ReactNode;
}

export class CustomCurrency extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<>
				{this.props.prefix}
				<EOLocale.Number value={this.props.value} />
				{this.props.postfix}
			</>
		);
	}
}
