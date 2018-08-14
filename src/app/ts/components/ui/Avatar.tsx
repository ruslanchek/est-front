import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import { COLORS, COMMON_STYLES, THEME, COMMON_STYLES_EMOTION } from '../../theme';
import { PATHS } from '../../config';
import IObjectAgent = ObjectsStore.IObjectAgent;
import styled, { css } from 'react-emotion';

interface IProps {
	objectAgent: IObjectAgent;
}

export class Avatar extends React.PureComponent<IProps, {}> {
	public render() {
		const { id, avatar, name, type } = this.props.objectAgent;

		return (
			<Container>
				<Title>
					{this.getAgentTypeName()}
				</Title>

				<Info>
					<ImageLink
						target="_blank"
						href={PATHS.AGENT.replace(':id', id.toString())}
					>
            <Image src={avatar}/>
					</ImageLink>

					<Contact>
						<a
							target="_blank"
							href={PATHS.AGENT.replace(':id', id.toString())}
							className={`${contactRowStyle} ${contactRowAccentStyle} ${COMMON_STYLES_EMOTION.LINK}`}
						>
							{name}
						</a>

						<div className={`${contactRowStyle} ${contactRowDecentStyle}`}>
							{type}
						</div>
					</Contact>
				</Info>
			</Container>
		);
	}

	private getAgentTypeName(): string {
		switch (this.props.objectAgent.type) {
			case ObjectsStore.EObjectAgentType.Private : return 'Private';
			case ObjectsStore.EObjectAgentType.Realtor : return 'Realtor';
			case ObjectsStore.EObjectAgentType.Agency : return 'Agency';
		}
	}
}

const Container = styled('div')`

`;

const Title = styled('div')`
  font-size: ${THEME.FONT_SIZE_TINY}px;
  text-transform: uppercase;
  margin-bottom: ${THEME.SECTION_PADDING_V / 2};
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

const contactRowStyle = styled('div')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
  margin: .2em 0;
`;

const contactRowAccentStyle = css`
  font-weight: 600;
`;

const contactRowDecentStyle = css`
  color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
`;
