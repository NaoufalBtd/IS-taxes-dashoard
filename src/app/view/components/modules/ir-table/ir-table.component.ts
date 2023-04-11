import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import IrTax from 'src/app/controller/models/IrTax.model';
import { IrTaxService } from 'src/app/controller/services/ir-tax.service';

@Component({
  selector: 'app-ir-table',
  templateUrl: './ir-table.component.html',
  styleUrls: ['./ir-table.component.css'],
})
export class IrTableComponent implements OnInit {
  faFilePdf = faFilePdf;
  private _irTaxes: IrTax[] = [];
  p = 1;
  itemPerPage = 5;

  constructor(private irTax: IrTaxService) {}

  ngOnInit() {
    this.irTax.fetchIrTaxes(this.p, this.itemPerPage * 2);
    this.irTax.irTaxes$.subscribe((irTaxes) => {
      this._irTaxes = irTaxes;
    });
  }

  //todo: fix the pagination issue
  onPageChange(page: number) {
    this.p = page;
    this.irTax.fetchIrTaxes(page, this.itemPerPage * 2);
  }

  get irTaxes() {
    return this._irTaxes;
  }
}
