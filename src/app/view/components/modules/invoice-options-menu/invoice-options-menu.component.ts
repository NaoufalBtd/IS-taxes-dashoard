import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-invoice-options-menu',
  templateUrl: './invoice-options-menu.component.html',
  styleUrls: ['./invoice-options-menu.component.css'],
})
export class InvoiceOptionsMenuComponent implements OnInit {
  @Input() invoiceCode!: string;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {}

  selectInvoice() {
    this.invoiceService.selectInvoice(this.invoiceCode);
  }
}
