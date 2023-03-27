import { Component } from '@angular/core';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.css'],
})
export class InvoicesTableComponent {
  constructor(private invoiceService: InvoiceService) {}

  get invoices() {
    return this.invoiceService.invoices;
  }
}
