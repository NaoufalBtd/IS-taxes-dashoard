import { Invoice } from './invoice.model';
import { IsTax } from './isTax.model';

export class IsItem {
  public taxeIS: IsTax = new IsTax();
  public factureGagnes: Invoice[] = [];
  public facturePerdus: Invoice[] = [];
}
