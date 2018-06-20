import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	outerStyles?: StyleDeclaration;
}

export class Layout extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(COMMON_STYLES.LAYOUT_DESKTOP, COMMON_STYLES.LAYOUT_PHONE, this.props.outerStyles)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({

});
