import { Component, Input, OnInit } from '@angular/core';
import { faAdd, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/controller/services/employee.service';
import { IrTaxService } from 'src/app/controller/services/ir-tax.service';
import { UndeclaredEmployee } from 'src/app/shared/types/models';

@Component({
  selector: 'app-ir-tax-modal',
  templateUrl: './ir-tax-modal.component.html',
  styleUrls: ['./ir-tax-modal.component.css'],
})
export class IrTaxModalComponent implements OnInit {
  @Input() employees: UndeclaredEmployee[] = [];

  faAdd = faAdd;
  faEllipsisV = faEllipsisV;
  p = 1;
  checkAll = false;

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
