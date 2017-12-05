import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";

@Component({
    selector:'webshop-babykledinglist',
    templateUrl:'./babykleding-list.component.html'
})
export class BabykledingListComponent implements OnInit{
    products: any[];
    errorMessage: string;
    
    constructor(private _dataService: DataService){

    }
    ngOnInit(): void{
        this._dataService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }
}