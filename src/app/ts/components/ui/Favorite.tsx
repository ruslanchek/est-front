import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { EIcon, EIconType, Icon } from '../common/Icon';
import { COLORS } from '../../theme';
interface IProps {
	id: number;
	title: string;
	isFavorite: boolean;
}

interface IState {
	animated: boolean;
}

const ANIMATION_TIME: number = 350;
const SIZE: number = 20;

export class Favorite extends React.PureComponent<IProps, IState> {
	public state: IState = {
		animated: false
	};

	private animationTimeout = null;

	public render() {
		return (
			<div
				className={css(styles.favorite, this.state.animated ? styles.animated : styles.notAnimated)}
				onClick={this.click.bind(this)}
			>
				{this.props.isFavorite ?
					<Icon icon={EIcon.Favorite} type={EIconType.Default} size={SIZE} color={COLORS.WHITE}/> :
					<Icon icon={EIcon.Favorite} type={EIconType.TwoTone} size={SIZE} color={COLORS.RED}/>
				}
			</div>
		);
	}

	public componentWillUnmount() {
		clearTimeout(this.animationTimeout);
	}

	private click(event): void {
		event.preventDefault();
		event.stopPropagation();

		this.setState({
			animated: true
		}, () => {
			this.animationTimeout = setTimeout(() => {
				this.setState({
					animated: false
				});
			}, ANIMATION_TIME);
		});
	}
}

const translateKeyframes = {
	'0%': {
		transform: 'scale(1)',
	},

	'33%': {
		transform: 'scale(0.9)',
	},

	'66%': {
		transform: 'scale(1.2)',
	},

	'100%': {
		transform: 'scale(1)',
	},
};

const styles = StyleSheet.create({
	favorite: {
		width: SIZE,
		height: SIZE,
		cursor: 'pointer',
		transition: 'opacity .2s',

		':hover': {
			opacity: 0.75
		}
	},

	animated: {
		animationName: [translateKeyframes],
		animationDuration: `${ANIMATION_TIME}ms`,
		animationIterationCount: 1,
	},

	notAnimated: {

	}
});