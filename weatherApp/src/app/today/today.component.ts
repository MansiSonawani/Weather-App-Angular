import { getLocaleDirection } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat : number | undefined;
  lon: number | undefined;
  weather: Object | undefined;

  constructor(private weatherService : WeatherService){}
   
  ngOnInit()  {
      this.getLocation()

}
getLocation(){
  if("geolocation" in navigator){
    navigator.geolocation.watchPosition((success) => {
      this.lat = success.coords.latitude;
      this.lon = success.coords.longitude;

      this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data =>{
        this.weather = data;
      });


    })
    
  }
}
}
