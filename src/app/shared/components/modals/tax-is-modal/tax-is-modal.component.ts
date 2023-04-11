import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { IsItem } from 'src/app/controller/models/isItem.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';
import { IsTaxService } from 'src/app/controller/services/is-tax.service';
import { InvoiceType } from 'src/app/shared/types';
import { getDateRangeByYearAndTrimester } from 'src/app/shared/utils';

@Component({
  selector: 'app-tax-is-modal',
  templateUrl: './tax-is-modal.component.html',
  styleUrls: ['./tax-is-modal.component.css'],
})
export class TaxIsModalComponent implements OnInit {
  // @Input private
  private _invoices: Invoice[] = [];
  public invoice: Invoice = new Invoice();
  public isItem!: IsItem;
  constructor(
    private invoiceService: InvoiceService,
    private isTaxService: IsTaxService
  ) {}

  ngOnInit() {
    this.isItem = new IsItem();
    this.isTaxService.selectedTax$.subscribe((tax) => {
      if (!tax) return;
      this.isItem.taxeIS = tax;
      const { startDate, endDate } = getDateRangeByYearAndTrimester(
        tax?.annee,
        tax?.trimestre
      );
      this.invoiceService
        .getInvoicesByDateRange(startDate, endDate)
        .subscribe((invoices) => {
          this._invoices = invoices;
          const incomeInvoices = invoices.filter(
            (inv) => inv.type === InvoiceType.income
          );
          const expenseInvoices = invoices.filter(
            (inv) => inv.type === InvoiceType.expenses
          );
          this.isItem.factureGagnes = incomeInvoices;
          this.isItem.facturePerdus = expenseInvoices;
        });
    });
  }

  saveInvoice() {
    console.log('clicked');
    this.invoiceService.addInvoice({ ...this.invoice });
  }

  declareTax() {
    this.isTaxService.declareIsTax(this.isItem);
  }

  deleteInvoice(invoiceCode: string) {
    this.invoiceService.deleteInvoice(invoiceCode);
  }

  clear() {
    this.invoice = new Invoice();
    this._invoices = [];
  }

  get invoices(): Invoice[] {
    return this._invoices;
  }
}
