import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from "./product";
import { IUser } from "./user";

@Injectable()
export class DataService{
    
    constructor(private _http: HttpClient){}

    //products
    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>("https://djdavid.herokuapp.com/api/products")
            .catch(this.handleError);
    }
    getBabykledingProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>("https://djdavid.herokuapp.com/api/products/babykleding")
            .catch(this.handleError);
    }
    getZwangerschapProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>("https://djdavid.herokuapp.com/api/products/zwangerschapskledij")
            .catch(this.handleError);
    }
    getProduct(id: string): Observable<IProduct> {
        return this._http.get<IProduct>("https://djdavid.herokuapp.com/api/products/" + id)
        .catch(this.handleError);
    }
    insertProduct(product: IProduct): Observable<IProduct> {
        return this._http.post<IProduct>("https://djdavid.herokuapp.com/api/products",product)
        .catch(this.handleError);
    }
    updateProduct(product: IProduct): Observable<IProduct> {
        return this._http.put<IProduct>("https://djdavid.herokuapp.com/api/products/" + product._id,product)
        .catch(this.handleError);
    }
    deleteProduct(id: string): Observable<IProduct> {
        return this._http.delete<IProduct>("https://djdavid.herokuapp.com/api/products/" + id)
        .catch(this.handleError);
    }

    //users
    getUsers(): Observable<IUser[]>{
        return this._http.get<IUser[]>("https://djdavid.herokuapp.com/api/users")
            .catch(this.handleError);
    }
    getUser(id: string): Observable<IUser> {
        return this._http.get<IUser>("https://djdavid.herokuapp.com/api/users/" + id)
        .catch(this.handleError);
    }    
    updateUser(user: IUser): Observable<IUser> {
        return this._http.put<IUser>("https://djdavid.herokuapp.com/api/users/" + user._id,user)
        .catch(this.handleError);
    }
    deleteUser(id: string): Observable<IUser> {
        return this._http.delete<IUser>("https://djdavid.herokuapp.com/api/users/" + id)
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}