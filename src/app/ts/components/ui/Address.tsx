import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;

interface IProps {
	objectData: IObject;
}

export class Address extends React.PureComponent<IProps, {}> {
	public render() {
		const { address } = this.props.objectData;

		return (
			<span>
				{address.streetAddress}, {address.city.title}
			</span>
		);
	}
}
