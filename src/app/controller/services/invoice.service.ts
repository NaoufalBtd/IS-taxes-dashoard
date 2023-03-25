import { Injectable } from '@angular/core';
import { InvoiceType } from 'src/types';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  getIncomeInvoice(): Invoice[] {
    throw new Error('Method not implemented.');
  }
  private _invoices: Invoice[] = [
    {
      id: '1',
      montantHt: 100,
      montantTtc: 120,
      date: '12-12-2020',
      type: InvoiceType.expenses,
    },
    {
      id: '2',
      montantHt: 200,
      montantTtc: 240,
      date: '12-12-2023',
      type: InvoiceType.income,
    },
  ];

  constructor() {}

  get invoices(): Invoice[] {
    return this._invoices;
  }

  addInvoice(invoice: Invoice) {
    console.log('here');
    this._invoices.push(invoice);
    console.log(this._invoices);
  }

  deleteInvoice(invoice: Invoice) {
    this._invoices = this._invoices.filter((i) => i.id !== invoice.id);
  }

  getIncomeInvoices(): Invoice[] {
    return this._invoices.filter((i) => i.type === InvoiceType.income);
  }

  getExpensesInvoices(): Invoice[] {
    return this._invoices.filter((i) => i.type === InvoiceType.expenses);
  }

  updateInvoice(invoice: Invoice) {
    this._invoices = this._invoices.map((i) => {
      if (i.id === invoice.id) {
        return invoice;
      }
      return i;
    });
  }
}
