import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { EmpTaxesTableComponent } from './view/components/emp-taxes-table/emp-taxes-table.component';
import { InvoicesTableComponent } from './view/components/invoices-table/invoices-table.component';
import { LatestEmpWidgetComponent } from './view/components/latest-emp-widget/latest-emp-widget.component';
import { EmployeeModalComponent } from './view/components/modals/employee-modal/employee-modal.component';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { SidebarComponent } from './view/components/sidebar/sidebar.component';
import { TurnoverChartComponent } from './view/components/turnover-chart/turnover-chart.component';
import { DashboardIrComponent } from './view/pages/dashboard-ir/dashboard-ir.component';
import { AddInvoiceComponent } from './view/components/modals/add-invoice/add-invoice.component';
import { DashboardIsComponent } from './view/pages/dashboard-is/dashboard-is.component';
import { NotificationWidgetComponent } from './view/components/notification-widget/notification-widget.component';
import { IncomeCardComponent } from './view/components/income-card/income-card.component';
import { ExpensesCardComponent } from './view/components/expenses-card/expenses-card.component';
import { EmployeCreateComponent } from './view/employe/employe-create/employe-create.component';
import { EmployeListComponent } from './view/employe/employe-list/employe-list.component';
import { SocieteCreateComponent } from './view/societe/societe-create/societe-create.component';
import { SocieteListComponent } from './view/societe/societe-list/societe-list.component';
import { NotificationisCreateComponent } from './view/notificationis/notificationis-create/notificationis-create.component';
import { NotificationisListComponent } from './view/notificationis/notificationis-list/notificationis-list.component';
import { TauxirCreateComponent } from './view/tauxir/tauxir-create/tauxir-create.component';
import { TauxirListComponent } from './view/tauxir/tauxir-list/tauxir-list.component';
import { TauxisCreateComponent } from './view/tauxis/tauxis-create/tauxis-create.component';
import { TauxisListComponent } from './view/tauxis/tauxis-list/tauxis-list.component';
import { TaxeirCreateComponent } from './view/taxeir/taxeir-create/taxeir-create.component';
import { TaxeirListComponent } from './view/taxeir/taxeir-list/taxeir-list.component';
import { TaxeisCreateComponent } from './view/taxeis/taxeis-create/taxeis-create.component';
import { TaxeisListComponent } from './view/taxeis/taxeis-list/taxeis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardIrComponent,
    SidebarComponent,
    LatestEmpWidgetComponent,
    EmployeeModalComponent,
    TurnoverChartComponent,
    EmpTaxesTableComponent,
    InvoicesTableComponent,
    AddInvoiceComponent,
    DashboardIsComponent,
    NotificationWidgetComponent,
    IncomeCardComponent,
    ExpensesCardComponent,
    EmployeCreateComponent,
    EmployeListComponent,
    SocieteCreateComponent,
    SocieteListComponent,
    NotificationisCreateComponent,
    NotificationisListComponent,
    TauxirCreateComponent,
    TauxirListComponent,
    TauxisCreateComponent,
    TauxisListComponent,
    TaxeirCreateComponent,
    TaxeirListComponent,
    TaxeisCreateComponent,
    TaxeisListComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
