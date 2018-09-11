import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COLORS, THEME } from '../../theme';
import { PlaceAdvertStore } from '../../stores/PlaceAdvertStore';
import EPlaceAdvertPage = PlaceAdvertStore.EPlaceAdvertPage;
import { followStore } from 'react-stores';
import { Button } from '../ui/Button';

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
					<Title>Information about property</Title>

					<Button>
						Next step
					</Button>
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
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
	background-color: ${COLORS.WHITE.toString()};
	border-radius: 6px;
`;

const Info = styled('section')`
  width: 25%;
  background-color: ${COLORS.GRAY_LIGHT.alpha(.5).toString()};
  border-right: 1px solid ${COLORS.GRAY_LIGHT.toString()};
  border-radius: 6px 0 0 6px;
  padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
  box-sizing: border-box;
`;

const Content = styled('section')`
  width: 75%;
  padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
  box-sizing: border-box;
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
	border: 2px solid ${COLORS.GRAY_EXTRA_DARK.toString()};
	color: ${COLORS.GRAY_EXTRA_DARK.toString()};
	transition: border-color .2s, color .2s;
	width: 28px;
	height: 28px;
	min-width: 28px;
	border-radius: 50%;
	font-weight: 600;
	
	&:hover {
		background-color: ${COLORS.BLUE_HOVER.toString()};
	}
	
	${(props: IPageInterface) => {
		if (props.isActive) {
			return css`
				color: ${COLORS.BLUE.toString()};
				border-color: ${COLORS.BLUE.toString()};
			`;
		}
	}}
`;

const Title = styled('h2')`
  margin-top: 0;
`;