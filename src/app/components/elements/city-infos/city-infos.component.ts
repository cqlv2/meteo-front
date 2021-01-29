import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Weather } from 'src/app/models/weather';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-infos',
  templateUrl: './city-infos.component.html',
  styleUrls: ['./city-infos.component.css']
})
export class CityInfosComponent implements OnInit {

  city: City;

  statMonth: number;
  statYear: number;

  temp: number[]
  tempByMonthByhour: number[]
  tempForDays: Weather[]=[];



month:number =new Date().getMonth();
year:number =new Date().getFullYear();

  maptempByMonth = new Map<number, [Date,number[]]>();


  constructor(private citySrv: CityService) { }

  ngOnInit(): void {
    this.citySrv.getFromCitySubject().subscribe(
      data => {
        this.city = data
        data.weathers.forEach(weather => {
          // recuperation des temperature pour un mois,  par entre
          // on veut recup toutes les valeurs pour janvier
          //maptempByMonth<"1", avg([1,2,3,4,5,6,7,8,...]) >
          
          let test=new Date(weather.dateAdd);
          if (test.getMonth() == this.month && test.getFullYear() == this.year) 
            //on a une entre de weather correspondant a janvier 2021
            this.tempForDays.push(weather);
        });
        
        this.tempForDays.forEach(day => {
              let test=new Date(day.dateAdd);
              if (this.maptempByMonth.has(test.getDate()))
                this.maptempByMonth.get(test.getDate())[1].push(day.temp)
              else {
                this.maptempByMonth.set(test.getDate(), [day.dateAdd,[day.temp]])
                
              }
            });
            // this.tempByMonthByhour.push(weather.temp)
          
          // this.tempByMonthByhour.reduce((a, b) => a + b) / this.tempByMonthByhour.length
      
        console.log(this.maptempByMonth);

      },
      err => console.log(err)
    );

  }

}
