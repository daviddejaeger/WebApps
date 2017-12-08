import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

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
  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
    
  } 
  registerUser(){
    this.loading = true;
    this.user.wachtwoord2 = "";
    this._authenticationService.insertUser(this.user)
      .subscribe(data => this._router.navigate(['/welcome']),
        error => console.log(error));
    this.loading = false;
  }

}
