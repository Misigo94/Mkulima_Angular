import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  categorys: any =[];
  feeds: any = [];

  constructor(private categoryservice:FetchdataService) { }

  ngOnInit(): void {
    this.categoryservice.getCategory().subscribe((data)=>{
     this.categorys = data;
      console.log(this.categorys);

  })

  this.categoryservice.getFeeds().subscribe((data)=>{
    this.feeds = data;
    console.log(this.feeds);

  });

}
}
