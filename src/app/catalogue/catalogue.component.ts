import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Router } from '@angular/router';

import { Machandise } from '../machandise';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  catalogues!:any[];




  constructor(private fetchservice: FetchdataService,private router: Router) { }

  ngOnInit(): void {
    this.fetchservice.cataloguedata().subscribe((data)=>{
      this.catalogues = data;
      console.log(this.catalogues);

    })
    
  }
  // route to specific machandise
  catalogueDetails(id: number) {
    this.router.navigate(['catalogue', id]);
    console.log(id);

  }

}


