import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent implements OnInit {
  type: 'add' | 'edit' = 'add';

  public invoice: Invoice = new Invoice();
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.selectedInvoice$.subscribe((inv) => {
      if (inv) {
        this.type = 'edit';
        this.invoice = inv;
      }
    });
  }

  saveInvoice() {
    if (this.type === 'edit') {
      this.invoiceService.updateInvoice(this.invoice);
    } else {
      this.invoiceService.addInvoice(this.invoice);
    }
    this.clearInvoice();
  }

  clearInvoice() {
    this.invoice = new Invoice();
  }
}
