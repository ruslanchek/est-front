// export enum ValidationType {
// 	REQUIRED,
// 	MIN_LENGTH,
// 	MAX_LENGTH,
// 	EMAIL,
// 	SAME_AS,
// 	REG_EXP,
// 	NUMBER,
// }
//
// export interface IValidationParams {
//
// }
//
// export interface IValidationParamsMinLength extends IValidationParams {
// 	min: number;
// }
//
// export interface IValidationParamsMaxLength extends IValidationParams {
// 	max: number;
// }
//
// export interface IValidationParamsRegExp extends IValidationParams {
// 	regExp: RegExp;
// }
//
// export interface IValidationParamsIsEqual extends IValidationParams{
// 	value: string;
// }
//
// export abstract class Validator1 {
// 	public static isEmail(value: string): boolean {
//
// 	}
//
// 	public static minLength(value: string, params: IValidationParamsMinLength): boolean {
// 		return value && value.length >= params.min;
// 	}
//
// 	public static maxLength(value: string, params: IValidationParamsMaxLength): boolean {
// 		return value && value.length <= params.max;
// 	}
//
// 	public static regExp(value: string, params: IValidationParamsRegExp): boolean {
// 		return params.regExp.test(value);
// 	}
//
// 	public static isEqual(value: string, params: IValidationParamsIsEqual): boolean {
// 		return value && value === params.value;
// 	}
//
// 	public static isRequired(value: string): boolean {
// 		return !!value;
// 	}
//
// 	public static isNumber(value: string): boolean {
// 		return !/^[0-9]+$/ig.test(value);
// 	}
// }