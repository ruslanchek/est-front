import * as React from 'react';
import styled, { css } from 'react-emotion';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { AdvertListItem } from '../blocks/AdvertListItem';
import { mq } from '../../lib/CSSUtils';
import { SpecialBrick } from '../ui/SpecialBrick';
import { CONFIG } from '../../config';
import IAdvert = AdvertsStore.IAdvert;

interface IProps {
	adverts: IAdvert[];
}

export class List extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Container>
				<ListContainer>
					{AdvertsStore.store.state.presets.map((preset, i) => {
						return (
							<SpecialBrick
								key={i}
								color1={preset.color1}
								color2={preset.color2}
								pattern={preset.pattern}
								title={preset.title}
								subtitle={`From ${preset.price.toLocaleString(CONFIG.DEFAULT_LOCALE)} EUR`}
								className={item}
							/>
						);
					})}

					{AdvertsStore.store.state.adverts.map((advert, i) => {
						return (
							<AdvertListItem
								key={i}
								advertData={advert}
								className={item}
							/>
						);
					})}
				</ListContainer>
			</Container>
		);
	}
}

const Container = styled('div')`
  display: flex;
	justify-content: center;
`;

const ListContainer = styled('div')`
  width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const item = css`
  margin-bottom: 40px;
  
  ${mq.phone} {
  	width: 100%;
		margin-bottom: 20px;
  }
  
  ${mq.tablet} {
  	width: 48%;
  }
  
  ${mq.desktop} {
  	width: 23%;
  }
`;
