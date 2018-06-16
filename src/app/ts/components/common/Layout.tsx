import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { THEME } from '../../theme';

interface IProps {
	outerStyles?: StyleDeclaration;
}

export class Layout extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.layout, styles.layoutDesktop, styles.layoutPhone, this.props.outerStyles)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		position: 'relative',
		maxWidth: THEME.PAGE_MAX_WIDTH,
		margin: '0 auto',
		padding: `0 ${THEME.PAGE_SIDE_PADDING_DESKTOP}px 0`
	},

	layoutDesktop: {
		padding: `0 ${THEME.PAGE_SIDE_PADDING_PHONE}px 0`
	},

	layoutPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		padding: `0 ${THEME.PAGE_SIDE_PADDING_PHONE}px 0`
	}),
});
