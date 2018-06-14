import * as React from 'react';

import { Layout } from '../common/Layout';
import { SectionWrapper } from '../common/SectionWrapper';
import { StyleSheet, css } from 'aphrodite/no-important';
import { CoinStore } from '../../stores/CoinStore';
import { List } from '../common/List';
import ICoin = CoinStore.ICoin;
import { StoreEvent } from 'react-stores';
import { CONFIG } from '../../config';
import { NoItems } from '../ui/NoItems';
import { Surface } from '../ui/Surface';
import { THEME } from '../../theme';

interface IProps {

}

interface IState {
	coins: ICoin[];
	favorites: string[];
}

export class FavoritesPage extends React.Component<IProps, IState> {
	public state: IState = {
		coins: [],
		favorites: []
	};

	private coinStoreEvent: StoreEvent<CoinStore.IState> = null;

	public componentDidMount() {
		this.coinStoreEvent = CoinStore.store.on(
			'all',
			(storeState: CoinStore.IState) => {
				const favorites: string[] = storeState.favorites;
				const coins: ICoin[] = storeState.coins.filter((coin) => {
					return favorites.indexOf(coin._id) >= 0;
				});

				this.setState({
					coins,
					favorites
				});
			}
		);
	}

	public componentWillUnmount() {
		this.coinStoreEvent.remove();
	}

	public render() {
		return (
			<Layout>
				{this.state.coins.length > 0 ?
					<Surface styles={styles.container}>
						<List
							coins={this.state.coins}
							favorites={this.state.favorites}
							heightSpan={0}
						/>
					</Surface>
					:
					<NoItems/>
				}
			</Layout>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: THEME.SECTION_PADDING,
		cursor: 'pointer',
		overflow: 'hidden',
		position: 'relative',
	},
});
