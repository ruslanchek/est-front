import * as React from 'react';

export const FormContext = React.createContext<IFormContext>({
	setValue: (name: string, value: string) => {},
});

export interface IFormContext {
	setValue: (name: string, value: string) => void;
}

interface IProps {

}

interface IState {
	values: {};
}

export class Form extends React.PureComponent<IProps, IState> {
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

	private setValue = (name: string, value: string) => {
		console.log(name, value);
		
		this.setState({
			values: {
				...this.state.values,
				[name]: value,
			}
		});
	};

	private handleSubmit = async (e) => {
		e.preventDefault();
	};
}
