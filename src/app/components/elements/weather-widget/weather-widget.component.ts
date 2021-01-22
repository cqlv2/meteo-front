import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  @Input()
  weather: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
