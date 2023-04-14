import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IsTax } from '../models/isTax.model';

@Injectable({
  providedIn: 'root',
})
export class IsTaxService {
  private baseUrl = 'http://localhost:8036/api/v1/TaxeIS/';

  private _undeclaredTaxes$ = new BehaviorSubject<IsTax[]>([]);
  private _taxesIS$ = new BehaviorSubject<IsTax[]>([]);
  private _selectedTax$ = new BehaviorSubject<IsTax | null>(null);

  constructor(private http: HttpClient) {}

  fetchTaxesIS(page?: number, size: number = 5) {
    const url = new URL(this.baseUrl);
    page && url.searchParams.append('page', (page - 1).toString());
    url.searchParams.append('size', size.toString());

    this.http.get<IsTax[]>(url.toString()).subscribe({
      next: (taxesIS) => {
        this._taxesIS$.next(taxesIS);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  fetchUndeclaredTaxes() {
    const url = this.baseUrl + 'undeclared';
    this.http.get<IsTax[]>(url).subscribe({
      next: (undeclaredTaxes) => {
        this._undeclaredTaxes$.next(undeclaredTaxes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  declareIsTax(tax: IsTax) {
    this.http.post(this.baseUrl, tax).subscribe({
      next: () => {
        this.fetchUndeclaredTaxes();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectTax(id: number) {
    const selectedTax = this._undeclaredTaxes$.value.find(
      (tax) => tax.id === id
    );
    this._selectedTax$.next(selectedTax || null);
  }

  get taxesIS$() {
    return this._taxesIS$.asObservable();
  }

  get undeclaredTaxes$() {
    return this._undeclaredTaxes$.asObservable();
  }

  get selectedTax$() {
    return this._selectedTax$.asObservable();
  }
}
