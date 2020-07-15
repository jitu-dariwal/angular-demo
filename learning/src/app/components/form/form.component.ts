import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
	
	emailid; 
	formdata;
	isSubmitted = false;
	loginForm: FormGroup;
	
	ngOnInit() {
		this.formdata = new FormGroup({ 
			emailid: new FormControl("", Validators.compose([
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
			])),
			passwd: new FormControl("",this.passwordvalidation) 
		});
		
		
		this.loginForm = new FormGroup({
			'email': new FormControl('', [
				Validators.required,            
			]),			  
			'password': new FormControl('', [
				Validators.required,         
				Validators.minLength(10),         
			]),				
		});
	}
	
	passwordvalidation(formcontrol) {
		if (formcontrol.value.length < 5) {
			return {"passwd" : true};
		}
	}
   
	onClickSubmit(data) {
		alert("Entered Email id : " + data.emailid+ " and Password : " +data.passwd);
		this.emailid = data.emailid;
	}
	
	
	login(){
		if (this.loginForm.valid) {
			console.log(this.loginForm.value);
			this.router.navigateByUrl('/home');
        } else {
			this.validateAllFormFields(this.loginForm);
			this.isSubmitted = true;
        }
	}
	
	validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
			//console.log(field);
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateAllFormFields(control);
			}
        });
    }
}
