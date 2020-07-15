import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	constructor() { }
	
	emailid;
	formdata;
	
	registerForm: FormGroup;
    submitted = false;
	
	ngOnInit() {
		this.formdata = new FormGroup({
			//emailid: new FormControl("angular@gmail.com"),
			emailid: new FormControl("", Validators.compose([
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
			 ])),
			passwd: new FormControl("", Validators.compose([
				Validators.required,
				this.passwordvalidation
			]))
		});
	}
	
	passwordvalidation(formcontrol) {
		if (formcontrol.value.length < 5) {
			return {"passwd" : true};
		}
	}
	
	onClickSubmit(data) {
		alert("Entered Email id : " + data.emailid);
		console.log(data);
		this.emailid = data.emailid;
	}
}
