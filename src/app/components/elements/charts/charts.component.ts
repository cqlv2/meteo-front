import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() year: number
  @Input() month: number
  @Input() date: string;
  day:number;
  @Input() city: City;
  @Input() chartWeather: string = "temperature";

  label: (string | number)[] = [];
  temp: (string | number)[] = [];
  tempMax: (string | number)[] = [];
  tempMin: (string | number)[] = [];
  pressure: (string | number)[] = [];
  humidity: (string | number)[] = [];
  wind: (string | number)[] = [];

  //variable a modifier pour editer les graphics
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];

  constructor(private citySvr: CityService) { }

  ngOnInit(): void {
   }

  ngOnChanges(): void {
    
    if(this.date){
      let d=new Date(this.date);
      this.year=d.getFullYear();
      this.month=d.getMonth();
      this.day=d.getDate();
    }
    //reinitialisation des variables
    this.lineChartData = [];
    this.lineChartLabels = null;
    this.label = [];
    this.temp = [];
    this.tempMax = [];
    this.tempMin = [];
    this.pressure = [];
    this.humidity = [];
    this.wind = [];


    this.citySvr.parseDate(this.city, this.year, this.month, this.day).forEach(element => {
      this.label.push(element[0]);
      this.temp.push(element[1]);
      this.tempMax.push(element[2]);
      this.tempMin.push(element[3]);
      this.pressure.push(element[4]);
      this.humidity.push(element[5]);
      this.wind.push(element[6]);
    });
    if (this.chartWeather == "temperature") {

      this.lineChartData = []
      this.lineChartLabels = null

      this.lineChartData.push({ data: <number[]>this.temp, label: 'temp' });
      this.lineChartData.push({ data: <number[]>this.tempMin, label: 'tempMin' });
      this.lineChartData.push({ data: <number[]>this.tempMax, label: 'tempMax' });




    }
    if (this.chartWeather == "humidity") {
      this.lineChartData.push({ data: <number[]>this.humidity, label: 'humidity' });
    }
    if (this.chartWeather == "pressure") {
      this.lineChartData.push({ data: <number[]>this.pressure, label: 'pressure' });
    }
    this.lineChartLabels = <Label[]>this.label;
  }
  // config des graphics
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}]
    },
    annotation: {},
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
}
