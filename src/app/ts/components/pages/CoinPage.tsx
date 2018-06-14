import * as React from 'react';

import { SectionWrapper } from '../common/SectionWrapper';
import { StyleSheet, css } from 'aphrodite/no-important';
import { CoinStore } from '../../stores/CoinStore';
import ICoin = CoinStore.ICoin;
import { StoreEvent } from 'react-stores';
import { managers } from '../../managers';
import { Surface } from '../ui/Surface';
import { CurrencySymbol } from '../ui/CurrencySymbol';
import { Favorite } from '../ui/Favorite';
import { Price } from '../ui/Price';
import { Changes } from '../ui/Changes';
import { THEME } from '../../theme';
import { Params } from '../ui/Params';
import { CryptoIcon } from '../ui/CryptoIcon';
import { SurfaceRow } from '../ui/SurfaceRow';

interface IProps {

}

interface IState {
	coinData: ICoin;
	coins: ICoin[];
	favorites: string[];
}

export class CoinPage extends React.Component<IProps, IState> {
	public state: IState = {
		coinData: null,
		coins: [],
		favorites: [],
	};

	private coinStoreEvent: StoreEvent<CoinStore.IState> = null;

	public componentDidMount() {
		this.coinStoreEvent = CoinStore.store.on(
			'all',
			(storeState: CoinStore.IState) => {
				this.setState({
					coins: storeState.coins,
					favorites: storeState.favorites,
				});

				this.updateCoin();
			},
		);

		managers.route.backAvailable(true);
	}

	public componentDidUpdate() {
		if (!this.state.coinData || (this.state.coinData._id !== managers.route.params.id)) {
			this.updateCoin();
		}
	}

	public componentWillUnmount() {
		this.coinStoreEvent.remove();
		managers.route.backAvailable(false);
	}

	public render() {
		if (this.state.coinData) {
			const {
				_id,
				title,
				rank,
				symbol,
				priceUsd,
				percentChangeHour,
				lastUpdated,
			} = this.state.coinData;

			const isFavorite: boolean = this.state.favorites.indexOf(_id) >= 0;

			return (
				<SectionWrapper styles={styles.container}>
					<Surface styles={styles.row}>
						<SurfaceRow>
							<div className={css(styles.item)}>
								<div className={css(styles.left)}>
								<span className={css(styles.favorite)}>
									<Favorite id={_id} isFavorite={isFavorite} title={title}/>
								</span>

									<i className={css(styles.icon)}>
										<CryptoIcon coin={this.state.coinData}/>
									</i>
								</div>

								<div className={css(styles.right)}>
									<div className={css(styles.top)}>
									<span className={css(styles.title)}>
										{title}
									</span>

										<div className={css(styles.price)}>
											<Price value={priceUsd}/>
										</div>
									</div>

									<div className={css(styles.bottom)}>
										<div className={css(styles.symbol)}>
											<CurrencySymbol value={symbol}/>
										</div>

										<div className={css(styles.changes)}>
											<Changes value={percentChangeHour} justText={true}/>
										</div>
									</div>
								</div>
							</div>
						</SurfaceRow>

						<SurfaceRow>
							<div className={css(styles.titlePadding)}>
								Changes
							</div>

							<Params coin={this.state.coinData} type="change"/>
						</SurfaceRow>

						<SurfaceRow style={styles.lastRow}>
							<div className={css(styles.titlePadding)}>
								Volumes and price
							</div>

							<Params coin={this.state.coinData} type="price"/>
						</SurfaceRow>
					</Surface>
				</SectionWrapper>
			);
		} else {
			return null;
		}
	}

	private updateCoin(): void {
		const coinData: ICoin = this.state.coins.find((coin) => {
			return coin._id === managers.route.params.id;
		});

		if (coinData) {
			managers.route.setTitle(coinData.symbol);

			this.setState({
				coinData,
			});
		}
	}
}

const styles = StyleSheet.create({
	left: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexGrow: 0,
	},

	right: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
	},

	item: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	container: {
		overflow: 'auto',
		height: `calc(100vh - ${THEME.HEADER_HEIGHT + THEME.NAV_HEIGHT}px)`,
		maxHeight: `calc(100vh - ${THEME.HEADER_HEIGHT + THEME.NAV_HEIGHT}px)`,
		boxSizing: 'border-box',
	},

	row: {
		position: 'relative',
		overflow: 'hidden',
		minHeight: '100%'
	},

	rowNoPadding: {
		position: 'relative',
		overflow: 'hidden',
	},

	top: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	mid: {
		marginTop: THEME.SECTION_PADDING,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	bottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 1,
	},

	icon: {
		width: 30,
		height: 30,
		display: 'block',
		marginRight: THEME.SECTION_PADDING,
		flexGrow: 0,
	},

	iconImg: {
		width: 30,
		height: 30,
		display: 'block',
	},

	rank: {
		flexGrow: 0,
	},

	symbol: {
		flexGrow: 0,
	},

	updated: {
		flexGrow: 1,
		textAlign: 'right',
	},

	price: {},

	changes: {},

	title: {
		fontWeight: 400,
		fontSize: THEME.FONT_SIZE_REGULAR,
		flexGrow: 1,
		whiteSpace: 'nowrap',
	},

	titlePadding: {
		fontWeight: 400,
		fontSize: THEME.FONT_SIZE_REGULAR,
		flexGrow: 1,
		marginBottom: THEME.SECTION_PADDING,
		whiteSpace: 'nowrap'
	},

	titleMisc: {
		fontWeight: 400,
	},

	favorite: {
		flexGrow: 0,
		marginRight: 10,
	},

	lastRow: {
		borderBottom: 'none'
	}
});

