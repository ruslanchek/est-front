import * as React from 'react';

import { Layout } from '../common/Layout';
import { StyleSheet, css } from 'aphrodite/no-important';
import { StoreEvent } from 'react-stores';
import { CONFIG } from '../../config';
import { THEME } from '../../theme';
import { Surface } from '../ui/Surface';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;

interface IProps {

}

interface IState {
	objects: IObject[];
	favorites: string[];
}

export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {
		objects: [],
		favorites: []
	};

	private objectsStoreEvent: StoreEvent<ObjectsStore.IState> = null;

	public componentDidMount() {
		this.objectsStoreEvent = ObjectsStore.store.on(
			'all',
			(storeState: ObjectsStore.IState) => {
				const objects: IObject[] = storeState.objects.slice(0, CONFIG.TOP_COUNT);

				this.setState({
					objects
				});
			}
		);
	}

	public componentWillUnmount() {
		this.objectsStoreEvent.remove();
	}

	public render() {
		return (
			<Layout>
				<Surface styles={styles.container}>

				</Surface>
			</Layout>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: THEME.SECTION_PADDING,
		cursor: 'pointer',
		overflow: 'hidden',
		position: 'relative',
	},
});
