import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-babykleding-detail',
  templateUrl: './babykleding-detail.component.html',
  styleUrls: ['./babykleding-detail.component.css']
})
export class BabykledingDetailComponent implements OnInit {
  product: IProduct;
  errorMessage: string;
  quantity: number =1;

  constructor(private _route: ActivatedRoute, private _dataService:DataService) { }

  ngOnInit() {
    var id = this._route.snapshot.paramMap.get('id');
    this._dataService.getProduct(id)
      .subscribe(product => this.product = product,
      error => this.errorMessage = <any>error);
  }
  decrement(){
    if (this.quantity >1){
      this.quantity -= 1;
    }
  }
  increment(){
    this.quantity += 1;
  }
}
