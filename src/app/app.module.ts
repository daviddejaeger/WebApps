import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BabykledingListComponent } from './babykleding/babykleding-list.component';
import { DataService } from './data.service';
import { RegisterformComponent } from './registerform/registerform.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationService } from './authentication.service';
import { LoginformComponent } from './loginform/loginform.component';
import { BabykledingDetailComponent } from './babykleding/babykleding-detail.component';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,BabykledingListComponent, RegisterformComponent, WelcomeComponent,LoginformComponent, BabykledingDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterformComponent},
      { path: 'login', component: LoginformComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'babykleding', component: BabykledingListComponent},
      { path: 'babykleding/:id', component: BabykledingDetailComponent},
      { path: '', redirectTo:'welcome', pathMatch:'full'},
      { path: '**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [DataService,AuthenticationService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
