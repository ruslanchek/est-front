import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';
import { NumberFormat } from './NumberFormat';

interface IProps {
	min: number;
	currentMin: number;
	max: number;
	currentMax: number;
}

interface IState {
	currentMin: number;
	currentMax: number;
	width: number;
}

export class Rheostat extends React.PureComponent<IProps, IState> {
	public state: IState = {
		currentMin: 0,
		currentMax: 100,
		width: 0
	};

	private bar = null;

	public componentDidMount() {
		this.setState({
			currentMin: this.props.currentMin,
			currentMax: this.props.currentMax
		});

		this.countSize();
	}


	public render() {
		const {currentMin, currentMax, width} = this.state;

		return (
			<div className={css(styles.container)}>
				<div className={css(styles.title)}>
					Price range
				</div>

				<div className={css(styles.bar)} ref={(ref) => this.bar = ref}>
					<i className={css(styles.line)} style={{left: this.getValuePosition(currentMin) + '%', right: 100 - this.getValuePosition(currentMax) + '%'}}/>
					<i className={css(styles.handle)} style={{left: this.getValuePosition(currentMin) + '%'}}/>
					<i className={css(styles.handle)} style={{left: this.getValuePosition(currentMax) + '%'}}/>

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

	private getValuePosition(value: number) {
		const minMax: number = this.props.max - this.props.min;
		return (minMax / 100) * value;
	}

	private countSize(): void {
		const barBox: ClientRect = this.bar.getBoundingClientRect();

		this.setState({
			width: barBox.width
		});
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 40
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
		transition: 'all .2s',
		border: `2px solid ${COLORS.WHITE.toString()}`,

		':hover': {
			backgroundColor: COLORS.BLUE.lighten(1.2).toString(),
			transform: 'translate(-50%, -50%) scale(1.1)',
		}
	}
});
