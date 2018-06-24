import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { THEME } from '../../theme';

interface IProps {
	title: string;
}

export class ModalHeader extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.header)}>
				<h2 className={css(styles.title)}>
					{this.props.title}
				</h2>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`
	},

	title: {
		margin: 0
	},
});
