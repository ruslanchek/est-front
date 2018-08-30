import * as React from 'react';
import { THEME } from '../../theme';
import { Input } from '../forms/Input';
import { EFormValidateOn, Form } from '../forms/Form';
import styled, { css } from 'react-emotion';

interface IProps {
	autoFocus: boolean;
	onChange: (value: string) => void;
}

interface IState {
	isFocused: boolean;
	value: string;
}

export class Search extends React.PureComponent<IProps, IState> {
	public state: IState = {
		isFocused: false,
		value: '',
	};

	public render() {
		return (
			<Container>
				<Form
					className={form}
					onSubmit={() => {}}
					validateOn={EFormValidateOn.SUBMIT}
				>
					<Input
						label="Search"
						name="search"
						icon="md-search"
						autoFocus={false}
						onChange={(e: any) => {
							this.setState({
								value: e.target.value,
							});
							this.props.onChange(e.target.value);
						}}
						onKeyDown={(e: any) => {
							this.setState({
								value: e.target.value
							});
							this.props.onChange(e.target.value);
						}}
					/>
				</Form>
			</Container>
		);
	}
}

const form = css`
  flex-grow: 1;
`;

const Container = styled('div')`
  width: 100%;
	position: relative;
	height: ${THEME.INPUT_HEIGHT}px;
`;
