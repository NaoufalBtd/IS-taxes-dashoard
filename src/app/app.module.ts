import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LatestEmpWidgetComponent } from './components/latest-emp-widget/latest-emp-widget.component';
import { EmployeeModalComponent } from './components/modals/employee-modal/employee-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TurnoverChartComponent } from './components/turnover-chart/turnover-chart.component';
import { DashboardIrComponent } from './pages/dashboard-ir/dashboard-ir.component';
import { EmpTaxesTableComponent } from './components/emp-taxes-table/emp-taxes-table.component';
import { InvoicesTableComponent } from './components/invoices-table/invoices-table.component';

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
