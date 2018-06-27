import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { ModalHeaderFilter } from './ModalHeaderFilter';
import { Rheostat } from './Rheostat';
import { ModalResetSubmit } from './ModalResetSubmit';
import { ModalContext } from './ModalContext';

interface IProps {
	from: number;
	to: number;
	filterName: string;
	renderValue: (value: number) => JSX.Element;
	styles?: StyleDeclaration;
}

interface IState {
	isOpen: boolean;
	from: number;
	to: number;
}

export class FilterFromTo extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
		from: 0,
		to: 0
	};

	public componentDidMount() {
		this.setState({
			from: this.props.from,
			to: this.props.to
		});
	}

	public render() {
		return (
			<div className={css(styles.container)}>
				<div
					className={css(COMMON_STYLES.FILTER_BRICK, this.props.styles)}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					<span>
						from <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>{this.props.renderValue(this.props.from)}</strong>
						{' '}
						to <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>{this.props.renderValue(this.props.to)}</strong>
					</span>
				</div>

				<ModalContext
					isVisible={this.state.isOpen}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.GREEN}
						icon="md-git-commit"
						title={this.props.filterName}
					/>

					<div className={css(styles.rheostat)}>
						<Rheostat
							min={this.props.from}
							max={this.props.to}
							step={10000}
							currentMin={this.state.from}
							currentMax={this.state.to}
							renderValue={this.props.renderValue}
							onChange={(min: number, max: number) => {
								this.setState({
									from: min,
									to: max
								});
							}}
						/>
					</div>

					<ModalResetSubmit
						isResetEnabled={true}
						isSubmitEnabled={true}
						resetText="Reset"
						submitText="Confirm"
						onResetClick={() => {
							this.setState({
								from: this.props.from,
								to: this.props.to
							});
						}}
						onSubmitClick={() => {
							this.setState({
								isOpen: false
							});
						}}
					/>
				</ModalContext>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},

	rheostat: {
		padding: 20,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
	}
});
