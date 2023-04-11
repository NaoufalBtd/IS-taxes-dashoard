import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/controller/services/employee.service';

@Component({
  selector: 'app-emp-options-menu',
  templateUrl: './emp-options-menu.component.html',
  styleUrls: ['./emp-options-menu.component.css'],
})
export class EmpOptionsMenuComponent implements OnInit {
  @Input() employeeId!: string;
  // employee: Employee = new Employee();

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    // const emp = this.empService.getEmployeeById(this.employeeId);
    // if (emp) {
    //   this.employee = emp;
    // } else {
    //   this.toastr.error('An error occurred while fetching employee data.');
    // }
  }

  selectEmp() {
    this.empService.modalOpen$.next(true);
    this.empService.selectEmployee(this.employeeId);
  }
}
