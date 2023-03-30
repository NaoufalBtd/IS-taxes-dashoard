import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8036/api/v1/employe/'; // replace with your backend URL
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  private _employees$ = this.employeesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl).pipe(
      tap((employees) => {
        this.employeesSubject.next(employees); // set result to employeesSubject
      }),
      catchError((err) => {
        console.error(err);
        return throwError('An error occurred while fetching employees.');
      })
    );
  }

  addEmployee(employee: Employee): void {
    console.log('clicked in emp service');
    this.http
      .post<Employee>(this.baseUrl, employee, this.httpOptions)
      .pipe(
        tap(() => {
          console.log('refreshed');
          this.getEmployees().subscribe(); // refetch employees after adding an employee
        }),
        catchError((err) => {
          console.error(err);
          return throwError('An error occurred while creating the employee.');
        })
      )
      .subscribe();
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions).pipe(
      tap(() => {
        this.getEmployees().subscribe(); // refetch employees after updating an employee
      }),
      catchError((err) => {
        console.error(err);
        return throwError('An error occurred while updating the employee.');
      })
    );
  }

  get employee(): Employee {
    return new Employee();
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }

  set employee(employee: Employee) {}

  addEmployeeToEdit(employee: Employee) {
    this.employee = employee;
  }
}
