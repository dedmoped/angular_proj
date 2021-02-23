
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Data } from 'src/app/models/Data';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { CronComponentComponent } from '../cron-component/cron-component.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date:string="";
  loginForm: FormGroup;
  data = new Data();
  loading = false;
  submitted = false;
  returnUrl: string;
  countries = ['Corona-19','Actors','Hearthstone'];
  name:string="";
  
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService :AuthService,
  private toastr: ToastrService,
  private dataService:DataService
  ) {}
  
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
  Name: ['', Validators.required],
  Description: ['', Validators.required],
  CronTime:['1',[Validators.required,Validators.maxLength(5)]]
  });
  this.data.apiParams="Belarus";
  }
  
  // for accessing to form fields
  get fval() { return this.loginForm.controls; }
  
  onFormSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) {
  return;
  }
  this.data.name=this.loginForm.controls.Name.value;
  this.data.description=this.loginForm.controls.Description.value;
  this.data.sourceApi=this.name;
  this.data.lastGetDataTime=this.date;
  this.data.startTime=this.date;
  this.loading = true;
  this.dataService.setData(this.data)
  .subscribe(
  data => {
  this.toastr.success("Успешно","Info",{positionClass: 'toast-bottom-right'});
  this.loading = false;
  },
  error => {
  this.toastr.error('Error');
  this.loading = false;
  });
}
getfromChild(info:string){
  console.log(info);
  this.data.apiParams=info;
}
getfromCron(info:string){
  console.log(info);
  this.data.cronTime=info;
}
}
