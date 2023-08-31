import { Length, IsString, IsDefined } from "class-validator";

export class GetCardRequest {
  @IsDefined()
  @IsString()
  @Length(16, 16)
  token: string;
}
