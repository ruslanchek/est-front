import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;

interface IProps {
	objectData: IObject;
}

export class Address extends React.PureComponent<IProps, {}> {
	public render() {
		const { streetAddress, city } = this.props.objectData;

		return (
			<span>
				{streetAddress}, {city}
			</span>
		);
	}
}

const styles = StyleSheet.create({});
