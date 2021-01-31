import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-widget-weather-stat',
  templateUrl: './widget-weather-stat.component.html',
  styleUrls: ['./widget-weather-stat.component.css']
})
export class WidgetWeatherStatComponent implements OnInit {
  active = 1;
  @Input() city:City

  constructor() { 
  }

  

  ngOnInit(): void {
  }


}
