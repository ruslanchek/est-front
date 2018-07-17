import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { COMMON_STYLES, THEME } from '../../theme';
import styled from 'styled-components';
import media from "styled-media-query";

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
			<Container
				className={
					css(COMMON_STYLES.LAYOUT_DESKTOP,
					COMMON_STYLES.LAYOUT_PHONE_OR_TABLET,
					this.props.outerStyles,
					verticalSpace
				)}
			>
				{this.props.children}
			</Container>
		);
	}
}

const Container = styled.div`
	position: relative;
	max-width: ${THEME.PAGE_MAX_WIDTH}px;
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	padding-left: ${THEME.PAGE_SIDE_PADDING_DESKTOP}px;
	padding-right: ${THEME.PAGE_SIDE_PADDING_DESKTOP}px;
	padding-top: 0;
	
	 ${media.lessThan('medium')`
    padding-top: 100px;
  `}
`;

const styles = StyleSheet.create({
	layout: {
		paddingTop: THEME.PAGE_SIDE_PADDING_DESKTOP,
	},

	layoutPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		paddingTop: THEME.PAGE_SIDE_PADDING_PHONE,
	}),
});
