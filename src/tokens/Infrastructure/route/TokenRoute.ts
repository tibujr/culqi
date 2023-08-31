import { TokenController } from "../../Application/Controller/TokenController";
import { SaveCardUseCase } from "../../Domain/UseCases/SaveCardUseCase";
import { getPayload } from "./util/PayloadRequest";
import CardDynamoRepositoryImplement from "../AWS/CardDynamoRepositoryImplement";

module.exports.handler = async (event: any) => {
  // aplicar middleware para validar PK

  /** INFRASTRUCTURE */
  const cardRepositoryInterface = new CardDynamoRepositoryImplement();

  /** DOMAIN */
  const tokenUseCase = new SaveCardUseCase(cardRepositoryInterface);

  /** APPLICATION */
  const tokenController: TokenController = new TokenController(tokenUseCase);

  const payload: object = getPayload(event);
  return JSON.stringify(await tokenController.generateToken(payload));
};
