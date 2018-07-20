import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { COMMON_STYLES } from '../../theme';

interface IProps {
	autoFocus?: boolean;
	value?: string;
	type?: string;
	name?: string;
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

	public componentDidMount() {
		this.setState({
			value: this.props.value,
		});
	}

	public render() {
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
				}}
				onKeyDown={(e) => {
					this.setState({
						value: this.input.value
					});
				}}
				autoFocus={this.props.autoFocus}
				ref={(ref) => this.input = ref}
				className={css(COMMON_STYLES.INPUT)}
			/>
		);
	}
}

const styles = StyleSheet.create({

});
