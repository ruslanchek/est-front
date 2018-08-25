import * as React from 'react';
import styled from 'react-emotion';
import { COLORS, THEME, COMMON_STYLES_EMOTION } from '../../theme';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { Rheostat } from '../ui/Rheostat';
import { ModalResetSubmit } from '../modals/ModalResetSubmit';
import { ModalContext } from '../modals/ModalContext';
import { EBrickType, FilterBrick } from './FilterBrick';

interface IProps {
	from: number;
	to: number;
	filterName: string;
	renderValue: (value: number) => JSX.Element;
	brickType: EBrickType;
	className?: string;
}

interface IState {
	isOpen: boolean;
	from: number;
	to: number;
}

export class FilterFromTo extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
		from: 0,
		to: 0,
	};

	public componentDidMount() {
		this.setState({
			from: this.props.from,
			to: this.props.to,
		});
	}

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
					<span>
						from <strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>{this.props.renderValue(this.props.from)}</strong>
						{' '}
						to <strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>{this.props.renderValue(this.props.to)}</strong>
					</span>
				</FilterBrick>

				<ModalContext
					isVisible={this.state.isOpen}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.GREEN}
						icon="md-git-commit"
						title={this.props.filterName}
					/>

					<RheostatContainer>
						<Rheostat
							min={this.props.from}
							max={this.props.to}
							step={10000}
							currentMin={this.state.from}
							currentMax={this.state.to}
							renderValue={this.props.renderValue}
							onChange={(min: number, max: number) => {
								this.setState({
									from: min,
									to: max
								});
							}}
						/>
					</RheostatContainer>

					<ModalResetSubmit
						isResetEnabled={true}
						isSubmitEnabled={true}
						resetText="Reset"
						submitText="Confirm"
						onResetClick={() => {
							this.setState({
								from: this.props.from,
								to: this.props.to
							});
						}}
						onSubmitClick={() => {
							this.setState({
								isOpen: false
							});
						}}
					/>
				</ModalContext>
			</Container>
		);
	}
}

const Container = styled('div')`
	position: relative;
`;

const RheostatContainer = styled('div')`
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
`;
