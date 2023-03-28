import { Injectable } from '@angular/core';
import IrTax from '../models/IrTax.model';

@Injectable({
  providedIn: 'root',
})
export class IrTaxService {
  private _irTaxes: IrTax[] = [
    {
      id: 'TAX001',
      amount: '25000',
      year: '2021',
      month: 'January',
    },
    {
      id: 'TAX002',
      amount: '30000',
      year: '2021',
      month: 'February',
    },
    {
      id: 'TAX003',
      amount: '28000',
      year: '2021',
      month: 'March',
    },
    {
      id: 'TAX004',
      amount: '32000',
      year: '2021',
      month: 'April',
    },
    {
      id: 'TAX005',
      amount: '27000',
      year: '2021',
      month: 'May',
    },
  ];

  constructor() {}

  get irTaxes(): IrTax[] {
    return this._irTaxes;
  }
}
