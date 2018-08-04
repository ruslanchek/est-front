import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Modal } from '../ui/Modal';
import { EModalSelectItemType, ModalSelect } from '../ui/ModalSelect';
import { ModalResetSubmit } from '../ui/ModalResetSubmit';
import { ModalHeaderFilter } from '../ui/ModalHeaderFilter';
import { ModalContext } from '../ui/ModalContext';
import { CSSUtils } from '../../lib/CSSUtils';
import { ObjectsStore } from '../../stores/ObjectsStore';
import EObjectContractType = ObjectsStore.EObjectContractType;

interface IProps {
	type: EObjectContractType;
	styles?: StyleDeclaration;
}

interface IState {

}

export class FilterContractType extends React.PureComponent<IProps, IState> {
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
					<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
						Rent
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
