import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from "./user";

@Injectable()
export class AuthenticationService{
  TOKEN_KEY = 'token';
  USERNAME_KEY = 'username';

  username = localStorage.getItem(this.USERNAME_KEY);
  constructor(private _http: HttpClient) { }

  loginUser(loginData: any[]): Observable<any> {
    return this._http.post<any>("https://djdavid.herokuapp.com/api/users/login", loginData)
    .do(data => {
      this.saveToken(data.token);
      this.saveUsername(data.username);
    })
    .catch(this.handleError);
  }

  insertUser(user: IUser): Observable<IUser> {
    return this._http.post<any>("https://djdavid.herokuapp.com/api/users",user)
    .do(data => {
      this.saveToken(data.token);
      this.saveUsername(data.username);
    })
    .catch(this.handleError);
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  saveUsername(username){
    localStorage.setItem(this.USERNAME_KEY, username);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  resetUsername(){
    this.username =  localStorage.getItem(this.USERNAME_KEY);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
