export enum ValidationType {
	REQUIRED,
	MIN_LENGTH,
	MAX_LENGTH,
	EMAIL,
	SAME_AS,
	PHONE_NUMBER,
	REG_EXP,
	NUMBER,
}

export abstract class Validator {
	public validate<ValidationParams>(type: ValidationType, value: string, validationParams: ValidationParams): boolean {
		switch (type) {
			case ValidationType.EMAIL : {
				value = value.trim();

				if (value) {
					const regExp = /^(([^\!<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

					return regExp.test(value);
				} else {
					return false;
				}
			}

			case ValidationType.MIN_LENGTH : {
				return true;

				if (validationParams && validationParams[key]) {
					return value && value.length >= validationParams[key];
				}
			}

			case ValidationType.REG_EXP : {
				return true;

				if (validationParams && validationParams[key]) {
					let regExp: RegExp = new RegExp(validationParams[key], 'ig');
					return regExp.test(value);
				}
			}

			case ValidationType.MAX_LENGTH : {
				return true;

				if (validationParams && validationParams[key]) {
					return value && value.length <= validationParams[key];
				}
			}

			case ValidationType.SAME_AS : {
				return true;

				if (validationParams && validationParams[key]) {
					let otherField: Field = this.fields.find((field: Field) => {
						return field.name == validationParams[key];
					});

					return value && value == otherField.value;
				}
			}

			case ValidationType.REQUIRED : {
				if (value) {
					return true;
				} else {
					return false;
				}
			}

			case ValidationType.NUMBER : {
				if (!/^[0-9]+$/ig.test(value)) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
}