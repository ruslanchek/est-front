import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';
import { Layout } from '../common/Layout';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { THEME } from '../../theme';
import { Filters } from '../common/Filters';

interface IProps {

}

interface IState {

}

@followStore(ObjectsStore.store)
export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {};

	public render() {
		return (
			<Layout outerStyles={[styles.layout, styles.layoutPhone]}>
				<BreadCrumbs/>
				<Filters/>
				<Gis
					width="100%"
					height="400px"
					zoom={10}
					lat={34.679291}
					lng={33.034049}
					objects={ObjectsStore.store.state.objects}
				/>
				<List objects={ObjectsStore.store.state.objects}/>
			</Layout>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		paddingTop: THEME.PAGE_SIDE_PADDING_DESKTOP,
	},

	layoutPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingTop: THEME.PAGE_SIDE_PADDING_PHONE,
	}),
});
