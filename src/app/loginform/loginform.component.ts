import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginfailed = false;
  loading = false;

  user: any = {
    email: "",
    wachtwoord: ""
  };

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  loginUser(){
    this.loading = true;
    this._authenticationService.loginUser(this.user)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.loading = false;
  }
}
