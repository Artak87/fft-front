import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-menu',
  template: `
	<div class="ui secondary vertical pointing fluid menu">
		<a class="item">
			Home
		</a>
		<a class="item">
			Messages
		</a>
		<a class="item active">
			Friends
		</a>
	</div>
  `
})
export class DashboardMenuComponent { }
