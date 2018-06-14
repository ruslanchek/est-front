import { StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';

import { css } from 'aphrodite';
import { mergeStyles } from 'eo-utils';

type TDefaultDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement>;

interface IProps extends TDefaultDivProps {
}

export class Layout extends React.PureComponent<IProps, {}> {
	public render() {
		const { children, className, ...sharedProps } = this.props;

		return (
			<div {...sharedProps} {...mergeStyles(css(styles.page), className)}>
				{children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		minHeight: '100%'
	}
});
