import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { PollutionService } from 'src/app/services/pollution.service'; import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-widget-polluant-stat',
  templateUrl: './widget-polluant-stat.component.html',
  styleUrls: ['./widget-polluant-stat.component.css']
})
export class WidgetPolluantStatComponent implements OnInit {

  tabMonth = [["January", 0], ["Febrary", 1], ["March", 2], ["April", 3], ["May", 4], ["June", 5], ["July", 6], ["August", 7], ["September", 8], ["October", 9], ["November", 10], ["December", 11]];
  active = 1;
  @Input() city: City
  view: string = "month";
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();
  date: string = new Date().toISOString().split('T')[0];
  label: Label[];
  chart: ChartDataSets[];

  constructor(private polluantSvr: PollutionService) { }

  ngOnInit(): void { 
    this.genCharts();
    console.log(this.label);
    console.log(this.chart);
  }

  genCharts() {    
    // reinnitialisations des variables
    this.label = new Array();
    this.chart = null;
    let data;
    // appel au service pour recuperer les donnees pollution parsé
    if (this.view == "year") data = this.polluantSvr.getMonthAvgForYear(this.city, this.year);
    if (this.view == "month") data = this.polluantSvr.getDailyAvgForMonth(this.city, this.year, this.month);
    if (this.view == "day") data = this.polluantSvr.getValueForDay(this.city, this.date);

    if (data) {
      // initialisation des variable temporaires
      let o3: number[] = new Array();
      let no2: number[] = new Array();
      let pm10: number[] = new Array();
      let pm25: number[] = new Array();
      this.chart = new Array();
      // les donnee recuperée depuis le service sont poussée dans les variables temporaires
      data.forEach(elm => {
        this.label.push(<string>elm[0]);
        o3.push(elm[1]);
        no2.push(elm[2]);
        pm10.push(elm[3]);
        pm25.push(elm[4]);
      });
      // les variables temporaires sont poussée dans les variables de chrats
      this.chart.push({ data: o3, label: 'o3' });
      this.chart.push({ data: no2, label: 'no2' });
      this.chart.push({ data: pm10, label: 'pm10' });
      this.chart.push({ data: pm25, label: 'pm25' });
    }    
  }
}
