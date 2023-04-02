import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { DashboardLayoutComponent } from './view/components/layouts/dashboard-layout/dashboard-layout.component';
import { BannerComponent } from './view/components/modules/banner/banner.component';
import { EmpOptionsMenuComponent } from './view/components/modules/emp-options-menu/emp-options-menu.component';
import { EmpTaxesTableComponent } from './view/components/modules/emp-taxes-table/emp-taxes-table.component';
import { EmpsCardComponent } from './view/components/modules/emps-card/emps-card.component';
import { EmpsTableComponent } from './view/components/modules/emps-table/emps-table.component';
import { ExpensesCardComponent } from './view/components/modules/expenses-card/expenses-card.component';
import { IncomeCardComponent } from './view/components/modules/income-card/income-card.component';
import { InvoicesTableComponent } from './view/components/modules/invoices-table/invoices-table.component';
import { IrTaxesListWidgetComponent } from './view/components/modules/ir-taxes-list-widget/ir-taxes-list-widget.component';
import { IrTaxesWidgetsComponent } from './view/components/modules/ir-taxes-widgets/ir-taxes-widgets.component';
import { LastTaxWidgetComponent } from './view/components/modules/last-tax-widget/last-tax-widget.component';
import { LatestEmpWidgetComponent } from './view/components/modules/latest-emp-widget/latest-emp-widget.component';
import { AddInvoiceComponent } from './view/components/modules/modals/add-invoice/add-invoice.component';
import { EmployeeModalComponent } from './view/components/modules/modals/employee-modal/employee-modal.component';
import { IrTaxModalComponent } from './view/components/modules/modals/ir-tax-modal/ir-tax-modal.component';
import { TaxIsModalComponent } from './view/components/modules/modals/tax-is-modal/tax-is-modal.component';
import { NavbarComponent } from './view/components/modules/navbar/navbar.component';
import { NotificationWidgetComponent } from './view/components/modules/notification-widget/notification-widget.component';
import { NotificationComponent } from './view/components/modules/notification/notification.component';
import { SidebarComponent } from './view/components/modules/sidebar/sidebar.component';
import { TaxesWidgetComponent } from './view/components/modules/taxes-widget/taxes-widget.component';
import { TurnoverChartComponent } from './view/components/modules/turnover-chart/turnover-chart.component';
import { DashboardIrComponent } from './view/pages/dashboard-ir/dashboard-ir.component';
import { DashboardIsComponent } from './view/pages/dashboard-is/dashboard-is.component';
import { LoginComponent } from './view/pages/login/login.component';
import { ProfileComponent } from './view/pages/profile/profile.component';

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
    NotificationComponent,
    LastTaxWidgetComponent,
    TaxesWidgetComponent,
    DashboardLayoutComponent,
    LoginComponent,
    IrTaxesWidgetsComponent,
    EmpsTableComponent,
    TaxIsModalComponent,
    ProfileComponent,
    BannerComponent,
    EmpsCardComponent,
    EmpOptionsMenuComponent,
    IrTaxesListWidgetComponent,
    IrTaxModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgChartsModule,
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private router: Router) {}
}
