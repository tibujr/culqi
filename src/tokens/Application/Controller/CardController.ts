import { GetCardUseCaseInterface } from "../../Domain/Interfaces/UseCases/GetCardUseCaseInterface";
import { RequestValidation } from "../Common/Decorator/RequestValidation";
import { GetCardRequest } from "../request/GetCardRequest";

export class CardController {
  constructor(private readonly getCardUseCaseInterface: GetCardUseCaseInterface) {}

  @RequestValidation(GetCardRequest)
  async getCard(event) {
    return await this.getCardUseCaseInterface.execute(event);
  }
}
