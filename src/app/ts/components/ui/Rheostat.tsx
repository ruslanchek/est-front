import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import { CSSUtils } from '../../lib/CSSUtils';

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

export class Rheostat extends React.PureComponent<IProps, IState> {
	public static defaultProps: Partial<IProps> = {
		step: 1
	};

	public state: IState = {
		currentMin: 0,
		currentMax: 0,
		minPosition: 0,
		maxPosition: 0,
		boundId: null
	};

	private bar = null;

	public componentDidMount() {
		this.setState({
			currentMin: this.props.currentMin,
			currentMax: this.props.currentMax
		}, () => {
			this.calculateMinMaxPositions();
		});
	}

	public render() {
		const {currentMin, currentMax} = this.state;

		return (
			<div
				className={css(styles.container)}
				onTouchMove={(e) => {
					if(e.touches && e.touches[0]) {
						this.calculatePositions(e.touches[0].clientX);
					}
				}}
				onTouchStart={(e) => {
					if(e.touches && e.touches[0]) {
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
						boundId: null
					});
				}}
				onMouseUp={() => {
					this.setState({
						boundId: null
					});
				}}
				onTouchEnd={() => {
					this.setState({
						boundId: null
					});
				}}
				onTouchCancel={() => {
					this.setState({
						boundId: null
					});
				}}
			>
				<div className={css(styles.title)}>
					Price range
				</div>

				<div
					className={css(styles.bar)}
					ref={(ref) => this.bar = ref}
				>
					<i
						className={css(styles.line)}
						style={{left: this.state.minPosition + '%', right: 100 - this.state.maxPosition + '%'}}
					/>

					<i
						onTouchStart={() => {
							this.setState({
								boundId: 1
							});
						}}
						onMouseDown={() => {
							this.setState({
								boundId: 1
							});
						}}
						onTouchEnd={() => {
							this.setState({
								boundId: null
							});
						}}
						onTouchCancel={() => {
							this.setState({
								boundId: null
							});
						}}
						onMouseUp={() => {
							this.setState({
								boundId: null
							});
						}}
						{...CSSUtils.mergeStyles(
							css(styles.handle),
							this.state.boundId === 1 && css(styles.handleActive)
						)}
						style={{left: this.state.minPosition + '%'}}
					/>

					<i
						onTouchStart={() => {
							this.setState({
								boundId: 2
							});
						}}
						onMouseDown={() => {
							this.setState({
								boundId: 2
							});
						}}
						onTouchEnd={() => {
							this.setState({
								boundId: null
							});
						}}
						onTouchCancel={() => {
							this.setState({
								boundId: null
							});
						}}
						onMouseUp={() => {
							this.setState({
								boundId: null
							});
						}}
						{...CSSUtils.mergeStyles(
							css(styles.handle),
							this.state.boundId === 2 && css(styles.handleActive)
						)}
						style={{left: this.state.maxPosition + '%'}}
					/>

					<span className={css(styles.value, styles.minValue)}>
						{this.props.renderValue(currentMin)}
					</span>

					<span className={css(styles.value, styles.maxValue)}>
						{this.props.renderValue(currentMax)}
					</span>
				</div>
			</div>
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

		if(value < this.props.min || value > this.props.max) {
			return;
		}

		if(this.state.boundId === 1) {
			if(value <= this.state.currentMax) {
				min = value;
			}
		}

		if(this.state.boundId === 2) {
			if(value >= this.state.currentMin) {
				max = value;
			}
		}

		this.setState({
			currentMin: min,
			currentMax: max
		}, () => {
			this.calculateMinMaxPositions();
			this.props.onChange(this.state.currentMin, this.state.currentMax);
		});
	}

	private getValuePosition(value: number): number {
		if(this.bar) {
			return (value - this.props.min) / ((this.props.max - this.props.min) / 100);
		} else {
			return 0;
		}
	}

	private getPositionValue(x: number): number {
		if(this.bar) {
			const barBox: ClientRect = this.bar.getBoundingClientRect();
			return (x / (barBox.width / 100) * (this.props.max - this.props.min) / 100) + this.props.min;
		} else {
			return 0;
		}
	}
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 30,
		userSelect: 'none'
	},

	value: {
		position: 'absolute',
		top: 20,
		color: COLORS.BLACK_LIGHT.toString(),
		fontSize: THEME.FONT_SIZE_SMALL,
		fontWeight: 600
	},

	minValue: {
		left: 0
	},

	maxValue: {
		right: 0
	},

	title: {
		textAlign: 'center',
		marginBottom: THEME.SECTION_PADDING_V,
		fontWeight: 600
	},

	bar: {
		height: 5,
		position: 'relative',
		borderRadius: 5,
		backgroundColor: COLORS.GRAY_DARK.toString(),
		boxShadow: `inset 0 1px 1px ${COLORS.BLACK.alpha(.1).toString()}`
	},

	line: {
		height: 5,
		backgroundColor: COLORS.BLUE.toString(),
		borderRadius: 5,
		display: 'block',
		position: 'absolute'
	},

	handle: {
		height: 20,
		width: 20,
		borderRadius: 20,
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: COLORS.GRAY_LIGHT.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1,
		cursor: 'pointer',
		transition: 'transform .2s, background-color .2s',
		border: `2px solid ${COLORS.WHITE.toString()}`,

		':hover': {
			backgroundColor: COLORS.BLUE.lighten(1.2).toString(),
			transform: 'translate(-50%, -50%) scale(1.1)',
		}
	},

	handleActive: {
		backgroundColor: COLORS.BLUE.lighten(1).toString(),
		transform: 'translate(-50%, -50%) scale(1.05)',

		':hover': {
			backgroundColor: COLORS.BLUE.lighten(1).toString(),
			transform: 'translate(-50%, -50%) scale(1.05)',
		}
	}
});
