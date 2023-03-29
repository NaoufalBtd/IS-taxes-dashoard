import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emps-card',
  templateUrl: './emps-card.component.html',
  styleUrls: ['./emps-card.component.css'],
})
export class EmpsCardComponent {
  faUser = faUser;
  constructor() {}
}
