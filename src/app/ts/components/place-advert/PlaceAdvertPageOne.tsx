import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COLORS, THEME } from '../../theme';

interface IProps {

}

interface IState {
	page: number;
}

export class PlaceAdvertPage extends React.PureComponent<IProps, IState> {
	public state: IState = {
		page: 1,
	};

	public render() {
		return (
			<Container>
				<Info>
					<Pages>
						<Page onClick={this.page.bind(this, 1)} isActive={this.state.page === 1}>1</Page>
						<Page onClick={this.page.bind(this, 2)} isActive={this.state.page === 2}>2</Page>
						<Page onClick={this.page.bind(this, 3)} isActive={this.state.page === 3}>3</Page>
					</Pages>
				</Info>

				<Content>
					<div>
						xxx
					</div>
				</Content>
			</Container>
		);
	}

	private page(index: number) {
		this.setState({
			page: index,
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
		if(props.isActive) {
			return css`
				color: ${COLORS.BLUE_SELECTED.toString()};
				border-color: ${COLORS.BLUE_SELECTED.toString()};
			`;
		}
	}}
`;