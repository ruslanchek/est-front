import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CoinStore } from '../../stores/CoinStore';
import ICoin = CoinStore.ICoin;
import { COLORS } from '../../theme';

interface IProps {
	coin: ICoin;
}

interface IState {
	loaded: boolean;
	loadError: boolean;
}

export class CryptoIcon extends React.PureComponent<IProps, IState> {
	public state: IState = {
		loaded: false,
		loadError: false
	};

	public componentWillReceiveProps(nextProps: IProps) {
		if(nextProps.coin._id !== this.props.coin._id) {
			this.setState({
				loaded: false,
				loadError: false
			});
		}
	}

	public render() {
		const additionalClass = this.state.loaded ? styles.loaded : styles.before;

		return (
			<div className={css(styles.container, additionalClass)}>
				{this.state.loadError ? (
					<div className={css(styles.error)}>
						{this.props.coin.symbol}
					</div>
				) : (
					<img
						onLoad={() => {
							setTimeout(() => {
								this.setState({
									loaded: true
								});
							}, 10);
						}}
						onError={() => {
							setTimeout(() => {
								this.setState({
									loadError: true,
									loaded: true
								});
							}, 10);
						}}
						className={css(styles.icon)}
						src={`http://api.investingbar.com/static/icons/${this.props.coin._id}.png`}
					/>
				)}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 32,
		height: 32,
		display: 'block'
	},

	container: {
		opacity: 0,
		transform: 'scale(.75)',
		transition: 'opacity .35s, transform .35s'
	},

	loaded: {
		opacity: 1,
		transform: 'scale(1)'
	},

	before: {

	},

	error: {
		width: 32,
		height: 32,
		backgroundColor: COLORS.GREEN.toString(),
		color: '#fff',
		fontSize: 10,
		fontStyle: 'normal',
		borderRadius: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
