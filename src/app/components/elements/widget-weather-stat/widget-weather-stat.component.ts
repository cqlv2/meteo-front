import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-widget-weather-stat',
  templateUrl: './widget-weather-stat.component.html',
  styleUrls: ['./widget-weather-stat.component.css']
})
export class WidgetWeatherStatComponent implements OnInit {

tabMonth=[
  ["January",0],
  ["Fabrary",1],
  ["March",2],
  ["April",3],
  ["Mai",4],
  ["June",5],
  ["Jully",6],
  ["August",7],
  ["September",8],
  ["October",9],
  ["November",10],
  ["December",11]
];

  active = 1;
  @Input() city:City
  year: number=new Date().getFullYear();
  month: number=new Date().getMonth();
  date: string =  new Date().toISOString().split('T')[0];
  view:string="month";

  constructor() { 
  }

  

  ngOnInit(): void {
  }


}
