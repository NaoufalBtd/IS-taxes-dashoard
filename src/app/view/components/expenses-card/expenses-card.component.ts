import { Component } from '@angular/core';
import { InvoiceService } from 'src/app/utils/controller/services/invoice.service';
import { getTotalFromInvoices } from 'src/app/utils';

@Component({
  selector: 'app-expenses-card',
  templateUrl: './expenses-card.component.html',
  styleUrls: ['./expenses-card.component.css'],
})
export class ExpensesCardComponent {
  constructor(private invoiceService: InvoiceService) {}

  get totalExpenses() {
    return getTotalFromInvoices(
      this.invoiceService.getExpensesInvoices(),
      new Date()
    );
  }
}
