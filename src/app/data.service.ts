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
        return this._http.get<IProduct[]>('http://localhost:3001/api/products')
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}