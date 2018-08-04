import * as React from 'react';
import * as Ionicon from 'react-ionicons';

import { css, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { ModalResetSubmit } from '../modals/ModalResetSubmit';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { ModalContext } from '../modals/ModalContext';
import { CSSUtils } from '../../lib/CSSUtils';
import Color = require('color');

interface IProps {

}

interface IState {
	isOpen: boolean;
}

export class FilterAdd extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		return (
			<div
				className={css(COMMON_STYLES.FILTER_BRICK, styles.add)}
				onClick={() => {
					this.setState({
						isOpen: true,
					});
				}}
			>
				<span>
					+ Add new filter
				</span>

				<ModalContext
					isVisible={this.state.isOpen}
					onClose={() => {
						this.setState({
							isOpen: false,
						});
					}}
				>
					<ModalHeaderFilter
						color={COLORS.BLACK_LIGHT}
						icon="md-list"
						title="Add new filter"
					/>

					<div className={css(styles.filters)}>
						<div className={css(styles.filterItem)}>
							<span className={css(styles.itemIcon)}>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</span>

							<span className={css(styles.itemTitle)}>
								Select property type
							</span>
						</div>

						<div className={css(styles.filterItem)}>
							<span className={css(styles.itemIcon)}>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</span>

							<span className={css(styles.itemTitle)}>
								Select property type
							</span>
						</div>

						<div className={css(styles.filterItem)}>
							<span className={css(styles.itemIcon)}>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</span>

							<span className={css(styles.itemTitle)}>
								Select property type
							</span>
						</div>

						<div className={css(styles.filterItem)}>
							<span className={css(styles.itemIcon)}>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</span>

							<span className={css(styles.itemTitle)}>
								Select property type
							</span>
						</div>

						<div className={css(styles.filterItem)}>
							<span className={css(styles.itemIcon)}>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</span>

							<span className={css(styles.itemTitle)}>
								Select property type
							</span>
						</div>

						<div
							className={css(styles.filterItem)}
						>
							<span className={css(styles.itemIcon)}>
								<Ionicon
									icon="md-home"
									fontSize="32px"
									color={COLORS.GRAY_EXTRA_DARK.toString()}
								/>
							</span>

							<span className={css(styles.itemTitle)}>
								Select property type
							</span>
						</div>
					</div>
				</ModalContext>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	add: {
		backgroundColor: COLORS.BLUE_LIGHT.toString(),
		color: COLORS.BLUE.toString(),
		fontWeight: 600,
		borderRadius: 4,
		position: 'relative',

		':hover': {
			backgroundColor: COLORS.BLUE_LIGHT_ACTIVE.toString(),
		},
	},

	filters: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `${THEME.SECTION_PADDING_V / 2}px ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
		flexWrap: 'wrap',
	},

	filterItem: {
		padding: THEME.SECTION_PADDING_H / 2,
		borderRadius: 6,
		width: '48%',
		boxSizing: 'border-box',
		height: 100,
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		border: `1px solid ${COLORS.GRAY_DARK}`,
		marginTop: 10,
		cursor: 'pointer',
		transition: 'border-color .2s',

		':hover': {
			borderColor: COLORS.GRAY_DARK.darken(.2).toString(),
		}
	},

	itemTitle: {
		fontWeight: 400,
		whiteSpace: 'normal',
		color: COLORS.BLACK_LIGHT.toString(),
	},

	itemIcon: {
		alignSelf: 'flex-start',
		marginBottom: 10,
	},
});
