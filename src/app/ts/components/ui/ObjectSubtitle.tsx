import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';
import EObjectType = ObjectsStore.EObjectType;
import * as dayjs from 'dayjs';
import { CONFIG } from '../../config';

interface IProps {
	objectData: IObject;
}

export class ObjectSubtitle extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<h2 className={css(styles.title)}>
				{this.getTypeName()}{this.getAge()}
			</h2>
		);
	}

	private getAge() {
		const { constructionDate } = this.props.objectData;
		const years: number = dayjs(new Date()).diff(dayjs(constructionDate), 'year', false);

		if (years >= 1) {
			return (
				<span>
					{' '}&bull;&nbsp;{years.toLocaleString(CONFIG.DEFAULT_LOCALE)}Y&nbsp;OLD
				</span>
			);
		} else {
			return (
				<span>
					{' '}&bull;&nbsp;NEW
				</span>
			);
		}
	}

	private getTypeName(): string {
		const { type } = this.props.objectData;

		switch (type) {
			case EObjectType.Flat : {
				return 'Flat';
			}

			case EObjectType.DetachedHouse : {
				return 'Detached house';
			}
		}
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.BLACK_LIGHT.toString(),
		textTransform: 'uppercase',
		margin: 0,
	},
});
