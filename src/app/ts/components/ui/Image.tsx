import * as React from 'react';
import { css, StyleSheet, StyleDeclaration } from 'aphrodite/no-important';
import { COLORS } from '../../theme';
import { EIcon, Icon } from '../common/Icon';
import { Preload } from './Preload';

interface IProps {
	src: string;
	imageStyle?: StyleDeclaration;
}

interface IState {
	loaded: boolean;
	loadError: boolean;
}

const ANIMATION_TIME: number = 300;

export class Image extends React.PureComponent<IProps, IState> {
	public state: IState = {
		loaded: false,
		loadError: false
	};

	public componentWillReceiveProps(nextProps: IProps) {
		if(nextProps.src !== this.props.src) {
			this.setState({
				loaded: false,
				loadError: false
			});
		}
	}

	public render() {
		const additionalClass = this.state.loaded ? styles.loaded : styles.before;

		return (
			<div className={css(styles.container)}>
				<Preload isVisible={!this.state.loaded} outerStyles={styles.preloader} size={20} color={COLORS.WHITE}/>
				
				{this.state.loadError ? (
					<div className={css(styles.error, additionalClass)}>
						<Icon icon={EIcon.Camera} size={40} color={COLORS.BLACK_LIGHT.alpha(.2)}/>
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
						className={css(styles.img, additionalClass, this.props.imageStyle)}
						src={this.props.src}
					/>
				)}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		display: 'block',
		minHeight: '100%',
		maxWidth: '100%',
		maxHeight: '100%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		opacity: 0,
		transition: `opacity ${ANIMATION_TIME}ms`
	},

	container: {
		paddingTop: '66.666666%',
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: COLORS.GRAY_EXTRA_DARK.toString()
	},

	loaded: {
		opacity: 1,
		transform: 'translate(-50%, -50%)'
	},

	before: {

	},

	error: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		top: '50%',
		left: '50%',
		opacity: 0,
		transition: `opacity ${ANIMATION_TIME}ms`
	},

	preloader: {

	}
});
