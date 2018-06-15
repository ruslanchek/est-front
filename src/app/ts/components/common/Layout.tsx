import { StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';

import { css } from 'aphrodite';
import { COLORS } from '../../theme';

interface IProps {
}

export class Layout extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.page)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		minHeight: '100%',
		color: COLORS.BLACK.toString()
	}
});
