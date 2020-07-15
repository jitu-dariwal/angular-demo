import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
	title = "Top Bar";
	
	months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];
	
	isavailable = true; //variable is set to true
	
	checkIfElse = true;
	
	todaydate = new Date();
	
	jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
	
	constructor() { }

	ngOnInit() {
	}
	
	myClickFunction(event) {
		alert("Button is clicked");
		if(this.checkIfElse)
			this.checkIfElse = false;
		else
			this.checkIfElse = true;
	}
	
	changemonths(event) {
		alert("Changed month from the Dropdown "+ event.target.value);
		console.log(event);
	}
}
