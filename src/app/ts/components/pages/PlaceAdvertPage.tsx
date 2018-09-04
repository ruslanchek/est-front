import * as React from 'react';
import { Layout } from '../common/Layout';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';
import { BreadCrumbs } from '../ui/BreadCrumbs';
import { EFormValidateOn, Form, IFormModelOutput } from '../forms/Form';
import { Button } from '../ui/Button';
import { managers } from '../../managers';
import { EAdvertContractType, EAdvertType } from '../../managers/AdvertManager';
import { PlaceAdvert } from '../place-advert/PlaceAdvert';


interface IProps {

}

interface IState {
	loading: boolean;
	adverts: any[];
}

@followStore(AuthStore.store)
export class PlaceAdvertPage extends React.Component<IProps, IState> {
	public state: IState = {
		loading: false,
		adverts: [],
	};

	public componentDidMount() {
		setInterval(() => {
			this.loadAdverts();
		}, 1000);
	}

	public render() {
		return (
			<React.Fragment>
				<Layout topPadding={true} bottomPadding={true}>
					<BreadCrumbs/>
					<PlaceAdvert/>

					{/*<Form*/}
						{/*onSubmit={this.handleForm}*/}
						{/*validateOn={EFormValidateOn.SUBMIT}*/}
					{/*>*/}
						{/*<Input name="title"/>*/}
						{/*<Input name="price"/>*/}
						{/*<Selector/>*/}

						{/*<Button loading={this.state.loading}>*/}
							{/*Place advert*/}
						{/*</Button>*/}
					{/*</Form>*/}

					{/*<ListTable*/}
						{/*items={this.state.adverts}*/}
					{/*/>*/}
				</Layout>
			</React.Fragment>
		);
	}

	private loadAdverts = async () => {
		const { payload } = await managers.auth.getProfileAdverts();

		if (payload.list) {
			this.setState({
				loading: false,
				adverts: payload.list,
			});
		}
	};

	private handleForm = async (output: IFormModelOutput) => {
		this.setState({
			loading: true,
		});

		await managers.advert.createNew({
			title: output.values.title,
			type: EAdvertType.DetachedHouse,
			contractType: EAdvertContractType.Purchase,
			constructionDate: Date.now(),
			price: parseFloat(output.values.price) || 1000,
		});

		this.setState({
			loading: false,
		});

		this.loadAdverts();
	};
}
