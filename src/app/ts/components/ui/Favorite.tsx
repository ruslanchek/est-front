import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { Icon, IconName } from './Icon';
import { managers } from '../../managers';

interface IProps {
	id: string;
	title: string;
	isFavorite: boolean;
}

interface IState {
	animated: boolean;
}

const ANIMATION_TIME: number = 350;

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
					<Icon name={IconName.Love} size={16}/> :
					<Icon name={IconName.LoveGray} size={16}/>
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

		managers.api.favorite(this.props.id, this.props.title);

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
		width: 18,
		height: 16,
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
