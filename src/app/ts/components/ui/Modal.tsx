import { css, StyleSheet } from 'aphrodite/no-important';
import * as React from 'react';

import { COLORS } from '../../theme';
import { Portal } from './Portal';
import { mergeStyles } from 'eo-utils';

interface IProps {
	containerClassName?: string;
	contentClassName?: string;

	onClickOnOverlay?(): void;
}

export class Modal extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Portal>
				<div
					{...mergeStyles(css(styles.container), this.props.containerClassName)}
					onClick={this.handleClickOnOverlay}
				>
					<div
						{...mergeStyles(css(styles.content), this.props.contentClassName)}
						onClick={this.handleClickOnContent}
					>
						{React.Children.only(this.props.children)}
					</div>
				</div>
			</Portal>
		);
	}

	private handleClickOnOverlay = () => {
		if (this.props.onClickOnOverlay) {
			this.props.onClickOnOverlay();
		}
	};

	private handleClickOnContent = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
	};
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: COLORS.GREEN_DARK.alpha(0.5).toString(),
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		left: 0,
		padding: 15,
		position: 'fixed',
		right: 0,
		overflow: 'auto',
		top: 0,
		zIndex: 9999
	},

	content: {
		backgroundColor: '#fafcff',
		border: '1px solid white',
		borderRadius: 8,
		boxShadow: '0 8px 10px 0 rgba(21,30,48,0.10)',
		margin: 'auto',
		width: '100%',
	}
});
