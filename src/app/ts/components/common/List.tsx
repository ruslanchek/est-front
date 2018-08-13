import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ObjectInList } from '../blocks/ObjectInList';
import { CSSUtils, EMQ } from '../../lib/CSSUtils';
import { SpecialBrick } from '../ui/SpecialBrick';
import Color = require('color');
import { CONFIG } from '../../config';

interface IProps {
	objects: IObject[];
}

export class List extends React.PureComponent<IProps, {}> {
	public render() {

		return (
			<div className={css(styles.container, styles.containerPhone)}>
				<div className={css(styles.list)}>
					{ObjectsStore.store.state.presets.map((preset, i) => {
						return (
							<SpecialBrick
								key={i}
								color1={Color(preset.color1)}
								color2={Color(preset.color2)}
								title={preset.title}
								subtitle={`From ${preset.price.toLocaleString(CONFIG.DEFAULT_LOCALE)} EUR`}
								containerStyles={[
									styles.item,
									styles.itemPhone,
									styles.itemTablet,
									styles.itemDesktop,
									styles.itemWide
								]}
							/>
						);
					})}

					{ObjectsStore.store.state.objects.map((object, i) => {
						return (
							<ObjectInList
								key={i}
								objectData={object}
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

	containerPhone: CSSUtils.mediaSize(EMQ.Phone, {

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

	itemPhone: CSSUtils.mediaSize(EMQ.Phone, {
		width: '100%',
		marginBottom: 20
	}),

	itemTablet: CSSUtils.mediaSize(EMQ.Tablet, {
		width: '48%'
	}),

	itemDesktop: CSSUtils.mediaSize(EMQ.Desktop, {
		width: '23%'
	}),

	itemWide: CSSUtils.mediaSize(EMQ.Wide, {
		width: '23%'
	}),
});
