import * as React from 'react';

import { Layout } from '../common/Layout';
import { SectionWrapper } from '../common/SectionWrapper';
import { StyleSheet, css } from 'aphrodite/no-important';
import { CoinStore } from '../../stores/CoinStore';
import { List } from '../common/List';
import ICoin = CoinStore.ICoin;
import { StoreEvent } from 'react-stores';
import { CONFIG } from '../../config';
import { THEME } from '../../theme';
import { Surface } from '../ui/Surface';

interface IProps {

}

interface IState {
	coins: ICoin[];
	favorites: string[];
}

export class HomePage extends React.Component<IProps, IState> {
	public state: IState = {
		coins: [],
		favorites: []
	};

	private coinStoreEvent: StoreEvent<CoinStore.IState> = null;

	public componentDidMount() {
		this.coinStoreEvent = CoinStore.store.on(
			'all',
			(storeState: CoinStore.IState) => {
				const coins: ICoin[] = storeState.coins.slice(0, CONFIG.TOP_COUNT);

				this.setState({
					coins,
					favorites: storeState.favorites
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
				<Surface styles={styles.container}>
					<List
						coins={this.state.coins}
						favorites={this.state.favorites}
						heightSpan={0}
					/>
				</Surface>
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
