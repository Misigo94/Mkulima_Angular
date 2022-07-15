import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
   weather: any =[];
  constructor(private weatherservice:FetchdataService) { }

  ngOnInit(): void {
    this.weatherservice.getWeather().subscribe((data)=>{
      this.weather = data;
      console.log(this.weather);
      
  });
}

}
