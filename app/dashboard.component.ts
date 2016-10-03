import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
	<div class="ui container">
		<br>
		<dashboard-header></dashboard-header>
		<div class="ui divider"></div>
		<br>
		<div class="ui grid">
			<div class="four wide column">
				<dashboard-menu></dashboard-menu>
			</div>
			<div class="twelve wide column">
				<dashboard-body></dashboard-body>
			</div>
		</div>
	</div>
	<dashboard-footer></dashboard-footer>
`
})
export class DashboardComponent { }
