import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { API_URL } from './app-injection-tokens';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {RegistrationComponent} from '../app/components/registration/registration.component'
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { OrdersComponent } from './components/orders/orders.component';
import{MatCardModule} from '@angular/material/card'
import{MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import{MatTableModule} from '@angular/material/table'
import{MatIconModule} from '@angular/material/icon'
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { StatisticComponent } from './components/statistic/statistic.component';
import { CronComponentComponent } from './components/cron-component/cron-component.component';
import { CronEditorModule } from 'ngx-cron-editor';
export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    UpdateComponent,
    DynamicFormComponent,
    OrdersComponent,
    StatisticComponent,
    CronComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    CronEditorModule,
    DlDateTimePickerModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config:{
      tokenGetter,
      allowedDomains:environment.tokenWhiteListedDomains
      }
    })
  ],
  providers: [{provide:API_URL,useValue:environment.webApi}],
  bootstrap: [AppComponent]
})
export class AppModule { }
