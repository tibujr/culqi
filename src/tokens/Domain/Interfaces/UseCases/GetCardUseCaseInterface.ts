import {ProtectedCardEntity} from "../../Entity/ProtectedCardEntity"

export interface GetCardUseCaseInterface {
  execute(payload: ProtectedCardEntity): Promise<any>
}
