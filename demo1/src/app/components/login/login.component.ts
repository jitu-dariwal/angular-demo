import { Component, OnInit } from '@angular/core';
import { Title,Meta }  from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient} from '@angular/common/http';

import { FormBuilder, FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	pageData;
	
	loginForm: FormGroup;
	isSubmitted  =  false;
	
	constructor(private router: Router, private http:HttpClient, private activatedRoute: ActivatedRoute, private titleService: Title,private commonService:CommonService) { }

	ngOnInit() {
		this.titleService.setTitle('Login Page');
		this.commonService.getPage().subscribe((response) => {
			//console.log(response);
			//this.pageData = response.data;			
	    });
		
		this.loginForm = new FormGroup({
			  'email': new FormControl('', [
				Validators.required,            
			  ]),			  
			  'password': new FormControl('', [
				Validators.required,            
			  ]),			                
		  });		
	}
	
	login(){
		if (this.loginForm.valid) {
			console.log(this.loginForm.value);
                  
        } else {
          this.validateAllFormFields(this.loginForm);
        }
		/* this.isSubmitted = true;
		if(this.loginForm.invalid){
			return;
		}
		this.authService.login(this.loginForm.value);
		this.router.navigateByUrl('/admin'); */
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
