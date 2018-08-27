import * as React from 'react';
import { followStore } from 'react-stores';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { managers } from '../../managers';
import { Layout } from '../common/Layout';
import { Money } from '../ui/Money';
import IObject = ObjectsStore.IObject;
import styled from 'react-emotion';

interface IProps {

}

interface IState {
	object: IObject;
}

@followStore(ObjectsStore.store)
export class ObjectPage extends React.Component<IProps, IState> {
	public state: IState = {
		object: managers.faker.generateObject(1)
	};

	public render() {
		return (
			<React.Fragment>
				<Layout>
					<BreadCrumbs/>

					<Money value={this.state.object.price}/>
				</Layout>

				<Gallery>
					{this.state.object.pictures.map((picture, i) => {
						return (
							<Picture key={i}>
								<Img src={picture.src}/>
							</Picture>
						);
					})}
				</Gallery>
			</React.Fragment>
		);
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
