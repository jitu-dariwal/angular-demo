import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'learning';
	user = 'Jitendra Dariwal';
	env = environment;
	
	ngOnInit() {
		console.log(this.env);
	}
}
