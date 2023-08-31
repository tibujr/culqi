import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.es"]

@ValidatorConstraint({ name: "EmailDomainValidator", async: false })
export class EmailDomainValidator implements ValidatorConstraintInterface {
  validate(email: string, args: ValidationArguments) {
    if (!email) {
      return false;
    }

    const _allowedDomains = allowedDomains as string[];
    const emailDomain = email.split("@")[1];

    return _allowedDomains.includes(emailDomain);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} debe tener uno de los siguientes dominio [${allowedDomains}].`;
  }
}
