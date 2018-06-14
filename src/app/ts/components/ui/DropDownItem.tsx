import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';
import { COLORS } from '../../theme';

export type TDropDownItemValue = string | number;

export interface IDropDownItemProps {
	value: TDropDownItemValue;

	onClick?(value: TDropDownItemValue): void;
}

export class DropDownItem extends React.PureComponent<IDropDownItemProps, {}> {
	public render() {
		return <li className={css(styles.item)} onClick={this.handleClick}>{this.props.children}</li>;
	}

	private handleClick = () => {
		const { onClick, value } = this.props;

		if (onClick) {
			onClick(value);
		}
	};
}

const styles = StyleSheet.create({
	item: {
		borderBottom: `1px solid ${COLORS.GRAY}`,
		boxSizing: 'border-box',
		color: '#332966',
		display: 'block',
		fontSize: 16,
		lineHeight: '24px',
		padding: '13px 24px',
		width: '100%',

		':last-child': {
			borderBottom: 'none'
		}
	}
});
