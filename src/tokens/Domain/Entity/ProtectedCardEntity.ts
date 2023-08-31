export interface ProtectedCardEntityModelDb {
  card_number: number;
  expiration_month: string;
  expiration_year: string;
  email: string;
}

export class ProtectedCardEntity {
  private readonly _card_number: number;
  private readonly _expiration_month: string;
  private readonly _expiration_year: string;
  private readonly _email: string;

  constructor(data: ProtectedCardEntityModelDb) {
    this._card_number = data.card_number;
    this._expiration_month = data.expiration_month;
    this._expiration_year = data.expiration_year;
    this._email = data.email;
  }

  public static create(data: ProtectedCardEntityModelDb) {
    return new ProtectedCardEntity(data);
  }

  get card_number(): number {
    return this._card_number;
  }

  get expiration_month(): string {
    return this._expiration_month;
  }

  get expiration_year(): string {
    return this._expiration_year;
  }

  get email(): string {
    return this._email;
  }
}
