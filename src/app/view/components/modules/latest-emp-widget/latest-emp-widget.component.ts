import { Component, OnInit } from '@angular/core';
import { faAdd, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/controller/models/employee.model';
import { EmployeeService } from 'src/app/controller/services/employee.service';
@Component({
  selector: 'app-latest-emp-widget',
  templateUrl: './latest-emp-widget.component.html',
  styleUrls: ['./latest-emp-widget.component.css'],
})
export class LatestEmpWidgetComponent implements OnInit {
  faAdd = faAdd;
  faEllipsisV = faEllipsisV;
  private _employees: Employee[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    // this.empService.getEmployees(3, 3).subscribe((emp) => {
    //   this._employees = emp;
    // });
  }

  get employees(): Employee[] {
    return this._employees;
  }
}
