import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { ModalContext } from './ModalContext';
import { ModalHeaderFilter } from './ModalHeaderFilter';
import { ModalResetSubmit } from './ModalResetSubmit';
import { ObjectsStore } from '../../stores/ObjectsStore';
import ICity = ObjectsStore.ICity;
import { managers } from '../../managers';
import { Search } from './Search';
import { Input } from './Input';

interface IProps {
	isoCode: string;
	title: string;
	styles?: StyleDeclaration;
}

interface IState {
	isOpen: boolean;
}

export class FilterCity extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		let cities: ICity[] = [];
		let prevSymbol: string = '';

		for(let i = 0; i < 200; i++) {
			cities.push(managers.faker.generateCity(1));
		}

		cities = cities.sort((a, b) => {
			return a.title.localeCompare(b.title);
		});

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
					isVisible={this.state.isOpen}
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
						title="Select city"
					/>

					<div className={css(styles.search)}>
						<Search autoFocus={true}/>
					</div>

					<div className={css(styles.cities)}>
						{cities.map((city, i) => {
							const firstSymbol: string = city.title.substr(0, 1);

							if(firstSymbol !== prevSymbol) {
								prevSymbol = firstSymbol;

								return (
									<React.Fragment key={i}>
										<div className={css(styles.symbol)}>
											{firstSymbol}
										</div>

										<div key={i} className={css(styles.city)}>
											{city.title}
										</div>
									</React.Fragment>
								);
							} else {
								return (
									<div key={i} className={css(styles.city)}>
										{city.title}
									</div>
								);
							}
						})}
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
}

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},

	search: {
		padding: `0 ${THEME.SECTION_PADDING_H}px`
	},

	symbol: {
		fontWeight: 600,
		width: '100%'
	},

	cities: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
	},

	city: {

	}
});
