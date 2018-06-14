import { css, StyleSheet } from 'aphrodite';
import { mergeStyles, isDefined } from 'eo-utils';
import * as React from 'react';

import { EInputErrorCode, IValidatorResult } from '../../lib/Validators';
import { Omit } from '../../utils';
import { IInputProps } from './Input';

type TDefaultFormProps = React.DetailedHTMLProps<
	React.FormHTMLAttributes<HTMLFormElement>,
	HTMLFormElement
>;

export interface IFormProps extends Omit<TDefaultFormProps, 'onSubmit'>{
	onSubmit?(fields: Map<string, IFieldState>, state: IFormState): void;
}

export interface IFormState {
	isAllFieldsValid: boolean;
}

export interface IFieldState {
	value: string;
	isInvalid?: boolean;
}

interface IState {
	fields: Map<string, IFieldState>;
}

export class Form extends React.PureComponent<IFormProps, IState> {
	public constructor(props: IFormProps) {
		super(props);

		const fields = new Map<string, IFieldState>();

		this.inputProps.forEach(inputProps => {
			fields.set(inputProps.name, {
				isInvalid: false,
				value: inputProps.value
			});
		});

		this.state = {
			fields
		};
	}

	public render() {
		const { children, className, onSubmit, style, ...sharedProps } = this.props;

		return (
			<form
				{...mergeStyles(css(styles.form), className, style)}
				{...sharedProps}
				onSubmit={this.handleSubmit}
			>
				{React.Children.map(children, child => {
					if (React.isValidElement<IInputProps>(child) && child.props.name) {
						const childProps = child.props;
						const fieldState = this.state.fields.get(childProps.name);

						return React.cloneElement(child, {
							isInvalid: fieldState.isInvalid,
							onChange: (newValue: string) => {
								this.handleChangeFieldValue(childProps.name, newValue);
							}
						});
					}

					return child;
				})}
			</form>
		);
	}

	private handleChangeFieldValue = (
		name: string,
		value: string
	): void => {
		const fields = new Map(this.state.fields);

		fields.set(name, {
			isInvalid: false,
			value,
		});

		this.setState({
			fields
		});
	};

	private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		const { onSubmit } = this.props;
		const fields = new Map(this.state.fields);
		const newFieldsState = [];
		e.preventDefault();

		this.validate().then(result => {
			fields.forEach((fieldState, name) => {
				const itemHasError = result
					.filter(item => item.name === name)
					.some(item => isDefined<EInputErrorCode>(item.errorCode));

				if (itemHasError && !fieldState.isInvalid) {
					fields.set(name, {
						...fieldState,
						isInvalid: true
					});
				}

				if (!itemHasError && fieldState.isInvalid) {
					fields.set(name, {
						...fieldState,
						isInvalid: false
					});
				}
			});

			let isAllFieldsValid = true;
			fields.forEach(input => {
				if (input.isInvalid) {
					isAllFieldsValid = false;
				}
			})

			this.setState({ fields });

			if (onSubmit) {
				onSubmit(fields, { isAllFieldsValid });
			}
		});
	};

	private validate(): Promise<IValidatorResult[]> {
		let validateResults = [];

		this.inputProps.forEach(inputProps => {
			const { validators } = inputProps;

			if (validators) {
				const inputState = this.state.fields.get(inputProps.name);

				if (inputState) {
					validateResults = validateResults.concat(
						validators.map(item => item(inputProps.name, inputState.value))
					);
				}
			}
		});

		return Promise.all(validateResults);
	}

	private get inputProps(): IInputProps[] {
		return React.Children.toArray(this.props.children).reduce((acc, child) => {
			if (React.isValidElement<IInputProps>(child) && child.props.name) {
				acc.push(child.props);
			}

			return acc;
		}, []);
	}
}

const styles = StyleSheet.create({
	form: {}
});
