import * as React from 'react';
import * as Ionicon from 'react-ionicons';

import styled, { css } from 'react-emotion';
import { COLORS, THEME } from '../../theme';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { ModalContext } from '../modals/ModalContext';
import { FilterBrick } from './FilterBrick';

interface IProps {

}

interface IState {
	isOpen: boolean;
}

export class FilterAdd extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		return (
			<Container
				onClick={() => {
					this.setState({
						isOpen: true,
					});
				}}
			>
				<span>
					+ Add new filter
				</span>

				<ModalContext
					isVisible={this.state.isOpen}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.BLACK_LIGHT}
						icon="md-list"
						title="Add new filter"
					/>

					<FiltersList>
						<FilterItem>
							<ItemIcon>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</ItemIcon>

							<ItemTitle>
								Select property type
							</ItemTitle>
						</FilterItem>

						<FilterItem>
							<ItemIcon>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</ItemIcon>

							<ItemTitle>
								Select property type
							</ItemTitle>
						</FilterItem>

						<FilterItem>
							<ItemIcon>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</ItemIcon>

							<ItemTitle>
								Select property type
							</ItemTitle>
						</FilterItem>

						<FilterItem>
							<ItemIcon>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</ItemIcon>

							<ItemTitle>
								Select property type
							</ItemTitle>
						</FilterItem>

						<FilterItem>
							<ItemIcon>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</ItemIcon>

							<ItemTitle>
								Select property type
							</ItemTitle>
						</FilterItem>

						<FilterItem>
							<ItemIcon>
								<Ionicon
									icon="md-home"
									fontSize="28px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</ItemIcon>

							<ItemTitle>
								Select property type
							</ItemTitle>
						</FilterItem>
					</FiltersList>
				</ModalContext>
			</Container>
		);
	}
}

const Container = styled(FilterBrick)`
	background-color: ${COLORS.BLUE_LIGHT.toString()};
	color: ${COLORS.BLUE.toString()};
	font-weight: 600;
	border-radius: 4px;
	position: relative;

	&:hover {
		background-color: ${COLORS.BLUE_LIGHT_ACTIVE.toString()};
	}
`;

const FiltersList = styled('div')`
	display: flex;
	justify-content: space-between;
	padding: ${THEME.SECTION_PADDING_V / 2}px ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px;
	flex-wrap: wrap;
`;

const FilterItem = styled('div')`
	padding: ${THEME.SECTION_PADDING_H / 2}px;
	border-radius: 6px;
	width: 48%;
	box-sizing: border-box;
	height: 100px;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	border: 1px solid ${COLORS.GRAY_DARK.toString()};
	margin-top: 10px;
	cursor: pointer;
	transition: border-color .2s;

	&:hover {
		border-color: ${COLORS.GRAY_DARK.darken(.1).toString()};
	}
`;

const ItemTitle = styled('span')`
	font-weight: 400;
	white-space: normal;
	color: ${COLORS.BLACK_LIGHT.toString()};
`;

const ItemIcon = styled('span')`
	align-self: flex-start;
	margin-bottom: 10px;
`;
