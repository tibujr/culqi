import {
  IsNumber,
  Length,
  IsEmail,
  IsIn,
  IsString,
  Validate,
  IsDefined,
} from "class-validator";
import { LuhnValidator } from "../Common/Validator/custom/LuhnValidator";
import { NumberLengthValidator } from "../Common/Validator/custom/NumberLengthValidator";
import { CardYearValidator } from "../Common/Validator/custom/CardYearValidator";
import { EmailDomainValidator } from "../Common/Validator/custom/EmailDomainValidator";

export class GenerateTokenRequest {
  @IsDefined()
  @IsNumber()
  @Validate(LuhnValidator)
  @Validate(NumberLengthValidator, [13 ,16])
  card_number: number;

  @IsDefined()
  @IsNumber()
  @Validate(NumberLengthValidator, [3 ,4])
  cvv: number;

  @IsString()
  @Length(2)
  @IsIn(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"])
  expiration_month: string;

  @IsDefined()
  @IsString()
  @Length(4, 4)
  @Validate(CardYearValidator)
  expiration_year: string;

  @IsDefined()
  @IsEmail()
  @Length(5, 100)
  @Validate(EmailDomainValidator)
  email: string;
}
