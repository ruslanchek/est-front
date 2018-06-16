import * as React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<BreadCrumbs/>
				<Gis
					width="100%"
					height="400px"
					zoom={1}
					lat={40.730610}
					lng={-73.935242}
				>
					{ObjectsStore.store.state.objects.map((object, i) => {
						return (
							<AnyReactComponent
								key={i}
								lat={object.lat}
								lng={object.lng}
								text={object.id}
							/>
						);
					})}
				</Gis>
				<List objects={ObjectsStore.store.state.objects}/>
			</React.Fragment>
		);
	}
}

const AnyReactComponent = ({ text, lat, lng }) => <div className={css(styles.marker)}>{text}</div>;

const styles = StyleSheet.create({
	marker: {
		width: 30,
		height: 30,
		background: 'white',
		border: '2px solid red',
		borderRadius: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		transform: 'translate(-50%, -50%)',
		opacity: .75,
		transition: 'opacity .2s',
		cursor: 'pointer',

		':hover': {
			opacity: 1
		}
	}
});
