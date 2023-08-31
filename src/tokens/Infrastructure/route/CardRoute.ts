import { CardController } from "../../Application/Controller/CardController";
import { GetCardUseCase } from "../../Domain/UseCases/GetCardUseCase";
import { getPayload } from "./util/PayloadRequest";
import CardDynamoRepositoryImplement from "../AWS/CardDynamoRepositoryImplement";

module.exports.handler = async (event: any) => {
  // aplicar middleware para validar PK

  /** INFRASTRUCTURE */
  const cardRepositoryInterface = new CardDynamoRepositoryImplement();

  /** DOMAIN */
  const getCardUseCase = new GetCardUseCase(cardRepositoryInterface);

  /** APPLICATION */
  const cardController: CardController = new CardController(getCardUseCase);

  const payload: object = getPayload(event);
  return JSON.stringify(await cardController.getCard(payload));
};
