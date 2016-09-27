import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
  <dashboard-menu></dashboard-menu>
  <dashboard-body></dashboard-body>
  <dashboard-footer></dashboard-footer>
`
})
export class DashboardComponent { }
