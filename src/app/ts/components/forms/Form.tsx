import * as React from 'react';
import { Validator } from './Validators/Validator';

export const FormContext = React.createContext<IFormContext>({
	setValue: null,
});

export interface IFormContext {
	setValue: (name: string, value: IFormValue) => void;
}

export interface IFormValue {
	value: string;
	validators: Validator[];
	errors: string[];
}

export interface IFormModel {
	[name: string]: IFormValue;
}

interface IProps {

}

interface IState {
	isValid: boolean;
	model: IFormModel;
}

export class Form extends React.Component<IProps, IState> {
	public state: IState = {
		isValid: null,
		model: {},
	};

	public render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<FormContext.Provider value={{
					setValue: this.setValue,
				}}>
					{this.props.children}
				</FormContext.Provider>

				<br/>

				{this.state.isValid ? 'VALID' : 'INVALID'}

				<br/>

				{JSON.stringify(this.state.model)}
			</form>
		);
	}

	private validate() {
		const {model} = this.state;
		let isValid: boolean = true;

		for (const modelKey in model) {
			if (model.hasOwnProperty(modelKey)) {
				const {validators, value} = model[modelKey];

				model[modelKey].errors = [];

				validators.forEach((validator) => {
					validator.model = model;

					if(!validator.validate(value)) {
						model[modelKey].errors.push(validator.extractError());
						isValid = false;
					}

					validator.model = null;
				});
			}
		}

		this.setState({
			isValid,
			model,
		});
	}

	private setValue = (name: string, value: IFormValue) => {
		const newValues = this.state.model;

		newValues[name] = value;

		this.setState({
			model: newValues,
		}, () => {
			this.validate();
		});
	};

	private handleSubmit = async (e) => {
		e.preventDefault();
	};
}
