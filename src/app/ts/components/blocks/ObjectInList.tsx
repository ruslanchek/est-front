import { css, StyleSheet, StyleDeclaration } from 'aphrodite';
import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { Favorite } from '../ui/Favorite';
import { COLORS, THEME } from '../../theme';
import { Price } from '../ui/Price';
import { ObjectSubtitle } from '../ui/ObjectSubtitle';
import { Address } from '../ui/Address';
import { GallerySmall } from '../ui/GallerySmall';
import { Params } from '../ui/Params';
import { Avatar } from '../ui/Avatar';

interface IProps {
	objectData: IObject;
	containerStyles: StyleDeclaration[];
}

export class ObjectInList extends React.Component<IProps, {}> {
	public render() {
		const {
			objectData,
			containerStyles
		} = this.props;

		const {
			id,
			isFavorite,
			price,
		} = objectData;

		return (
			<section className={css(styles.container, containerStyles)}>
				<header className={css(styles.header)}>
					<div className={css(styles.favorite)}>
						<Favorite
							id={id}
							title={'xxxx'}
							isFavorite={isFavorite}
						/>
					</div>

					<GallerySmall objectData={objectData}/>
				</header>

				<div className={css(styles.body)}>
					<ObjectSubtitle objectData={objectData}/>

					<div className={css(styles.price)}>
						<Price value={price}/>
					</div>

					<div className={css(styles.address)}>
						<Address objectData={objectData}/>
					</div>
				</div>

				<div className={css(styles.params)}>
					<Params objectData={objectData}/>
				</div>

				<footer className={css(styles.footer)}>
					<Avatar objectData={objectData}/>
				</footer>
			</section>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1,
		display: 'flex',
		flexDirection: 'column',
	},

	header: {
		position: 'relative',
	},

	favorite: {
		position: 'absolute',
		top: THEME.SECTION_PADDING_V,
		right: THEME.SECTION_PADDING_H,
		zIndex: 2,
	},

	body: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		flexGrow: 1,
	},

	price: {
		fontSize: THEME.FONT_SIZE_H1,
		margin: '0.25em 0',
	},

	address: {
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
	},

	params: {
		padding: `${THEME.SECTION_PADDING_V / 2}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.darken(.025).toString()}`,
	},

	footer: {
		backgroundColor: COLORS.GRAY_DARK.toString(),
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.darken(.025).toString()}`,
	},
});
