import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { config }          from '../app.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  private lock = new Auth0Lock(
    config.auth.clientID,
    config.auth.domain,
    {
      // redirect: false,
      socialButtonStyle: 'small',
      theme: {
        logo: '',
        primaryColor: '#b5cc18',
      },
      languageDictionary: {
        title: 'FFT',
      }
    }
  );
  
  public redirectUrl:string;

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult:any) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}
