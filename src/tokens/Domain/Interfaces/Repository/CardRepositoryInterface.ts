import { TokenCardEntity } from "../../Entity/TokenCardEntity";
import { ProtectedCardEntity } from "../../Entity/ProtectedCardEntity";

export interface CardRepositoryInterface {
  saveTemporaryCard(card: object): Promise<TokenCardEntity>;
  getProtectedCard(token: string): Promise<ProtectedCardEntity>;
}
