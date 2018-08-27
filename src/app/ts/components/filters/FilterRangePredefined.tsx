import * as React from 'react';
import { IFilter } from '../../managers/FiltersManager';
import { COLORS, THEME } from '../../theme';
import { EFilterBrickType, FilterBrick } from './FilterBrick';
import styled from 'react-emotion';

interface IProps {
	groupName: string;
	filter: IFilter;
	brickType: EFilterBrickType;
}

interface IState {
	isVisible: boolean;
}

export class FilterRangePredefined extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isVisible: false
	};

	public render() {
		const { filter, groupName } = this.props;

		return (
			<Container>
				<FilterBrick type={this.props.brickType}>
					<Label>
						{filter.title}
					</Label>

					<Current onClick={this.toggle.bind(this)}>
						{filter.value}
					</Current>
				</FilterBrick>
			</Container>
		);
	}

	private toggle(): void {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}
}

const Container = styled('div')`
	position: relative;
`;

const Label = styled('div')`
	font-size: ${THEME.FONT_SIZE_SMALL}px;
`;

const Current = styled('div')`
	border-radius: 4px;
	background-color: ${COLORS.GRAY_EXTRA_DARK.toString()};
	padding: 0 ${THEME.SECTION_PADDING_H / 2}px;
	font-size: ${THEME.FONT_SIZE_SMALL}px;
	height: 26px;
	line-height: 26px;
	width: 100px;
`;
