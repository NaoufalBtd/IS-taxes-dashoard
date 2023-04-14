import { Component, OnInit } from '@angular/core';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Employee } from 'src/app/controller/models/employee.model';
import { EmployeeService } from 'src/app/controller/services/employee.service';

@Component({
  selector: 'app-emps-table',
  templateUrl: './emps-table.component.html',
  styleUrls: ['./emps-table.component.css'],
})
export class EmpsTableComponent implements OnInit {
  private _employees$!: Observable<Employee[]>;
  private _searchTerm!: string;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.fetchEmployees();
    this._employees$ = this.employeeService.employees$;
    this.employeeService.searchTerms$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.employeeService.searchEmployees(term)) // only returns the result of the latest request
      )
      .subscribe();
  }

  searchByName() {
    this.employeeService.searchTerms$.next(this._searchTerm);
  }

  openModal() {
    console.log('clicked');
    this.employeeService.modalOpen$.next(true);
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }

  set searchTerm(searchTerm: string) {
    this._searchTerm = searchTerm;
  }
}
