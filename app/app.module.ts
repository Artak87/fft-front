import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }          from './app.component';
import { LandingPageComponent }  from './landing-page.component';
import { FooterComponent }       from './footer.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	FooterComponent,
  	LandingPageComponent,
  ],
  providers: [
  	AUTH_PROVIDERS,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
