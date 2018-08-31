import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { ModalContext } from '../modals/ModalContext';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { ModalResetSubmit } from '../modals/ModalResetSubmit';
import { Search } from '../ui/Search';
import { EFilterBrickType, FilterBrick } from './FilterBrick';

export interface ISearchFilterEntity {
	title: string;
	id: string | number;
}

interface IProps {
	title: string;
	filterTitle: string;
	entities: ISearchFilterEntity[];
	currentId: string | number;
	onSelect: (id: string | number) => void;
	brickType: EFilterBrickType;
	className?: string;
}

interface IState {
	isOpen: boolean;
	search: string;
	entities: ISearchFilterEntity[];
}

export class FilterSearch extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
		search: '',
		entities: [],
	};

	public componentDidMount() {
		this.setState({
			entities: this.props.entities,
		});
	}

	public render() {
		const { entities, isOpen } = this.state;
		let prevSymbol: string = '';

		return (
			<Container>
				<FilterBrick
					type={this.props.brickType}
					className={this.props.className}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					<strong className={COMMON_STYLES.FILTER_ACCENT}>
						{this.props.title}
					</strong>
				</FilterBrick>

				<ModalContext
					isVisible={isOpen}
					width={300}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.RED}
						icon="md-home"
						title={this.props.filterTitle}
					/>

					<SearchContainer>
						<Search
							autoFocus={true}
							onChange={(value) => {
								this.setState({
									search: value,
								}, () => {
									this.filter();
								});
							}}
						/>
					</SearchContainer>

					<Entities>
						{entities.length > 0 && (
							<React.Fragment>
								{entities.map((entity, i) => {
									const firstSymbol = entity.title.substr(0, 1);

									if (firstSymbol !== prevSymbol) {
										prevSymbol = firstSymbol;

										return (
											<React.Fragment key={i}>
												<SymbolHolder>
													<Symbol>{firstSymbol}</Symbol>
												</SymbolHolder>

												<Entity
													key={i}
													active={this.props.currentId === entity.id}
													onClick={() => {
														this.props.onSelect(entity.id);
													}}
												>
													{entity.title}
												</Entity>
											</React.Fragment>
										);
									} else {
										return (
											<Entity
												key={i}
												active={this.props.currentId === entity.id}
												onClick={() => {
													this.props.onSelect(entity.id);
												}}
											>
												{entity.title}
											</Entity>
										);
									}
								})}
							</React.Fragment>
						)}

						{entities.length === 0 && (
							<NothingFound>
								Nothing found
							</NothingFound>
						)}
					</Entities>

					<ModalResetSubmit
						isResetEnabled={true}
						isSubmitEnabled={true}
						resetText="Reset"
						submitText="Confirm"
						onResetClick={() => {
							this.setState({});
						}}
						onSubmitClick={() => {
							this.setState({
								isOpen: false,
							});
						}}
					/>
				</ModalContext>
			</Container>
		);
	}

	private isMatch(where: string, what: string): boolean {
		const clearPattern: RegExp = /[\.,\/#!$%\^&\*;:"'(){}=_`~()]/g;

		if (what) {
			what = what.toLowerCase().trim();
			what = what.replace(clearPattern, '');
			what = what.replace(/\s{2,}/g, ' ');
		}

		if (where) {
			where = where.toString();

			if (!what) {
				return true;
			}

			where = where.replace(clearPattern, '');
			where.replace(/\s{1,}/g, ' ');
			where = where.toLowerCase().trim();

			return where.indexOf(what) > -1;
		}

		return true;
	}

	private filter(): void {
		let entities: ISearchFilterEntity[] = this.props.entities;

		if (this.state.search) {
			entities = entities.filter((entity) => {
				return this.isMatch(entity.title, this.state.search);
			});
		}

		this.setState({
			entities,
		});
	}
}

const Container = styled('div')`
	position: relative;
`;

const SearchContainer = styled('div')`
	padding: 0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px;
	border-bottom: 1px solid ${COLORS.GRAY_DARK.toString()};
`;

const NothingFound = styled('div')`
	font-weight: 400;
	text-align: center;
	color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	box-sizing: border-box;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
`;

const SymbolHolder = styled('div')`
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
	font-weight: 600;
	display: block;
	width: 100%;
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	box-sizing: border-box;

	&:first-of-type {
		border-top: none;
	}
`;

const Entities = styled('div')`
	max-height: 270px;
	overflow: auto;
`;

const Symbol = styled('span')`
	color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
`;

interface IEntityProps {
	active: boolean;
}

const Entity = styled('div')`
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
	font-weight: 600;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px;
	transition: background-color .2s;
	box-sizing: border-box;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
	color: ${COLORS.BLUE.toString()};
	
	${(props: IEntityProps) => props.active ? css`
		background-color: ${COLORS.BLUE_SELECTED.toString()};
	` : css`
		&:hover {
			background-color: ${COLORS.BLUE_HOVER.toString()};
		}
	`};
`;
