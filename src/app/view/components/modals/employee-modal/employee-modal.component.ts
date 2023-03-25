import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/controller/models/employee/employee.model';
import { EmployeeService } from 'src/app/controller/service/employee.service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css'],
})
export class EmployeeModalComponent implements OnInit {
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {}
  get employee() {
    return this.empService.employee;
  }

  set employee(employee: Employee) {
    this.empService.employee = employee;
  }

  saveEmployee() {
    console.log(
      'saveEmployee() called' + JSON.stringify(this.employee.firstName)
    );
    this.empService.saveEmployee(this.employee);
  }
}
