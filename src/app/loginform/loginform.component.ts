import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginfailed = false;
  constructor() { }

  ngOnInit() {
  }
  loginUser(){
    console.log('login user called');
  }
}
