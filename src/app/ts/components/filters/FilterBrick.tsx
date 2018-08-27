import styled, { css } from 'react-emotion';
import { THEME, COLORS } from '../../theme';

export enum EFilterBrickType {
	Default,
	Middle,
	Left,
	Right,
}

export interface IBrickProps {
	type: EFilterBrickType;
}

export const FilterBrick = styled('div')<IBrickProps>`
  height: 27px;
  display: flex;
  align-items: center;
  padding: 0 ${THEME.SECTION_PADDING_H / 2}px;
  background-color: ${COLORS.GRAY_DARK.toString()};
  cursor: pointer;
  transition: background-color .2s;
  margin-top: 10px;
  font-size: ${THEME.FONT_SIZE_SMALL}px;
  user-select: none;

  &:hover {
    background-color: ${COLORS.GRAY_DARK.darken(.075).toString()};
  }
  
  ${(props: IBrickProps) => {
		switch (props.type) {
			case EFilterBrickType.Left : {
				return css`
					border-bottom-left-radius: 4px;
					border-top-left-radius: 4px;
					border-right: 1px solid ${COLORS.GRAY_EXTRA_DARK.toString()};
				`;
			}

			case EFilterBrickType.Right : {
				return css`
					border-bottom-right-radius: 4px;
					border-top-right-radius: 4px;
				`;
			}

			case EFilterBrickType.Middle : {
				return css`
					border-right: 1px solid ${COLORS.GRAY_EXTRA_DARK.toString()};
				`;
			}
			
			case EFilterBrickType.Default : {
				return css`
					margin-right: ${THEME.SECTION_PADDING_H / 2}px;
					border-radius: 4px;
				`;
			}
		}
	}}
`;