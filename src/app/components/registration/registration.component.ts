import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: AuthService,
    private toastr: ToastrService
    ) { }
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      });
      }
      get fval() { return this.registerForm.controls; }

onFormSubmit(){
this.submitted = true;
// return for here if form is invalid
if (this.registerForm.invalid) {
return;
}
this.loading = true;
this.userService.register(this.registerForm.value).subscribe(
(data)=>{
  this.toastr.success("Info",'Успешно',{timeOut:3000,positionClass:'bottom-right'})
this.router.navigate(['/login']);
},
(error)=>{
this.toastr.error(error.error.message, 'Проверьте данные',{timeOut:3000});
this.loading = false;
}
)
}

}
