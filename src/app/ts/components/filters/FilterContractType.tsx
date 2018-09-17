import * as React from 'react';
import styled from 'react-emotion';
import { COMMON_STYLES } from '../../theme';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { EFilterBrickType, FilterBrick } from './FilterBrick';

interface IProps {
	type: AdvertsStore.EAdvertContractType;
	brickType: EFilterBrickType;
	className?: string;
}

interface IState {

}

export class FilterContractType extends React.PureComponent<IProps, IState> {
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
					<strong className={COMMON_STYLES.FILTER_ACCENT}>
						Rent
					</strong>
				</FilterBrick>
			</Container>
		);
	}
}

const Container = styled('div')`
	position: relative;
`;
