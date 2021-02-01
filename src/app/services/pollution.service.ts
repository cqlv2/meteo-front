import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Polluant } from '../models/polluant';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {
  listMonth = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", , "December"];
  data: (string | number)[][];

  constructor() { }

  getMonthAvgForYear(city: City, year: number) {
    //recup des valeur de pollution de la ville pour l'annee selectionne
    let yearArray: Polluant[] = city.polluants.filter(data => new Date(data.dateAdd).getFullYear() == year)
    //preparation d'un tableau pour le retour des donnee
    this.data = new Array();
    for (let i = 0; i < 12; i++) {
      // pour chaque mois recuperation des valeurs meteos du moi de la boucle
      let list = yearArray.filter(data => new Date(data.dateAdd).getMonth() == i);
      //si le mois de la boucle contient des donnee on l'insere dans this.data
      if (list.length > 0) {
        // calcul de la moyene pour les donnee weather par mois
        let rateAvg = Math.round(list.map(a => a.rate).reduce((a, b) => a + b) / list.length)
        let no2Avg = Math.round(list.map(a => a.no2).reduce((a, b) => a + b) / list.length)
        let o3Avg = Math.round(list.map(a => a.o3).reduce((a, b) => a + b) / list.length)
        let pm10Avg = Math.round(list.map(a => a.pm10).reduce((a, b) => a + b) / list.length)
        let pm25Avg = Math.round(list.map(a => a.pm25).reduce((a, b) => a + b) / list.length)
        //creation du tableau du mois de la boucle
        this.data.push([this.listMonth[i] + " " + year, rateAvg, no2Avg, o3Avg, pm10Avg, pm25Avg]);
      }
    }
    return this.data;
  }

  getDailyAvgForMonth(city: City, year: number, month: number) {
    let monthArray: Polluant[] = city.polluants.filter(data => new Date(data.dateAdd).getFullYear() == year && new Date(data.dateAdd).getMonth() == month)
    this.data = new Array();
    for (let i = 0; i < 31; i++) {
      let list = monthArray.filter(data => new Date(data.dateAdd).getDate() == i);
      if (list.length > 0) {
        let rateAvg = Math.round(list.map(a => a.rate).reduce((a, b) => a + b) / list.length)
        let no2Avg = Math.round(list.map(a => a.no2).reduce((a, b) => a + b) / list.length)
        let o3Avg = Math.round(list.map(a => a.o3).reduce((a, b) => a + b) / list.length)
        let pm10Avg = Math.round(list.map(a => a.pm10).reduce((a, b) => a + b) / list.length)
        let pm25Avg = Math.round(list.map(a => a.pm25).reduce((a, b) => a + b) / list.length)
        this.data.push([new Date(list[0].dateAdd).toISOString().split('T')[0], rateAvg, no2Avg, o3Avg, pm10Avg, pm25Avg]);
      }
    }
    return this.data;
  }

  getValueForDay(city: City, date: string) {
    this.data = new Array();
    let dayArray = city.polluants.filter(data => new Date(data.dateAdd) == new Date(date));
    for (let i = 0; i < 24; i++) {
      let list = dayArray.filter(data => new Date(data.dateAdd).getHours() == i);
      if (list.length > 0) {
        let rateAvg = Math.round(list.map(a => a.rate).reduce((a, b) => a + b) / list.length)
        let no2Avg = Math.round(list.map(a => a.no2).reduce((a, b) => a + b) / list.length)
        let o3Avg = Math.round(list.map(a => a.o3).reduce((a, b) => a + b) / list.length)
        let pm10Avg = Math.round(list.map(a => a.pm10).reduce((a, b) => a + b) / list.length)
        let pm25Avg = Math.round(list.map(a => a.pm25).reduce((a, b) => a + b) / list.length)
        //creation du tableau du mois de la boucle
        this.data.push([i + "h", rateAvg, no2Avg, o3Avg, pm10Avg, pm25Avg]);
      }
    }
    return this.data;
  }
}
