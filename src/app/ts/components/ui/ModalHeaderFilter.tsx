import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import * as Ionicon from 'react-ionicons';
import Color = require('color');

interface IProps {
	title: string;
	color: Color;
	icon: string;
}

export class ModalHeaderFilter extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.header)}>
				<h2 className={css(styles.title)}>
					<i className={css(styles.icon)} style={{
						backgroundColor: this.props.color.toString()
					}}>
						<Ionicon
							icon={this.props.icon}
							fontSize="22px"
							color={COLORS.WHITE.toString()}
						/>
					</i>
					{this.props.title}
				</h2>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	title: {
		margin: 0,
		fontSize: THEME.FONT_SIZE_BIG,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	add: {
		backgroundColor: COLORS.BLUE.alpha(0.1).toString(),
		color: COLORS.BLUE.toString(),
		fontWeight: 600,
		height: 26,
		marginTop: 1,
		lineHeight: '26px',
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		borderRadius: 20,
		fontSize: THEME.FONT_SIZE_SMALL
	},

	icon: {
		width: 28,
		height: 28,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		marginRight: THEME.SECTION_PADDING_H / 2
	}
});
