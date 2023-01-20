import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
url = 'https://api.openweathermap.org/data/2.5/weather';
apikey='459d7ab5fab85c9b3ce557236603f3eb';

   constructor(private http: HttpClient) { }


  getWeatherDataByCoords(lat: string | number | boolean,lon: string | number | boolean,name : undefined){
  
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('name', 'name')
      .set('units','imperial')
      .set('api_is', this.apikey)
  

  

  return this.http.get(this.url, { params });
}
}