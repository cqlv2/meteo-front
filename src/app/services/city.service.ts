import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  citySubject = new Subject<City>();

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${environment.baseUrl}api/cities`);
  }



  //recup des dates
  parseDate(city: City, year: number, month: number = null, day: number = null) {
    // table pour afficher les mois
    let listMonth = ["Jan", "Fab", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // filtre des weathers pour garder que les donnee de l'annee en parametre
    let yearArray: Weather[] = city.weathers.filter(data => new Date(data.dateAdd).getFullYear() == year)
    // si le parametre month est null on veut trier par mois
    if (month == null && day == null) {

      //preparation d'un tableau pour le retour des donnee
      let data: (string | number)[][] = [];


      // boucle sur les 12 mois
      for (let i = 0; i < 12; i++) {
        // pour chaque mois recuperation des weathers de ce mois
        let list = yearArray.filter(data => new Date(data.dateAdd).getMonth() == i);
        if (list.length > 0) {
          // calcul de la moyene pour les donnee weather par mois
          let tempAvg = Math.round(list.map(a => a.temp).reduce((a, b) => a + b) / list.length)
          let tmaxAvg = Math.round(list.map(a => a.tempMax).reduce((a, b) => a + b) / list.length)
          let tminAvg = Math.round(list.map(a => a.tempMin).reduce((a, b) => a + b) / list.length)
          let pressureAvg = Math.round(list.map(a => a.pressure).reduce((a, b) => a + b) / list.length)
          let humidityAvg = Math.round(list.map(a => a.humidity).reduce((a, b) => a + b) / list.length)
          let windSpeedAvg = Math.round(list.map(a => a.windSpeed).reduce((a, b) => a + b) / list.length)
          //creation du tableau du mois de la boucle
          data.push([listMonth[i] + " " + year, tempAvg, tmaxAvg, tminAvg, pressureAvg, humidityAvg, windSpeedAvg]);
        }
      }
      return data;
    }
    // si le parametre day est null on veut trier par moyenne de jour mois
    if (month != null && day == null) {
      //preparation d'un tableau pour le retour des donnee
      let data: (string | number)[][] = [];
      //recuperation du mois passer en parametre
      let monthArray = yearArray.filter(data => new Date(data.dateAdd).getMonth() == month);
      for (let i = 0; i < 31; i++) {
        // pour chaque jour recuperation des weathers du mois
        let list = monthArray.filter(data => new Date(data.dateAdd).getDate() == i);
        if (list.length > 0) {
          // calcul de la moyene pour les donnee weather par mois
          let tempAvg = Math.round(list.map(a => a.temp).reduce((a, b) => a + b) / list.length)
          let tmaxAvg = Math.round(list.map(a => a.tempMax).reduce((a, b) => a + b) / list.length)
          let tminAvg = Math.round(list.map(a => a.tempMin).reduce((a, b) => a + b) / list.length)
          let pressureAvg = Math.round(list.map(a => a.pressure).reduce((a, b) => a + b) / list.length)
          let humidityAvg = Math.round(list.map(a => a.humidity).reduce((a, b) => a + b) / list.length)
          let windSpeedAvg = Math.round(list.map(a => a.windSpeed).reduce((a, b) => a + b) / list.length)
          //creation du tableau du mois de la boucle
          data.push([i + "/" + month + "/" + year, tempAvg, tmaxAvg, tminAvg, pressureAvg, humidityAvg, windSpeedAvg]);
        }
      }
      
      return data;
    }
    // si le parametre day est present on veut trier par valeur du jour
    if (month != null && day != null) {
      //preparation d'un tableau pour le retour des donnee
      let data: (string | number)[][] = [];
      //recuperation du mois passer en parametre
      let monthArray = yearArray.filter(data => new Date(data.dateAdd).getMonth() == month);
      let dayArray = monthArray.filter(data => new Date(data.dateAdd).getDate() == day);
      for (let i = 0; i < 24; i++) {
        // pour chaque heure recuperation des weathers du jour
        let list = dayArray.filter(data => new Date(data.dateAdd).getHours() == i);
        if (list.length > 0) {
          // calcul de la moyene pour les donnee weather par mois
          let tempAvg = Math.round(list.map(a => a.temp).reduce((a, b) => a + b) / list.length)
          let tmaxAvg = Math.round(list.map(a => a.tempMax).reduce((a, b) => a + b) / list.length)
          let tminAvg = Math.round(list.map(a => a.tempMin).reduce((a, b) => a + b) / list.length)
          let pressureAvg = Math.round(list.map(a => a.pressure).reduce((a, b) => a + b) / list.length)
          let humidityAvg = Math.round(list.map(a => a.humidity).reduce((a, b) => a + b) / list.length)
          let windSpeedAvg = Math.round(list.map(a => a.windSpeed).reduce((a, b) => a + b) / list.length)
          //creation du tableau du mois de la boucle
          data.push([i + "h", tempAvg, tmaxAvg, tminAvg, pressureAvg, humidityAvg, windSpeedAvg]);
        }
      }
      
      return data;
    }
  }

  // getter setter subject
  cityListSubject = new Subject<City[]>();
  
  sendToCityListSubject(cities: City[]) {
    this.cityListSubject.next(cities);
  }
 
  getFromCityListSubject() {
    return this.cityListSubject.asObservable();
  }



  sendToCitySubject(city: City) {
    this.citySubject.next(city);
  }





  getFromCitySubject(): Observable<City> {
    
    return this.citySubject.asObservable();
  }

}
