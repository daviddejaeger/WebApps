import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  loading = false;
  user: any = {
    voornaam: "",
    achternaam: "",
    email: "",
    wachtwoord: "",
    wachtwoord2: "",
    isAdmin: false
  };
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    
  } 
  registerUser(){
    this.loading = true;
    this._dataService.insertUser(this.user)
      .subscribe(data => this._router.navigate(['/login']),
        error => console.log(error));
    this.loading = false;
  }

}
