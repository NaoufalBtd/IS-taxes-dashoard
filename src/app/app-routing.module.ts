import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { DashboardIsComponent } from './view/pages/dashboard-is/dashboard-is.component';
import { LoginComponent } from './view/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardIsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
