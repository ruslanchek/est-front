import * as React from 'react';
import { COMMON_STYLES_EMOTION } from '../../theme';
import { FormContext, IFormContext } from './Form';
import { Validator } from './Validators/Validator';
import { InputErrors } from './InputErrors';

interface IProps {
	autoFocus?: boolean;
	value?: string;
	type?: string;
	validators?: Validator[];
	name: string;
}

interface IState {
	isFocused: boolean;
	value: string;
}

export class Input extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		validators: [],
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
		this.setValue(this.props.value);
	}

	public render() {
		return (
			<FormContext.Consumer>
				{(formContext) => {
					this.formContext = formContext;
					
					return (
						<React.Fragment>
							<InputErrors inputName={this.props.name} />
							
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
								className={COMMON_STYLES_EMOTION.INPUT}
							/>
						</React.Fragment>
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
			validators: this.props.validators,
		});
	}
}
