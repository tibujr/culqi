import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "NumberLengthValidator", async: false })
export class NumberLengthValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return this.isValid(value, args.constraints);
  }

  defaultMessage(args: ValidationArguments) {
    const [min, max] = args.constraints;
    return `${args.property} debe tener entre ${min} y ${max} caracteres`;
  }

  private isValid = async (cardNumber: number, constraints: any): Promise<boolean> => {
    const numbers = Array.from(String(cardNumber));
    const [min, max] = constraints;
    return numbers.length >= min && numbers.length <= max;
  };
}
