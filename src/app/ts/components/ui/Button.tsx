import { css, StyleSheet } from 'aphrodite/no-important';
import * as Color from 'color';
import { mergeStyles } from 'eo-utils';
import * as React from 'react';

import { COLORS, THEME } from '../../theme';
import { THtmlButtonProps } from '../../utils';
import { type } from 'os';

export enum EButtonTheme {
	Primary = 'primary',
	Secondary = 'secondary',
	Small = 'small',
	BigText = 'bigText'
}

interface IProps extends THtmlButtonProps {
	block?: boolean;
	theme?: EButtonTheme[];
}

export class Button extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		block: false,
		theme: [EButtonTheme.Primary]
	};

	public render() {
		const {
			block,
			children,
			className,
			style,
			theme,
			...sharedProps
		} = this.props;

		const themes = theme.map((item) => {
			return styles[item];
		});

		return (
			<button
				{...mergeStyles(
					css(styles.button),
					css(themes),
					block && css(styles.block),
					className,
					style
				)}
				{...sharedProps}
			>
				{children}
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		border: 'none',
		borderRadius: 8,
		boxSizing: 'border-box',
		fontSize: 14,
		outline: 'none',
		height: 60,
		lineHeight: '60px',
		textAlign: 'center',
		padding: 0
	},

	block: {
		display: 'block',
		width: '100%'
	},

	primary: {
		backgroundImage: `radial-gradient(farthest-side at 30% 0px, ${COLORS.GREEN_LIGHT} 0%, ${COLORS.GREEN_DARK} 300px)`,
		boxShadow: `0 10px 20px 3px ${Color('#089981').alpha(0.4).toString()}`,
		color: COLORS.WHITE.toString()
	},

	secondary: {
		backgroundColor: COLORS.WHITE.toString(),
		color: COLORS.VIOLET_DARK.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2,
		transition: 'background-color .2s',

		':hover': {
			backgroundColor: COLORS.GRAY_LIGHT.toString(),
		}
	},

	small: {
		height: 40,
		lineHeight: '40px'
	},

	bigText: {
		fontSize: THEME.FONT_SIZE_BIG,
		fontWeight: 600
	}
});
