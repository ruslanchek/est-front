import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from './Modal';
import { PATHS } from '../../config';
import { ModalSubmit } from './ModalSubmit';

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
					<a
						href="#"
						className={css(COMMON_STYLES.LINK, styles.selectable)}
					>
						Flats
					</a>

					<a
						href="#"
						className={css(COMMON_STYLES.LINK, styles.selectable)}
					>
						Houses
					</a>

					<a
						href="#"
						className={css(COMMON_STYLES.LINK, styles.selectable)}
					>
						Studios
					</a>

					<ModalSubmit isEnabled={true} onClick={() => {
						this.setState({
							isOpen: false
						});
					}}/>
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
	selectable: {
		display: 'block',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		borderTop: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_DARK.toString(),
		},
	},
});
