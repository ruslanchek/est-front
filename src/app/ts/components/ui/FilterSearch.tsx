import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { ModalContext } from './ModalContext';
import { ModalHeaderFilter } from './ModalHeaderFilter';
import { ModalResetSubmit } from './ModalResetSubmit';
import { Search } from './Search';

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
	styles?: StyleDeclaration;
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
		entities: []
	};

	public componentDidMount() {
		this.setState({
			entities: this.props.entities
		});
	}

	public render() {
		const {entities, isOpen} = this.state;
		let prevSymbol: string = '';

		return (
			<div className={css(styles.container)}>
				<div
					className={css(COMMON_STYLES.FILTER_BRICK, this.props.styles)}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						{this.props.title}
					</strong>
				</div>

				<ModalContext
					isVisible={isOpen}
					width={300}
					onClose={() => {
						this.setState({
							isOpen: false
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.RED}
						icon="md-home"
						title={this.props.filterTitle}
					/>

					<div className={css(styles.search)}>
						<Search
							autoFocus={true}
							onChange={(value) => {
								this.setState({
									search: value
								}, () => {
									this.filter();
								});
							}}
						/>
					</div>

					<div className={css(styles.entities)}>
						{entities.length > 0 && (
							<React.Fragment>
								{entities.map((entity, i) => {
									const firstSymbol: string = entity.title.substr(0, 1);

									if(firstSymbol !== prevSymbol) {
										prevSymbol = firstSymbol;

										return (
											<React.Fragment key={i}>
												<div className={css(styles.symbolHolder)}>
													<span className={css(styles.symbol)}>{firstSymbol}</span>
												</div>

												<div
													key={i}
													className={css(styles.entity, this.props.currentId === entity.id && styles.entitySelected)}
													onClick={() => {
														this.props.onSelect(entity.id);
													}}
												>
													{entity.title}
												</div>
											</React.Fragment>
										);
									} else {
										return (
											<div
												key={i}
												className={css(styles.entity, this.props.currentId === entity.id && styles.entitySelected)}
												onClick={() => {
													this.props.onSelect(entity.id);
												}}
											>
												{entity.title}
											</div>
										);
									}
								})}
							</React.Fragment>
						)}

						{entities.length === 0 && (
							<div
								className={css(styles.nothingFound)}
							>
								Nothing found
							</div>
						)}
					</div>

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
			</div>
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

		if(this.state.search) {
			entities = entities.filter((entity) => {
				return this.isMatch(entity.title, this.state.search);
			});
		}

		this.setState({
			entities
		});
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},

	nothingFound: {
		fontWeight: 400,
		textAlign: 'center',
		color: COLORS.BLACK_EXTRA_LIGHT.toString(),
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		boxSizing: 'border-box',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		cursor: 'pointer',
	},

	search: {
		backgroundColor: COLORS.GRAY_DARK.toString(),
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`
	},

	symbolHolder: {
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		fontWeight: 600,
		display: 'block',
		width: '100%',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		boxSizing: 'border-box',

		':first-of-type': {
			borderTop: 'none'
		}
	},

	symbol: {
		color: COLORS.BLACK_EXTRA_LIGHT.toString(),
	},

	entities: {
		maxHeight: 270,
		overflow: 'auto'
	},

	entity: {
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		fontWeight: 600,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		transition: 'background-color .2s',
		boxSizing: 'border-box',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		cursor: 'pointer',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.toString(),
		}
	},

	entitySelected: {
		backgroundColor: COLORS.BLUE_SELECTED.toString(),
		color: COLORS.BLUE.toString(),

		':hover': {
			backgroundColor: COLORS.BLUE_SELECTED.toString(),
		}
	}
});
