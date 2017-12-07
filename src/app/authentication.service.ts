import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from "./user";

@Injectable()
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  loginUser(loginData: any[]): Observable<IUser> {
    return this._http.post<IUser>("https://djdavid.herokuapp.com/api/users/login", loginData)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
