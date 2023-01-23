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
  city: any;
  country: any;

  
  {

  export class AppComponent {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
    API_KEY = '5d176a44e85298c2003d266d9bdabc30';
  
    constructor(){}
  
getLocation(){
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  } else {
    // Geolocation is not supported by this browser.
  }
}
}