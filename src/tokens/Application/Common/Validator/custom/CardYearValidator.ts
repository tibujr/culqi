import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "CardYearValidator", async: false })
export class CardYearValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return this.isValid(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} no se encuentra en el rango de años permitido.`;
  }

  private isValid = async (year: string): Promise<boolean> => {
    const _valueNumber = parseInt(year);
    const currentYear: number = new Date().getFullYear();
    return _valueNumber >= currentYear && _valueNumber <= currentYear + 5;
  };
}
