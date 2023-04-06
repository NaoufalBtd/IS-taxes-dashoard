import { Component } from '@angular/core';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent {
  public invoice: Invoice = new Invoice();
  constructor(private invoiceService: InvoiceService) {}

  saveInvoice() {
    this.invoiceService.addInvoice(this.invoice);
  }
}
