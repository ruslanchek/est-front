import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from './Modal';
import { EModalSelectItemType, ModalSelect } from './ModalSelect';
import { ModalResetSubmit } from './ModalResetSubmit';
import { ModalHeaderFilter } from './ModalHeaderFilter';
import { ModalContext } from './ModalContext';
import { CSSUtils } from '../../lib/CSSUtils';

interface IProps {
	isoCode: string;
	title: string;
	styles?: StyleDeclaration;
}

interface IState {

}

export class FilterCountry extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false,
	};

	public render() {
		return (
			<div className={css(styles.container)}>
				<div
					className={css(COMMON_STYLES.FILTER_BRICK, this.props.styles)}
					onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}
				>
					<span className={css(styles.flag)} style={{
						backgroundImage: CSSUtils.image(`https://static.expertoption.com/flags/2.0/svg/${this.props.isoCode.toLowerCase()}.svg`)
					}}/>

					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						{this.props.title}
					</strong>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},

	flag: {
		width: 20,
		height: 15,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		marginRight: THEME.SECTION_PADDING_H / 3,
		borderRadius: 2
	}
});
