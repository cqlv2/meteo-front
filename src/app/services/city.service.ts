import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  citySubject = new Subject<City>()

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>(`${environment.baseUrl}api/cities`);
  }

  
  // getter setter subject
  sendToCitySubject(city: City){
    this.citySubject.next(city);
  }

  getFromCitySubject(){
    return this.citySubject.asObservable();
  }
}
