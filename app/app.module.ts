import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing, appRoutingProviders }  from './app.routing';
import { AUTH_PROVIDERS }                from 'angular2-jwt';

import { AppComponent }          from './app.component';

import { LandingPageComponent }  from './landing-page/landing-page.component';
import { FooterComponent }       from './landing-page/footer.component';

import { DashboardComponent }       from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header.component';
import { DashboardMenuComponent }   from './dashboard/dashboard-menu.component';
import { DashboardBodyComponent }   from './dashboard/dashboard-body.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer.component';

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
