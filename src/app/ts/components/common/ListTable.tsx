import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { THEME, COLORS } from '../../theme';
import styled from 'react-emotion';

interface IProps {
	items: IObject[];
}

export class ListTable extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Container>
				<Header>
					<Col style={{ width: '5%' }}>
						ID
					</Col>

					<Col style={{ width: '40%' }}>
						Title
					</Col>

					<Col style={{ width: '15%' }}>
						Price
					</Col>

					<Col style={{ width: '20%' }}>
						Type
					</Col>

					<Col style={{ width: '20%' }}>
						Contract type
					</Col>
				</Header>

				{this.props.items.map((item: IObject, i) => {
					return (
						<Row key={i}>
							<Col style={{ width: '5%' }}>
								{item.id}
							</Col>

							<Col style={{ width: '40%' }}>
								{item.title}
							</Col>

							<Col style={{ width: '15%' }}>
								{item.price}
							</Col>

							<Col style={{ width: '20%' }}>
								{item.type}
							</Col>

							<Col style={{ width: '20%' }}>
								{item.contractType}
							</Col>
						</Row>
					);
				})}
			</Container>
		);
	}
}

const Container = styled('div')`
  border-radius: 6px;
	overflow: hidden;
	margin-top: ${THEME.SECTION_PADDING_V * 2}px;
	background-color: ${COLORS.WHITE.toString()};
	box-shadow: ${THEME.BOX_SHADOW_ELEVATION_1};
`;

const Header = styled('div')`
	display: flex;
	justify-content: space-between;
	font-weight: 600;
	background-color: ${COLORS.GRAY_DARK.toString()};
`;

const Row = styled('div')`
	display: flex;
	justify-content: space-between;

	:nth-child(odd) {
		background-color: ${COLORS.BLUE_LIGHT.toString()};
	}
`;

const Col = styled('div')`
	text-align: left;
	padding: ${THEME.SECTION_PADDING_V}px;
	width: ${props => props.theme}%;
`;

