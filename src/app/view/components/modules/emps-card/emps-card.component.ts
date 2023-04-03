import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/controller/services/employee.service';

@Component({
  selector: 'app-emps-card',
  templateUrl: './emps-card.component.html',
  styleUrls: ['./emps-card.component.css'],
})
export class EmpsCardComponent implements OnInit {
  faUser = faUser;
  empCount$ = this.empService.employeeCount$;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.fetchEmployeeCount();
  }
}
