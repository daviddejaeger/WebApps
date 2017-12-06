import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  user: any = {
    voornaam: "",
    achternaam: "",
    email: "",
    wachtwoord: "",
    wachtwoord2: "",
    isAdmin: false
  };
  constructor() { }

  ngOnInit() {
    
  } 
  registerUser(){
    console.log("register User called, voornaam: " + this.user.voornaam);
  }

}
