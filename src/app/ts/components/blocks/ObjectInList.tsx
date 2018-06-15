import { css, StyleSheet, StyleDeclaration } from 'aphrodite';
import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { Favorite } from '../ui/Favorite';
import { CSSUtils } from '../../lib/CSSUtils';
import { COLORS, THEME } from '../../theme';
import { Price } from '../ui/Price';
import { ObjectSubtitle } from '../ui/ObjectSubtitle';
import { Address } from '../ui/Address';

interface IProps {
	objectData: IObject;
	styles: StyleDeclaration;
}

export class ObjectInList extends React.Component<IProps, {}> {
	public render() {
		const {
			id,
			title,
			isFavorite,
			coverPicture,
			price,
			streetAddress
		} = this.props.objectData;

		return (
			<section className={css(styles.container, this.props.styles)}>
				<header className={css(styles.header)}>
					<div className={css(styles.favorite)}>
						<Favorite
							id={id}
							title={'xxxx'}
							isFavorite={isFavorite}
						/>
					</div>

					<div
						className={css(styles.gallery)}
						style={{backgroundImage: CSSUtils.image(coverPicture.src)}}
					/>

					<div className={css(styles.body)}>
						<ObjectSubtitle objectData={this.props.objectData}/>

						<div className={css(styles.price)}>
							<Price value={price}/>
						</div>

						<div className={css(styles.address)}>
							<Address objectData={this.props.objectData}/>
						</div>
					</div>
				</header>
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
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1
	},

	header: {
		position: 'relative',
	},

	gallery: {
		paddingTop: '75%',
		position: 'relative',
		overflow: 'hidden',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: COLORS.GRAY_DARK.toString()
	},

	favorite: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 2
	},

	body: {
		padding: `${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`
	},

	price: {
		fontSize: THEME.FONT_SIZE_H1,
		color: COLORS.BLACK.toString(),
		margin: '0.25em 0'
	},

	address: {
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL
	}
});
