import * as React from 'react';
import { COMMON_STYLES, COMMON_STYLES_EMOTION, THEME } from '../../theme';
import { EModalSelectItemType, ModalSelect } from '../modals/ModalSelect';
import { ModalContext } from '../modals/ModalContext';
import { IsPhone } from './IsPhone';
import { IsTabletOrDesktop } from './IsTabletOrDesktop';
import { ModalHeader } from '../modals/ModalHeader';
import styled from 'react-emotion';

interface IProps {
	className: string;
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
				<Container>
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

					<Link
						href="#"
						onClick={() => {
							this.setState({
								isOpen: true,
							});
						}}
					>
						<IsPhone>
							&euro;
						</IsPhone>

						<IsTabletOrDesktop>
							&euro; EUR
						</IsTabletOrDesktop>
					</Link>
				</Container>
			</React.Fragment>
		);
	}
}

const Link = styled('a')`
  ${COMMON_STYLES_EMOTION.LINK};
`;

const Container = styled('div')`
  position: relative;
	margin-right: ${THEME.SECTION_PADDING_H}px;
`;
