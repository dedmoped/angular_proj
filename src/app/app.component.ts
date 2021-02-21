import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-proj';
 
  constructor(private as:AuthService) {

  }
  public get isLoggedIn(){
  return this.as.isAuthenticated();
  }

  login(email:string,password:string){
    alert("dada")
    this.as.login(email,password).subscribe(res=>{},error=>{alert("Eroor")});
  }
  
  logout(){
    this.as.logout();
  }

}
