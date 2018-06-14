import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;

interface IProps extends IObject {

}

export class ObjectInList extends React.Component<IProps, {}> {
	public render() {
		return (
			<section className={css(styles.container)}>

			</section>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	}
});
