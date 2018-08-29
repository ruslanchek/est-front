import * as React from 'react';
import { COMMON_STYLES_EMOTION, THEME } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../modals/ModalSelect';
import { ModalContext } from '../modals/ModalContext';
import { IsPhone } from './IsPhone';
import { IsTabletOrDesktop } from './IsTabletOrDesktop';
import { ModalHeader } from '../modals/ModalHeader';
import styled from 'react-emotion';

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
				<Container>
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

					<Link
						href="#"
						onClick={() => {
							this.setState({
								isOpen: true,
							});
						}}
					>
						<IsPhone>
							EN
						</IsPhone>

						<IsTabletOrDesktop>
							English
						</IsTabletOrDesktop>
					</Link>
				</Container>
			</React.Fragment>
		);
	}
}

const Container = styled('div')`
  margin-right: ${THEME.SECTION_PADDING_H}px;
	position: relative;
`;

const Link = styled('a')`
	${COMMON_STYLES_EMOTION.LINK};
  display: flex;
	justify-content: flex-start;
	position: relative;
	white-space: nowrap;
`;

