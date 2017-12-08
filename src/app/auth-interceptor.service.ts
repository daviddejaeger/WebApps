import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(req, next) {
    var _authenticationService = this._injector.get(AuthenticationService);
    var authRequest = req.clone({
        headers: req.headers.set('Authorization', 'token ' + _authenticationService.token)
    })
    return next.handle(authRequest);
  }

}
