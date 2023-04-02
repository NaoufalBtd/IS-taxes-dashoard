import { Component } from '@angular/core';
import { faAdd, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ir-tax-modal',
  templateUrl: './ir-tax-modal.component.html',
  styleUrls: ['./ir-tax-modal.component.css'],
})
export class IrTaxModalComponent {
  faAdd = faAdd;
  faEllipsisV = faEllipsisV;
  p: number = 1;

  employees = [
    {
      prenom: 'John',
      nom: 'Doe',
      email: 'johndoe@example.com',
      salaire: 5000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Jane',
      nom: 'Doe',
      email: 'janedoe@example.com',
      salaire: 6000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Bob',
      nom: 'Smith',
      email: 'bobsmith@example.com',
      salaire: 7000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Alice',
      nom: 'Johnson',
      email: 'alicejohnson@example.com',
      salaire: 8000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Mike',
      nom: 'Brown',
      email: 'mikebrown@example.com',
      salaire: 9000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Emily',
      nom: 'Davis',
      email: 'emilydavis@example.com',
      salaire: 10000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Tom',
      nom: 'Wilson',
      email: 'tomwilson@example.com',
      salaire: 11000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'Sara',
      nom: 'Garcia',
      email: 'saragarcia@example.com',
      salaire: 12000,
      checked: false,
      selected: false,
    },
    {
      prenom: 'David',
      nom: 'Martinez',
      email: 'davidmartinez@example.com',
      salaire: 13000,
      checked: false,
      selected: false,
    },
    { prenom: 'Amy', nom: 'Lee', email: 'amylee@example.com', salaire: 14000 },
  ];

  itemsPerPage = 3;

  constructor() {}

  ngOnInit(): void {}

  toggleEmployee(employee: any) {
    employee.selected = !employee.selected;
  }

  get selectedEmployees() {
    return this.employees.filter((employee) => employee.selected);
  }
}
