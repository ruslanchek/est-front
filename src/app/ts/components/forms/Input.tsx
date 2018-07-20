import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COMMON_STYLES } from '../../theme';
import { FormContext, IFormContext } from './Form';

interface IProps {
	autoFocus?: boolean;
	value?: string;
	type?: string;
	name: string;
}

interface IState {
	isFocused: boolean;
	value: string;
	errors: string[];
}

export class Input extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		autoFocus: false,
		value: '',
		type: 'text',
		name: '',
	};

	public state: IState = {
		isFocused: false,
		value: '',
		errors: [],
	};

	private input = null;
	private formContext: IFormContext = null;

	public componentDidMount() {
		this.setValue(this.props.value);
	}

	public render() {
		return (
			<FormContext.Consumer>
				{(formContext) => {
					this.formContext = formContext;

					return (
						<input
							name={this.props.name}
							type={this.props.type}
							onFocus={() => {
								this.setState({
									isFocused: true,
								});
							}}
							onBlur={() => {
								this.setState({
									isFocused: false,
								});
							}}
							onChange={(e) => {
								this.setValue(e.target.value);
							}}
							onKeyDown={(e) => {
								this.setValue(this.input.value);
							}}
							autoFocus={this.props.autoFocus}
							ref={(ref) => this.input = ref}
							className={css(COMMON_STYLES.INPUT)}
						/>
					);
				}}
			</FormContext.Consumer>
		);
	}

	private setValue(value: string): void {
		this.setState({
			value,
		});

		this.input.value = value;
		this.formContext.setValue(this.props.name, {
			value,
			errors: this.state.errors,
		});
	}
}

const styles = StyleSheet.create({

});
