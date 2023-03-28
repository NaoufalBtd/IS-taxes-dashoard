import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-tax-is-modal',
  templateUrl: './tax-is-modal.component.html',
  styleUrls: ['./tax-is-modal.component.css'],
})
export class TaxIsModalComponent implements OnInit {
  // @Input private
  private _invoices: Invoice[] = [];
  public invoice: Invoice = new Invoice();
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this._invoices = this.invoiceService.invoices;
  }
  saveInvoice() {
    console.log('clicked');
    this.invoiceService.addInvoice({ ...this.invoice });
  }

  get invoices(): Invoice[] {
    return this._invoices;
  }
}
