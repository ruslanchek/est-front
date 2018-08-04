import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from '../modals/Modal';
import { EModalSelectItemType, ModalSelect } from '../modals/ModalSelect';
import { ModalResetSubmit } from '../modals/ModalResetSubmit';
import { ModalHeaderFilter } from '../modals/ModalHeaderFilter';
import { ModalContext } from '../modals/ModalContext';
import { CSSUtils } from '../../lib/CSSUtils';
import { Flag } from '../ui/Flag';

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
					<Flag isoCode={this.props.isoCode}/>

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
	}
});
