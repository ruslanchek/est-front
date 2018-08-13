import * as React from 'react';
import styled, { css } from 'react-emotion';
import { COMMON_STYLES, THEME, COMMON_STYLES_EMOTION } from '../../theme';
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
				<Container>
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
									pre: (<Flag style={css({marginRight: THEME.SECTION_PADDING_H / 2})} isoCode="gb"/>),
									title: 'United Kingdom',
									type: EModalSelectItemType.Plain,
									selected: true,
									onClick: () => {

									},
								},

								{
									id: 2,
									pre: (<Flag style={css({marginRight: THEME.SECTION_PADDING_H / 2})} isoCode="de"/>),
									title: 'Germany',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 3,
									pre: (<Flag style={css({marginRight: THEME.SECTION_PADDING_H / 2})} isoCode="it"/>),
									title: 'Italy',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 4,
									pre: (<Flag style={css({marginRight: THEME.SECTION_PADDING_H / 2})} isoCode="fr"/>),
									title: 'France',
									type: EModalSelectItemType.Plain,
									selected: false,
									onClick: () => {

									},
								},

								{
									id: 5,
									pre: (<Flag style={css({marginRight: THEME.SECTION_PADDING_H / 2})} isoCode="es"/>),
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
						className={css(COMMON_STYLES_EMOTION.LINK, { display: 'flex', })}
						onClick={(e) => {
							e.preventDefault();
							this.setState({
								isOpen: true,
							});
						}}
					>
						<Flag isoCode="gb"/>

						<IsDesktop>
							<Text>
								United kingdom
							</Text>
						</IsDesktop>

						<IsTablet>
							<Text>
								GB
							</Text>
						</IsTablet>
					</a>
				</Container>
		);
	}
}

const Container = styled('div')`
  position: relative;
	margin-right: ${THEME.SECTION_PADDING_H}px; 
`;

const Text = styled('div')`
  margin-left: ${THEME.SECTION_PADDING_H / 3}px;
`;
