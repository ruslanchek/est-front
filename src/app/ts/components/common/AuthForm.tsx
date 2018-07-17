import * as React from 'react';
import styled from 'styled-components';

interface IProps {

}

export class AuthForm extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

const Container = styled.div`
	
`;