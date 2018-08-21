import styled from 'react-emotion';
import { THEME, COLORS } from '../../theme';

export const FilterBrick = styled('div')`
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
`;