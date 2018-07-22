import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	outerStyles?: StyleDeclaration;
	topPadding?: boolean;
	bottomPadding?: boolean;
}

export class Layout extends React.PureComponent<IProps, {}> {
	public render() {
		const verticalSpace = [];

		if(this.props.topPadding) {
			verticalSpace.push(styles.topPadding, styles.topPaddingPhone);
		}

		if(this.props.bottomPadding) {
			verticalSpace.push(styles.bottomPadding, styles.bottomPaddingPhone);
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
	topPadding: {
		paddingTop: THEME.PAGE_SIDE_PADDING_DESKTOP,
	},

	topPaddingPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingTop: THEME.PAGE_SIDE_PADDING_PHONE,
	}),

	bottomPadding: {
		paddingBottom: THEME.PAGE_SIDE_PADDING_DESKTOP,
	},

	bottomPaddingPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingBottom: THEME.PAGE_SIDE_PADDING_PHONE,
	}),
});
