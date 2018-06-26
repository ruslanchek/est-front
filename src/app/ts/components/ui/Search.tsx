import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, THEME } from '../../theme';
import * as Ionicon from 'react-ionicons';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';

interface IProps {

}

interface IState {
	isFocused: boolean;
	value: string;
}

const HEIGHT: number = 40;

export class Search extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isFocused: false,
		value: '',
	};

	private input = null;

	public render() {
		const { isFocused, value } = this.state;

		return (
			<div className={css(styles.container)}>
				<label htmlFor="search" className={css(styles.prefix)}>
					<div className={css(styles.icon)}>
						<Ionicon
							icon="md-search"
							fontSize="24px"
							color={COLORS.BLACK.toString()}
						/>
					</div>

					<span
						{...CSSUtils.mergeStyles(
							css(styles.iconText, styles.iconTextPhone),
							(isFocused || value) && css(styles.iconTextFocused),
						)}
					>
						Search
					</span>
				</label>

				<div className={css(styles.inputHolder)}>
					<input
						onFocus={() => {
							this.setState({
								isFocused: true,
							});
						}}
						onBlur={() => {
							this.setState({
								isFocused: false,
							});
						}}
						onChange={(e) => {
							this.setState({
								value: e.target.value,
							});
						}}
						onKeyDown={(e) => {
							this.setState({
								value: this.input.value
							});
						}}
						id="search"
						type="text"
						ref={(ref) => this.input = ref}
						className={css(styles.input)}
					/>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		position: 'relative',
		height: HEIGHT,
	},

	icon: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	iconText: {
		marginLeft: THEME.SECTION_PADDING_H / 2,
		transition: 'transform .2s, opacity .2s',
	},

	iconTextPhone: CSSUtils.mediaSize(ECSSMediaKind.Phone, {
		display: 'none',
	}),

	iconTextFocused: {
		opacity: 0,
		transform: 'scale(.8)',
	},

	inputHolder: {
		flexGrow: 1,
	},

	prefix: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px`,
		position: 'absolute',
		height: HEIGHT,
		fontSize: THEME.FONT_SIZE_REGULAR,
		top: 0,
		left: 0,
		pointerEvents: 'none'
	},

	input: {
		width: '100%',
		backgroundColor: COLORS.GRAY_DARK.toString(),
		padding: `0 ${THEME.SECTION_PADDING_H / 2}px 0 40px`,
		outline: 'none',
		borderRadius: 5,
		height: HEIGHT,
		lineHeight: 'HEIGHTpx',
		fontSize: THEME.FONT_SIZE_REGULAR,
		border: `1px solid ${COLORS.GRAY_DARK.toString()}`,
		fontWeight: 600,
		color: COLORS.BLACK.toString(),
		transition: 'border-color .2s',
		boxSizing: 'border-box',

		':hover': {
			borderColor: COLORS.GRAY_DARK.darken(.05).toString(),
		},

		':focus': {
			borderColor: COLORS.GRAY_DARK.darken(.1).toString(),
		},
	},
});
