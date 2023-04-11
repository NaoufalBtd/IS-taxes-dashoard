import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import IrTax from '../models/IrTax.model';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root',
})
export class IrTaxService {
  private baseUrl = 'http://localhost:8036/api/v1/TaxeIR/';

  private _irTaxes$ = new BehaviorSubject<IrTax[]>([]);

  constructor(private http: HttpClient, private empsService: EmployeeService) {}

  public get irTaxes$() {
    return this._irTaxes$.asObservable();
  }

  public fetchIrTaxes(page?: number, size?: number) {
    const url = new URL(this.baseUrl);
    page && url.searchParams.append('page', page.toString());
    size && url.searchParams.append('size', size.toString());

    this.http
      .get<IrTax[]>(url.href)
      .pipe(
        tap((taxes: any[]) => {
          const irTaxes = this.formatIrTaxes(taxes);
          this._irTaxes$.next(irTaxes);
        }),
        catchError((err) => {
          console.error(err);
          return throwError('An error occurred while fetching irTaxes.');
        })
      )
      .subscribe();
  }

  public declareEmployeesTax(employees: any[]) {
    const data = {
      mois: moment().month(),
      annee: moment().year(),
      dateDeclaration: moment().format('YYYY-MM-DD'),
      societe: { id: '1', ice: 'ICE123' },
      employes: employees,
    };
    this.http.post(this.baseUrl, data).subscribe(() => {
      this.fetchIrTaxes();
      this.empsService.fetchUndeclaredEmployees();
    });
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
