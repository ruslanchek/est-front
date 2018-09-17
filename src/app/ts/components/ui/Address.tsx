import * as React from 'react';
import { AdvertsStore } from '../../stores/AdvertsStore';
import IAdvert = AdvertsStore.IAdvert;

interface IProps {
	advertData: IAdvert;
}

export class Address extends React.PureComponent<IProps, {}> {
	public render() {
		const { address } = this.props.advertData;

		return (
			<span>
				{address.streetAddress}, {address.city.title}
			</span>
		);
	}
}
