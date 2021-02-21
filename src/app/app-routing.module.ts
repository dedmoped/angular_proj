import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from 'src/app/app.component'
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent} from '../app/components/registration/registration.component'
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OrdersComponent } from './components/orders/orders.component';
import { StatisticComponent } from './components/statistic/statistic.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,canActivate:[AuthGuardService]
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuardService]},
  {path:'statistic',component:StatisticComponent,canActivate:[AuthGuardService]},
  { path: '**',
   redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
