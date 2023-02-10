import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
[x: string]: any;
  constructor (private weatherService : WeatherService) {

  }

  weatherData? : weatherData;
  ngOnInit(): void {
    this.weatherService.getWeatherData('Pune')
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
      
  }
}
