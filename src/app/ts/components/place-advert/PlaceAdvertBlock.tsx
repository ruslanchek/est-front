import * as React from 'react';
import styled from 'react-emotion';
import { COLORS } from '../../theme';

interface IProps {
	label: string;
}

export class PlaceAdvertBlock extends React.PureComponent<IProps, {}> {
	public render() {
		const { label, children } = this.props;

		return (
			<Block>
				<Label>
					{label}
				</Label>

				{children}
			</Block>
		);
	}
}

const Block = styled('label')`
  background-color: ${COLORS.GRAY_LIGHT.alpha(.5).toString()};
  border: 1px solid ${COLORS.GRAY_DARK.toString()};
  border-radius: 4px;
  display: block;
  padding: 5px 15px;
`;

const Label = styled('span')`
  color: ${COLORS.BLACK_EXTRA_LIGHT.toString()};
  display: block;
`;