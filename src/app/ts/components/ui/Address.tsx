import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
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

const styles = StyleSheet.create({});
