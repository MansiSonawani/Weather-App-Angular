import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/weather';
apiKey = '459d7ab5fab85c9b3ce557236603f3eb';
   constructor(private http: HttpClient) { }


getWeatherDataByCoords(lat: number ,lon:  number ){
  
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units','imperial')
  .set('appid',this.apiKey)

  return this.http.get(this.url, { params });
}
}