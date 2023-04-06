import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.css'],
})
export class InvoicesTableComponent implements OnInit {
  public invoices$ = new Observable<Invoice[]>();

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.fetchInvoices();
    this.invoices$ = this.invoiceService.invoices$;
  }
}
