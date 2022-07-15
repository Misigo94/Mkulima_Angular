import { Component, OnInit } from '@angular/core';

import { FetchdataService } from '../fetchdata.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Machandise } from '../machandise';
import { data } from 'autoprefixer';


@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styleUrls: ['./catalogue-details.component.css']
})
export class CatalogueDetailsComponent implements OnInit {
  id!:number;
  machandise: any =[];


  constructor(private fetchservice: FetchdataService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.machandise = new Machandise();
    
    this.id = this.route.snapshot.params['id'];
    this.fetchservice.getMerchandise(this.id).subscribe((data)=>{
    this.machandise = data;
    console.log(data);
    })
  }

}
