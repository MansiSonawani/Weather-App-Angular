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
  API_KEY = '5d176a44e85298c2003d266d9bdabc30';
  

   constructor(private http: HttpClient) { }
   getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeather();
      });
    } else {
      // Geolocation is not supported by this browser.
    }
  }


  getWeather(){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.API_KEY}`)
    .subscribe((data: any) => {
      this.city = data.name;
      this.country = data.sys.country;
    });
}
}
  