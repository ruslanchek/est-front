import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../modals/ModalSelect';
import { ModalResetSubmit } from '../modals/ModalResetSubmit';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { ModalContext } from '../modals/ModalContext';

interface IProps {
	entities: string[];
	filterName: string;
	styles?: StyleDeclaration;
}

interface IState {
	isOpen: boolean;
}

export class FilterAnd extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		const { entities } = this.props;

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
						{entities.map((entity, i) => {
							return (
								<React.Fragment key={i}>
									<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
										{entity}
									</strong>

									{this.getSeparator(i)}
								</React.Fragment>
							);
						})}
					</span>
				</div>

				<ModalContext
					isVisible={this.state.isOpen}
					onClose={() => {
						this.setState({
							isOpen: false
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.BLUE}
						icon="md-home"
						title={this.props.filterName}
					/>

					<ModalSelect
						items={[
							{
								id: 1,
								title: 'Flats',
								type: EModalSelectItemType.Plain,
								selected: true
							},

							{
								id: 2,
								title: 'Houses',
								type: EModalSelectItemType.Plain,
								selected: true
							},

							{
								id: 3,
								title: 'Studios',
								type: EModalSelectItemType.Plain,
								selected: true
							}
						]}
						onChange={() => {
							this.setState({
								isOpen: true
							});
						}}
					/>

					<ModalResetSubmit
						isResetEnabled={true}
						isSubmitEnabled={true}
						resetText="Reset"
						submitText="Confirm"
						onResetClick={() => {
							this.setState({

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

	private getSeparator(i: number): string {
		const { entities } = this.props;

		if (entities.length - 2 > i) {
			return ', ';
		}

		if (entities.length - 2 === i) {
			return ' and ';
		}

		return '';
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	}
});
