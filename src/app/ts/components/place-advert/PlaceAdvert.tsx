import * as React from 'react';
import styled, { css, cx } from 'react-emotion';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { PlaceAdvertStore } from '../../stores/PlaceAdvertStore';
import EPlaceAdvertPage = PlaceAdvertStore.EPlaceAdvertPage;
import { followStore } from 'react-stores';
import { Button } from '../ui/Button';

interface IProps {

}

interface IState {

}

@followStore(PlaceAdvertStore.store)
export class PlaceAdvert extends React.Component<IProps, IState> {
	public state: IState = {};

	public render() {
		const { page } = PlaceAdvertStore.store.state;

		return (
			<Container>
				<Info>
					<Pages>
						<Page
							onClick={this.page.bind(this, EPlaceAdvertPage.Welcome)}
							isFinished={true}
							isActive={page === EPlaceAdvertPage.Welcome}
						>1</Page>
						<Page
							onClick={this.page.bind(this, EPlaceAdvertPage.Info)}
							isFinished={true}
							isActive={page === EPlaceAdvertPage.Info}
						>2</Page>
						<Page
							onClick={this.page.bind(this, EPlaceAdvertPage.Address)}
							isFinished={false}
							isActive={page === EPlaceAdvertPage.Address}
						>3</Page>
						<Page
							onClick={this.page.bind(this, EPlaceAdvertPage.Images)}
							isFinished={false}
							isActive={page === EPlaceAdvertPage.Images}
						>4</Page>
						<Page
							onClick={this.page.bind(this, EPlaceAdvertPage.Additional)}
							isFinished={false}
							isActive={page === EPlaceAdvertPage.Additional}
						>5</Page>
					</Pages>

					<Div/>

					<Text>
						<strong>
							Add Basic Details
						</strong>

						<br/>

						Add details like price, configuration
						furnishing availability etc.
					</Text>

					<Div/>

					<Save>
						<a href="#" className={cx(COMMON_STYLES.LINK, saveLink)}>Save and exit</a>
					</Save>
				</Info>

				<Content>
					<Title>Information about property {PlaceAdvertStore.store.state.page}</Title>

					<Button onClick={this.handleNextButton}>
						Next step
					</Button>
				</Content>
			</Container>
		);
	}

	private handleNextButton = () => {
		const page = EPlaceAdvertPage.Additional;

		PlaceAdvertStore.store.setState({
			page,
		});
	};

	private page(page: EPlaceAdvertPage) {
		PlaceAdvertStore.store.setState({
			page,
		});
	}
}

interface IPageInterface {
	isActive: boolean;
	isFinished: boolean;
}

const saveLink = css`
  color: ${COLORS.GRAY_DARK.toString()} !important;
`;

const Text = styled('div')`
  color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
  text-align: center;
`;

const Container = styled('div')`
	display: flex;
	justify-content: flex-start;
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
	background-color: ${COLORS.WHITE.toString()};
	border-radius: 6px;
`;

const Info = styled('section')`
  width: 25%;
  border-right: 1px solid ${COLORS.GRAY_LIGHT.toString()};
  border-radius: 6px 0 0 6px;
  padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Content = styled('section')`
  width: 75%;
  padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
  box-sizing: border-box;
`;

const Div = styled('div')`
	background-color: ${COLORS.GRAY_DARK.toString()};
	height: 2px;
	width: 30%;
	margin: ${THEME.SECTION_PADDING_V}px auto;
`;

const Save = styled('div')`
  font-weight: 600;
  text-align: center;
`;

const Pages = styled('nav')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${THEME.SECTION_PADDING_V}px;
`;

const Page = styled('i')<IPageInterface>`
  font-style: normal;
  margin: 0 ${THEME.SECTION_PADDING_H / 2}px;
  display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${COLORS.GRAY_EXTRA_DARK.toString()};
	color: ${COLORS.GRAY_EXTRA_DARK.toString()};
	transition: border-color .2s, color .2s, background-color .2s;
	width: 28px;
	height: 28px;
	min-width: 28px;
	border-radius: 50%;
	font-weight: 400;
	cursor: pointer;
	position: relative;
	background-color: ${COLORS.WHITE.toString()};
	
	&:before {
		height: 1px;
		width: ${THEME.SECTION_PADDING_H}px;
		transition: background-color .2s;
		display: block;
		content: '';
		position: absolute;
		left: -${THEME.SECTION_PADDING_H + 1}px;
		background-color: ${COLORS.GRAY_EXTRA_DARK.toString()};
	}
	
	&:first-of-type {
		&:before {
			display: none;
		}
	}
	
	&:hover {
		background-color: ${COLORS.BLUE_HOVER.toString()};
		border-color: ${COLORS.BLUE_LIGHT_ACTIVE.darken(.1).toString()};
		color: ${COLORS.BLUE_LIGHT_ACTIVE.darken(.1).toString()};
	}
	
	${(props: IPageInterface) => {
	if (props.isActive) {
		return css`
				color: ${COLORS.WHITE.toString()} !important;
				border-color: ${COLORS.BLUE.toString()} !important;
				background-color: ${COLORS.BLUE.toString()} !important;
				
				&:before {
					background-color: ${COLORS.BLUE.toString()};
				}
			`;
	}

	if (props.isFinished) {
		return css`
				color: ${COLORS.BLUE.toString()} !important;
				border-color: ${COLORS.BLUE.toString()} !important;
				
				&:before {
					background-color: ${COLORS.BLUE.toString()};
				}
			`;
	}
}}
`;

const Title = styled('h2')`
  margin-top: 0;
`;