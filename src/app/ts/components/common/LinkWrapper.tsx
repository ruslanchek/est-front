import { css, StyleSheet } from 'aphrodite/no-important';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export class LinkWrapper extends React.PureComponent<LinkProps, {}> {
	public render() {
		const { children, className, ...sharedProps } = this.props;

		return (
			<Link {...sharedProps} {...mergeStyles(css(styles.link), className)}>
				{children}
			</Link>
		);
	}
}

const styles = StyleSheet.create({
	link: {
		textDecoration: 'none'
	}
});
