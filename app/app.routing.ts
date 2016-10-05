import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AuthGuard }   from './app-helper/auth-guard.service';
import { AuthService } from './app-helper/auth.service';

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
