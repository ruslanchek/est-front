import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COMMON_STYLES, THEME } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../modals/ModalSelect';
import { ModalContext } from '../modals/ModalContext';
import { Flag } from '../ui/Flag';
import { IsDesktop } from './IsDesktop';
import { IsTablet } from './IsTablet';
import { ModalHeader } from '../modals/ModalHeader';

interface IProps {

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
				<div className={css(styles.container)}>
					<ModalContext
						isVisible={this.state.isOpen}
						onClose={() => {
							this.setState({
								isOpen: false,
							});
						}}
					>
						<ModalHeader title="Select country"/>

						<ModalSelect
							onChange={() => {

							}}
							items={[
								{
									id: 1,
									pre: (<Flag style={styles.flag} isoCode="gb"/>),
									title: 'United Kingdom',
									type: EModalSelectItemType.Plain,
									selected: true,
									onClick: () => {

									},
								},

								{
									id: 2,
									pre: (<Flag style={styles.flag} isoCode="de"/>),
									title: 'Germany',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 3,
									pre: (<Flag style={styles.flag} isoCode="it"/>),
									title: 'Italy',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 4,
									pre: (<Flag style={styles.flag} isoCode="fr"/>),
									title: 'France',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 5,
									pre: (<Flag style={styles.flag} isoCode="es"/>),
									title: 'Spain',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},
							]}
						/>
					</ModalContext>

					<a
						href="#"
						className={css(COMMON_STYLES.LINK, styles.link)}
						onClick={(e) => {
							e.preventDefault();
							this.setState({
								isOpen: true,
							});
						}}
					>
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
	flag: {
		marginRight: THEME.SECTION_PADDING_H / 2,
	},

	link: {
		display: 'flex'
	},

	container: {
		position: 'relative',
		marginRight: THEME.SECTION_PADDING_H
	},

	text: {
		marginLeft: THEME.SECTION_PADDING_H / 3
	}
});
