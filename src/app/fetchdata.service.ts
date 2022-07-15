import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
  public API_KEY = 'vrf7bi4d21nsl94bb29yr7l37dxeld7gao9xi1iv'
  public WEATHER_URL = 'https://www.meteosource.com/api/v1/free/point?place_id=Nairobi&sections=all&timezone=U[…]n&units=metric&key='

 public BASE_URL = 'https://mkulima-base.herokuapp.com/api'

  constructor(private http:HttpClient) { }
  cataloguedata(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/merchandise`);
    
  }
  public getMerchandise(id:number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/merchandise/${id}`)

  }
  
  
  getCategory(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/category`);
  }

  getFeeds(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/feeds`);
  }

  getWeather(): Observable<any> {
    return this.http.get(`${this.WEATHER_URL}${this.API_KEY}`);
  }
  

}
