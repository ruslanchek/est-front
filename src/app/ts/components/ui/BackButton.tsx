import { css, StyleSheet } from 'aphrodite/no-important';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';

import { THtmlButtonProps } from '../../utils';

interface IProps extends THtmlButtonProps {}

export class BackButton extends React.PureComponent<IProps, {}> {
	public render() {
		const { children, className, ...sharedProps } = this.props;

		return (
			<button {...sharedProps} {...mergeStyles(css(styles.button), className)}>
				<svg
					width="22"
					height="10"
					viewBox="0 0 44 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M44 10.005c0-.637-.512-1.153-1.145-1.153H3.89l6.85-6.894a1.147 1.147 0 0 0 0-1.62 1.13 1.13 0 0 0-1.61 0L.334 9.19a1.147 1.147 0 0 0 0 1.62l8.794 8.853c.224.225.512.337.81.337a1.147 1.147 0 0 0 .81-1.958l-6.85-6.894h38.975c.614 0 1.126-.506 1.126-1.143z"
						fill="currentColor"
						fillRule="nonzero"
					/>
				</svg>
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: 44,
		height: 44,
		padding: 0,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'transparent',
		border: 'none',
		outline: 'none',
		color: '#c5ccd6'
	}
});
