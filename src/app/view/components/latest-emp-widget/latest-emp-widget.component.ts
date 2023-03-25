import { Component } from '@angular/core';
import { faAdd, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/controller/service/employee.service';
@Component({
  selector: 'app-latest-emp-widget',
  templateUrl: './latest-emp-widget.component.html',
  styleUrls: ['./latest-emp-widget.component.css'],
})
export class LatestEmpWidgetComponent {
  faAdd = faAdd;
  faEllipsisV = faEllipsisV;

  constructor(private empService: EmployeeService) {}

  get employees() {
    return this.empService.getEmployees().slice(-5);
  }
}
