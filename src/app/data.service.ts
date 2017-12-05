import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from "./product";

@Injectable()
export class DataService{
    private _productUrl = "www.mywebservice.com/api/products"
    
    constructor(private _http: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>("https://djdavid.herokuapp.com/api/products")
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getBabykledingProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>("https://djdavid.herokuapp.com/api/products/babykleding")
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getZwangerschapProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>("https://djdavid.herokuapp.com/api/products/zwangerschapskledij")
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getProduct(id: number): Observable<IProduct> {
        return this._http.get<IProduct>("https://djdavid.herokuapp.com/api/products" + id)
        .catch(this.handleError);
    }
    insertProduct(product: IProduct): Observable<IProduct> {
        return this._http.post<IProduct>("https://djdavid.herokuapp.com/api/products",product)
        .catch(this.handleError);
    }
    updateProduct(product: IProduct): Observable<IProduct> {
        return this._http.put<IProduct>("https://djdavid.herokuapp.com/api/products" + product._id,product)
        .catch(this.handleError);
    }
    deleteProduct(id: number): Observable<IProduct> {
        return this._http.delete<IProduct>("https://djdavid.herokuapp.com/api/products" + id)
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}