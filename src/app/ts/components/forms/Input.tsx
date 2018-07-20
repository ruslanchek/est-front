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
	};

	private input = null;

	private formContext: IFormContext = null;

	public componentDidMount() {
		this.setState({
			value: this.props.value,
		});

		this.input.value = this.props.value;
		this.formContext.setValue(this.props.name, this.props.value);
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
								this.setState({
									value: e.target.value,
								});

								formContext.setValue(this.props.name, e.target.value);
							}}
							onKeyDown={(e) => {
								this.setState({
									value: this.input.value,
								});

								formContext.setValue(this.props.name, this.input.value);
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
}

const styles = StyleSheet.create({

});
