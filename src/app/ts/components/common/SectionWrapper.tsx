import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, THEME } from '../../theme';

interface IProps {
	styles?: StyleDeclaration
}

interface IState {

}

export class SectionWrapper extends React.Component<IProps, IState> {
	public render() {
		return (
			<section className={css(styles.sectionWrapper, this.props.styles)}>
				{this.props.children}
			</section>
		);
	}
}

const styles = StyleSheet.create({
	sectionWrapper: {
		padding: THEME.SECTION_PADDING
	}
});
