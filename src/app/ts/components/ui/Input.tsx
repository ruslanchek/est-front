import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COMMON_STYLES } from '../../theme';

interface IProps {
	autoFocus: boolean;
}

interface IState {
	isFocused: boolean;
	value: string;
}

export class Input extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		autoFocus: false
	};

	public state: IState = {
		isFocused: false,
		value: '',
	};

	private input = null;

	public render() {
		return (
			<input
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
				id="search"
				type="text"
				ref={(ref) => this.input = ref}
				className={css(COMMON_STYLES.INPUT)}
			/>
		);
	}
}

const styles = StyleSheet.create({

});
