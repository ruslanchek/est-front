import * as React from 'react';
import styled from 'react-emotion';
import { COLORS, COMMON_STYLES_EMOTION } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../modals/ModalSelect';
import { ModalResetSubmit } from '../modals/ModalResetSubmit';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { ModalContext } from '../modals/ModalContext';
import { FilterBrick } from './FilterBrick';

interface IProps {
	entities: string[];
	filterName: string;
	className?: string;
}

interface IState {
	isOpen: boolean;
}

export class FilterAnd extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		const { entities } = this.props;

		return (
			<Container>
				<FilterBrick
					className={this.props.className}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					<span>
						{entities.map((entity, i) => {
							return (
								<React.Fragment key={i}>
									<strong className={COMMON_STYLES_EMOTION.FILTER_ACCENT}>
										{entity}
									</strong>

									{this.getSeparator(i)}
								</React.Fragment>
							);
						})}
					</span>
				</FilterBrick>

				<ModalContext
					isVisible={this.state.isOpen}
					onClose={() => {
						this.setState({
							isOpen: false
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.BLUE}
						icon="md-home"
						title={this.props.filterName}
					/>

					<ModalSelect
						items={[
							{
								id: 1,
								title: 'Flats',
								type: EModalSelectItemType.Plain,
								selected: true
							},

							{
								id: 2,
								title: 'Houses',
								type: EModalSelectItemType.Plain,
								selected: true
							},

							{
								id: 3,
								title: 'Studios',
								type: EModalSelectItemType.Plain,
								selected: true
							}
						]}
						onChange={() => {
							this.setState({
								isOpen: true
							});
						}}
					/>

					<ModalResetSubmit
						isResetEnabled={true}
						isSubmitEnabled={true}
						resetText="Reset"
						submitText="Confirm"
						onResetClick={() => {
							this.setState({

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

	private getSeparator(i: number): string {
		const { entities } = this.props;

		if (entities.length - 2 > i) {
			return ', ';
		}

		if (entities.length - 2 === i) {
			return ' and ';
		}

		return '';
	}
}

const Container = styled('div')`
	position: relative;
`;
