import * as React from 'react';
import Select from 'react-select';

interface IProps {

}

interface IState {
	selectedOption: any;
}

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

export class Selector extends React.Component<IProps, IState> {
	public state: IState = {
		selectedOption: null,
	};

	public render() {
		const { selectedOption } = this.state;

		return (
			<Select
				value={selectedOption}
				onChange={this.handleChange}
				options={options}
			/>
		);
	}

	private handleChange = (selectedOption) => {
		this.setState({
			selectedOption,
		});

		console.log(`Option selected:`, selectedOption);
	};
}