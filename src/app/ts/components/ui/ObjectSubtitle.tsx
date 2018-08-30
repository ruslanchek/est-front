import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';
import EObjectType = ObjectsStore.EObjectType;
import { CONFIG } from '../../config';
import styled from 'react-emotion';
import * as dayjs from 'dayjs';

interface IProps {
	objectData: IObject;
}

export class ObjectSubtitle extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<H2>
				{this.getTypeName()}{this.getAge()}
			</H2>
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
			case EObjectType.DetachedHouse : return 'Detached house';
			case EObjectType.TownHouse : return 'Townhouse';
			case EObjectType.Flat : return 'Flat';
			case EObjectType.Studio : return 'Studio';
		}
	}
}

const H2 = styled('h2')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	color: ${COLORS.BLACK_LIGHT.toString()};
	text-transform: uppercase;
	margin: 0;
`;
