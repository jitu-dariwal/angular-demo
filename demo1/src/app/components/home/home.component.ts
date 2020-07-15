import { Component, OnInit } from '@angular/core';
import { Title,Meta }  from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {LocationStrategy} from '@angular/common';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router, private http:HttpClient, private activatedRoute: ActivatedRoute, private titleService: Title,private commonService:CommonService,private locationStrategy: LocationStrategy) { }
	
	url;
	httpdata;
	
	homecomponent = "Entered in home component created";
	
	months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
	
	ngOnInit() {
		this.titleService.setTitle('Home Page');
		/* this.commonService.getPageUrl("http://jsonplaceholder.typicode.com/users").subscribe((response) => {
			this.displaydata(response);			
	    }); */
		
		this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((response) => {
			this.displaydata(response);			
	    });
		
		/* Below code for checking routing parametters*/
		
		//this.url = this.locationStrategy.path();
		
		this.url = this.activatedRoute.snapshot.paramMap.get('id');
		
		this.activatedRoute.queryParams.subscribe(params => {
            console.log(params);
        })
		
		console.log("Jitendra Dariwal : "+this.url);
		//console.log(this.url);
	}
	
	displaydata(data) { 
		this.httpdata = data; 
	}
	
	myClickFunction(event) { 
      //just added console.log which will display the event details in browser on click of the button.
      alert("Button is clicked");
      console.log(event);
	}
	
	changemonths(event) {
      alert("Changed month from the Dropdown");
	  
		var target = event.target || event.srcElement || event.currentTarget;
		var idAttr = target.attributes.id;
		var value = idAttr.nodeValue;
	  
		console.log("value Select is : "+value);
		console.log(event);
	}
}
