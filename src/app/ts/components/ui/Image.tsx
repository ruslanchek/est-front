import * as React from 'react';
import { css, StyleSheet, StyleDeclaration } from 'aphrodite/no-important';
import { COLORS } from '../../theme';
import { EIcon, Icon } from '../common/Icon';
import { Preload } from './Preload';
import styled from 'react-emotion';

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
			<Container loaded={this.state.loaded}>
				<Preload
					isVisible={!this.state.loaded}
					className={''}
					size={20}
					color={COLORS.WHITE}
				/>
				
				{this.state.loadError ? (
					<Err loaded={this.state.loaded}>
						<Icon
							icon={EIcon.Camera}
							size={40}
							color={COLORS.BLACK_LIGHT.alpha(.2)}
						/>
					</Err>
				) : (
					<Img
						onLoad={() => {
							setTimeout(() => {
								this.setState({
									loaded: true,
								});
							}, 10);
						}}
						onError={() => {
							setTimeout(() => {
								this.setState({
									loadError: true,
									loaded: true,
								});
							}, 10);
						}}
						className={css(styles.img, additionalClass, this.props.imageStyle)}
						src={this.props.src}
					/>
				)}
			</Container>
		);
	}
}

interface ILoadedProps {
	loaded: boolean;
}

const Container = styled('div')<ILoadedProps>`
	padding-top: 66.666666%;
	position: relative;
	overflow: hidden;
	background-color: ${COLORS.GRAY_EXTRA_DARK.toString()};
`;

const Err = styled('div')<ILoadedProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	opacity: 0;
	transition: opacity ${ANIMATION_TIME}ms;
	
	${(props: ILoadedProps) => {
		if(props.loaded) {
			return css`
				opacity: 1;
				transform: translate(-50%, -50%);
			`;
		}
	}}
`;

const Img = styled('img')`
	display: block;
	min-height: 100%;
	max-width: 100%;
	max-height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;
	transition: opacity ${ANIMATION_TIME}ms;
`;


const styles = StyleSheet.create({
	img: {

	},

	container: {

	},

	loaded: {

	},

	before: {

	},

	error: {

	},

	preloader: {

	}
});
