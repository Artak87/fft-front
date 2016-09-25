import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
    selector: 'ttf-app',
    providers: [ Auth ],
    template: '<landing-page></landing-page>'
})
export class AppComponent {
	constructor(private auth: Auth) {}
}
