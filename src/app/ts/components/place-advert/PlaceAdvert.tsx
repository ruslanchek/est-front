import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COLORS, THEME } from '../../theme';
import { PlaceAdvertStore } from '../../stores/PlaceAdvertStore';
import EPlaceAdvertPage = PlaceAdvertStore.EPlaceAdvertPage;
import { followStore } from 'react-stores';

interface IProps {

}

interface IState {

}

@followStore(PlaceAdvertStore.store)
export class PlaceAdvert extends React.PureComponent<IProps, IState> {
	public state: IState = {};

	public render() {
		const { page } = PlaceAdvertStore.store.state;

		return (
			<Container>
				<Info>
					<Pages>
						<Page onClick={this.page.bind(this, EPlaceAdvertPage.Welcome)}
									isActive={page === EPlaceAdvertPage.Welcome}>1</Page>
						<Page onClick={this.page.bind(this, EPlaceAdvertPage.Info)}
									isActive={page === EPlaceAdvertPage.Info}>2</Page>
						<Page onClick={this.page.bind(this, EPlaceAdvertPage.Address)}
									isActive={page === EPlaceAdvertPage.Address}>3</Page>
						<Page onClick={this.page.bind(this, EPlaceAdvertPage.Images)}
									isActive={page === EPlaceAdvertPage.Images}>4</Page>
						<Page onClick={this.page.bind(this, EPlaceAdvertPage.Additional)}
									isActive={page === EPlaceAdvertPage.Additional}>5</Page>
					</Pages>
				</Info>

				<Content>

				</Content>
			</Container>
		);
	}

	private page(page: EPlaceAdvertPage) {
		PlaceAdvertStore.store.setState({
			page,
		});
	}
}

interface IPageInterface {
	isActive: boolean;
}

const Container = styled('div')`
	display: flex;
	justify-content: flex-start;
`;

const Info = styled('section')`
  width: 30%;
`;

const Content = styled('section')`
  width: 70%;
`;

const Pages = styled('nav')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled('i')<IPageInterface>`
  font-style: normal;
  margin: 0 ${THEME.SECTION_PADDING_H / 2}px;
  display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${COLORS.GRAY_DARK.toString()};
	color: ${COLORS.GRAY_DARK.toString()};
	transition: border-color .2s, color .2s;
	
	${(props: IPageInterface) => {
	if (props.isActive) {
		return css`
			color: ${COLORS.BLUE_SELECTED.toString()};
			border-color: ${COLORS.BLUE_SELECTED.toString()};
		`;
	}
}}
`;