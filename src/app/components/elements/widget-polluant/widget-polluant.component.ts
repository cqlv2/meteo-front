import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { Polluant } from 'src/app/models/polluant';

@Component({
  selector: 'app-widget-polluant',
  templateUrl: './widget-polluant.component.html',
  styleUrls: ['./widget-polluant.component.css']
})
export class WidgetPolluantComponent implements OnInit {

  @Input() favorite: Favorite;
  @Input() polluant: Polluant;

  showNO2: boolean;
  showO3: boolean;
  showPM10: boolean;
  showPM25: boolean;

  rateColor:string;

  constructor() { }

  ngOnInit(): void {
    if (this.favorite) {
      console.log(this.polluant);
      
      if (this.favorite.polluants.includes("NO2")) this.showNO2 = true;
      if (this.favorite.polluants.includes("O3")) this.showO3 = true;
      if (this.favorite.polluants.includes("PM10")) this.showPM10 = true;
      if (this.favorite.polluants.includes("PM25")) this.showPM25 = true;
    } else {
      this.showNO2 = true;
      this.showO3 = true;
      this.showPM10 = true;
      this.showPM25 = true;
    }

    if(this.polluant.rate<=50) this.rateColor ="bg-success";
    if(this.polluant.rate>50 && this.polluant.rate<=150) this.rateColor = "bg-warning"
    if(this.polluant.rate>150 && this.polluant.rate<=300) this.rateColor = "bg-danger"
    if(this.polluant.rate>300 && this.polluant.rate<=500)  this.rateColor ="bg-dark"
  }

}
