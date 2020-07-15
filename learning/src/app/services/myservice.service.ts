import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
	
	private apiurl = environment.apiUrl;
	languageCode = 'en';
	
	constructor(private http: HttpClient) { }
	
	getData() {
		return this.http.post(this.apiurl+'/page/contact-us',{'languageCode':this.languageCode});
	}
	
	showTodayDate() { 
		let ndate = new Date(); 
		return ndate; 
	}  
}
