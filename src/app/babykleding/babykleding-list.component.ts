import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";
import { IProduct } from "../product";
import { IBrand } from "../brand";
import { ICategory } from "../category";

@Component({
    selector:'webshop-babykledinglist',
    templateUrl:'./babykleding-list.component.html',
    styleUrls: ['./babykleding-list.component.css']
})
export class BabykledingListComponent implements OnInit{
    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: string;
    brands: IBrand[] = [];
    categories: any[] = [];
    
    constructor(private _dataService: DataService){

    }
    ngOnInit(): void{
        this._dataService.getBabykledingProducts()
            .subscribe(products => {

                this.products = products;

                for(var i = 0; i < products.length; i++) {
                    var obj = products[i];
                    
                    var lookupBrand = this._containsBrand(this.brands, obj.brand);
                    if(lookupBrand == null){
                        this.brands.push({name: obj.brand, count: 1});
                    }
                    else{
                        lookupBrand.count += 1;
                    } 
                    
                    var lookupCategory = this._containsCategory(this.categories, obj.category);
                    if(lookupCategory == null){
                        this.categories.push({name: obj.category, count: 1});
                    }
                    else{
                        lookupCategory.count += 1;
                    } 
                }
            },error => this.errorMessage = <any>error);
        
    }
    _containsBrand(brands: IBrand[], value) {
        for(var i = 0; i < brands.length; i++) {
            var obj = brands[i];
            if(obj.name == value){
                return brands[i];
            }       
        }
        return null;
     }
     _containsCategory(categories: ICategory[], value) {
        for(var i = 0; i < categories.length; i++) {
            var obj = categories[i];
            if(obj.name == value){
                return categories[i];
            }       
        }
        return null;
     }
     
    
}