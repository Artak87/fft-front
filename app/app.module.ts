import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing, appRoutingProviders }  from './app.routing';
import { AUTH_PROVIDERS }                from 'angular2-jwt';

import { AppComponent }          from './app.component';
import { LandingPageComponent }  from './landing-page.component';
import { FooterComponent }       from './footer.component';

import { DashboardComponent }       from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header.component';
import { DashboardMenuComponent }   from './dashboard-menu.component';
import { DashboardBodyComponent }   from './dashboard-body.component';
import { DashboardFooterComponent } from './dashboard-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
  	AppComponent,
  	FooterComponent,
  	LandingPageComponent,

    DashboardComponent,
    DashboardHeaderComponent,
    DashboardMenuComponent,
    DashboardBodyComponent,
    DashboardFooterComponent,
  ],
  providers: [
    appRoutingProviders,
  	AUTH_PROVIDERS,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
