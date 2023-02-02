import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  

  getWeatherData(lat : GLfloat  , lon : GLfloat){
    this.http.get(environment.WeatherApiBaseUrl,{
      headers : new HttpHeaders()
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapiAPIHostHeaderValue)

    }
      
    
      
      )
  } 
}
