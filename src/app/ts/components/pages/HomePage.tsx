import * as React from 'react';

import { Layout } from '../common/Layout';
import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ObjectInList } from '../blocks/ObjectInList';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';

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
				<div className={css(styles.container, styles.containerPhone)}>
					<div className={css(styles.list)}>
						{ObjectsStore.store.state.objects.map((object, i) => {
							return (
								<ObjectInList
									key={i}
									objectData={object}
									containerStyles={[styles.item, styles.itemPhone, styles.itemTablet, styles.itemDesktop, styles.itemWide]}
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

	containerPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		padding: 20
	}),

	list: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},

	item: {
		marginBottom: 40
	},

	itemPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		width: '100%',
		marginBottom: 20
	}),

	itemTablet: CSSUtils.mediaSize(ECSSMediaKind.Tablet, {
		width: '48%'
	}),

	itemDesktop: CSSUtils.mediaSize(ECSSMediaKind.Desktop, {
		width: '23%'
	}),

	itemWide: CSSUtils.mediaSize(ECSSMediaKind.Wide, {
		width: '23%'
	}),
});
