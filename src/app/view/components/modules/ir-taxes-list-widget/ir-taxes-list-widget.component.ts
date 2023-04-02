import { Component } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { IrTaxService } from 'src/app/controller/services/ir-tax.service';

@Component({
  selector: 'app-ir-taxes-list-widget',
  templateUrl: './ir-taxes-list-widget.component.html',
  styleUrls: ['./ir-taxes-list-widget.component.css'],
})
export class IrTaxesListWidgetComponent {
  faFilePdf = faFilePdf;
  private _irInvoices: any[] = [];

  constructor(private IrTaxService: IrTaxService) {}

  ngOnInit(): void {
    this.IrTaxService.fetchIrTaxes(0, 5);
    this.IrTaxService.irTaxes$.subscribe((irTaxes) => {
      this._irInvoices = irTaxes;
    });
  }

  get irInvoices() {
    return this._irInvoices;
  }
}
