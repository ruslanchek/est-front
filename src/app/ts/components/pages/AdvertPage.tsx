import * as React from 'react';
import { followStore } from 'react-stores';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { Layout } from '../common/Layout';
import { Money } from '../ui/Money';
import IAdvert = AdvertsStore.IAdvert;
import styled from 'react-emotion';

interface IProps {

}

interface IState {
	advert: IAdvert;
}

@followStore(AdvertsStore.store)
export class AdvertPage extends React.Component<IProps, IState> {
	public state: IState = {
		advert: null,
	};

	public render() {
		if(this.state.advert) {
			return (
				<React.Fragment>
					<Layout>
						<BreadCrumbs/>
						<Money value={this.state.advert.price}/>
					</Layout>

					<Gallery>
						{this.state.advert.pictures.map((picture, i) => {
							return (
								<Picture key={i}>
									<Img src={picture.src}/>
								</Picture>
							);
						})}
					</Gallery>
				</React.Fragment>
			);
		} else {
			return null;
		}
	}
}

const Gallery = styled('div')`
	display: flex;
`;

const Picture = styled('div')`
	width: 300px;
`;

const Img = styled('img')`
	width: 300px;
	display: block;
`;
