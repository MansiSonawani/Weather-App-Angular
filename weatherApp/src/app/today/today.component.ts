import { getLocaleDirection } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent  {
  lat : number | undefined;
  lon: number | undefined;
  name : undefined;
  weather!: Object;
  constructor(private weatherService : WeatherService)
  {


  }
   
  ngOnInit(): void  {
      this.getLocation();
      console.warn("get your location");

  }
getLocation(){
  if("geolocation" in navigator){
    navigator.geolocation.watchPosition((success) => {
      this.lat = success.coords.latitude;
      this.lon = success.coords.longitude;
      this.weatherService.getWeatherDataByCoords(this.lat, this.lon, this.name).subscribe(data =>{
        this.weather = data;
      });


    })
    
  }
}
}
