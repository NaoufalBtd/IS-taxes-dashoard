import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {
  BehaviorSubject,
  Subject,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';
import { InvoiceType } from 'src/app/shared/types';
import { InvoiceStats } from 'src/app/shared/types/models';
import { Invoice } from '../models/invoice.model';
import { InvoiceStatistics } from '../models/invoicesStatistics';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private incomeInvoiceBaseUrl = 'http://localhost:8036/api/v1/FactureGagne/';
  private expensesInvoiceBaseUrl = 'http://localhost:8036/api/v1/Factureperte/';

  private _incomeCount$ = new Subject<InvoiceStats[]>();
  private _expensesCount$ = new Subject<InvoiceStats[]>();
  private _invoices$ = new BehaviorSubject<Invoice[]>([]);
  public _selectedInvoice$: Subject<Invoice | null> = new Subject();

  constructor(private http: HttpClient) {}

  get invoices$() {
    return this._invoices$.asObservable();
  }

  get selectedInvoice$() {
    return this._selectedInvoice$.asObservable();
  }

  get incomeCount$() {
    return this._incomeCount$.asObservable();
  }

  get expensesCount$() {
    return this._expensesCount$.asObservable();
  }

  get _invoices() {
    return this._invoices$.getValue();
  }

  fetchInvoices(page?: number) {
    const incomesUrl = new URL(`${this.incomeInvoiceBaseUrl}`);
    const expensesUrl = new URL(`${this.expensesInvoiceBaseUrl}`);
    if (page) {
      incomesUrl.searchParams.append('page', page.toString());
      expensesUrl.searchParams.append('page', page.toString());
    }
    incomesUrl.searchParams.append('size', '2');
    expensesUrl.searchParams.append('size', '2');

    const inv: Invoice[] = [];
    this.fetchIncomes(incomesUrl, inv, true);
    this.fetchExpenses(expensesUrl, inv, true);
  }

  fetchIncomes(url: URL, inv: Invoice[], commit = false) {
    this.http.get<Invoice[]>(url.href).subscribe((data) => {
      const formattedIncomes = this.getFormattedInvoices(
        data,
        InvoiceType.income
      );
      inv.push(...formattedIncomes);
      const sortedInvoices = this.sortInvoicesByDate(inv);

      commit && this._invoices$.next(sortedInvoices);
    });
  }

  fetchExpenses(url: URL, inv: Invoice[], commit = false) {
    this.http.get<Invoice[]>(url.href).subscribe((data) => {
      const formattedExpenses = this.getFormattedInvoices(
        data,
        InvoiceType.expenses
      );
      inv.push(...formattedExpenses);
      const sortedInvoices = this.sortInvoicesByDate(inv);
      commit && this._invoices$.next(sortedInvoices);
    });
  }

  getInvoicesByDateRange(startDate: string, endDate: string) {
    const incomesUrl = new URL(`${this.incomeInvoiceBaseUrl}`);
    const expensesUrl = new URL(`${this.expensesInvoiceBaseUrl}`);

    incomesUrl.searchParams.append('startDate', startDate);
    incomesUrl.searchParams.append('endDate', endDate);
    expensesUrl.searchParams.append('startDate', startDate);
    expensesUrl.searchParams.append('endDate', endDate);

    const inv: Invoice[] = [];
    const inv$ = new Subject<Invoice[]>();
    this.http.get<Invoice[]>(incomesUrl.href).subscribe((data) => {
      const formattedIncomes = this.getFormattedInvoices(
        data,
        InvoiceType.income
      );
      inv.push(...formattedIncomes);
      this.http.get<Invoice[]>(expensesUrl.href).subscribe((data) => {
        const formattedExpenses = this.getFormattedInvoices(
          data,
          InvoiceType.expenses
        );
        inv.push(...formattedExpenses);
        const sortedInvoices = this.sortInvoicesByDate(inv);
        inv$.next(sortedInvoices);
      });
    });
    return inv$.asObservable();
  }

  getInvoiceByCode(code: string) {
    return this._invoices.find((inv) => inv.code === code);
  }

  updateInvoice(invoice: Invoice) {
    let url = '';
    if (invoice.type === InvoiceType.income) {
      url = `${this.incomeInvoiceBaseUrl}${invoice.id}`;
    } else {
      url = `${this.expensesInvoiceBaseUrl}${invoice.id}`;
    }

    this.http.put(url, invoice).subscribe((data) => {
      const updatedInvoices = this._invoices.map((inv) => {
        if (inv.id === invoice.id) {
          return invoice;
        }
        return inv;
      });
      this._invoices$.next(updatedInvoices);
    });
  }

  selectInvoice(invoiceCode: string) {
    const invoice = this.getInvoiceByCode(invoiceCode);
    this._selectedInvoice$.next(invoice || null);
  }
  resetSelectedInvoice() {
    this._selectedInvoice$.next(null);
  }

  getFormattedInvoices = (invoices: Invoice[], type: InvoiceType) => {
    return invoices.map((invoice) => {
      return {
        ...invoice,
        dateFacture: moment(invoice.dateFacture).format('YYYY-MM-DD'),
        type,
      };
    });
  };

  sortInvoicesByDate(invoices: Invoice[]) {
    return invoices.sort((a, b) => {
      return moment(a.dateFacture).isBefore(b.dateFacture) ? 1 : -1;
    });
  }

  fetchIncomeStatistics() {
    const url = new URL(`${this.incomeInvoiceBaseUrl}statistics`);
    this.http
      .get<InvoiceStatistics[]>(url.href)
      .pipe(
        map((data) => {
          return data.map((d) => ({
            month: parseInt(d.month),
            year: parseInt(d.year),
            sum: parseFloat(d.sumTTC),
          }));
        }),
        tap((data) => {
          this._incomeCount$.next(data);
        }),
        catchError((err) => {
          console.error(err);
          return throwError(
            'An error occurred while fetching income invoices.'
          );
        })
      )
      .subscribe();
  }

  fetchExpensesStatistics() {
    const url = new URL(`${this.expensesInvoiceBaseUrl}statistics`);
    this.http
      .get<InvoiceStatistics[]>(url.href)
      .pipe(
        map((data) => {
          return data.map((d) => ({
            month: parseInt(d.month),
            year: parseInt(d.year),
            sum: parseFloat(d.sumTTC),
          }));
        }),
        tap((data) => {
          this._expensesCount$.next(data);
        }),
        catchError((err) => {
          console.error(err);
          return throwError(
            'An error occurred while fetching expenses invoices.'
          );
        })
      )
      .subscribe();
  }
  saveIncomeInvoice(invoice: Invoice) {
    const url = new URL(`${this.incomeInvoiceBaseUrl}`);
    return this.http.post<Invoice>(url.href, invoice).subscribe(() => {
      this.fetchInvoices();
    });
  }

  saveExpensesInvoice(invoice: Invoice) {
    const url = new URL(`${this.expensesInvoiceBaseUrl}`);
    return this.http.post<Invoice>(url.href, invoice).subscribe(() => {
      this.fetchInvoices();
    });
  }

  addInvoice(invoice: Invoice) {
    if (invoice.type === InvoiceType.income) {
      this.saveIncomeInvoice(invoice);
    } else {
      this.saveExpensesInvoice(invoice);
    }
  }

  deleteInvoice(invoiceCode: string) {
    const invoice = this.getInvoiceByCode(invoiceCode);
    if (!invoice) {
      return;
    }
    const url =
      invoice.type === InvoiceType.income
        ? `${this.incomeInvoiceBaseUrl}${invoice.id}`
        : `${this.expensesInvoiceBaseUrl}${invoice.id}`;
    this.http.delete(url).subscribe(() => {
      const newInvoices = this._invoices$.value.filter(
        (inv) => inv.code !== invoice.code
      );
      this._invoices$.next(newInvoices);
    });
  }

  // deleteInvoice(invoice: Invoice) {
  //   this._invoices = this._invoices.filter((i) => i.id !== invoice.id);
  // }

  getIncomeInvoices(): Invoice[] {
    return this._invoices.filter((i) => i.type === InvoiceType.income);
  }

  getExpensesInvoices(): Invoice[] {
    return this._invoices.filter((i) => i.type === InvoiceType.expenses);
  }

  // updateInvoice(invoice: Invoice) {
  //   this._invoices = this._invoices.map((i) => {
  //     if (i.id === invoice.id) {
  //       return invoice;
  //     }
  //     return i;
  //   });
  // }
}
