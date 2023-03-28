import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/controller/models/employee.model';
import { EmployeeService } from 'src/app/controller/services/employee.service';

@Component({
  selector: 'app-emps-table',
  templateUrl: './emps-table.component.html',
  styleUrls: ['./emps-table.component.css'],
})
export class EmpsTableComponent implements OnInit {
  private _employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this._employees = this.employeeService.getEmployees().slice(0,5);
  }

  get employees(): Employee[] {
    return this._employees;
  }
}
