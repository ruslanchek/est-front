import { css, StyleSheet } from 'aphrodite';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';

import { COLORS, THEME } from '../../theme';
import { THtmlDivProps } from '../../utils';

interface IProps extends THtmlDivProps {
	styles?: StyleSheetList;
}

export class SectionTitle extends React.Component<IProps, {}> {
	public render() {
		const { className, children, ...sharedProps } = this.props;

		return (
			<div
				{...sharedProps}
				{...mergeStyles(css(styles.sectionTitle), className)}
			>
				{children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	sectionTitle: {
		marginBottom: 10,
		fontSize: THEME.FONT_SIZE_SMALL,
		color: COLORS.VIOLET_LIGHT.toString()
	}
});
