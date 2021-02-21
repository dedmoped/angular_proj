import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API_URL } from '../../app-injection-tokens';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Token} from '../../models/token'
import {tap} from 'rxjs/internal/operators'
import { FormGroup } from '@angular/forms';
export const ACCESS_TOKEN_KEY='acess_token';
export const Email='current_email';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(value: any) {
    const email=value.email;
    const login=value.login;
    const password=value.password;
    return this.http.post(`${this.apiurl}api/auth/registration`,{email,login,password})
  }

  constructor(private http: HttpClient,@Inject(API_URL)private apiurl:string,
  private jwtHelper:JwtHelperService,
  private router:Router) {
  }
  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['login']);
    }
  login(login:string, password:string ):Observable<Token> {
    return this.http.post<Token>(`${this.apiurl}api/auth/login`, {login, password}).pipe(tap(token=>{localStorage.setItem(ACCESS_TOKEN_KEY,token.access_token),localStorage.setItem(Email,token.useremail)}))
      }

      
      isAuthenticated(){
      var token=localStorage.getItem(ACCESS_TOKEN_KEY);
      return token&&!this.jwtHelper.isTokenExpired(token)
      }
}
