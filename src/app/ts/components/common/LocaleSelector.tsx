import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COMMON_STYLES, THEME } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../ui/ModalSelect';
import { ModalContext } from '../ui/ModalContext';
import { IsPhone } from './IsPhone';
import { IsDesktopOrTablet } from './IsDesktopOrTablet';
import { ModalHeader } from '../ui/ModalHeader';

interface IProps {

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
				<div className={css(styles.container)}>
					<ModalContext
						isVisible={this.state.isOpen}
						onClose={() => {
							this.setState({
								isOpen: false,
							});
						}}
					>
						<ModalHeader title="Select language"/>

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
									title: 'Español',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'Français',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'Italiano',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 1,
									title: 'Deutsch',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},
							]}
						/>
					</ModalContext>

					<a href="#" className={css(COMMON_STYLES.LINK, styles.navLink)} onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}>
						<IsPhone>
							EN
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
	container: {
		marginRight: THEME.SECTION_PADDING_H,
		position: 'relative'
	},

	navLink: {
		display: 'flex',
		justifyContent: 'flex-start',
		position: 'relative',
		whiteSpace: 'nowrap'
	}
});
