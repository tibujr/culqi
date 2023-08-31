export interface CardEntityModelDb {
  card_number: number;
  cvv: number;
  expiration_month: string;
  expiration_year: string;
  email: string;
  token: string;
  fechaExpiracion: number;
}

export class CardEntity {
  private readonly _card_number: number;
  private readonly _cvv: number;
  private readonly _expiration_month: string;
  private readonly _expiration_year: string;
  private readonly _email: string;
  private _token: string;
  private _fechaExpiracion: number;

  constructor(data: CardEntityModelDb) {
    this._card_number = data.card_number;
    this._cvv = data.cvv;
    this._expiration_month = data.expiration_month;
    this._expiration_year = data.expiration_year;
    this._email = data.email;
    this._token = data.token;
    this._fechaExpiracion = data.fechaExpiracion;
  }

  public static create(data: CardEntityModelDb) {
    return new CardEntity(data);
  }

  get card_number(): number {
    return this._card_number;
  }

  get cvv(): number {
    return this._cvv;
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

  get token(): string {
    return this._token;
  }

  get fechaExpiracion(): number {
    return this._fechaExpiracion;
  }
}
