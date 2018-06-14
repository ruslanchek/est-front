import { css, StyleSheet } from 'aphrodite';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';

import { COLORS, THEME } from '../../theme';
import { THtmlDivProps } from '../../utils';

interface IProps extends THtmlDivProps {}

export class SurfaceRow extends React.Component<IProps, {}> {
	public render() {
		const { className, children, ...sharedProps } = this.props;

		return (
			<div {...mergeStyles(css(styles.row), className)} {...sharedProps}>
				{children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		padding: THEME.SECTION_PADDING,
		borderBottom: `1px solid ${COLORS.GRAY_DARK.lighten(0.1).toString()}`,

		':last-of-type': {
			borderBottom: 'none'
		}
	}
});
