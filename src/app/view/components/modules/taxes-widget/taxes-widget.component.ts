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

  constructor(private isTaxService: IsTaxService) {
    this.isTaxService.fetchUndeclaredTaxes();
    this.isTaxService.undeclaredTaxes$.subscribe((isTax) => {
      console.log(isTax);
      this.isTaxes = isTax;
    });
  }

  ngOnInit(): void {}
}
