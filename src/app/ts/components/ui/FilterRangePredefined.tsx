import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { IFilter } from '../../managers/FiltersManager';
import { COLORS, THEME } from '../../theme';

interface IProps {
	groupName: string;
	filter: IFilter;
}

interface IState {
	isVisible: boolean;
}

export class FilterRangePredefined extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isVisible: false
	};

	public render() {
		const { filter, groupName } = this.props;

		return (
			<div className={css(styles.container)}>
				<div className={css(styles.label)}>
					{filter.title}
				</div>

				<div className={css(styles.current)} onClick={this.toggle.bind(this)}>
					<div>
						{filter.value}
					</div>
				</div>
			</div>
		);
	}

	private toggle(): void {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}
}

const styles = StyleSheet.create({
	container: {

	},

	content: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`
	},

	current: {
		borderRadius: 4,
		backgroundColor: COLORS.GRAY_EXTRA_DARK.toString(),
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		fontSize: THEME.FONT_SIZE_SMALL,
		height: 26,
		lineHeight: '26px',
		width: 100
	},

	label: {
		fontSize: THEME.FONT_SIZE_SMALL
	},
});
