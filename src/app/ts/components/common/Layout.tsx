import * as React from 'react';
import { mq } from '../../lib/CSSUtils';
import { THEME } from '../../theme';
import styled from 'react-emotion';

interface IProps {
	topPadding?: boolean;
	bottomPadding?: boolean;
}

export const Layout = styled('div')<IProps>`
	position: relative;
	max-width: ${THEME.PAGE_MAX_WIDTH}px;
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	
	${mq.desktop} {
		padding-left: ${THEME.PAGE_SIDE_PADDING_DESKTOP}px;
		padding-right: ${THEME.PAGE_SIDE_PADDING_DESKTOP}px;
		padding-top: ${(props: IProps) => props.topPadding ? THEME.PAGE_SIDE_PADDING_DESKTOP : 0}px;
		padding-bottom: ${(props: IProps) => props.bottomPadding ? THEME.PAGE_SIDE_PADDING_DESKTOP : 0}px;
	}
	
	${mq.phoneOrTablet} {
		padding-left: ${THEME.PAGE_SIDE_PADDING_PHONE}px;
		padding-right: ${THEME.PAGE_SIDE_PADDING_PHONE}px;
		padding-top: ${(props: IProps) => props.topPadding ? THEME.PAGE_SIDE_PADDING_PHONE : 0}px;
		padding-bottom: ${(props: IProps) => props.bottomPadding ? THEME.PAGE_SIDE_PADDING_PHONE : 0}px;
	}
`;
