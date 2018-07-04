import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, COMMON_STYLES } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../ui/ModalSelect';
import { ModalContext } from '../ui/ModalContext';
import { Flag } from '../ui/Flag';
import { IsPhone } from './IsPhone';
import { IsDesktop } from './IsDesktop';
import { IsDesktopOrTablet } from './IsDesktopOrTablet';

interface IProps {
	styles: StyleDeclaration;
}

interface IState {
	isOpen: boolean;
}

export class LocaleSelector extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isOpen: false
	};

	public render() {
		return (
			<React.Fragment>
				<div className={css(COMMON_STYLES.LINK, this.props.styles)}>
					<ModalContext
						isVisible={this.state.isOpen}
						onClose={() => {
							this.setState({
								isOpen: false,
							});
						}}
					>
						<ModalSelect
							onChange={() => {

							}}
							items={[
								{
									id: 1,
									title: 'English',
									type: EModalSelectItemType.Plain,
									selected: true,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'English',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'English',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'English',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'English',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},
							]}
						/>
					</ModalContext>

					<a href="#" className={css(COMMON_STYLES.LINK)} onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}>
						<IsPhone>
							<span className={css(styles.phoneIcon)}>
								EN
							</span>
						</IsPhone>

						<IsDesktopOrTablet>
							English
						</IsDesktopOrTablet>
					</a>
				</div>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	phoneIcon: {

	}
});
