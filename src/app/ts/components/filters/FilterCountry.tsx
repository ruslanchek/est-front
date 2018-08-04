import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from '../ui/Modal';
import { EModalSelectItemType, ModalSelect } from '../ui/ModalSelect';
import { ModalResetSubmit } from '../ui/ModalResetSubmit';
import { ModalHeaderFilter } from '../ui/ModalHeaderFilter';
import { ModalContext } from '../ui/ModalContext';
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
