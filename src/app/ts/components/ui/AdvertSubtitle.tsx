import * as React from 'react';
import { AdvertsStore } from '../../stores/AdvertsStore';
import IAdvert = AdvertsStore.IAdvert;
import { COLORS, THEME } from '../../theme';
import { CONFIG } from '../../config';
import styled from 'react-emotion';
import EAdvertType = AdvertsStore.EAdvertType;

interface IProps {
	advertData: IAdvert;
}

export class AdvertSubtitle extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<H2>
				{this.getTypeName()}{this.getAge()}
			</H2>
		);
	}

	private getAge() {
		const { constructionDate } = this.props.advertData;
		const years: number = constructionDate.getFullYear();

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
		const { type } = this.props.advertData;

		switch (type) {
			case EAdvertType.DetachedHouse : return 'Detached house';
			case EAdvertType.TownHouse : return 'Townhouse';
			case EAdvertType.Flat : return 'Flat';
			case EAdvertType.Studio : return 'Studio';
		}
	}
}

const H2 = styled('h2')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	color: ${COLORS.BLACK_LIGHT.toString()};
	text-transform: uppercase;
	margin: 0;
`;
