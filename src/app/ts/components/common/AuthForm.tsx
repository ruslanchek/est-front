import * as React from 'react';
import styled from 'react-emotion';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';
import { COLORS, THEME } from '../../theme';

interface IProps {

}

@followStore(AuthStore.store)
export class AuthForm extends React.Component<IProps, {}> {
  public render() {
    return (
      <Container>
        <Inner>
          {this.props.children}
        </Inner>
      </Container>
    );
  }
}

const Container = styled('div')`
  display: flex;
  justify-content: center;
`;

const Inner = styled('div')`
  width: 400px;
  background-color: ${COLORS.WHITE.toString()};
  box-shadow: ${THEME.BOX_SHADOW_ELEVATION_1};
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;
