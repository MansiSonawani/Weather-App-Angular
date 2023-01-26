import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  lat!: number;
  lon!: number;
  city: string | undefined;
  country: string | undefined;
  url :   `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.API_KEY}`
  API_KEY = '5d176a44e85298c2003d266d9bdabc30';
   


constructor( private http : HttpClient){
  



  getWeatherData(cityName : string){
    this.http.get(`https://open-weather-map27.p.rapidapi.com/weather`)
    .subscribe((data: any) => {
      this.city = data.name;
      this.country = data.sys.country;
    });
  }}

}
  