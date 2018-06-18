import * as React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { followStore, StoreEvent } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { List } from '../common/List';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Gis } from '../ui/Gis';
import { EGisMarkerType, GisMarker } from '../ui/GisMarker';
import { COLORS, THEME } from '../../theme';
import { Price } from '../ui/Price';
import IObject = ObjectsStore.IObject;
import { managers } from '../../managers';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { Layout } from '../common/Layout';

interface IProps {

}

interface IState {
	object: IObject;
}

@followStore(ObjectsStore.store)
export class ObjectPage extends React.Component<IProps, IState> {
	public state: IState = {
		object: managers.faker.generateObject(1)
	};

	public render() {
		return (
			<React.Fragment>
				<Layout outerStyles={[styles.layout, styles.layoutPhone]}>
					<BreadCrumbs/>

					<Price value={this.state.object.price}/>
				</Layout>

				<div className={css(styles.gallery)}>
					{this.state.object.pictures.map((picture, i) => {
						return (
							<div className={css(styles.picture)}>
								<img className={css(styles.pictureImage)} src={picture.src}/>
							</div>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		paddingTop: THEME.PAGE_SIDE_PADDING_DESKTOP
	},

	layoutPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingTop: THEME.PAGE_SIDE_PADDING_PHONE
	}),

	gallery: {
		display: 'flex'
	},

	picture: {
		width: 300
	},

	pictureImage: {
		width: 300,
		display: 'block'
	}
});
