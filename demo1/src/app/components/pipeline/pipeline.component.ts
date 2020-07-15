import { Component, OnInit } from '@angular/core';
import { Title,Meta }  from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient} from '@angular/common/http';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {
	title = 'demo';
	todaydate = new Date();
	jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
	months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
			
	constructor(private router: Router, private http:HttpClient, private activatedRoute: ActivatedRoute, private titleService: Title,private commonService:CommonService) { }

	ngOnInit() {
	}

}
