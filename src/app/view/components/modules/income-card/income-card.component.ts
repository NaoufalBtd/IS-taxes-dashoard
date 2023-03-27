import { Component } from '@angular/core';
import { InvoiceService } from 'src/app/controller/services/invoice.service';
import { getTotalFromInvoices } from 'src/app/utils';

@Component({
  selector: 'app-income-card',
  templateUrl: './income-card.component.html',
  styleUrls: ['./income-card.component.css'],
})
export class IncomeCardComponent {
  constructor(private invoiceService: InvoiceService) {}

  get totalIncome() {
    return getTotalFromInvoices(
      this.invoiceService.getIncomeInvoices(),
      new Date()
    );
  }
}
