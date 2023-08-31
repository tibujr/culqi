import { SaveCardUseCaseInterface } from "../../Domain/Interfaces/UseCases/SaveCardUseCaseInterface";
import { RequestValidation } from "../Common/Decorator/RequestValidation";
import { GenerateTokenRequest } from "../request/GenerateTokenRequest";

export class TokenController {
  constructor(private readonly tokenUseCaseInterface: SaveCardUseCaseInterface) {}

  @RequestValidation(GenerateTokenRequest)
  async generateToken(event) {
    return await this.tokenUseCaseInterface.execute(event);
  }
}
