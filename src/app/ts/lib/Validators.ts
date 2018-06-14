export interface IValidatorResult {
	name: string;
	errorCode?: EInputErrorCode;
}

export type TInputValidator = (
	name: string,
	value: string
) => Promise<{ name: string; error?: string }>;

export enum EInputErrorCode {
	isRequired,
	invalidLength,
	shouldBeEmail
}

export abstract class Validator {
	public static isRequired(
		name: string,
		value: string
	): Promise<IValidatorResult> {
		return Promise.resolve<IValidatorResult>({
			errorCode: !value ? EInputErrorCode.isRequired : undefined,
			name
		});
	}

	public static minLength(
		minLength: number
	): (name: string, value: string) => Promise<IValidatorResult> {
		return (name: string, value: string): Promise<IValidatorResult> => {
			return Promise.resolve<IValidatorResult>({
				errorCode:
					value && value.length < minLength
						? EInputErrorCode.invalidLength
						: undefined,
				name
			});
		};
	}

	public static maxLength(
		maxLength: number
	): (name: string, value: string) => Promise<IValidatorResult> {
		return (name: string, value: string): Promise<IValidatorResult> => {
			return Promise.resolve<IValidatorResult>({
				errorCode:
					value && value.length > maxLength
						? EInputErrorCode.invalidLength
						: undefined,
				name
			});
		};
	}

	public static isEmail(
		name: string,
		value: string
	): Promise<IValidatorResult> {
		const regExp = /^(([^\!<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return Promise.resolve({
			errorCode: !regExp.test(value)
				? EInputErrorCode.shouldBeEmail
				: undefined,
			name
		});
	}
}
