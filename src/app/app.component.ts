import { Component} from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'webshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'webshop';
  username = this._authenticationService.username;

  constructor(private _authenticationService: AuthenticationService){
    
  }  
}
