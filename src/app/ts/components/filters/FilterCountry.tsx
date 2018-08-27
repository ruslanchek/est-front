import * as React from 'react';
import styled from 'react-emotion';
import { COMMON_STYLES_EMOTION } from '../../theme';
import { Flag } from '../ui/Flag';
import { EFilterBrickType, FilterBrick } from './FilterBrick';

interface IProps {
	isoCode: string;
	title: string;
	brickType: EFilterBrickType;
}

interface IState {

}

export class FilterCountry extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		return (
			<Container>
				<FilterBrick
					type={this.props.brickType}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					<Flag isoCode={this.props.isoCode} />

					<strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>
						{this.props.title}
					</strong>
				</FilterBrick>
			</Container>
		);
	}
}

const Container = styled('div')`
	position: relative;
`;
