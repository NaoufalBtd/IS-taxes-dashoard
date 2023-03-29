import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/controller/models/employee.model';
import { EmployeeService } from 'src/app/controller/services/employee.service';

@Component({
  selector: 'app-emps-table',
  templateUrl: './emps-table.component.html',
  styleUrls: ['./emps-table.component.css'],
})
export class EmpsTableComponent implements OnInit {
  private _employees$!: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe();
    this._employees$ = this.employeeService.employees$;
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }
}
