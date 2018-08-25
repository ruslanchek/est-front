import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COLORS, THEME } from '../../theme';

interface IProps {
	min: number;
	max: number;
	currentMin: number;
	currentMax: number;
	renderValue: (value: number) => JSX.Element;
	onChange: (min: number, max: number) => void;
	step?: number;
}

interface IState {
	currentMin: number;
	currentMax: number;
	minPosition: number;
	maxPosition: number;
	boundId: number;
}

const HANDLE_SIZE: number = 20;
const BAR_SIZE: number = 3;

export class Rheostat extends React.PureComponent<IProps, IState> {
	public static defaultProps: Partial<IProps> = {
		step: 1,
	};

	public state: IState = {
		currentMin: 0,
		currentMax: 0,
		minPosition: 0,
		maxPosition: 0,
		boundId: null,
	};

	private bar = null;

	public componentDidMount() {
		this.setState({
			currentMin: this.props.currentMin,
			currentMax: this.props.currentMax,
		}, () => {
			this.calculateMinMaxPositions();
		});
	}

	public render() {
		const { currentMin, currentMax } = this.state;

		return (
			<Container
				onTouchMove={(e) => {
					if (e.touches && e.touches[0]) {
						this.calculatePositions(e.touches[0].clientX);
					}
				}}
				onTouchStart={(e) => {
					if (e.touches && e.touches[0]) {
						this.calculatePositions(e.touches[0].clientX);
					}
				}}
				onMouseMove={(e: any) => {
					this.calculatePositions(e.nativeEvent.clientX);
				}}
				onClick={(e: any) => {
					this.calculatePositions(e.nativeEvent.clientX);
				}}
				onMouseLeave={() => {
					this.setState({
						boundId: null,
					});
				}}
				onMouseUp={() => {
					this.setState({
						boundId: null,
					});
				}}
				onTouchEnd={() => {
					this.setState({
						boundId: null,
					});
				}}
				onTouchCancel={() => {
					this.setState({
						boundId: null,
					});
				}}
			>
				<Title>
					<FromTo>from</FromTo>
					{' '}
					{this.props.renderValue(currentMin)}
					{' '}
					<FromTo>to</FromTo>
					{' '}
					{this.props.renderValue(currentMax)}
				</Title>

				<Bar innerRef={(ref) => this.bar = ref}>
					<Line style={{
						left: this.state.minPosition + '%',
						right: 100 - this.state.maxPosition + '%',
					}}/>

					<Handle
						active={this.state.boundId === 1}
						left={`${this.state.minPosition}%`}
						onTouchStart={() => {
							this.setState({
								boundId: 1,
							});
						}}
						onMouseDown={() => {
							this.setState({
								boundId: 1,
							});
						}}
						onTouchEnd={() => {
							this.setState({
								boundId: null,
							});
						}}
						onTouchCancel={() => {
							this.setState({
								boundId: null,
							});
						}}
						onMouseUp={() => {
							this.setState({
								boundId: null,
							});
						}}
					/>

					<Handle
						active={this.state.boundId === 2}
						left={`${this.state.maxPosition}%`}
						onTouchStart={() => {
							this.setState({
								boundId: 2,
							});
						}}
						onMouseDown={() => {
							this.setState({
								boundId: 2,
							});
						}}
						onTouchEnd={() => {
							this.setState({
								boundId: null,
							});
						}}
						onTouchCancel={() => {
							this.setState({
								boundId: null,
							});
						}}
						onMouseUp={() => {
							this.setState({
								boundId: null,
							});
						}}
					/>

					<MinValue>
						{this.props.renderValue(this.props.min)}
					</MinValue>

					<MaxValue>
						{this.props.renderValue(this.props.max)}
					</MaxValue>
				</Bar>
			</Container>
		);
	}

	private calculateMinMaxPositions(): void {
		this.setState({
			minPosition: this.getValuePosition(this.state.currentMin),
			maxPosition: this.getValuePosition(this.state.currentMax),
		});
	}

	private calculatePositions(clientX: number): void {
		const box: ClientRect = this.bar.getBoundingClientRect();
		const position: number = clientX - box.left;

		let value: number = this.getPositionValue(position);
		let min: number = this.state.currentMin;
		let max: number = this.state.currentMax;

		value = Math.round(value / this.props.step) * this.props.step;

		if (value < this.props.min || value > this.props.max) {
			return;
		}

		if (this.state.boundId === 1) {
			if (value <= this.state.currentMax) {
				min = value;
			}
		}

		if (this.state.boundId === 2) {
			if (value >= this.state.currentMin) {
				max = value;
			}
		}

		this.setState({
			currentMin: min,
			currentMax: max,
		}, () => {
			this.calculateMinMaxPositions();
			this.props.onChange(this.state.currentMin, this.state.currentMax);
		});
	}

	private getValuePosition(value: number): number {
		if (this.bar) {
			return (value - this.props.min) / ((this.props.max - this.props.min) / 100);
		} else {
			return 0;
		}
	}

	private getPositionValue(x: number): number {
		if (this.bar) {
			const barBox: ClientRect = this.bar.getBoundingClientRect();
			return (x / (barBox.width / 100) * (this.props.max - this.props.min) / 100) + this.props.min;
		} else {
			return 0;
		}
	}
}

const Container = styled('div')`
	padding-bottom: 30px;
	user-select: none;
`;

const FromTo = styled('span')`
	color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
	font-weight: 400;
`;

const Value = styled('span')`
	position: absolute;
	top: 20px;
	color: ${COLORS.BLACK_LIGHT.toString()};
	font-size: ${THEME.FONT_SIZE_SMALL};
	font-weight: 600;
`;

const MinValue = styled(Value)`
	left: -${HANDLE_SIZE / 2}px;
`;

const MaxValue = styled(Value)`
	right: -${HANDLE_SIZE / 2}px;
`;

const Title = styled('div')`
	text-align: center;
	margin-bottom: ${THEME.SECTION_PADDING_V * 1.5}px;
	font-weight: 600;
`;

const Line = styled('i')`
	height: ${BAR_SIZE}px;
	background-color: ${COLORS.BLUE.toString()};
	border-radius: ${BAR_SIZE}px;
	display: block;
	top: 0px;
	position: absolute;
`;

const Bar = styled('div')`
	height: ${BAR_SIZE}px;
	position: relative;
	margin: 0 ${HANDLE_SIZE / 2}px;

	&:before {
		display: block;
		content: '';
		position: relative;
		top: 0;
		left: -${HANDLE_SIZE / 2}px;
		width: 100%;
		padding: 0 ${HANDLE_SIZE / 2}px;
		height: ${BAR_SIZE}px;
		border-radius: ${BAR_SIZE}px;
		background-color: ${COLORS.GRAY_DARK.toString()};
		box-shadow: inset 0 1px 1px ${COLORS.BLACK.alpha(.1).toString()};
	}
`;

interface IHandleProps {
	left: string;
	active: boolean;
}

const Handle = styled('i')`
	height: ${HANDLE_SIZE}px;
	width: ${HANDLE_SIZE}px;
	border-radius: ${HANDLE_SIZE}px;
	position: absolute;
	box-sizing: border-box;
	top: 50%;
	margin: -${HANDLE_SIZE / 2}px 0 0 -${HANDLE_SIZE / 2}px;
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
	cursor: pointer;
	transition: transform .2s, background-color .2s;
	border: 2px solid ${COLORS.WHITE.toString()};
	left: ${(props: IHandleProps) => props.left};

	&:hover {
		background-color: ${COLORS.BLUE.lighten(.2).toString()};
		transform: scale(1.1);
	}
	
	${(props: IHandleProps) => props.active ? css`
		background-color: ${COLORS.BLUE.toString()};
		transform: scale(1.05);
	` : css`
		background-color: ${COLORS.BLUE.lighten(.4).toString()};
		transform: scale(1);
	`};
`;
