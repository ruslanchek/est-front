import * as React from 'react';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { Checker } from '../ui/Checker';
import styled from 'react-emotion';

interface IProps {
	items: IModalSelectItem[];
	onChange: (items: IModalSelectItem) => void;
}

export interface IModalSelectItem {
	id: number;
	title: string;
	type: EModalSelectItemType;
	selected: boolean;
	pre?: JSX.Element;
	onClick?: (id: number) => void;
}

export enum EModalSelectItemType {
	Plain,
	CheckBox,
}

export class ModalSelect extends React.PureComponent<IProps, {}> {
	public render() {
		const { items } = this.props;

		return (
			<div>
				{items.map((item, i) => {
					return (
						<Selectable
							key={i}
							onClick={this.onClick.bind(this, item)}
						>
							{item.pre}

							<Title>
								{item.title}
							</Title>

							<Checker checked={item.selected}/>
						</Selectable>
					);
				})}
			</div>
		);
	}

	private onClick = (item: IModalSelectItem) => {

	};
}

const Selectable = styled('span')`
  ${COMMON_STYLES.LINK};
  
  cursor: pointer;
	display: flex;
	font-size: ${THEME.FONT_SIZE_SMALL};
	justify-content: space-between;
	align-items: center;
	font-weight: 600;
	padding: ${THEME.SECTION_PADDING_V / 1.25}px ${THEME.SECTION_PADDING_H}px;
	border-top: 1px solid ${COLORS.GRAY_DARK.toString()};
	transition: background-color .2s;

	&:hover {
		background-color: ${COLORS.GRAY_DARK.toString()};
	}
`;

const Title = styled('span')`
  flex-grow: 1;
`;
