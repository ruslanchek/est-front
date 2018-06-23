import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from './Modal';
import { PATHS } from '../../config';
import { ModalSubmit } from './ModalSubmit';
import { EModalSelectItemType, ModalSelect } from './ModalSelect';
import { ModalResetSubmit } from './ModalResetSubmit';

interface IProps {
	entities: string[];
	filterName: string;
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
			<React.Fragment>
				<div
					className={css(COMMON_STYLES.FILTER_BRICK)}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
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
				</div>

				<Modal
					isVisible={this.state.isOpen}
					title={this.props.filterName}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
					<ModalSelect
						items={[
							{
								id: 1,
								title: 'Flats',
								type: EModalSelectItemType.Plain,
								selected: false
							},

							{
								id: 2,
								title: 'Houses',
								type: EModalSelectItemType.Plain,
								selected: false
							},

							{
								id: 3,
								title: 'Studios',
								type: EModalSelectItemType.Plain,
								selected: false
							}
						]}
						onChange={() => {

						}}
					/>

					<ModalResetSubmit
						isResetEnabled={true}
						isSubmitEnabled={true}
						resetText="Reset"
						submitText="Confirm"
						onResetClick={() => {
							this.setState({
								isOpen: false
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

});
