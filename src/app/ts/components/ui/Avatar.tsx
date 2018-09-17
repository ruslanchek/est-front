import * as React from 'react';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { COLORS, THEME, COMMON_STYLES } from '../../theme';
import { PATHS } from '../../config';
import IAdvertAgent = AdvertsStore.IAdvertAgent;
import styled, { css } from 'react-emotion';

interface IProps {
	advertAgent: IAdvertAgent;
}

export class Avatar extends React.PureComponent<IProps, {}> {
	public render() {
		const { id, avatar, name, type } = this.props.advertAgent;

		return (
			<div>
				<Title>
					{this.getAgentTypeName()}
				</Title>

				<Info>
					<ImageLink
						target="_blank"
						href={PATHS.AGENT.replace(':id', id.toString())}
					>
						<Image
							src={avatar}
						/>
					</ImageLink>

					<Contact>
						<ContactRowAccent
							target="_blank"
							href={PATHS.AGENT.replace(':id', id.toString())}
						>
							{name}
						</ContactRowAccent>

						<ContactRowDecent>
							{type}
						</ContactRowDecent>
					</Contact>
				</Info>
			</div>
		);
	}

	private getAgentTypeName(): string {
		switch (this.props.advertAgent.type) {
			case AdvertsStore.EAdvertAgentType.Private : return 'Private';
			case AdvertsStore.EAdvertAgentType.Realtor : return 'Realtor';
			case AdvertsStore.EAdvertAgentType.Agency : return 'Agency';
		}
	}
}

const Title = styled('div')`
  font-size: ${THEME.FONT_SIZE_TINY}px;
  text-transform: uppercase;
  margin-bottom: ${THEME.SECTION_PADDING_V / 2}px;
  color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
  font-weight: 600;
`;

const Info = styled('div')`
  display: flex;
  align-items: center;
`;

const ImageLink = styled('a')`
  transition: opacity .2s;

  &:hover {
    opacity: .75;
  }
`;

const Image = styled('img')`
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
  border-radius: 100%;
  display: block;
  flex-grow: 0;
  margin-right: ${THEME.SECTION_PADDING_H / 2}px;
`;

const Contact = styled('div')`
  flex-grow: 1;
`;

const ContactRowAccent = styled('a')`
	${COMMON_STYLES.LINK};
	font-size: ${THEME.FONT_SIZE_SMALL}px;
  margin: .2em 0;
`;

const ContactRowDecent = styled('div')`
	font-size: ${THEME.FONT_SIZE_SMALL}px;
  margin: .2em 0;
  color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
`;
