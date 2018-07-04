import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../ui/ModalSelect';
import { ModalContext } from '../ui/ModalContext';
import { Flag } from '../ui/Flag';
import { IsPhone } from './IsPhone';
import { IsDesktop } from './IsDesktop';
import { IsDesktopOrTablet } from './IsDesktopOrTablet';
import { ModalHeader } from '../ui/ModalHeader';

interface IProps {
	styles: StyleDeclaration;
}

interface IState {
	isOpen: boolean;
}

export class CurrencySelector extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false
	};

	public render() {
		return (
			<React.Fragment>
				<div className={css(styles.container)}>
					<ModalContext
						isVisible={this.state.isOpen}
						onClose={() => {
							this.setState({
								isOpen: false,
							});
						}}
					>
						<ModalHeader title="Select currency"/>

						<ModalSelect
							onChange={() => {

							}}
							items={[
								{
									id: 1,
									title: '€ – Euro',
									type: EModalSelectItemType.Plain,
									selected: true,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: '$ – United States Dollar',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: '£ – Pound sterling',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								}
							]}
						/>
					</ModalContext>

					<a href="#" className={css(COMMON_STYLES.LINK)} onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}>
						<IsPhone>
							&euro;
						</IsPhone>

						<IsDesktopOrTablet>
							&euro; EUR
						</IsDesktopOrTablet>
					</a>
				</div>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		marginRight: THEME.SECTION_PADDING_H
	}
});
