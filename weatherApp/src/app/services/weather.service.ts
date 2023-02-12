import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { weatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  

  getWeatherData(cityName : string):Observable<weatherData>{
    return this.http.get<weatherData>(environment.WeatherApiBaseUrl,{
      headers : new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderLabel,environment.XRapiAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyValue),
      params : new HttpParams()
      .set('city' , cityName)
      .set('units', 'metric')
      .set('mode', 'json')

    }
      
    
      
      )
  } 
}
