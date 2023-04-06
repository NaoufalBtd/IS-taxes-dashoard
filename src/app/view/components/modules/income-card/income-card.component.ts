import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/controller/services/invoice.service';
import { getThisMonthSum } from 'src/app/shared/utils';

@Component({
  selector: 'app-income-card',
  templateUrl: './income-card.component.html',
  styleUrls: ['./income-card.component.css'],
})
export class IncomeCardComponent implements OnInit {
  constructor(private invoiceService: InvoiceService) {}
  public income = 0;

  ngOnInit(): void {
    this.invoiceService.incomeCount$.subscribe((data) => {
      this.income = getThisMonthSum(data);
    });
  }
}
