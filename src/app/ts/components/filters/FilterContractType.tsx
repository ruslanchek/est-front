import * as React from 'react';
import styled from 'react-emotion';
import { COMMON_STYLES_EMOTION } from '../../theme';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { EBrickType, FilterBrick } from './FilterBrick';

interface IProps {
	type: ObjectsStore.EObjectContractType;
	brickType: EBrickType;
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
					<strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>
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
