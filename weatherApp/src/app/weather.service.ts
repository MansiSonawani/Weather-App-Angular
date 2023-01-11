import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={459d7ab5fab85c9b3ce557236603f3eb}';
  constructor(private http: HttpClient) { }

}

getWeatherDataByCoords(lat,lon){
  
}
