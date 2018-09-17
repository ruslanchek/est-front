import * as React from 'react';
import { AdvertsStore } from '../../stores/AdvertsStore';
import { Icon } from '../common/Icon';
import { COLORS, THEME } from '../../theme';
import styled from 'react-emotion';
import IAdvert = AdvertsStore.IAdvert;

interface IProps {
	advertData: IAdvert;
}

export class Params extends React.PureComponent<IProps, {}> {
	public render() {
		const { params } = this.props.advertData;

		return (
			<Container>
				{params.map((param, i) => {
					return (
						<Param key={i}>
							<Icon
								icon={param.icon}
								size={18}
								color={COLORS.BLACK_EXTRA_LIGHT}
							/>

							<Title>
								<TitleValue>
									{param.value}
								</TitleValue>

								<TitleName>
									{param.name}
								</TitleName>
							</Title>
						</Param>
					);
				})}
			</Container>
		);
	}
}

const Container = styled('div')`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const Param = styled('div')`
  display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 2ex;
	margin-top: ${THEME.SECTION_PADDING_V / 2}px;
	margin-bottom: ${THEME.SECTION_PADDING_V / 2}px;
`;

const Title = styled('div')`
  font-size: ${THEME.FONT_SIZE_SMALL}px;
	margin-left: 1ex;
`;

const TitleValue = styled('span')`
  font-weight: 600;
	margin-right: .5ex;
`;

const TitleName = styled('span')`
  color: ${COLORS.BLACK_LIGHT.toString()};
`;
