import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/controller/models/employee.model';
import { EmployeeService } from 'src/app/controller/services/employee.service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css'],
})
export class EmployeeModalComponent implements OnInit {
  private _employee: Employee = new Employee();
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {}
  get employee() {
    return this._employee;
  }

  saveEmployee() {
    console.log('saveEmployee() called' + JSON.stringify(this.employee.prenom));
    this.empService.addEmployee(this.employee);
    // this.empService.AddEmployee(this.employee);
    // this.empService.saveEmployee(this.employee);
  }
}
