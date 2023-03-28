import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { IrTaxService } from 'src/app/controller/services/ir-tax.service';
import { formatIrTaxes } from 'src/app/utils';

@Component({
  selector: 'app-ir-taxes-widgets',
  templateUrl: './ir-taxes-widgets.component.html',
  styleUrls: ['./ir-taxes-widgets.component.css'],
})
export class IrTaxesWidgetsComponent implements OnInit {
  faFilePdf = faFilePdf;
  private _irInvoices: any[] = [];

  constructor(private IrTaxService: IrTaxService) {}

  ngOnInit(): void {
    this._irInvoices = formatIrTaxes(this.IrTaxService.irTaxes);
  }

  get irInvoices() {
    return this._irInvoices;
  }
}
