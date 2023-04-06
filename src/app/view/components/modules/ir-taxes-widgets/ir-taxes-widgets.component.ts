import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/controller/services/employee.service';
import { UndeclaredEmployee } from 'src/app/shared/types/models';

@Component({
  selector: 'app-ir-taxes-widgets',
  templateUrl: './ir-taxes-widgets.component.html',
  styleUrls: ['./ir-taxes-widgets.component.css'],
})
export class IrTaxesWidgetsComponent implements OnInit {
  faFilePdf = faFilePdf;
  private _irInvoices: any[] = [];
  private _undeclaredEmployees: UndeclaredEmployee[] = [];
  allTaxesDeclared: boolean = true;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.getUndeclaredEmployees().subscribe();
    this.empService.undeclaredEmployees$.subscribe((employees) => {
      this._undeclaredEmployees = employees;
      this.allTaxesDeclared = this._undeclaredEmployees.length === 0;
    });
  }

  get employees() {
    return this._undeclaredEmployees;
  }

  get undeclaredEmployeesLength() {
    return this._undeclaredEmployees.length;
  }

  get irInvoices() {
    return this._irInvoices;
  }
}
