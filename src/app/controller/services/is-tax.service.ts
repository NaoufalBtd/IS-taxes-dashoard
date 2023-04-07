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

  constructor(private http: HttpClient) {}

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

  get undeclaredTaxes$() {
    return this._undeclaredTaxes$.asObservable();
  }
}
