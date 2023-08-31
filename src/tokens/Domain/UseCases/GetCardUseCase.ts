import { GetCardUseCaseInterface } from "../Interfaces/UseCases/GetCardUseCaseInterface";
import { CardRepositoryInterface } from "../Interfaces/Repository/CardRepositoryInterface";
import { ProtectedCardEntity } from "../Entity/ProtectedCardEntity";

export class GetCardUseCase implements GetCardUseCaseInterface {
  constructor(
    private readonly cardRepositoryImplement: CardRepositoryInterface
  ) {}

  async execute(payload): Promise<ProtectedCardEntity> {
    const protectedCard: object =
      await this.cardRepositoryImplement.getProtectedCard(payload.token);
    return <ProtectedCardEntity>protectedCard;
  }
}
