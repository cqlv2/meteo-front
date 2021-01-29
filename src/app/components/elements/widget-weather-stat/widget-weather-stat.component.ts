import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-widget-weather-stat',
  templateUrl: './widget-weather-stat.component.html',
  styleUrls: ['./widget-weather-stat.component.css']
})
export class WidgetWeatherStatComponent implements OnInit {

@Input() maptempByMonth:Map<number,[Date, number[]]>;

// wearherToShow:Weather[]


temp:number[]=[];
lbl:string[]=[];


  // valeur a afficher
  public lineChartData: ChartDataSets[] = [
    { data: this.temp, label: 'temp' },
    // { data: [28, 48, 40, 19, 86, 27, 30, 120], label: 'Series B' },
    // { data: [180, 480, 770, 90, 300, 270, 400], label: 'Series C',yAxisID: 'y-axis-1' }
  ];
  //public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'aze'];

  public lineChartLabels: Label[] = this.lbl;

 
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'green',
          },
          ticks: {
            fontColor: 'blue',
          }
        }
      ]
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
  // public lineChartPlugins = [pluginAnnotations];

  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;



  constructor() { 
  }

  ngOnInit(): void {
   this.maptempByMonth.forEach(day => {
     let test=new Date(day[0]);
    this.temp.push(day[1].reduce((a, b) => a + b) / day[1].length);
    this.lbl.push(test.getDate()+"/"+test.getMonth()+"/"+test.getFullYear());
  });



  }


}
