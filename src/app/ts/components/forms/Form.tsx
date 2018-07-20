import * as React from 'react';

export const FormContext = React.createContext<IFormContext>({
	setValue: null,
});

export interface IFormContext {
	setValue: (name: string, value: IFormValue) => void;
}

export interface IFormValue {
	value: string;
	errors: string[];
}

interface IProps {

}

interface IState {
	values: {
		[name: string]: IFormValue;
	}
}

export class Form extends React.Component<IProps, IState> {
	public state: IState = {
		values: {},
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

				{JSON.stringify(this.state.values)}
			</form>
		);
	}

	private setValue = (name: string, value: IFormValue) => {
		const newValues = this.state.values;

		newValues[name] = value;

		this.setState({
			values: newValues,
		});
	};

	private handleSubmit = async (e) => {
		e.preventDefault();
	};
}
