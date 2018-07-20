export interface IValidatorParams {

}

export abstract class Validator {
	public readonly params: IValidatorParams = null;
	public abstract validate(value: string): boolean;
}
