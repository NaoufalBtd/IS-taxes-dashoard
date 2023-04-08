import { Component, OnInit } from '@angular/core';
import { IsTax } from 'src/app/controller/models/isTax.model';
import { IsTaxService } from 'src/app/controller/services/is-tax.service';

@Component({
  selector: 'app-taxes-widget',
  templateUrl: './taxes-widget.component.html',
  styleUrls: ['./taxes-widget.component.css'],
})
export class TaxesWidgetComponent implements OnInit {
  public isTaxes!: IsTax[];
  public p = 1;

  constructor(private isTaxService: IsTaxService) {
    this.isTaxService.fetchUndeclaredTaxes();
    this.isTaxService.undeclaredTaxes$.subscribe((isTax) => {
      this.isTaxes = isTax;
    });
  }

  ngOnInit(): void {}

  get isTaxesEmpty() {
    return this.isTaxes.length === 0;
  }

  selectTax(id: number) {
    this.isTaxService.selectTax(id);
  }
}
