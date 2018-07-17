import * as React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';
import { EGisMarkerType, GisMarker } from '../ui/GisMarker';
import { COLORS } from '../../theme';
import { AuthForm } from '../common/AuthForm';
import { Layout } from '../common/Layout';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class AuthSignUpPage extends React.Component<IProps, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<React.Fragment>
				<Layout>
					<BreadCrumbs/>

					<AuthForm>
						sdsad
					</AuthForm>
				</Layout>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({

});
