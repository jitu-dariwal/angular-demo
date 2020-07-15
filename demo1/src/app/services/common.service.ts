import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

	constructor(private http: HttpClient) { }
  
	getPage(url = null)
	{
		if(url == null){
			return this.http.post("http://182.156.245.83:5003/api/common/page/why-litegait",{'languageCode':'en'});
		}else{
			return this.http.post(url,{});
		}
	}
	
	getPageUrl(url)
	{
		return this.http.get(url);
	}
}
