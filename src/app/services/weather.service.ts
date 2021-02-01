import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  listMonth = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", , "December"];
  data: (string | number)[][];

  constructor() { }

  getMonthAvgForYear(city: City, year: number) {
    //recup des valeur de pollution de la ville pour l'annee selectionne
    let yearArray: Weather[] = city.weathers.filter(data => new Date(data.dateAdd).getFullYear() == year)
    //preparation d'un tableau pour le retour des donnee
    this.data = new Array();
    for (let i = 0; i < 12; i++) {
      // pour chaque mois recuperation des valeurs meteos du moi de la boucle
      let list = yearArray.filter(data => new Date(data.dateAdd).getMonth() == i);
      //si le mois de la boucle contient des donnee on l'insere dans this.data
      if (list.length > 0) {
        // calcul de la moyene pour les donnee weather par mois
        let tempAvg = Math.round(list.map(a => a.temp).reduce((a, b) => a + b) / list.length)
        let tempMinAvg = Math.round(list.map(a => a.tempMin).reduce((a, b) => a + b) / list.length)
        let tempMaxAvg = Math.round(list.map(a => a.tempMax).reduce((a, b) => a + b) / list.length)
        let humidityAvg = Math.round(list.map(a => a.humidity).reduce((a, b) => a + b) / list.length)
        let windSpeedAvg = Math.round(list.map(a => a.windSpeed).reduce((a, b) => a + b) / list.length)
        let pressureAvg = Math.round(list.map(a => a.pressure).reduce((a, b) => a + b) / list.length)
        //creation du tableau du mois de la boucle
        this.data.push([this.listMonth[i] + " " + year, tempAvg, tempMinAvg, tempMaxAvg, humidityAvg, windSpeedAvg,pressureAvg]);
      }
    }
    return this.data;
  }

  getDailyAvgForMonth(city: City, year: number, month: number) {
    let monthArray: Weather[] = city.weathers.filter(data => new Date(data.dateAdd).getFullYear() == year && new Date(data.dateAdd).getMonth() == month)
    this.data = new Array();
    for (let i = 0; i < 31; i++) {
      let list = monthArray.filter(data => new Date(data.dateAdd).getDate() == i);
      if (list.length > 0) {
        let tempAvg = Math.round(list.map(a => a.temp).reduce((a, b) => a + b) / list.length)
        let tempMinAvg = Math.round(list.map(a => a.tempMin).reduce((a, b) => a + b) / list.length)
        let tempMaxAvg = Math.round(list.map(a => a.tempMax).reduce((a, b) => a + b) / list.length)
        let humidityAvg = Math.round(list.map(a => a.humidity).reduce((a, b) => a + b) / list.length)
        let windSpeedAvg = Math.round(list.map(a => a.windSpeed).reduce((a, b) => a + b) / list.length)
        let pressureAvg = Math.round(list.map(a => a.pressure).reduce((a, b) => a + b) / list.length)
        //creation du tableau du mois de la boucle
        this.data.push([new Date(list[0].dateAdd).toISOString().split('T')[0], tempAvg, tempMinAvg, tempMaxAvg, humidityAvg, windSpeedAvg,pressureAvg]);
      }
    }
    return this.data;
  }

  getValueForDay(city: City, date: string) {
    this.data = new Array();
    let dayArray = city.weathers.filter(data => new Date(data.dateAdd) == new Date(date));
    for (let i = 0; i < 24; i++) {
      let list = dayArray.filter(data => new Date(data.dateAdd).getHours() == i);
      if (list.length > 0) {
        let tempAvg = Math.round(list.map(a => a.temp).reduce((a, b) => a + b) / list.length)
        let tempMinAvg = Math.round(list.map(a => a.tempMin).reduce((a, b) => a + b) / list.length)
        let tempMaxAvg = Math.round(list.map(a => a.tempMax).reduce((a, b) => a + b) / list.length)
        let humidityAvg = Math.round(list.map(a => a.humidity).reduce((a, b) => a + b) / list.length)
        let windSpeedAvg = Math.round(list.map(a => a.windSpeed).reduce((a, b) => a + b) / list.length)
        let pressureAvg = Math.round(list.map(a => a.pressure).reduce((a, b) => a + b) / list.length)
        //creation du tableau du mois de la boucle
        this.data.push([i + "h", tempAvg, tempMinAvg, tempMaxAvg, humidityAvg, windSpeedAvg,pressureAvg]);
      }
    }
    return this.data;
  }
}
