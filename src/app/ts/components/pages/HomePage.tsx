import * as React from 'react';

import { Layout } from '../common/Layout';
import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { THEME } from '../../theme';
import { Surface } from '../ui/Surface';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ObjectInList } from '../blocks/ObjectInList';

interface IProps {

}

interface IState {
	objects: IObject[];
	favorites: string[];
}

@followStore(ObjectsStore.store)
export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {
		objects: [],
		favorites: []
	};

	public componentWillUnmount() {

	}

	public render() {
		return (
			<Layout>
				<div className={css(styles.container)}>
					<div className={css(styles.list)}>
						{ObjectsStore.store.state.objects.map((object, i) => {
							return (
								<ObjectInList
									key={i}
									objectData={object}
									containerStyles={styles.item}
								/>
							);
						})}
					</div>
				</div>
			</Layout>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		padding: 40
	},

	list: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},

	item: {
		width: '22%',
		marginBottom: 40
	}
});
