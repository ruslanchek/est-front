import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { Link } from 'react-router-dom';
import { PATHS } from '../../config';
import Color = require('color');
import { CSSUtils } from '../../lib/CSSUtils';
import { COLORS, THEME } from '../../theme';

interface IProps {
	color1: Color;
	color2: Color;
	title: string;
	subtitle: string;
	containerStyles?: StyleDeclaration;
}

export class SpecialBrick extends React.PureComponent<IProps, {}> {
	public render() {
		const { color1, color2, title, subtitle, containerStyles } = this.props;

		return (
			<div className={css(containerStyles)}>
				<Link to={PATHS.HOME} className={css(styles.container)} style={{
					backgroundColor: color1.toString(),
					backgroundImage: CSSUtils.linearGradient(10, color1, color2, 10, 100),
				}}>
					<span className={css(styles.inner)}>
						<span className={css(styles.title)}>
							{title}
						</span>

						<span className={css(styles.subtitle)}>
							{subtitle}
						</span>
					</span>
				</Link>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'block',
		borderRadius: 10,
		overflow: 'hidden',
		color: COLORS.WHITE.toString(),
		textDecoration: 'none',
		paddingTop: '40%',
		position: 'relative',
		boxShadow: THEME.BOX_SHADOW_ELEVATION_1,
	},

	inner: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		boxSizing: 'border-box',
		padding: `${THEME.SECTION_PADDING_V}px ${THEME.SECTION_PADDING_H}px`,
		textShadow: '0 1px 1px rgba(0, 0, 0, .1)'
	},

	title: {
		fontSize: THEME.FONT_SIZE_BIG,
		textTransform: 'uppercase',
		fontWeight: 800,
		marginBottom: '.25em',
	},

	subtitle: {
		fontSize: THEME.FONT_SIZE_SMALL,
		textTransform: 'uppercase',
		opacity: .75,
	},
});
