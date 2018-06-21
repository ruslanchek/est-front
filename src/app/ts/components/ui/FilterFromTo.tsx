import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	from: string;
	to: string;
}

export class FilterFromTo extends React.PureComponent<IProps, {}> {
	public render() {
		const {from, to} = this.props;

		return (
			<div className={css(COMMON_STYLES.FILTER_BRICK)}>
				from <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>{from}</strong>
				{' '}
				to <strong className={css(COMMON_STYLES.FILTER_ACCENT)}>{to}</strong>
			</div>
		);
	}
}

const styles = StyleSheet.create({

});
