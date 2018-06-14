import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { CoinStore } from '../../stores/CoinStore';
import ICoin = CoinStore.ICoin;
import { Surface } from '../ui/Surface';
import { CurrencySymbol } from '../ui/CurrencySymbol';
import { Price } from '../ui/Price';
import { Changes } from '../ui/Changes';
import { COLORS, THEME } from '../../theme';
import { Favorite } from '../ui/Favorite';
import VirtualList from 'react-tiny-virtual-list';
import { managers } from '../../managers';
import { CONFIG } from '../../config';
import { CryptoIcon } from '../ui/CryptoIcon';
import { SurfaceRow } from '../ui/SurfaceRow';

interface IProps {
	coins: ICoin[];
	heightSpan: number;
	favorites: string[];
}

interface IState {

}

const ITEM_SIZE: number = 68;

export class List extends React.Component<IProps, IState> {
	public render() {
		return (
			<VirtualList
				width="100%"
				height={`calc(100vh - ${THEME.NAV_HEIGHT + THEME.HEADER_HEIGHT + this.props.heightSpan + THEME.SECTION_PADDING * 2}px)`}
				itemCount={this.props.coins.length}
				itemSize={ITEM_SIZE}
				overscanCount={8}
				renderItem={(params) => {
					const coin: ICoin = this.props.coins[params.index];
					const isFavorite: boolean = this.props.favorites.indexOf(coin._id) >= 0;

					return (
						<div style={params.style} className={css(styles.row)} key={params.index} onClick={() => {
							managers.route.go(CONFIG.PATHS.COIN.replace(':id', coin._id));
						}}>
							<SurfaceRow>
								<div className={css(styles.item)}>
									<div className={css(styles.left)}>
											<span className={css(styles.favorite)}>
												<Favorite id={coin._id} isFavorite={isFavorite} title={coin.title}/>
											</span>

										<i className={css(styles.icon)}>
											<CryptoIcon coin={coin}/>
										</i>
									</div>

									<div className={css(styles.right)}>
										<div className={css(styles.top)}>
												<span className={css(styles.title)}>
													{coin.title}
												</span>

											<div className={css(styles.price)}>
												<Price value={coin.priceUsd}/>
											</div>
										</div>

										<div className={css(styles.bottom)}>
											<div className={css(styles.symbol)}>
												<CurrencySymbol value={coin.symbol}/>
											</div>

											<div className={css(styles.changes)}>
												<Changes value={coin.percentChangeHour} justText={true}/>
											</div>
										</div>
									</div>
								</div>
							</SurfaceRow>
						</div>
					);
				}}
			/>
		);
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

	row: {
		transition: 'background-color .12s',
		borderBottom: `1px solid ${COLORS.GRAY_DARK.lighten(0.1).toString()}`,

		':hover': {
			backgroundColor: COLORS.GRAY_LIGHT.darken(.0125).toString(),
		},
	},

	top: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	bottom: {
		display: 'flex',
		marginTop: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
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

	price: {
		fontWeight: 400,
		fontSize: THEME.FONT_SIZE_REGULAR,
	},

	changes: {},

	title: {
		fontWeight: 400,
		fontSize: THEME.FONT_SIZE_REGULAR,
		flexGrow: 1,
		whiteSpace: 'nowrap',
	},

	favorite: {
		flexGrow: 0,
		marginRight: 10,
	},
});
