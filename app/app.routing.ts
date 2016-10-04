import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { DashboardComponent }   from './dashboard.component';

import { AuthGuard }   from './auth-guard.service';
import { AuthService }   from './auth.service';

const appRoutes: Routes = [
  {
    path: 'board',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LandingPageComponent
  },
  // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [
  AuthGuard,
  AuthService
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
