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

  windArrow: string = "assets/wind_arrow.png";
  style: string;
  weatherIco: string;

  constructor() { }

  ngOnInit(): void {
    this.style = "transform: rotate(" + this.weather.windDirection + "deg)";
    if (this.weather.icone != null) this.weatherIco = "assets/weatherIcon/" + this.weather.icone + ".png";
    else this.weatherIco = "assets/weatherIcon/na.png";

  }
}
