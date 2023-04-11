import { Component, OnInit } from '@angular/core';
import { IsTax } from 'src/app/controller/models/isTax.model';
import { IsTaxService } from 'src/app/controller/services/is-tax.service';

@Component({
  selector: 'app-is-table',
  templateUrl: './is-table.component.html',
  styleUrls: ['./is-table.component.css'],
})
export class IsTableComponent implements OnInit {
  private _isTaxes: IsTax[] = [];
  p = 1;
  itemPerPage = 5;

  constructor(private isTaxService: IsTaxService) {}

  ngOnInit() {
    this.isTaxService.fetchTaxesIS(this.p, this.itemPerPage * 2);
    this.isTaxService.taxesIS$.subscribe((isTaxes) => {
      this._isTaxes = isTaxes;
    });
  }

  get isTaxes(): IsTax[] {
    return this._isTaxes;
  }
}
