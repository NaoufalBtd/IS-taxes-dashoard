import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import IrTax from '../models/IrTax.model';

@Injectable({
  providedIn: 'root',
})
export class IrTaxService {
  private baseUrl = 'http://localhost:8036/api/v1/TaxeIR/';

  private irTaxesSubject = new BehaviorSubject<IrTax[]>([]);

  private _irTaxes$ = this.irTaxesSubject.asObservable();

  constructor(private http: HttpClient) {}

  public get irTaxes$() {
    return this._irTaxes$;
  }

  public fetchIrTaxes(page?: number, size?: number) {
    const url = `${this.baseUrl}?page=${page}&size=${size}`;

    this.http
      .get<IrTax[]>(url)
      .pipe(
        tap((taxes: any[]) => {
          console.log('taxes', taxes);
          const irTaxes = this.formatIrTaxes(taxes);
          this.irTaxesSubject.next(irTaxes);
        }),
        catchError((err) => {
          console.error(err);
          return throwError('An error occurred while fetching irTaxes.');
        })
      )
      .subscribe();
  }

  formatIrTaxes(taxes: any[]) {
    return taxes.map((tax) => {
      return {
        id: tax.id,
        date: moment(tax.annee + '-' + tax.mois, 'YYYY-MM').format('MMM, YYYY'),
        declarationDate: tax.dateDeclaration,
        amount: tax.montantIR,
      };
    });
  }
}
