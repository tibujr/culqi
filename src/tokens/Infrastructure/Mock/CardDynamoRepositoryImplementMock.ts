import BaseDynamoDbRepository from "../AWS/BaseDynamoDbRepository";
import { CardRepositoryInterface } from "../../Domain/Interfaces/Repository/CardRepositoryInterface";
import { CardEntity } from "../../Domain/Entity/CardEntity";
import { TokenCardEntity } from "../../Domain/Entity/TokenCardEntity";
import { ProtectedCardEntity } from "../../Domain/Entity/ProtectedCardEntity";

export default class CardDynamoRepositoryImplement
  extends BaseDynamoDbRepository
  implements CardRepositoryInterface
{
  tableName = "CULQI_TOKEN";

  async saveTemporaryCard(card: CardEntity): Promise<TokenCardEntity> {
    return <TokenCardEntity>{
      card_number: 4557880433763947,
      cvv: 123,
      expiration_month: "01",
      expiration_year: "2027",
      email: "mto@gmail.com",
      token: await this._gerateToken(),
      fechaExpiracion: 1693442954,
    };
  }

  async getProtectedCard(token: string): Promise<ProtectedCardEntity> {
    return <ProtectedCardEntity>{
      card_number: 4557880433763947,
      expiration_month: "01",
      expiration_year: "2027",
      email: "mto@gmail.com",
    };
  }

  async _gerateToken(): Promise<String> {
    return "tcOTRsh76tAfZdA6";
  }
}
