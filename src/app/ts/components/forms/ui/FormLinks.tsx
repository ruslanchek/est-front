import * as React from 'react';
import { THEME } from '../../../theme';
import { css, StyleSheet } from 'aphrodite';

interface IProps {
	text?: string;
}

export class FormLinks extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.links)}>
				{this.props.children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	links: {
		padding: `0 ${THEME.SECTION_PADDING_H}px ${THEME.SECTION_PADDING_V}px`,
		display: 'flex',
		justifyContent: 'center',
	},
});
