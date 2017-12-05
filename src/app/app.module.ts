import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BabykledingListComponent } from './babykleding/babykleding-list.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,BabykledingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
