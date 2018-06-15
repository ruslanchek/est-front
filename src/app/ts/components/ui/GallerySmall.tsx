import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';
import { Image } from './Image';
import { CSSTransition } from 'react-transition-group';

interface IProps {
	objectData: IObject;
}

interface IState {
	currentPage: number;
	currentPicSrc: string;
	showPages: boolean;
}

const PAGE_APPEAR_ANIMATION_TIME: number = 200;

export class GallerySmall extends React.Component<IProps, IState> {
	public state: IState = {
		currentPage: 0,
		currentPicSrc: '',
		showPages: false
	};

	public componentDidMount() {
		this.setState({
			currentPicSrc: this.props.objectData.coverPicture.src
		});
	}

	public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
		if(nextProps.objectData.id !== this.props.objectData.id) {
			return true;
		}

		if(nextState.currentPicSrc !== this.state.currentPicSrc) {
			return true;
		}

		if(nextState.currentPage !== this.state.currentPage) {
			return true;
		}

		if(nextState.showPages !== this.state.showPages) {
			return true;
		}

		return false;
	}

	public render() {
		const { pictures } = this.props.objectData;
		const { currentPage } = this.state;

		return (
			<div
				className={css(styles.gallery)}
				onMouseEnter={() => this.setState({showPages: true})}
				onMouseLeave={() => this.setState({showPages: false})}
			>
				<Image src={this.state.currentPicSrc} imageStyle={styles.image}/>

				<CSSTransition
					in={this.state.showPages}
					unmountOnExit
					timeout={PAGE_APPEAR_ANIMATION_TIME}
					classNames={{
						enter: css(styles.enterPages),
						enterActive: css(styles.enterActivePages),
						exit: css(styles.exitPages),
						exitActive: css(styles.exitActivePages)
					}}
				>
					<div className={css(styles.pages)}>
						{pictures.map((picture, i) => {
							const rules = [
								styles.page
							];

							if(i === currentPage) {
								rules.push(styles.pageActive);
							}

							return (
								<i
									onMouseEnter={() => {
										this.setState({
											currentPage: i,
											currentPicSrc: pictures[i].src
										});
									}}
									className={css(rules)}
									key={i}
								/>
							);
						})}
					</div>
				</CSSTransition>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	gallery: {
		position: 'relative'
	},

	pages: {
		position: 'absolute',
		bottom: THEME.SECTION_PADDING_H,
		left: 0,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},

	enterPages: {
		transform: 'translateY(200%)'
	},

	enterActivePages: {
		transform: 'translateY(0%)',
		transition: `transform ${PAGE_APPEAR_ANIMATION_TIME}ms`,
		transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.390, 1.100)'
	},

	exitPages: {
		transform: 'translateY(0%)'
	},

	exitActivePages: {
		transform: 'translateY(200%)',
		transition: `transform ${PAGE_APPEAR_ANIMATION_TIME}ms`,
		transitionTimingFunction: 'cubic-bezier(0.045, 0.175, 0.435, 1.040)'
	},

	page: {
		width: 16,
		height: 16,
		opacity: .7,
		transition: 'transform .2s, opacity .2s',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',

		':after': {
			display: 'block',
			content: '""',
			width: 4,
			height: 4,
			borderRadius: 4,
			backgroundColor: '#fff',
		}
	},

	pageActive: {
		transform: 'scale(1.5)',
		opacity: 1
	},

	image: {
		borderRadius: '10px 10px 0 0'
	}
});
