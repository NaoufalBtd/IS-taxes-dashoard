import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { httpOptions } from 'src/app/shared/constants';
import { UndeclaredEmployee } from 'src/app/shared/types/models';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8036/api/v1/employe/';

  private _employees$ = new BehaviorSubject<Employee[]>([]);
  private _undeclaredEmployees$ = new BehaviorSubject<UndeclaredEmployee[]>([]);
  private _employeeCount$ = new BehaviorSubject<number>(0);
  private _selectedEmployee$ = new Subject<Employee | null>();
  public searchTerms$ = new Subject<string>();
  public modalOpen$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  fetchEmployees() {
    const url = new URL(this.baseUrl);
    return this.http
      .get<Employee[]>(this.baseUrl)
      .pipe(
        tap((employees) => {
          this._employees$.next(employees);
        }),
        catchError((err) => {
          console.error(err);
          return throwError('An error occurred while fetching employees.');
        })
      )
      .subscribe();
  }

  searchEmployees(searchTerm: string) {
    const url = new URL(this.baseUrl);
    url.searchParams.append('name', searchTerm);

    return this.http.get<Employee[]>(url.href).pipe(
      tap((employees) => {
        this._employees$.next(employees);
      }),
      catchError((err) => {
        console.error(err);
        return throwError('An error occurred while fetching employees.');
      })
    );
  }

  addEmployee(employee: Employee, next?: (value: Employee) => void): void {
    console.log('clicked in emp service');
    this.http
      .post<Employee>(this.baseUrl, employee, httpOptions)
      .pipe(
        tap(() => {
          console.log('refreshed');
          this.fetchEmployees(); // refetch employees after adding an employee
        }),
        catchError((err) => {
          console.error(err);
          return throwError('An error occurred while creating the employee.');
        })
      )
      .subscribe(next);
  }

  public getUndeclaredEmployees() {
    const year = moment().year();
    const month = moment().month();
    const url = `${this.baseUrl}undeclared/ICE123/${year}/${month}`;
    return this.http.get<Employee[]>(url).pipe(
      tap((employees) => {
        const emps = employees.map((emp) => ({
          ...emp,
          checked: false,
          selected: false,
        }));
        this._undeclaredEmployees$.next(emps);
      }),
      catchError((err) => {
        console.error(err);
        return throwError(
          'An error occurred while fetching undeclared employees.'
        );
      })
    );
  }
  public fetchUndeclaredEmployees() {
    this.getUndeclaredEmployees().subscribe();
  }

  public fetchEmployeeCount() {
    const url = `${this.baseUrl}count`;
    return this.http
      .get<number>(url)
      .pipe(
        tap((count) => {
          this._employeeCount$.next(count);
        }),
        catchError((err) => {
          console.error(err);
          return throwError(
            'An error occurred while fetching employees count.'
          );
        })
      )
      .subscribe();
  }

  getEmployeeById(id: string) {
    return this._employees$.value.find((emp) => emp.id == id);
  }

  selectEmployee(id: string) {
    const employee = this.getEmployeeById(id);
    if (employee) {
      this._selectedEmployee$.next({ ...employee });
    }
  }

  //todo: in the update i get an error of cors
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl, employee, httpOptions).pipe(
      tap(() => {
        this.fetchEmployees(); // refetch employees after updating an employee
      }),
      catchError((err) => {
        console.error(err);
        return throwError('An error occurred while updating the employee.');
      })
    );
  }

  get employee() {
    return new Employee();
  }

  get employees$() {
    return this._employees$.asObservable();
  }

  get employeeCount$() {
    return this._employeeCount$.asObservable();
  }

  get undeclaredEmployees$() {
    return this._undeclaredEmployees$.asObservable();
  }

  get selectedEmployee$() {
    return this._selectedEmployee$.asObservable();
  }

  set employee(employee: Employee) {}

  addEmployeeToEdit(employee: Employee) {
    this.employee = employee;
  }
}
