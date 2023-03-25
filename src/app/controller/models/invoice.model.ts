import { InvoiceType } from 'src/types';

export class Invoice {
  type: InvoiceType | undefined;
  id: string | undefined;
  montantHt: number | undefined;
  montantTtc: number | undefined;
  date: string | undefined;
}
