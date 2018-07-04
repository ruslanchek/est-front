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
import { IsTablet } from './IsTablet';

interface IProps {
	styles: StyleDeclaration;
}

interface IState {
	isOpen: boolean;
}

export class CountrySelector extends React.PureComponent<IProps, IState> {
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

					<a href="#" className={css(COMMON_STYLES.LINK, styles.link)} onClick={() => {
						this.setState({
							isOpen: true,
						});
					}}>
						<Flag isoCode="gb"/>

						<IsDesktop>
							<span className={css(styles.text)}>
								United kingdom
							</span>
						</IsDesktop>

						<IsTablet>
							<span className={css(styles.text)}>
								GB
							</span>
						</IsTablet>
					</a>
				</div>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	link: {
		display: 'flex'
	},

	text: {
		marginLeft: THEME.SECTION_PADDING_H / 3
	}
});
