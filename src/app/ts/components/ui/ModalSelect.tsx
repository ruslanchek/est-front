import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	items: IModalSelectItem[];
	onChange: (items: IModalSelectItem) => void;
}

export interface IModalSelectItem {
	id: number;
	title: string;
	type: EModalSelectItemType;
	selected: boolean;

	onClick?: (id: number) => void;
}

export enum EModalSelectItemType {
	Plain,
	CheckBox
}

export class ModalSelect extends React.PureComponent<IProps, {}> {
	public render() {
		const { items } = this.props;

		return (
			<div>
				{items.map((item, i) => {
					return (
						<a
							key={i}
							href="#"
							onClick={this.onClick.bind(this, item)}
							className={css(COMMON_STYLES.LINK, styles.selectable)}
						>
							{item.title}
						</a>
					);
				})}
			</div>
		);
	}

	private onClick = (item: IModalSelectItem, e) => {
		e.preventDefault();
	};
}

const styles = StyleSheet.create({
	selectable: {
		display: 'block',
		fontWeight: 600,
		padding: `${THEME.SECTION_PADDING_V / 1.25}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.toString(),
		},
	},
});
