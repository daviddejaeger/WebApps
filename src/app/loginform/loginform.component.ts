import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginfailed = false;
  loading = false;
  error = false;

  user: any = {
    email: "",
    wachtwoord: ""
  };

  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  ngOnInit() {

  }

  loginUser(){
    this.loading = true;
    this._authenticationService.loginUser(this.user)
      .subscribe(data => {
        this._authenticationService.resetUsername();
        this.error = false;
        this._router.navigate(['/welcome'])
      },
        error => {
          this.error = true;
        });
    this.loading = false;
  }
}
