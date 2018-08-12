import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { ObjectInList } from '../blocks/ObjectInList';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { SpecialBrick } from '../ui/SpecialBrick';
import Color = require('color');
import { CONFIG } from '../../config';
import { StateStore } from '../../stores/StateStore';
import { THEME, COLORS } from '../../theme';

interface IProps {
	items: IObject[];
}

export class ListTable extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.header)}>
					<div className={css(styles.col)} style={{ width: '5%' }}>
						ID
					</div>

					<div className={css(styles.col)} style={{ width: '40%' }}>
						Title
					</div>

					<div className={css(styles.col)} style={{ width: '15%' }}>
						Price
					</div>

					<div className={css(styles.col)} style={{ width: '20%' }}>
						Type
					</div>

					<div className={css(styles.col)} style={{ width: '20%' }}>
						Contract type
					</div>
				</div>

				{this.props.items.map((item: IObject, i) => {
					return (
						<div className={css(styles.row)} key={i}>
							<div className={css(styles.col)} style={{ width: '5%' }}>
								{item.id}
							</div>

							<div className={css(styles.col)} style={{ width: '40%' }}>
								{item.title}
							</div>

							<div className={css(styles.col)} style={{ width: '15%' }}>
								{item.price}
							</div>

							<div className={css(styles.col)} style={{ width: '20%' }}>
								{item.type}
							</div>

							<div className={css(styles.col)} style={{ width: '20%' }}>
								{item.contractType}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 6,
		overflow: 'hidden',
		marginTop: THEME.SECTION_PADDING_V * 2,
		backgroundColor: COLORS.WHITE.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1,
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		fontWeight: 600,
		backgroundColor: COLORS.GRAY_DARK.toString(),
	},

	row: {
		display: 'flex',
		justifyContent: 'space-between',

		':nth-child(odd)': {
			backgroundColor: COLORS.BLUE_LIGHT.toString(),
		},
	},

	col: {
		textAlign: 'left',
		padding: THEME.SECTION_PADDING_V,
	},
});
