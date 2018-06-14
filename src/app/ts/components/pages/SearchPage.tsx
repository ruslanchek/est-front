import * as React from 'react';

import { Layout } from '../common/Layout';
import { StyleSheet, css } from 'aphrodite/no-important';
import { CoinStore } from '../../stores/CoinStore';
import { List } from '../common/List';
import ICoin = CoinStore.ICoin;
import { StoreEvent } from 'react-stores';
import { NoItemsSearch } from '../ui/NoItemsSearch';
import { Input } from '../ui/Input';
import { COLORS, THEME } from '../../theme';
import { Surface } from '../ui/Surface';
import { SurfaceRow } from '../ui/SurfaceRow';

interface IProps {

}

interface IState {
	coins: ICoin[];
	filteredCoins: ICoin[],
	searchString: string;
	favorites: string[];
}

export class SearchPage extends React.Component<IProps, IState> {
	public state: IState = {
		coins: [],
		filteredCoins: [],
		searchString: '',
		favorites: [],
	};

	private coinStoreEvent: StoreEvent<CoinStore.IState> = null;

	public componentDidMount() {
		this.coinStoreEvent = CoinStore.store.on(
			'all',
			(storeState: CoinStore.IState) => {
				this.setState({
					coins: storeState.coins,
					filteredCoins: storeState.coins,
					favorites: storeState.favorites
				}, () => {
					this.search(this.state.searchString);
				});
			},
		);
	}

	public componentWillUnmount() {
		this.coinStoreEvent.remove();
	}

	public render() {
		return (
			<Layout className={css(styles.layout)}>
				<Surface styles={styles.container}>
					<SurfaceRow>
						<div className={css(styles.search)}>
							<Input
								name="search"
								label="Search"
								onChange={this.search.bind(this)}
								autoFocus
								placeholder="Type name"
							/>
						</div>
					</SurfaceRow>

					{this.state.filteredCoins.length > 0 ?
						<List
							coins={this.state.filteredCoins}
							favorites={this.state.favorites}
							heightSpan={90}
						/>
						:
						<NoItemsSearch text={this.state.searchString ? 'No items were found' : ''}/>
					}
				</Surface>
			</Layout>
		);
	}

	private search(value): void {
		const coins = this.state.coins.filter((coin) => {
			return this.isMatchSearch(coin.symbol, value) || this.isMatchSearch(coin.title, value);
		});

		this.setState({
			searchString: value,
			filteredCoins: coins
		});
	}

	private isMatchSearch(where: string, what: string): boolean {
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
			where.replace(/\s{2,}/g, ' ');
			where = where.toLowerCase().trim();

			return where.indexOf(what) > -1;
		}

		return true;
	}
}

const styles = StyleSheet.create({
	layout: {
		// height: `calc(100% - ${THEME.HEADER_HEIGHT + THEME.NAV_HEIGHT + 50}px)`
	},

	container: {
		margin: THEME.SECTION_PADDING,
		cursor: 'pointer',
		overflow: 'hidden',
		position: 'relative',
	},

	search: {

	}
});
