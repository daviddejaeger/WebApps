import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";
import { IProduct } from "../product";

@Component({
    selector:'webshop-babykledinglist',
    templateUrl:'./babykleding-list.component.html'
})
export class BabykledingListComponent implements OnInit{
    products: IProduct[];
    errorMessage: string;
    
    constructor(private _dataService: DataService){

    }
    ngOnInit(): void{
        this._dataService.getBabykledingProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }
}