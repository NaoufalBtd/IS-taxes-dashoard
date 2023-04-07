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
  public isFilled = false;
  public saving = false;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {}
  get employee() {
    return this._employee;
  }
  set employee(employee: Employee) {
    this._employee = employee;
  }

  saveEmployee() {
    this.saving = true;
    this.empService.addEmployee(this.employee, () => {
      this.saving = false;
    });
    this.clearEmployee();
    // this.empService.AddEmployee(this.employee);
    // this.empService.saveEmployee(this.employee);
  }

  checkInputs() {
    for (const key in this._employee) {
      if (this._employee[key] === '' && key !== 'id') {
        this.isFilled = false;
        break;
      }
      this.isFilled = true;
    }
  }

  clearEmployee() {
    this._employee = new Employee();
  }
}
