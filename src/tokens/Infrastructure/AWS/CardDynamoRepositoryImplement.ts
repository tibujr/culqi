import BaseDynamoDbRepository from "./BaseDynamoDbRepository";
import { CardRepositoryInterface } from "../../Domain/Interfaces/Repository/CardRepositoryInterface";
import { CardEntity } from "../../Domain/Entity/CardEntity";
import { TokenCardEntity } from "../../Domain/Entity/TokenCardEntity";
import { cryptoRandomStringAsync } from "crypto-random-string";
import { ProtectedCardEntity } from "../../Domain/Entity/ProtectedCardEntity";

export default class CardDynamoRepositoryImplement
  extends BaseDynamoDbRepository
  implements CardRepositoryInterface
{
  tableName = "CULQI_TOKEN";

  async saveTemporaryCard(card: CardEntity): Promise<TokenCardEntity> {
    const row: object = { ...card };
    row["token"] = await this._gerateToken();
    const expirationTimeInSeconds = 900;
    row["fechaExpiracion"] =
      Math.floor(Date.now() / 1000) + expirationTimeInSeconds;
    await this.put(row);
    return <TokenCardEntity>row;
  }

  async getProtectedCard(token: string): Promise<ProtectedCardEntity> {
    const params = {
      KeyConditionExpression: "#tokenAttr = :tokenValue",
      ExpressionAttributeNames: {
        "#tokenAttr": "token",
      },
      ExpressionAttributeValues: {
        ":tokenValue": token,
      },
    };
    // const result = await this.query(params);
    // const [ protectedCard ] = result.map((item) => ProtectedCardEntity.create(item));
    const [protectedCard] = await this.query(params);
    delete protectedCard.token;
    delete protectedCard.fechaExpiracion;
    delete protectedCard.cvv;
    return protectedCard;
  }

  async _gerateToken(): Promise<String> {
    const tokenLength = 16;
    const token = await cryptoRandomStringAsync({
      length: tokenLength,
      type: "alphanumeric",
    });
    return token;
  }
}
