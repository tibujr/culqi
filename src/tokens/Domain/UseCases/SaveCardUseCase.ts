import { SaveCardUseCaseInterface } from "../Interfaces/UseCases/SaveCardUseCaseInterface";
import { CardRepositoryInterface } from "../Interfaces/Repository/CardRepositoryInterface";
import { TokenCardEntity } from "../Entity/TokenCardEntity";

export class SaveCardUseCase implements SaveCardUseCaseInterface {
  constructor(
    private readonly cardRepositoryImplement: CardRepositoryInterface
  ) {}

  async execute(payload): Promise<Object> {
    const savedCard: TokenCardEntity =
      await this.cardRepositoryImplement.saveTemporaryCard(payload);
    const { token } = savedCard;
    return { token };
  }
}
