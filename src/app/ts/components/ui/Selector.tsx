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
				styles={customStyles}
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

const customStyles = {
	option: (base, state) => ({
		...base,
		borderBottom: '1px dotted pink',
		color: state.isFullscreen ? 'red' : 'blue',
		padding: 20,
	}),

	control: () => ({
		// none of react-selects styles are passed to <View />
		width: 200,
	}),

	singleValue: (base, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...base, opacity, transition };
	}
};