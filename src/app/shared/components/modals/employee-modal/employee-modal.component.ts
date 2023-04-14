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
  public modalType: 'add' | 'edit' = 'add';
  public inputsFilled = false;
  public saving = false;
  isOpen = false;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.modalOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
    this.empService.selectedEmployee$.subscribe((emp) => {
      if (emp) {
        this._employee = emp;
        this.modalType = 'edit';
      } else {
        this.clearEmployee();
        this.modalType = 'add';
      }
    });
  }

  get employee() {
    return this._employee;
  }
  set employee(employee: Employee) {
    this._employee = employee;
  }

  saveEmployee() {
    console.log('clicked');
    this.saving = true;
    if (this.modalType === 'edit') {
      console.log('Edit');
      this.empService.updateEmployee(this.employee).subscribe(() => {
        this.saving = false;
      });
    } else {
      this.empService.addEmployee(this.employee, () => {
        this.saving = false;
      });
    }
    this.empService.modalOpen$.next(false);
    this.clearEmployee();
    // this.empService.AddEmployee(this.employee);
    // this.empService.saveEmployee(this.employee);
  }

  close() {
    this.empService.modalOpen$.next(false);
    // this.clearEmployee();
  }

  checkInputs() {
    for (const key in this._employee) {
      if (this._employee[key] === '' && key !== 'id') {
        this.inputsFilled = false;
        break;
      }
      this.inputsFilled = true;
    }
  }

  clearEmployee() {
    this._employee = new Employee();
  }
}
