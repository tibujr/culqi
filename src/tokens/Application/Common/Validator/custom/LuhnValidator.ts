import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "LuhnValidator", async: false })
export class LuhnValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return this.isValid(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} debe der una tarjeta válida`;
  }

  private isValid = async (cardNumber: number): Promise<boolean> => {
    let numbers = Array.from(String(cardNumber));
    let sum = 0;
    numbers.forEach((value, index) => {
      let _number = parseInt(value);
      if (index % 2 === 0) {
        let _newNumber = parseInt(value) * 2;
        _number = _newNumber > 9 ? _newNumber - 9 : _newNumber;
      }
      sum += _number;
    });

    return sum % 10 === 0;
  };
}
