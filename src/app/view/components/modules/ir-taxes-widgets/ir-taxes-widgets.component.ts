import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/controller/models/employee.model';
import { EmployeeService } from 'src/app/controller/services/employee.service';
import { IrTaxService } from 'src/app/controller/services/ir-tax.service';

@Component({
  selector: 'app-ir-taxes-widgets',
  templateUrl: './ir-taxes-widgets.component.html',
  styleUrls: ['./ir-taxes-widgets.component.css'],
})
export class IrTaxesWidgetsComponent implements OnInit {
  faFilePdf = faFilePdf;
  private _irInvoices: any[] = [];
  private _undeclaredEmployees: Employee[] = [];

  constructor(
    private IrTaxService: IrTaxService,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.IrTaxService.fetchIrTaxes(0, 5);
    this.IrTaxService.irTaxes$.subscribe((irTaxes) => {
      this._irInvoices = irTaxes;
    });
    this.empService.getUndeclaredEmployees().subscribe((employees) => {
      console.log(employees);
      this._undeclaredEmployees = employees;
    });
  }

  get irInvoices() {
    return this._irInvoices;
  }
}
