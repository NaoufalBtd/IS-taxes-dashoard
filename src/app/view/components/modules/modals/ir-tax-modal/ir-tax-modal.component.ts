import { Component, Input, OnInit } from '@angular/core';
import { faAdd, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/controller/services/employee.service';
import { IrTaxService } from 'src/app/controller/services/ir-tax.service';
import { undeclaredEmployee } from 'src/types/models';

@Component({
  selector: 'app-ir-tax-modal',
  templateUrl: './ir-tax-modal.component.html',
  styleUrls: ['./ir-tax-modal.component.css'],
})
export class IrTaxModalComponent implements OnInit {
  @Input() employees: undeclaredEmployee[] = [];

  faAdd = faAdd;
  faEllipsisV = faEllipsisV;
  p = 1;
  checkAll = false;
  // employees$: Observable<undeclaredEmployee[]> = new Observable();

  // employees = [
  //   {
  //     prenom: 'John',
  //     nom: 'Doe',
  //     email: 'johndoe@example.com',
  //     salaire: 5000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Jane',
  //     nom: 'Doe',
  //     email: 'janedoe@example.com',
  //     salaire: 6000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Bob',
  //     nom: 'Smith',
  //     email: 'bobsmith@example.com',
  //     salaire: 7000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Alice',
  //     nom: 'Johnson',
  //     email: 'alicejohnson@example.com',
  //     salaire: 8000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Mike',
  //     nom: 'Brown',
  //     email: 'mikebrown@example.com',
  //     salaire: 9000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Emily',
  //     nom: 'Davis',
  //     email: 'emilydavis@example.com',
  //     salaire: 10000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Tom',
  //     nom: 'Wilson',
  //     email: 'tomwilson@example.com',
  //     salaire: 11000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'Sara',
  //     nom: 'Garcia',
  //     email: 'saragarcia@example.com',
  //     salaire: 12000,
  //     checked: false,
  //     selected: false,
  //   },
  //   {
  //     prenom: 'David',
  //     nom: 'Martinez',
  //     email: 'davidmartinez@example.com',
  //     salaire: 13000,
  //     checked: false,
  //     selected: false,
  //   },
  //   { prenom: 'Amy', nom: 'Lee', email: 'amylee@example.com', salaire: 14000 },
  // ];

  itemsPerPage = 3;

  constructor(
    private empService: EmployeeService,
    private irTaxService: IrTaxService
  ) {}

  ngOnInit(): void {
    // this.empService.getUndeclaredEmployees().subscribe();
    // this.employees$ = this.empService.undeclaredEmployees$;
  }

  handleDeclaration() {
    this.irTaxService.declareEmployeesTax(this.checkedEmployees);
  }

  toggleEmployee(employee: any) {
    employee.selected = !employee.selected;
  }

  toggleCheck(employee: any) {
    console.log('emp ', this.employees);
    employee.checked = !employee.checked;
  }

  toggleCheckAll(checked: boolean) {
    if (checked) {
      this.checkAll = true;
      this.employees.forEach((employee) => {
        employee.checked = true;
      });
    } else {
      this.checkAll = false;
      this.employees.forEach((employee) => {
        employee.checked = false;
      });
    }
  }

  selectCheckedEmps() {
    this.employees.forEach((employee) => {
      if (employee.checked) {
        employee.selected = true;
      }
    });
  }

  get selectedEmployees() {
    return this.employees.filter((employee) => employee.selected);
  }
  get checkedEmployees() {
    return this.employees.filter((employee) => employee.checked);
  }
}
