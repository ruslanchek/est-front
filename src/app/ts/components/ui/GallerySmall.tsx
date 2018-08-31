import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { THEME } from '../../theme';
import { Image } from './Image';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'react-emotion';

interface IProps {
	objectData: IObject;
}

interface IState {
	currentPage: number;
	currentPicSrc: string;
	showPages: boolean;
}

const PAGE_APPEAR_ANIMATION_TIME: number = 300;

export class GallerySmall extends React.Component<IProps, IState> {
	public state: IState = {
		currentPage: 0,
		currentPicSrc: '',
		showPages: false,
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
			<Container
				onMouseEnter={() => this.setState({showPages: true})}
				onMouseLeave={() => this.setState({showPages: false})}
			>
				<Image
					src={this.state.currentPicSrc}
					className={image}
				/>

				<CSSTransition
					in={this.state.showPages}
					unmountOnExit
					timeout={PAGE_APPEAR_ANIMATION_TIME}
					classNames={{
						enter: pagesTransitions.enter,
						enterActive: pagesTransitions.enterActive,
						exit: pagesTransitions.exit,
						exitActive: pagesTransitions.exitActive,
					}}
				>
					<Pages>
						{pictures.map((picture, i) => {
							return (
								<Page
									onMouseEnter={() => {
										this.setState({
											currentPage: i,
											currentPicSrc: pictures[i].src
										});
									}}
									isActive={i === currentPage}
									key={i}
								/>
							);
						})}
					</Pages>
				</CSSTransition>
			</Container>
		);
	}
}

interface IPageProps {
	isActive: boolean;
}

const image = css`
  border-radius: 6px 6px 0 0;
`;

const Container = styled('div')`
	position: relative;
	user-select: none;
`;

const Pages = styled('div')`
  position: absolute;
	bottom: ${THEME.SECTION_PADDING_H}px;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Page = styled('i')<IPageProps>`
  width: 16px;
	height: 16px;
	opacity: .7;
	transition: transform .2s, opacity .2s;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:after {
		display: block;
		content: '';
		width: 4px;
		height: 4px;
		border-radius: 4px;
		background-color: #fff;
	}
	
	${(props: IPageProps) => {
		if(props.isActive) {
			return css`
				transform: scale(1.5);
				opacity: 1;
			`;
		}
	}}
`;

const pagesTransitions = {
	enter: css`
		transform: translateY(200%);
		opacity: 0;
	`,

	enterActive: css`
		transform: translateY(0%);
		transition: all ${PAGE_APPEAR_ANIMATION_TIME}ms;
		transition-timing-function: cubic-bezier(.175, .885, .390, 1.100);
		opacity: 1;
	`,

	exit: css`
		transform: translateY(0%);
		opacity: 1;
	`,

	exitActive: css`
		transform: translateY(200%);
		transition: all ${PAGE_APPEAR_ANIMATION_TIME}ms;
		opacity: 0;
	`,
};
