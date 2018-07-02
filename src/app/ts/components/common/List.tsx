import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ObjectInList } from '../blocks/ObjectInList';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { COLORS } from '../../theme';
import { SpecialBrick } from '../ui/SpecialBrick';
import Color = require('color');

interface IProps {
	objects: IObject[];
}

export class List extends React.PureComponent<IProps, {}> {
	public render() {

		return (
			<div className={css(styles.container, styles.containerPhone)}>
				<div className={css(styles.list)}>
					<SpecialBrick key={-1} color1={Color('#6F54F8')} color2={Color('#865CF0')} title="Luxury houses" subtitle="From 200 EUR" containerStyles={[styles.item, styles.itemPhone, styles.itemTablet, styles.itemDesktop, styles.itemWide]}/>
					<SpecialBrick key={-2} color1={Color('#6F54F8')} color2={Color('#865CF0')} title="Summer deals" subtitle="From 500 EUR" containerStyles={[styles.item, styles.itemPhone, styles.itemTablet, styles.itemDesktop, styles.itemWide]}/>
					<SpecialBrick key={-3} color1={Color('#6F54F8')} color2={Color('#865CF0')} title="Small flats" subtitle="From 1,000 EUR" containerStyles={[styles.item, styles.itemPhone, styles.itemTablet, styles.itemDesktop, styles.itemWide]}/>
					<SpecialBrick key={-4} color1={Color('#6F54F8')} color2={Color('#865CF0')} title="Studios for life" subtitle="From 2,000 EUR" containerStyles={[styles.item, styles.itemPhone, styles.itemTablet, styles.itemDesktop, styles.itemWide]}/>

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
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center'
	},

	containerPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {

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
