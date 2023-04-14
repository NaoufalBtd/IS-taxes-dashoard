import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/controller/services/invoice.service';
import { getThisMonthSum } from 'src/app/shared/utils';

@Component({
  selector: 'app-expenses-card',
  templateUrl: './expenses-card.component.html',
  styleUrls: ['./expenses-card.component.css'],
})
export class ExpensesCardComponent implements OnInit {
  constructor(private invoiceService: InvoiceService) {}
  public expense = 0;

  ngOnInit(): void {
    this.invoiceService.expensesCount$.subscribe((data) => {
      this.expense = getThisMonthSum(data);
    });
  }
}
