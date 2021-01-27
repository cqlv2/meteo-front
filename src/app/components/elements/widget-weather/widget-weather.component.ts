import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css']
})
export class WidgetWeatherComponent implements OnInit {

  @Input() weather: Weather;
  @Input() favorite: Favorite;
  windArrow: string = "assets/wind_arrow.png";
  style: string;
  weatherIco: string;

  showMinMax: boolean;
  showHumidity: boolean;
  showWind: boolean;
  showPressure: boolean;

  constructor() { }

  ngOnInit(): void {

    if (this.favorite) {
      if (this.favorite.infoWeather.includes("MIN_MAX")) this.showMinMax = true;
      if (this.favorite.infoWeather.includes("HUMIDITY")) this.showHumidity = true;
      if (this.favorite.infoWeather.includes("INFO_WIND")) this.showWind = true;
      if (this.favorite.infoWeather.includes("PRESSURE")) this.showPressure = true;
    } else {
      this.showMinMax = true;
      this.showHumidity = true;
      this.showWind = true;
      this.showPressure = true;
    }
    this.style = "transform: rotate(" + this.weather.windDirection + "deg)";
    if (this.weather.icone != null) this.weatherIco = "assets/weatherIcon/" + this.weather.icone + ".png";
    else this.weatherIco = "assets/weatherIcon/na.png";

  }

}
