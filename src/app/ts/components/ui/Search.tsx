import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import * as Ionicon from 'react-ionicons';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';

interface IProps {
	autoFocus: boolean;
	onChange: (value: string) => void;
}

interface IState {
	isFocused: boolean;
	value: string;
}

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
							fontSize="22px"
							color={COLORS.BLACK.toString()}
						/>
					</div>

					<span
						{...CSSUtils.mergeStyles(
							css(styles.iconText),
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
						onChange={(e: any) => {
							this.setState({
								value: e.target.value,
							});

							this.props.onChange(e.target.value);
						}}
						onKeyDown={(e: any) => {
							this.setState({
								value: e.target.value
							});

							this.props.onChange(e.target.value);
						}}
						autoFocus={this.props.autoFocus}
						id="search"
						type="text"
						ref={(ref) => this.input = ref}
						className={css(COMMON_STYLES.INPUT, styles.input)}
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
		height: THEME.INPUT_HEIGHT,
	},

	icon: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	iconText: {
		marginLeft: THEME.SECTION_PADDING_H / 2.5,
		transition: 'transform .2s, opacity .2s',
	},

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
		height: THEME.INPUT_HEIGHT,
		fontSize: THEME.FONT_SIZE_REGULAR,
		top: 0,
		left: 0,
		pointerEvents: 'none'
	},

	input: {
		paddingLeft: THEME.INPUT_HEIGHT
	},
});
