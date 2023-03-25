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
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
