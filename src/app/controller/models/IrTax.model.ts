export default class IrTax {
  public id: string;
  public amount: string;
  public date: string;
  public declarationDate: string;

  constructor(
    id: string,
    amount: string,
    date: string,
    declarationDate: string
  ) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.declarationDate = declarationDate;
  }
}
