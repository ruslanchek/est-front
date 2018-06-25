import * as React from 'react';

import { StyleSheet } from 'aphrodite/no-important';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Layout } from '../common/Layout';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { THEME } from '../../theme';
import { Rheostat } from '../ui/Rheostat';
import { Money } from '../ui/Money';

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
