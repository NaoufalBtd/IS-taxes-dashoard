import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { DashboardIrComponent } from './view/pages/dashboard-ir/dashboard-ir.component';
import { DashboardIsComponent } from './view/pages/dashboard-is/dashboard-is.component';
import { LoginComponent } from './view/pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardIsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employee',
    component: DashboardIrComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
