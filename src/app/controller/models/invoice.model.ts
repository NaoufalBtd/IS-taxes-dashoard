import { InvoiceType } from 'src/app/shared/types';

export class Invoice {
  type: InvoiceType = InvoiceType.income;
  id: string = '';
  code: string = '';
  montantHT: number = 0;
  montantTTC: number = 0;
  dateFacture: string = '';
}
