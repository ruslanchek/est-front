import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	outerStyles?: StyleDeclaration;
	verticalPadding?: boolean;
}

export class Layout extends React.PureComponent<IProps, {}> {
	public render() {
		const verticalSpace = [];

		if(this.props.verticalPadding) {
			verticalSpace.push(styles.layout, styles.layoutPhone);
		}

		return (
			<div
				className={
					css(COMMON_STYLES.LAYOUT_DESKTOP,
					COMMON_STYLES.LAYOUT_PHONE_OR_TABLET,
					this.props.outerStyles,
					verticalSpace
				)}
			>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		paddingTop: THEME.PAGE_SIDE_PADDING_DESKTOP,
	},

	layoutPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingTop: THEME.PAGE_SIDE_PADDING_PHONE,
	}),
});
