import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import { NumberFormat } from './NumberFormat';
import { CSSUtils } from '../../lib/CSSUtils';

interface IProps {
	min: number;
	max: number;
	currentMin: number;
	currentMax: number;
	step?: number;
}

interface IState {
	currentMin: number;
	currentMax: number;
	boundId: number;
}

export class Rheostat extends React.PureComponent<IProps, IState> {
	public static defaultProps: Partial<IProps> = {
		step: 1
	};

	public state: IState = {
		currentMin: 0,
		currentMax: 100,
		boundId: null
	};

	private bar = null;

	public componentDidMount() {
		this.setState({
			currentMin: this.props.currentMin,
			currentMax: this.props.currentMax
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
						style={{left: this.getValuePosition(currentMin) + '%', right: 100 - this.getValuePosition(currentMax) + '%'}}
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
						style={{left: this.getValuePosition(currentMin) + '%'}}
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
						style={{left: this.getValuePosition(currentMax) + '%'}}
					/>

					<span className={css(styles.value, styles.minValue)}>
						<NumberFormat value={currentMin}/>
					</span>

					<span className={css(styles.value, styles.maxValue)}>
						<NumberFormat value={currentMax}/>
					</span>
				</div>
			</div>
		);
	}

	private calculatePositions(clientX: number): void {
		const box: ClientRect = this.bar.getBoundingClientRect();
		const position: number = clientX - box.left;
		let value: number = this.getPositionValue(position);

		value = Math.round(value / this.props.step) * this.props.step;

		if(value < this.props.min || value > this.props.max) {
			return;
		}

		if(this.state.boundId === 1) {
			if(value > this.state.currentMax) {
				return;
			}

			this.setState({
				currentMin: value
			});
		}

		if(this.state.boundId === 2) {
			if(value < this.state.currentMin) {
				return;
			}

			this.setState({
				currentMax: value
			});
		}
	}

	private getValuePosition(value: number): number {
		const minMax: number = this.props.max - this.props.min;
		return (minMax / 100) * value;
	}

	private getPositionValue(position: number): number {
		const barBox: ClientRect = this.bar.getBoundingClientRect();
		return position / (barBox.width / 100);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 40,
		userSelect: 'none'
	},

	value: {
		position: 'absolute',
		top: 10
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
