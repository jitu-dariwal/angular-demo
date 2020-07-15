import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

	constructor(private myservice: MyserviceService) { }
	persondata;
	env = environment;
	 
	ngOnInit() {
		this.myservice.getData().subscribe((data) => {
			this.persondata = data;
			console.log(this.persondata);
			//this.persondata = Array.from(Object.keys(data), k=>data[k]);
		});
	}

}
