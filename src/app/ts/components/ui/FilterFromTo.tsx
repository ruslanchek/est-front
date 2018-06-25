import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from './Modal';
import { ModalHeaderFilter } from './ModalHeaderFilter';
import { Rheostat } from './Rheostat';
import { ModalResetSubmit } from './ModalResetSubmit';

interface IProps {
	from: number;
	to: number;
	filterName: string;
	renderValue: (value: number) => JSX.Element;
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
			<React.Fragment>
				<div
					className={css(COMMON_STYLES.FILTER_BRICK)}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					from <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>{this.props.renderValue(this.state.from)}</strong>
					{' '}
					to <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>{this.props.renderValue(this.state.to)}</strong>
				</div>

				<Modal
					isVisible={this.state.isOpen}
					header={
						<ModalHeaderFilter
							title={this.props.filterName}
						/>
					}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
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
				</Modal>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	rheostat: {
		padding: 20
	}
});
