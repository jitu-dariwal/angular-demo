import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	constructor(private myservice: MyserviceService) { }
	
	todaydate;
	
	ngOnInit() {
		this.todaydate =  this.myservice.showTodayDate();
	}	

}
