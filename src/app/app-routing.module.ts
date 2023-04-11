import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardIrComponent } from './view/pages/dashboard-ir/dashboard-ir.component';
import { DashboardIsComponent } from './view/pages/dashboard-is/dashboard-is.component';
import { LoginComponent } from './view/pages/login/login.component';
import { ProfileComponent } from './view/pages/profile/profile.component';
import { TaxesComponent } from './view/pages/taxes/taxes.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardIsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employee',
    component: DashboardIrComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'taxes',
    component: TaxesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
